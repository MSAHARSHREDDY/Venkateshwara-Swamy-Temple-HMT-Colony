const Card = ({ title, image, description }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl hover:scale-105 transition duration-300 shadow-lg">
      <img src={image} className="rounded-lg h-48 w-full object-cover" />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default Card;