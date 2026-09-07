"use strict";

/* ==================================================
   TEAM 0001 — APPLICATION SCRIPT
   Modular initializers, data-driven UI, bilingual system
================================================== */

/* ---------------- TRANSLATIONS ---------------- */
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      team: "Team",
      activities: "Activities",
      events: "Events",
      achievements: "Achievements",
      gallery: "Gallery",
      contact: "Contact",
      join: "Join Team",
    },
    hero: {
      eyebrow: "TEAM 0001",
      title: "One Team. One Identity. One Mission.",
      description:
        "Built on teamwork, loyalty, creativity and collective growth.",
      explore: "Explore Team",
      join: "Become a Member",
      scroll: "Scroll",
    },
    about: {
      eyebrow: "Who We Are",
      title: "A community built to move forward together",
      lead: "Team 0001 is a community built around collaboration, learning, creativity and collective growth.",
      body: "We bring people together around a shared identity — one that rewards initiative, supports every member's growth, and turns individual effort into something bigger. Every activity, event and conversation inside Team 0001 exists to strengthen that bond.",
      quote: "More than a team.<br>A shared identity.<br>A common direction.",
      cta: "Meet the members",
    },
    values: {
      eyebrow: "What We Stand For",
      title: "Core values that hold us together",
    },
    why: { eyebrow: "The Difference", title: "Why Team 0001?" },
    journey: { eyebrow: "The Journey", title: "How Team 0001 came together" },
    team: {
      eyebrow: "The People",
      title: "Meet the team",
      modal: { joined: "Joined" },
    },
    activities: {
      eyebrow: "In Action",
      title: "What we do together",
      empty: "No activities to show yet. Add activity details here.",
    },
    events: {
      eyebrow: "Calendar",
      upcomingTitle: "Upcoming events",
      pastTitle: "Past events",
      emptyUpcoming: "No upcoming events at the moment.",
      emptyPast: "No past events recorded yet.",
      details: "View details",
      daysLeft: "days left",
    },
    achievements: { eyebrow: "Recognition", title: "Milestones worth marking" },
    gallery: {
      eyebrow: "Moments",
      title: "Gallery",
      empty: "No images in this category yet.",
    },
    announcements: {
      eyebrow: "Stay Updated",
      title: "Announcements",
      empty: "No announcements right now. Check back soon.",
      readMore: "Read more",
    },
    join: {
      eyebrow: "Get Involved",
      title: "Become part of Team 0001",
      desc: "Have the energy to contribute, learn and grow with us?",
      joinBtn: "Join the Team",
      contactBtn: "Get in Touch",
    },
    contact: {
      eyebrow: "Reach Us",
      title: "Get in touch",
      desc: "Questions, ideas or collaboration proposals — we would love to hear from you.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      locationValue: "Add official location here",
      form: {
        name: "Name",
        namePh: "Your full name",
        email: "Email",
        emailPh: "you@example.com",
        subject: "Subject",
        subjectPh: "What is this about?",
        message: "Message",
        messagePh: "Write your message here",
        send: "Send Message",
        sending: "Sending...",
        success: "Thanks — your message has been received.",
        errName: "Please enter your name.",
        errEmail: "Please enter a valid email address.",
        errSubject: "Please add a short subject.",
        errMessage: "Please write a short message.",
      },
    },
    footer: {
      explore: "Explore",
      connect: "Connect",
      instagram: "Instagram",
      facebook: "Facebook",
      youtube: "YouTube",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms",
    },
    filters: { all: "All" },
  },
  hi: {
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      team: "हमारी टीम",
      activities: "गतिविधियाँ",
      events: "कार्यक्रम",
      achievements: "उपलब्धियाँ",
      gallery: "गैलरी",
      contact: "संपर्क",
      join: "टीम से जुड़ें",
    },
    hero: {
      eyebrow: "टीम 0001",
      title: "एक टीम • एक पहचान • एक मिशन",
      description:
        "टीमवर्क, निष्ठा, रचनात्मकता और सामूहिक विकास पर आधारित एक समुदाय।",
      explore: "टीम देखें",
      join: "टीम से जुड़ें",
      scroll: "स्क्रॉल करें",
    },
    about: {
      eyebrow: "हम कौन हैं",
      title: "एक साथ आगे बढ़ने के लिए बना समुदाय",
      lead: "टीम 0001 सहयोग, सीख, रचनात्मकता और सामूहिक विकास पर आधारित एक समुदाय है।",
      body: "हम लोगों को एक साझा पहचान के इर्द-गिर्द जोड़ते हैं — जो पहल को महत्व देती है, हर सदस्य के विकास में साथ देती है, और व्यक्तिगत प्रयास को कुछ बड़ा बना देती है। टीम 0001 की हर गतिविधि, कार्यक्रम और बातचीत इसी रिश्ते को मजबूत करने के लिए है।",
      quote: "सिर्फ एक टीम नहीं।<br>एक साझा पहचान।<br>एक साझा दिशा।",
      cta: "सदस्यों से मिलें",
    },
    values: {
      eyebrow: "हमारे मूल्य",
      title: "मूल मूल्य जो हमें जोड़े रखते हैं",
    },
    why: { eyebrow: "फ़र्क", title: "टीम 0001 ही क्यों?" },
    journey: { eyebrow: "सफ़र", title: "टीम 0001 कैसे बनी" },
    team: {
      eyebrow: "हमारे लोग",
      title: "टीम से मिलें",
      modal: { joined: "शामिल हुए" },
    },
    activities: {
      eyebrow: "कार्य में",
      title: "हम मिलकर क्या करते हैं",
      empty: "अभी दिखाने के लिए कोई गतिविधि नहीं है।",
    },
    events: {
      eyebrow: "कैलेंडर",
      upcomingTitle: "आगामी कार्यक्रम",
      pastTitle: "पिछले कार्यक्रम",
      emptyUpcoming: "फ़िलहाल कोई आगामी कार्यक्रम नहीं है।",
      emptyPast: "अभी तक कोई पिछला कार्यक्रम दर्ज नहीं है।",
      details: "विवरण देखें",
      daysLeft: "दिन शेष",
    },
    achievements: { eyebrow: "सम्मान", title: "उपलब्धियाँ जो मायने रखती हैं" },
    gallery: {
      eyebrow: "पल",
      title: "गैलरी",
      empty: "इस श्रेणी में अभी कोई तस्वीर नहीं है।",
    },
    announcements: {
      eyebrow: "अपडेट रहें",
      title: "घोषणाएँ",
      empty: "फ़िलहाल कोई घोषणा नहीं है। जल्द ही देखें।",
      readMore: "और पढ़ें",
    },
    join: {
      eyebrow: "जुड़िए",
      title: "टीम 0001 का हिस्सा बनें",
      desc: "क्या आपमें योगदान देने, सीखने और हमारे साथ आगे बढ़ने का जज़्बा है?",
      joinBtn: "टीम से जुड़ें",
      contactBtn: "संपर्क करें",
    },
    contact: {
      eyebrow: "संपर्क करें",
      title: "हमसे संपर्क करें",
      desc: "सवाल, विचार या सहयोग के प्रस्ताव — हमें आपसे सुनना अच्छा लगेगा।",
      emailLabel: "ईमेल",
      phoneLabel: "फ़ोन",
      locationLabel: "स्थान",
      locationValue: "यहाँ आधिकारिक स्थान जोड़ें",
      form: {
        name: "नाम",
        namePh: "आपका पूरा नाम",
        email: "ईमेल",
        emailPh: "you@example.com",
        subject: "विषय",
        subjectPh: "यह किस बारे में है?",
        message: "संदेश",
        messagePh: "यहाँ अपना संदेश लिखें",
        send: "संदेश भेजें",
        sending: "भेजा जा रहा है...",
        success: "धन्यवाद — आपका संदेश मिल गया है।",
        errName: "कृपया अपना नाम दर्ज करें।",
        errEmail: "कृपया एक मान्य ईमेल पता दर्ज करें।",
        errSubject: "कृपया संक्षिप्त विषय जोड़ें।",
        errMessage: "कृपया एक छोटा संदेश लिखें।",
      },
    },
    footer: {
      explore: "एक्सप्लोर करें",
      connect: "जुड़ें",
      instagram: "इंस्टाग्राम",
      facebook: "फेसबुक",
      youtube: "यूट्यूब",
      linkedin: "लिंक्डइन",
      whatsapp: "व्हाट्सएप",
      rights: "सर्वाधिकार सुरक्षित।",
      privacy: "गोपनीयता नीति",
      terms: "नियम",
    },
    filters: { all: "सभी" },
  },
};

