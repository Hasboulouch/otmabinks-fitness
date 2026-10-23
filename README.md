# OTMABINKS — Training Club

Application personnelle en français, refondue dans une direction sportive et épurée : blanc cassé, noir, photographie monochrome et accent orange. Identité OTMABINKS indépendante, inspirée de la clarté éditoriale des applications de sport.

## Programme d’origine

Les 7 jours et les 30 exercices sont repris **à l’identique** du fichier fourni `otmabinks_fitness.html` : noms, équipements, séries, répétitions, durées et précautions. Une copie intacte est conservée dans `originals/otmabinks_fitness-v1.html`. Le prompt de direction artistique est dans `DESIGN-BRIEF.md`.

## Fonctions

- Sept boutons de jours, navigation entre les semaines, coches par exercice et progression.
- Validation de séance (coche aussi les exercices), annulation de validation le jour même.
- Compteur limité aux 6 séances : le dimanche de récupération ne l’augmente pas.
- Carnet personnel global, sauvegardé automatiquement dans ce navigateur.
- Export complet JSON version 2 et import validé avant confirmation du remplacement.
- Les anciens exports `{checks, complete, notes}` sont compatibles et placés dans la semaine actuelle. Sur le même domaine, l’ancienne sauvegarde `otma_fit_tracker_v1` est reprise automatiquement, sans la supprimer. La version précédente du site utilise une autre clé et reste intacte.
- Navigation clavier, libellés accessibles, focus visible et réduction des animations.

Aucune donnée de suivi n’est envoyée sur GitHub. Le stockage est propre au navigateur et à l’adresse du site : exporter depuis l’ancien fichier, puis importer sur le site, pour transférer ses données. Les fichiers HTML locaux n’ont pas toujours un stockage persistant selon le navigateur.

## GitHub Pages

Dans **Settings → Pages → Build and deployment**, choisir **Deploy from a branch**, puis **main** et **/(root)**, puis **Save**. Adresse attendue : https://hasboulouch.github.io/otmabinks-fitness/

## Version autonome

`otmabinks_fitness_pro.html` contient les styles, les scripts, le programme et la photographie. Il peut être ouvert directement. Les photos de démonstration des exercices sont chargées en ligne et nécessitent une connexion. Les sources séparées servent le site GitHub Pages.

## Vérification

`node --test tests/core.test.cjs` vérifie l’identité du programme, la migration des anciennes sauvegardes, le compteur de séances, l’export/import, le rejet des données invalides et les frontières de semaines.

Aperçu local : `python3 -m http.server 8080 --bind 127.0.0.1`.

## Photo

Photographie de salle de sport : Unsplash, identifiant `photo-1534438327276-14e5300c3a48`, https://images.unsplash.com/photo-1534438327276-14e5300c3a48. Traitement monochrome par CSS. Aucun asset de Nike n’est utilisé.

## Série continue et gels

Le bouton Réinitialiser est supprimé. La série commence à la première séance validée et est recalculée à partir de tout l’historique daté. Les séances validées ajoutent un jour ; le dimanche de repos ajoute un jour à une série active sans consommer de gel. Un gel protège la série mais n’ajoute pas de jour. Chaque jour d’entraînement manqué, après minuit local, consomme automatiquement un gel si une série est active. Après trois gels consommés dans le mois, le jour manqué suivant interrompt la série. Les jours manqués sans série active ne consomment pas de gel. Le budget revient à trois au début de chaque mois, sans cumul. Le record reste visible.

L’application affiche les 28 derniers jours et conserve tout l’historique dans le stockage du navigateur et dans les exports. Les journées passées et futures sont consultables mais non modifiables depuis l’interface. Une journée en cours n’est jamais pénalisée avant minuit. Le changement de jour est détecté à la réouverture, au retour dans l’onglet et toutes les 30 secondes. Aucun serveur ou compte n’est nécessaire ; l’horloge locale et les données du navigateur font foi. Pour changer de navigateur ou d’appareil, utiliser Exporter / Importer.

## Fiches de mouvement et futurs exercices

Chaque nom d’exercice ouvre une fiche distincte de la case de validation : une ou deux images, des étapes en français, le volume prévu et les différences de matériel quand la démonstration utilise une autre machine. Le gainage utilise une seule photo de la position tenue ; le duo crunch/gainage montre les deux mouvements. Les 31 fiches couvrent tout le programme original et plusieurs ajouts possibles.

Le bouton **Ajouter un exercice** permet de choisir une fiche de la bibliothèque ou de créer un mouvement personnel, avec un nom, des étapes et au moins une URL HTTPS de photo. Aucun exercice ajouté ne peut avoir une fiche vide. Les ajouts reviennent le même jour chaque semaine, à partir de leur date d’ajout, sans réécrire l’historique. Le dimanche reste une journée de repos. Un ajout au jour courant retire sa validation pour permettre de terminer le nouveau programme.

Les ajouts, leurs fiches personnelles, leurs coches et les notes sont inclus dans la sauvegarde et l’export. Les identifiants des exercices ajoutés restent stables. Une erreur de stockage annule l’ajout plutôt que d’annoncer une sauvegarde inexistante. Les images externes peuvent devenir indisponibles ; une indication et un lien source s’affichent alors dans la fiche.

Sources des démonstrations : [free-exercise-db](https://github.com/yuhonas/free-exercise-db), commit f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5, distribué sous [Unlicense](https://github.com/yuhonas/free-exercise-db/blob/main/LICENSE.md) ; boxe : [24 Hour Fitness — Boxing on the Go](https://www.24hourfitness.com/24life/fitness/2019/workout-boxing-on-the-go), médias intégrés depuis leur source et lien dans la fiche. Les explications sont des reformulations courtes adaptées au programme ; les variantes de matériel sont indiquées.

Pour régénérer le fichier HTML autonome après une modification : `python3 scripts/build-standalone.py`.
