import { NavLink } from 'react-router-dom'

export const Nav = () => {
    return (
        <div className="container">
            <nav className="justify-content-center navbar navbar-expand navbar-dark bg-dark fixed-bottom">
                <div className="navbar-nav">
                    <div className="nav-item">
                        <NavLink to="/" className="nav-link" exact>
                            Home
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to="/about" className="nav-link">
                            About
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to="/projects" className="nav-link">
                            Projects
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to="/contact" className="nav-link">
                            Contact
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}