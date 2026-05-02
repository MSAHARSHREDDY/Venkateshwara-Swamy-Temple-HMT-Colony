import { templeData } from "../data/templeData";

export const getTempleData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(templeData), 200);
  });
};