import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";
import { parse } from "smol-toml";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/blog";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

export const CV_PATH = "src/data/cv.toml";

// Each top-level array in cv.toml (e.g. [[work]]) becomes its own collection.
// Empty tables (a bare [[conferences]] placeholder) are skipped.
const cvSection = (key: string) =>
  file(CV_PATH, {
    parser: text => {
      const entries = (parse(text)[key] ?? []) as Record<string, unknown>[];
      return entries
        .filter(entry => Object.keys(entry).length > 0)
        .map((entry, i) => ({ id: `${key}-${i}`, ...entry }));
    },
  });

const work = defineCollection({
  loader: cvSection("work"),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    description: z.string().optional(),
  }),
});

const education = defineCollection({
  loader: cvSection("education"),
  schema: z.object({
    institution: z.string(),
    degree: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
  }),
});

const publication = defineCollection({
  loader: cvSection("publication"),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    isFirstAuthor: z.boolean().default(false),
    publicationDate: z.coerce.date(),
    journal: z.string(),
    doi: z.string().optional(),
  }),
});

const conferences = defineCollection({
  loader: cvSection("conferences"),
  schema: z.object({
    name: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    title: z.string(),
    authors: z.string(),
    isFirstAuthor: z.boolean().default(false),
    type: z.enum(["presentation", "poster"]).optional(),
    hasProceedings: z.boolean().default(false),
    url: z.string().url().optional(),
  }),
});

const news = defineCollection({
  loader: cvSection("news"),
  schema: z.object({
    date: z.coerce.date(),
    text: z.string(),
  }),
});

export const collections = {
  blog,
  work,
  education,
  publication,
  conferences,
  news,
};
