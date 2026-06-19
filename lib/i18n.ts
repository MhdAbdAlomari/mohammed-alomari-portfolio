export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeMeta: Record<Locale, { label: string; dir: "ltr" | "rtl"; native: string }> = {
  en: { label: "English", dir: "ltr", native: "EN" },
  ar: { label: "العربية", dir: "rtl", native: "AR" },
};

/** A value that exists in every supported locale. */
export type Localized<T> = Record<Locale, T>;

/** Resolve a localized value for the active locale. Falls back to EN if missing. */
export function l<T>(value: Localized<T>, locale: Locale): T {
  return value[locale] ?? value.en;
}

type Dict = {
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    writing: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    nameLine1: string;
    nameLine2: string;
    subtitle: { lead: string; arch: string; bloc: string; and: string; product: string; tail: string };
    location: string;
    yearsTag: string;
    cta: { projects: string; cv: string; contact: string };
    stats: { users: string; orders: string; apps: string };
  };
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
    pillars: { clean: { t: string; b: string }; bloc: { t: string; b: string }; prod: { t: string; b: string }; ui: { t: string; b: string } };
  };
  experience: { eyebrow: string; title: string; subtitle: string };
  projects: { eyebrow: string; title: string; subtitle: string; featured: string; viewCaseStudy: string; viewCaseStudyShort: string };
  skills: { eyebrow: string; title: string; subtitle: string };
  blog: { eyebrow: string; title: string; subtitle: string; viewAll: string; readArticle: string; backHome: string; allArticles: string; indexHeroTitle: string; indexHeroSubtitle: string };
  contact: { eyebrow: string; title: string; subtitle: string; name: string; email: string; message: string; send: string; sending: string; successTitle: string; successBody: string; errorTitle: string; errorBody: string; sendAnother: string; channels: { email: string; linkedin: string; github: string }; placeholders: { name: string; email: string; message: string } };
  footer: { built: string };
  intro: { skip: string; tagline: string };
  audio: { mute: string; unmute: string };
  dashboard: { title: string; subtitle: string; visitors: string; pageViews: string; avgSession: string; topProjects: string; topPages: string; last7Days: string };
  caseStudy: {
    back: string;
    overview: { eyebrow: string; title: string };
    challenge: { eyebrow: string; title: string };
    solution: { eyebrow: string; title: string };
    architecture: { title: string; subtitle: string };
    techStack: string;
    keyFeatures: { title: string; subtitle: string };
    screenshots: { title: string; hint: string; soonTitle: string; soonBody: string };
    lessons: { eyebrow: string; title: string };
    cta: { title: string; subtitle: string; button: string };
  };
};

