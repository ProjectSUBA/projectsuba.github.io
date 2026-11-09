'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode, type Ref } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Render as a different element (default: div) */
  as?: ElementType;
  /** Stagger delay in ms — handy inside mapped lists */
  delay?: number;
  className?: string;
  /** Play once (default) or every time it enters the viewport */
  once?: boolean;
}

/**
 * Reveal — fades + slides its children up when scrolled into view.
 * Progressive enhancement: if JS/IntersectionObserver is unavailable, or the
 * user prefers reduced motion, content shows immediately (see .reveal in CSS
 * and the reduced-motion guard below).
 */
export function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const Comp = Tag as ElementType;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced-motion: show instantly, skip observing.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Comp
      ref={ref as Ref<HTMLElement>}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Comp>
  );
}
