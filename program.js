'use strict';
const PROGRAM = [
  {
    "short": "Lun",
    "name": "Lundi",
    "tag": "PUSH A",
    "title": "Pecs • Épaules • Triceps",
    "time": "55–60 min",
    "desc": "Priorité aux poussées et à la largeur des épaules.",
    "items": [
      [
        "Chest press assis",
        "MARCY · pectoraux",
        "3 × 8–12"
      ],
      [
        "Papillon / pec fly",
        "Bras intégrés · si fonction disponible",
        "2 × 10–15"
      ],
      [
        "Développé épaules",
        "Haltères (dernier recours)",
        "3 × 8–12"
      ],
      [
        "Élévations latérales",
        "Poulie basse + poignée, si trajet adapté",
        "3 × 12–15"
      ],
      [
        "Extension triceps",
        "Poulie haute + barre",
        "3 × 10–15"
      ]
    ]
  },
  {
    "short": "Mar",
    "name": "Mardi",
    "tag": "PULL A",
    "title": "Dos • Biceps • Épaules arrière",
    "time": "55–60 min",
    "desc": "Largeur du dos, épaisseur et flexion des bras.",
    "items": [
      [
        "Tirage vertical",
        "Poulie haute + barre",
        "3 × 8–12"
      ],
      [
        "Rowing assis",
        "Poulie basse + barre, si installation stable",
        "3 × 10–12"
      ],
      [
        "Oiseau / reverse fly",
        "Haltères (dernier recours)",
        "3 × 12–15"
      ],
      [
        "Curl biceps",
        "Poulie basse + barre",
        "3 × 10–12"
      ],
      [
        "Curl marteau",
        "Haltères (dernier recours)",
        "2 × 10–12"
      ]
    ]
  },
  {
    "short": "Mer",
    "name": "Mercredi",
    "tag": "CARDIO",
    "title": "Course • Boxe",
    "time": "45–60 min",
    "desc": "Séance plus légère pour préserver la récupération.",
    "items": [
      [
        "Course facile",
        "Tapis roulant ou dehors",
        "25–35 min"
      ],
      [
        "Boxe technique",
        "Sac en mousse · frappe contrôlée",
        "5–6 × 2 min"
      ],
      [
        "Retour au calme",
        "Marche douce",
        "5 min"
      ]
    ]
  },
  {
    "short": "Jeu",
    "name": "Jeudi",
    "tag": "PUSH B",
    "title": "Pecs • Épaules • Triceps",
    "time": "55–60 min",
    "desc": "Deuxième stimulation du haut du corps, autre accent.",
    "items": [
      [
        "Pompes",
        "Poids du corps",
        "3 × 8–15"
      ],
      [
        "Chest press assis",
        "MARCY",
        "3 × 10–12"
      ],
      [
        "Élévations latérales",
        "Poulie basse + poignée, si trajet adapté",
        "3 × 12–15"
      ],
      [
        "Élévations frontales",
        "Poulie basse + barre, si confortable",
        "2 × 12–15"
      ],
      [
        "Extension triceps au-dessus de la tête",
        "Haltère (dernier recours)",
        "3 × 10–15"
      ]
    ]
  },
  {
    "short": "Ven",
    "name": "Vendredi",
    "tag": "PULL B",
    "title": "Dos • Biceps • Avant-bras",
    "time": "55–60 min",
    "desc": "Deuxième travail du dos, avec accent bras.",
    "items": [
      [
        "Tirage vertical",
        "Poulie haute + barre",
        "3 × 10–12"
      ],
      [
        "Rowing assis",
        "Poulie basse + barre, si installation stable",
        "3 × 8–12"
      ],
      [
        "Oiseau / reverse fly",
        "Haltères (dernier recours)",
        "2 × 12–15"
      ],
      [
        "Curl unilatéral",
        "Poulie basse + poignée",
        "3 × 10–12"
      ],
      [
        "Curl inversé",
        "Poulie basse + barre",
        "2 × 12–15"
      ]
    ]
  },
  {
    "short": "Sam",
    "name": "Samedi",
    "tag": "LEGS + CORE",
    "title": "Jambes • Abdos • Cardio",
    "time": "50–60 min",
    "desc": "Entretien complet du bas du corps sans le surcharger.",
    "items": [
      [
        "Leg extension",
        "Module jambes MARCY",
        "3 × 10–15"
      ],
      [
        "Squats",
        "Poids du corps",
        "3 × 12–15"
      ],
      [
        "Pont fessier",
        "Au sol",
        "3 × 12–15"
      ],
      [
        "Leg curl glissé",
        "Serviette sur surface adaptée, sinon variante",
        "2 × 8–12"
      ],
      [
        "Mollets debout",
        "Poids du corps",
        "3 × 15–20"
      ],
      [
        "Crunch + gainage",
        "Au sol",
        "2 séries chacun"
      ],
      [
        "Marche rapide",
        "Tapis roulant",
        "10–15 min"
      ]
    ]
  },
  {
    "short": "Dim",
    "name": "Dimanche",
    "tag": "REPOS",
    "title": "Récupération",
    "time": "Libre",
    "desc": "Repos complet ou marche douce, selon ton énergie.",
    "items": []
  }
];
if (typeof module !== 'undefined') module.exports = PROGRAM;