let currentLang = "en";

function t(key) {
  const parts = key.split(".");
  let node = translations[currentLang];
  for (const p of parts) {
    node = node && node[p];
  }
  return node ?? key;
}

/* ---------------- CONTENT DATA ---------------- */
const statsData = [
  {
    value: 1,
    suffix: "+",
    label: { en: "Years of Journey", hi: "साल का सफ़र" },
  },
  { value: 50, suffix: "+", label: { en: "Team Members", hi: "टीम सदस्य" } },
  { value: 20, suffix: "+", label: { en: "Activities", hi: "गतिविधियाँ" } },
  { value: 10, suffix: "+", label: { en: "Achievements", hi: "उपलब्धियाँ" } },
];

const valuesData = [
  {
    icon: "users",
    accent: "var(--color-orange)",
    title: { en: "Teamwork", hi: "टीमवर्क" },
    desc: {
      en: "We achieve more when we move as one unit, not scattered individuals.",
      hi: "जब हम बिखरे व्यक्तियों की तरह नहीं, एक इकाई की तरह चलते हैं तो अधिक हासिल करते हैं।",
    },
  },
  {
    icon: "heart-handshake",
    accent: "var(--accent-pink)",
    title: { en: "Respect", hi: "सम्मान" },
    desc: {
      en: "Every voice in Team 0001 is heard, valued and treated with dignity.",
      hi: "टीम 0001 में हर आवाज़ सुनी जाती है, महत्व दी जाती है और सम्मान से पेश आया जाता है।",
    },
  },
  {
    icon: "trending-up",
    accent: "var(--accent-emerald)",
    title: { en: "Growth", hi: "विकास" },
    desc: {
      en: "We invest in each member's learning, skills and long-term progress.",
      hi: "हम हर सदस्य की सीख, कौशल और दीर्घकालिक प्रगति में निवेश करते हैं।",
    },
  },
  {
    icon: "sparkles",
    accent: "var(--accent-cyan)",
    title: { en: "Creativity", hi: "रचनात्मकता" },
    desc: {
      en: "New ideas are welcomed and given the space to become real work.",
      hi: "नए विचारों का स्वागत है और उन्हें असली काम बनने की जगह दी जाती है।",
    },
  },
  {
    icon: "shield-check",
    accent: "var(--accent-violet)",
    title: { en: "Loyalty", hi: "निष्ठा" },
    desc: {
      en: "We stay committed to each other, through momentum and through setbacks.",
      hi: "हम एक-दूसरे के प्रति प्रतिबद्ध रहते हैं, गति में भी और चुनौतियों में भी।",
    },
  },
  {
    icon: "target",
    accent: "var(--accent-blue)",
    title: { en: "Discipline", hi: "अनुशासन" },
    desc: {
      en: "Consistency and follow-through turn intentions into real outcomes.",
      hi: "निरंतरता और अनुपालन इरादों को असली नतीजों में बदल देते हैं।",
    },
  },
];

const whyData = [
  {
    title: { en: "Strong Teamwork", hi: "मज़बूत टीमवर्क" },
    text: { en: "Real Collaboration", hi: "असली सहयोग" },
    desc: {
      en: "Members work side by side, sharing responsibility and credit equally.",
      hi: "सदस्य साथ मिलकर काम करते हैं, ज़िम्मेदारी और श्रेय दोनों बराबर बाँटते हैं।",
    },
    accent: "var(--color-orange)",
  },
  {
    title: { en: "Shared Vision", hi: "साझा दृष्टिकोण" },
    text: { en: "One Direction", hi: "एक दिशा" },
    desc: {
      en: "Everyone in Team 0001 moves toward the same long-term purpose.",
      hi: "टीम 0001 का हर सदस्य एक ही दीर्घकालिक उद्देश्य की ओर बढ़ता है।",
    },
    accent: "var(--accent-blue)",
  },
  {
    title: { en: "Continuous Growth", hi: "निरंतर विकास" },
    text: { en: "Always Improving", hi: "हमेशा बेहतर" },
    desc: {
      en: "Skills, knowledge and confidence are built activity after activity.",
      hi: "कौशल, ज्ञान और आत्मविश्वास हर गतिविधि के साथ बनते हैं।",
    },
    accent: "var(--accent-emerald)",
  },
  {
    title: { en: "New Ideas", hi: "नए विचार" },
    text: { en: "Room to Create", hi: "बनाने की जगह" },
    desc: {
      en: "Fresh thinking is encouraged and turned into real initiatives.",
      hi: "नई सोच को प्रोत्साहित किया जाता है और असली पहल में बदला जाता है।",
    },
    accent: "var(--accent-violet)",
  },
  {
    title: { en: "Community Spirit", hi: "सामुदायिक भावना" },
    text: { en: "Belonging, Always", hi: "हमेशा अपनापन" },
    desc: {
      en: "Every member feels like part of something bigger than themselves.",
      hi: "हर सदस्य खुद से बड़ी किसी चीज़ का हिस्सा महसूस करता है।",
    },
    accent: "var(--accent-cyan)",
  },
  {
    title: { en: "Collective Success", hi: "सामूहिक सफलता" },
    text: { en: "We Win Together", hi: "साथ जीतते हैं" },
    desc: {
      en: "Individual wins are celebrated as wins for the whole team.",
      hi: "व्यक्तिगत जीत को पूरी टीम की जीत के रूप में मनाया जाता है।",
    },
    accent: "var(--accent-pink)",
  },
];

const journeyData = [
  {
    year: { en: "2025", hi: "2025" },
    title: { en: "Team 0001 Begins", hi: "टीम 0001 की शुरुआत" },
    desc: {
      en: "A small group came together around one shared identity and mission.",
      hi: "एक साझा पहचान और मिशन के इर्द-गिर्द एक छोटा समूह इकट्ठा हुआ।",
    },
  },
  {
    year: { en: "2025", hi: "2025" },
    title: { en: "First Major Activity", hi: "पहली बड़ी गतिविधि" },
    desc: {
      en: "Our first community activity brought the founding members closer together.",
      hi: "हमारी पहली सामुदायिक गतिविधि ने संस्थापक सदस्यों को और करीब लाया।",
    },
  },
  {
    year: { en: "2026", hi: "2026" },
    title: { en: "Community Expansion", hi: "समुदाय का विस्तार" },
    desc: {
      en: "New members joined, bringing fresh energy and new capabilities.",
      hi: "नए सदस्य जुड़े, नई ऊर्जा और नई क्षमताएँ लेकर आए।",
    },
  },
  {
    year: { en: "2026", hi: "2026" },
    title: { en: "New Initiatives", hi: "नई पहल" },
    desc: {
      en: "Team 0001 launched new activities and expanded its reach.",
      hi: "टीम 0001 ने नई गतिविधियाँ शुरू कीं और अपनी पहुंच बढ़ाई।",
    },
  },
  {
    year: { en: "Future", hi: "भविष्य" },
    title: { en: "What Comes Next", hi: "आगे क्या है" },
    desc: {
      en: "Add upcoming plans and milestones for Team 0001 here.",
      hi: "टीम 0001 की आने वाली योजनाएँ और लक्ष्य यहाँ जोड़ें।",
    },
  },
];

