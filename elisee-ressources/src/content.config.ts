import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const ressources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ressources' }),
  schema: z.object({
    title: z.string(),
    type: z.string(),              // ex. « Skill », « Template », « Guide »
    order: z.number().default(100), // plus petit = affiché en premier
    published: z.boolean().default(true),
    card: z.string(),              // texte court affiché sur la carte de l’accueil
    intro: z.string(),
    benefits: z.array(z.string()).default([]),
    note: z.string().optional(),   // encadré « À savoir »
    steps: z.array(z.string()).default([]),
    example: z
      .object({ you: z.string(), agent: z.string() })
      .optional(),
    delivery: z.string().default('La ressource complète t’est envoyée par email.'),
    kitFormId: z.string().default(''), // identifiant du formulaire Kit de cette ressource
  }),
});

export const collections = { ressources };
