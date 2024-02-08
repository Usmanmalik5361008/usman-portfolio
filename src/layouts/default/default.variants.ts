import { Variants } from "framer-motion";

export const pageInnerVariants: Variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            delay: 5
        },

    },
    exit: {
        opacity: 0,
        scale: 0.9
    }
}
