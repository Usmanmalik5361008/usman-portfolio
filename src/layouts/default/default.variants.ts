import { Variants } from "framer-motion";

export const pageInnerVariants: Variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    },
    exit: {
        transition: {
            duration: 1
        },
        opacity: 0
    }
}
