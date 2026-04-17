import { useEffect, useState } from "react";
import { getTempleData } from "../services/templeService";

const Darshan = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getTempleData().then((res) => setData(res.darshan));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="container-custom">

      <h1>Darshan Timings</h1>

      <div className="section">
        {data.timings.map((item, i) => (
          <div key={i} className="card mt-6">
            <h2>{item.title}</h2>
            <p>Morning: {item.morning}</p>
            <p>Evening: {item.evening}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Darshan;