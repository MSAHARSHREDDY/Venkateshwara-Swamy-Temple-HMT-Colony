import useTempleData from "../hooks/useTempleData";

export default function Gallery() {
  const data = useTempleData();

  if (!data || !data.gallery) return null;

  return (
    <div className="temple-bg min-h-screen px-4 md:px-10 py-10">

      {/* TITLE */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-red-900">
        Gallery
      </h2>

      {/* RESPONSIVE GRID */}
      <div className="
  grid 
  grid-cols-1 
  sm:grid-cols-2 
  md:grid-cols-3 
  lg:grid-cols-4 
  gap-6
">
  {data.gallery.map((g, i) => (
    <div
      key={i}
      className="overflow-hidden rounded-xl group image-border"
    >
      <img
        src={g.image}
        alt="Temple"
        className="
          w-full 
          h-[280px] md:h-[320px] lg:h-[350px]
          object-cover
          transition-transform duration-500
          group-hover:scale-110
        "
      />
    </div>
  ))}
</div>
    </div>
  );
}