const teamData = [
  {
    name: "Add Member Name",
    role: "Founder",
    roleKey: "founders",
    bio: {
      en: "Add team member information here.",
      hi: "यहाँ टीम सदस्य की जानकारी जोड़ें।",
    },
    joined: "2025",
    skills: ["Leadership", "Strategy"],
    photo: "assets/team0001-logo.png",
  },
  {
    name: "Add Member Name",
    role: "Team Leader",
    roleKey: "core",
    bio: {
      en: "Add team member information here.",
      hi: "यहाँ टीम सदस्य की जानकारी जोड़ें।",
    },
    joined: "2025",
    skills: ["Coordination"],
    photo: "assets/team0001-logo.png",
  },
  {
    name: "Add Member Name",
    role: "Core Member",
    roleKey: "core",
    bio: {
      en: "Add team member information here.",
      hi: "यहाँ टीम सदस्य की जानकारी जोड़ें।",
    },
    joined: "2025",
    skills: ["Design"],
    photo: "assets/team0001-logo.png",
  },
  {
    name: "Add Member Name",
    role: "Coordinator",
    roleKey: "coordinators",
    bio: {
      en: "Add team member information here.",
      hi: "यहाँ टीम सदस्य की जानकारी जोड़ें।",
    },
    joined: "2026",
    skills: ["Events"],
    photo: "assets/team0001-logo.png",
  },
  {
    name: "Add Member Name",
    role: "Developer",
    roleKey: "members",
    bio: {
      en: "Add team member information here.",
      hi: "यहाँ टीम सदस्य की जानकारी जोड़ें।",
    },
    joined: "2026",
    skills: ["Web"],
    photo: "assets/team0001-logo.png",
  },
  {
    name: "Add Member Name",
    role: "Designer",
    roleKey: "members",
    bio: {
      en: "Add team member information here.",
      hi: "यहाँ टीम सदस्य की जानकारी जोड़ें।",
    },
    joined: "2026",
    skills: ["UI/UX"],
    photo: "assets/team0001-logo.png",
  },
  {
    name: "Add Member Name",
    role: "Content Creator",
    roleKey: "members",
    bio: {
      en: "Add team member information here.",
      hi: "यहाँ टीम सदस्य की जानकारी जोड़ें।",
    },
    joined: "2026",
    skills: ["Content"],
    photo: "assets/team0001-logo.png",
  },
  {
    name: "Add Member Name",
    role: "Volunteer",
    roleKey: "members",
    bio: {
      en: "Add team member information here.",
      hi: "यहाँ टीम सदस्य की जानकारी जोड़ें।",
    },
    joined: "2026",
    skills: ["Support"],
    photo: "assets/team0001-logo.png",
  },
];

const teamRoleFilters = [
  { key: "all", label: { en: "All", hi: "सभी" } },
  { key: "founders", label: { en: "Founders", hi: "संस्थापक" } },
  { key: "core", label: { en: "Core Team", hi: "मुख्य टीम" } },
  { key: "coordinators", label: { en: "Coordinators", hi: "समन्वयक" } },
  { key: "members", label: { en: "Members", hi: "सदस्य" } },
];

const activitiesData = [
  {
    category: "community",
    date: "2026",
    title: { en: "Community Meetup", hi: "सामुदायिक मीटअप" },
    desc: {
      en: "Add activity details here.",
      hi: "यहाँ गतिविधि का विवरण जोड़ें।",
    },
    image: "assets/team0001-logo.png",
  },
  {
    category: "education",
    date: "2026",
    title: { en: "Learning Workshop", hi: "लर्निंग वर्कशॉप" },
    desc: {
      en: "Add activity details here.",
      hi: "यहाँ गतिविधि का विवरण जोड़ें।",
    },
    image: "assets/team0001-logo.png",
  },
  {
    category: "technology",
    date: "2026",
    title: { en: "Tech Session", hi: "टेक सत्र" },
    desc: {
      en: "Add activity details here.",
      hi: "यहाँ गतिविधि का विवरण जोड़ें।",
    },
    image: "assets/team0001-logo.png",
  },
  {
    category: "awareness",
    date: "2026",
    title: { en: "Awareness Drive", hi: "जागरूकता अभियान" },
    desc: {
      en: "Add activity details here.",
      hi: "यहाँ गतिविधि का विवरण जोड़ें।",
    },
    image: "assets/team0001-logo.png",
  },
  {
    category: "social",
    date: "2026",
    title: { en: "Social Gathering", hi: "सामाजिक सभा" },
    desc: {
      en: "Add activity details here.",
      hi: "यहाँ गतिविधि का विवरण जोड़ें।",
    },
    image: "assets/team0001-logo.png",
  },
  {
    category: "creative",
    date: "2026",
    title: { en: "Creative Jam", hi: "क्रिएटिव जैम" },
    desc: {
      en: "Add activity details here.",
      hi: "यहाँ गतिविधि का विवरण जोड़ें।",
    },
    image: "assets/team0001-logo.png",
  },
];

const activityFilters = [
  { key: "all", label: { en: "All", hi: "सभी" } },
  { key: "community", label: { en: "Community", hi: "समुदाय" } },
  { key: "education", label: { en: "Education", hi: "शिक्षा" } },
  { key: "technology", label: { en: "Technology", hi: "तकनीक" } },
  { key: "awareness", label: { en: "Awareness", hi: "जागरूकता" } },
  { key: "social", label: { en: "Social", hi: "सामाजिक" } },
  { key: "creative", label: { en: "Creative", hi: "रचनात्मक" } },
];

const upcomingEventsData = [
  {
    date: "2026-11-15",
    title: {
      en: "Add Event Title Here",
      hi: "यहाँ कार्यक्रम का शीर्षक जोड़ें",
    },
    location: {
      en: "Add official location here",
      hi: "यहाँ आधिकारिक स्थान जोड़ें",
    },
    desc: {
      en: "Add event details here.",
      hi: "यहाँ कार्यक्रम का विवरण जोड़ें।",
    },
  },
];

const pastEventsData = [
  {
    date: "2026",
    title: { en: "Add Past Event Here", hi: "यहाँ पिछला कार्यक्रम जोड़ें" },
    image: "assets/team0001-logo.png",
  },
  {
    date: "2025",
    title: { en: "Add Past Event Here", hi: "यहाँ पिछला कार्यक्रम जोड़ें" },
    image: "assets/team0001-logo.png",
  },
  {
    date: "2025",
    title: { en: "Add Past Event Here", hi: "यहाँ पिछला कार्यक्रम जोड़ें" },
    image: "assets/team0001-logo.png",
  },
  {
    date: "2025",
    title: { en: "Add Past Event Here", hi: "यहाँ पिछला कार्यक्रम जोड़ें" },
    image: "assets/team0001-logo.png",
  },
];

const achievementsData = [
  {
    icon: "trophy",
    title: { en: "Add Achievement Here", hi: "यहाँ उपलब्धि जोड़ें" },
    desc: {
      en: "Add achievement description here.",
      hi: "यहाँ उपलब्धि का विवरण जोड़ें।",
    },
    year: "2026",
  },
  {
    icon: "award",
    title: { en: "Add Achievement Here", hi: "यहाँ उपलब्धि जोड़ें" },
    desc: {
      en: "Add achievement description here.",
      hi: "यहाँ उपलब्धि का विवरण जोड़ें।",
    },
    year: "2026",
  },
  {
    icon: "star",
    title: { en: "Add Achievement Here", hi: "यहाँ उपलब्धि जोड़ें" },
    desc: {
      en: "Add achievement description here.",
      hi: "यहाँ उपलब्धि का विवरण जोड़ें।",
    },
    year: "2025",
  },
  {
    icon: "medal",
    title: { en: "Add Achievement Here", hi: "यहाँ उपलब्धि जोड़ें" },
    desc: {
      en: "Add achievement description here.",
      hi: "यहाँ उपलब्धि का विवरण जोड़ें।",
    },
    year: "2025",
  },
];