const en: Dict = {
  nav: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", writing: "Writing", contact: "Contact", cta: "Let's talk" },
  hero: {
    badge: "Available for new opportunities",
    nameLine1: "Mohammed",
    nameLine2: "Abdulrahman Alomari.",
    subtitle: {
      lead: "Flutter Engineer crafting production mobile apps with",
      arch: "Clean Architecture",
      bloc: "Bloc",
      and: "and",
      product: "Ashafaq Car Wash",
      tail: "— a live product serving 8,000+ users across Saudi Arabia.",
    },
    location: "Syria · Remote",
    yearsTag: "1+ year shipping production Flutter",
    cta: { projects: "View Projects", cv: "Download CV", contact: "Contact Me" },
    stats: { users: "Active users", orders: "Orders processed", apps: "Production apps" },
  },
  about: {
    eyebrow: "About",
    title: "Engineer behind a product, not just code.",
    subtitle: "I'm Mohammed — a Flutter engineer focused on shipping real apps that real people use. Over the past year I built and continue to maintain the Ashafaq Car Wash platform, deployed to the Saudi market with 8,000+ users.",
    pillars: {
      clean: { t: "Clean Architecture", b: "Separation of concerns from day one — domain, data, and presentation layers that scale with the product." },
      bloc: { t: "Bloc state management", b: "Predictable state, testable flows, and clear boundaries between business logic and UI." },
      prod: { t: "Production-grade", b: "Payments, FCM, auth, multi-role workflows — shipped, monitored, and iterated on." },
      ui: { t: "Pixel-tight UI", b: "Smooth, responsive interfaces designed for real users in the field, not just demos." },
    },
  },
  experience: { eyebrow: "Experience", title: "Where I've shipped.", subtitle: "A focused track record on Flutter products that reached real users in production." },
  projects: { eyebrow: "Selected work", title: "Production apps. Real users.", subtitle: "A snapshot of products I've designed, built, and shipped — from solo work to international team projects.", featured: "Featured", viewCaseStudy: "View Case Study", viewCaseStudyShort: "View case study" },
  skills: { eyebrow: "Toolbox", title: "Tech I reach for daily.", subtitle: "Tools and patterns I've used in shipped products — not just tutorials." },
  blog: { eyebrow: "Writing", title: "Notes from the field.", subtitle: "Short, honest notes on what I learned shipping production Flutter.", viewAll: "View all articles", readArticle: "Read article", backHome: "Back home", allArticles: "All articles", indexHeroTitle: "Notes from the field.", indexHeroSubtitle: "Short, honest notes on Flutter, Clean Architecture, and shipping production mobile products." },
  contact: {
    eyebrow: "Contact", title: "Let's build something.", subtitle: "Open to remote Flutter / mobile engineering roles and freelance product work.",
    name: "Name", email: "Email", message: "Message", send: "Send message", sending: "Sending…",
    successTitle: "Message sent.",
    successBody: "Thanks for reaching out — I'll get back to you shortly.",
    errorTitle: "Something went wrong.",
    errorBody: "Couldn't send your message. Please try again, or email me directly.",
    sendAnother: "Send another",
    channels: { email: "Email", linkedin: "LinkedIn", github: "GitHub" },
    placeholders: { name: "Your name", email: "you@company.com", message: "Tell me about your project…" },
  },
  footer: { built: "Designed & built with Next.js, Tailwind, and Framer Motion." },
  intro: { skip: "Skip intro", tagline: "Flutter Engineer · Syria" },
  audio: { mute: "Mute UI sounds", unmute: "Unmute UI sounds" },
  dashboard: { title: "Site insights", subtitle: "Lightweight analytics for this portfolio.", visitors: "Unique visitors", pageViews: "Page views", avgSession: "Avg. session", topProjects: "Top projects", topPages: "Top pages", last7Days: "Last 7 days" },
  caseStudy: {
    back: "Back to projects",
    overview: { eyebrow: "Overview", title: "At a glance" },
    challenge: { eyebrow: "The challenge", title: "What needed solving" },
    solution: { eyebrow: "The solution", title: "What I built" },
    architecture: { title: "Architecture & engineering", subtitle: "The decisions that made this product scale." },
    techStack: "Tech stack",
    keyFeatures: { title: "Key features", subtitle: "The capabilities that define the product experience." },
    screenshots: { title: "Inside the app", hint: "Tap any screen to open it full-size. Use ← → to navigate.", soonTitle: "Screenshots coming soon", soonBody: "This is a real production app; public screenshots are still being prepared." },
    lessons: { eyebrow: "Lessons learned", title: "What I'd carry forward" },
    cta: { title: "Want something like this?", subtitle: "I'm available for Flutter engineering and mobile product work.", button: "Get in touch" },
  },
};

