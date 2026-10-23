'use strict';
const GUIDES = [
  {
    "id": "g0",
    "name": "Chest press assis",
    "equipment": "Machine / pectoraux",
    "steps": [
      "Règle le siège pour avoir les poignées à hauteur de poitrine, dos contre le dossier.",
      "Pousse les poignées devant toi en soufflant, sans décoller le dos.",
      "Reviens lentement, épaules basses et poignets alignés."
    ],
    "note": "La photo montre une machine de chest press : les réglages et les bras peuvent différer de ta MARCY.",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Leverage_Chest_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Leverage_Chest_Press/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Leverage_Chest_Press"
  },
  {
    "id": "g1",
    "name": "Papillon / pec fly",
    "equipment": "Machine / pectoraux",
    "steps": [
      "Assieds-toi dos au dossier, bras placés sur les appuis prévus.",
      "Rapproche les bras devant la poitrine sans hausser les épaules.",
      "Rouvre lentement dans une amplitude confortable."
    ],
    "note": "À utiliser seulement si ta station possède la fonction papillon ; respecte ses appuis et sa trajectoire.",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Butterfly/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Butterfly/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Butterfly"
  },
  {
    "id": "g2",
    "name": "Développé épaules",
    "equipment": "Haltères / épaules",
    "steps": [
      "Assieds-toi sur un banc avec dossier, haltères à hauteur des épaules.",
      "Pousse les haltères au-dessus de la tête en gardant le ventre engagé.",
      "Redescends lentement sans cambrer pour finir la répétition."
    ],
    "note": "",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Dumbbell_Shoulder_Press/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Dumbbell_Shoulder_Press/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Dumbbell_Shoulder_Press"
  },
  {
    "id": "g3",
    "name": "Élévations latérales",
    "equipment": "Poulie basse / épaules",
    "steps": [
      "Place-toi de côté à la poulie basse, poignée dans la main opposée, coude légèrement fléchi.",
      "Élève le bras sur le côté jusqu’à hauteur d’épaule, sans élan.",
      "Redescends lentement puis change de bras."
    ],
    "note": "Le câble doit circuler librement sur ta station. N’improvise pas de renvoi de câble.",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Standing_Low-Pulley_Deltoid_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Standing_Low-Pulley_Deltoid_Raise/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Standing_Low-Pulley_Deltoid_Raise"
  },
  {
    "id": "g4",
    "name": "Extension triceps",
    "equipment": "Poulie haute / triceps",
    "steps": [
      "Prends la barre en pronation, coudes près des côtes, buste stable.",
      "Déplie les coudes pour abaisser la barre en soufflant.",
      "Remonte les avant-bras lentement sans avancer les coudes."
    ],
    "note": "",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Triceps_Pushdown/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Triceps_Pushdown/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Triceps_Pushdown"
  },
  {
    "id": "g5",
    "name": "Tirage vertical",
    "equipment": "Poulie haute / dos",
    "steps": [
      "Assieds-toi avec les cuisses maintenues si un appui est prévu, poitrine haute.",
      "Tire la barre vers le haut de la poitrine en amenant les coudes vers le bas.",
      "Laisse les bras remonter lentement sans te faire soulever."
    ],
    "note": "Tire devant la tête, pas derrière la nuque.",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Wide-Grip_Lat_Pulldown/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Wide-Grip_Lat_Pulldown/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Wide-Grip_Lat_Pulldown"
  },
  {
    "id": "g6",
    "name": "Rowing assis",
    "equipment": "Poulie basse / dos",
    "steps": [
      "Assieds-toi avec des appuis stables, genoux légèrement fléchis et dos neutre.",
      "Tire la poignée vers le bas des côtes en gardant le buste stable.",
      "Retends les bras lentement sans arrondir le dos."
    ],
    "note": "La photo utilise une poignée en V. Ton programme prévoit une barre : conserve une prise confortable et des appuis prévus pour ta station.",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Seated_Cable_Rows/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Seated_Cable_Rows/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Seated_Cable_Rows"
  },
  {
    "id": "g7",
    "name": "Oiseau / reverse fly",
    "equipment": "Haltères / arrière des épaules",
    "steps": [
      "Assieds-toi, penche le buste depuis les hanches en gardant le dos neutre.",
      "Écarte les bras sur les côtés, coudes légèrement fléchis.",
      "Redescends avec contrôle, sans balancer le buste."
    ],
    "note": "",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Seated_Bent-Over_Rear_Delt_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Seated_Bent-Over_Rear_Delt_Raise/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Seated_Bent-Over_Rear_Delt_Raise"
  },
  {
    "id": "g8",
    "name": "Curl biceps",
    "equipment": "Poulie basse / biceps",
    "steps": [
      "Tiens la barre paumes vers le haut, coudes proches du corps.",
      "Fléchis les coudes pour monter la barre, sans te pencher en arrière.",
      "Redescends lentement en gardant les épaules immobiles."
    ],
    "note": "",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Standing_Biceps_Cable_Curl/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Standing_Biceps_Cable_Curl/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Standing_Biceps_Cable_Curl"
  },
  {
    "id": "g9",
    "name": "Curl marteau",
    "equipment": "Haltères / biceps",
    "steps": [
      "Debout, tiens les haltères le long du corps, paumes face à face.",
      "Monte les haltères en gardant les coudes près des côtes.",
      "Redescends lentement, poignets droits et sans élan."
    ],
    "note": "",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Hammer_Curls/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Hammer_Curls/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Hammer_Curls"
  },
  {
    "id": "g10",
    "name": "Course facile",
    "equipment": "Tapis ou extérieur / cardio",
    "steps": [
      "Démarre par une marche puis augmente progressivement vers un footing facile.",
      "Garde le regard devant toi, les épaules relâchées et une foulée naturelle.",
      "Choisis une allure qui te permet encore de parler, puis ralentis progressivement."
    ],
    "note": "Sur tapis, utilise le dispositif d’arrêt de sécurité et suis les consignes de la machine.",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Jogging_Treadmill/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Jogging_Treadmill/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Jogging_Treadmill"
  },
  {
    "id": "g11",
    "name": "Retour au calme",
    "equipment": "Marche douce / récupération",
    "steps": [
      "Réduis progressivement l’allure pour passer à une marche facile.",
      "Laisse les bras accompagner la marche et relâche les épaules.",
      "Continue doucement pendant la durée prévue avant de t’arrêter."
    ],
    "note": "La démonstration montre la marche sur tapis ; une marche douce au sol convient aussi.",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Walking_Treadmill/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Walking_Treadmill/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Walking_Treadmill"
  },
  {
    "id": "g12",
    "name": "Pompes",
    "equipment": "Poids du corps / pectoraux",
    "steps": [
      "Place les mains un peu plus larges que les épaules et aligne tête, bassin et talons.",
      "Plie les coudes pour descendre la poitrine, sans laisser tomber le bassin.",
      "Repousse le sol en soufflant. Utilise un support surélevé si nécessaire."
    ],
    "note": "",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Pushups/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Pushups/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Pushups"
  },
  {
    "id": "g13",
    "name": "Élévations frontales",
    "equipment": "Poulie basse / épaules",
    "steps": [
      "Tiens la barre devant les cuisses, bras légèrement fléchis et buste stable.",
      "Monte les bras devant toi jusqu’à environ la hauteur des épaules.",
      "Redescends lentement sans basculer en arrière."
    ],
    "note": "La photo montre une poignée à un bras. Ton programme utilise une barre : réalise le même mouvement devant toi seulement si le câble circule sans gêne.",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Front_Cable_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Front_Cable_Raise/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Front_Cable_Raise"
  },
  {
    "id": "g14",
    "name": "Extension triceps au-dessus de la tête",
    "equipment": "Haltère / triceps",
    "steps": [
      "Tiens un haltère à deux mains au-dessus de la tête, ventre engagé.",
      "Plie les coudes pour descendre l’haltère derrière la tête sans bouger les bras supérieurs.",
      "Retends les coudes en soufflant, sans cambrer."
    ],
    "note": "",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Standing_Dumbbell_Triceps_Extension/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Standing_Dumbbell_Triceps_Extension/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Standing_Dumbbell_Triceps_Extension"
  },
  {
    "id": "g15",
    "name": "Curl unilatéral",
    "equipment": "Poulie basse / biceps",
    "steps": [
      "Prends la poignée paume vers le haut, coude près du corps.",
      "Fléchis le coude sans avancer l’épaule ni tourner le buste.",
      "Redescends lentement puis fais l’autre côté."
    ],
    "note": "",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Standing_One-Arm_Cable_Curl/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Standing_One-Arm_Cable_Curl/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Standing_One-Arm_Cable_Curl"
  },
  {
    "id": "g16",
    "name": "Curl inversé",
    "equipment": "Poulie basse / avant-bras",
    "steps": [
      "Tiens la barre paumes vers le bas, poignets droits et coudes près du corps.",
      "Fléchis les coudes sans balancer le buste.",
      "Redescends lentement avec une charge qui permet de garder les poignets stables."
    ],
    "note": "",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Reverse_Cable_Curl/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Reverse_Cable_Curl/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Reverse_Cable_Curl"
  },
  {
    "id": "g17",
    "name": "Leg extension",
    "equipment": "Machine / quadriceps",
    "steps": [
      "Règle le siège et le rouleau selon la notice : rouleau au bas des tibias, juste au-dessus des chevilles.",
      "Tends les jambes en contractant les cuisses, bassin et dos stables.",
      "Replie les genoux lentement sans laisser retomber la charge."
    ],
    "note": "La machine illustrée est différente du module MARCY : utilise les réglages prévus par ton modèle.",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Leg_Extensions/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Leg_Extensions/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Leg_Extensions"
  },
  {
    "id": "g18",
    "name": "Squats",
    "equipment": "Poids du corps / jambes",
    "steps": [
      "Debout, pieds environ à largeur d’épaules, appuis bien répartis.",
      "Plie hanches et genoux pour descendre à une profondeur confortable ; les genoux suivent les pieds.",
      "Pousse dans le sol pour te redresser sans décoller les talons."
    ],
    "note": "",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Bodyweight_Squat/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Bodyweight_Squat/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Bodyweight_Squat"
  },
  {
    "id": "g19",
    "name": "Pont fessier",
    "equipment": "Au sol / fessiers",
    "steps": [
      "Allonge-toi sur le dos, genoux fléchis et pieds posés au sol.",
      "Pousse dans les talons pour lever le bassin jusqu’à aligner épaules, hanches et genoux.",
      "Serre les fessiers puis repose lentement le bassin sans creuser le dos."
    ],
    "note": "",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Butt_Lift_Bridge/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Butt_Lift_Bridge/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Butt_Lift_Bridge"
  },
  {
    "id": "g20",
    "name": "Leg curl glissé",
    "equipment": "Serviette / ischio-jambiers",
    "steps": [
      "Allonge-toi sur le dos, talon sur une serviette qui glisse sur une surface dégagée.",
      "Ramène lentement le talon vers les fesses en pliant le genou.",
      "Fais glisser le pied vers l’avant avec contrôle, puis change de côté."
    ],
    "note": "Photos : variante au sol à une jambe, bassin posé. Elles ne montrent pas un curl en pont à deux jambes. Ne force pas si la serviette accroche.",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Platform_Hamstring_Slides/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Platform_Hamstring_Slides/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Platform_Hamstring_Slides"
  },
  {
    "id": "g21",
    "name": "Mollets debout",
    "equipment": "Poids du corps / mollets",
    "steps": [
      "Debout, prends un appui léger pour l’équilibre, pieds parallèles.",
      "Monte sur la pointe des pieds en gardant le corps droit.",
      "Redescends lentement, sans rebond."
    ],
    "note": "La photo montre une machine ; ton programme se fait au poids du corps, sans charge sur les épaules. Le mouvement de cheville reste le même.",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Standing_Calf_Raises/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Standing_Calf_Raises/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Standing_Calf_Raises"
  },
  {
    "id": "g22",
    "name": "Crunch",
    "equipment": "Au sol / abdos",
    "steps": [
      "Allonge-toi, genoux pliés et pieds au sol, mains posées légèrement près de la tête.",
      "Décolle légèrement les épaules en contractant les abdos et en soufflant.",
      "Redescends lentement sans tirer sur la nuque."
    ],
    "note": "",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Crunches/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Crunches/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Crunches"
  },
  {
    "id": "g23",
    "name": "Gainage",
    "equipment": "Au sol / sangle abdominale",
    "steps": [
      "Pose les avant-bras sous les épaules et prends appui sur les pointes de pieds.",
      "Aligne tête, bassin et talons, sans creuser le dos ni monter les fesses.",
      "Respire régulièrement pendant la tenue ; repose-toi dès que l’alignement se dégrade."
    ],
    "note": "Garde cette position en respirant ; il ne s’agit pas de répétitions.",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Plank/1.jpg"
    ],
    "captions": [
      "Position à tenir"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Plank"
  },
  {
    "id": "g24",
    "name": "Marche rapide",
    "equipment": "Tapis / cardio",
    "steps": [
      "Commence par une marche confortable avant d’augmenter l’allure.",
      "Marche d’un pas soutenu, buste droit et bras libres quand tu es stable.",
      "Ralentis progressivement à la fin de la durée prévue."
    ],
    "note": "",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Walking_Treadmill/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Walking_Treadmill/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Walking_Treadmill"
  },
  {
    "id": "g25",
    "name": "Fentes avec haltères",
    "equipment": "Haltères / jambes",
    "steps": [
      "Debout avec les haltères de chaque côté, fais un pas en avant.",
      "Fléchis les genoux en gardant le buste droit et le pied avant bien posé.",
      "Pousse dans le pied avant pour revenir, puis change de jambe."
    ],
    "note": "",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Dumbbell_Lunges/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Dumbbell_Lunges/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Dumbbell_Lunges"
  },
  {
    "id": "g26",
    "name": "Élévations latérales avec haltères",
    "equipment": "Haltères / épaules",
    "steps": [
      "Debout, haltères près du corps, coudes légèrement fléchis.",
      "Écarte les bras jusqu’à hauteur des épaules sans prendre d’élan.",
      "Redescends lentement en gardant les épaules basses."
    ],
    "note": "",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Side_Lateral_Raise/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Side_Lateral_Raise/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Side_Lateral_Raise"
  },
  {
    "id": "g27",
    "name": "Curl avec haltères",
    "equipment": "Haltères / biceps",
    "steps": [
      "Debout, paumes vers l’avant et coudes près des côtes.",
      "Monte les haltères en fléchissant les coudes sans avancer les épaules.",
      "Reviens lentement, sans balancer le buste."
    ],
    "note": "",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Dumbbell_Bicep_Curl/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Dumbbell_Bicep_Curl/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Dumbbell_Bicep_Curl"
  },
  {
    "id": "g28",
    "name": "Tractions",
    "equipment": "Barre fixe / dos",
    "steps": [
      "Prends une barre fixe stable, mains un peu plus larges que les épaules.",
      "Tire le corps vers le haut en dirigeant les coudes vers le sol, sans élan.",
      "Redescends avec contrôle. Utilise une assistance si tu ne maîtrises pas le mouvement."
    ],
    "note": "",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Pullups/0.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Pullups/1.jpg"
    ],
    "captions": [
      "Position 1",
      "Position 2"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db/tree/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Pullups"
  },
  {
    "id": "boxing",
    "name": "Boxe technique",
    "equipment": "Sac en mousse / technique",
    "steps": [
      "Place un pied devant l’autre, genoux souples, menton légèrement rentré et mains près du visage.",
      "Lance un direct léger avec le bras avant puis ramène aussitôt la main en garde ; l’autre main protège le visage.",
      "Travaille à faible intensité, poignets alignés, sans verrouiller brutalement les coudes. Sur sac, utilise des protections adaptées."
    ],
    "note": "Démonstrations de garde et de direct à vide. Sur ton sac en mousse, reste sur une frappe contrôlée.",
    "images": [
      "https://www.24hourfitness.com/24life/fitness/2019/media_1c24af7d3430b7ecc1850ceac1ac5397c1788f154.gif?format=gif&optimize=medium&width=750",
      "https://www.24hourfitness.com/24life/fitness/2019/media_172c3848245805ffd38cf310d9b883310d3ab3ff0.gif?format=gif&optimize=medium&width=750"
    ],
    "captions": [
      "La garde",
      "Le direct avant"
    ],
    "source": "https://www.24hourfitness.com/24life/fitness/2019/workout-boxing-on-the-go"
  },
  {
    "id": "core",
    "name": "Crunch + gainage",
    "equipment": "Au sol / abdos",
    "steps": [
      "Crunch : genoux pliés, pieds au sol. Décolle légèrement les épaules en soufflant, sans tirer la nuque, puis redescends.",
      "Gainage : avant-bras sous les épaules, en appui sur les pointes de pieds. Garde tête, bassin et talons alignés, et respire.",
      "Réalise les deux mouvements séparément, selon les séries prévues."
    ],
    "note": "Deux mouvements différents : la première photo illustre le crunch, la seconde le gainage.",
    "images": [
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Crunches/1.jpg",
      "https://raw.githubusercontent.com/yuhonas/free-exercise-db/f00c92c7dcf1216a928a52c3706c7ce8e2f71ed5/exercises/Plank/1.jpg"
    ],
    "captions": [
      "Crunch",
      "Gainage"
    ],
    "source": "https://github.com/yuhonas/free-exercise-db"
  }
];
if(typeof module!=='undefined')module.exports=GUIDES;
