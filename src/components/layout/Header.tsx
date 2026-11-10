'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SubaLogo } from '@/components/icons/SubaLogo';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/initiatives', label: 'Initiatives' },
  { href: '/our-work', label: 'Our Work' },
  { href: '/symboh', label: 'Symboh' },
  { href: '/comma', label: 'Comma' },
  { href: '/publications', label: 'Publications' },
  { href: '/events', label: 'Events' },
  { href: '/get-involved', label: 'Get Involved' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // On homepage: transparent until scroll. On other pages: always white.
  // Note: a solid background (not backdrop-blur) on this fixed header — a blurred
  // fixed element re-rasterises every scroll frame and causes visible jank.
  const bgStyle = isHome
    ? isScrolled
      ? 'bg-white shadow-sm border-b border-[#FAF0C8]'
      : 'bg-transparent'
    : 'bg-white border-b border-[#FAF0C8]';

  const textColor = isHome && !isScrolled ? 'text-white' : 'text-[#1A1A1A]';
  const logoVariant = isHome && !isScrolled ? 'white' : 'full';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgStyle}`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="SUBA Home">
              <SubaLogo size={36} variant={logoVariant} />
              <div className="hidden sm:block">
                <div
                  className="font-bold leading-none tracking-widest transition-colors duration-300"
                  style={{
                    fontFamily: 'var(--font-fraunces), Georgia, serif',
                    fontSize: '1rem',
                    color: isHome && !isScrolled ? 'white' : '#1A5C2E',
                    letterSpacing: '0.12em',
                  }}
                >
                  SUBA
                </div>
                <div
                  className="label-mono leading-none mt-0.5 transition-colors duration-300"
                  style={{
                    color: isHome && !isScrolled ? 'rgba(255,255,255,0.65)' : '#4A4A40',
                    fontSize: '0.48rem',
                  }}
                >
                  SHILLONG · MEGHALAYA
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link px-2.5 py-1.5 text-sm font-medium transition-colors duration-200 rounded-sm
                      ${isActive
                        ? isHome && !isScrolled ? 'text-[#FEC110]' : 'text-[#1A5C2E]'
                        : isHome && !isScrolled ? 'text-white/85 hover:text-white' : `${textColor} hover:text-[#259745]`
                      } ${isActive ? 'active' : ''}`}
                    style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', letterSpacing: '0.01em' }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="ml-2 px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200"
                style={{
                  backgroundColor: isHome && !isScrolled ? 'rgba(254,193,16,0.15)' : '#1A5C2E',
                  color: isHome && !isScrolled ? '#FEC110' : 'white',
                  border: isHome && !isScrolled ? '1px solid rgba(254,193,16,0.3)' : '1px solid #1A5C2E',
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.8125rem',
                }}
                onMouseEnter={(e) => {
                  if (!(isHome && !isScrolled)) {
                    (e.target as HTMLAnchorElement).style.backgroundColor = '#259745';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!(isHome && !isScrolled)) {
                    (e.target as HTMLAnchorElement).style.backgroundColor = '#1A5C2E';
                  }
                }}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 rounded-sm transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <div className="w-5 flex flex-col gap-1">
                <span
                  className={`block h-px transition-all duration-300 ${isHome && !isScrolled ? 'bg-white' : 'bg-[#1A1A1A]'} ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                />
                <span
                  className={`block h-px transition-all duration-300 ${isHome && !isScrolled ? 'bg-white' : 'bg-[#1A1A1A]'} ${mobileOpen ? 'opacity-0' : ''}`}
                />
                <span
                  className={`block h-px transition-all duration-300 ${isHome && !isScrolled ? 'bg-white' : 'bg-[#1A1A1A]'} ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 xl:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-white xl:hidden transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-label="Mobile menu"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 border-b border-[#FAF0C8]">
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
              <SubaLogo size={32} variant="full" />
              <span
                className="font-bold tracking-widest"
                style={{ fontFamily: 'var(--font-fraunces)', color: '#1A5C2E', fontSize: '0.9rem', letterSpacing: '0.12em' }}
              >
                SUBA
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1 text-[#4A4A40] hover:text-[#1A5C2E] transition-colors"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-5 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 text-sm font-medium rounded-sm transition-colors ${
                    isActive
                      ? 'bg-[#FAF0C8] text-[#1A5C2E]'
                      : 'text-[#1A1A1A] hover:bg-[#FAF0C8] hover:text-[#1A5C2E]'
                  }`}
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 px-4 py-3 text-sm font-medium text-white rounded-sm text-center"
              style={{ backgroundColor: '#1A5C2E', fontFamily: 'var(--font-inter)' }}
            >
              Contact
            </Link>
          </nav>

          <div className="p-5 border-t border-[#FAF0C8]">
            <p className="label-mono text-[#4A4A40]" style={{ fontSize: '0.6rem' }}>
              SHILLONG · MEGHALAYA · INDIA
            </p>
            <p className="text-xs text-[#4A4A40] mt-1" style={{ fontFamily: 'var(--font-inter)' }}>
              support@projectsuba.in
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
