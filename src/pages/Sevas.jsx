import { useEffect, useState } from "react";
import { getSevas } from "../services/templeService";

const Sevas = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getSevas().then(setData);
  }, []);

  return (
    <div className="container-custom">

      <h1>Sevas</h1>

      {data.map((section, i) => (
        <div key={i} className="section">
          <h2>{section.category}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((item, j) => (
              <div key={j} className="card">
                <h3 className="font-bold">{item.name}</h3>
                {item.amount && <p>₹{item.amount}</p>}
                {item.note && <p>{item.note}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
};

export default Sevas;