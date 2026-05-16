# thespendpost.com : Guide complet de déploiement et de gestion

## Ce que tu reçois

Le dossier contient 9 fichiers et 5 articles, soit ton site complet prêt à mettre en ligne :

```
thespendpost/
├── index.html                  → page d'accueil
├── outils.html                 → annuaire de 30+ outils IA procurement
├── guides.html                 → page de guides méthodologiques
├── ressources.html             → newsletters, podcasts, communautés
├── articles.html               → index des articles
├── a-propos.html               → ta présentation
├── style.css                   → tout le design du site
├── script.js                   → toggle de langue FR/EN
├── favicon.svg                 → logo dans l'onglet
└── articles/
    ├── prompts-copilot.html    → 15 prompts Copilot (article SEO majeur)
    ├── prompts-claude.html     → 10 prompts Claude (article SEO majeur)
    ├── cartographier-taches.html → méthodologie d'audit
    ├── s2p-2026.html           → analyse stratégique suites S2P
    └── audit-spend-ia.html     → méthode d'audit de spend
```

Total : 6 pages principales + 5 articles de fond = **11 pages indexables par Google**, c'est un excellent socle SEO de départ.

---

## ÉTAPE 1 : Acheter le nom de domaine (15 min, ~12 €)

Va sur **Gandi.net** (recommandé, basé en France, interface en français claire) ou **OVH**.

1. Recherche `thespendpost.com`
2. S'il est disponible : ajoute au panier, paye (~12 €/an)
3. Pendant l'achat, **NE PRENDS PAS** l'hébergement (on utilise GitHub Pages, gratuit). Décoche tout ce qui n'est pas le domaine seul + la confidentialité WHOIS (importante pour protéger ton anonymat (souvent gratuite chez Gandi)).

⚠️ Si `thespendpost.com` est pris, alternatives à tester dans l'ordre :
- `sourcingai.com`
- `thespendpost.fr`
- `sourcingai.fr`
- `achats-ai.com`

---

## ÉTAPE 2 : Créer ton compte GitHub (15 min)

1. Va sur **github.com** → Sign up
2. **Important** : utilise l'email dédié au projet `thespendpost.editorial@gmail.com` (créé séparément de ton email perso pour cloisonner le projet).
3. Choisis un **nom d'utilisateur neutre** (par ex. `thespendpost-editorial`). Pas ton prénom.
4. **Active la 2FA immédiatement** (Settings → Password and authentication → Two-factor authentication). Utilise l'app Microsoft Authenticator ou Google Authenticator.

---

## ÉTAPE 3 : Créer le dépôt et déposer les fichiers (30 min)

1. Une fois connectée à GitHub, clique sur **"New repository"** (bouton vert en haut à droite).
2. **Nom du dépôt** : exactement `[ton-nom-utilisateur].github.io` (par exemple : `thespendpost-editorial.github.io`). Ce nom magique active GitHub Pages automatiquement.
3. Coche **"Public"** (obligatoire pour GitHub Pages gratuit)
4. Coche **"Add a README file"**
5. Clique **"Create repository"**

Puis pour uploader les fichiers (le plus simple) :

1. Sur la page du dépôt fraîchement créé, clique **"Add file" → "Upload files"**
2. Glisse-dépose tous les fichiers du dossier `thespendpost` (sauf le dossier `articles/` que tu uploaderas après)
3. En bas, écris un message de commit : `Initial site upload`
4. Clique **"Commit changes"**
5. **Pour le dossier articles** : retour à la racine du dépôt → clique **"Add file" → "Create new file"** → tape `articles/prompts-copilot.html` dans le nom (le `/` crée automatiquement le dossier) → colle le contenu → commit. Répète pour chaque article.

💡 Plus simple en alternative : installe **GitHub Desktop** (logiciel gratuit), connecte ton compte, et synchronise tout en glisser-déposer.

---

## ÉTAPE 4 : Activer GitHub Pages (5 min)

