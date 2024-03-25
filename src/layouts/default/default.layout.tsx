"use client";

import { ConfigProvider } from "antd";
import { AnimatePresence, motion } from "framer-motion";

import { PageTransition } from "@/components";
import { antdThemeConfig } from "@/config/antdTheme.config";
import { poppins } from "@/config/fonts";
import { Navbar } from "./components";
import { pageInnerVariants } from "./default.variants";
import useDefault from "./useDefault.hook";
import "@/styles/main.scss";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { pageTitle, animationState, pathname } = useDefault();

  return (
    <ConfigProvider theme={antdThemeConfig(true)}>
      <PageTransition animationState={animationState} text={pageTitle} />

      <main className={`main-layout ${poppins.className}`}>
        <Navbar />
        <AnimatePresence mode="wait">
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
