'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SubaLogo } from '@/components/icons/SubaLogo';
import { CONTACT_EMAIL } from '@/lib/site';
import { navLinks } from '@/lib/nav';

export function Header() {
  const pathname = usePathname();
  // Remember which page the menu was opened on. Navigating to another page
  // therefore closes it automatically, with no effect needed.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const mobileOpen = openPath === pathname;
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

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
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b-2 border-ink bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-[4.5rem]">
            <Link href="/" className="flex items-center gap-2.5" aria-label="SUBA home">
              <SubaLogo size={38} alt="" />
              <div className="hidden sm:block">
                <div className="font-display text-base font-bold leading-none tracking-[0.12em] text-ink">SUBA</div>
                <div className="label-mono mt-1 leading-none text-suba-muted">Shillong · Meghalaya</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`px-3 py-1.5 text-[0.875rem] font-medium transition-colors ${
                    isActive(link.href) ? 'bg-mikado text-forest' : 'text-ink hover:bg-paper-deep'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                aria-current={pathname === '/contact' ? 'page' : undefined}
                className="ml-3 border-2 border-forest bg-forest px-4 py-1.5 text-[0.875rem] font-semibold text-white transition-colors hover:bg-ink hover:border-ink"
              >
                Contact
              </Link>
            </nav>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpenPath(mobileOpen ? null : pathname)}
              className="p-2 xl:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <div className="flex w-6 flex-col gap-[5px]">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`block h-[2px] bg-ink transition-all duration-200 ${
                      mobileOpen ? (i === 0 ? 'translate-y-[7px] rotate-45' : i === 1 ? 'opacity-0' : '-translate-y-[7px] -rotate-45') : ''
                    }`}
                  />
                ))}
              </div>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && <div className="fixed inset-0 z-40 bg-ink/50 xl:hidden" onClick={closeMenu} aria-hidden="true" />}

      {/* `inert` while closed keeps the menu out of the tab order and the
          accessibility tree, so keyboard users never land on hidden links. */}
      <div
        id="mobile-menu"
        ref={panelRef}
        inert={!mobileOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed bottom-0 right-0 top-0 z-50 w-[290px] border-l-2 border-ink bg-paper transition-transform duration-200 ease-out xl:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b-2 border-ink p-5">
            <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
              <SubaLogo size={32} alt="" />
              <span className="font-display text-[0.95rem] font-bold tracking-[0.12em]">SUBA</span>
            </Link>
            <button type="button" onClick={closeMenu} className="p-1" aria-label="Close menu">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col overflow-y-auto p-5" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`border-b border-ink/20 px-1 py-3.5 font-display text-xl font-semibold ${
                  isActive(link.href) ? 'text-green-ink' : 'text-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={closeMenu} className="mt-5 border-2 border-forest bg-forest px-4 py-3 text-center text-sm font-semibold text-white">
              Contact
            </Link>
          </nav>

          <div className="border-t-2 border-ink p-5">
            <p className="label-mono text-suba-muted">Shillong · Meghalaya · India</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 block break-all text-xs underline">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
