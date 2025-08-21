// src/data/crossContaminationBeginner.js
// Same schema you used elsewhere: { id, type: "yn" | "mcq" | "tf", question, choices?, answer, explanation }

export const CROSS_CONTAMINATION_BEGINNER = [
  // ===== YES / NO =====
  {
    id: "yn_cc_1",
    type: "yn",
    question: "Can you use the same toaster for gluten-free and regular bread?",
    answer: "Yes",
    explanation: "Yes—only if specific slots are strictly dedicated and maintained for GF use (e.g., in a 4-slot toaster, 2 slots reserved for GF only)."
  },
  {
    id: "yn_cc_2",
    type: "yn",
    question: "Do gluten-free foods need their own storage area?",
    answer: "No",
    explanation: "Not mandatory if items are sealed, labeled, and arranged to minimize cross-contact (e.g., store GF items above gluten items)."
  },
  {
    id: "yn_cc_3",
    type: "yn",
    question: "Is it safe to use a wooden spoon that was used with regular pasta?",
    answer: "No",
    explanation: "Wood is porous and can retain gluten. Use silicone or metal for GF cooking."
  },
  {
    id: "yn_cc_4",
    type: "yn",
    question: "Can you wash a non-stick pan with soap & water to remove gluten?",
    answer: "Yes",
    explanation: "Thorough washing with soap and water removes gluten residues."
  },
  {
    id: "yn_cc_5",
    type: "yn",
    question: "Should you always read food labels—even if it’s a product you’ve used before?",
    answer: "Yes",
    explanation: "Formulas change; always re-check for gluten-containing ingredients or advisory statements."
  },
  {
    id: "yn_cc_6",
    type: "yn",
    question: "Can deep-frying gluten-free fries in shared oil with breaded foods cause contamination?",
    answer: "Yes",
    explanation: "Crumbs from breaded items circulate in shared oil and adhere to GF foods."
  },
  {
    id: "yn_cc_7",
    type: "yn",
    question: "Do you need to wash your hands after handling regular bread?",
    answer: "Yes",
    explanation: "Crumbs transfer easily from hands to GF food and equipment."
  },
  {
    id: "yn_cc_8",
    type: "yn",
    question: "Can cross-contact happen if someone double-dips a knife into shared butter?",
    answer: "Yes",
    explanation: "Crumbs from gluten bread contaminate the jar. Use squeeze bottles/strict no double-dipping."
  },
  {
    id: "yn_cc_9",
    type: "yn",
    question: "Do oats need to be labeled gluten-free to be safe for people with celiac disease?",
    answer: "Yes",
    explanation: "Oats are often cross-contacted with gluten grains. Choose certified gluten-free oats."
  },
  {
    id: "yn_cc_10",
    type: "yn",
    question: "Can you share a pasta strainer when preparing gluten free and non gluten free pasta together?",
    answer: "Yes (if precautions are taken)",
    explanation: "Only if GF pasta is rinsed first and moved to a separate bowl before straining gluten pasta in the same strainer."
  },
  {
    id: "yn_cc_11",
    type: "yn",
    question: "Can wiping crumbs off a surface with your hand make it safe for gluten-free food?",
    answer: "No",
    explanation: "Crumbs/residue remain. Clean with soap and water or a fresh disposable wipe."
  },
  {
    id: "yn_cc_12",
    type: "yn",
    question: "Do you need to clean a grill before cooking gluten-free meat on it?",
    answer: "Yes",
    explanation: "Scrape/scrub grates or use clean foil to avoid residue from prior gluten foods."
  },
  {
    id: "yn_cc_13",
    type: "yn",
    question: "Can using the same colander for regular and gluten-free pasta cause issues?",
    answer: "Yes",
    explanation: "Starchy gluten residue clings to holes/mesh. Separate or thoroughly cleaned colanders are safest."
  },
  {
    id: "yn_cc_14",
    type: "yn",
    question: "Is it okay to share an ice cream scoop when distributing ice cream amongst regular and gluten free cones?",
    answer: "Yes (if precautions are taken)",
    explanation: "Yes—if you wash between scoops or avoid double-dipping. Otherwise, cone crumbs contaminate the scoop."
  },
  {
    id: "yn_cc_15",
    type: "yn",
    question: "Should people with celiac avoid bulk bins at grocery stores?",
    answer: "Yes",
    explanation: "Scoops and bins are often shared; dust and spills cause cross-contact."
  },
  {
    id: "yn_cc_16",
    type: "yn",
    question: "Is it okay to assume tortilla chips are gluten-free?",
    answer: "No",
    explanation: "Check labels and ask about fryer practices at restaurants."
  },

  // ===== MULTIPLE CHOICE =====
  {
    id: "mcq_cc_1",
    type: "mcq",
    question: "Which of these kitchen tools (if any) are required to be kept separate for gluten-free cooking?",
    choices: [
      "Non-stick pots/pans",
      "Silicon, metal cooking utensils",
      "4 slot toaster with 2 slots dedicated gluten-free.",
      "None of the above (if precaution is used)."
    ],
    answer: "None of the above (if precaution is used).",
    explanation: "Dedicated tools aren’t strictly required if thoroughly cleaned (many still dedicate toaster slots to reduce risk)."
  },
  {
    id: "mcq_cc_2",
    type: "mcq",
    question: "What should you do before preparing gluten-free food?",
    choices: [
      "Nothing, it’s fine",
      "Wipe the counter with a dry towel",
      "Wash surfaces and hands thoroughly",
      "Just rinse the utensils"
    ],
    answer: "Wash surfaces and hands thoroughly",
    explanation: "Start with clean hands and properly cleaned surfaces/equipment."
  },
  {
    id: "mcq_cc_3",
    type: "mcq",
    question: "Which of the following foods has a hidden source of gluten?",
    choices: ["Brown rice", "Corn flour", "Soy sauce", "Olive oil"],
    answer: "Soy sauce",
    explanation: "Many soy sauces contain wheat. Choose GF-labeled soy sauce or tamari."
  },
  {
    id: "mcq_cc_4",
    type: "mcq",
    question: "What’s a safe condiment method for gluten-free households?",
    choices: [
      "Sharing the same jar of peanut butter",
      "Using a squeeze bottle",
      "Using the same knife for both breads",
      "Double dipping to save time"
    ],
    answer: "Using a squeeze bottle",
    explanation: "Squeeze bottles/single-serve packs reduce crumb contamination."
  },
  {
    id: "mcq_cc_5",
    type: "mcq",
    question: "Which of these is usually gluten-free?",
    choices: ["Whole apples", "Pasta salad from a buffet", "Fried onion rings", "Pizza crust"],
    answer: "Whole apples",
    explanation: "Fruits/vegetables are naturally gluten-free (watch for coatings/seasonings)."
  },
  {
    id: "mcq_cc_6",
    type: "mcq",
    question: "What does “wheat-free” mean?",
    choices: ["Gluten-free", "Safe for celiacs", "No wheat, but might still contain barley or rye", "Contains dairy"],
    answer: "No wheat, but might still contain barley or rye",
    explanation: "“Wheat-free” can still include other gluten grains; look for “gluten-free.”"
  },
  {
    id: "mcq_cc_7",
    type: "mcq",
    question: "Which is the safest way to heat gluten-free pizza?",
    choices: [
      "On the same tray as regular pizza",
      "On clean foil or a separate tray",
      "Directly on oven rack",
      "In a toaster with regular crumbs"
    ],
    answer: "On clean foil or a separate tray",
    explanation: "Clean foil/a dedicated tray prevents stray crumbs contacting the GF slice."
  },
  {
    id: "mcq_cc_8",
    type: "mcq",
    question: "What’s the best way to keep gluten-free snacks safe in a shared pantry?",
    choices: ["Mix everything together", "Store them below gluten items", "Store them above gluten items", "Leave them open"],
    answer: "Store them above gluten items",
    explanation: "Keep GF foods sealed and stored above gluten to avoid fallout/dust."
  },
  {
    id: "mcq_cc_9",
    type: "mcq",
    question: "Which of these utensils is most likely to hold onto gluten?",
    choices: ["Silicon spatula", "Wooden spatula", "Metal spatula", "Plastic spatula"],
    answer: "Wooden spatula",
    explanation: "Wood is porous and retains residue more than non-porous materials."
  },
  {
    id: "mcq_cc_10",
    type: "mcq",
    question: "Which label is most important to look for on oats?",
    choices: ["Low sugar", "Fortified", "Organic", "Certified gluten-free"],
    answer: "Certified gluten-free",
    explanation: "Certified GF oats are produced/handled to avoid cross-contact."
  },
  {
    id: "mcq_cc_11",
    type: "mcq",
    question: "Which of these items may contain hidden gluten?",
    choices: ["Rice cakes", "Marshmallows", "Licorice", "All of the above"],
    answer: "All of the above",
    explanation: "Depending on brand/recipe, each can include gluten (malt flavoring, wheat binders, flour dusting)."
  },
  {
    id: "mcq_cc_12",
    type: "mcq",
    question: "What does “certified gluten-free” on a label mean?",
    choices: [
      "It’s vegan",
      "The product has undergone third party testing while still meeting the FDA regulation for less than 20 parts per million.",
      "It contains wheat",
      "It’s high in fiber"
    ],
    answer: "The product has undergone third party testing while still meeting the FDA regulation for less than 20 parts per million.",
    explanation: "Certification verifies the product meets the GF standard (e.g., < 20 ppm in the U.S.)."
  },
  {
    id: "mcq_cc_13",
    type: "mcq",
    question: "You’re at a party with a shared chip bowl. What’s the safest thing to do?",
    choices: ["Eat from the bowl", "Ask if they’re gluten-free", "Bring your own labeled snack", "Just take a handful"],
    answer: "Bring your own labeled snack",
    explanation: "Shared bowls are cross-contact hotspots. Bringing a labeled GF snack is safest."
  },
  {
    id: "mcq_cc_14",
    type: "mcq",
    question: "Which of these kitchen appliances can be risky if shared?",
    choices: ["Stand mixer", "Coffee maker", "Microwave", "None of the above as long as they have been thoroughly cleaned."],
    answer: "None of the above as long as they have been thoroughly cleaned.",
    explanation: "Residue is the risk; if thoroughly cleaned (attachments too), appliances can be shared safely."
  },
  {
    id: "mcq_cc_15",
    type: "mcq",
    question: "Which action is safest for a gluten-free lunchbox?",
    choices: [
      "Using last night’s shared leftovers",
      "Using fresh, labeled gluten-free items only",
      "Reusing a sandwich bag from a gluten lunch",
      "Putting food directly into the backpack"
    ],
    answer: "Using fresh, labeled gluten-free items only",
    explanation: "Fresh, clearly labeled GF items reduce cross-contact from containers and surfaces."
  },
  {
    id: "mcq_cc_16",
    type: "mcq",
    question: "Which of these is most likely to cause cross-contact at a restaurant?",
    choices: ["Steamed broccoli", "Grilled chicken with BBQ sauce", "French fries cooked in a shared fryer", "A glass of water"],
    answer: "French fries cooked in a shared fryer",
    explanation: "Shared fryers commonly contain crumbs from breaded items that stick to otherwise GF foods."
  },
  {
    id: "mcq_cc_17",
    type: "mcq",
    question: "Which cooking technique increases gluten risk the most?",
    choices: ["Steaming vegetables", "Frying in shared oil", "Microwaving with a paper towel", "Boiling in water"],
    answer: "Frying in shared oil",
    explanation: "Shared oil transfers crumbs/residue to GF foods."
  },
  {
    id: "mcq_cc_18",
    type: "mcq",
    question: "How should you clean shared cooking surfaces before gluten-free prep?",
    choices: ["Dry towel wipe", "Rinse with cold water", "Use soap and hot water to clean", "Scrape with a knife"],
    answer: "Use soap and hot water to clean",
    explanation: "Soap and hot water remove residue best; wash/replace cloths/sponges too."
  },

  // ===== TRUE / FALSE =====
  { id: "tf_cc_1", type: "tf", question: "You can pick croutons off a salad and it will be gluten-free.", answer: "False", explanation: "Crumbs remain; salad is not safe after croutons touched it." },
  { id: "tf_cc_2", type: "tf", question: "Even tiny crumbs of gluten can cause a reaction in people with celiac.", answer: "True", explanation: "Very small exposures can trigger immune activation/symptoms." },
  { id: "tf_cc_3", type: "tf", question: "Gluten is only dangerous when swallowed.", answer: "True", explanation: "Gluten isn’t absorbed through intact skin; ingestion is the risk." },
  { id: "tf_cc_4", type: "tf", question: "All plain/unflavoured rice is naturally gluten-free.", answer: "True", explanation: "Rice is naturally GF; watch for flavored/seasoned varieties." },
  { id: "tf_cc_5", type: "tf", question: "Using separate butter dishes is just being overly cautious.", answer: "False", explanation: "Shared knives introduce crumbs; separate or squeeze bottles help." },
  { id: "tf_cc_6", type: "tf", question: "Restaurants always understand what gluten-free means.", answer: "False", explanation: "Practices vary; it’s important to ask and confirm procedures." },
  { id: "tf_cc_7", type: "tf", question: "Gluten-free food can still be unsafe if prepared incorrectly.", answer: "True", explanation: "Cross-contact during prep can make otherwise GF food unsafe." },
  { id: "tf_cc_8", type: "tf", question: "Cleaning your hands after touching gluten isn't important.", answer: "False", explanation: "Hand hygiene prevents transferring crumbs to GF items." },
  { id: "tf_cc_9", type: "tf", question: "\"May contain wheat\" on a certified gluten free product is safe for someone with celiac.", answer: "True", explanation: "Per your provided bank." },
  { id: "tf_cc_10", type: "tf", question: "Flour can stay in the air for hours after baking.", answer: "True", explanation: "Airborne flour can settle on surfaces/foods and contaminate them." },
  { id: "tf_cc_11", type: "tf", question: "Even “natural” or “organic” products can contain gluten.", answer: "True", explanation: "Organic/‘natural’ labels don’t guarantee gluten-free." },
  { id: "tf_cc_12", type: "tf", question: "Gluten can only be found in bread and pasta.", answer: "False", explanation: "Gluten shows up in sauces, dressings, snacks, candies, etc." },
  { id: "tf_cc_13", type: "tf", question: "All packaged foods labelled gluten-free are safe for celiacs.", answer: "True", explanation: "Per your provided bank." },
  { id: "tf_cc_14", type: "tf", question: "Reading a product label once is enough.", answer: "False", explanation: "Ingredients change. Always re-check labels." },
  { id: "tf_cc_15", type: "tf", question: "Cross-contact is only a problem in restaurants.", answer: "False", explanation: "It can happen anywhere food is prepared or served." }
]
