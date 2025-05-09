import { fadeIn } from "@/motion/fadeIn";
import { motion, useAnimation, useInView } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";

interface ANIMATED_TYPE {
  id: string;
  className: string;
  children: ReactNode;
}

// Section component with animations
export const AnimatedSection = ({ id, className, children }: ANIMATED_TYPE) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id={id} className={className} ref={ref}>
      <motion.div initial="hidden" animate={controls} variants={fadeIn}>
        {children}
      </motion.div>
    </section>
  );
};
