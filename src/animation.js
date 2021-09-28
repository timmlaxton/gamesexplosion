export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 1.8,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: { y: 0, transition: { duration: 2, ease: "easeOut" } },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 2 },
  },
};

export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 7,
    transition: {
      ease: "easeIn",
      duration: 7,
    },
  },
};

export const scrollReveal = {
  hidden: { opacity: 0, scale: 1 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};
