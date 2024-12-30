'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './header.module.css';

const links = [
  { url: '/#cover', text: 'Home' },
  { url: '/bio', text: 'bio' },
  { url: '/actuaciones', text: 'actuaciones' },
  { url: '/espectaculos', text: 'espectáculos' },
  { url: '/logros', text: 'logros' },
  { url: '/prensa', text: 'prensa' },
  { url: '/#contact', text: 'contact' },
];
export default function Header() {
  const [slug, setSlug] = useState('/#cover');
  console.log(slug);
  // useEffect(() => {setSlug()}, [slug]);

  return (
    <header className={styles.homeHeader}>
      <div className={styles.logo}></div>
      <nav className={styles.navBar}>
        {links.map((link) => (
          <Link
            href={link.url}
            key={link.url}
            onClick={() => setSlug(link.url)}
            className={slug === link.url ? styles.current : ''}
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </header>
  );
}
