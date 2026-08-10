export const profile = {
  name: "Rawan Tharwat Badran",
  role: "Flutter Developer",
  tagline: 
    "I build clean, fast mobile applications using Flutter, employing Clean Architecture and delivering a simple, engaging user experience.",
  taglineEn:
    "Flutter developer crafting scalable cross-platform apps with BLoC, GetX, Firebase and clean architecture.",
  email: "rawantharwat2004@gmail.com",
  phone: "01026482014",
  location: "Al Gharbia, Egypt",
  linkedin: "https://linkedin.com/in/rawan-tharwat-5024b1297",
  github: "https://github.com/ultarsound",
  photo: "/images/profile.jpg",
};

export const stats = [
  { value: "5+", label: "Shipped projects" },
  { value: "4.01", label: "GPA — First Class Honours" },
  { value: "120h", label: "Flutter training (ITI)" },
  { value: "2026", label: "CS Graduate, Tanta Univ." },
];

export const skillGroups = [
  { title: "Languages", items: ["Dart", "C++", "Python", "Java", "HTML", "CSS", "JS"] },
  { title: "Framework", items: ["Flutter"] },
  { title: "State Management", items: ["BLoC", "Cubit", "GetX", "Provider"] },
  { title: "Data & Backend", items: ["Firebase Firestore", "Supabase", "REST APIs", "XAMPP"] },
  { title: "Architecture", items: ["Clean Architecture", "OOP", "SOLID mindset"] },
  { title: "Tools", items: ["Firebase Auth", "Cloud Messaging", "GitHub"] },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  points: string[];
  tags: string[];
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "movie-app",
    title: "Movie App",
    subtitle: "Movie & TV discovery app for browsing and searching entertainment content",
    points: [
      "Led a team project built with Flutter and BLoC/Cubit state management.",
      "Integrated TMDB API for real-time movie data, trailers and detailed views.",
      "Firebase Authentication for secure login, SharedPreferences for favorites.",
      "Reusable responsive UI with Salomon Bottom Bar navigation.",
    ],
    tags: ["Flutter", "BLoC", "TMDB API", "Firebase Auth"],
    images: ["/images/projects/movie1.png", "/images/projects/movie2.png"],
  },
  {
    slug: "fashion",
    title: "Fashion — E-commerce",
    subtitle: "Full-featured fashion e-commerce application",
    points: [
      "Complete shopping experience built with Flutter and GetX.",
      "PHP/XAMPP backend for products, authentication and orders.",
      "Product listing, filtering, cart and checkout flow.",
      "Clean architecture for scalability and maintainability.",
    ],
    tags: ["Flutter", "GetX", "PHP / XAMPP", "Clean Architecture"],
    images: ["/images/projects/ecommerce1.png", "/images/projects/ecommerce2.png"],
  },
  {
    slug: "health-snap-ai",
    title: "Health Snap AI",
    subtitle: "AI-powered health & food analysis application",
    points: [
      "Analyzes food and symptoms through AI image analysis with the Gemini API.",
      "REST integrations delivering real-time nutritional insights.",
      "Snap-a-photo UX with instant health feedback.",
      "Firebase for user data storage and authentication.",
    ],
    tags: ["Flutter", "Gemini API", "REST", "Firebase"],
    images: ["/images/projects/health1.png", "/images/projects/health2.png"],
  },
  {
    slug: "sonixy",
    title: "Sonixy",
    subtitle: "Music streaming and discovery application",
    points: [
      "Smooth audio playback and playlist management in Flutter.",
      "Music APIs for track discovery, search and artist browsing.",
      "BLoC state management for a consistent experience.",
      "Modern dark UI with custom controls and waveform visualization.",
    ],
    tags: ["Flutter", "BLoC", "Audio", "Music APIs"],
    images: ["/images/projects/sonixy1.png", "/images/projects/sonixy2.png"],
  },
  {
    slug: "pinspire",
    title: "Pinspire",
    subtitle: "Pinterest-inspired image sharing and inspiration platform",
    points: [
      "Discover, save and share visual inspiration boards.",
      "Masonry grid layout for a rich browsing experience.",
      "Firestore + Storage for real-time uploads and boards.",
      "Auth, follow system and personalized feeds.",
    ],
    tags: ["Flutter", "Firestore", "Storage", "Masonry UI"],
    images: ["/images/projects/pin1.png", "/images/projects/pin2.png"],
  },
];

export const experience = [
  {
    role: "Freelance Flutter Developer",
    org: "Self-employed / Remote",
    period: "July 2026 – Present",
    points: [
      "Cross-platform mobile apps for clients, from UI design to backend integration.",
      "Clean Architecture with BLoC/Cubit, GetX and Provider for maintainable code.",
      "REST APIs and Firebase (Auth, Firestore, Cloud Messaging) per client needs.",
      "Independent client communication, requirements gathering and delivery.",
    ],
  },
];

export const certifications = [
  {
    title: "Mobile Using Flutter (120 hrs)",
    org: "Information Technology Institute (ITI)",
    meta: "Jul 11 – Aug 2, 2025 · HTML5 & CSS3, Programming, Dart, Flutter, Firebase",
  },
  {
    title: "Python Programming Basics",
    org: "MaharaTech / ITI — AI Academy",
    meta: "Oct 16, 2025 · Verification: rUcsAPsLLh",
  },
  {
    title: "Learn HTML & CSS",
    org: "MaharaTech / ITI Platform",
    meta: "Jul 26, 2025 · 7h 42m · Verification: 3AKHPxwlYv",
  },
];

export const education = {
  degree: "Bachelor's Degree in Computer Science",
  school: "Faculty of Science, Tanta University",
  meta: "2026 · Excellent with First Class Honours · GPA 4.01",
  languages: ["Arabic", "English"],
};
