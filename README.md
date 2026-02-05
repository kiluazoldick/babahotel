# BABA HÔTEL - Site Web Officiel

Un site web moderne, responsive et optimisé pour BABA HÔTEL - Confort et élégance à Douala.

## 🏨 À propos

BABA HÔTEL est un établissement d'hébergement haut de gamme proposant :

- **6 types d'hébergements** : Chambres simples, climatisées, VIP, haut standing et studios meublés
- **Tarifs accessibles** : À partir de 8.000 FCFA/nuit
- **Services inclus** : Petit déjeuner buffet, Wifi haut débit, Parking sécurisé
- **Équipements** : Restaurant, Bar, Laverie, Mini salle banquet
- **Disponibilité** : 24h/24, 7j/7

📍 **Ndogbong Zachman – Rue Winner Chapelle, Douala, Cameroun**

## ✨ Caractéristiques du Site

✅ **Responsive Design** - Optimisé pour mobile (320px), tablette et desktop
✅ **SEO Complet** - Métadonnées, sitemap, robots.txt, JSON-LD Schema
✅ **Performance** - Images optimisées (AVIF/WebP), caching intelligent
✅ **Accessibilité** - WCAG 2.1, sémantique HTML, navigation clavier
✅ **PWA Ready** - Manifest.json pour installation mobile
✅ **WhatsApp Direct** - Bouton flottant pour contact instantané
✅ **Google Maps** - Localisation intégrée avec iframe sécurisée
✅ **Galerie Responsive** - Lightbox interactive avec filtrage

## 🚀 Quick Start

### Installation

```bash
npm install
npm run dev
# Le site sera à http://localhost:3000
```

### Build & Deploy

```bash
npm run build
npm start

# Ou déployer sur Vercel directement
vercel
```

## 📱 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Accueil | Hero, services, chambres vedettes, localisation |
| `/chambres-studios` | Chambres & Studios | Galerie complète, tarifs, équipements, FAQ |
| `/tarifs-services` | Tarifs & Services | Tableau de prix, services inclus, promotions |
| `/galerie` | Galerie | Photos responsives avec lightbox, filtrage |
| `/contact` | Contact | Formulaire, moyens de contact, map, FAQ |

## 🎨 Design System

### Couleurs
```css
--baba-blue: #7EC8E3      /* Primaire, boutons, textes importants */
--baba-red: #FF5A5F       /* CTA, actions principales */
--gray-dark: #1F2937      /* Texte principal */
--gray-light: #F3F4F6     /* Arrière-plans alternés */
```

### Police
**Poppins** (Google Fonts) - Weights: 300, 400, 500, 600, 700

### Responsive Breakpoints
- `sm`: 640px (petits mobiles)
- `md`: 768px (tablettes)
- `lg`: 1024px (grandes tablettes/petits desktop)
- `xl`: 1280px (desktop)

## 📁 Structure du Projet

```
/app
  ├── page.tsx                  # Accueil
  ├── layout.tsx                # Layout racine avec SEO
  ├── globals.css               # Styles globaux optimisés
  ├── chambres-studios/page.tsx # Chambres & Studios
  ├── tarifs-services/page.tsx  # Tarifs & Services
  ├── galerie/page.tsx          # Galerie Photos
  └── contact/page.tsx          # Contact & Formulaire

/components
  ├── Header.tsx                # Navigation sticky responsive
  ├── Footer.tsx                # Pied de page 4 colonnes
  ├── Hero.tsx                  # Section hero réutilisable
  ├── RoomCard.tsx              # Carte chambre/studio optimisée
  ├── ServiceCard.tsx           # Carte service
  └── WhatsAppButton.tsx        # Bouton WhatsApp flottant

/lib
  └── constants.ts              # Toutes les données (sites, tarifs, etc.)

/public
  ├── images/                   # Photos de l'hôtel optimisées
  ├── manifest.json             # PWA manifest
  ├── sitemap.xml               # Sitemap pour les moteurs
  ├── robots.txt                # Directives robots
  └── favicon.ico               # Favicon
```

## 🔧 Technologies

- **Next.js 15** - App Router, React Server Components
- **React 19** - UI interactives, formulaires
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Lucide React** - Icônes modernes
- **Image Optimization** - AVIF, WebP, lazy loading

## 🌐 SEO & Performance

### SEO
- ✅ Métadonnées dynamiques par page
- ✅ OpenGraph pour réseaux sociaux
- ✅ JSON-LD Schema pour Google
- ✅ Sitemap XML auto-généré
- ✅ Robots.txt complet
- ✅ Canonical URLs
- ✅ Mobile-friendly certified

### Performance
- ✅ Images optimisées (AVIF/WebP)
- ✅ Lazy loading automatique
- ✅ Cache headers intelligents (31536000s pour images)
- ✅ Compression gzip
- ✅ CSS minifié et purifié
- ✅ Code splitting Next.js
- ✅ Fonts système + Google Fonts

### Responsive
- ✅ Mobile-first approach
- ✅ Textes adaptatifs
- ✅ Grilles flexibles
- ✅ Images responsives
- ✅ Touch-friendly (min 44x44px)

### Accessibilité
- ✅ Sémantique HTML5
- ✅ ARIA labels
- ✅ Contraste WCAG AA+
- ✅ Focus visible
- ✅ Navigation clavier
- ✅ Alt text images

## 📊 Contenu & Tarifs

### Types d'Hébergements
1. **Chambre Simple** - 8.000 FCFA
2. **Chambre Climatisée** - 10.000 FCFA
3. **Chambre Conforme** - 12.000 FCFA
4. **Chambre VIP** - 15.000 FCFA
5. **Chambre Haut Standing** - 17.000 FCFA
6. **Studio Meublé** - 20.000 FCFA

### Services Inclus
- ✅ Petit déjeuner buffet
- ✅ Wifi haut débit gratuit
- ✅ Parking sécurisé
- ✅ Sécurité 24/7

## 📞 Contact

- **Téléphone** : +237 697 31 37 18
- **WhatsApp** : +237 697 31 37 18
- **Email** : contact@babahotel.com
- **Adresse** : Ndogbong Zachman, Douala, CM

## 🔐 Sécurité

- ✅ X-Frame-Options: SAMEORIGIN
- ✅ X-Content-Type-Options: nosniff
- ✅ Referrer-Policy: strict-origin-when-cross-origin
- ✅ DNS Prefetch Control
- ✅ HTTPS recommended

## 📈 Mises à Jour Futures

- [ ] Système de réservation en ligne
- [ ] Paiement intégré (Stripe/PayPal)
- [ ] Blog/Actualités
- [ ] Avis & Témoignages
- [ ] Chat support 24/7
- [ ] Multi-langues (Français/Anglais)
- [ ] Tarifs dynamiques

## 📄 License

© 2026 BABA HÔTEL. Tous droits réservés.
