import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const links = [
    { to: 'experience', label: 'Experience' },
    { to: 'work', label: 'Work' },
    { to: 'skills', label: 'Skills' },
    { to: 'contact', label: 'Contact' }
];

function NavBar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
            <div className="container nav__inner">
                <Link
                    className="nav__brand"
                    to="home"
                    smooth
                    duration={500}
                    offset={-72}
                    onClick={() => setOpen(false)}>
                    TJ Prohammer
                </Link>
                <button
                    className={`nav__toggle${open ? ' is-open' : ''}`}
                    type="button"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    onClick={() => setOpen((value) => !value)}>
                    <span />
                </button>
                <ul className={`nav__links${open ? ' is-open' : ''}`}>
                    {links.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                smooth
                                duration={500}
                                offset={-72}
                                onClick={() => setOpen(false)}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default NavBar;
