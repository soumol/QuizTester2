import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="brand">CeliacSmart</NavLink>
        <nav className="nav-links">
          <NavLink to="/about-celiac" className={({isActive}) => isActive ? 'link active' : 'link'}>
            About Celiac Disease
          </NavLink>
          <NavLink to="/quizzes" className={({isActive}) => isActive ? 'link active' : 'link'}>
            Educational Quizzes
          </NavLink>
          <NavLink to="/resources" className={({isActive}) => isActive ? 'link active' : 'link'}>
            Resources
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
