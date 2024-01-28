import { Variants } from "framer-motion";

export const containerVariants: Variants = {

    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 1,

        },
    },
    hidden: {
        opacity: 0,
        transition: {
            staggerChildren: 0.1,
            staggerDirection: -1,
            when: 'afterChildren'
        },
    },
};

export const letterVariants: Variants = {
    hidden: {
        opacity: 0,
        x: "-0.5rem",
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

export const sectionVariants: Variants = {
    hidden: {
        scaleY: 0,
        transition: {
            duration: 1,
            delay: 1,
            ease: [0.21, 1.17, 0.76, 0.67],
        },
    },
    visible: {
        scaleY: 1,
        transition: {
            duration: 0.8,
            ease: [1, 0.2, 0.25, 0.9],

        },
    },
};
