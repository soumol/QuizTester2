export default function Resources() {
  return (
    <div className="stack gap-lg container">
      <h1>Resources</h1>
      <p>Explore reputable, medically-sound links, guides, and community support for living with celiac disease.</p>

      {/* Educational Resources */}
      <section className="card stack gap-md">
        <h2>Educational Resources</h2>
        <ul className="stack gap-md" style={{ margin: 0, paddingLeft: 18 }}>
          <li>
            <strong>Celiac Disease Foundation:</strong>{" "}
            <a href="https://celiac.org" target="_blank" rel="noopener noreferrer">celiac.org</a>
            <ul className="stack gap-md" style={{ marginTop: 8, paddingLeft: 18 }}>
              <li><a href="https://celiac.org/get-involved/events/" target="_blank" rel="noopener noreferrer">Events</a></li>
              <li><a href="https://celiac.org/publicpolicyresources/" target="_blank" rel="noopener noreferrer">Policy Resources</a></li>
              <li><a href="https://eat-gluten-free.celiac.org/" target="_blank" rel="noopener noreferrer">Recipes</a></li>
            </ul>
          </li>

          <li>
            <strong>Beyond Celiac:</strong>{" "}
            <a href="https://www.beyondceliac.org/" target="_blank" rel="noopener noreferrer">beyondceliac.org</a>
            <ul className="stack gap-md" style={{ marginTop: 8, paddingLeft: 18 }}>
              <li><a href="https://www.beyondceliac.org/news-events/upcoming-events/" target="_blank" rel="noopener noreferrer">Events</a></li>
              <li><a href="https://www.beyondceliac.org/resources/" target="_blank" rel="noopener noreferrer">Resource Library</a></li>
              <li><a href="https://www.beyondceliac.org/gluten-free-diet/overview/a-guide-to-the-gluten-free-diet-for-kids/" target="_blank" rel="noopener noreferrer">Kid-Friendly Recipes & Guides</a></li>
            </ul>
          </li>

          <li>
            <strong>National Celiac Association:</strong>{" "}
            <a href="https://nationalceliac.org" target="_blank" rel="noopener noreferrer">nationalceliac.org</a>
            <ul className="stack gap-md" style={{ marginTop: 8, paddingLeft: 18 }}>
              <li><a href="https://nationalceliac.org/find-a-food-bank-pantry-near-you/" target="_blank" rel="noopener noreferrer">Food Pantry Locator</a></li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Communities & Support */}
      <section className="card stack gap-md">
        <h2>Communities & Support Groups</h2>
        <ul className="stack gap-md" style={{ margin: 0, paddingLeft: 18 }}>
          <li>
            <a
              href="https://nationalceliac.org/celiac-disease-support-groups/?srsltid=AfmBOooAvWMrObmVvsAKg-6A3r94MDcwNMHgL3qemy-lx65aXWCjOvNP"
              target="_blank" rel="noopener noreferrer"
            >
              National Celiac Association Support Groups
            </a>
          </li>
          <li>
            <a href="https://gluten.org/community/support-groups/" target="_blank" rel="noopener noreferrer">
              Gluten Intolerance Group (GiG) Support Communities
            </a>
          </li>
          <li>
            <a href="https://nationalceliac.org/raising-our-celiac-kids-rock/" target="_blank" rel="noopener noreferrer">
              Raising Our Celiac Kids (R.O.C.K.)
            </a>
          </li>
        </ul>
      </section>

      {/* Printables */}
      <section className="card stack gap-md">
        <h2>Printable Activities & Resources</h2>
        <p><em>*** Coming Soon!! ***</em></p>
      </section>
    </div>
  )
}
