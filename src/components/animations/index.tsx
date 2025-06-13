import { motion } from "motion/react"
import { Variants } from "motion/react";
import { ReactNode } from "react";

interface AnimationProps {
  children: ReactNode;
  className?: string;
}

interface DelayProps extends AnimationProps {
  delay?: number;
}

interface ScaleProps extends AnimationProps {
  scale?: number;
}

export function AnimatedSection({ children, delay = 0, className = '' }: DelayProps) {
  return (
    <motion.div
      className={className}
      variants={
        {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }
      }
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredList({ children, className = '' }: AnimationProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredItem({ children, className = '' }: AnimationProps) {
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

export function HoverScale({ children, scale = 1.05, className = '' }: ScaleProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}
