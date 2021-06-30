import { NavLink } from 'react-router-dom'

export const Nav = () => {
    return (
        <div className="container">
            <nav className="justify-content-center navbar navbar-expand navbar-dark bg-dark fixed-bottom">
                <div class="navbar-nav">
                    <div class="nav-item">
                        <a href="/" class="nav-link">
                            Home
                        </a>
                    </div>
                    <div class="nav-item">
                        <a href="/about" class="nav-link">
                            About
                        </a>
                    </div>
                    <div class="nav-item">
                        <a href="/projects" class="nav-link">
                            Projects
                        </a>
                    </div>
                    <div class="nav-item">
                        <a href="/contact" class="nav-link">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}