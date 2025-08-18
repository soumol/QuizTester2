import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="brand">QuizTester2</NavLink>
        <nav className="nav-links">
          <NavLink to="/about-celiac" className={({isActive}) => isActive ? 'link active' : 'link'}>
            about celiac disease
          </NavLink>
          <NavLink to="/quizzes" className={({isActive}) => isActive ? 'link active' : 'link'}>
            educational quizzes
          </NavLink>
          <NavLink to="/resources" className={({isActive}) => isActive ? 'link active' : 'link'}>
            resources
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
