import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./studio/schemas";
import { structure } from "./studio/structure";
import { apiVersion, dataset, projectId, studioBasePath } from "./studio/env";

export default defineConfig({
  name: "anlytics",
  title: "ANLYTICS Content",
  basePath: studioBasePath,
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});
