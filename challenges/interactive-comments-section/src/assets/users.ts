import juliusomoPng from "./avatars/image-juliusomo.png";
import julusomoWebp from "./avatars/image-juliusomo.webp";
import amyrobsonPng from "./avatars/image-amyrobson.png";
import amyrobsonWebp from "./avatars/image-amyrobson.webp";
import maxblagunPng from "./avatars/image-maxblagun.png";
import maxblagunWebp from "./avatars/image-maxblagun.webp";
import ramsesmironPng from "./avatars/image-ramsesmiron.png";
import ramsesmironWebp from "./avatars/image-ramsesmiron.webp";

export const allUsers = {
  juliusomo: {
    images: {
      png: juliusomoPng,
      webp: julusomoWebp,
    },
    username: "juliusomo",
  },
  amyrobson: {
    images: {
      png: amyrobsonPng,
      webp: amyrobsonWebp,
    },
    username: "amyrobson",
  },
  maxblagun: {
    images: {
      png: maxblagunPng,
      webp: maxblagunWebp,
    },
    username: "maxblagun",
  },
  ramsesmiron: {
    images: {
      png: ramsesmironPng,
      webp: ramsesmironWebp,
    },
    username: "ramsesmiron",
  },
};

export const currentUser = allUsers.juliusomo;
