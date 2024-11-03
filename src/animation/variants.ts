export const animationContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      easing: 'easeInOut',
    },
  },
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      easing: 'easeInOut',
    },
  },
};

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      easing: 'easeInOut',
    },
  },
};

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      easing: 'easeInOut',
    },
  },
};
