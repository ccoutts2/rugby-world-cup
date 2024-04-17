export const transforms = [
  {
    x: -0.8,
    y: -0.6,
    rotationZ: -29,
    color: "#bisque",
  },

  {
    x: -0.2,
    y: -0.4,
    rotationZ: -6,
    color: "bisque",
  },

  {
    x: -0.05,
    y: 0.1,
    rotationZ: 12,
    color: "bisque",
  },

  {
    x: -0.05,
    y: -0.1,
    rotationZ: -9,
    color: "bisque",
  },

  {
    x: -0.1,
    y: 0.55,
    rotationZ: 3,
    color: "bisque",
  },

  {
    x: 0,
    y: -0.1,
    rotationZ: 9,
    color: "bisque",
  },

  {
    x: 0,
    y: 0.15,
    rotationZ: -12,
    color: "bisque",
  },

  {
    x: 0,
    y: 0.15,
    rotationZ: -17,
    color: "bisque",
  },

  {
    x: 0,
    y: -0.65,
    rotationZ: 9,
    color: "bisque",
  },

  {
    x: 0.1,
    y: 0.4,
    rotationZ: 12,
    color: "bisque",
  },

  {
    x: 0,
    y: -0.15,
    rotationZ: -9,
    color: "bisque",
  },

  {
    x: 0.2,
    y: 0.15,
    rotationZ: 12,
    color: "bisque",
  },

  {
    x: 0.8,
    y: 0.6,
    rotationZ: 20,
    color: "bisque",
  },
];

export const disperse = {
  open: (i) => ({
    x: transforms[i].x + "em",
    y: transforms[i].y + "em",
    rotateZ: transforms[i].rotationZ,
    color: transforms[i].color,
    transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
    zIndex: 1,
  }),
  closed: {
    x: 0,
    y: 0,
    rotateZ: 0,
    color: "white",
    transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
    zIndex: 0,
  },
};
