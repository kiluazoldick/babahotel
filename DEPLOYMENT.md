# Guide de Déploiement - BABA HÔTEL

## 🚀 Déploiement sur Vercel (Recommandé)

### Option 1 : Via GitHub (Auto-déploiement)

1. **Pousser le code sur GitHub**
   ```bash
   git add .
   git commit -m "Initial BABA HÔTEL website"
   git push origin main
   ```

2. **Connecter Vercel**
   - Accédez à https://vercel.com
   - Cliquez sur "New Project"
   - Sélectionnez votre dépôt GitHub
   - Cliquez sur "Import"

3. **Configuration automatique**
   - Vercel détecte Next.js automatiquement
   - Build et déploiement en ~2-3 minutes
   - URL de prévisualisation générée

4. **Déploiements continus**
   - Chaque `git push` déclenche un déploiement
   - Changements en direct en ~1-2 minutes

### Option 2 : CLI Vercel (Manuel)

```bash
# Installation
npm i -g vercel

# Déploiement
vercel

# Suivi
vercel --inspect
```

## 🌐 Domaine Personnalisé

1. **Ajouter domaine dans Vercel**
   - Settings → Domains
   - Entrez `babahotel-douala.com`
   - Suivez les instructions DNS

2. **Records DNS** (exemple Namecheap)
   ```
   Type: A
   Name: @
   Value: 76.76.19.165 (Vercel IP)
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Certificat SSL**
   - Automatique avec Vercel ✅
   - Renouvelé tous les 3 mois

## 🔧 Variables d'Environnement

**Actuellement :** Aucune variable requise (site statique)

Si besoin futur (formulaire d'email, etc.) :
```bash
# .env.local (développement)
NEXT_PUBLIC_API_URL=https://api.example.com

# Vercel Settings → Environment Variables
NEXT_PUBLIC_API_URL=https://api.babahotel.com
API_SECRET_KEY=xxxxx
```

## 📊 Monitoring & Analytics

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Puis dans `app/layout.tsx` :
```typescript
import { Analytics } from '@vercel/analytics/react';

// Dans le JSX
<Analytics />
```

### Web Vitals
- Vercel mesure automatiquement
- Tableau de bord dans https://vercel.com/dashboard
- Alertes si performance dégrade

## ✅ Checklist Pré-Déploiement

- [ ] **Images optimisées**
  ```bash
  # Vérifier que les images existent en /public/images/
  ls -la public/images/
  ```

- [ ] **SEO**
  - [ ] Sitemap.xml généré ✅
  - [ ] Robots.txt présent ✅
  - [ ] Manifest.json valide ✅
  - [ ] Meta tags complètes ✅

- [ ] **Performance**
  - [ ] Images AVIF/WebP ✅
  - [ ] Lazy loading activé ✅
  - [ ] Cache headers configurés ✅

- [ ] **Sécurité**
  - [ ] HTTPS forcé ✅
  - [ ] Headers de sécurité ✅
  - [ ] Pas de secrets dans le code ✅

- [ ] **Fonctionnalité**
  - [ ] Tous les liens fonctionnent
  - [ ] Formulaire contact fonctionne
  - [ ] WhatsApp button cliquable
  - [ ] Maps charge correctement
  - [ ] Responsive sur mobile

## 🧪 Tests Pré-Déploiement

```bash
# Build local
npm run build

# Lancer la version production
npm run start

# Tester à http://localhost:3000
```

### Vérifications
1. **Mobile** - Test sur petit écran (iPhone SE 375px)
2. **Tablette** - Test sur 768px
3. **Desktop** - Test sur 1280px+
4. **Performance** - Lighthouse score > 90
5. **Accessibilité** - Tab navigation, screen reader

## 📈 Post-Déploiement

### Google Search Console
1. Accédez à https://search.google.com/search-console
2. Ajoutez propriété avec domaine
3. Uploadez sitemap.xml manuellement
4. Demandez l'indexation

### Google Analytics
```bash
npm install gtag

# Dans app/layout.tsx
<Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`} />
```

### Monitoring Vercel
- ✅ Alertes sur erreurs 5xx
- ✅ Notifications de déploiement
- ✅ Web Vitals en temps réel

## 🔄 Mises à Jour Futures

### Ajouter une page
1. Créer `app/nouvelle-page/page.tsx`
2. Ajouter route au Header NAV_LINKS
3. Push sur GitHub
4. Vercel redéploie automatiquement

### Modifier tarifs
1. Éditer `lib/constants.ts`
2. Mettre à jour les prix
3. Push sur GitHub
4. En ligne en ~2 minutes

### Ajouter des photos
1. Compresser les images (2-3MB max)
2. Placer dans `/public/images/`
3. Référencer dans le code
4. Redéployer

## 🆘 Troubleshooting

### Images ne s'affichent pas
```bash
# Vérifier que les fichiers existent
ls public/images/

# Ajouter les images manquantes
# Puis pousser et redéployer
```

### Formulaire ne marche pas
- Vercel n'envoie pas d'emails automatiquement
- Besoin d'intégration (SendGrid, Mailgun, etc.)

### Performance lente
```bash
# Analyser les images
npm run build --analyze

# Réduire taille des images
# Utiliser AVIF/WebP
```

### Erreur de déploiement
1. Vérifier les logs Vercel
2. `npm run build` en local pour reproduire
3. Corriger et repousser

## 💡 Bonnes Pratiques

✅ **Faire des commits réguliers**
```bash
git commit -m "Mise à jour tarifs du X novembre"
```

✅ **Déploiements fréquents**
- Petits changements = moins de risques
- Plus facile à déboguer

✅ **Tester en staging d'abord**
- Chaque PR génère une URL de prévisualisation
- Vérifier avant de merger sur main

✅ **Monitorer les performances**
- Vérifier Vercel Analytics hebdomadairement
- Alertes si Web Vitals dégradent

✅ **Backups réguliers**
- GitHub = historique complet
- Jamais perdre de données

## 📞 Support

**Vercel Support** : https://vercel.com/support
**GitHub Issues** : Créer une issue dans le dépôt
**Slack/Discord** : Communautés Next.js pour l'aide

---

**Dernière mise à jour** : 5 février 2026
**Version** : 1.0
**Statut** : Prêt pour production ✅