const galleryData = [
  {
    image: "assets/team0001-logo.png",
    title: { en: "Team Moment", hi: "टीम पल" },
    category: "team",
  },
  {
    image: "assets/team0001-logo.png",
    title: { en: "Community Event", hi: "सामुदायिक कार्यक्रम" },
    category: "events",
  },
  {
    image: "assets/team0001-logo.png",
    title: { en: "Group Activity", hi: "समूह गतिविधि" },
    category: "activities",
  },
  {
    image: "assets/team0001-logo.png",
    title: { en: "Team Memory", hi: "टीम की यादें" },
    category: "memories",
  },
  {
    image: "assets/team0001-logo.png",
    title: { en: "Team Moment", hi: "टीम पल" },
    category: "team",
  },
  {
    image: "assets/team0001-logo.png",
    title: { en: "Community Event", hi: "सामुदायिक कार्यक्रम" },
    category: "events",
  },
  {
    image: "assets/team0001-logo.png",
    title: { en: "Group Activity", hi: "समूह गतिविधि" },
    category: "activities",
  },
  {
    image: "assets/team0001-logo.png",
    title: { en: "Team Memory", hi: "टीम की यादें" },
    category: "memories",
  },
];

const galleryFilters = [
  { key: "all", label: { en: "All", hi: "सभी" } },
  { key: "events", label: { en: "Events", hi: "कार्यक्रम" } },
  { key: "team", label: { en: "Team", hi: "टीम" } },
  { key: "activities", label: { en: "Activities", hi: "गतिविधियाँ" } },
  { key: "memories", label: { en: "Memories", hi: "यादें" } },
];

const announcementsData = [
  {
    featured: true,
    date: "2026",
    category: { en: "Update", hi: "अपडेट" },
    title: {
      en: "Add featured announcement here",
      hi: "यहाँ मुख्य घोषणा जोड़ें",
    },
    desc: {
      en: "Add announcement details here.",
      hi: "यहाँ घोषणा का विवरण जोड़ें।",
    },
  },
  {
    date: "2026",
    category: { en: "News", hi: "समाचार" },
    title: { en: "Add announcement here", hi: "यहाँ घोषणा जोड़ें" },
    desc: {
      en: "Add announcement details here.",
      hi: "यहाँ घोषणा का विवरण जोड़ें।",
    },
  },
  {
    date: "2026",
    category: { en: "News", hi: "समाचार" },
    title: { en: "Add announcement here", hi: "यहाँ घोषणा जोड़ें" },
    desc: {
      en: "Add announcement details here.",
      hi: "यहाँ घोषणा का विवरण जोड़ें।",
    },
  },
];

/* ---------------- UTIL ---------------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = () =>
  window.matchMedia("(hover: none), (pointer: coarse)").matches;
const hasGSAP = () => typeof window.gsap !== "undefined";
// Safely embed a JSON object inside a double-quoted HTML attribute.
// Escaping the double quotes (rather than relying on single-quote delimiters)
// means apostrophes in real copy — "member's", "team's" — can never break the markup.
function escAttr(obj) {
  return JSON.stringify(obj).replace(/"/g, "&quot;");
}

/* ==================================================
   INIT: PRELOADER
================================================== */
function initPreloader() {
  const preloader = $("#preloader");
  const codeEl = $("#preloaderCode");
  const fillEl = $("#preloaderFill");
  if (!preloader) return;

  const sequence = ["000", "001", "010", "100", "TEAM 0001"];
  let i = 0;
  const seqTimer = setInterval(() => {
    i++;
    if (i < sequence.length && codeEl) codeEl.textContent = sequence[i];
  }, 260);

  let progress = 0;
  const fillTimer = setInterval(() => {
    progress = Math.min(100, progress + Math.random() * 22 + 8);
    if (fillEl) fillEl.style.width = progress + "%";
    if (progress >= 100) {
      clearInterval(fillTimer);
      clearInterval(seqTimer);
      setTimeout(() => {
        preloader.classList.add("is-done");
        document.body.classList.remove("no-scroll");
        preloader.addEventListener("transitionend", () => preloader.remove(), {
          once: true,
        });
      }, 180);
    }
  }, 180);

  document.body.classList.add("no-scroll");
}

