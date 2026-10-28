'use strict';
const PROGRAM = [
  {
    "short": "Lun",
    "name": "Lundi",
    "tag": "PECS + TRICEPS",
    "title": "Pectoraux • Triceps",
    "time": "45–55 min",
    "desc": "Deux exercices par muscle, trois séries chacun. 5 min d’échauffement, 90–120 s de repos.",
    "items": [
      [
        "Chest press assis",
        "Bras chest press MARCY",
        "3 × 8–12",
        null,
        "v3_lun_press"
      ],
      [
        "Papillon / pec fly",
        "Bras papillon intégrés",
        "3 × 10–15",
        null,
        "v3_lun_fly"
      ],
      [
        "Extension triceps",
        "Poulie haute + barre courbée",
        "3 × 10–15",
        null,
        "v3_lun_pushdown"
      ],
      [
        "Extension triceps au-dessus de la tête à la poulie",
        "Poulie basse + poignée (si trajectoire confortable)",
        "3 × 10–15",
        {
          "name": "Extension triceps au-dessus de la tête à la poulie",
          "equipment": "Station MARCY",
          "steps": [
            "Tourne le dos à la poulie basse, saisis la poignée d’une main et place le bras au-dessus de la tête, coude fléchi.",
            "Garde le coude aussi fixe que possible puis tends-le sans cambrer.",
            "Redescends lentement. Arrête si le câble frotte ou tire sur l’épaule."
          ],
          "images": [
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Triceps_Overhead_Extension_with_Rope/0.jpg",
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Triceps_Overhead_Extension_with_Rope/1.jpg"
          ],
          "captions": [
            "Position initiale (illustration)",
            "Position finale (illustration)"
          ],
          "note": "Alternative si ta machine ne permet pas le trajet: refais l’extension triceps à la poulie haute. Démonstration avec une corde : utilise uniquement ta poignée et adapte la position; ne reproduis pas la prise de la photo.",
          "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Triceps_Overhead_Extension_with_Rope"
        },
        "v3_lun_overhead"
      ]
    ]
  },
  {
    "short": "Mar",
    "name": "Mardi",
    "tag": "DOS + BICEPS",
    "title": "Dos • Biceps",
    "time": "45–55 min",
    "desc": "Deux tirages complémentaires et deux curls. Garde le tronc stable et les mouvements contrôlés.",
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
        "Curl biceps",
        "Poulie basse + barre courbée",
        "3 × 10–12",
        null,
        "v3_mar_standing"
      ],
      [
        "Curl inversé",
        "Poulie basse + barre courbée, prise en pronation",
        "3 × 10–15",
        "g16",
        "v3_mar_reverse"
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
    "desc": "Deuxième séance pectoraux/triceps. Bonus de 2 séries pour les épaules latérales.",
    "items": [
      [
        "Chest press assis",
        "Bras chest press MARCY",
        "3 × 10–12",
        null,
        "v3_jeu_press"
      ],
      [
        "Papillon / pec fly",
        "Bras papillon MARCY",
        "3 × 12–15",
        null,
        "v3_jeu_fly"
      ],
      [
        "Extension triceps",
        "Poulie haute + barre courbée",
        "3 × 10–15",
        null,
        "v3_jeu_pushdown"
      ],
      [
        "Extension triceps au-dessus de la tête à la poulie",
        "Poulie basse + poignée (si trajectoire confortable)",
        "3 × 10–15",
        {
          "name": "Extension triceps au-dessus de la tête à la poulie",
          "equipment": "Station MARCY",
          "steps": [
            "Tourne le dos à la poulie basse, saisis la poignée d’une main et place le bras au-dessus de la tête, coude fléchi.",
            "Garde le coude aussi fixe que possible puis tends-le sans cambrer.",
            "Redescends lentement. Arrête si le câble frotte ou tire sur l’épaule."
          ],
          "images": [
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Triceps_Overhead_Extension_with_Rope/0.jpg",
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Triceps_Overhead_Extension_with_Rope/1.jpg"
          ],
          "captions": [
            "Position initiale (illustration)",
            "Position finale (illustration)"
          ],
          "note": "Alternative si ta machine ne permet pas le trajet: refais l’extension triceps à la poulie haute. Démonstration avec une corde : utilise uniquement ta poignée et adapte la position; ne reproduis pas la prise de la photo.",
          "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Triceps_Overhead_Extension_with_Rope"
        },
        "v3_jeu_overhead"
      ],
      [
        "Élévations latérales",
        "Poulie basse + poignée individuelle",
        "2 × 12–20",
        null,
        "v3_jeu_lateral"
      ]
    ]
  },
  {
    "short": "Ven",
    "name": "Vendredi",
    "tag": "DOS + BICEPS",
    "title": "Dos • Biceps",
    "time": "45–55 min",
    "desc": "Deuxième stimulation du dos et des biceps. Varie l’ordre et contrôle la phase de retour.",
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
        "Curl inversé",
        "Poulie basse + barre courbée, prise en pronation",
        "3 × 10–15",
        "g16",
        "v3_ven_reverse"
      ],
      [
        "Curl unilatéral",
        "Poulie basse + poignée individuelle",
        "3 × 10–12 / bras",
        null,
        "v3_ven_unilateral"
      ]
    ]
  },
  {
    "short": "Sam",
    "name": "Samedi",
    "tag": "JAMBES + ÉPAULES",
    "title": "Jambes • Épaules",
    "time": "50–60 min",
    "desc": "Trois mouvements pour les jambes, deux pour les épaules. Mollets : option de 2 séries si tu as du temps.",
    "items": [
      [
        "Leg extension",
        "Module jambes MARCY",
        "3 × 10–15",
        null,
        "v3_sam_extension"
      ],
      [
        "Leg curl debout à la poulie",
        "Poulie basse + sangle de cheville",
        "3 × 10–15 / jambe",
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
        "Squat à la poulie basse",
        "Poulie basse + barre (si trajectoire stable)",
        "3 × 8–12",
        {
          "name": "Squat à la poulie basse",
          "equipment": "Station MARCY",
          "steps": [
            "Avec la barre fixée à la poulie basse, trouve une position dans l’axe du câble, pieds stables.",
            "Fléchis les genoux et les hanches en gardant le tronc gainé et les talons au sol.",
            "Pousse dans les pieds pour remonter; pas d’à-coups ni de traction qui déstabilise la machine."
          ],
          "images": [
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Bodyweight_Squat/0.jpg",
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Bodyweight_Squat/1.jpg"
          ],
          "captions": [
            "Position initiale (illustration)",
            "Position finale (illustration)"
          ],
          "note": "Si la machine ne permet pas une trajectoire sûre, remplace par un split squat contrôlé, 3 × 8–12 par jambe. Illustration du mouvement de squat uniquement : elle ne montre pas la traction à la poulie basse MARCY.",
          "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Bodyweight_Squat"
        },
        "v3_sam_squat"
      ],
      [
        "Élévations latérales",
        "Poulie basse + poignée individuelle",
        "3 × 12–20",
        null,
        "v3_sam_lateral"
      ],
      [
        "Tirage deltoïde arrière unilatéral",
        "Poulie haute + poignée (si trajectoire fluide)",
        "3 × 12–15 / bras",
        {
          "name": "Tirage deltoïde arrière unilatéral",
          "equipment": "Station MARCY",
          "steps": [
            "Place-toi légèrement de côté face à la poulie haute et saisis la poignée d’une main.",
            "Garde le bras légèrement fléchi et dirige le coude vers l’extérieur/arrière, sans tourner le buste.",
            "Ramène lentement en gardant l’épaule basse."
          ],
          "images": [
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Cable_Rear_Delt_Fly/0.jpg",
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Cable_Rear_Delt_Fly/1.jpg"
          ],
          "captions": [
            "Position initiale (illustration)",
            "Position finale (illustration)"
          ],
          "note": "Fais ce mouvement seulement si la trajectoire est fluide et sans frottement; sinon remplace par l’oiseau sans charge ou avec une petite charge. La photo illustre un reverse fly à la poulie avec une configuration différente; pour ton tirage unilatéral, adapte le trajet du câble et réduis la charge.",
          "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Cable_Rear_Delt_Fly"
        },
        "v3_sam_rear"
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
