export const ContentAnimation = {
  transition: { duration: 0.5 },
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const FadeAnimation = {
  transition: { duration: 0.7 },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const LineAnimation = {
  transition: { duration: 1 },
  initial: { width: 0 },
};

export const ProjectCardAnimation = {
  transition: { duration: 0.5 },
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export const CardHomeAnimation = {
  transition: { duration: 1 },
  initial: { rotate: 0 },
};

export const SvgAnimation = {
  transition: { duration: 3, ease: 'easeInOut' },
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
  exit: { pathLength: 0 },
};
