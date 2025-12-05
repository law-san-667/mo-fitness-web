# Mo Fitness - Coming Soon Page 🐺

Site de teasing pour **Mo Fitness**, la marque de coaching fitness avec la mentalité du loup.

## 🚀 Fonctionnalités

- ✨ Design moderne avec thème sombre et effets visuels
- 📱 Responsive (mobile, tablette, desktop)
- 🎨 Animations fluides et élégantes
- 📝 Formulaire de liste d'attente avec validation
- 🔒 Gestion des erreurs et feedback utilisateur
- 🌐 Textes en français avec l'esprit de la marque
- ⚡ Développé avec Next.js 16, React 19, TypeScript et Tailwind CSS

## 🛠️ Installation

1. **Installer les dépendances**
```bash
npm install
```

2. **Configurer les variables d'environnement**

Créer un fichier `.env.local` à la racine du projet :
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

3. **Ajouter le logo**

Placez votre logo `mofitness-logo.jpg` dans le dossier `/public/`

## 🎯 Développement

Lancer le serveur de développement :
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📦 Build & Production

```bash
npm run build
npm start
```

## 🔌 API Backend

Le formulaire envoie une requête POST vers `/waiting-list` :

```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (optional)"
}
```

**Endpoint** : `${NEXT_PUBLIC_API_BASE_URL}/waiting-list`

## 📂 Structure

```
src/
├── app/
│   ├── page.tsx          # Page principale (teasing)
│   ├── layout.tsx        # Layout racine
│   └── globals.css       # Styles globaux
└── components/
    └── WaitlistForm.tsx  # Formulaire
```

## 🌟 Technologies

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

---

**Mo Fitness** - Wolf Mentality 🐺 | Le commencement c'est maintenant

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# mo-fitness-web
