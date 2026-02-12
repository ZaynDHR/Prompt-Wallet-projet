# Cahier des Charges — Prompt Wallet

**Projet :** Prompt Wallet  
**Auteur :** Zayn Daher  
**Formation :** Bachelor Développement Web — L'École Multimédia  
**Version :** 1.0.0  
**Date :** 10 février 2026

---

## 1. Présentation du projet

### 1.1 Contexte

Prompt Wallet est une application de bureau développée dans le cadre du cursus Bachelor Développement Web à L'École Multimédia. Elle répond au besoin croissant des professionnels et utilisateurs d'IA de stocker, organiser et réutiliser efficacement leurs prompts.

### 1.2 Objectifs

- Fournir un outil de gestion de prompts pour l'IA en local (sans dépendance cloud)
- Permettre l'organisation par catégories métier
- Offrir un système de champs dynamiques pour rendre les prompts réutilisables
- Garantir la confidentialité des données (stockage local uniquement)

### 1.3 Cible

- Développeurs utilisant des outils d'IA (ChatGPT, Copilot, etc.)
- Créateurs de contenu, marketeurs, e-commerçants
- Tout professionnel souhaitant organiser ses prompts IA

---

## 2. Périmètre fonctionnel

### 2.1 Fonctionnalités principales (CRUD)

| Fonctionnalité           | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| **Créer un prompt**      | Formulaire avec titre, contenu, catégorie et champs dynamiques              |
| **Lire / Consulter**     | Dashboard listant tous les prompts avec statistiques                        |
| **Modifier un prompt**   | Édition d'un prompt existant via le même formulaire                         |
| **Supprimer un prompt**  | Suppression avec boîte de confirmation                                      |

### 2.2 Gestion des catégories

4 catégories prédéfinies :
- **Marketing** — Campagnes, stratégies de marque, réseaux sociaux
- **Création de Contenu** — Articles, vidéos, newsletters
- **E-commerce** — Fiches produits, prix, optimisation de conversion
- **Développement** — Documentation API, revue de code, schéma de base de données

### 2.3 Champs dynamiques

Les prompts supportent des placeholders entre accolades (ex : `{audience}`, `{topic}`). Lors de l'utilisation d'un prompt, l'utilisateur remplit ces champs pour générer un prompt personnalisé.

### 2.4 Recherche et filtrage

- Barre de recherche textuelle (titre + contenu)
- Filtre par catégorie
- Combinaison recherche + filtre

### 2.5 Import de prompts

- Glisser-déposer (drag & drop) de fichiers `.txt` pour importer un prompt
- Le nom du fichier devient le titre du prompt

### 2.6 Authentification

- Écran de connexion simple (email + mot de passe)
- Authentification locale uniquement (pas de serveur distant)
- Déconnexion avec retour à l'écran de login

### 2.7 Thème et interface

- Mode sombre (par défaut) et mode clair
- Sidebar rétractable (mode complet / mode mini icônes)
- Design responsive

### 2.8 Raccourcis clavier

| Raccourci    | Action                    |
|--------------|---------------------------|
| `Ctrl + N`   | Créer un nouveau prompt   |
| `Ctrl + D`   | Retour au dashboard       |

### 2.9 Données pré-chargées

16 prompts par défaut répartis dans les 4 catégories, fournis au premier lancement.

---

## 3. Périmètre technique

### 3.1 Architecture

```
Application Electron (processus principal)
  └── React (processus renderer)
       ├── Composants réutilisables (Sidebar, StatCard, PromptCard)
       ├── Pages (Dashboard, PromptForm, UsePrompt, Login, TermsOfUse, About)
       └── Stockage local (localStorage via storage.js)
```

### 3.2 Stack technique

| Couche            | Technologie                  | Version   |
|-------------------|------------------------------|-----------|
| Framework desktop | Electron                     | 39.2.6    |
| UI                | React                        | 19.2.1    |
| Bundler           | Electron Vite                | 5.0.0     |
| Build             | Vite                         | 7.2.6     |
| Icônes            | Lucide React                 | 0.563.0   |
| Styling           | CSS3 (fichiers séparés)      | —         |
| State management  | React Hooks (useState, useEffect) | —    |
| Persistance       | localStorage (navigateur)    | —         |

### 3.3 Structure du projet

