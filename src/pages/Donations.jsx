import { useEffect, useState } from "react";
import { getTempleData } from "../services/templeService";

const Donations = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getTempleData().then((res) => setData(res.donations));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="container-custom">

      <h1>Donations</h1>

      <div className="section">
        {data.address.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

    </div>
  );
};

export default Donations;