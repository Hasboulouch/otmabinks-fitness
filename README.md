# OTMABINKS — Training Club

Application personnelle en français, refondue dans une direction sportive et épurée : blanc cassé, noir, photographie monochrome et accent orange. Identité OTMABINKS indépendante, inspirée de la clarté éditoriale des applications de sport.

## Programme d’origine

Les 7 jours et les 30 exercices sont repris **à l’identique** du fichier fourni `otmabinks_fitness.html` : noms, équipements, séries, répétitions, durées et précautions. Une copie intacte est conservée dans `originals/otmabinks_fitness-v1.html`. Le prompt de direction artistique est dans `DESIGN-BRIEF.md`.

## Fonctions

- Sept boutons de jours, navigation entre les semaines, coches par exercice et progression.
- Validation de séance (coche aussi les exercices), annulation de validation et réinitialisation avec confirmation.
- Compteur limité aux 6 séances : le dimanche de récupération ne l’augmente pas.
- Carnet personnel global, sauvegardé automatiquement dans ce navigateur.
- Export complet JSON version 2 et import validé avant confirmation du remplacement.
- Les anciens exports `{checks, complete, notes}` sont compatibles et placés dans la semaine actuelle. Sur le même domaine, l’ancienne sauvegarde `otma_fit_tracker_v1` est reprise automatiquement, sans la supprimer. La version précédente du site utilise une autre clé et reste intacte.
- Navigation clavier, libellés accessibles, focus visible et réduction des animations.

Aucune donnée de suivi n’est envoyée sur GitHub. Le stockage est propre au navigateur et à l’adresse du site : exporter depuis l’ancien fichier, puis importer sur le site, pour transférer ses données. Les fichiers HTML locaux n’ont pas toujours un stockage persistant selon le navigateur.

## GitHub Pages

Dans **Settings → Pages → Build and deployment**, choisir **Deploy from a branch**, puis **main** et **/(root)**, puis **Save**. Adresse attendue : https://hasboulouch.github.io/otmabinks-fitness/

## Version autonome

`otmabinks_fitness_pro.html` contient les styles, les scripts, le programme et la photographie. Il peut être ouvert directement, sans dépendance réseau. Les sources séparées servent le site GitHub Pages.

## Vérification

`node --test tests/core.test.cjs` vérifie l’identité du programme, la migration des anciennes sauvegardes, le compteur de séances, l’export/import, le rejet des données invalides et les frontières de semaines.

Aperçu local : `python3 -m http.server 8080 --bind 127.0.0.1`.

## Photo

Photographie de salle de sport : Unsplash, identifiant `photo-1534438327276-14e5300c3a48`, https://images.unsplash.com/photo-1534438327276-14e5300c3a48. Traitement monochrome par CSS. Aucun asset de Nike n’est utilisé.
