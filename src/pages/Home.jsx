export default function Home() {
  return (
    <div className="stack gap-lg">
      <section className="hero">
        <h1>Welcome to CeliacSmart</h1>
        <p className="sub">Your trusted guide to gluten-free confidence</p>
      </section>

      <section className="card">
        <h2>The Mission</h2>
        <p>
          CeliacSmart is a welcoming, all-in-one educational platform developed under the guidance of the
          Children’s Hospital Colorado Celiac Center team dedicated to empowering children and families living
          with celiac disease.
        </p>
        <p>The mission is to…</p>
        <ul>
          <li>Simplify celiac education</li>
          <li>Build confidence in gluten-free living</li>
          <li>Provide tools to navigate cross-contamination risks</li>
          <li>Share medically sound, accessible information</li>
        </ul>
        <p className="note">
          Note: This site is meant to supplement, not replace, the advice of healthcare professionals.
        </p>
      </section>

      <section className="card">
        <h2>About Me</h2>
        <p>
          Hi! I’m Sian Chirakattu, a medical student passionate about patient-centered healthcare.
          I wanted to create CeliacSmart to support families navigating life with celiac disease.
          It’s no secret that a celiac diagnosis can be overwhelming — I wanted to bridge the gap
          between medical advice and everyday life with a resource that is:
        </p>
        <ul>
          <li>Compassionate</li>
          <li>Accurate</li>
          <li>Easy to understand</li>
          <li>Interactive and fun</li>
        </ul>
      </section>
    </div>
  )
}