/* ==================================================
   INIT: CUSTOM CURSOR
================================================== */
function initCursor() {
  if (isTouch()) return;
  const cursor = $("#cursor");
  const dot = $(".cursor__dot");
  const ring = $(".cursor__ring");
  const label = $(".cursor__label");
  if (!cursor) return;

  document.body.classList.add("has-custom-cursor");

  let mouseX = window.innerWidth / 2,
    mouseY = window.innerHeight / 2;
  let dotX = mouseX,
    dotY = mouseY,
    ringX = mouseX,
    ringY = mouseY;

  const quickDot = hasGSAP()
    ? gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" })
    : null;
  const quickDotY = hasGSAP()
    ? gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" })
    : null;
  const quickRing = hasGSAP()
    ? gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3.out" })
    : null;
  const quickRingY = hasGSAP()
    ? gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3.out" })
    : null;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (quickDot) {
      quickDot(mouseX);
      quickDotY(mouseY);
      quickRing(mouseX);
      quickRingY(mouseY);
    }
  });

  if (!hasGSAP()) {
    const raf = () => {
      dotX += (mouseX - dotX) * 0.35;
      dotY += (mouseY - dotY) * 0.35;
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%,-50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%,-50%)`;
      requestAnimationFrame(raf);
    };
    raf();
  }

  const setState = (text) => {
    cursor.classList.toggle("is-active", !!text);
    if (label) label.textContent = text || "";
  };

  $$("a, button, [data-cursor]").forEach((el) => {
    const custom = el.getAttribute("data-cursor");
    el.addEventListener("mouseenter", () =>
      setState(
        custom ||
          (el.tagName === "IMG" || el.querySelector("img") ? "VIEW" : ""),
      ),
    );
    el.addEventListener("mouseleave", () => setState(""));
  });

  $$("img, .gallery-item, .member-card").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      if (!el.closest("[data-cursor]")) setState("VIEW");
    });
    el.addEventListener("mouseleave", () => setState(""));
  });

  // section-based accent color
  const accentMap = {
    home: "var(--color-orange)",
    team: "var(--accent-violet)",
    gallery: "var(--accent-cyan)",
    events: "var(--color-gold)",
    contact: "var(--accent-emerald)",
  };
  const sections = $$("section[id]");
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const accent = accentMap[entry.target.id];
          if (accent)
            document.documentElement.style.setProperty(
              "--accent-current",
              accent,
            );
        }
      });
    },
    { threshold: 0.5 },
  );
  sections.forEach((s) => obs.observe(s));
}

/* ==================================================
   INIT: MAGNETIC BUTTONS
================================================== */
function initMagnetic() {
  if (isTouch() || !hasGSAP()) return;
  $$("[data-magnetic]").forEach((el) => {
    const strength = 10;
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, {
        x: (x / rect.width) * strength * 2,
        y: (y / rect.height) * strength,
        duration: 0.3,
        ease: "power3.out",
      });
    });
    el.addEventListener("mouseleave", () =>
      gsap.to(el, { x: 0, y: 0, duration: 0.4, ease: "elastic.out(1, 0.4)" }),
    );
  });
}

/* ==================================================
   INIT: SMOOTH SCROLL (LENIS + GSAP)
================================================== */
let lenisInstance = null;
function initLenis() {
  if (prefersReducedMotion() || typeof window.Lenis === "undefined") return;
  lenisInstance = new Lenis({
    duration: 1.1,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
  });
  function raf(time) {
    lenisInstance.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  if (hasGSAP() && window.ScrollTrigger) {
    lenisInstance.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenisInstance.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
}

/* ==================================================
   INIT: NAVIGATION
================================================== */
function initNavigation() {
  const navbar = $("#navbar");
  const navIndicator = $("#navIndicator");
  const navlinks = $$(".navlink");
  const menuToggle = $("#menuToggle");
  const mobileMenu = $("#mobileMenu");
  let lastY = window.scrollY;

  function updateIndicator(activeLink) {
    if (!activeLink || !navIndicator) return;
    const parentRect = activeLink.parentElement.getBoundingClientRect();
    const rect = activeLink.getBoundingClientRect();
    navIndicator.style.width = rect.width + "px";
    navIndicator.style.left = rect.left - parentRect.left + "px";
    navIndicator.style.opacity = "1";
  }

  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      navbar.classList.toggle("is-scrolled", y > 40);
      if (y > 200 && y > lastY) navbar.classList.add("is-hidden");
      else navbar.classList.remove("is-hidden");
      lastY = y;
    },
    { passive: true },
  );

  const sections = $$("main section[id]");
  const sectionObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navlinks.forEach((l) => l.classList.remove("is-active"));
          const link = navlinks.find(
            (l) => l.dataset.section === entry.target.id,
          );
          if (link) {
            link.classList.add("is-active");
            updateIndicator(link);
          }
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  sections.forEach((s) => sectionObs.observe(s));

  window.addEventListener("resize", () => {
    const active = navlinks.find((l) => l.classList.contains("is-active"));
    if (active) updateIndicator(active);
  });

  // anchor smooth-scroll with navbar offset
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = $(id);
      if (!target) return;
      e.preventDefault();
      closeMobileMenu();
      if (lenisInstance) {
        lenisInstance.scrollTo(target, { offset: -90, duration: 1.2 });
      } else {
        const y = target.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({
          top: y,
          behavior: prefersReducedMotion() ? "auto" : "smooth",
        });
      }
    });
  });

  function openMobileMenu() {
    mobileMenu.classList.add("is-open");
    mobileMenu.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
  }
  function closeMobileMenu() {
    mobileMenu.classList.remove("is-open");
    mobileMenu.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  }
  menuToggle?.addEventListener("click", () => {
    mobileMenu.classList.contains("is-open")
      ? closeMobileMenu()
      : openMobileMenu();
  });
  $$(".mobile-menu__nav a").forEach((a) =>
    a.addEventListener("click", closeMobileMenu),
  );
  window.__closeMobileMenu = closeMobileMenu;
}

/* ==================================================
   INIT: SCROLL PROGRESS
================================================== */
function initScrollProgress() {
  const bar = $("#scrollProgress span");
  if (!bar) return;
  const update = () => {
    const h = document.documentElement;
    const scrollTop = h.scrollTop || document.body.scrollTop;
    const scrollHeight =
      (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
    const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    bar.style.width = pct + "%";
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ==================================================
   INIT: HERO INTERACTIONS
================================================== */
function initHero() {
  const heroVisual = $("#heroVisual");
  const heroLogo = $("#heroLogo");
  if (!heroVisual || !heroLogo || isTouch() || !hasGSAP()) return;

  const moveX = gsap.quickTo(heroLogo, "x", {
    duration: 0.6,
    ease: "power3.out",
  });
  const moveY = gsap.quickTo(heroLogo, "y", {
    duration: 0.6,
    ease: "power3.out",
  });
  const rotate = gsap.quickTo(heroLogo, "rotate", {
    duration: 0.6,
    ease: "power3.out",
  });

  heroVisual.addEventListener("mousemove", (e) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    moveX(x * 22);
    moveY(y * 22);
    rotate(x * 3);
  });
  heroVisual.addEventListener("mouseleave", () => {
    moveX(0);
    moveY(0);
    rotate(0);
  });

  if (window.ScrollTrigger) {
    gsap.to(heroLogo, {
      y: 60,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      },
    });
  }
}

/* ==================================================
   INIT: REVEAL ANIMATIONS (IntersectionObserver)
================================================== */
function markReveal(el) {
  el.setAttribute("data-reveal", "");
}

function initRevealAnimations() {
  const targets = $$(
    ".section-head, .about__grid, .value-card, .why__list-wrap, .journey .timeline-item, .contact__grid, .join__inner, .stat-card, .footer__top",
  );
  targets.forEach(markReveal);
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  $$("[data-reveal]").forEach((el) => obs.observe(el));
}

/* ==================================================
   INIT: IDENTITY STRIP (marquee)
================================================== */
function initMarquee() {
  const track = $("#identityTrack");
  if (!track || !hasGSAP()) return;
  const clone = track.innerHTML;
  track.innerHTML += clone;
  const width = track.scrollWidth / 2;
  gsap.to(track, { x: -width, duration: 26, ease: "none", repeat: -1 });
}

/* ==================================================
   INIT: STATS COUNTERS
================================================== */
function renderStats() {
  const grid = $("#statsGrid");
  if (!grid) return;
  grid.innerHTML = statsData
    .map(
      (s, idx) => `
    <div class="stat-card" data-reveal>
      <span class="stat-card__num"><span class="accent" data-count="${s.value}">0</span>${s.suffix}</span>
      <span class="stat-card__label" data-lang-field="${escAttr(s.label)}">${s.label[currentLang]}</span>
    </div>
  `,
    )
    .join("");
}

function initCounters() {
  const cards = $$(".stat-card");
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const numEl = entry.target.querySelector("[data-count]");
          const target = parseInt(numEl.dataset.count, 10);
          const obj = { val: 0 };
          if (hasGSAP()) {
            gsap.to(obj, {
              val: target,
              duration: 1.4,
              ease: "power2.out",
              onUpdate: () => {
                numEl.textContent = Math.round(obj.val);
              },
            });
          } else {
            numEl.textContent = target;
          }
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 },
  );
  cards.forEach((c) => obs.observe(c));
}

/* ==================================================
   INIT: CORE VALUES
================================================== */
function renderValues() {
  const grid = $("#valuesGrid");
  if (!grid) return;
  grid.innerHTML = valuesData
    .map(
      (v, i) => `
    <div class="value-card" data-reveal style="--card-accent:${v.accent}" data-tilt>
      <span class="value-card__num">0${i + 1}</span>
      <div class="value-card__icon"><i data-lucide="${v.icon}"></i></div>
      <h3 class="value-card__title" data-lang-field="${escAttr(v.title)}">${v.title[currentLang]}</h3>
      <p class="value-card__desc" data-lang-field="${escAttr(v.desc)}">${v.desc[currentLang]}</p>
    </div>
  `,
    )
    .join("");
  renderIcons();
}

function initValueTilt() {
  if (isTouch()) return;
  $$(".value-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mx", px + "%");
      card.style.setProperty("--my", py + "%");
      if (hasGSAP()) {
        const rx = ((py - 50) / 50) * -4;
        const ry = ((px - 50) / 50) * 4;
        gsap.to(card, {
          rotateX: rx,
          rotateY: ry,
          translateY: -4,
          duration: 0.4,
          ease: "power2.out",
          transformPerspective: 700,
        });
      }
    });
    card.addEventListener("mouseleave", () => {
      if (hasGSAP())
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          translateY: 0,
          duration: 0.5,
          ease: "power3.out",
        });
    });
  });
}

/* ==================================================
   INIT: WHY TEAM 0001
================================================== */
function renderWhy() {
  const list = $("#whyList");
  if (!list) return;
  list.innerHTML = whyData
    .map(
      (w, i) => `
    <li class="why-item ${i === 0 ? "is-active" : ""}" data-index="${i}">
      <button class="why-item__trigger" aria-expanded="${i === 0}">
        <span class="num">0${i + 1}</span>
        <span data-lang-field="${escAttr(w.title)}">${w.title[currentLang]}</span>
      </button>
      <div class="why-item__panel">
        <p data-lang-field="${escAttr(w.desc)}">${w.desc[currentLang]}</p>
      </div>
    </li>
  `,
    )
    .join("");
  updateWhyVisual(0);
}

function updateWhyVisual(index) {
  const item = whyData[index];
  const glow = $("#whyGlow");
  const num = $("#whyNumber");
  const text = $("#whyText");
  if (!item) return;
  if (glow) glow.style.background = item.accent;
  if (num) num.textContent = "0" + (index + 1);
  if (text) {
    text.textContent = item.text[currentLang];
    text.setAttribute("data-lang-field", JSON.stringify(item.text));
  }
}

function initWhyInteraction() {
  const list = $("#whyList");
  if (!list) return;
  list.addEventListener("click", (e) => {
    const trigger = e.target.closest(".why-item__trigger");
    if (!trigger) return;
    const li = trigger.closest(".why-item");
    const index = parseInt(li.dataset.index, 10);
    $$(".why-item", list).forEach((item) => {
      const active = item === li;
      item.classList.toggle("is-active", active);
      item
        .querySelector(".why-item__trigger")
        .setAttribute("aria-expanded", String(active));
    });
    updateWhyVisual(index);
  });
}

/* ==================================================
   INIT: JOURNEY / TIMELINE
================================================== */
function renderTimeline() {
  const list = $("#timelineList");
  if (!list) return;
  list.innerHTML = journeyData
    .map(
      (j) => `
    <li class="timeline-item" data-reveal>
      <span class="timeline-item__dot"></span>
      <p class="timeline-item__year" data-lang-field="${escAttr(j.year)}">${j.year[currentLang]}</p>
      <h3 class="timeline-item__title" data-lang-field="${escAttr(j.title)}">${j.title[currentLang]}</h3>
      <p class="timeline-item__desc" data-lang-field="${escAttr(j.desc)}">${j.desc[currentLang]}</p>
    </li>
  `,
    )
    .join("");
}

function initTimelineProgress() {
  const wrap = $(".timeline-wrap");
  const fill = $("#timelineFill");
  const items = $$(".timeline-item");
  if (!wrap || !fill) return;

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.5 },
  );
  items.forEach((i) => obs.observe(i));

  const update = () => {
    const rect = wrap.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = rect.height;
    const visible = Math.min(Math.max(vh * 0.7 - rect.top, 0), total);
    fill.style.height = Math.min(100, (visible / total) * 100) + "%";
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ==================================================
   INIT: TEAM
================================================== */
let teamFilterState = "all";
function renderTeamFilters() {
  const bar = $("#teamFilters");
  if (!bar) return;
  bar.innerHTML = teamRoleFilters
    .map(
      (f) => `
    <button class="filter-btn ${f.key === teamFilterState ? "is-active" : ""}" data-filter="${f.key}" data-lang-field="${escAttr(f.label)}">${f.label[currentLang]}</button>
  `,
    )
    .join("");
}

function renderTeam() {
  const grid = $("#teamGrid");
  if (!grid) return;
  const filtered =
    teamFilterState === "all"
      ? teamData
      : teamData.filter((m) => m.roleKey === teamFilterState);
  if (filtered.length === 0) {
    grid.innerHTML = `<p class="empty-state" style="grid-column:1/-1;">${t("activities.empty")}</p>`;
    return;
  }
  grid.innerHTML = filtered
    .map(
      (m, i) => `
    <article class="member-card" data-index="${teamData.indexOf(m)}" tabindex="0" role="button" aria-haspopup="dialog">
      <div class="member-card__media">
        <img src="${m.photo}" alt="Portrait placeholder for ${m.name}, ${m.role} at Team 0001" loading="lazy" width="360" height="430">
      </div>
      <div class="member-card__overlay"></div>
      <div class="member-card__socials">
        <a href="#" aria-label="Instagram" tabindex="-1"><i data-lucide="instagram"></i></a>
        <a href="#" aria-label="LinkedIn" tabindex="-1"><i data-lucide="linkedin"></i></a>
      </div>
      <div class="member-card__body">
        <p class="member-card__name">${m.name}</p>
        <p class="member-card__role">${m.role}</p>
      </div>
    </article>
  `,
    )
    .join("");
  renderIcons();
}

function initTeam() {
  renderTeamFilters();
  renderTeam();
  $("#teamFilters")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    teamFilterState = btn.dataset.filter;
    renderTeamFilters();
    renderTeam();
  });
  $("#teamGrid")?.addEventListener("click", (e) => {
    const card = e.target.closest(".member-card");
    if (!card) return;
    openMemberModal(parseInt(card.dataset.index, 10));
  });
  $("#teamGrid")?.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".member-card");
    if (!card) return;
    e.preventDefault();
    openMemberModal(parseInt(card.dataset.index, 10));
  });
}

let lastFocusedEl = null;
function openMemberModal(index) {
  const member = teamData[index];
  if (!member) return;
  lastFocusedEl = document.activeElement;
  $("#modalPhoto").src = member.photo;
  $("#modalPhoto").alt = `Portrait placeholder for ${member.name}`;
  $("#modalRole").textContent = member.role;
  $("#modalName").textContent = member.name;
  $("#modalBio").textContent = member.bio[currentLang];
  $("#modalBio").setAttribute("data-lang-field", JSON.stringify(member.bio));
  $("#modalJoined").textContent = member.joined;
  $("#modalSkills").innerHTML = member.skills
    .map((s) => `<span>${s}</span>`)
    .join("");
  $("#modalSocial").innerHTML = `
    <a href="#" aria-label="Instagram"><i data-lucide="instagram"></i></a>
    <a href="#" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a>`;
  renderIcons();
  const overlay = $("#memberModal");
  overlay.hidden = false;
  document.body.classList.add("no-scroll");
  $("#modalClose").focus();
}
function closeMemberModal() {
  const overlay = $("#memberModal");
  overlay.hidden = true;
  document.body.classList.remove("no-scroll");
  if (lastFocusedEl) lastFocusedEl.focus();
}
function initMemberModal() {
  $("#modalClose")?.addEventListener("click", closeMemberModal);
  $("#memberModal")?.addEventListener("click", (e) => {
    if (e.target.id === "memberModal") closeMemberModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !$("#memberModal").hidden) closeMemberModal();
  });
}

/* ==================================================
   INIT: ACTIVITIES
================================================== */
let activityFilterState = "all";
function renderActivityFilters() {
  const bar = $("#activityFilters");
  if (!bar) return;
  bar.innerHTML = activityFilters
    .map(
      (f) => `
    <button class="filter-btn ${f.key === activityFilterState ? "is-active" : ""}" data-filter="${f.key}" data-lang-field="${escAttr(f.label)}">${f.label[currentLang]}</button>
  `,
    )
    .join("");
}
function renderActivities() {
  const grid = $("#activitiesGrid");
  const empty = $("#activitiesEmpty");
  if (!grid) return;
  const filtered =
    activityFilterState === "all"
      ? activitiesData
      : activitiesData.filter((a) => a.category === activityFilterState);
  empty.hidden = filtered.length !== 0;
  grid.innerHTML = filtered
    .map(
      (a) => `
    <article class="activity-card">
      <div class="activity-card__media">
        <img src="${a.image}" alt="Team 0001 members during a ${a.category} activity" loading="lazy" width="480" height="300">
        <span class="activity-card__tag" data-lang-field="${escAttr({ en: a.category, hi: a.category })}">${a.category}</span>
      </div>
      <div class="activity-card__body">
        <p class="activity-card__date">${a.date}</p>
        <h3 class="activity-card__title" data-lang-field="${escAttr(a.title)}">${a.title[currentLang]}</h3>
        <p class="activity-card__desc" data-lang-field="${escAttr(a.desc)}">${a.desc[currentLang]}</p>
        <a href="#contact" class="text-link" data-cursor="VIEW"><span>${t("events.details")}</span></a>
      </div>
    </article>
  `,
    )
    .join("");
}
function initActivities() {
  renderActivityFilters();
  renderActivities();
  $("#activityFilters")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    activityFilterState = btn.dataset.filter;
    renderActivityFilters();
    renderActivities();
  });
}

/* ==================================================
   INIT: EVENTS
================================================== */
function daysUntil(dateStr) {
  const now = new Date();
  const target = new Date(dateStr);
  const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
  return diff;
}
function renderEvents() {
  const upcomingGrid = $("#upcomingEvents");
  const upcomingEmpty = $("#upcomingEmpty");
  const pastGrid = $("#pastEvents");
  const pastEmpty = $("#pastEmpty");

  if (upcomingGrid) {
    upcomingEmpty.hidden = upcomingEventsData.length !== 0;
    upcomingGrid.innerHTML = upcomingEventsData
      .map((ev) => {
        const d = new Date(ev.date);
        const day = isNaN(d) ? "--" : d.getDate();
        const mon = isNaN(d)
          ? ""
          : d.toLocaleString(currentLang === "hi" ? "hi-IN" : "en-US", {
              month: "short",
            });
        const left = daysUntil(ev.date);
        return `
      <article class="event-card">
        <div class="event-card__date"><span class="day">${day}</span><span class="mon">${mon}</span></div>
        <div>
          <h3 class="event-card__title" data-lang-field="${escAttr(ev.title)}">${ev.title[currentLang]}</h3>
          <p class="event-card__meta" data-lang-field="${escAttr(ev.location)}">${ev.location[currentLang]}</p>
          <p class="event-card__desc" data-lang-field="${escAttr(ev.desc)}">${ev.desc[currentLang]}</p>
          ${left > 0 ? `<p class="event-card__countdown">${left} ${t("events.daysLeft")}</p>` : ""}
        </div>
      </article>`;
      })
      .join("");
  }

  if (pastGrid) {
    pastEmpty.hidden = pastEventsData.length !== 0;
    pastGrid.innerHTML = pastEventsData
      .map(
        (ev) => `
      <article class="event-past-card">
        <div class="event-past-card__media"><img src="${ev.image}" alt="Team 0001 past event: ${ev.title[currentLang]}" loading="lazy" width="300" height="225"></div>
        <div class="event-past-card__body">
          <p class="event-past-card__date">${ev.date}</p>
          <h3 class="event-past-card__title" data-lang-field="${escAttr(ev.title)}">${ev.title[currentLang]}</h3>
          <a href="#gallery" class="text-link" data-cursor="VIEW"><span>${t("events.details")}</span></a>
        </div>
      </article>
    `,
      )
      .join("");
  }
}

/* ==================================================
   INIT: ACHIEVEMENTS
================================================== */
function renderAchievements() {
  const grid = $("#achievementsGrid");
  if (!grid) return;
  grid.innerHTML = achievementsData
    .map(
      (a) => `
    <div class="achievement-card">
      <div class="achievement-card__icon"><i data-lucide="${a.icon}"></i></div>
      <h3 class="achievement-card__title" data-lang-field="${escAttr(a.title)}">${a.title[currentLang]}</h3>
      <p class="achievement-card__desc" data-lang-field="${escAttr(a.desc)}">${a.desc[currentLang]}</p>
      <p class="achievement-card__year">${a.year}</p>
    </div>
  `,
    )
    .join("");
  renderIcons();
}

/* ==================================================
   INIT: GALLERY + LIGHTBOX
================================================== */
let galleryFilterState = "all";
let currentGalleryList = [];
let currentLightboxIndex = 0;

function renderGalleryFilters() {
  const bar = $("#galleryFilters");
  if (!bar) return;
  bar.innerHTML = galleryFilters
    .map(
      (f) => `
    <button class="filter-btn ${f.key === galleryFilterState ? "is-active" : ""}" data-filter="${f.key}" data-lang-field="${escAttr(f.label)}">${f.label[currentLang]}</button>
  `,
    )
    .join("");
}
function renderGallery() {
  const grid = $("#galleryGrid");
  const empty = $("#galleryEmpty");
  if (!grid) return;
  currentGalleryList =
    galleryFilterState === "all"
      ? galleryData
      : galleryData.filter((g) => g.category === galleryFilterState);
  empty.hidden = currentGalleryList.length !== 0;
  grid.innerHTML = currentGalleryList
    .map(
      (g, i) => `
    <figure class="gallery-item" data-index="${i}" tabindex="0" role="button" aria-label="Open image: ${g.title[currentLang]}">
      <img src="${g.image}" alt="${g.title[currentLang]} — Team 0001 gallery" loading="lazy" width="400" height="300">
      <div class="gallery-item__overlay"><span data-lang-field="${escAttr(g.title)}">${g.title[currentLang]}</span></div>
    </figure>
  `,
    )
    .join("");
}
function initGallery() {
  renderGalleryFilters();
  renderGallery();
  $("#galleryFilters")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    galleryFilterState = btn.dataset.filter;
    renderGalleryFilters();
    renderGallery();
  });
  $("#galleryGrid")?.addEventListener("click", (e) => {
    const item = e.target.closest(".gallery-item");
    if (!item) return;
    openLightbox(parseInt(item.dataset.index, 10));
  });
  $("#galleryGrid")?.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const item = e.target.closest(".gallery-item");
    if (!item) return;
    e.preventDefault();
    openLightbox(parseInt(item.dataset.index, 10));
  });
}

let lastLightboxFocus = null;
function openLightbox(index) {
  currentLightboxIndex = index;
  lastLightboxFocus = document.activeElement;
  renderLightboxImage();
  $("#lightbox").hidden = false;
  document.body.classList.add("no-scroll");
  $("#lightboxClose").focus();
}
function renderLightboxImage() {
  const item = currentGalleryList[currentLightboxIndex];
  if (!item) return;
  $("#lightboxImg").src = item.image;
  $("#lightboxImg").alt = `${item.title[currentLang]} — Team 0001 gallery`;
  $("#lightboxCaption").textContent = item.title[currentLang];
}
function closeLightbox() {
  $("#lightbox").hidden = true;
  document.body.classList.remove("no-scroll");
  if (lastLightboxFocus) lastLightboxFocus.focus();
}
function navLightbox(dir) {
  if (currentGalleryList.length === 0) return;
  currentLightboxIndex =
    (currentLightboxIndex + dir + currentGalleryList.length) %
    currentGalleryList.length;
  renderLightboxImage();
}
function initLightbox() {
  $("#lightboxClose")?.addEventListener("click", closeLightbox);
  $("#lightboxPrev")?.addEventListener("click", () => navLightbox(-1));
  $("#lightboxNext")?.addEventListener("click", () => navLightbox(1));
  $("#lightbox")?.addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if ($("#lightbox").hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navLightbox(-1);
    if (e.key === "ArrowRight") navLightbox(1);
  });

  // basic touch swipe
  let startX = 0;
  const figure = $(".lightbox__figure");
  figure?.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
    },
    { passive: true },
  );
  figure?.addEventListener(
    "touchend",
    (e) => {
      const diff = e.changedTouches[0].clientX - startX;
      if (Math.abs(diff) > 40) navLightbox(diff > 0 ? -1 : 1);
    },
    { passive: true },
  );
}

/* ==================================================
   INIT: ANNOUNCEMENTS
================================================== */
function renderAnnouncements() {
  const grid = $("#announcementsGrid");
  const empty = $("#announcementsEmpty");
  if (!grid) return;
  empty.hidden = announcementsData.length !== 0;
  grid.innerHTML = announcementsData
    .map(
      (a) => `
    <article class="announcement-card ${a.featured ? "announcement-card--featured" : ""}">
      <div class="announcement-card__top">
        <span class="announcement-card__cat" data-lang-field="${escAttr(a.category)}">${a.category[currentLang]}</span>
        <span>${a.date}</span>
      </div>
      <h3 class="announcement-card__title" data-lang-field="${escAttr(a.title)}">${a.title[currentLang]}</h3>
      <p class="announcement-card__desc" data-lang-field="${escAttr(a.desc)}">${a.desc[currentLang]}</p>
      <a href="#contact" class="text-link" data-cursor="VIEW"><span data-i18n="announcements.readMore">${t("announcements.readMore")}</span></a>
    </article>
  `,
    )
    .join("");
}

/* ==================================================
   INIT: CONTACT FORM
================================================== */
function initForms() {
  const form = $("#contactForm");
  if (!form) return;
  const submitBtn = $("#cfSubmit");
  const status = $("#formStatus");

  function setError(fieldId, msg) {
    const field = $(`#${fieldId}`).closest(".field");
    const errEl = $(`#err-${fieldId.replace("cf-", "")}`);
    if (msg) {
      field.classList.add("has-error");
      errEl.textContent = msg;
    } else {
      field.classList.remove("has-error");
      errEl.textContent = "";
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    const name = $("#cf-name").value.trim();
    const email = $("#cf-email").value.trim();
    const subject = $("#cf-subject").value.trim();
    const message = $("#cf-message").value.trim();

    if (!name) {
      setError("cf-name", t("contact.form.errName"));
      valid = false;
    } else setError("cf-name", "");
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      setError("cf-email", t("contact.form.errEmail"));
      valid = false;
    } else setError("cf-email", "");
    if (!subject) {
      setError("cf-subject", t("contact.form.errSubject"));
      valid = false;
    } else setError("cf-subject", "");
    if (!message) {
      setError("cf-message", t("contact.form.errMessage"));
      valid = false;
    } else setError("cf-message", "");

    if (!valid) {
      status.textContent = "";
      return;
    }

    submitBtn.disabled = true;
    submitBtn.querySelector("span").textContent = t("contact.form.sending");
    status.className = "form-status";
    status.textContent = "";

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.querySelector("span").textContent = t("contact.form.send");
      status.classList.add("is-success");
      status.textContent = t("contact.form.success");
      form.reset();
    }, 900);
  });
}

