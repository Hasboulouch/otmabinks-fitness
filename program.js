'use strict';
const PROGRAM = [
  {
    "short": "Lun",
    "name": "Lundi",
    "tag": "PECS + TRICEPS",
    "title": "Pectoraux • Triceps",
    "time": "45–60 min",
    "desc": "Pectoraux : poussée lourde + écarté unilatéral. Triceps : extension à la poulie haute + extension au-dessus de la tête avec haltère. Repos 60–120 s.",
    "items": [
      [
        "Chest press assis",
        "Bras chest press MARCY",
        "3 × 8–12",
        null,
        "v3_lun_press"
      ],
      [
        "Écarté pectoral unilatéral à la poulie basse",
        "Poulie basse MARCY + poignée individuelle",
        "3 × 10–15 / bras",
        {
          "name": "Écarté pectoral unilatéral à la poulie basse",
          "equipment": "Poulie basse MARCY + poignée individuelle",
          "steps": [
            "Place-toi debout, légèrement devant la poulie basse, dos à la machine et pieds décalés pour rester stable.",
            "Garde le coude légèrement fléchi. Ramène ton bras en diagonale vers le haut et le centre de ta poitrine, sans simplement lever le bras comme une élévation frontale.",
            "Redescends lentement en gardant une tension continue, sans laisser le câble frotter contre le châssis. Change ensuite de bras."
          ],
          "images": [
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Low_Cable_Crossover/0.jpg",
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Low_Cable_Crossover/1.jpg"
          ],
          "captions": [
            "Départ (illustration)",
            "Fin du mouvement (illustration)"
          ],
          "note": "Les images montrent un crossover avec deux poulies : sur ta MARCY, fais le mouvement un bras à la fois. Garde une charge légère au départ, uniquement si la traction est fluide et la machine stable. Ne confonds pas avec l’élévation latérale (bras déplacé vers le côté).",
          "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Low_Cable_Crossover"
        },
        "v3_lun_cable_fly"
      ],
      [
        "Extension triceps",
        "Poulie haute + barre courbée",
        "3 × 10–15",
        null,
        "v3_lun_pushdown"
      ],
      [
        "Extension triceps au-dessus de la tête avec haltère",
        "Un haltère tenu à deux mains · triceps (longue portion)",
        "3 × 10–15",
        "g14",
        "v3_lun_db_overhead"
      ]
    ]
  },
  {
    "short": "Mar",
    "name": "Mardi",
    "tag": "DOS + BICEPS",
    "title": "Dos • Biceps",
    "time": "45–60 min",
    "desc": "Dos : tirage vertical + rowing horizontal. Biceps : supination pour le biceps et prise neutre pour brachial / avant-bras. Coudes stables.",
    "items": [
      [
        "Tirage vertical",
        "Poulie haute + barre courbée",
        "3 × 8–12",
        null,
        "v3_mar_lat"
      ],
      [
        "Rowing assis",
        "Poulie basse + barre, appui stable",
        "3 × 8–12",
        null,
        "v3_mar_row"
      ],
      [
        "Curl biceps en supination avec haltères",
        "Deux haltères · biceps, paumes tournées vers le haut",
        "3 × 8–12",
        "g27",
        "v3_mar_db_supinated"
      ],
      [
        "Curl marteau avec haltères",
        "Deux haltères · brachial et avant-bras",
        "3 × 10–15",
        "g9",
        "v3_mar_db_hammer"
      ]
    ]
  },
  {
    "short": "Mer",
    "name": "Mercredi",
    "tag": "CARDIO + CORE",
    "title": "Cardio • Abdominaux",
    "time": "40–55 min",
    "desc": "Course facile, boxe contrôlée et gainage. Séance plus légère entre les deux blocs de musculation.",
    "items": [
      [
        "Course facile",
        "Tapis roulant NordicTrack",
        "25–30 min",
        null,
        "v3_mer_course"
      ],
      [
        "Boxe technique",
        "Sac rembourré, frappe contrôlée",
        "5 × 2 min",
        null,
        "v3_mer_boxing"
      ],
      [
        "Crunch à la poulie haute",
        "Poulie haute + barre courbée ou poignée",
        "3 × 12–15",
        {
          "name": "Crunch à la poulie haute",
          "equipment": "Station MARCY",
          "steps": [
            "Agenouille-toi sur une surface confortable, câble devant toi, tronc stable.",
            "Fléchis le thorax vers le bassin en contractant les abdominaux, sans tirer avec les bras.",
            "Remonte lentement en contrôlant la colonne."
          ],
          "images": [
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Cable_Crunch/0.jpg",
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Cable_Crunch/1.jpg"
          ],
          "captions": [
            "Position initiale (illustration)",
            "Position finale (illustration)"
          ],
          "note": "Image non disponible; utilise l’illustration « High Pulley AB Crunch » sur ta MARCY comme référence. Démonstration de crunch à la poulie, la poignée illustrée peut différer de ton accessoire.",
          "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Cable_Crunch"
        },
        "v3_mer_abs"
      ],
      [
        "Gainage",
        "Au sol",
        "3 × 30–45 s",
        null,
        "v3_mer_plank"
      ]
    ]
  },
  {
    "short": "Jeu",
    "name": "Jeudi",
    "tag": "PECS + TRICEPS",
    "title": "Pectoraux • Triceps",
    "time": "50–60 min",
    "desc": "Deuxième séance pectoraux / triceps. Les 2 séries d'élévations latérales avec haltères restent en bonus pour les épaules.",
    "items": [
      [
        "Chest press assis",
        "Bras chest press MARCY",
        "3 × 10–12",
        null,
        "v3_jeu_press"
      ],
      [
        "Écarté pectoral unilatéral à la poulie basse",
        "Poulie basse MARCY + poignée individuelle",
        "3 × 10–15 / bras",
        {
          "name": "Écarté pectoral unilatéral à la poulie basse",
          "equipment": "Poulie basse MARCY + poignée individuelle",
          "steps": [
            "Place-toi debout, légèrement devant la poulie basse, dos à la machine et pieds décalés pour rester stable.",
            "Garde le coude légèrement fléchi. Ramène ton bras en diagonale vers le haut et le centre de ta poitrine, sans simplement lever le bras comme une élévation frontale.",
            "Redescends lentement en gardant une tension continue, sans laisser le câble frotter contre le châssis. Change ensuite de bras."
          ],
          "images": [
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Low_Cable_Crossover/0.jpg",
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Low_Cable_Crossover/1.jpg"
          ],
          "captions": [
            "Départ (illustration)",
            "Fin du mouvement (illustration)"
          ],
          "note": "Les images montrent un crossover avec deux poulies : sur ta MARCY, fais le mouvement un bras à la fois. Garde une charge légère au départ, uniquement si la traction est fluide et la machine stable. Ne confonds pas avec l’élévation latérale (bras déplacé vers le côté).",
          "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Low_Cable_Crossover"
        },
        "v3_jeu_cable_fly"
      ],
      [
        "Extension triceps",
        "Poulie haute + barre courbée",
        "3 × 10–15",
        null,
        "v3_jeu_pushdown"
      ],
      [
        "Extension triceps au-dessus de la tête avec haltère",
        "Un haltère tenu à deux mains · triceps (longue portion)",
        "3 × 10–15",
        "g14",
        "v3_jeu_db_overhead"
      ],
      [
        "Élévations latérales avec haltères",
        "Deux haltères légers · deltoïde moyen",
        "2 × 12–20",
        "g26",
        "v3_jeu_db_lateral"
      ]
    ]
  },
  {
    "short": "Ven",
    "name": "Vendredi",
    "tag": "DOS + BICEPS",
    "title": "Dos • Biceps",
    "time": "45–60 min",
    "desc": "Dos : rowing + tirage vertical. Bras : curl concentration pour les biceps, puis marteau pour le brachial / brachio-radial. Pas besoin de banc couché.",
    "items": [
      [
        "Rowing assis",
        "Poulie basse + barre, appui stable",
        "3 × 10–12",
        null,
        "v3_ven_row"
      ],
      [
        "Tirage vertical",
        "Poulie haute + barre courbée",
        "3 × 10–12",
        null,
        "v3_ven_lat"
      ],
      [
        "Curl concentration avec haltère",
        "Un haltère + chaise stable · biceps, bras appuyé",
        "3 × 10–15 / bras",
        {
          "name": "Curl concentration avec haltère",
          "equipment": "Un haltère + chaise stable · biceps",
          "steps": [
            "Assieds-toi sur une chaise stable, jambes ouvertes, avec l'arrière du bras légèrement appuyé contre l'intérieur de la cuisse.",
            "Paume vers le haut, fléchis le coude sans balancer le corps ni avancer l'épaule.",
            "Redescends lentement presque jusqu'à l'extension complète et change de bras."
          ],
          "note": "Ne presse pas excessivement le coude contre le genou. Utilise une charge contrôlée.",
          "images": [
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Concentration_Curls/0.jpg",
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Concentration_Curls/1.jpg"
          ],
          "captions": [
            "Départ du mouvement",
            "Fin du mouvement"
          ],
          "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Concentration_Curls"
        },
        "v3_ven_db_concentration"
      ],
      [
        "Curl marteau avec haltères",
        "Deux haltères · brachial et avant-bras",
        "3 × 10–15",
        "g9",
        "v3_ven_db_hammer"
      ]
    ]
  },
  {
    "short": "Sam",
    "name": "Samedi",
    "tag": "JAMBES + ÉPAULES",
    "title": "Jambes • Épaules",
    "time": "60–75 min",
    "desc": "Jambes : squat + extension pour les quadriceps, roumain + leg curl pour les ischios. Épaules : développé + élévations latérales + oiseau. Repos 60–120 s.",
    "items": [
      [
        "Squat goblet avec haltère",
        "Un haltère · quadriceps et fessiers",
        "3 × 8–12",
        {
          "name": "Squat goblet avec haltère",
          "equipment": "Un haltère · quadriceps et fessiers",
          "steps": [
            "Tiens un haltère verticalement contre la poitrine, pieds environ à largeur d'épaules, abdomen contracté.",
            "Fléchis hanches et genoux pour descendre aussi bas que confortable, talons au sol et genoux dans l'axe des pieds.",
            "Remonte en poussant dans le sol sans rebondir. Si la charge devient trop facile, choisis une variante de fente avec haltères plutôt que de multiplier les répétitions sans effort."
          ],
          "note": "Aucun banc nécessaire. Ne cherche pas une profondeur douloureuse. Charge adaptée à ta maîtrise du mouvement.",
          "images": [
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Goblet_Squat/0.jpg",
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Goblet_Squat/1.jpg"
          ],
          "captions": [
            "Départ du mouvement",
            "Fin du mouvement"
          ],
          "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Goblet_Squat"
        },
        "v3_sam_db_goblet"
      ],
      [
        "Soulevé de terre roumain avec haltères",
        "Deux haltères · ischio-jambiers et fessiers",
        "3 × 8–12",
        {
          "name": "Soulevé de terre roumain avec haltères",
          "equipment": "Deux haltères · ischio-jambiers et fessiers",
          "steps": [
            "Debout, haltères devant les cuisses, pieds largeur hanches, genoux légèrement fléchis.",
            "Recule les hanches en faisant glisser les haltères près des jambes, dos neutre et tibias presque verticaux.",
            "Descends jusqu'à sentir les ischio-jambiers s'étirer sans arrondir le dos, puis avance les hanches pour te relever."
          ],
          "note": "Les photos illustrent un soulevé jambes semi-tendues, proche du roumain : garde les genoux souples et ne cherche pas à poser les haltères au sol. Commence léger.",
          "images": [
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Stiff-Legged_Dumbbell_Deadlift/0.jpg",
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Stiff-Legged_Dumbbell_Deadlift/1.jpg"
          ],
          "captions": [
            "Départ du mouvement",
            "Fin du mouvement"
          ],
          "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Stiff-Legged_Dumbbell_Deadlift"
        },
        "v3_sam_db_rdl"
      ],
      [
        "Leg extension",
        "Module jambes MARCY · quadriceps",
        "2 × 12–15",
        "g17",
        "v3_sam_extension"
      ],
      [
        "Leg curl debout à la poulie",
        "Poulie basse + sangle de cheville · ischio-jambiers",
        "2 × 10–15 / jambe",
        {
          "name": "Leg curl debout à la poulie",
          "equipment": "Station MARCY",
          "steps": [
            "Fixe uniquement une sangle de cheville conçue pour cet usage à la poulie basse.",
            "Tiens un appui stable et fléchis le genou pour rapprocher le talon de la fesse sans balancer le bassin.",
            "Reviens lentement sans laisser la pile retomber."
          ],
          "images": [
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Standing_Leg_Curl/0.jpg",
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Standing_Leg_Curl/1.jpg"
          ],
          "captions": [
            "Position initiale (illustration)",
            "Position finale (illustration)"
          ],
          "note": "Référence: illustration « Leg Curl » sur le carter MARCY. Vérifie l’attache et la trajectoire avant chaque série. Illustration d'un leg curl debout : la résistance provient ici d'une autre machine. Sur ta MARCY, utilise la sangle de cheville adaptée.",
          "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Standing_Leg_Curl"
        },
        "v3_sam_curl"
      ],
      [
        "Développé épaules debout avec haltères",
        "Deux haltères · épaules avant / milieu",
        "3 × 8–12",
        {
          "name": "Développé épaules debout avec haltères",
          "equipment": "Deux haltères · deltoïdes antérieurs et moyens",
          "steps": [
            "Debout, pieds stables et abdominaux contractés, place les haltères à hauteur d'épaules.",
            "Pousse vers le haut dans une trajectoire confortable, sans exagérer la cambrure ni hausser violemment les épaules.",
            "Redescends sous contrôle au niveau des épaules et répète. Utilise une charge permettant de garder le tronc immobile."
          ],
          "note": "Pas besoin de banc. Si tu dois cambrer fortement pour monter la charge, réduis le poids.",
          "images": [
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Standing_Dumbbell_Press/0.jpg",
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Standing_Dumbbell_Press/1.jpg"
          ],
          "captions": [
            "Départ du mouvement",
            "Fin du mouvement"
          ],
          "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Standing_Dumbbell_Press"
        },
        "v3_sam_db_press"
      ],
      [
        "Élévations latérales avec haltères",
        "Deux haltères · deltoïdes moyens",
        "3 × 12–20",
        "g26",
        "v3_sam_db_lateral"
      ],
      [
        "Oiseau avec haltères (deltoïdes arrière)",
        "Deux haltères + chaise stable · arrière des épaules",
        "2 × 12–20",
        "g7",
        "v3_sam_db_rear"
      ]
    ]
  },
  {
    "short": "Dim",
    "name": "Dimanche",
    "tag": "REPOS",
    "title": "Récupération",
    "time": "Libre",
    "desc": "Repos complet ou marche tranquille.",
    "items": []
  }
];
if (typeof module !== 'undefined') module.exports = PROGRAM;
