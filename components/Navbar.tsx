'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link href="/" className="logo">
          Hotel Divine Inn<span className="dot">.</span>
        </Link>
        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              href="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/rooms" 
              className={`nav-link ${isActive('/rooms') ? 'active' : ''}`}
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link 
              href="/gallery" 
              className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link 
              href="/reviews" 
              className={`nav-link ${isActive('/reviews') ? 'active' : ''}`}
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </li>
          <li>
            <a 
              href="https://wa.me/message/RJJFT7WR7W3ME1" 
              className="btn-primary nav-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
