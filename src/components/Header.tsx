import { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react'; // mga icons para sa menu open ogclose
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

export function Header() {
    // state para i track if ang mobile menu ba is open
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // navigation hook from react-router (para sa logout)
    const navigate = useNavigate();

    // handle logout: clear local storage and redirect to login
    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('rememberMe');
        navigate('/login'); // return sa login
    };

    return (
        <header className="header">
            <div className="container header-container">

                {/* LOGO SECTION */}
                <div className="logo">
                    <span>Portfolio</span>
                    <span className="logo-accent">.</span>
                </div>

                {/* desktop mode (Responsive Layout) */}
                <nav className="desktop-nav">
                    {['Home'].map((item) => (
                        // link to sections of the page (naka map kay daghan man tana to sila pero gi remove nalang nako) 
                        <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                            {item}
                        </a>
                    ))}

                    {/* kani logout para rani sa desktop */}
                    <button onClick={handleLogout} className="nav-link logout-button">
                        Logout
                    </button>
                </nav>

                {/* mobile menu (hamburger mode) */}
                <button
                    className="mobile-menu-button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {/* toggle icon depending sa menu state */}
                    {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                </button>
            </div>

            {/* mobile navigation (mu gana rani siya if true ang mobile mode : css ang mu trigger sa mobile mode) */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <div className="container">
                        <nav className="mobile-nav">
                            {['Home'].map((item) => (
                                // mag close ang menu if mag click og any nga link
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="mobile-nav-link"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}

                            {/* logout button para sa mobile */}
                            <button
                                onClick={() => {
                                    handleLogout();
                                    setIsMenuOpen(false);
                                }}
                                className="mobile-nav-link logout-button"
                            >
                                Logout
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
