import { templeData } from "../data/templeData";

// Generic temple data
export const getTempleData = async () => {
  return templeData;
};

// ✅ Get sevas from templeData (BEST WAY)
export const getSevas = async () => {
  return templeData.sevas;
};