import { useEffect, useState } from "react";
import { getTempleData } from "../services/templeService";

const Contact = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getTempleData().then((res) => setData(res.contact));
  }, []);

  if (!data) return (
    <div className="flex justify-center items-center min-h-[400px]">
      <p className="text-yellow-500 animate-pulse">Loading Contact Info...</p>
    </div>
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="uppercase tracking-widest text-yellow-500">Contact Us</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* 🏛️ Contact Information */}
        <div className="space-y-8">

          {/* Address Section */}
          <div className="bg-black/40 border border-yellow-500/20 p-6 rounded-2xl backdrop-blur-md">
            <h2 className="mb-4 text-yellow-400">Temple Location</h2>
            {data.address.map((a, i) => (
              <p key={i} className="!text-lg !leading-relaxed">{a}</p>
            ))}
          </div>

          {/* Phone & Email Section */}
          <div className="bg-black/40 border border-yellow-500/20 p-6 rounded-2xl backdrop-blur-md">
            <h2 className="mb-4 text-yellow-400">Communication</h2>
            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <span className="text-yellow-500 font-bold w-20">📞 Phone:</span>
                <span className="text-gray-200">{data.phone.join(", ")}</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-yellow-500 font-bold w-20">✉️ Email:</span>
                <a href={`mailto:${data.email}`} className="text-gray-200 hover:text-yellow-400 transition-colors">
                  {data.email}
                </a>
              </p>
            </div>
          </div>

          {/* Routes Section */}
          <div className="bg-black/40 border border-yellow-500/20 p-6 rounded-2xl backdrop-blur-md">
            <h2 className="mb-4 text-yellow-400">How to Reach</h2>
            <ul className="space-y-3">
              {data.routes.map((route, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-yellow-500">🚗</span>
                  <p className="!text-base text-gray-300">{route}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 🗺️ Google Maps Embed */}
        {/* 🗺️ Google Maps Embed */}
        <div className="h-[450px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden border border-yellow-500/30 shadow-2xl relative">
          <iframe
            title="Temple Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.143431665484!2d78.33753397516641!3d17.51727498339301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d81e94561c3%3A0x7620fc84c3280ef7!2sSri%20Venkateswara%20Swamy%20temple!5e0!3m2!1sen!2sin!4v1713423400000!5m2!1sen!2sin1"
            width="100%"
            height="100%"
            style={{
              border: 0,
              // Adjusted brightness to 100% so the location pin stands out
              filter: "invert(90%) hue-rotate(180deg) brightness(100%) contrast(90%)"
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

      {/* Footer Support Note */}
      <div className="mt-12 text-center p-8 border-t border-yellow-500/10">
        <p className="!text-sm !text-gray-500 italic">
          For any special seva bookings or donation inquiries, please visit the temple office between 9:00 AM and 6:00 PM.
        </p>
      </div>
    </div>
  );
};

export default Contact;