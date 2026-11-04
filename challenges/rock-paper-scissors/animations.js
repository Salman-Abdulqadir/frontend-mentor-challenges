export const fadeIn = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeIn",
            staggerChildren: 0.7
        }
    }
}

export const winnerAnimation = {
  initial: {
    scale: 0
  },
  animate: {
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export const selectionAnimation = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeIn",
    },
  },
};
