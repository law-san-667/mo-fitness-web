# Instructions pour ajouter le logo

Pour que le site fonctionne correctement, vous devez ajouter votre logo dans le dossier `public/`.

## Étapes :

1. Prenez votre fichier image du logo Mo Fitness (celui avec le coureur et le bonnet de Noël)
2. Renommez-le en : `mofitness-logo.jpg`
3. Copiez-le dans le dossier : `/public/mofitness-logo.jpg`

## Formats supportés :

- JPG/JPEG (recommandé)
- PNG
- WebP

Si vous utilisez un format différent, modifiez l'extension dans le fichier `/src/app/page.tsx` :

```tsx
<Image
  src="/mofitness-logo.png"  // Changez l'extension ici
  alt="Mo Fitness Logo"
  // ...
/>
```

## Recommandations :

- **Résolution recommandée** : Au moins 600px de largeur
- **Fond transparent** : Préférable pour un meilleur rendu
- **Ratio** : Environ 3:1 (largeur:hauteur) pour un affichage optimal
