export default function NoticeSection({ title, data, icon }) {
  return (
    <div className="mb-10">

      <h2 className="text-xl md:text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
        {icon} {title}
      </h2>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl shadow-md p-5 border-l-4 border-orange-500 hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-gray-800 mb-1">
              {item.title}
            </h3>

            <p className="text-sm text-gray-500 mb-2">
              📅 {item.date}
            </p>

            <p className="text-sm text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}