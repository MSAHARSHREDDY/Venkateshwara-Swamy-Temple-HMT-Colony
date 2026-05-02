export default function TempleInfoSubNav() {
  const items = [
    { name: "Archana", price: 21, icon: "🪔" },
    { name: "Abhishekam", price: 51, icon: "🛕" },
    { name: "Two-Wheelers", price: 121, icon: "🏍️" },
    { name: "Four-Wheelers", price: 251, icon: "🚗" },
  ];

  return (
    <div className="sticky top-[70px] z-40 bg-red-900 shadow-md">

      <div className="flex gap-4 overflow-x-auto px-4 py-3 whitespace-nowrap">

        {items.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 bg-gradient-to-r from-yellow-400 to-orange-400 
            text-black px-5 py-2 rounded-full font-bold shadow 
            hover:scale-105 transition temple-glow cursor-pointer"
          >
            {item.icon} {item.name} - ₹{item.price}/-
          </div>
        ))}

      </div>
    </div>
  );
}