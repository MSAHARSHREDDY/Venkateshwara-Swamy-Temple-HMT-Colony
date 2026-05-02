// 📁 src/data/templeData.js

export const templeData = {

  // ================================
  // ✅ ABOUT SECTION (UNCHANGED + CLEANED)
  // ================================
  about: {
  title: "SRI DEVI BHUDEVI SAMETHA SRI KALYANA VENKATESWARA SWAMY VARI DEVASTHANAM",
  subtitle: "శ్రీ దేవి భూదేవి సమేత శ్రీ కళ్యాణ వెంకటేశ్వర స్వామి వారి దేవస్థానము",
  blessings: ["శ్రీరస్తు", "శుభమస్తు", "సర్వమంగళమస్తు"],

  description: `
Sri Devi Bhudevi Sametha Sri Kalyana Venkateswara Swamy Vari Devasthanam is a sacred temple dedicated to Lord Venkateswara Swamy, an incarnation of Lord Vishnu, who is the preserver and protector of the universe.

Along with the main deity, the temple houses shrines for Lord Ganesha, Sri Hanuman, Goddess Lakshmi Devi, Navagrahas, and Goda Devi (Andal). Devotees visit this holy place seeking peace, prosperity, success, and divine blessings in all aspects of life.
  `,

  history: `
This temple has been a center of devotion and faith for many years, attracting devotees from nearby areas. It is believed that prayers offered to Lord Venkateswara Swamy with true devotion fulfill wishes and remove difficulties.

The presence of Sri Devi and Bhu Devi signifies prosperity and well-being, while other deities in the temple guide devotees towards spiritual growth and harmony.
  `,

  festivals: `
- Brahmotsavam
- Vaikunta Ekadasi
- Sri Rama Navami
- Vinayaka Chavithi
- Hanuman Jayanthi
- Diwali (Lakshmi Pooja)
  `,

  templeInfo: `
The temple consists of the main sanctum of Lord Venkateswara Swamy along with sub-shrines dedicated to Ganesha, Hanuman, Lakshmi Devi, Navagrahas, and Goda Devi.

Daily rituals such as Suprabhatam, Archana, and Abhishekam are performed following traditional Vaishnava customs. Special poojas and sevas are conducted on auspicious days, attracting a large number of devotees.
  `,
},
  // ================================
  // ✅ SUB TEMPLES (UNCHANGED)
  // ================================
  subTemples: [

 

  {
    id: 1,
    title: "Ganesha",
    image: "/images/ganesh.jpg",
    description:
      "Lord Ganesha is the remover of obstacles and the god of wisdom and new beginnings.",
    significance:
      "Prayers to Ganesha ensure success in new ventures and remove difficulties.",
    location: "Temple Entrance",
    days: "Wednesday, Vinayaka Chavithi",
    prasadam: "Modak, Coconut",
  },

  {
    id: 2,
    title: "Sri Hanuman",
    image: "/images/hanuman.jpg",
    description:
      "Lord Hanuman symbolizes strength, devotion, and unwavering faith in Lord Rama.",
    significance:
      "Worshipping Hanuman removes fear, grants courage, and protects from negative forces.",
    location: "Side Shrine",
    days: "Tuesday, Saturday",
    prasadam: "Vadamala, Butter",
  },

  {
    id: 3,
    title: "Lakshmi Devi",
    image: "/images/lakshmi_devi.jpg",
    description:
      "Goddess Lakshmi is the deity of wealth, fortune, and prosperity.",
    significance:
      "Devotees pray for financial stability, success, and happiness in life.",
    location: "Inner Temple",
    days: "Friday, Diwali",
    prasadam: "Sweet Pongal, Fruits",
  },

  {
    id: 4,
    title: "Navagraha",
    image: "/images/navagraha.jpg",
    description:
      "Navagrahas are the nine planetary deities that influence human life and destiny.",
    significance:
      "Worshipping Navagrahas helps reduce doshas and brings balance and harmony.",
    location: "Outer Prakaram",
    days: "Saturday, Amavasya",
    prasadam: "Sesame Oil, Black Gram",
  },

  {
    id: 5,
    title: "Goda Devi (Andal)",
    image: "/images/goda_devi.jpg",
    description:
      "Goda Devi, also known as Andal, is a revered devotee of Lord Vishnu and an incarnation of Bhudevi.",
    significance:
      "She represents pure devotion and is worshipped for marital harmony and spiritual growth.",
    location: "Near Venkateswara Shrine",
    days: "Friday, Margazhi Month",
    prasadam: "Sweet Pongal, Flowers",
  },

],

  // ================================
  // ✅ NAVBAR (🔧 FIXED DROPDOWN STRUCTURE)
  // ================================
  navbar: {
    menu: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },

      {
        name: "Temple Info",
        dropdown: [
          // 🔧 FIX: merged history + significance into ONE page
          { name: "History & Significance", path: "/info/history" },

          { name: "Do's & Don'ts", path: "/info/dos-donts" },
          { name: "Temple Timings", path: "/info/timings" },
        ],
      },

      { name: "Sevas", path: "/sevas" },
      {
        name: "Donors",
        dropdown: [
          { name: "All Donors", path: "/donors" }
        ]
      },
      { name: "Gallery", path: "/gallery" },
      { name: "Contact", path: "/contact" },
    ],
  },

  // ================================
  // ✅ TEMPLE INFO (🔧 IMPROVED + STRUCTURED)
  // ================================
  info: {

    // 🔥 MERGED HISTORY + SIGNIFICANCE (IMPORTANT CHANGE)
   history: {
  title: "History & Significance",
  subtitle: "శ్రీ దేవి భూదేవి సమేత శ్రీ కళ్యాణ వెంకటేశ్వర స్వామి వారి దేవస్థానము",
  blessings: ["శ్రీరస్తు", "శుభమస్తు", "సర్వమంగళమస్తు"],

  content: [
    "🏛️ Sri Devi Bhudevi Sametha Sri Kalyana Venkateswara Swamy Vari Devasthanam is a **sacred temple dedicated to Lord Venkateswara Swamy**, an incarnation of Lord Vishnu, who **protects and preserves the universe**.",

    "🙏 Lord Venkateswara Swamy is worshipped as the **giver of wealth, prosperity, and fulfillment of wishes**, and devotees believe that **sincere prayers bring divine blessings and success** in life.",

    "🌸 The presence of **Sri Devi and Bhu Devi** alongside the Lord signifies **prosperity, compassion, and well-being** for all devotees.",

    "🕉️ The temple also houses sacred shrines of **Lord Ganesha, Sri Hanuman, Goddess Lakshmi Devi, Navagrahas, and Goda Devi (Andal)**, making it a **spiritually powerful and complete place of worship**.",

    "📖 Over the years, the temple has become a **center of devotion and faith**, attracting devotees who seek **peace, harmony, and protection from difficulties**.",

    "📅 Special crowds gather during **Brahmotsavam, Vaikunta Ekadasi, Vinayaka Chavithi, Hanuman Jayanthi, and Diwali**.",

    "🙏 Devotees believe that prayers offered here **remove obstacles, bring prosperity, and guide spiritual growth and happiness**.",

    "🛕 The temple परिसर (premises) includes **well-maintained sub-shrines** and provides a **peaceful environment for rituals and meditation**.",

    "🧘 The temple promotes **devotion, discipline, and spiritual upliftment** in a **serene and divine atmosphere**."
  ],
},

    // ================================
    // ✅ DO'S & DON'TS (FIXED FORMAT)
    // ================================
    dosDonts: {
      title: "Do's & Don'ts",
      subtitle: "శ్రీ హరిహర సహిత వాంఛిత గణపతి దేవాలయము",
      blessings: ["శ్రీరస్తు", "శుభమస్తు", "అవిఘ్నమస్తు"],

      dos: [
        "✔ Keep your mind calm and free from stress",
        "✔ Maintain silence inside the temple",
        "✔ Respect temple traditions and customs",
        "✔ Deposit offerings only in the Hundi",
        "✔ Keep the temple premises clean",
        "✔ Follow queue system for darshan",
        "✔ Be mindful of your valuables",
      ],

      donts: [
        "❌ Do not carry excess cash or jewellery",
        "❌ Do not wear footwear inside temple",
        "❌ Do not approach brokers for darshan",
        "❌ Do not litter or throw prasadam",
        "❌ Do not smoke or carry weapons",
        "❌ Do not create disturbance or quarrel",
        "❌ Do not bring large luggage inside",
      ],
    },

    // ================================
    // ✅ TIMINGS (UNCHANGED)
    // ================================
    timings: {
      title: "Temple Timings",
      subtitle: "శ్రీ హరిహర సహిత వాంఛిత గణపతి దేవాలయము",
      blessings: ["శ్రీరస్తు", "శుభమస్తు", "అవిఘ్నమస్తు"],

      schedule: [
        {
          day: "Monday",
          morning: "6:00 AM - 11:30 AM",
          evening: "6:00 PM - 8:30 PM",
        },
        {
          day: "Tuesday",
          morning: "6:00 AM - 11:30 AM",
          evening: "6:00 PM - 8:30 PM",
        },
        {
          day: "Wednesday",
          morning: "6:00 AM - 11:30 AM",
          evening: "6:00 PM - 8:30 PM",
        },
        {
          day: "Thursday",
          morning: "6:00 AM - 11:30 AM",
          evening: "6:00 PM - 8:30 PM",
        },
        {
          day: "Friday",
          morning: "6:00 AM - 11:30 AM",
          evening: "6:00 PM - 8:30 PM",
        },
        {
          day: "Saturday",
          morning: "6:00 AM - 11:30 AM",
          evening: "6:00 PM - 8:30 PM",
        },
        {
          day: "Sunday",
          morning: "6:00 AM - 11:30 AM",
          evening: "6:00 PM - 8:30 PM",
        },
      ],
    },
  },

  //sevas
  sevas: [
  {
    name: "Sri Venkateswara Swamy Archana",
    image: "/images/sevas/venkateswara.jpg",
    description:
      "Sacred archana performed to Lord Venkateswara Swamy seeking prosperity, success, and fulfillment of wishes.",
  },
  {
    name: "Suprabhatam Seva",
    image: "/images/sevas/suprabhatam.jpg",
    description:
      "Early morning seva to awaken the Lord with devotional hymns and begin the day with divine blessings.",
  },
 {
  name: "Archana",
  image: "/images/sevas/archana.jpg",
  description:
    "Sacred ritual where the deity is worshipped by chanting divine names (Ashtottaram or Sahasranamam) along with offering flowers, seeking blessings for prosperity, health, and success.",
},
  {
    name: "Ganesha Archana",
    image: "/images/sevas/ganesha.jpg",
    description:
      "Special prayers to Lord Ganesha for removal of obstacles and success in all endeavors.",
  },
  {
    name: "Hanuman Seva",
    image: "/images/sevas/hanuman.jpg",
    description:
      "Dedicated pooja to Lord Hanuman for strength, courage, and protection from negative energies.",
  },
  {
    name: "Lakshmi Devi Pooja",
    image: "/images/sevas/lakshmi_devi.jpg",
    description:
      "Pooja to Goddess Lakshmi for wealth, prosperity, and well-being of the family.",
  },
  {
    name: "Navagraha Pooja",
    image: "/images/sevas/navagraha.jpg",
    description:
      "Ritual performed to balance planetary influences and remove doshas for a harmonious life.",
  },
],

  //gallery
  gallery: [
    {
      image: "/gallery/image1.jpg",
    },


    {
      image: "/gallery/image2.jpg",
    },
    {
      image: "/gallery/image3.jpg",
    },
    {
      image: "/gallery/image4.jpg",
    },
    {
      image: "/gallery/image5.jpg",
    },
    {
      image: "/gallery/image6.jpg",
    },
    {
      image: "/gallery/image7.jpg",
    },
    {
      image: "/gallery/image8.jpg",
    },
   


  ],

  //contact
  contact: {
    phone: "9876543210",
    email: "temple@email.com",
    location: "Street No. 20, HMT Swarnapuri Colony, Ameenpur, Miyapur, Hyderabad, Telangana 502033"
  }


  
};