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
          "images": [],
          "captions": [],
          "note": "Alternative si ta machine ne permet pas le trajet: refais l’extension triceps à la poulie haute.",
          "source": ""
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
        "Curl biceps assis",
        "Poulie basse + barre, assis",
        "3 × 10–12",
        {
          "name": "Curl biceps assis",
          "equipment": "Poulie basse MARCY et barre courbée",
          "steps": [
            "Assieds-toi sur le siège avec les pieds stables et la barre reliée à la poulie basse.",
            "Garde les coudes près du corps et fléchis les bras sans balancer le buste.",
            "Redescends lentement jusqu’à une extension confortable des coudes."
          ],
          "images": [],
          "captions": [],
          "note": "La MARCY illustre ce mouvement comme « Seated Bicep Curl ». Utilise une charge modérée et une trajectoire fluide.",
          "source": ""
        },
        "v3_mar_seated"
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
          "images": [],
          "captions": [],
          "note": "Image non disponible; utilise l’illustration « High Pulley AB Crunch » sur ta MARCY comme référence.",
          "source": ""
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
          "images": [],
          "captions": [],
          "note": "Alternative si ta machine ne permet pas le trajet: refais l’extension triceps à la poulie haute.",
          "source": ""
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
        "Curl biceps assis",
        "Poulie basse + barre, assis",
        "3 × 10–12",
        {
          "name": "Curl biceps assis",
          "equipment": "Poulie basse MARCY et barre courbée",
          "steps": [
            "Assieds-toi sur le siège avec les pieds stables et la barre reliée à la poulie basse.",
            "Garde les coudes près du corps et fléchis les bras sans balancer le buste.",
            "Redescends lentement jusqu’à une extension confortable des coudes."
          ],
          "images": [],
          "captions": [],
          "note": "La MARCY illustre ce mouvement comme « Seated Bicep Curl ». Utilise une charge modérée et une trajectoire fluide.",
          "source": ""
        },
        "v3_ven_seated"
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
          "images": [],
          "captions": [],
          "note": "Référence: illustration « Leg Curl » sur le carter MARCY. Vérifie l’attache et la trajectoire avant chaque série.",
          "source": ""
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
          "images": [],
          "captions": [],
          "note": "Si la machine ne permet pas une trajectoire sûre, remplace par un split squat contrôlé, 3 × 8–12 par jambe.",
          "source": ""
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
          "images": [],
          "captions": [],
          "note": "Fais ce mouvement seulement si la trajectoire est fluide et sans frottement; sinon remplace par l’oiseau sans charge ou avec une petite charge.",
          "source": ""
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
