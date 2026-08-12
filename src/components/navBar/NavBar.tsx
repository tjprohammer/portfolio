import React, { useEffect, useState } from 'react';

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
                <a className="nav__brand" href="#home" onClick={() => setOpen(false)}>
                    TJ Prohammer
                </a>
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
                            <a href={`#${link.to}`} onClick={() => setOpen(false)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default NavBar;
