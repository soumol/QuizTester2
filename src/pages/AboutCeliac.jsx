// src/pages/AboutCeliac.jsx
import '../about.css';

export default function AboutCeliac() {
  return (
    <div className="about stack gap-lg">
      <header className="about__header">
        <h1>About Celiac Disease</h1>
        <p className="about__lead">
          A medically sourced overview of what celiac disease is, how it’s diagnosed, and how it’s treated.
        </p>
      </header>

      {/* What is celiac disease */}
      <section className="card">
        <h2>What Is Celiac Disease?</h2>
        <p>
          Celiac disease is a <strong>chronic autoimmune condition</strong> triggered by the ingestion of gluten, a protein found
          in wheat, barley, and rye. In people with celiac disease, the immune system mistakenly attacks the
          small intestine when gluten is consumed.
        </p>
      </section>

      {/* What part of gluten triggers it */}
      <section className="card">
        <h2>What Part of Gluten Triggers It?</h2>
        <p>
          The main culprit is <strong>gliadin</strong>, a component of gluten. When gliadin enters the small
          intestine of an individual with celiac disease, the immune system sees it as a threat. This leads to
          an autoimmune response that damages the intestinal lining.
        </p>
      </section>

      {/* What happens in the gut */}
      <section className="card">
        <h2>What Happens Inside the Gut?</h2>
        <p>
          In celiac disease, the body’s immune system attacks the <strong>villi</strong> in the small intestine
          after gluten is eaten. Villi are tiny, finger-like structures that absorb nutrients from food. When
          they become flattened or damaged, the body can no longer absorb nutrients properly.
        </p>
      </section>

      {/* Symptoms & consequences */}
      <section className="card">
        <h2>Consequences of Villi Damage & Other Symptoms</h2>

        <div className="about__group">
          <h3>Digestive Problems</h3>
          <p>Because nutrients and fluids aren’t absorbed well, people may experience:</p>
          <ul>
            <li><strong>Bloating</strong> from poor digestion and excess gas production</li>
            <li><strong>Diarrhea</strong> from unabsorbed nutrients drawing water into the intestines</li>
            <li><strong>Constipation</strong> if gut movement slows down due to inflammation</li>
          </ul>
          <p className="note">These symptoms often improve after switching to a strict gluten-free diet.</p>
        </div>

        <div className="about__group">
          <h3>Fatigue</h3>
          <p>
            Low absorption of iron, folate, and B12 can lead to tiredness and low energy. Without proper
            nutrition, the body struggles to make enough red blood cells and support normal metabolism.
          </p>
        </div>

        <div className="about__group">
          <h3>Iron-Deficiency Anemia</h3>
          <p>
            Iron is mainly absorbed in the upper small intestine. When this area is damaged, not enough iron is
            absorbed which leads to anemia, which can cause pale skin, weakness, and dizziness.
          </p>
        </div>

        <div className="about__group">
          <h3>Delayed Growth in Children</h3>
          <p>When children don’t absorb enough protein, vitamins, and minerals, it can affect:</p>
          <ul>
            <li>Height and weight gain</li>
            <li>Bone development</li>
            <li>Onset of puberty</li>
          </ul>
          <p className="note">
            Celiac disease is one of the leading causes of growth delay in children but often improves with
            proper treatment.
          </p>
        </div>

        <div className="about__group">
          <h3>Skin Rash — Dermatitis Herpetiformis</h3>
          <p>
            Some individuals living with celiac disease get a red, itchy rash on their elbows, knees, or back.
            This happens when the immune system forms <strong>IgA antibody</strong> deposits in the skin in
            response to gluten.
          </p>
        </div>
      </section>

      {/* Diagnosis */}
      <section className="card">
        <h2>How Is Celiac Disease Diagnosed?</h2>

        <div className="about__group">
          <h3>Serologic Blood Tests (tTG-IgA, EMA, and DGP)</h3>
          <ul>
            <li>
              One of the main screening tests for celiac disease is anti-tissue transglutaminase IgA (<strong>tTG-IgA</strong>). 
              When someone with celiac eats gluten, this antibody usually rises because the immune system is attacking both gluten and the small intestine.
            </li>
            <p>
              Doctors may also use other blood tests:
              <li><strong>EMA (Endomysial Antibodies)</strong>: Very specific for celiac disease. If positive, it strongly supports the diagnosis, though it’s not ordered as often.</li>
              <li><strong>DGP (Deamidated Gliadin Peptide Antibodies)</strong>: Helpful in young children or when tTG-IgA results are unclear.</li>
            </p>
            <li className="note">
              Note: Some people don’t make enough IgA (known as <strong>IgA deficiency</strong>), a total IgA test is usually done at the same time. This prevents false-negative results and ensures the tests are reliable.
            </li>
          </ul>
        </div>

        <div className="about__group">
          <h3>Intestinal Biopsy via Endoscopy</h3>
          <ul>
            <li>
              An endoscopy is a short procedure where a thin, flexible tube with a camera is gently passed
              through the mouth and into the small intestine to visualize the intestinal lining.
            </li>
            <li>
              During the procedure, small samples (<em>biopsies</em>) are taken from the small intestine lining.
            </li>
            <li>
              The samples are examined under a microscope to check for villi damage, which helps confirm the
              diagnosis.
            </li>
          </ul>
        </div>
      </section>

      {/* Treatment */}
      <section className="card">
        <h2>Treatment</h2>

        <div className="about__group">
          <h3>Strict, Lifelong Gluten-Free Diet</h3>
          <p>
            The only current treatment for celiac disease is completely avoiding gluten. This means cutting out
            all foods and products that contain wheat, barley, rye, and ingredients derived from those grains.
            Even small amounts of gluten can cause symptoms and intestinal damage.
          </p>
        </div>

        <div className="about__group">
          <h3>Close Nutritional Monitoring & Regular Checkups</h3>
          <p>People with celiac disease need ongoing care to ensure they’re:</p>
          <ul>
            <li>Ensure adequate intake of key nutrients (iron, calcium, B12, etc.)</li>
            <li>Assess healing progress</li>
            <li>Effective symptom control</li>
          </ul>
          <li className="note">
              Note: Doctors may recommend <strong>blood tests</strong>, <strong>bone density scans</strong>, and <strong>dietitian support</strong> to track progress.
            </li>
        </div>

        <div className="about__group">
          <h3>Avoiding Cross-Contamination</h3>
          <p>Even trace amounts of gluten from shared kitchen tools, toasters, or surfaces can trigger symptoms. 
            It is important to be aware of what cookware in your kitchen can increase the risk of cross-contact with gluten. 
            Wooden utensils and cast iron skillets pose the highest risk of cross-contact when sharing these items between gluten-free and gluten-containing cooking.</p>
        </div>

        <p className="note">
          This page is intended to supplement—not replace—the advice of healthcare professionals.
        </p>
      </section>

      {/* Sources */}
      <section className="card">
        <h2>Sources</h2>
        <ul className="about__sources">
          <li>
            Mayo Clinic — <a href="https://www.mayoclinic.org/diseases-conditions/celiac-disease/symptoms-causes/syc-20352220" target="_blank" rel="noreferrer">Symptoms & Causes</a>,
            <a href="https://www.mayoclinic.org/diseases-conditions/celiac-disease/diagnosis-treatment/drc-20352225" target="_blank" rel="noreferrer"> Diagnosis & Treatment</a>
          </li>
          <li>
            NIH: National Institute of Diabetes and Digestive and Kidney Diseases — 
            <a href="https://www.niddk.nih.gov/health-information/digestive-diseases/celiac-disease" target="_blank" rel="noreferrer"> Celiac Disease</a>
          </li>
          <li>
            Celiac Disease Foundation — 
            <a href="https://celiac.org/about-celiac-disease/what-is-celiac-disease/" target="_blank" rel="noreferrer"> What is Celiac Disease?</a>,
            <a href="https://celiac.org/about-celiac-disease/treatment/" target="_blank" rel="noreferrer"> Treatment</a>,
            <a href="https://celiac.org/about-celiac-disease/screening-and-diagnosis/" target="_blank" rel="noreferrer"> Screening & Diagnosis</a>
          </li>
          <li>
            Cleveland Clinic — 
            <a href="https://my.clevelandclinic.org/health/diseases/14240-celiac-disease" target="_blank" rel="noreferrer"> Celiac Disease</a>
          </li>
        </ul>
        <p className="note">
          Please note all facts listed on this page are sourced from medically reputable institutions.
        </p>
      </section>
    </div>
  );
}
