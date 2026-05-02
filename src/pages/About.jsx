import useTempleData from "../hooks/useTempleData";

export default function About() {
  const data = useTempleData();

  if (!data) return <p className="text-center py-10">Loading...</p>;

  const { about } = data;

  return (
    <div className="temple-bg py-10 px-4 md:px-16 font-bold">

      {/* Title */}
      <h1 className="text-center text-2xl md:text-3xl font-bold text-red-900 mb-2">
        {about.title}
      </h1>

      {/* Telugu Title */}
      <h2 className="text-center text-yellow-900 text-lg md:text-xl font-bold mb-4">
        {about.subtitle}
      </h2>

      {/* Blessings */}
      <div className="text-center mb-6">
        {about.blessings.map((item, i) => (
          <p key={i} className="text-md  font-bold text-gray-700">
            {item}
          </p>
        ))}
      </div>

      {/* Description */}
      <div className="mb-6">
        <p className="text-sm md:text-base text-gray-900 leading-relaxed whitespace-pre-line">
          {about.description}
        </p>
      </div>

      {/* History */}
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-2 text-red-800">History</h3>
        <p className="text-sm md:text-base whitespace-pre-line">
          {about.history}
        </p>
      </div>

      {/* Festivals */}
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-2 text-red-800">
          Festivals & Celebrations
        </h3>
        <p className="text-sm md:text-base whitespace-pre-line">
          {about.festivals}
        </p>
      </div>

      {/* Temple Info */}
      <div>
        <h3 className="font-bold text-lg mb-2 text-red-800">
          Temple Information
        </h3>
        <p className="text-sm md:text-base whitespace-pre-line">
          {about.templeInfo}
        </p>
      </div>

    </div>
  );
}