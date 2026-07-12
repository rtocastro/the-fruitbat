import { motion, useReducedMotion } from "framer-motion";

export default function PageTransition({ children }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reducedMotion
          ? { opacity: 1 }
          : { opacity: 0, y: 12 }
      }
      animate={{ opacity: 1, y: 0 }}
      exit={
        reducedMotion
          ? { opacity: 1 }
          : { opacity: 0, y: -8 }
      }
      transition={{
        duration: reducedMotion ? 0 : 0.34,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}