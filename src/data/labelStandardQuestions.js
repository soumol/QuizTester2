// src/data/labelStandardQuestions.js
// Types supported by our quiz components: 'mcq' (multiple choice), 'yn' (yes/no), 'tf' (true/false), 'judge' (Safe / Not Safe / Unclear).
// Add image: "/labels/standard/<filename>" when a question references "shown above".

export const LABEL_STANDARD_QUESTIONS = [
  // ===== Section 1: Certification Logo Mastery (with images where referenced) =====
  {
    id: "s1",
    type: "mcq",
    image: "/labels/standard/gfco_logo.png",
    question: "This certification (shown above) is from:",
    choices: ["Europe", "United States", "Canada"],
    answer: "United States",
    explanation: "GFCO (Gluten-Free Certification Organization) is a U.S.-based certification program."
  },
  {
    id: "s2",
    type: "mcq",
    image: "/labels/standard/aoecs_crossed_grain.png",
    question: "Which region primarily uses this symbol (shown above)?",
    choices: ["Asia", "North america", "South america", "Europe"],
    answer: "Europe",
    explanation: "The AOECS Crossed Grain symbol is widely used across Europe."
  },
  {
    id: "s3",
    type: "mcq",
    image: "/labels/standard/cca_verified_logo.png",
    question: "Which organization validates this gluten-free label (shown above)?",
    choices: [
      "Gluten-Free Certification Organization (GFCO)",
      "Canadian Food Inspection Agency (CFIA)",
      "Canadian Celiac Association (CCA)",
      "National Celiac Association (NCA)"
    ],
    answer: "Canadian Celiac Association (CCA)",
    explanation: "This Canada-oriented mark is recognized/verified by the CCA."
  },
  {
    id: "s4",
    type: "yn",
    image: "/labels/standard/gf_cert_symbol_generic.png",
    question: "Is this symbol (shown above) third-party tested?",
    answer: "Yes",
    explanation: "Recognized GF certification marks indicate third-party verification/testing."
  },
  {
    id: "s5",
    type: "mcq",
    image: "/labels/standard/cookies_gfco_box.jpg",
    question: "What is the maximum gluten allowed in the box of cookies shown above?",
    choices: ["<10ppm", "<20ppm", "0ppm", "Unknown"],
    answer: "<10ppm",
    explanation: "GFCO’s standard targets <10 ppm—stricter than FDA’s <20 ppm rule."
  },

  // Product judgments — each “shown above” has an image
  {
    id: "s6",
    type: "yn",
    image: "/labels/standard/chips_natural_flavours.jpg",
    question: "Can these chips (shown above) be trusted as gluten free?",
    answer: "No",
    explanation: "No explicit GF claim and 'natural flavours' can be ambiguous—treat as not safe."
  },
  {
    id: "s7",
    type: "yn",
    image: "/labels/standard/pasta_gfco.jpg",
    question: "Is this pasta (shown above) safe to eat while following a gluten free diet?",
    answer: "Yes",
    explanation: "GFCO-certified pasta is tested and controlled for gluten."
  },
  {
    id: "s8",
    type: "yn",
    image: "/labels/standard/cookies_aoecs.jpg",
    question: "Are these cookies (shown above) safe to eat while following a gluten free diet?",
    answer: "Yes",
    explanation: "AOECS Crossed Grain indicates recognized EU gluten-free certification."
  },
  {
    id: "s9",
    type: "yn",
    image: "/labels/standard/lentil_pasta_uncert.jpg",
    question: "Is this lentil pasta (shown above) safe to eat while following a gluten free diet?",
    answer: "No",
    explanation: "Without a GF claim/certification and controls, cross-contact is possible."
  },
  {
    id: "s10",
    type: "yn",
    image: "/labels/standard/dip_gfco.jpg",
    question: "Is this dip (shown above) safe to eat following a gluten free diet?",
    answer: "Yes",
    explanation: "GFCO certification indicates testing to <10 ppm."
  },
  {
    id: "s11",
    type: "yn",
    image: "/labels/standard/dip_uncert.jpg",
    question: "Is this dip (shown above) safe to eat following a gluten free diet?",
    answer: "No",
    explanation: "Uncertified and potential cross-contact risk—avoid."
  },
  {
    id: "s12",
    type: "yn",
    image: "/labels/standard/cookies_cca.jpg",
    question: "Are these cookies (shown above) safe to eat when following a gluten free diet?",
    answer: "Yes",
    explanation: "CCA verification indicates adherence to gluten-free standards."
  },
  {
    id: "s13",
    type: "yn",
    image: "/labels/standard/cookies_uncert.jpg",
    question: "Are these cookies (shown above) safe to eat when following a gluten free diet?",
    answer: "No",
    explanation: "No certification and unclear handling—assume not safe."
  },
  {
    id: "s14",
    type: "yn",
    image: "/labels/standard/mac_gfco.jpg",
    question: "Is this instant mac & cheese (shown above) safe to eat on a gluten free diet?",
    answer: "Yes",
    explanation: "GFCO-certified products undergo testing and controls."
  },
  {
    id: "s15",
    type: "yn",
    image: "/labels/standard/ramen_wheat.jpg",
    question: "Is this instant ramen (shown above) gluten free?",
    answer: "No",
    explanation: "Most instant ramen is wheat-based unless clearly GF."
  },
  {
    id: "s16",
    type: "yn",
    image: "/labels/standard/candy_gfco.jpg",
    question: "Is this candy (shown above) gluten free?",
    answer: "Yes",
    explanation: "GFCO certification provides assurance of testing and ingredient control."
  },
  {
    id: "s17",
    type: "yn",
    image: "/labels/standard/candy_uncert.jpg",
    question: "Is this candy (shown above) gluten free?",
    answer: "No",
    explanation: "Ambiguous label/no certification—treat as not safe."
  },
  {
    id: "s18",
    type: "yn",
    image: "/labels/standard/starbucks_caramel_frapp.jpg",
    question: "Are Starbucks caramel frappuccinos (shown above) generally gluten free friendly?",
    answer: "No",
    explanation: "Caramel syrups can include gluten; high cross-contact risk in store."
  },
  {
    id: "s19",
    type: "yn",
    image: "/labels/standard/pancake_nsf.jpg",
    question: "Is this pancake mix (shown above) gluten free?",
    answer: "Yes",
    explanation: "NSF has a GF certification—indicates testing/controls."
  },
  {
    id: "s20",
    type: "yn",
    image: "/labels/standard/pancake_uncert.jpg",
    question: "Is this pancake mix (shown above) gluten free diet friendly?",
    answer: "No",
    explanation: "No certification/claim—insufficient assurance."
  },
  {
    id: "s21",
    type: "yn",
    image: "/labels/standard/cake_aoecs.jpg",
    question: "Is this instant cake mix (shown above) gluten free?",
    answer: "Yes",
    explanation: "AOECS Crossed Grain indicates recognized EU GF certification."
  },
  {
    id: "s22",
    type: "yn",
    image: "/labels/standard/cake_uncert.jpg",
    question: "Is this instant cake mix (shown above) gluten free?",
    answer: "No",
    explanation: "Uncertified—no verified GF controls."
  },
  {
    id: "s23",
    type: "yn",
    image: "/labels/standard/donuts_wheat.jpg",
    question: "Are these doughnuts (shown above) safe to eat while following a gluten free diet?",
    answer: "No",
    explanation: "Typical bakery doughnuts contain wheat and have high cross-contact risk."
  },
  {
    id: "s24",
    type: "yn",
    image: "/labels/standard/donuts_gfco.jpg",
    question: "Are these doughnuts (shown above) safe to eat while following a gluten free diet?",
    answer: "Yes",
    explanation: "GFCO-certified doughnuts are tested under GF controls."
  },

  // ===== Section 2: Advanced Label Literacy & Ingredient Warnings =====
  {
    id: "s25",
    type: "mcq",
    question: "Which ingredient is most likely to contain gluten?",
    choices: ["Malt syrup", "Glucose syrup", "Brown rice syrup", "Modified corn starch"],
    answer: "Malt syrup",
    explanation: "Malt syrup is typically barley-derived — a gluten source."
  },
  {
    id: "s26",
    type: "yn",
    question: "“Processed on equipment that also processes wheat” — is it safe to eat when not labeled gluten free?",
    answer: "No",
    explanation: "Potential cross-contact without GF claim/testing — avoid."
  },
  {
    id: "s27",
    type: "mcq",
    question: "“No gluten ingredients” but no certification — what’s your next step?",
    choices: [
      "This product is safe to eat because it meets FDA standards",
      "Avoid it",
      "Contact manufacturer",
      "All of the above are okay options",
      "Both A & C are acceptable options"
    ],
    answer: "Both A & C are acceptable options",
    explanation: "Either verify with the manufacturer or avoid; claims alone may be insufficient."
  },
  {
    id: "s28",
    type: "yn",
    question: "If a product contains barley malt flavoring is it gluten-free?",
    answer: "No",
    explanation: "Barley malt is a gluten-containing ingredient."
  },
  {
    id: "s29",
    type: "mcq",
    question: "What does the U.S. FDA require for a gluten-free label?",
    choices: ["100% gluten-free", "Voluntary labeling + <20ppm", "Mandatory testing"],
    answer: "Voluntary labeling + <20ppm",
    explanation: "Products labeled GF must contain <20 ppm gluten; labeling is voluntary."
  },
  {
    id: "s30",
    type: "mcq",
    question: "Which claim is the least reliable?",
    choices: ["Certified gluten-free", "Gluten-removed", "Made with gluten-free ingredients", "B & C"],
    answer: "B & C",
    explanation: "‘Gluten-removed’ and ‘made with GF ingredients’ are less reliable than certification."
  },
  {
    id: "s31",
    type: "mcq",
    question: "Which of these is safe?",
    choices: ["Hydrolyzed wheat protein in shampoo", "Malt vinegar", "Wheat germ", "Einkorn flour"],
    answer: "Hydrolyzed wheat protein in shampoo",
    explanation: "Topical use is not ingested; the others are gluten sources if eaten."
  },
  {
    id: "s32",
    type: "yn",
    question: "You see 'wheat-free' granola, but it contains spelt. Is it gluten-free?",
    answer: "No",
    explanation: "Spelt is a wheat variety and contains gluten."
  },
  {
    id: "s33",
    type: "yn",
    question: "Are oats labelled gluten free safe for celiacs?",
    answer: "Yes",
    explanation: "A GF claim is subject to FDA’s <20 ppm standard (note: individual tolerance to oats varies)."
  },
  {
    id: "s34",
    type: "mcq",
    question: "What’s the difference between “certified gluten-free” and “gluten-free”?",
    choices: [
      "Certified GF products are tested more frequently by the FDA",
      "Certified means third-party testing; GF claim must meet FDA regulation",
      "“Gluten-free by claim” is more reliable than certification",
      "There is no difference—they are the same"
    ],
    answer: "Certified means third-party testing; GF claim must meet FDA regulation",
    explanation: "Certification = independent verification; a ‘gluten-free’ claim still must meet FDA rules."
  },

  // Scenario judgments — Safe / Not Safe / Unclear (no images needed)
  {
    id: "s36",
    type: "judge",
    question: "Ingredients: Corn flour, oil, salt, seasoning (natural flavors), spice blend. Label: no GF logo.",
    choices: ["Safe", "Not Safe", "Unclear – Needs Follow-Up"],
    answer: "Unclear – Needs Follow-Up",
    explanation: "‘Natural flavors’/‘spice blend’ may contain gluten; verify with the manufacturer."
  },
  {
    id: "s37",
    type: "judge",
    question: "Ingredients: GF oats, sugar, oil, raisins, cinnamon. Label: GFCO logo.",
    choices: ["Safe", "Not Safe", "Unclear – Needs Follow-Up"],
    answer: "Safe",
    explanation: "GFCO certification + GF oats are generally safe for most celiacs."
  },
  {
    id: "s38",
    type: "judge",
    question: "Ingredients: Barley malt extract, rice flour, sugar, honey. Label: 'Wheat-Free'.",
    choices: ["Safe", "Not Safe", "Unclear – Needs Follow-Up"],
    answer: "Not Safe",
    explanation: "Barley malt contains gluten; ‘wheat-free’ ≠ gluten-free."
  },
  {
    id: "s39",
    type: "judge",
    question: "Ingredients: Enriched wheat flour, sugar, water, eggs. Label: none.",
    choices: ["Safe", "Not Safe", "Unclear – Needs Follow-Up"],
    answer: "Not Safe",
    explanation: "Contains wheat flour (gluten)."
  },
  {
    id: "s40",
    type: "judge",
    question: "Ingredients: Cornmeal, salt, oil. Label: 'Made in a facility that processes wheat'.",
    choices: ["Safe", "Not Safe", "Unclear – Needs Follow-Up"],
    answer: "Unclear – Needs Follow-Up",
    explanation: "Ingredients look GF, but facility statement suggests cross-contact risk; verify controls."
  },
  {
    id: "s41",
    type: "judge",
    question: "Ingredients: Brown rice flour, tapioca starch, xanthan gum, chocolate chips. Label: 'Certified Gluten-Free'.",
    choices: ["Safe", "Not Safe", "Unclear – Needs Follow-Up"],
    answer: "Safe",
    explanation: "Certification + typical GF ingredients → safe."
  },
  {
    id: "s42",
    type: "judge",
    question: "Ingredients: Whole grain oats, dates, cocoa, whey protein, soy lecithin. Label: 'No gluten ingredients used'.",
    choices: ["Safe", "Not Safe", "Unclear – Needs Follow-Up"],
    answer: "Unclear – Needs Follow-Up",
    explanation: "No certification/claim; oats may not be purity protocol; confirm cross-contact controls."
  },
  {
    id: "s43",
    type: "judge",
    question: "Ingredients: Modified food starch, sugar, citric acid. No GF claim.",
    choices: ["Safe", "Not Safe", "Unclear – Needs Follow-Up"],
    answer: "Unclear – Needs Follow-Up",
    explanation: "In the U.S. it’s often corn, but internationally it could be wheat-based—verify source."
  },
  {
    id: "s44",
    type: "judge",
    question: "Ingredients: Spelt flour, coconut sugar, flax meal. Label: 'Wheat-Free'.",
    choices: ["Safe", "Not Safe", "Unclear – Needs Follow-Up"],
    answer: "Not Safe",
    explanation: "Spelt is gluten-containing; ‘wheat-free’ can still contain gluten."
  },
  {
    id: "s45",
    type: "judge",
    question: "Ingredients: Buckwheat flour, almond meal, baking soda, salt. Label: 'Certified Gluten-Free'.",
    choices: ["Safe", "Not Safe", "Unclear – Needs Follow-Up"],
    answer: "Safe",
    explanation: "Naturally GF ingredients + certification → safe."
  },
  {
    id: "s46",
    type: "judge",
    question: "Ingredients: Rye flour, yeast, water. Label: 'All Natural'.",
    choices: ["Safe", "Not Safe", "Unclear – Needs Follow-Up"],
    answer: "Not Safe",
    explanation: "Rye contains gluten; ‘natural’ is unrelated to gluten-free status."
  },
  {
    id: "s47",
    type: "judge",
    question: "Ingredients: Rice flour, millet, amaranth, soy lecithin. Label: 'Gluten-Free' (no certification).",
    choices: ["Safe", "Not Safe", "Unclear – Needs Follow-Up"],
    answer: "Safe",
    explanation: "All ingredients are naturally GF; a GF claim must meet FDA <20 ppm; consider brand reputation."
  },
  {
    id: "s48",
    type: "judge",
    question: "Ingredients: Wheat starch (gluten-free), potato starch, xanthan gum. Label: 'Certified Gluten-Free'.",
    choices: ["Safe", "Not Safe", "Unclear – Needs Follow-Up"],
    answer: "Safe",
    explanation: "GF wheat starch is specially processed; certification adds assurance."
  },
  {
    id: "s49",
    type: "judge",
    question: "Ingredients: Malt vinegar, olive oil, mustard seed, herbs. Label: 'Vegan'.",
    choices: ["Safe", "Not Safe", "Unclear – Needs Follow-Up"],
    answer: "Not Safe",
    explanation: "Malt vinegar is barley-derived and contains gluten."
  },
  {
    id: "s50",
    type: "judge",
    question: "Ingredients: Sorghum flour, tapioca starch, cane sugar, natural flavor. Label: 'Certified Gluten-Free'.",
    choices: ["Safe", "Not Safe", "Unclear – Needs Follow-Up"],
    answer: "Safe",
    explanation: "Certification and common GF ingredients; natural flavor source is controlled in certified products."
  },
];