/* ==================================================
   ICONS
================================================== */
function renderIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

/* ==================================================
   LANGUAGE SYSTEM
================================================== */
function applyStaticTranslations() {
  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = t(key);
    if (typeof value === "string") el.textContent = value;
  });
  $$("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = t(key);
    if (typeof value === "string") el.setAttribute("placeholder", value);
  });
  $$("[data-lang-field]").forEach((el) => {
    try {
      const obj = JSON.parse(el.getAttribute("data-lang-field"));
      if (obj && obj[currentLang]) el.innerHTML = obj[currentLang];
    } catch (err) {
      /* ignore malformed */
    }
  });
}

let hasRenderedOnce = false;

function setLanguage(lang) {
  if (lang !== "en" && lang !== "hi") return;
  currentLang = lang;
  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem("team0001-language", lang);

  // update switch UI
  $$(".lang-switch").forEach((sw) => {
    sw.setAttribute("data-active", lang);
    $$(".lang-switch__btn", sw).forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  });

  // The very first render must happen synchronously — later code (reveal
  // observers, timeline progress tracking) queries the DOM for cards/items
  // right after this call returns, so they need to already exist.
  // Only fade for language switches that happen after that first render.
  const fade = (fn) => {
    if (hasRenderedOnce && hasGSAP() && !prefersReducedMotion()) {
      gsap.to("main, footer", {
        opacity: 0,
        y: 4,
        duration: 0.14,
        onComplete: () => {
          fn();
          gsap.to("main, footer", { opacity: 1, y: 0, duration: 0.18 });
        },
      });
    } else {
      fn();
    }
    hasRenderedOnce = true;
  };

  fade(() => {
    applyStaticTranslations();
    renderStats();
    renderValues();
    initValueTilt();
    renderWhy();
    updateWhyVisual(
      $$(".why-item").findIndex((el) => el.classList.contains("is-active")) ||
        0,
    );
    renderTimeline();
    renderTeamFilters();
    renderTeam();
    renderActivityFilters();
    renderActivities();
    renderEvents();
    renderAchievements();
    renderGalleryFilters();
    renderGallery();
    renderAnnouncements();
    renderIcons();
    initCounters();
  });
}

