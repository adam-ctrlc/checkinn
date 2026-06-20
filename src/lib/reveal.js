// Svelte action replacing framer-motion's entrance / whileInView animations.
// Fades + translates an element into view the first time it intersects.
/**
 * @param {HTMLElement} node
 * @param {{ y?: number, x?: number, scale?: number, duration?: number, delay?: number, once?: boolean }} [params]
 */
export function reveal(node, params = {}) {
  const opts = params || {};
  const y = opts.y ?? 20;
  const x = opts.x ?? 0;
  const scale = opts.scale ?? 1;
  const duration = opts.duration ?? 600;
  const delay = opts.delay ?? 0;
  const once = opts.once ?? true;

  const hidden = () => {
    node.style.opacity = "0";
    node.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
  };
  const shown = () => {
    node.style.opacity = "1";
    node.style.transform = "none";
  };

  node.style.transition = `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`;
  node.style.willChange = "opacity, transform";
  hidden();

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          shown();
          if (once) io.unobserve(node);
        } else if (!once) {
          hidden();
        }
      }
    },
    { threshold: 0.15 }
  );
  io.observe(node);

  return {
    destroy() {
      io.disconnect();
    },
  };
}
