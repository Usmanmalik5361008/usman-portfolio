"use client";

import { useAnimationControls, useCycle } from "framer-motion";
import { usePathname } from "next/navigation";

import "@/styles/main.scss";
import { kebabCaseToNormalText } from "@/utils";
import { useEffect, useMemo, useRef } from "react";

const useDefault = () => {
  const pathname = usePathname();

  const [animationState, animationToggler] = useCycle(false, true);
  const controls = useAnimationControls();
  const timeoutId = useRef<NodeJS.Timeout>();

  const isFirstMount = useRef<boolean>(true);

  useEffect(() => {
    if (isFirstMount.current && process.env.NODE_ENV === "development") {
      isFirstMount.current = false;
      return;
    }
    controls.start({ opacity: 0, transition: { duration: 0 } });
    animationToggler();

    timeoutId.current = setTimeout(() => {
      animationToggler();
      controls.start({ opacity: 1 });
    }, 3000);

    return () => timeoutId.current && clearTimeout(timeoutId.current);
  }, [pathname, animationToggler, controls]);

  const pageTitle = useMemo(() => {
    const pageTitle = kebabCaseToNormalText(pathname.substring(1));
    return pageTitle ? pageTitle : "Home";
  }, [pathname]);

  return {
    pageTitle,
    animationState,
    pathname
  };
};

export default useDefault;
