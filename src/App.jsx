import './App.css'

function App() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="admission-page">
      <section className="intro-panel">
        <div className="brand-mark">N</div>
        <p className="eyebrow">Northstar University</p>
        <h1>Shape what comes next.</h1>
        <p className="intro-copy">
          Begin your application for a university experience built around
          curiosity, collaboration, and meaningful work.
        </p>
        <div className="application-note">
          <span className="note-icon">01</span>
          <p><strong>2026 admissions</strong><br />Applications are now open for the fall intake.</p>
        </div>
        <div className="campus-lines" aria-hidden="true"><span /><span /><span /></div>
      </section>

      <section className="form-panel">
        <div className="form-heading">
          <div>
            <p className="eyebrow">Applicant profile</p>
            <h2>Start your application</h2>
          </div>
          <span className="step-count">1 / 3</span>
        </div>

        {submitted ? (
          <div className="success-message" role="status">
            <span className="success-icon">✓</span>
            <h2>You're on your way.</h2>
            <p>Your application profile has been created. Check your inbox for the next steps.</p>
            <button type="button" className="secondary-button" onClick={() => setSubmitted(false)}>Edit application</button>
          </div>
        ) : (
          <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
            <div className="field-grid">
              <label>First name<input type="text" name="firstName" placeholder="e.g. Maya" required /></label>
              <label>Last name<input type="text" name="lastName" placeholder="e.g. Chen" required /></label>
            </div>
            <label>Email address<input type="email" name="email" placeholder="you@example.com" required /></label>
            <label>Phone number<input type="tel" name="phone" placeholder="+1 555 000 0000" required /></label>
            <div className="field-grid">
              <label>Date of birth<input type="date" name="birthDate" required /></label>
              <label>Country of residence<select name="country" defaultValue="" required><option value="" disabled>Select country</option><option>United States</option><option>Canada</option><option>United Kingdom</option><option>Other</option></select></label>
            </div>
            <label>Intended program<select name="program" defaultValue="" required><option value="" disabled>Choose a program</option><option>Computer Science</option><option>Business &amp; Innovation</option><option>Design &amp; Media</option><option>Environmental Studies</option><option>Psychology</option></select></label>
            <label className="consent"><input type="checkbox" required /><span>I agree to receive application updates and confirm that the information provided is accurate.</span></label>
            <button className="submit-button" type="submit">Continue to application <span aria-hidden="true">→</span></button>
            <p className="secure-note">Your information is encrypted and kept private.</p>
          </form>
        )}
      </section>
    </main>
  )
}

export default App
