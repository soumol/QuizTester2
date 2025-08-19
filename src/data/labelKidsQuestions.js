// src/data/labelKidsQuestions.js
// Types supported by your component: 'yn' (Yes/No), 'mcq', 'tf'.
// For images, use `image: "/labels/<filename>"` (served from /public).

export const LABEL_KIDS_QUESTIONS = [
  // ======== Section 1: Logo Recognition (updated) ========

  { id: "k1", type: "yn", image: "/labels/gfco_logo.png",
    question: "Is this a gluten-free certification?",
    answer: "Yes",
    explanation: "This is the GFCO logo. Certified GF products are tested and safe when used as directed." },

  { id: "k2", type: "mcq", image: "/labels/aoecs_crossed_grain.png",
    question: "What does this symbol mean?",
    choices: ["Vegan", "Dairy-Free", "Gluten-Free"],
    answer: "Gluten-Free",
    explanation: "The AOECS Crossed Grain symbol is a recognized gluten-free certification in Europe." },

  { id: "k3", type: "yn", image: "/labels/aoecs_crossed_grain.png",
    question: "Is this safe for someone with celiac?",
    answer: "Yes",
    explanation: "Certified GF foods are safe for people with celiac disease." },

  { id: "k4", type: "yn", image: "/labels/wheat_free_icon.png",
    question: "Is this the same as gluten-free?",
    answer: "No",
    explanation: "'Wheat-free' is not the same as gluten-free; barley or rye may still be present." },

  { id: "k5", type: "yn", image: "/labels/fake_gf_symbol.png",
    question: "Would a product with this symbol be safe to eat on a gluten free diet?",
    answer: "Yes",
    explanation: "The word 'gluten-free' on any product subjects the product to FDA regulations." },

{ id: "k6", type: "yn", image: "/labels/GF_chocolate_cake.jpg",
    question: "Is this cake safe to consume?",
    answer: "Yes",
    explanation: "The word 'gluten-free' on any product subjects the product to FDA regulations." },

{ id: "k7", type: "yn", image: "/labels/GF_pancakes.jpg",
    question: "Is this pancake mix safe to consume?",
    answer: "Yes",
    explanation: "GFCO certified." },

{ id: "k8", type: "yn", image: "/labels/GF_granola_bar.png",
    question: "Are these granola bars safe to consume?",
    answer: "Yes",
    explanation: "The word 'gluten-free' on any product subjects the product to FDA regulations and these are NSF certified as well!" },

  { id: "k9", type: "yn", image: "/labels/granola_gfco.jpg",
    question: "Is this granola safe for someone with celiac disease?",
    answer: "Yes",
    explanation: "The GFCO logo shows third-party gluten-free certification." },

  { id: "k10", type: "yn", image: "/labels/GF_chicken_nuggets.png",
    question: "Are these breaded chicken nuggets safe for someone with celiac disease?",
    answer: "Yes",
    explanation: "The word 'gluten-free' on any product subjects the product to FDA regulations." },

  { id: "k11", type: "yn", image: "/labels/toffee_gfco.jpg",
    question: "Are these toffee chocolates certified as a GF free product?",
    answer: "Yes",
    explanation: "GFCO certification confirms testing and standards are met." },

  { id: "k12", type: "yn", image: "/labels/pasta_gfco.jpg",
    question: "Is this pasta safe to eat on a gluten free diet?",
    answer: "Yes",
    explanation: "GFCO certified pasta is gluten-free." },

  { id: "k13", type: "yn", image: "/labels/chicken_nuggets.jpg",
    question: "Are these chicken nuggets safe to eat on a gluten free diet?",
    answer: "No",
    explanation: "There is no gluten free claim nor certification." },

  { id: "k14", type: "yn", image: "/labels/cookies_gfco.jpg",
    question: "Are these cookies safe to eat on a gluten free diet?",
    answer: "Yes",
    explanation: "GFCO certification indicates gluten-free." },

  { id: "k15", type: "yn", image: "/labels/rotini_wheat.jpg",
    question: "Is this rotini pasta gluten free?",
    answer: "No",
    explanation: "Contains wheat ingredients; not safe for celiac disease." },

  { id: "k16", type: "yn", image: "/labels/protein_pasta_wheat.jpg",
    question: "Is this protein pasta gluten free?",
    answer: "No",
    explanation: "Many ‘protein pastas’ are wheat-based unless labeled certified GF." },

  { id: "k17", type: "yn", image: "/labels/cookies_uncertified.jpg",
    question: "Are these cookies safe to eat on a GF diet?",
    answer: "No",
    explanation: "Not advertised as gluten free and unclear ingredients." },

  { id: "k18", type: "yn", image: "/labels/bread_gfco.jpg",
    question: "Is this bread gluten free?",
    answer: "Yes",
    explanation: "GFCO certification indicates gluten-free." },

  { id: "k19", type: "yn", image: "/labels/sourdough_wheat.jpg",
    question: "Is this sourdough bread gluten free?",
    answer: "No",
    explanation: "Sourdough made with wheat is not gluten-free." },

  { id: "k20", type: "yn", image: "/labels/oreo_regular.jpg",
    question: "Are these Oreo cookies safe to eat on a gluten free diet?",
    answer: "No",
    explanation: "Regular Oreos contain gluten. Look for packages clearly labeled GF/certified." },

  { id: "k21", type: "yn", image: "/labels/oreo_gfco.jpg",
    question: "Are these Oreo cookies safe to eat on a gluten free diet?",
    answer: "Yes",
    explanation: "This variant is clearly labeled/certified gluten-free." },

  // ======== Section 2: Label Clues & Ingredient Questions (kids-friendly) ========

  { id: "k22", type: "yn",
    question: "If a snack bar says 'made in a facility that processes wheat,' should you eat it?",
    answer: "No",
    explanation: "Risk of cross-contact with gluten." },

  { id: "k23", type: "yn",
    question: "You see 'malt extract' in the ingredients. Is it safe?",
    answer: "No",
    explanation: "Usually barley-derived — not gluten-free." },

  { id: "k24", type: "yn",
    question: "You see 'certified gluten-free oats' in cookies. Is that okay?",
    answer: "Yes",
    explanation: "Certified/purity protocol oats are considered safe for celiacs." },

  { id: "k25", type: "mcq",
    question: "What should you look for on a snack label to know it's gluten-free?",
    choices: ["The word gluten-free or a gluten free label", "A big green leaf", "A low sugar claim"],
    answer: "The word gluten-free or a gluten free label",
    explanation: "Look for a recognized GF certification or a clear GF claim." },

  { id: "k26", type: "mcq",
    question: "What might be hiding gluten?",
    choices: ["Cheese powder", "Natural flavors", "All of the above"],
    answer: "All of the above",
    explanation: "These can include gluten or carry cross-contact risks; verify the source." },

  { id: "k27", type: "tf",
    question: "True or False: 'Wheat-free' always means gluten-free.",
    answer: "False",
    explanation: "Barley or rye can still be present." },

  { id: "k28", type: "yn",
    question: "You see a cookie that says 'no gluten ingredients.' Is it safe to consume?",
    answer: "Yes",
    explanation: "The claim 'no gluten' subjects the cookie to meet FDA regulation standards." },

  { id: "k29", type: "mcq",
    question: "Which one is a gluten-free ingredient?",
    choices: ["Wheat starch", "Rice flour", "Rye"],
    answer: "Rice flour",
    explanation: "Rice flour is gluten-free." },

  { id: "k30", type: "yn",
    question: "You find candy with 'wheat syrup' on the label. Is it okay to eat?",
    answer: "No",
    explanation: "Wheat-derived syrup isn’t reliably gluten-free." },

  { id: "k31", type: "yn",
    question: "A label says 'contains wheat.' Can you eat it?",
    answer: "No",
    explanation: "Avoid it — it contains gluten." },

  { id: "k32", type: "mcq",
    question: "Which is safer?",
    choices: [
      "A candy with no readable ingredients label",
      "A candy with a GFCO logo",
      "A candy with no GF label",
      "A candy with a GFCO logo that is in a shared bowl with other treats"
    ],
    answer: "A candy with a GFCO logo",
    explanation: "Certification is best; avoid shared bowls due to cross-contact." },

  { id: "k33", type: "yn",
    question: "The label says: 'Gluten-Free' and shows a certified GF logo. Is it safe?",
    answer: "Yes",
    explanation: "Certified GF is considered safe." },

  { id: "k34", type: "yn",
    question: "The cereal box says 'Wheat-Free' but has malt extract in the ingredients. Is it safe?",
    answer: "No",
    explanation: "Malt extract is barley-derived." },

  { id: "k35", type: "yn",
    question: "A snack bar says 'No gluten ingredients used,' but there’s no logo or certification. Is it safe?",
    answer: "Yes",
    explanation: "The claim 'no gluten' subjects the product to meet FDA gluten free standards." },

  { id: "k36", type: "yn",
    question: "The package says: 'Certified Gluten-Free' and contains rice, sugar, and chocolate chips. Is it safe?",
    answer: "Yes",
    explanation: "Common GF ingredients + certification." },

  { id: "k37", type: "yn",
    question: "You see 'barley malt' in the ingredient list. Is it safe?",
    answer: "No",
    explanation: "Barley malt contains gluten." },

  { id: "k38", type: "yn",
    question: "You find a cookie that says 'Made in a facility that processes wheat.' Is it safe?",
    answer: "No",
    explanation: "Cross-contact risk." },

  { id: "k39", type: "yn",
    question: "The label says: '100% Corn Chips – Ingredients: Corn, Oil, Salt'. Is it safe?",
    answer: "Yes",
    explanation: "Naturally GF ingredients and simple list — generally safe." },

  { id: "k40", type: "yn",
    question: "You see 'natural flavors' listed, and there’s no gluten-free logo. Is it safe?",
    answer: "No",
    explanation: "‘Natural flavors’ can sometimes include gluten; use caution and verify or avoid." },

  { id: "k41", type: "yn",
    question: "A candy says 'gluten-free' but also says 'not tested for wheat.' Is it safe?",
    answer: "Yes",
    explanation: "Meets FDA gluten free standards." },

  { id: "k42", type: "yn",
    question: "A bag of gluten-free pretzels is next to a torn open bag of wheat pretzels on the same shelf. Is it safe?",
    answer: "No",
    explanation: "Crumbs/cross-contact risk." },

  { id: "k43", type: "yn",
    question: "A label says: 'Contains: Wheat.' Is it safe?",
    answer: "No",
    explanation: "Contains a gluten source; avoid." },

  { id: "k44", type: "yn",
    question: "The label says: 'Gluten-Free Oats' and has a certified logo. Is it safe?",
    answer: "Yes",
    explanation: "Certified oats are considered safe for most celiacs." },

  { id: "k45", type: "yn",
    question: "A label says: 'No gluten,' but you don’t recognize the brand and there’s no certification. Is it safe?",
    answer: "Yes",
    explanation: "Use of no gluten claim on packaging means it meets FDA gluten free standards." },

  { id: "k46", type: "yn",
    question: "The bread says: 'Gluten-Free' and also 'Certified by GFCO.' Is it safe?",
    answer: "Yes",
    explanation: "Certification confirms testing to a threshold." },

    { id: "k47", type: "yn",
    question: "A soup says 'contains soy sauce'. Is it safe?",
    answer: "No",
    explanation: "Traditional soy sauce is made from wheat, soybeans, salt, and water." },

  { id: "k48", type: "yn",
    question: "A protein bar lists spelt in the ingredients. Is it safe?",
    answer: "No",
    explanation: "Spelt is a wheat variety — contains gluten." },

  { id: "k49", type: "yn",
    question: "You find chocolate that says 'gluten-free,' and it has no crumbs or other foods around it. Is it safe?",
    answer: "Yes",
    explanation: "Clean handling and GF claim — generally safe." },

  { id: "k50", type: "yn",
    question: "You see a label with a green leaf that says 'All Natural.' Is it safe?",
    answer: "No",
    explanation: "‘Natural’ is not the same as gluten-free." },
];
