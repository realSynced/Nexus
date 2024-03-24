import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInWhenVisible = ({children}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5 // When 50% of the element is in viewport
  });

  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 20 // You can adjust this for a slight upward motion during fade-in
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5 // Adjust as needed
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInVariants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
