# 🔧 Guide de Maintenance - BABA HÔTEL

## 📅 Tâches Quotidiennes

Aucune intervention requise ! Le site fonctionne automatiquement.

---

## 📅 Tâches Hebdomadaires

### Vérifier la Performance (5 min)
```bash
# 1. Accédez à https://vercel.com/dashboard
# 2. Cliquez sur le projet BABA HÔTEL
# 3. Vérifiez "Analytics"
# 4. Cherchez les Web Vitals : LCP, FID, CLS
```

### Vérifier les Erreurs (5 min)
```bash
# Logs Vercel
https://vercel.com/dashboard → Logs → Errors
```

### Monitorer WhatsApp (2 min)
- Répondre aux messages WhatsApp
- Mettre à jour disponibilités si nécessaire

---

## 📅 Tâches Mensuelles

### Google Search Console (10 min)
```
https://search.google.com/search-console
→ Coverage → Vérifier tous les liens indexés
→ Performance → Chercher les baisses
```

### Google Analytics (10 min)
```
Dashboard → Real-time
Vérifier :
- Utilisateurs actifs
- Pages populaires
- Taux de rebond
- Conversions (contacts)
```

### Backups (5 min)
```bash
# GitHub = sauvegarde automatique
# Vérifier que tous les commits sont poussés
git status
git log --oneline -5
```

---

## 📅 Tâches Saisonnières

### Mise à Jour Tarifs (15 min)
```bash
# 1. Éditer lib/constants.ts
nano lib/constants.ts

# 2. Modifier les prix PRICES
export const PRICES = {
  simpleRoom: "8 500 FCFA",  // Ancien: 8 000
  climatisee: "10 500 FCFA", // Ancien: 10 000
  // ... etc
};

# 3. Pousser sur GitHub
git add lib/constants.ts
git commit -m "Mise à jour tarifs février 2026"
git push

# 4. Vercel redéploie automatiquement
# → En ligne en 2-3 minutes
```

### Mise à Jour Photos Galerie (20 min)
```bash
# 1. Optimiser les images
# Utiliser TinyPNG ou ImageOptim

# 2. Placer dans public/images/
cp mon-image.jpg public/images/

# 3. Mettre à jour app/galerie/page.tsx
# Ajouter image à galleryItems

# 4. Pousser et vérifier
git add .
git commit -m "Ajout nouvelles photos galerie"
git push

# 5. Test: https://babahotel-douala.com/galerie
```

### Mise à Jour Services (10 min)
```bash
# 1. Éditer lib/constants.ts SERVICES
# 2. Mettre à jour les descriptions
# 3. git add, commit, push
# 4. Vérifier accueil
```

---

## 🆘 Troubleshooting

### Images ne s'affichent pas

**Symptôme**: Page avec images blanches

**Solution 1**: Vérifier le fichier existe
```bash
ls -la public/images/chambre-simple.jpg
```

**Solution 2**: Réoptimiser l'image
```bash
# Utiliser TinyPNG ou ImageMagick
convert image.jpg -quality 85 image-optimized.jpg
```

**Solution 3**: Clear cache Vercel
```
Vercel Dashboard → Settings → Environment Variables
→ Clear cache (En bas)
```

### Site lent

**Symptôme**: Lighthouse score < 80

**Diagnostic**:
```bash
# 1. Vérifier taille images
du -sh public/images/

# 2. Vérifier fichiers CSS/JS
npm run build

# 3. Accédez à Vercel Analytics
https://vercel.com/dashboard → Analytics
```

**Solution**:
- Optimiser images avec TinyPNG
- Réduire nombre d'images par page
- Contacter Vercel support si persiste

### Formulaire contact ne marche pas

**Actuellement**: Formulaire simule un envoi

**Pour activer l'email**:
```typescript
// app/contact/page.tsx
// Remplacer la simulation par une vraie API

// Option 1: SendGrid
npm install @sendgrid/mail

// Option 2: Mailgun
npm install mailgun.js

// Option 3: Service Next.js natif
// API Route: app/api/send-email/route.ts
```

### Déploiement échoue

**Vérifier**:
```bash
# 1. Build local
npm run build

# 2. Vérifier erreurs
npm run build 2>&1 | head -20

# 3. Vérifier imports
grep -r "from" app/ | grep ".json"

# 4. Pousser la correction
git add .
git commit -m "Fix build error"
git push
```

---

## 🔄 Procédures Récurrentes

### Ajouter une Page

**1. Créer le fichier**
```bash
mkdir -p app/nouvelle-page
touch app/nouvelle-page/page.tsx
```

