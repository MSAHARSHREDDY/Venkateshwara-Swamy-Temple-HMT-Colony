import useTempleData from "../hooks/useTempleData";

export default function Contact() {
  const data = useTempleData();

  if (!data) return null;

  return (
    <div className="temple-bg min-h-screen py-10 px-4 md:px-10">

      {/* TITLE */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-red-900 mb-10">
        Contact Us
      </h1>

      {/* GRID */}
      <div className="max-w-3xl mx-auto space-y-8">

        {/* LEFT - CONTACT INFO */}
        <div className="space-y-6">

          {/* 🔥 UPDATED CARD */}
          <div className="
            p-6
            bg-gradient-to-br from-[#fff3cd] via-[#ffe8a1] to-[#ffd580]
            rounded-xl
            shadow-xl
            border border-yellow-400
            hover:shadow-2xl
            transition
          ">
            <h2 className="text-xl font-bold mb-4 text-red-800">
              Temple Information
            </h2>

            <p className="font-semibold">📍 Location:</p>
            <p className="mb-3 text-gray-800">
              {data.contact?.location}
            </p>

            <p className="font-semibold">📞 Phone:</p>
            <p className="mb-3 text-gray-800">
              {data.contact?.phone || "9876543210"}
            </p>

            <p className="font-semibold">📧 Email:</p>
            <p className="text-gray-800">
              {data.contact?.email || "temple@email.com"}
            </p>
          </div>

          {/* MAP */}
          <div className="
            rounded-xl 
            overflow-hidden 
            shadow-xl 
            border-4 border-yellow-400 
            hover:shadow-2xl 
            transition
          ">
            <iframe
              
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.784524020974!2d78.34395780000001!3d17.5177965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8de918a72d93%3A0x28fa3ed7f458a1d6!2sSiva%20temple!5e0!3m2!1sen!2sin!4v1777515209218!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>

        {/* RIGHT - FORM */}
       
      </div>
    </div>
  );
}