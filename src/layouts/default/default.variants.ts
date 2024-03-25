import { Variants } from "framer-motion";

export const pageInnerVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 15,
        scaleX: 0.98
    },
    visible: {
        opacity: 1,
        y: 0,
        scaleX: 1,
        transition: {
            duration: 0.3,
            delay: 5,
            ease: 'easeIn'
        },

    },
    exit: {
        opacity: 0,
        y: 15,
        scaleX: 0.98,
    }
}
