import { useEffect, useState } from "react";
import { getTempleData } from "../services/templeService";

export default function useTempleData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getTempleData().then(setData);
  }, []);

  return data;
}