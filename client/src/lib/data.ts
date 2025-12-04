
export interface Place {
  name: string;
  image: string;
  description: string;
  visitingTime: string;
  entryFee: string;
}

export interface City {
  id: string;
  name: string;
  state: string;
  country: string;
  shortDescription: string;
  description: string;
  bestTime: string;
  duration: string;
  bannerImage: string;
  cardImage: string;
  category: 'Historical' | 'Beaches' | 'Hill Stations' | 'Tech Cities' | 'Cultural';
  places: Place[];
  food: string[];
  reach: {
    air: string;
    train: string;
    road: string;
  };
}

export interface Blog {
  id: string;
  title: string;
  cityId: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

export const cities: City[] = [
  {
    id: "mysore",
    name: "Mysore",
    state: "Karnataka",
    country: "India",
    shortDescription: "Royal city known for Mysore Palace and Dussehra.",
    description: "Mysore, officially Mysuru, is a major city in the southern Indian state of Karnataka. It is the headquarters of the Mysore district and Mysore division and is one of the three largest cities in the state. Known for its glittering royal heritage and magnificent monuments and buildings.",
    bestTime: "October to March",
    duration: "2-3 Days",
    bannerImage: "https://images.unsplash.com/photo-1582555949804-240db2651908?q=80&w=1920&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1606293926075-69a00febf352?q=80&w=600&auto=format&fit=crop",
    category: "Historical",
    places: [
      {
        name: "Mysore Palace",
        image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?q=80&w=600",
        description: "A historical palace and a royal residence at Mysore. It is incredibly breathtaking during the Dussehra festival.",
        visitingTime: "10:00 AM - 5:30 PM",
        entryFee: "₹70 for Indians, ₹200 for Foreigners"
      },
      {
        name: "Brindavan Gardens",
        image: "https://images.unsplash.com/photo-1599382482925-695110175d1a?q=80&w=600",
        description: "Famous for its symmetric design and illuminated terrace gardens.",
        visitingTime: "6:00 AM - 8:00 PM",
        entryFee: "₹15"
      },
      {
        name: "Chamundi Hill",
        image: "https://images.unsplash.com/photo-1622207828863-3952c80a36d9?q=80&w=600",
        description: "Located 13 km east of Mysore, the hill is famous for the Chamundeshwari Temple.",
        visitingTime: "7:30 AM - 9:00 PM",
        entryFee: "Free"
      },
      {
        name: "St. Philomena's Cathedral",
        image: "https://images.unsplash.com/photo-1584801547331-9f6438536a6e?q=80&w=600",
        description: "A Catholic church that is the cathedral of the Diocese of Mysore. It is recognized as the second tallest church in Asia.",
        visitingTime: "5:00 AM - 6:00 PM",
        entryFee: "Free"
      },
      {
        name: "Mysore Zoo",
        image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?q=80&w=600",
        description: "One of the oldest and most popular zoos in India.",
        visitingTime: "8:30 AM - 5:30 PM",
        entryFee: "₹50"
      }
    ],
    food: ["Mysore Pak", "Mysore Masala Dosa", "Ragi Mudde", "Bisibelebath"],
    reach: {
      air: "The nearest airport is Mysore Airport (MYQ).",
      train: "Mysore Junction is well connected to all major cities.",
      road: "Excellent road connectivity from Bangalore (3 hours)."
    }
  },
  {
    id: "goa",
    name: "Goa",
    state: "Goa",
    country: "India",
    shortDescription: "Famous for beaches, nightlife and seafood.",
    description: "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area's tropical spice plantations.",
    bestTime: "November to February",
    duration: "3-4 Days",
    bannerImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1920&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600&auto=format&fit=crop",
    category: "Beaches",
    places: [
      {
        name: "Calangute Beach",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600",
        description: "Known as the 'Queen of Beaches', Calangute is the largest beach in North Goa.",
        visitingTime: "24 Hours",
        entryFee: "Free"
      },
      {
        name: "Fort Aguada",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb9d4d?q=80&w=600",
        description: "A well-preserved seventeenth-century Portuguese fort.",
        visitingTime: "9:30 AM - 6:00 PM",
        entryFee: "Free"
      },
      {
        name: "Basilica of Bom Jesus",
        image: "https://images.unsplash.com/photo-1560175873-366d210f2618?q=80&w=600",
        description: "A UNESCO World Heritage Site holding the mortal remains of St. Francis Xavier.",
        visitingTime: "9:00 AM - 6:30 PM",
        entryFee: "Free"
      },
      {
        name: "Dudhsagar Falls",
        image: "https://images.unsplash.com/photo-1544902717-358209c37524?q=80&w=600",
        description: "A four-tiered waterfall located on the Mandovi River.",
        visitingTime: "9:00 AM - 6:00 PM",
        entryFee: "₹400 (Jeep Ride)"
      },
      {
        name: "Anjuna Flea Market",
        image: "https://images.unsplash.com/photo-1533001696336-d2878da0064a?q=80&w=600",
        description: "Famous Wednesday market for shopping and food.",
        visitingTime: "9:00 AM - 6:00 PM (Wednesdays)",
        entryFee: "Free"
      }
    ],
    food: ["Goan Fish Curry", "Pork Vindaloo", "Bebinca", "Feni"],
    reach: {
      air: "Dabolim Airport (GOI) connects to major cities.",
      train: "Madgaon and Thivim are main railway stations.",
      road: "Well connected by bus from Mumbai and Bangalore."
    }
  },
  {
    id: "ooty",
    name: "Ooty",
    state: "Tamil Nadu",
    country: "India",
    shortDescription: "Scenic hill station in the Nilgiris.",
    description: "Ooty, officially Udhagamandalam, is a resort town in the Western Ghats mountains, in southern India's Tamil Nadu state. Founded as a British Raj summer resort, it features a working steam railway line.",
    bestTime: "April to June",
    duration: "2-3 Days",
    bannerImage: "https://images.unsplash.com/photo-1548564317-a8808c407766?q=80&w=1920&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1548564317-a8808c407766?q=80&w=600&auto=format&fit=crop",
    category: "Hill Stations",
    places: [
      {
        name: "Ooty Botanical Gardens",
        image: "https://images.unsplash.com/photo-1624950840727-a343d3e69431?q=80&w=600",
        description: "A vast garden laid out in 1848, featuring a fossilized tree.",
        visitingTime: "7:00 AM - 6:30 PM",
        entryFee: "₹30"
      },
      {
        name: "Ooty Lake",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666c51?q=80&w=600",
        description: "Artificial lake built by John Sullivan in 1824, popular for boating.",
        visitingTime: "9:00 AM - 6:00 PM",
        entryFee: "₹13"
      },
      {
        name: "Doddabetta Peak",
        image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=600",
        description: "The highest mountain in the Nilgiri Mountains.",
        visitingTime: "7:00 AM - 6:00 PM",
        entryFee: "₹6"
      },
      {
        name: "Rose Garden",
        image: "https://images.unsplash.com/photo-1614593689662-2c039f3622c6?q=80&w=600",
        description: "Largest rose garden in India.",
        visitingTime: "7:30 AM - 6:30 PM",
        entryFee: "₹30"
      },
      {
        name: "Nilgiri Mountain Railway",
        image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=600",
        description: "Toy train ride offering spectacular views of the valleys.",
        visitingTime: "Runs daily",
        entryFee: "₹205 (First Class)"
      }
    ],
    food: ["Homemade Chocolates", "Ooty Varkey", "Tea", "Avial"],
    reach: {
      air: "Coimbatore Airport (CJB) is 88km away.",
      train: "Mettupalayam is the nearest broad gauge station.",
      road: "Good connectivity from Coimbatore and Bangalore."
    }
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    country: "India",
    shortDescription: "The Pink City known for forts and palaces.",
    description: "Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or 'Pink City' for its trademark building color.",
    bestTime: "November to February",
    duration: "2-3 Days",
    bannerImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1920&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=600&auto=format&fit=crop",
    category: "Cultural",
    places: [
      {
        name: "Hawa Mahal",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600",
        description: "Palace of Winds, constructed of red and pink sandstone.",
        visitingTime: "9:00 AM - 4:30 PM",
        entryFee: "₹50"
      },
      {
        name: "Amber Fort",
        image: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?q=80&w=600",
        description: "A majestic fort located on a hill, 11 km from Jaipur.",
        visitingTime: "8:00 AM - 5:30 PM",
        entryFee: "₹100"
      },
      {
        name: "City Palace",
        image: "https://images.unsplash.com/photo-1555893088-c0055343e203?q=80&w=600",
        description: "A complex of courtyards, gardens, and buildings.",
        visitingTime: "9:30 AM - 5:00 PM",
        entryFee: "₹200"
      },
      {
        name: "Jantar Mantar",
        image: "https://images.unsplash.com/photo-1503888963406-5e878575c855?q=80&w=600",
        description: "An astronomical observation site built in the early 18th century.",
        visitingTime: "9:00 AM - 4:30 PM",
        entryFee: "₹50"
      },
      {
        name: "Nahargarh Fort",
        image: "https://images.unsplash.com/photo-1592640378595-83d9433b2924?q=80&w=600",
        description: "Stands on the edge of the Aravalli Hills, overlooking the city.",
        visitingTime: "10:00 AM - 5:30 PM",
        entryFee: "₹50"
      }
    ],
    food: ["Dal Baati Churma", "Ghevar", "Pyaaz Kachori", "Laal Maas"],
    reach: {
      air: "Jaipur International Airport (JAI).",
      train: "Jaipur Junction connects to major Indian cities.",
      road: "Excellent connectivity via NH8 from Delhi."
    }
  },
  {
    id: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    country: "India",
    shortDescription: "The Silicon Valley of India.",
    description: "Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry, the city is also known for its parks and nightlife.",
    bestTime: "Throughout the year",
    duration: "2-3 Days",
    bannerImage: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1920&auto=format&fit=crop",
    cardImage: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=600&auto=format&fit=crop",
    category: "Tech Cities",
    places: [
      {
        name: "Cubbon Park",
        image: "https://images.unsplash.com/photo-1595126425237-8b65c5261787?q=80&w=600",
        description: "A landmark 'lung' area of the Bengaluru city.",
        visitingTime: "6:00 AM - 6:00 PM",
        entryFee: "Free"
      },
      {
        name: "Bangalore Palace",
        image: "https://images.unsplash.com/photo-1589370318922-e74731159308?q=80&w=600",
        description: "A palace inspired by England's Windsor Castle.",
        visitingTime: "10:00 AM - 5:30 PM",
        entryFee: "₹230"
      },
      {
        name: "Lalbagh Botanical Garden",
        image: "https://images.unsplash.com/photo-1591281434127-d7314c7749f5?q=80&w=600",
        description: "Botanical garden with an aquarium and glass house.",
        visitingTime: "6:00 AM - 7:00 PM",
        entryFee: "₹25"
      },
      {
        name: "Vidhana Soudha",
        image: "https://images.unsplash.com/photo-1549599739-332456866e6e?q=80&w=600",
        description: "Neo-Dravidian legislative building.",
        visitingTime: "External View Only",
        entryFee: "N/A"
      },
      {
        name: "ISKCON Temple",
        image: "https://images.unsplash.com/photo-1548678706-3c37a6b92b45?q=80&w=600",
        description: "One of the largest ISKCON temples in the world.",
        visitingTime: "4:15 AM - 8:30 PM",
        entryFee: "Free"
      }
    ],
    food: ["Benne Dosa", "Filter Coffee", "Mangalore Bun", "Idli Vada"],
    reach: {
      air: "Kempegowda International Airport (BLR).",
      train: "KSR Bengaluru and Yesvantpur are major hubs.",
      road: "Hub for KSRTC buses connecting South India."
    }
  }
];

export const blogs: Blog[] = [
  {
    id: "blog-1",
    title: "A Weekend in Mysore: Palaces and Beyond",
    cityId: "mysore",
    author: "Sarah Jenkins",
    date: "Oct 15, 2023",
    image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450?q=80&w=800",
    excerpt: "Discovering the royal charm of Mysore in just 48 hours.",
    content: "Mysore is a city that demands to be explored slowly. From the moment you step off the train, the royal heritage is palpable. The Mysore Palace is, of course, the star attraction. Walking through its halls, you can't help but marvel at the intricate craftsmanship. But Mysore is more than just the palace. The local markets, filled with the scent of sandalwood and jasmine, are a treat for the senses..."
  },
  {
    id: "blog-2",
    title: "Goa Beyond Beaches: A Cultural Deep Dive",
    cityId: "goa",
    author: "Rahul Verma",
    date: "Nov 2, 2023",
    image: "https://images.unsplash.com/photo-1560175873-366d210f2618?q=80&w=800",
    excerpt: "Exploring the Portuguese heritage and hidden forts of Goa.",
    content: "Most people come to Goa for the sun and sand, but I went for the history. Old Goa is a treasure trove of colonial architecture. The Basilica of Bom Jesus is awe-inspiring, not just for its religious significance but for its sheer scale and preservation. Renting a scooter and driving through the spice plantations was another highlight of my trip..."
  },
  {
    id: "blog-3",
    title: "Ooty: The Queen of Hill Stations",
    cityId: "ooty",
    author: "Priya Sharma",
    date: "Dec 10, 2023",
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=800",
    excerpt: "Riding the toy train and sipping tea in the Nilgiris.",
    content: "The toy train ride from Mettupalayam to Ooty is an experience of a lifetime. As the train chugs up the steep slopes, the views of the valley are mesmerizing. Ooty itself is charming, with its colonial bungalows and vast botanical gardens. Don't forget to visit the tea museums and sample some fresh Nilgiri tea!"
  }
];

export const categories = ["All", "Historical", "Beaches", "Hill Stations", "Tech Cities", "Cultural"];
