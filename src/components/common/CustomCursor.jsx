
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = {
    damping: 25,
    stiffness: 300,
    mass: 0.5,
  };

  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setIsVisible(true);

      const target = event.target;

      if (target instanceof Element) {
        const interactiveElement = target.closest(
          "a, button, [data-cursor='pointer']"
        );

        setIsHovering(Boolean(interactiveElement));
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="custom-cursor fixed left-0 top-0 z-[9999] pointer-events-none"
      style={{
        x: springX,
        y: springY,
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      <motion.div
        className="absolute left-0 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#238A83]"
        animate={{
          width: isHovering ? 76 : 36,
          height: isHovering ? 76 : 36,
          backgroundColor: isHovering
            ? "rgba(35, 138, 131, 0.18)"
            : "rgba(35, 138, 131, 0.05)",
          borderWidth: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
      >
        <motion.div
          className="rounded-full bg-[#238A83]"
          animate={{
            width: isHovering ? 7 : 5,
            height: isHovering ? 7 : 5,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default CustomCursor;
