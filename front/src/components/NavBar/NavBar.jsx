import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ navLinks }) {
  return (
    <nav>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}