1. Dans ton dépôt, va dans **Settings → Pages** (menu de gauche)
2. Sous "Source", sélectionne **"Deploy from a branch"**
3. Branch : **main** / Folder : **/ (root)**
4. Clique **Save**
5. Attends 2-3 minutes. Le site est en ligne sur `https://[ton-nom-utilisateur].github.io`

**Vérifie** : ouvre cette URL dans ton navigateur. Tu dois voir ton site complet.

---

## ÉTAPE 5 : Connecter ton nom de domaine (20 min)

**Côté GitHub** :
1. Settings → Pages → "Custom domain" → tape `thespendpost.com` (ou ton domaine acheté) → Save
2. Coche **"Enforce HTTPS"** (apparaît après quelques minutes)

**Côté Gandi (ou OVH)** :
1. Dans ton compte Gandi → ton domaine → "DNS Records"
2. Supprime les enregistrements par défaut
3. Ajoute ces enregistrements (copie exactement) :

```
Type: A    | Name: @    | Value: 185.199.108.153
Type: A    | Name: @    | Value: 185.199.109.153
Type: A    | Name: @    | Value: 185.199.110.153
Type: A    | Name: @    | Value: 185.199.111.153
Type: CNAME| Name: www  | Value: [ton-nom-utilisateur].github.io
```

4. Sauvegarde. Compte **24-48h** pour la propagation DNS (souvent beaucoup plus rapide, mais peut prendre du temps).

**Vérification** : tape `https://thespendpost.com` dans ton navigateur. Tu dois voir ton site, avec un cadenas vert (HTTPS actif).

---

## ÉTAPE 6 : Indexer le site sur Google (15 min)

C'est **indispensable** pour avoir du trafic SEO.

1. Va sur **Google Search Console** (search.google.com/search-console)
2. Connecte-toi avec ton email dédié au projet
3. Ajoute ton domaine `thespendpost.com` (méthode "Domaine" recommandée)
4. Suis les instructions de vérification (généralement un enregistrement TXT à ajouter dans tes DNS Gandi)
5. Une fois validé, va dans **"Sitemaps"** → soumets `https://thespendpost.com/sitemap.xml` (note : tu n'en as pas pour l'instant, voir section ci-dessous)
6. Dans **"Inspection d'URL"**, soumets ta page d'accueil pour indexation immédiate, puis les 5 articles un par un

Google va commencer à indexer ton site dans les 7-14 jours.

⚠️ Pour les premiers résultats SEO sérieux, compte **3-6 mois minimum**.

---

## PROGRAMMES D'AFFILIATION À ACTIVER

Voici les 12 programmes que je te recommande de demander dans les 30 premiers jours. Classés par accessibilité.

### Très accessible (candidature simple, validation rapide)

| Outil | Programme | Commission typique | Lien d'inscription |
|---|---|---|---|
| **Notion** | Notion Affiliate Program | 50% sur les 12 premiers mois | notion.so/affiliates |
| **ChatGPT/OpenAI API** | OpenAI Partner Program | Variable | platform.openai.com/partners |
| **Make** (ex-Integromat) | Make Affiliate | 30% récurrent | make.com/en/partners |
| **Zapier** | Zapier Affiliate | Jusqu'à 30% | zapier.com/partner |
| **Coursera Business** | Affiliate Program | Variable | partners.coursera.org |
| **LinkedIn Learning** | LinkedIn Affiliate | 35% sur 1ère commande | impact.com (réseau partenaire) |

### Modérément accessible (candidature avec validation, mais réaliste)

| Outil | Programme | Commission typique | À demander |
|---|---|---|---|
| **Procurify** | Channel Partner Program | 10-15% revenu 1ère année | procurify.com/partners |
| **Spendesk** | Spendesk Partner | Lead-based | spendesk.com/partners |
| **Pivot** | Referral Program | Sur demande | pivotapp.ai (contact form) |
| **Zip HQ** | Partners Program | Sur demande | ziphq.com/partners |

### Long terme (à viser après 6-12 mois)

| Outil | Programme | Pourquoi attendre |
|---|---|---|
| **SAP Ariba** | Solution Extensions / Partner | Demande statut entreprise, plus structuré |
| **Coupa** | Coupa Advantage Partner | Idem |
| **Ivalua** | Partner Program | Idem |

