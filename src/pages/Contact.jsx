import { useEffect, useState } from "react";
import { getTempleData } from "../services/templeService";

const Contact = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getTempleData().then((res) => setData(res.contact));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="container-custom">

      <h1>Contact</h1>

      <div className="section">
        {data.address.map((a, i) => (
          <p key={i}>{a}</p>
        ))}
        <p>Email: {data.email}</p>
      </div>

    </div>
  );
};

export default Contact;