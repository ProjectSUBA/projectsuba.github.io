'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SubaLogo } from '@/components/icons/SubaLogo';
import { CONTACT_EMAIL } from '@/lib/site';

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
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  // Remember which page the menu was opened on. Navigating to another page
  // therefore closes it automatically, with no effect needed.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const mobileOpen = openPath === pathname;
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === '/';
  const overHero = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // While the mobile menu is open: lock page scroll, move focus into it, keep
  // Tab inside it, and let Escape close it.
  useEffect(() => {
    if (!mobileOpen) return;
    const panel = panelRef.current;
    if (!panel) return;
    const toggle = toggleRef.current;
    const focusable = () => Array.from(panel.querySelectorAll<HTMLElement>('a[href], button'));

    document.body.style.overflow = 'hidden';
    focusable()[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenPath(null);
        toggle?.focus();
        return;
      }
      if (event.key !== 'Tab') return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  const closeMenu = () => setOpenPath(null);

  // A solid bar (not backdrop-blur) once scrolled: a blurred fixed element is
  // re-rasterised on every scroll frame and causes visible jank.
  const barClass = isHome
    ? isScrolled
      ? 'bg-white shadow-sm border-b border-cream'
      : 'bg-transparent'
    : 'bg-white border-b border-cream';

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${barClass} ${overHero ? 'on-dark' : ''}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-[4.5rem]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5" aria-label="SUBA home">
              <SubaLogo size={38} variant={overHero ? 'white' : 'full'} alt="" />
              <div className="hidden sm:block">
                <div
                  className={`font-display text-base font-bold leading-none tracking-[0.12em] transition-colors duration-300 ${
                    overHero ? 'text-white' : 'text-dark-green'
                  }`}
                >
                  SUBA
                </div>
                <div
                  className={`label-mono mt-1 leading-none transition-colors duration-300 ${
                    overHero ? 'text-white/80' : 'text-suba-muted'
                  }`}
                >
                  Shillong · Meghalaya
                </div>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`nav-link rounded-sm px-2.5 py-1.5 text-[0.8125rem] font-medium transition-colors duration-200 ${
                      isActive ? 'active' : ''
                    } ${
                      overHero
                        ? isActive
                          ? 'text-mikado'
                          : 'text-white/90 hover:text-white'
                        : isActive
                          ? 'text-dark-green'
                          : 'text-suba-text hover:text-green-ink'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className={`ml-2 rounded-md border px-4 py-2 text-[0.8125rem] font-medium transition-colors duration-200 ${
                  overHero
                    ? 'border-mikado/40 bg-mikado/15 text-mikado hover:bg-mikado/25'
                    : 'border-dark-green bg-dark-green text-white hover:bg-forest'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpenPath(mobileOpen ? null : pathname)}
              className="rounded-sm p-2 xl:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <div className="flex w-5 flex-col gap-1">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`block h-px transition-all duration-300 ${overHero ? 'bg-white' : 'bg-suba-text'} ${
                      mobileOpen
                        ? i === 0
                          ? 'translate-y-[5px] rotate-45'
                          : i === 1
                            ? 'opacity-0'
                            : '-translate-y-[5px] -rotate-45'
                        : ''
                    }`}
                  />
                ))}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Dimmed backdrop behind the mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 xl:hidden" onClick={closeMenu} aria-hidden="true" />
      )}

      {/* Mobile menu. `inert` while closed keeps it out of the tab order and the
          accessibility tree, so keyboard users never land on hidden links. */}
      <div
        id="mobile-menu"
        ref={panelRef}
        inert={!mobileOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed bottom-0 right-0 top-0 z-50 w-[280px] bg-white transition-transform duration-300 ease-in-out xl:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-cream p-5">
            <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
              <SubaLogo size={32} alt="" />
              <span className="font-display text-[0.9rem] font-bold tracking-[0.12em] text-dark-green">SUBA</span>
            </Link>
            <button type="button" onClick={closeMenu} className="p-1 text-suba-muted hover:text-dark-green" aria-label="Close menu">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-5" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                    isActive ? 'bg-cream text-dark-green' : 'text-suba-text hover:bg-cream hover:text-dark-green'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-2 rounded-md bg-dark-green px-4 py-3 text-center text-sm font-medium text-white"
            >
              Contact
            </Link>
          </nav>

          <div className="border-t border-cream p-5">
            <p className="label-mono text-suba-muted">Shillong · Meghalaya · India</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 block break-all text-xs text-suba-muted hover:text-dark-green">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