const ar: Dict = {
  nav: { about: "نبذة", experience: "الخبرة", projects: "المشاريع", skills: "المهارات", writing: "المقالات", contact: "تواصل", cta: "لنتحدث" },
  hero: {
    badge: "متاح لفرص جديدة",
    nameLine1: "محمد عبد الرحمن",
    nameLine2: "العمري.",
    subtitle: {
      lead: "مهندس Flutter يبني تطبيقات إنتاجية باستخدام",
      arch: "Clean Architecture",
      bloc: "Bloc",
      and: "و",
      product: "تطبيق الشفق لغسيل السيارات",
      tail: "— منتج حي يخدم أكثر من 8,000 مستخدم في المملكة العربية السعودية.",
    },
    location: "سوريا · عن بُعد",
    yearsTag: "أكثر من سنة في تطوير تطبيقات Flutter إنتاجية",
    cta: { projects: "عرض المشاريع", cv: "تحميل السيرة الذاتية", contact: "تواصل معي" },
    stats: { users: "مستخدمون نشطون", orders: "طلبات مُنجزة", apps: "تطبيقات في الإنتاج" },
  },
  about: {
    eyebrow: "نبذة",
    title: "مهندس وراء منتج، لا مجرد كود.",
    subtitle: "أنا محمد — مهندس Flutter أركّز على بناء تطبيقات حقيقية يستخدمها أشخاص حقيقيون. خلال السنة الماضية بنيت وأواصل صيانة منصة الشفق لغسيل السيارات، المُطلقة في السوق السعودي بأكثر من 8,000 مستخدم.",
    pillars: {
      clean: { t: "بنية نظيفة", b: "فصل واضح للمسؤوليات من اليوم الأول — طبقات الـ domain والـ data والعرض تكبر مع المنتج." },
      bloc: { t: "إدارة الحالة عبر Bloc", b: "حالة متوقّعة، تدفقات قابلة للاختبار، وحدود واضحة بين منطق الأعمال وواجهة المستخدم." },
      prod: { t: "جاهز للإنتاج", b: "مدفوعات، إشعارات FCM، مصادقة، أدوار متعددة — مُطلقة، مراقبة، ومحسّنة باستمرار." },
      ui: { t: "واجهة دقيقة", b: "واجهات سلسة ومتجاوبة مصمَّمة لمستخدمين حقيقيين في الميدان، لا للعرض فقط." },
    },
  },
  experience: { eyebrow: "الخبرة", title: "أين أطلقت منتجاتي.", subtitle: "سجل مُركّز على منتجات Flutter وصلت لمستخدمين حقيقيين في الإنتاج." },
  projects: { eyebrow: "أعمال مختارة", title: "تطبيقات حقيقية. مستخدمون حقيقيون.", subtitle: "نظرة على منتجات صمّمتها، بنيتها، وأطلقتها — من العمل الفردي إلى المشاريع الجماعية الدولية.", featured: "مميّز", viewCaseStudy: "عرض دراسة الحالة", viewCaseStudyShort: "عرض دراسة الحالة" },
  skills: { eyebrow: "الأدوات", title: "تقنياتي اليومية.", subtitle: "أدوات وأنماط استخدمتها في منتجات مُطلقة — لا مجرد دروس." },
  blog: { eyebrow: "مقالات", title: "ملاحظات من الميدان.", subtitle: "ملاحظات قصيرة وصادقة عمّا تعلّمته من بناء تطبيقات Flutter إنتاجية.", viewAll: "كل المقالات", readArticle: "اقرأ المقال", backHome: "العودة إلى الرئيسية", allArticles: "كل المقالات", indexHeroTitle: "ملاحظات من الميدان.", indexHeroSubtitle: "ملاحظات قصيرة وصادقة حول Flutter وClean Architecture وإطلاق منتجات الموبايل في الإنتاج." },
  contact: {
    eyebrow: "تواصل", title: "لنبنِ شيئاً معاً.", subtitle: "متاح لفرص هندسة Flutter / موبايل عن بُعد وعمل حر على المنتجات.",
    name: "الاسم", email: "البريد الإلكتروني", message: "الرسالة", send: "إرسال الرسالة", sending: "جارٍ الإرسال…",
    successTitle: "تم إرسال الرسالة.",
    successBody: "شكراً على تواصلك — سأعود إليك قريباً.",
    errorTitle: "حدث خطأ ما.",
    errorBody: "تعذّر إرسال رسالتك. حاول مرّة أخرى، أو راسلني مباشرةً عبر البريد.",
    sendAnother: "إرسال رسالة أخرى",
    channels: { email: "البريد الإلكتروني", linkedin: "لينكدإن", github: "غيت هاب" },
    placeholders: { name: "اسمك", email: "you@company.com", message: "أخبرني عن مشروعك…" },
  },
  footer: { built: "صُمم وبُني باستخدام Next.js وTailwind وFramer Motion." },
  intro: { skip: "تخطّي المقدمة", tagline: "مهندس Flutter · سوريا" },
  audio: { mute: "كتم أصوات الواجهة", unmute: "تفعيل أصوات الواجهة" },
  dashboard: { title: "إحصاءات الموقع", subtitle: "تحليلات خفيفة لهذه البورتفوليو.", visitors: "زوار فريدون", pageViews: "مشاهدات الصفحات", avgSession: "متوسط الجلسة", topProjects: "أعلى المشاريع", topPages: "أعلى الصفحات", last7Days: "آخر 7 أيام" },
  caseStudy: {
    back: "العودة إلى المشاريع",
    overview: { eyebrow: "نظرة عامة", title: "باختصار" },
    challenge: { eyebrow: "التحدّي", title: "ما الذي كان يحتاج إلى حل" },
    solution: { eyebrow: "الحل", title: "ما الذي بنيتُه" },
    architecture: { title: "البنية والهندسة", subtitle: "القرارات التي جعلت هذا المنتج قابلاً للتوسّع." },
    techStack: "التقنيات المستخدمة",
    keyFeatures: { title: "أبرز الميزات", subtitle: "القدرات التي تُعرّف تجربة المنتج." },
    screenshots: { title: "من داخل التطبيق", hint: "اضغط على أي صورة لعرضها بالحجم الكامل. استخدم ← → للتنقّل.", soonTitle: "اللقطات قريباً", soonBody: "هذا تطبيق إنتاجي حقيقي؛ لقطات الشاشة العامّة قيد التحضير." },
    lessons: { eyebrow: "دروس مستفادة", title: "ما الذي سأحمله معي" },
    cta: { title: "تريد منتجاً مشابهاً؟", subtitle: "متاح لأعمال هندسة Flutter وتطوير منتجات الموبايل.", button: "تواصل معي" },
  },
};

export const dictionaries: Record<Locale, Dict> = { en, ar };
export type Dictionary = Dict;
