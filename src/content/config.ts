import { z, defineCollection } from "astro:content";

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  thumbnail: z.string(),
  images: z.array(z.string()),
  github: z.string(),
  demo: z.string(),
  tags: z.array(z.string()),
  sortOrder: z.number(),
});

const workSchema = z.object({
  name: z.string(),
  date: z.string(),
  description: z.string(),
  position: z.string(),
  link: z.string(),
  sortOrder: z.number(),
});

const projectsCollection = defineCollection({
  type: "data",
  schema: projectSchema,
});

const recentProjectsCollection = defineCollection({
  type: "data",
  schema: projectSchema,
});

const workCollection = defineCollection({
  type: "data",
  schema: workSchema,
});

export type CollectionResult<T> = { id: string; collection: string; data: T };
export type ProjectDto = z.infer<typeof projectSchema>;
export type WorkDto = z.infer<typeof workSchema>;

export const collections = {
  projects: projectsCollection,
  recent: recentProjectsCollection,
  work: workCollection,
};
