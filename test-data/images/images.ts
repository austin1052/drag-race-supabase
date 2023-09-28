import amethyst from "./amethyst.jpg";
import anetra from "./anetra.jpg";
import auramayari from "./auramayari.jpg";
import irenedubois from "./irenedubois.jpg";
import jax from "./jax.jpg";
import looseyladuca from "./looseyladuca.jpg";
import luxxnoirlondon from "./luxxnoirlondon.jpg";
import marciax3 from "./marciax3.jpg";
import mbdf from "./mbdf.jpg";
import mib from "./mib.jpg";
import princesspoppy from "./princesspoppy.jpg";
import robinfierce from "./robinfierce.jpg";
import salinaestitties from "./salinaestitties.jpg";
import sashacolby from "./sashacolby.jpg";
import spice from "./spice.jpg";
import sugar from "./sugar.jpg";
import { StaticImageData } from "next/image";

interface Queen {
  
}

interface Images {
  [key: string]: StaticImageData; // Index signature to allow different keys mapping to arrays of Team objects
}

export const queenImages: Images = {
  amethyst,
  anetra,
  auramayari,
  irenedubois,
  jax,
  looseyladuca,
  luxxnoirlondon,
  marciax3,
  mbdf,
  mib,
  princesspoppy,
  robinfierce,
  salinaestitties,
  sashacolby,
  spice,
  sugar
}