function initLanguageSwitcher() {
  $$(".lang-switch__btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });
  const saved = localStorage.getItem("team0001-language");
  setLanguage(saved === "hi" ? "hi" : "en");
}

/* ==================================================
   INIT: BACK TO TOP
================================================== */
function initBackToTop() {
  const btn = $("#backToTop");
  if (!btn) return;
  window.addEventListener(
    "scroll",
    () => {
      btn.classList.toggle("is-visible", window.scrollY > 600);
    },
    { passive: true },
  );
  btn.addEventListener("click", () => {
    if (lenisInstance) lenisInstance.scrollTo(0, { duration: 1.2 });
    else
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
  });
}

/* ==================================================
   INIT: IMAGE SKELETON + ERROR FALLBACK
   Marks every image as loading (shimmer) until it decodes, and swaps in a
   graceful placeholder instead of a broken-image icon if it fails to load.
   Runs on a delay + MutationObserver since most images are injected by the
   data-driven renderers rather than present at initial parse time.
================================================== */
function wireImage(img) {
  if (img.dataset.imgWired) return;
  img.dataset.imgWired = "1";
  if (img.complete && img.naturalWidth > 0) return; // already loaded
  img.setAttribute("data-img-loading", "");
  img.addEventListener("load", () => img.removeAttribute("data-img-loading"), {
    once: true,
  });
  img.addEventListener(
    "error",
    () => {
      img.removeAttribute("data-img-loading");
      img.setAttribute("data-img-fallback", "");
      img.src = "assets/team0001-logo.png";
    },
    { once: true },
  );
}
function initImageFallbacks() {
  $$("img").forEach(wireImage);
  const obs = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      m.addedNodes.forEach((node) => {
        if (node.nodeType !== 1) return;
        if (node.tagName === "IMG") wireImage(node);
        else $$("img", node).forEach(wireImage);
      });
    });
  });
  obs.observe(document.body, { childList: true, subtree: true });
}

