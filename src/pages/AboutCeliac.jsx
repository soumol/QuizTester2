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
          Celiac disease is a chronic autoimmune condition triggered by the ingestion of gluten, a protein found
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
          <h3>Serologic Blood Tests (tTG-IgA)</h3>
          <ul>
            <li>
              A key diagnostic marker is anti-tissue transglutaminase IgA (<strong>tTG-IgA</strong>), an
              antibody that rises in response to gluten exposure in celiac disease.
            </li>
            <li>
              Patients with celiac often have high levels of <strong>IgA antibodies</strong>, which are part of
              the immune response attacking both gluten and intestinal tissue.
            </li>
            <li className="note">
              Note: A <strong>total serum IgA</strong> test is sometimes done to rule out IgA deficiency, which
              can give false negatives on standard celiac tests.
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
            all foods and products that contain wheat, barley, rye, and most oats (unless labeled gluten-free).
            Even small amounts of gluten can cause symptoms and intestinal damage.
          </p>
        </div>

        <div className="about__group">
          <h3>Close Nutritional Monitoring & Regular Checkups</h3>
          <ul>
            <li>Ensure adequate intake of key nutrients (iron, calcium, B12, etc.)</li>
            <li>Assess healing progress and symptom control</li>
            <li>Use labs, bone density scans, and dietitian support as needed</li>
          </ul>
        </div>

        <div className="about__group">
          <h3>Avoiding Cross-Contamination</h3>
          <p>Even trace amounts of gluten can trigger symptoms. It’s important to:</p>
          <ul>
            <li>Use separate cutting boards, cookware, and toasters</li>
            <li>Read labels carefully for hidden gluten</li>
            <li>Be cautious when eating out</li>
          </ul>
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
