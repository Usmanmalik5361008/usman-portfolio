import { motion, useIsPresent } from "framer-motion";

import { bebasNeue } from "@/config/fonts";
import {
  containerVariants,
  letterVariants,
  sectionVariants,
} from "./pageTransition.variants";

const PageTransition: React.FC<{ animationState: boolean; text: string }> = ({
  animationState,
  text,
}) => {
  const isPresent = useIsPresent();

  return (
    <motion.section
      className={"transition-page"}
      animate={animationState ? "visible" : "hidden"}
      initial={false}
      variants={sectionVariants}
      style={{ originY: isPresent ? 0 : 1 }}
    >
      <motion.div variants={containerVariants} style={{ display: "flex" }}>
        {Array.from(text).map((char, index) => (
          <motion.div
            className={bebasNeue.className}
            key={index}
            variants={letterVariants}
            style={{ fontSize: "3.8rem" }}
          >
            {char}
          </motion.div>
        ))}
      </motion.div>
      {/* )} */}
    </motion.section>
  );
};

export default PageTransition;
