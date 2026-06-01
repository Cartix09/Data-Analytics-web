import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { CourseCard } from "@/components/courses/CourseCard";
import { featuredCourses } from "@/content/courses";
import type { ShowcaseVariant } from "@/components/dashboard-mockup/ShowcaseDashboard";

const variants: ShowcaseVariant[] = ["sales", "ops", "marketing"];

export function FeaturedCourses() {
  const list = featuredCourses();
  return (
    <Section tone="light">
      <Container>
        <FadeInUp className="max-w-2xl">
          <Eyebrow>Courses</Eyebrow>
          <h2 className="mt-4 text-display-md md:text-display-lg text-balance">
            Programs built around outcomes.
          </h2>
          <p className="mt-4 text-muted-light leading-relaxed">
            Cohort and self-paced programs in the tools analysts actually use at work — taught by a practitioner.
          </p>
        </FadeInUp>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {list.map((course, i) => (
            <FadeInUp key={course.slug} delay={i * 0.05} className="h-full">
              <CourseCard course={course} variant={variants[i % variants.length]} />
            </FadeInUp>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-strong hover:text-text-on-light transition-colors"
          >
            View all courses
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
