import { useEffect, useState } from "react";
import { getTempleData } from "../services/templeService";

const Trustees = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getTempleData().then((res) => setData(res.trustees));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="container-custom">

      <h1>Trustees</h1>

      <div className="section">
        {data.board.map((t, i) => (
          <div key={i} className="card mt-5">
            <p>{t.name} - {t.role}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Trustees;