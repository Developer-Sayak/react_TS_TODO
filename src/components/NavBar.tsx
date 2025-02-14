import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="">All</Link>
      <Link to="/?todos=active" className="">Actice</Link>
      <Link to="/?todos=completed" className="">Completed</Link>
    </nav>
  )
}

export default NavBar