/* ==================================================
   FOOTER YEAR
================================================== */
function initFooterYear() {
  const y = $("#year");
  if (y) y.textContent = new Date().getFullYear();
}

/* ==================================================
   BOOTSTRAP
================================================== */
document.addEventListener("DOMContentLoaded", () => {
  try {
    initPreloader();
  } catch (e) {
    console.error(e);
  }
  try {
    initLenis();
  } catch (e) {
    console.error(e);
  }
  try {
    initCursor();
  } catch (e) {
    console.error(e);
  }
  try {
    initNavigation();
  } catch (e) {
    console.error(e);
  }
  try {
    initScrollProgress();
  } catch (e) {
    console.error(e);
  }
  try {
    initHero();
  } catch (e) {
    console.error(e);
  }
  try {
    initMagnetic();
  } catch (e) {
    console.error(e);
  }
  try {
    initMarquee();
  } catch (e) {
    console.error(e);
  }
  try {
    initWhyInteraction();
  } catch (e) {
    console.error(e);
  }
  try {
    initTeam();
  } catch (e) {
    console.error(e);
  }
  try {
    initMemberModal();
  } catch (e) {
    console.error(e);
  }
  try {
    initActivities();
  } catch (e) {
    console.error(e);
  }
  try {
    initGallery();
  } catch (e) {
    console.error(e);
  }
  try {
    initLightbox();
  } catch (e) {
    console.error(e);
  }
  try {
    initForms();
  } catch (e) {
    console.error(e);
  }
  try {
    initFooterYear();
  } catch (e) {
    console.error(e);
  }
  // Language switcher renders the first pass of all dynamic content
  // (stats, values, why, timeline, team, activities, events, achievements,
  // gallery, announcements) synchronously. Anything that needs to query
  // that rendered DOM — reveal observers, timeline progress — must run after.
  try {
    initLanguageSwitcher();
  } catch (e) {
    console.error(e);
  }
  try {
    initRevealAnimations();
  } catch (e) {
    console.error(e);
  }
  try {
    initTimelineProgress();
  } catch (e) {
    console.error(e);
  }
  try {
    initBackToTop();
  } catch (e) {
    console.error(e);
  }
  try {
    initImageFallbacks();
  } catch (e) {
    console.error(e);
  }

  // Give ScrollTrigger a moment to recalc after dynamic content renders
  setTimeout(() => {
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }, 600);
});
