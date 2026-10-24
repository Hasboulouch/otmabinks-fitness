'use strict';
const PROGRAM = [
  {
    "short": "Lun",
    "name": "Lundi",
    "tag": "PUSH A",
    "title": "Pectoraux • Épaules • Triceps",
    "time": "50–60 min",
    "desc": "Poussées principales sur la MARCY. 5 min d’échauffement; 90–120 s entre les séries.",
    "items": [
      [
        "Chest press assis",
        "Bras chest press MARCY",
        "4 × 8–12"
      ],
      [
        "Papillon / pec fly",
        "Bras papillon intégrés",
        "3 × 10–15"
      ],
      [
        "Élévations latérales",
        "Poulie basse + poignée individuelle",
        "3 × 12–20"
      ],
      [
        "Extension triceps",
        "Poulie haute + barre courbée",
        "3 × 10–15"
      ],
      [
        "Élévations frontales",
        "Poulie basse + barre courbée",
        "2 × 10–15"
      ]
    ]
  },
  {
    "short": "Mar",
    "name": "Mardi",
    "tag": "PULL A",
    "title": "Dos • Biceps • Arrière d’épaules",
    "time": "50–60 min",
    "desc": "Tirage vertical et horizontal complémentaires. 5 min d’échauffement.",
    "items": [
      [
        "Tirage vertical",
        "Poulie haute + barre courbée",
        "4 × 8–12"
      ],
      [
        "Rowing assis",
        "Poulie basse + barre; appui stable",
        "4 × 8–12"
      ],
      [
        "Curl biceps",
        "Poulie basse + barre courbée",
        "3 × 10–15"
      ],
      [
        "Tirage deltoïde arrière unilatéral",
        "Poulie haute + poignée, traction contrôlée",
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
        }
      ]
    ]
  },
  {
    "short": "Mer",
    "name": "Mercredi",
    "tag": "CARDIO + CORE",
    "title": "Course • Boxe • Abdos",
    "time": "45–55 min",
    "desc": "Cardio modéré et gainage pour préserver la récupération.",
    "items": [
      [
        "Course facile",
        "Tapis roulant NordicTrack",
        "25–30 min"
      ],
      [
        "Boxe technique",
        "Sac rembourré, frappe contrôlée",
        "5 × 2 min"
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
        }
      ],
      [
        "Gainage",
        "Au sol",
        "3 × 30–45 s"
      ]
    ]
  },
  {
    "short": "Jeu",
    "name": "Jeudi",
    "tag": "PUSH B",
    "title": "Pectoraux • Épaules • Triceps",
    "time": "50–60 min",
    "desc": "Seconde stimulation; davantage de travail épaules et triceps.",
    "items": [
      [
        "Papillon / pec fly",
        "Bras papillon MARCY",
        "3 × 12–15"
      ],
      [
        "Chest press assis",
        "Bras chest press MARCY",
        "3 × 10–12"
      ],
      [
        "Élévations latérales",
        "Poulie basse + poignée individuelle",
        "4 × 12–20"
      ],
      [
        "Extension triceps au-dessus de la tête à la poulie",
        "Poulie basse + poignée, uniquement si axe confortable",
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
        }
      ],
      [
        "Élévations frontales",
        "Poulie basse + barre",
        "2 × 12–15"
      ]
    ]
  },
  {
    "short": "Ven",
    "name": "Vendredi",
    "tag": "PULL B",
    "title": "Dos • Biceps • Épaules arrière",
    "time": "50–60 min",
    "desc": "Deuxième stimulation du dos; travail des bras sans haltères.",
    "items": [
      [
        "Rowing assis",
        "Poulie basse + barre, appui stable",
        "4 × 10–12"
      ],
      [
        "Tirage vertical",
        "Poulie haute + barre courbée",
        "3 × 10–12"
      ],
      [
        "Tirage deltoïde arrière unilatéral",
        "Poulie haute + poignée, si trajet fluide",
        "3 × 12–15 / bras",
        {
          "name": "Tirage deltoïde arrière unilatéral",
          "equipment": "Station MARCY",
          "steps": [
            "Place-toi légèrement de côté face à la poulie haute et saisis la poignée d’une main.",
            "Amène le coude vers l’extérieur/arrière avec une légère flexion, sans élan ni rotation du dos.",
            "Reviens lentement, sans forcer l’articulation."
          ],
          "images": [],
          "captions": [],
          "note": "N’effectue ce mouvement que si l’angle de câble le permet.",
          "source": ""
        }
      ],
      [
        "Curl unilatéral",
        "Poulie basse + poignée",
        "3 × 10–12 / bras"
      ],
      [
        "Curl inversé",
        "Poulie basse + barre courbée",
        "2 × 12–15"
      ]
    ]
  },
  {
    "short": "Sam",
    "name": "Samedi",
    "tag": "LEGS",
    "title": "Jambes complètes • MARCY",
    "time": "50–60 min",
    "desc": "Résistance réglable: quads, ischios, fessiers, intérieur/extérieur des cuisses et mollets.",
    "items": [
      [
        "Leg extension",
        "Module jambes MARCY",
        "4 × 10–15"
      ],
      [
        "Leg curl debout à la poulie",
        "Poulie basse + sangle cheville compatible",
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
        }
      ],
      [
        "Squat à la poulie basse",
        "Barre courbée; uniquement si tirage stable",
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
        }
      ],
      [
        "Leg kick back",
        "Poulie basse + sangle cheville compatible",
        "3 × 12–15 / jambe",
        {
          "name": "Leg kick back",
          "equipment": "Station MARCY",
          "steps": [
            "Fixe la sangle à la cheville et tiens le châssis à une position autorisée et stable.",
            "Tends la jambe doucement en arrière à partir de la hanche, bassin fixe.",
            "Ramène sans balancer le dos."
          ],
          "images": [],
          "captions": [],
          "note": "Conforme au schéma « Leg Kick Back » affiché sur la MARCY.",
          "source": ""
        }
      ],
      [
        "Outer leg kick / abduction",
        "Poulie basse + sangle cheville compatible",
        "2 × 12–15 / jambe",
        {
          "name": "Outer leg kick / abduction",
          "equipment": "Station MARCY",
          "steps": [
            "Debout, corps stable, fixe la sangle à la cheville la plus éloignée de la poulie.",
            "Éloigne latéralement la jambe contre la résistance sans incliner le tronc.",
            "Reviens lentement, amplitude confortable."
          ],
          "images": [],
          "captions": [],
          "note": "Alterne certaines semaines avec Inner Thigh Leg Cross (adducteurs), selon ta récupération.",
          "source": ""
        }
      ],
      [
        "Mollets debout unilatéraux",
        "Au sol, main sur support stable",
        "3 × 12–20 / jambe",
        {
          "name": "Mollets debout unilatéraux",
          "equipment": "Station MARCY",
          "steps": [
            "Tiens un appui stable et mets le poids sur un pied.",
            "Monte sur l’avant-pied puis descends lentement en contrôlant.",
            "Augmente progressivement l’amplitude ou le temps sous tension."
          ],
          "images": [],
          "captions": [],
          "note": "En appui au sol; ne monte pas sur un support instable.",
          "source": ""
        }
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
