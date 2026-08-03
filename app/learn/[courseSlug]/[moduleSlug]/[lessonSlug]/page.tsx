import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { canOpenModule, getStudentEmail } from "@/lib/enrollment";
import { getLearningCourse, getModule } from "@/content/learning";

interface Params {
  params: Promise<{
    courseSlug: string;
    moduleSlug: string;
    lessonSlug: string;
  }>;
}

/**
 * Basic video URL -> embeddable URL conversion. Handles YouTube, Vimeo, Mux,
 * and Google Drive preview links. Everything else is rendered as an <a>.
 */
function toEmbedUrl(url: string): { embed: string; provider: string } | null {
  try {
    const u = new URL(url);
    // YouTube
    if (u.hostname.includes("youtube.com") && u.searchParams.get("v")) {
      return {
        embed: `https://www.youtube.com/embed/${u.searchParams.get("v")}`,
        provider: "youtube",
      };
    }
    if (u.hostname === "youtu.be") {
      return {
        embed: `https://www.youtube.com/embed${u.pathname}`,
        provider: "youtube",
      };
    }
    // Vimeo
    if (u.hostname.includes("vimeo.com")) {
      const id = u.pathname.replace(/^\//, "").split("/")[0];
      if (id) return { embed: `https://player.vimeo.com/video/${id}`, provider: "vimeo" };
    }
    // Google Drive
    if (u.hostname.includes("drive.google.com")) {
      const match = u.pathname.match(/\/file\/d\/([^/]+)/);
      if (match) {
        return {
          embed: `https://drive.google.com/file/d/${match[1]}/preview`,
          provider: "drive",
        };
      }
    }
    // Mux stream
    if (u.hostname.includes("stream.mux.com")) {
      return { embed: url, provider: "mux" };
    }
  } catch {
    /* fall through */
  }
  return null;
}

export default async function LessonPage({ params }: Params) {
  const { courseSlug, moduleSlug, lessonSlug } = await params;
  const email = await getStudentEmail();
  if (!email) redirect("/learn");

  const allowed = await canOpenModule(email, courseSlug, moduleSlug);
  if (!allowed) redirect("/learn");

  const course = getLearningCourse(courseSlug);
  if (!course) redirect("/learn");
  const mod = getModule(course, moduleSlug);
  if (!mod) redirect("/learn");
  const lesson = mod.lessons.find((l) => l.slug === lessonSlug);
  if (!lesson) redirect(`/learn/${courseSlug}/${moduleSlug}`);

  const embed = lesson.videoUrl ? toEmbedUrl(lesson.videoUrl) : null;

  return (
    <>
      <PageHero
        eyebrow={`${course.title} · ${mod.title}`}
        title={lesson.title}
        subtitle={lesson.description ?? undefined}
      >
        <Link
          href={`/learn/${course.slug}/${mod.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-dark hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} aria-hidden /> Back to module
        </Link>
      </PageHero>

      <Section tone="light">
        <Container>
          <FadeInUp>
            <Card padding="loose">
              {lesson.videoUrl ? (
                embed ? (
                  <div className="aspect-video w-full overflow-hidden rounded-md bg-base">
                    <iframe
                      src={embed.embed}
                      title={lesson.title}
                      className="h-full w-full"
                      allow="fullscreen; encrypted-media; picture-in-picture"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <div className="rounded-md border border-border-light bg-light p-6 text-sm text-muted-light">
                    Video is hosted externally. Open the link:{" "}
                    <a
                      href={lesson.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-strong hover:underline inline-flex items-center gap-1"
                    >
                      {lesson.videoUrl} <ExternalLink size={12} aria-hidden />
                    </a>
                  </div>
                )
              ) : (
                <div className="rounded-md border border-dashed border-border-light bg-light p-6 text-sm text-muted-light">
                  This lesson does not have a video yet. Materials below.
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                <Chip tone="accent">{lesson.type}</Chip>
                {lesson.estimatedMinutes ? (
                  <Chip>{lesson.estimatedMinutes} min</Chip>
                ) : null}
              </div>

              {lesson.materials && lesson.materials.length > 0 ? (
                <div className="mt-8">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-light">
                    Materials
                  </p>
                  <ul className="mt-3 grid gap-2">
                    {lesson.materials.map((m) => (
                      <li key={m.title}>
                        <a
                          href={m.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 rounded-md border border-border-light bg-white p-3 hover:border-accent/40 transition-colors"
                        >
                          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent-strong">
                            <Download size={16} aria-hidden />
                          </span>
                          <span className="text-sm font-medium">{m.title}</span>
                          <ExternalLink
                            size={12}
                            aria-hidden
                            className="ml-auto text-muted-light"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </Card>
          </FadeInUp>

          <div className="mt-8 flex justify-between">
            <Button
              href={`/learn/${course.slug}/${mod.slug}`}
              variant="secondary-light"
              size="sm"
            >
              <ArrowLeft size={14} aria-hidden /> Back to module
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
