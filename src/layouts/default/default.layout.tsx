"use client";

import { ConfigProvider } from "antd";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useCycle,
} from "framer-motion";
import { usePathname } from "next/navigation";

import { PageTransition } from "@/components";
import { antdThemeConfig } from "@/config/antdTheme.config";
import { poppins } from "@/config/fonts";
import "@/styles/main.scss";
import { Navbar } from "./components";
import { useEffect, useMemo, useRef, useState } from "react";
import { kebabCaseToNormalText } from "@/utils";
import { pageInnerVariants } from "./default.variants";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();

  const [animationState, animationToggler] = useCycle(false, true);
  const controls = useAnimationControls();

  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    controls.start({ opacity: 0, transition: { duration: 0 } });
    animationToggler();

    setTimeout(() => {
      animationToggler();
      controls.start({ opacity: 1 });
    }, 3000);
  }, [pathname]);

  const pageTitle = useMemo(() => {
    const pageTitle = kebabCaseToNormalText(pathname.substring(1));
    return pageTitle ? pageTitle : "Home";
  }, [pathname]);

  return (
    <ConfigProvider theme={antdThemeConfig(true)}>
      <PageTransition animationState={animationState} text={pageTitle} />

      <main className={`main-layout ${poppins.className}`}>
        <Navbar />
        <AnimatePresence mode="popLayout">
          <motion.div
            key={pathname}
            variants={pageInnerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="main-layout-inner"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </ConfigProvider>
  );
};

export default DefaultLayout;
