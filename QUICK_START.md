# 🚀 Quick Start Guide - Mo Fitness

## Setup rapide (5 minutes)

### 1. Installation des dépendances
```bash
npm install
```

### 2. Configuration
Créez le fichier `.env.local` :
```bash
echo "NEXT_PUBLIC_API_BASE_URL=http://localhost:3001" > .env.local
```

### 3. Ajoutez votre logo
- Copiez votre logo dans `/public/mofitness-logo.jpg`
- Voir `LOGO_INSTRUCTIONS.md` pour plus de détails

### 4. Lancez le projet
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) 🎉

---

## ⚙️ Configuration Backend

Votre backend doit exposer un endpoint :

**POST** `/waiting-list`

```json
// Request Body
{
  "name": "Jean Dupont",
  "email": "jean@example.com",
  "phone": "+33 6 00 00 00 00"  // optionnel
}
```

```json
// Success Response (200/201)
{
  "message": "Success"
}
```

---

## 🎨 Personnalisation rapide

### Changer les textes
Éditez `/src/app/page.tsx` :
- Ligne 27-29 : Titre principal
- Ligne 33-35 : Sous-titre
- Ligne 37-40 : Description

### Changer les couleurs
Éditez `/src/app/globals.css` :
- `--accent: #ef4444` : Couleur principale (rouge par défaut)

---

## 📱 Testez le formulaire

1. Assurez-vous que votre backend est lancé
2. Remplissez le formulaire sur la page
3. Vérifiez que les données arrivent bien à votre API

---

## 🚢 Déploiement

### Sur Vercel (recommandé - gratuit)
```bash
npm run build
```

1. Push sur GitHub
2. Importez sur [vercel.com](https://vercel.com)
3. Ajoutez la variable d'environnement `NEXT_PUBLIC_API_BASE_URL`
4. Déployez !

---

## 🆘 Problèmes courants

### Le logo ne s'affiche pas
- Vérifiez que le fichier est bien nommé `mofitness-logo.jpg`
- Vérifiez qu'il est dans le dossier `/public/`

### Le formulaire ne fonctionne pas
- Vérifiez que `NEXT_PUBLIC_API_BASE_URL` est défini dans `.env.local`
- Vérifiez que votre backend est accessible
- Ouvrez la console du navigateur pour voir les erreurs

### Erreurs TypeScript
```bash
npm run build
```
Si ça compile, tout va bien ! Les warnings CSS sont normaux avec Tailwind v4.

---

**Besoin d'aide ?** Consultez le `README.md` complet ou contactez l'équipe dev.

🐺 **Wolf Mentality** - Le commencement c'est maintenant !
