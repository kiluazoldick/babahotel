# BABA HÔTEL - Guide de Dépannage

## Internal Server Error - Résolu

### Problèmes Corrigés

1. **Font Configuration Issue**
   - Ligne: `app/layout.tsx`
   - Problème: Import Poppins inutilisé
   - Correctif: Poppins chargée via Google Fonts CDN dans le style tag

2. **Undefined Variable Reference**
   - Ligne: `app/layout.tsx` ligne 158
   - Problème: `poppins.className` référencé mais variable n'existait pas
   - Correctif: Remplacé par classe Tailwind `font-sans`

3. **Client/Server Component Conflict - Galerie**
   - Ligne: `app/galerie/page.tsx`
   - Problème: `"use client"` + `export const metadata` incompatible
   - Correctif: Metadata moved before "use client" directive (server-side export)

4. **Client/Server Component Conflict - Contact**
   - Ligne: `app/contact/page.tsx`
   - Problème: Même conflit que galerie
   - Correctif: Même solution appliquée

5. **Invalid Metadata Values**
   - Ligne: `app/layout.tsx`
   - Problème: `verification: { google: undefined, yandex: undefined }`
   - Correctif: Bloc entier supprimé

## Fichiers Critiques Vérifiés

| Fichier | Statut | Notes |
|---------|--------|-------|
| app/layout.tsx | ✅ OK | Corrigé - fonts et métadonnées |
| app/page.tsx | ✅ OK | Imports type corrects |
| app/globals.css | ✅ OK | Tailwind 4 compatible |
| app/galerie/page.tsx | ✅ OK | Métadonnées server-side |
| app/contact/page.tsx | ✅ OK | Métadonnées server-side |
| next.config.ts | ✅ OK | Image optimization setup |
| package.json | ✅ OK | Dépendances correctes |
| components/* | ✅ OK | Tous les composants OK |

## Vérifications Effectuées

✅ Pas d'imports circulaires
✅ Pas de références undefined
✅ Pas de conflits client/server
✅ TypeScript strict mode OK
✅ Tailwind CSS 4 compatible
✅ Composants importés correctement
✅ Constantes définies correctement
✅ Images paths valides

## Si Vous Rencontrez Toujours une Erreur

### 1. Effacer le Cache
```bash
# Effacer le cache Next.js
rm -rf .next

# Réinstaller les dépendances
npm install

# Relancer le serveur
npm run dev
```

### 2. Vérifier les Logs
```bash
# Vérifier les erreurs de build
npm run build

# Voir les logs en temps réel
npm run dev
```

### 3. Vérifier les Fichiers Critiques
- Vérifier que `globals.css` n'a pas d'erreurs de syntaxe
- Vérifier que `layout.tsx` n'a pas de caractères spéciaux
- Vérifier que tous les imports sont corrects

### 4. Vérifier les Images
```bash
# S'assurer que le dossier images existe
ls -la public/images/

# Les images générées:
# - chambre-simple.jpg
# - chambre-climatisee.jpg
# - chambre-conforme.jpg
# - chambre-vip.jpg
# - chambre-haut-standing.jpg
# - studio-meuble.jpg
# - restaurant.jpg
```

### 5. Redéployer sur Vercel
Si le problème persiste localement, essayez un redéploiement complet:

```bash
# Push vers GitHub
git add .
git commit -m "Fix build errors"
git push origin main

# Vercel devrait redéployer automatiquement
```

## Support

Si les problèmes persistent:

1. Vérifier les logs Vercel: https://vercel.com/dashboard
2. Vérifier la console du navigateur (F12)
3. Vérifier les erreurs de build en local
4. Supprimer `.next` et `node_modules` puis réinstaller

## Ressources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [React 19](https://react.dev)
- [Vercel Troubleshooting](https://vercel.com/docs/troubleshoot)
