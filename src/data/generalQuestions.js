// src/data/generalQuestions.js
export const GENERAL_QUESTIONS = [
  // ========== MULTIPLE CHOICE ==========
  {
    id: "mcq1",
    type: "mcq",
    question:
      "What is the main component in gluten that triggers the autoimmune response in celiac disease?",
    choices: ["Casein", "Gliadin", "Starch", "Maltose"],
    answer: "Gliadin",
    explanation:
      "Gliadin is a component of gluten that triggers the autoimmune reaction in people with celiac disease."
  },
  {
    id: "mcq2",
    type: "mcq",
    question: "Celiac disease is primarily a disorder of which body system?",
    choices: ["Respiratory", "Nervous", "Gastrointestinal (digestive)", "Cardiovascular"],
    answer: "Gastrointestinal (digestive)",
    explanation:
      "Celiac disease primarily affects the small intestine in the GI tract."
  },
  {
    id: "mcq3",
    type: "mcq",
    question: "Which part of the intestine is damaged in celiac disease?",
    choices: ["Colon", "Villi of the small intestine", "Stomach lining", "Large intestine"],
    answer: "Villi of the small intestine",
    explanation:
      "Immune injury flattens/damages villi, reducing nutrient absorption."
  },
  {
    id: "mcq4",
    type: "mcq",
    question: "Which of the following is NOT a common symptom of celiac disease?",
    choices: ["Bloating", "Diarrhea", "High blood pressure", "Fatigue"],
    answer: "High blood pressure",
    explanation:
      "Hypertension is not a typical direct symptom of celiac disease."
  },
  {
    id: "mcq5",
    type: "mcq",
    question:
      "What type of immune cell response causes damage to the small intestine in celiac disease?",
    choices: ["Allergic reaction", "Autoimmune response", "Bacterial infection", "Genetic mutation"],
    answer: "Autoimmune response",
    explanation:
      "It’s an autoimmune condition—your immune system attacks your own tissues."
  },
  {
    id: "mcq6",
    type: "mcq",
    question: "Which blood test is most commonly used in diagnosing celiac disease?",
    choices: ["CRP", "tTG-IgA", "ANA", "Hemoglobin"],
    answer: "tTG-IgA",
    explanation:
      "Tissue transglutaminase IgA is the most commonly used screening serology."
  },
  {
    id: "mcq7",
    type: "mcq",
    question:
      "What should a person continue to do while undergoing testing for celiac disease?",
    choices: [
      "Eat a gluten-free diet",
      "Eat as much fiber as possible",
      "Eat a normal diet with gluten",
      "Avoid dairy"
    ],
    answer: "Eat a normal diet with gluten",
    explanation:
      "Stopping gluten early can normalize tests and hide disease activity."
  },
  {
    id: "mcq8",
    type: "mcq",
    question: "What is the only current treatment for celiac disease?",
    choices: ["Corticosteroids", "Antibiotics", "Gluten-free diet", "Surgery"],
    answer: "Gluten-free diet",
    explanation:
      "Strict, lifelong gluten avoidance allows the gut to heal."
  },
  {
    id: "mcq9",
    type: "mcq",
    question:
      "Which antibody is involved in both gut and skin manifestations of celiac disease?",
    choices: ["IgE", "IgM", "IgA", "IgG"],
    answer: "IgA",
    explanation:
      "IgA autoantibodies are central; DH involves IgA deposits in skin."
  },
  {
    id: "mcq10",
    type: "mcq",
    question: "What is the skin condition linked to celiac disease called?",
    choices: ["Psoriasis", "Eczema", "Dermatitis herpetiformis", "Hives"],
    answer: "Dermatitis herpetiformis",
    explanation:
      "An itchy blistering rash caused by IgA deposition in skin."
  },
  {
    id: "mcq11",
    type: "mcq",
    question: "What nutrient is commonly deficient in people with undiagnosed celiac?",
    choices: ["Vitamin C", "Iron", "Sodium", "Iodine"],
    answer: "Iron",
    explanation:
      "Iron malabsorption in the proximal small bowel can cause anemia."
  },
  {
    id: "mcq12",
    type: "mcq",
    question: "Which of these ingredients must someone with celiac avoid?",
    choices: ["Corn", "Barley", "Quinoa", "Rice"],
    answer: "Barley",
    explanation:
      "Gluten is in wheat, barley, and rye (corn/rice/quinoa are gluten-free)."
  },
  {
    id: "mcq13",
    type: "mcq",
    question: "What does damage to the villi lead to?",
    choices: [
      "Better digestion",
      "Malabsorption of nutrients",
      "Stronger immune response",
      "Constipation only"
    ],
    answer: "Malabsorption of nutrients",
    explanation:
      "Flattened villi reduce absorptive surface area, causing deficiencies."
  },
  {
    id: "mcq14",
    type: "mcq",
    question: "Celiac disease can lead to delayed growth in children because of:",
    choices: ["Allergic reactions", "Hormonal imbalance", "Poor nutrient absorption", "Genetic differences"],
    answer: "Poor nutrient absorption",
    explanation:
      "Lack of nutrients affects growth, bones, and puberty timelines."
  },
  {
    id: "mcq15",
    type: "mcq",
    question: "The gluten protein is found in which of the following grains?",
    choices: [
      "Wheat, barley, rye",
      "Rice, oats, corn",
      "Buckwheat, millet, sorghum",
      "Quinoa, chia, amaranth"
    ],
    answer: "Wheat, barley, rye",
    explanation:
      "Core gluten grains are wheat, barley, and rye; oats need GF certification."
  },
  {
    id: "mcq16",
    type: "mcq",
    question: "What kind of biopsy confirms celiac disease?",
    choices: ["Liver", "Colon", "Small intestine", "Pancreas"],
    answer: "Small intestine",
    explanation:
      "Duodenal biopsies show villous atrophy and crypt hyperplasia."
  },
  {
    id: "mcq17",
    type: "mcq",
    question: "Dermatitis herpetiformis is caused by deposits of what under the skin?",
    choices: ["Bacteria", "IgA antibodies", "Gluten protein", "White blood cells"],
    answer: "IgA antibodies",
    explanation:
      "Granular IgA deposition at the dermal papillae drives the rash."
  },
  {
    id: "mcq18",
    type: "mcq",
    question: "What does the term “autoimmune” mean in this context?",
    choices: [
      "The body fights infection",
      "The body attacks its own tissues",
      "The body reacts to bacteria",
      "The body fails to absorb sugar"
    ],
    answer: "The body attacks its own tissues",
    explanation:
      "Immune responses mistakenly target self tissues, e.g., intestinal mucosa."
  },
  {
    id: "mcq19",
    type: "mcq",
    question:
      "In the U.S., food labeled “gluten-free” must contain less than how much gluten?",
    choices: ["50 ppm", "20 ppm", "5 ppm", "100 ppm"],
    answer: "20 ppm",
    explanation:
      "FDA standard: less than 20 parts per million gluten."
  },
  {
    id: "mcq20",
    type: "mcq",
    question:
      "Which symptom is least likely to be caused directly by celiac disease?",
    choices: ["Skin rash", "Bloating", "Tooth decay", "Shortness of breath from asthma"],
    answer: "Shortness of breath from asthma",
    explanation:
      "Asthma symptoms are not directly caused by celiac disease."
  },

  // ========== TRUE / FALSE ==========
  { id: "tf1", type: "tf", question: "Celiac disease is a food allergy.", answer: "False", explanation: "It’s an autoimmune disease triggered by gluten exposure." },
  { id: "tf2", type: "tf", question: "People with celiac can sometimes “cheat” and eat gluten.", answer: "False", explanation: "Even small amounts can cause damage and symptoms." },
  { id: "tf3", type: "tf", question: "Gluten-free oats are always safe for people with celiac disease.", answer: "False", explanation: "Choose certified gluten-free oats to avoid cross-contact." },
  { id: "tf4", type: "tf", question: "Celiac disease can affect people of any age.", answer: "True", explanation: "It can present in childhood or adulthood." },
  { id: "tf5", type: "tf", question: "The damage in celiac disease is reversible with a gluten-free diet.", answer: "True", explanation: "Villi typically heal with strict gluten avoidance." },
  { id: "tf6", type: "tf", question: "Dermatitis herpetiformis always appears with gut symptoms.", answer: "False", explanation: "DH can occur with minimal or no GI symptoms." },
  { id: "tf7", type: "tf", question: "The gluten protein is safe once it's cooked or boiled.", answer: "False", explanation: "Heat does not neutralize gluten for celiac disease." },
  { id: "tf8", type: "tf", question: "A strict gluten-free diet can help heal the intestinal lining.", answer: "True", explanation: "Healing depends on complete avoidance and time." },
  { id: "tf9", type: "tf", question: "A person can have celiac disease and not feel sick.", answer: "True", explanation: "Some are asymptomatic despite intestinal damage." },
  { id: "tf10", type: "tf", question: "Gluten-free food is automatically healthy.", answer: "False", explanation: "GF products can still be high in sugar/salt/fat." },

  // ========== YES / NO ==========
  { id: "yn1", type: "yn", question: "Can children with celiac disease have delayed growth?", answer: "Yes", explanation: "Malabsorption can reduce key nutrients for normal growth." },
  { id: "yn2", type: "yn", question: "Is there a cure for celiac disease?", answer: "No", explanation: "There is no cure; strict gluten avoidance is the treatment." },
  { id: "yn3", type: "yn", question: "Should people with celiac avoid shared kitchen tools with gluten?", answer: "Yes", explanation: "Shared tools can cause cross-contact—use separate/dedicated items." },
  { id: "yn4", type: "yn", question: "Is fatigue a common symptom of untreated celiac disease?", answer: "Yes", explanation: "Common due to nutrient deficiencies and inflammation." },
  { id: "yn5", type: "yn", question: "Can celiac disease cause problems outside the gut?", answer: "Yes", explanation: "Includes anemia, skin disease, bone loss, neurologic issues, etc." },
  { id: "yn6", type: "yn", question: "Should someone start a gluten-free diet before diagnosis?", answer: "No", explanation: "It can normalize tests and complicate diagnosis—test first." },
  { id: "yn7", type: "yn", question: "Is iron-deficiency anemia common in celiac disease?", answer: "Yes", explanation: "Due to proximal small bowel malabsorption." },
  { id: "yn8", type: "yn", question: "Can someone with celiac eat sourdough bread made with wheat?", answer: "No", explanation: "Fermentation doesn’t reliably reduce gluten to safe levels." },
  { id: "yn9", type: "yn", question: "Do you have to be genetically tested to diagnose celiac?", answer: "No", explanation: "HLA-DQ2/DQ8 helps but isn’t required; serology ± biopsy diagnose." },
  { id: "yn10", type: "yn", question: "Can even a small amount of gluten exposure cause symptoms in someone with celiac?", answer: "Yes", explanation: "Trace exposure can trigger immune activation and symptoms." }
];
