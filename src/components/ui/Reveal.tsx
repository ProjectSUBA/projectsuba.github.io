'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode, type Ref } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Render as a different element (default: div) */
  as?: ElementType;
  /** Stagger delay in ms, handy inside mapped lists */
  delay?: number;
  className?: string;
}

/**
 * Reveal fades and slides its children up once, the first time they scroll into
 * view. Reduced-motion users and visitors without JavaScript see the content
 * immediately: that is handled in CSS (the reduced-motion block in globals.css
 * and a <noscript> rule in the layout), so no extra script is needed here.
 */
export function Reveal({ children, as: Tag = 'div', delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const Comp = Tag as ElementType;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

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