```
src/
├── main/                       # Processus principal Electron
│   └── index.js                # Création de la fenêtre, IPC
├── preload/                    # Script de pré-chargement (sandbox)
├── renderer/                   # Application React
│   └── src/
│       ├── App.jsx             # Composant racine, routage, logique métier
│       ├── main.jsx            # Point d'entrée React
│       ├── storage.js          # Gestion localStorage
│       ├── components/         # Composants réutilisables
│       │   ├── Sidebar.jsx
│       │   ├── StatCard.jsx
│       │   ├── PromptCard.jsx
│       │   └── Versions.jsx
│       ├── pages/              # Pages de l'application
│       │   ├── Dashboard.jsx
│       │   ├── PromptForm.jsx
│       │   ├── UsePrompt.jsx
│       │   ├── Login.jsx
│       │   ├── About.jsx
│       │   ├── TermsOfUse.jsx
│       │   ├── TermsForm.jsx
│       │   └── SignUp.jsx
│       └── css/                # Feuilles de style
```

### 3.4 Stockage des données

- **Méthode :** `localStorage` du navigateur embarqué (Chromium/Electron)
- **Clé :** `app-prompts`
- **Format :** JSON sérialisé
- **Schéma d'un prompt :**

```json
{
  "id": 1,
  "title": "Product Launch Campaign",
  "text": "Create a compelling marketing campaign for {audience}",
  "category": "Marketing",
  "dynamicFields": ["audience"]
}
```

### 3.5 Build et déploiement

| Plateforme | Commande             |
|------------|----------------------|
| Windows    | `npm run build:win`  |
| macOS      | `npm run build:mac`  |
| Linux      | `npm run build:linux`|

Outil de packaging : **electron-builder** v26.0.12

---

## 4. Exigences non fonctionnelles

| Exigence             | Description                                                              |
|----------------------|--------------------------------------------------------------------------|
| **Confidentialité**  | Aucune donnée transmise sur Internet ; stockage 100 % local              |
| **Performance**      | Démarrage < 3 secondes, navigation fluide entre les écrans               |
| **Compatibilité**    | Windows, macOS, Linux                                                    |
| **Accessibilité**    | Design responsive, support tactile (touch feedback), mode clair/sombre   |
| **Maintenabilité**   | Code modulaire (composants React), séparation CSS par composant          |
| **Sécurité**         | Sandbox Electron activé (`sandbox: false` dans preload uniquement)       |

---

## 5. Écrans de l'application

| Écran              | Description                                                              |
|--------------------|--------------------------------------------------------------------------|
| **Login**          | Formulaire de connexion (email + mot de passe)                           |
| **Dashboard**      | Liste des prompts, barre de recherche, filtres catégories, statistiques  |
| **Formulaire**     | Création / édition d'un prompt (titre, contenu, catégorie, champs)       |
| **Utiliser Prompt**| Sélection d'un prompt + remplissage des champs dynamiques                |
| **Conditions**     | Page des conditions d'utilisation                                        |
| **À propos**       | Informations sur l'application                                           |

---

## 6. Livrables

| Livrable                           | Format / Support               |
|------------------------------------|--------------------------------|
| Code source                        | Dépôt GitHub                   |
| Application installable            | `.exe` (Windows), `.dmg` (macOS), `.AppImage` (Linux) |
| Documentation technique            | `TECHNICAL_DESIGN.md`          |
| Manuel utilisateur                 | `USER_MANUAL.md`               |
| Cahier des charges                 | `CAHIER_DES_CHARGES.md`        |
| Référentiel compétences RNCP      | `RNCP_COMPETENCIES.md`         |

---

## 7. Contraintes

- **Pas de backend distant** — toute la logique est côté client
- **Pas de base de données** — utilisation de `localStorage` uniquement
- **Pas de synchronisation cloud** — les données restent sur la machine de l'utilisateur
- **Sauvegarde manuelle** — l'utilisateur est responsable de la sauvegarde de ses données

---

## 8. Évolutions possibles

- Export / import de prompts en JSON ou CSV
- Synchronisation cloud optionnelle
- Système de tags personnalisés
- Catégories créées par l'utilisateur
- Favoris et épinglage de prompts
- Historique d'utilisation des prompts
- Partage de prompts entre utilisateurs
- Intégration directe avec des API d'IA (OpenAI, Anthropic, etc.)
