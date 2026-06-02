"use client";

import { NextStudio } from "next-sanity/studio";
import { Lock } from "lucide-react";
import config from "@/sanity.config";
import { sanityConfigured } from "@/studio/env";

/**
 * Sanity Studio mounted at /studio/* — a real browser-based content editor.
 *
 * Auth is handled by Sanity itself (you log in with the Sanity account that
 * owns the project on first visit). When the project ID is not configured,
 * we render a setup screen that explains exactly which env vars to set.
 */
export const dynamic = "force-static";

export default function StudioPage() {
  if (!sanityConfigured) {
    return <StudioSetupScreen />;
  }
  return <NextStudio config={config} />;
}

function StudioSetupScreen() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "#0A0A0B",
        color: "#FAFAFA",
      }}
    >
      <div
        style={{
          maxWidth: 640,
          padding: "2.5rem",
          borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 8,
            background: "rgba(34,211,238,0.15)",
            color: "#22D3EE",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 24,
          }}
        >
          <Lock size={20} aria-hidden />
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 600, margin: 0 }}>
          Sanity Studio not configured yet.
        </h1>
        <p style={{ color: "#A1A1AA", marginTop: 12, lineHeight: 1.6 }}>
          The CMS is wired up — but a Sanity project ID is missing. Set it up
          in three steps:
        </p>
        <ol
          style={{
            color: "#FAFAFA",
            marginTop: 20,
            paddingLeft: 20,
            lineHeight: 1.7,
          }}
        >
          <li>
            Create a free Sanity project at{" "}
            <a
              href="https://sanity.io/manage"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#22D3EE" }}
            >
              sanity.io/manage
            </a>
            .
          </li>
          <li>Copy the project ID and dataset name (usually <code>production</code>).</li>
          <li>
            Add them to <code>.env.local</code>:
            <pre
              style={{
                background: "#111114",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
                padding: 16,
                marginTop: 8,
                fontSize: 13,
                overflow: "auto",
              }}
            >{`NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production`}</pre>
          </li>
          <li>
            In the Sanity Manage dashboard, add{" "}
            <code>http://localhost:3000</code> (and your production domain) to
            the <strong>CORS Origins</strong> list with &ldquo;Allow
            credentials&rdquo; enabled.
          </li>
          <li>Restart the dev server: <code>pnpm dev</code>.</li>
        </ol>
        <p style={{ color: "#A1A1AA", marginTop: 24, fontSize: 14, lineHeight: 1.6 }}>
          Until then, every page on the site renders from the TypeScript
          content files in <code>content/*.ts</code> — nothing is broken,
          editing just isn&rsquo;t live in the browser yet.
        </p>
      </div>
    </main>
  );
}
