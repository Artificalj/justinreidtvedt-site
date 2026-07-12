import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    client: z.string().optional(),
    roles: z.array(z.enum(["Director", "Producer", "Editor"])),
    director: z.string().optional(),
    additionalProducers: z.array(z.string()).optional(),
    category: z.enum(["commercial", "music-video", "narrative"]),
    thumbnail: z.string(),
    videoSrc: z.string(),
    fullVideoSrc: z.string().optional(),
    heroSrc: z.string().optional(),
    heroPoster: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { projects };