### Comment faire la demande

Pour chaque programme, prépare un email court (5 lignes max) qui présente thespendpost.com :

> Bonjour,
>
> Je gère thespendpost.com, une publication éditoriale indépendante francophone/anglophone dédiée à l'IA appliquée aux Achats. Notre audience cible : praticiens Achats en grandes entreprises et ETI.
>
> Nous mentionnons [nom de l'outil] dans notre annuaire éditorial et serions intéressés par votre programme d'affiliation/référence.
>
> Pouvez-vous me communiquer les modalités d'inscription ?
>
> Cordialement,
> La rédaction de thespendpost.com

---

## INTÉGRATION DES LIENS D'AFFILIATION

Quand tu obtiens tes liens d'affiliation, voici comment les ajouter au site.

Ouvre `outils.html` sur GitHub (clique sur le fichier puis sur le petit crayon "Edit"). Cherche les liens vers les sites officiels, par exemple :

```html
<a href="https://www.fairmarkit.com" class="tool-cta" target="_blank" rel="noopener">Site officiel →</a>
```

Remplace simplement l'URL par ton lien d'affiliation :

```html
<a href="https://ton-lien-affilie-fairmarkit.com" class="tool-cta" target="_blank" rel="noopener">Site officiel →</a>
```

Commit la modification, GitHub Pages déploie automatiquement.

⚠️ **Obligation légale FR** : si tu utilises des liens d'affiliation, tu dois l'indiquer. La mention en pied de page "Veille éditoriale indépendante" doit être complétée par une mention "Certains liens sont affiliés" quand tu en auras intégré.

---

## TEMPLATE DE POST LINKEDIN MENSUEL

Voici le template à réutiliser chaque mois pour partager un article sans te dévoiler comme autrice :

```
Article intéressant trouvé ce matin sur [thème de l'article].
Particulièrement pertinent, le passage sur [détail précis qui montre
que tu as vraiment lu].

Publié sur The Spend Post, une publication éditoriale sur l'IA
appliquée aux Achats que je trouve bien faite.

👉 [lien vers l'article]

#Achats #Procurement #IA #IntelligenceArtificielle
```

Publie de préférence **mardi ou mercredi entre 8h30 et 10h** (meilleure visibilité B2B en France).

---

## ROUTINE DE MISE À JOUR MENSUELLE (2h max)

Une fois par mois, tu fais ces 4 actions :

1. **Ajouter 1-2 nouveaux outils** dans `outils.html` (5 min chacun, tu copies un bloc existant et tu modifies)
2. **Publier 1 nouvel article** : tu peux me demander de le rédiger dans une nouvelle conversation, je te livre le HTML prêt à uploader
3. **Mettre à jour la section "Outils phares ce mois-ci"** sur la page d'accueil (changer les 4 outils mis en avant)
4. **Publier un post LinkedIn** avec le template ci-dessus

Total : 1h30-2h par mois pour faire vivre le site.

---

## CHECKLIST DE LANCEMENT : 7 JOURS

- [ ] Jour 1 : Acheter le nom de domaine sur Gandi
- [ ] Jour 2 : Créer compte GitHub avec 2FA + créer le dépôt
- [ ] Jour 3 : Uploader tous les fichiers, vérifier le site sur l'URL github.io
- [ ] Jour 4 : Configurer le custom domain et les DNS chez Gandi
- [ ] Jour 5 : Attendre la propagation DNS, vérifier HTTPS
- [ ] Jour 6 : Soumettre à Google Search Console
- [ ] Jour 7 : Premier post LinkedIn de partage discret

---

## SUPPORT

Pour toute question technique pendant le déploiement, ou pour la prochaine vague de contenus (nouveaux articles, nouveaux outils à ajouter, version anglaise complète), reviens me voir dans une nouvelle conversation avec le contexte. Je peux régénérer n'importe quelle page, ajouter des fonctionnalités (newsletter, formulaire de contact), ou faire évoluer le design.

Bon lancement ! 🚀
