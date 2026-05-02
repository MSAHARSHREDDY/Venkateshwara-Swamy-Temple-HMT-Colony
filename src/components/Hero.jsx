import useTempleData from "../hooks/useTempleData";
import templeImg from "../assets/temple.jpg";

const Hero = () => {
  const { data, loading } = useTempleData();

  if (loading) return <p className="text-white text-center">Loading...</p>;

  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center text-center">

      {/* Image */}
      <div className="border-4 border-yellow-500 p-2 rounded-xl">
        <img
          src={templeImg}
          alt="temple"
          className="w-[300px] md:w-[500px]"
        />
      </div>

      {/* Title */}
      <h1 className="mt-6 text-3xl md:text-5xl font-bold text-yellow-400">
        {data.temple.name}
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 mt-4 max-w-xl">
        {data.temple.description}
      </p>
    </div>
  );
};

export default Hero;