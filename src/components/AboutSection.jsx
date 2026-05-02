// 📁 src/components/AboutSection.jsx

export default function AboutSection() {
  return (
    <div className="bg-gray-100 py-10 px-6 text-center">
      <h2 className="text-2xl font-bold mb-4">About Temple History</h2>

      <div className="max-w-4xl mx-auto">
        <p className="text-gray-700 leading-7">
          Sri Sita Rama Chandra Swamy Devalayam is a sacred temple dedicated to Lord Rama,
          Sita Devi, Lakshmana, and Hanuman. Devotees visit this temple seeking peace,
          prosperity, and divine blessings.
        </p>

        <p className="mt-4 text-gray-600">
          The temple is known for its spiritual significance, daily rituals, and grand festivals.
        </p>

        <button className="mt-6 bg-red-600 text-white px-4 py-2 rounded">
          Read More
        </button>
      </div>
    </div>
  );
}