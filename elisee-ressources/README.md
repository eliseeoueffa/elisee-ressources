# Le site de ressources d’Elisée Ouéffa

Site construit avec Astro, hébergé gratuitement sur Cloudflare Pages.

## Les fichiers que tu modifies

Tu n’as besoin de toucher qu’à deux endroits :

- `src/config.ts` : tes liens (LinkedIn, Instagram, Substack), l’identifiant du formulaire Kit de la newsletter et l’identifiant Umami.
- `src/content/ressources/` : un fichier par ressource.

Ta photo est `public/elisee.jpg`. Pour la changer, remplace ce fichier par une autre photo du même nom.

## Ajouter une ressource

1. Dans `src/content/ressources/`, copie un fichier existant (par exemple `organisation.md`) et renomme-le. Le nom du fichier devient l’adresse de la page : `budget.md` donne `/ressources/budget/`.
2. Modifie les textes entre guillemets : titre, texte de la carte, introduction, ce que la personne obtient, les étapes, l’exemple.
3. Mets `order` pour choisir sa place sur l’accueil (1 = en premier).
4. Colle l’identifiant de son formulaire Kit dans `kitFormId`.
5. Enregistre. Si tu le fais sur GitHub, le site se met à jour tout seul en une ou deux minutes.

Pour cacher une ressource sans la supprimer, ajoute la ligne `published: false`.
L’encadré « À savoir » (`note`) et l’exemple (`example`) sont facultatifs : supprime ces lignes si tu n’en veux pas.

Garde toujours les textes entre guillemets droits ("…"), surtout quand ils contiennent un deux-points.

## Brancher Kit

Pour chaque ressource, crée un formulaire dans Kit avec l’email de livraison du skill (« incentive email »). L’identifiant du formulaire est le nombre dans son adresse ou dans le code d’intégration (par exemple `1234567`). Colle-le dans `kitFormId` de la ressource.

Pour la newsletter, crée un formulaire simple et colle son identifiant dans `kitNewsletterFormId` dans `src/config.ts`.

Le site envoie les champs `email_address` et `fields[first_name]` à `https://app.kit.com/forms/<identifiant>/subscriptions`. Si l’adresse indiquée dans le code d’intégration HTML de Kit est différente, adapte-la dans `src/components/KitForm.astro`.

Tant qu’un identifiant est vide, le formulaire s’affiche mais reste désactivé.

## Brancher Umami

Crée le site dans Umami, copie son « Website ID » et colle-le dans `umamiWebsiteId` dans `src/config.ts`. Les clics sur les boutons de ressources, la newsletter et les liens vers tes réseaux sont déjà suivis.

Pour savoir d’où viennent tes visiteurs, ajoute une étiquette à tes liens partagés :
`https://ton-site.pages.dev/?utm_source=linkedin&utm_campaign=nom-du-post`

## Mettre en ligne (une seule fois)

1. Sur GitHub, crée un nouveau dépôt (par exemple `elisee-ressources`), puis « Add file » > « Upload files » et dépose tout le contenu de ce dossier.
2. Sur Cloudflare : Workers & Pages > Create > Pages > Connect to Git, et choisis ton dépôt.
3. Réglages de build : preset « Astro », commande `npm run build`, dossier de sortie `dist`. Si on te demande une version de Node, mets `22`.
4. Lance le déploiement. Ton site est en ligne sur une adresse en `.pages.dev`.
5. Reporte cette adresse dans `astro.config.mjs` (ligne `site:`).

## Voir le site sur ton ordinateur (facultatif)

Avec Node.js 22 installé : `npm install` puis `npm run dev`, et ouvre l’adresse affichée.
