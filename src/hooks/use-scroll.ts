"use client";

import * as React from "react";
import { useEffect, useRef } from "react";

/**
 * Hook: reveal elements on scroll using IntersectionObserver.
 * Elements with `.reveal` class get `.in-view` added when visible.
 * Uses MutationObserver to catch dynamically added elements (e.g. after route navigation).
 */
export function useReveal() {
  const observedSet = useRef<WeakSet<Element>>(new WeakSet());
  const ioRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ? parseInt(el.dataset.delay, 10) : 0;
            setTimeout(() => el.classList.add("in-view"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    ioRef.current = io;

    // observe any reveal elements already in the DOM
    const initialEls = document.querySelectorAll<HTMLElement>(".reveal");
    initialEls.forEach((el) => {
      if (!observedSet.current.has(el)) {
        observedSet.current.add(el);
        io.observe(el);
      }
    });

    // watch for new reveal elements added later (route changes, etc.)
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((mut) => {
        mut.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          // the node itself may be a .reveal
          if (node.classList?.contains("reveal") && !observedSet.current.has(node)) {
            observedSet.current.add(node);
            io.observe(node);
          }
          // any descendants that are .reveal
          node.querySelectorAll?.(".reveal").forEach((el) => {
            if (el instanceof HTMLElement && !observedSet.current.has(el)) {
              observedSet.current.add(el);
              io.observe(el);
            }
          });
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}

/**
 * Hook: track scroll position for navigation state.
 */
export function useScrollY(threshold = 24) {
  const [scrolled, setScrolled] = React.useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

/**
 * Hook: animated counter for stats.
 */
export function useCountUp(target: number, duration = 1800, start = false) {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - startTime) / duration);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}
