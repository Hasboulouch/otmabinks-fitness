# OTMABINKS FITNESS

Application statique en français : sélection des sept jours, programme modifiable, cases à cocher, progression hebdomadaire, historique des semaines, notes et import/export JSON. Adaptée aux téléphones et utilisable sans compte.

## Publication sur GitHub Pages

Dans **Settings → Pages → Build and deployment**, choisir **Deploy from a branch**, puis **main** et **/(root)**, et cliquer sur **Save**.

Adresse attendue après le premier déploiement : https://hasboulouch.github.io/otmabinks-fitness/

## Programme

Le HTML et les exercices du chat original n'étaient pas accessibles lors de l'installation. Aucun exercice n'a été inventé. Cliquer sur **Modifier la séance** pour renseigner chaque jour : nom, exercices, séries, répétitions/durée et repos. Le programme est commun aux semaines ; les cases et les notes sont conservées séparément pour chaque semaine. Modifier ou retirer un exercice change les totaux historiques du programme ; les anciennes validations restent dans l'export.

## Données personnelles

Le suivi est conservé uniquement dans le stockage local du navigateur, sans serveur ni synchronisation entre appareils. Une suppression des données du navigateur peut effacer le suivi. **Exporter** télécharge un fichier JSON comprenant programme, cases et notes ; **Importer** valide un export version 1 puis demande confirmation avant de remplacer les données locales. Les sauvegardes ne sont jamais envoyées au dépôt GitHub. La police Google Fonts est facultative ; sans réseau, les polices du système prennent le relais.

## Développement

Servir ce dossier avec un serveur HTTP statique, par exemple `python3 -m http.server 8080`. Aucune installation ni compilation nécessaire. Vérifications du modèle de données : `node --test tests/core.test.cjs`.

Le programme initial volontairement vide et l'impossibilité de récupérer l'ancien HTML sont explicités dans l'interface. L'application ne prétend pas reproduire les exercices non accessibles du chat précédent.
