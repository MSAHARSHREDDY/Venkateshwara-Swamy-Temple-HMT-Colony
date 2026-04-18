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

     {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="uppercase tracking-widest text-yellow-500">Trustees</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-4"></div>
      </div>

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