**2. Ajouter le contenu**
```typescript
export const metadata = {
  title: "Titre de la page",
  description: "Description SEO"
};

export default function NouvellePagePage() {
  return (
    <section>Contenu</section>
  );
}
```

**3. Ajouter au menu**
```typescript
// lib/constants.ts
export const NAV_LINKS = [
  // ...
  { name: "Nouvelle Page", href: "/nouvelle-page" }
];
```

**4. Pousser**
```bash
git add .
git commit -m "Ajout page: Nouvelle Page"
git push
```

### Ajouter une Section

**1. Créer un composant** (optionnel)
```bash
touch components/NouvelleSection.tsx
```

**2. Ajouter à une page**
```typescript
import NouvelleSection from "@/components/NouvelleSection";

export default function Page() {
  return (
    <>
      <NouvelleSection />
    </>
  );
}
```

**3. Pousser**
```bash
git add .
git commit -m "Ajout section: Nouvelle Section"
git push
```

### Mettre à Jour Contenu

**Type**: Texte, prix, descriptions
```bash
# 1. Éditer le fichier
nano lib/constants.ts  # ou app/page.tsx

# 2. Pousser la modification
git add .
git commit -m "Mise à jour [description]"
git push

# 3. En ligne en 1-2 minutes
```

---

## 📈 KPIs à Monitorer

### Performance (Cible: 100)
- Lighthouse Performance: > 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

### Trafic (Mensuel)
- Utilisateurs uniques: +10% mois/mois
- Pages vues: Croissance stable
- Taux rebond: < 50%
- Durée session: > 2 min

### Conversions
- Clics WhatsApp: Tracer avec UTM
- Clics téléphone: Analyser appels
- Formulaire contact: Réponses

### SEO
- Positions Google: Top 10 pour keywords cibles
- Impressions Google: +20% trimestre
- Click-through rate: > 5%

---

## 🔐 Checklist Sécurité

### Mensuel
- [ ] Pas de vulnérabilités npm
  ```bash
  npm audit
  npm update
  ```

- [ ] Données clients protégées
  - Pas d'email dans logs
  - HTTPS partout
  - Formulaires validés

### Trimestriel
- [ ] Audit Vercel
  - Accédez à Settings
  - Vérifier les accès/tokens
  - Révoquer si inutilisé

- [ ] Mises à jour Next.js
  ```bash
  npm update next react
  npm run build
  npm run start
  ```

---

## 📞 Contacts Support

### Vercel (Site down, erreur déploiement)
- Email: support@vercel.com
- Chat: https://vercel.com/support

### GitHub (Code perdu, rollback)
- Issues: https://github.com/kiluazoldick/babahotel/issues

### Domaine (DNS, email)
- Registrar: Vérifier votre fournisseur
- Nameservers: vercel-dns.com

---

## 🚀 Escalade Problèmes

### Niveau 1: Vérifier soi-même (5-10 min)
- [ ] Images manquantes → Ajouter fichier
- [ ] Texte incorrect → Éditer constant.ts
- [ ] Lien cassé → Corriger href

### Niveau 2: Vérifier logs (10-20 min)
- [ ] Vercel build logs
- [ ] Console navigateur (DevTools)
- [ ] Google Search Console

### Niveau 3: Créer issue GitHub
```
Title: [BUG] Description courte
Body:
- Symptôme
- Étapes pour reproduire
- Résultat attendu
- Résultat réel
- Screenshots
```

### Niveau 4: Contacter support
- Vercel pour problèmes infrastructure
- GitHub pour problèmes code

---

## 📚 Ressources Utiles

### Documentation
- [Next.js](https://nextjs.org/docs)
- [Vercel](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)

### Outils
- [TinyPNG](https://tinypng.com) - Optimiser images
- [Google Lighthouse](https://web.dev/measure) - Analyser performance
- [GTmetrix](https://gtmetrix.com) - Détailed metrics
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) - Automated testing

### Communautés
- [Next.js Discord](https://discord.gg/nextjs)
- [Stack Overflow: next.js](https://stackoverflow.com/questions/tagged/next.js)
- [GitHub Discussions](https://github.com/kiluazoldick/babahotel/discussions)

---

## 📋 Changement Log

### v1.0 (5 février 2026)
- ✅ Site initial
- ✅ 5 pages principales
- ✅ 7 composants réutilisables
- ✅ Optimisations SEO, responsive, performance
- ✅ Déploiement Vercel

---

**Dernière mise à jour**: 5 février 2026
**Mainteneur**: BABA HÔTEL
**Support**: 24/7 via WhatsApp
