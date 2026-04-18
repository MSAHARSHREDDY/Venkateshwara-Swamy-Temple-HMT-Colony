export const templeData = {
  //Darshan
  "darshan": {
    "timings": [
      {
        "title": "Darshan Timings",
        "rows": [
          { "day": "Daily (Except Tue & Sat)", "session": "Morning", "time": "5:00 AM to 11:30 AM" },
          { "day": "Daily (Except Tue & Sat)", "session": "Evening", "time": "4:00 PM to 8:30 PM" },
          { "day": "Tuesday", "session": "Morning", "time": "4:00 AM to 12:00 Noon" },
          { "day": "Saturday", "session": "Morning", "time": "4:00 AM to 12:30 AM" }
        ]
      },
      {
        "title": "Abishekam Timings",
        "rows": [
          { "day": "Sat & Tue", "session": "Morning", "time": "4:00 AM" },
          { "day": "Other Days", "session": "Morning", "time": "5:00 AM" }
        ]
      }
    ]
  },

  //Deities
  deities: [
  {
    name: "Sri Venkateswara Swamy",
    image: "/images/venkateswara.jpg",
    description:
      "Lord Venkateswara is an incarnation of Lord Vishnu, worshipped as the giver of wealth, prosperity, and protection.",
    significance:
      "Devotees believe prayers to Lord Venkateswara remove financial difficulties and bring success in life.",
    specialDays: ["Saturday", "Vaikunta Ekadasi", "Brahmotsavam"],
    prasadam: ["Laddu", "Pulihora", "Daddojanam"],
    location: "Main Sanctum",
  },

  {
    name: "Sri Anjaneya Swamy",
    image: "/images/hanuman.jpg",
    description:
      "Lord Hanuman is the symbol of strength, devotion, and courage. He is a great devotee of Lord Rama.",
    significance:
      "Worshipping Hanuman removes fear, negative energies, and gives mental strength.",
    specialDays: ["Tuesday", "Saturday", "Hanuman Jayanthi"],
    prasadam: ["Vadamala", "Butter", "Betel Leaves"],
    location: "Temple Entrance",
  },

  {
     name: "Sri Ganesha",
  image: "/images/ganesha.jpg",
  description:
    "Lord Ganesha is the remover of obstacles and the god of beginnings, wisdom, and success.",
  significance:
    "Devotees pray to Ganesha before starting any new work to ensure success and remove obstacles.",
  specialDays: ["Vinayaka Chaturthi", "Wednesday"],
  prasadam: ["Modak", "Laddu", "Coconut"],
  location: "Temple Entrance",
  },

  {
    name: "Navagrahas",
    image: "/images/navagraha.jpg",
    description:
      "The nine planetary deities influence human life and destiny.",
    significance:
      "Navagraha pooja helps reduce planetary doshas and improves life balance.",
    specialDays: ["Saturday", "Amavasya"],
    prasadam: ["Sesame Oil", "Flowers"],
    location: "Outer Prakaram",
  },
],

  // 🔥 SEVAS ADDED HERE
  sevas: [
    {
      category: "Abhishekams",
      items: [
        { name: "Sri Anjaneya Abishekam", amount: 100 },
        { name: "Sri Shiva Abishekam", amount: 100 },
        { name: "Yekagraha Abishekam", amount: 50 },
        { name: "Navagraha Abishekam", amount: 100 },
        {
          name: "Shivaratri Shiva Abhishekam",
          amount: 50,
          note: "Only on Maha Shivaratri",
        },
      ],
    },

    {
      category: "Archanas and Other Poojas",
      items: [
        { name: "Archana", amount: 20 },
        { name: "Sahasra Nama Archana", amount: 100 },
        { name: "Kesha Khandana", amount: 100 },
        { name: "Bell Samarpana", amount: 50 },
        { name: "Tenkaya Mudupu", amount: 50 },
        { name: "Lorry/Bus Pooja", amount: 500 },
        { name: "Car Pooja", amount: 250 },
        { name: "Auto (3 Wheeler) Pooja", amount: 150 },
        { name: "Scooter (2 Wheeler) Pooja", amount: 100 },
        { name: "Cycle Pooja", amount: 10 },
        { name: "Manyusuktha Homam", amount: 1116 },
        { name: "Shashvatha Pooja", amount: 5116 },
      ],
    },

    {
      category: "Mandala Seva",
      items: [
        { name: "Mandala Abhishekam (40 Days)", amount: 501 },
      ],
    },

    {
      category: "Weekly Sevas (Tuesday & Saturday)",
      items: [
        { name: "Sindhura Alankaram", amount: 250 },
        { name: "Vishwaroopa Alankaram", amount: 800 },
      ],
    },

    {
      category: "Special Weekly Sevas",
      items: [
        {
          name: "Suvarna Nagavallidalarchana",
          amount: 500,
          note: "Only Tuesday",
        },
        {
          name: "Suvarna Pushparchana",
          amount: 500,
          note: "Only Saturday",
        },
      ],
    },

    {
      category: "Prasadams",
      items: [
        { name: "Roat", amount: 200 },
        { name: "Pulihora", amount: 150 },
        { name: "Sondelu", amount: 100 },
        { name: "Vadamala", amount: 350 },
        { name: "Ravva Kesari", amount: 200 },
        { name: "Sakkara Pongali", amount: 200 },
        { name: "Bellam Pongali", amount: 200 },
        { name: "Katte Pongali", amount: 200 },
        { name: "Daddojanam", amount: 200 },
        { name: "Laddu (80g)", amount: 20 },
        { name: "Wada (2 pcs)", amount: 20 },
      ],
    },

    {
      category: "Festivals",
      items: [
        { name: "Hanuman Jayanthi" },
        { name: "Sri Rama Navami" },
        { name: "Vijaya Dashami" },
        { name: "Maha Shivaratri" },
        { name: "Deepavali" },
        { name: "Ugadi" },
      ],
    },
  ],


  //Dontations
  donations: {
    address: [
      "Sri Venkateswara Swamy Devasthanam",
      "6 HMT Swarnapuri Colony",
      "Miyapur – 500049, India",
    ],
    description:
      "Devotees can contribute towards temple development, annadanam, and festivals. Your donations help maintain daily rituals and support community services.",
    annadanam: [
      "Rs. 1,116 – One day Annadanam",
      "Rs. 5,116 – Yearly Annadanam",
    ],
    amounts: [100, 500, 1116, 5116, 10000],
  },

  //Trustees
  trustees: {
    board: [
      { name: "Sri Burugu Veeresham", role: "Chairman" },
      { name: "Sri Kyasa Lakshmi Narayana", role: "Trustee" },
      { name: "Sri Chaluvadi Narayana", role: "Trustee" },
    ],
    committee: [
      { name: "Sri Pippala Vishweshwar Rao", role: "President" },
      { name: "Sri Chakilam Bhasker Rao", role: "Secretary" },
    ],
  },

  //Contact
  contact: {
    address: [
      "Sri Venkateswara Swamy Devasthanam",
      "Miyapur – 500049, India",
    ],
    phone: ["+91-XXXXXXXXXX"],
    email: "admin@venkateswaratemple.org",
    routes: [
      "From Miyapur: Local buses and autos available",
    ],
  },
};