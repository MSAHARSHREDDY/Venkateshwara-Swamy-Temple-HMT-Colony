// src/services/templeService.js

import { templeData } from "../data/templeData";
import { sevasData } from "../data/sevas";

// Generic temple data
export const getTempleData = async () => {
  return templeData; //  instant
};

export const getSevas = async () => {
  return sevasData; //  instant
};