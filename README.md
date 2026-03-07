# 🖥️ Portfolio BTS SIO SISR — Alex Moreau

> Portfolio personnel d'étudiant en BTS SIO option SISR, hébergeable sur GitHub Pages.

![Preview](https://img.shields.io/badge/BTS%20SIO-SISR-00ff88?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PC9zdmc+)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## ✨ Fonctionnalités

- **Design terminal / tech** — Esthétique sombre inspirée des outils d'administration
- **Loader animé** — Séquence d'initialisation au chargement
- **Sections complètes** — À propos, Compétences, Projets, Veille technologique, Contact
- **Terminal interactif** — Bloc CLI illustrant le profil technique
- **Scroll reveal** — Animations au défilement
- **100% responsive** — Mobile, tablette, desktop
- **Easter egg Konami** 🎮 — ↑↑↓↓←→←→BA

## 📁 Structure du projet

```
portfolio-bts-sio-sisr/
├── index.html              # Page principale
├── css/
│   └── style.css           # Styles (CSS variables, animations)
├── js/
│   └── main.js             # Interactions et animations
├── assets/
│   └── CV_Alex_Moreau.pdf  # CV (à ajouter)
├── projets/                # Pages de détail des projets (optionnel)
│   ├── infra-reseau.html
│   ├── active-directory.html
│   └── audit-securite.html
└── README.md
```

## 🚀 Mise en ligne sur GitHub Pages

1. **Fork ou clone** ce dépôt
2. **Personnalise** le contenu (nom, projets, liens, etc.)
3. Sur GitHub : `Settings → Pages → Source: main branch / root`
4. Ton portfolio sera accessible à : `https://ton-username.github.io/nom-du-repo`

## ✏️ Personnalisation

### Changer les informations personnelles
Dans `index.html`, remplace :
- `Alex Moreau` → ton prénom et nom
- `alex.moreau@email.com` → ton email
- `linkedin.com/in/alexmoreau` → ton profil LinkedIn
- `github.com/alexmoreau` → ton profil GitHub
- `Lycée Jean Moulin, Lyon` → ton établissement
- `TechNet Solutions` → ton entreprise d'alternance

### Ajouter un projet
Copie un bloc `<article class="project-card">` et adapte le contenu.

### Modifier les couleurs
Dans `css/style.css`, édite les variables CSS :
```css
:root {
  --accent: #00ff88;    /* Vert principal */
  --accent2: #00aaff;   /* Bleu secondaire */
  --accent3: #ff6b35;   /* Orange veille */
}
```

## 📋 Sections du portfolio

| Section | Description |
|---------|-------------|
| **Hero** | Accroche, nom, spécialité, CTA |
| **À propos** | Présentation + terminal CLI |
| **Compétences** | 6 domaines : Systèmes, Réseaux, Virtualisation, Sécu, Automatisation, Monitoring |
| **Projets** | 5 projets avec tags, tech stack et liens |
| **Veille technologique** | 4 sujets de veille datés + sources |
| **Contact** | Email, LinkedIn, GitHub |

## 🛠️ Technologies utilisées

- HTML5 sémantique
- CSS3 (Grid, Flexbox, Custom Properties, Animations)
- Vanilla JavaScript (IntersectionObserver, animations)
- Google Fonts : [Syne](https://fonts.google.com/specimen/Syne) + [Space Mono](https://fonts.google.com/specimen/Space+Mono)

## 📄 Licence

Libre d'utilisation pour usage personnel et éducatif.

---

*Fait avec ❤️ pour les étudiants BTS SIO SISR*
