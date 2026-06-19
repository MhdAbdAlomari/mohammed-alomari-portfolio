import type { LucideIcon } from "lucide-react";
import {
  Smartphone,
  Wrench,
  UtensilsCrossed,
  Stethoscope,
  Building2,
  HardHat,
  Database,
  Cloud,
  Code2,
  GitBranch,
  Layers,
  Boxes,
  Workflow,
  Sparkles,
  CreditCard,
  Bell,
} from "lucide-react";
import type { Localized } from "@/lib/i18n";

type LS = Localized<string>;

export type Screenshot = {
  src: string;
  alt: LS;
  title: LS;
  caption: LS;
};

export type Metric = { label: LS; value: LS };

export type Block = { title: LS; body: LS };

export type CaseStudy = {
  overview: LS;
  problem: LS;
  solution: LS;
  keyFeatures: Block[];
  architecture: Block[];
  results: Metric[];
  lessonsLearned: LS[];
  screenshots: Screenshot[];
};

export type Project = {
  slug: string;
  title: LS;
  tagline: LS;
  description: LS;
  stack: string[];
  metrics?: Metric[];
  icon: LucideIcon;
  hero?: boolean;
  accent: string;
  year: LS;
  role: LS;
  cover?: Screenshot;
  keywords?: string[];
  caseStudy: CaseStudy;
};

// ────────────────────────────────────────────────────────────────────────
// Common helpers — keep literals short
// ────────────────────────────────────────────────────────────────────────

const ASHAFAQ_METRICS_ACTIVE = { en: "Active users", ar: "مستخدمون نشطون" };
const ASHAFAQ_METRICS_ORDERS = { en: "Completed orders", ar: "طلبات مُنجزة" };
const APPS_SHIPPED = { en: "Apps shipped", ar: "تطبيقات مُنجزة" };
const VAL_EN_AR = (en: string, ar: string): LS => ({ en, ar });

// ────────────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. ASHAFAQ — featured production product
  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "ashafaq-car-wash",
    title: VAL_EN_AR("Ashafaq Car Wash", "تطبيق الشفق لغسيل السيارات"),
    tagline: VAL_EN_AR("Live production · Saudi Arabia", "في الإنتاج · المملكة العربية السعودية"),
    description: VAL_EN_AR(
      "On-demand car wash platform live on Google Play and the App Store across Saudi Arabia. Three Flutter apps — Client, Worker, Branch — backed by a shared real-time platform that powers booking, payments, and field operations for thousands of customers each month.",
      "منصة غسيل سيارات حسب الطلب، متاحة على Google Play وApp Store في المملكة العربية السعودية. ثلاثة تطبيقات Flutter — العميل والعامل والفرع — مدعومة بمنصة مشتركة في الوقت الفعلي تشغّل الحجز والدفع والعمليات الميدانية لآلاف العملاء شهرياً.",
    ),
    stack: [
      "Flutter",
      "Dart",
      "Bloc",
      "Clean Architecture",
      "Firebase",
      "Firestore",
      "FCM",
      "Stripe",
      "REST APIs",
      "GoRouter",
      "GetIt",
      "Hive",
    ],
    metrics: [
      { label: ASHAFAQ_METRICS_ACTIVE, value: VAL_EN_AR("8,000+", "+8,000") },
      { label: ASHAFAQ_METRICS_ORDERS, value: VAL_EN_AR("3,000+", "+3,000") },
      { label: APPS_SHIPPED, value: VAL_EN_AR("3", "3") },
    ],
    icon: Smartphone,
    hero: true,
    accent: "from-accent/30 to-primary/10",
    year: VAL_EN_AR("2024 — Present", "2024 — حتى الآن"),
    role: VAL_EN_AR("Flutter Engineer · Owner of the mobile stack", "مهندس Flutter · مسؤول كامل البنية الموبايل"),
    cover: {
      src: "/images/projects/ashafaq/ashafaq_home.jpg",
      alt: VAL_EN_AR("Ashafaq Car Wash home screen showing services and active booking", "الشاشة الرئيسية لتطبيق الشفق تُظهر الخدمات والحجز النشط"),
      title: VAL_EN_AR("Home", "الرئيسية"),
      caption: VAL_EN_AR("Home screen surfacing services, offers, and the active booking.", "الشاشة الرئيسية تعرض الخدمات والعروض والحجز النشط."),
    },
    keywords: [
      "Flutter production app",
      "Saudi Arabia mobile app",
      "Bloc Clean Architecture",
      "Stripe Flutter integration",
      "Firebase FCM real-time",
      "Ashafaq Car Wash",
    ],
    caseStudy: {
      overview: VAL_EN_AR(
        "Ashafaq is the on-demand car wash service operated by Al Shafaq Company in Saudi Arabia. I own the mobile stack — three Flutter apps that together serve customers, field workers, and branch managers on a single real-time platform. The product is live on the App Store and Google Play and has processed over 3,000 orders for more than 8,000 active users.",
        "الشفق هي خدمة غسيل السيارات حسب الطلب التي تشغّلها شركة الشفق في المملكة العربية السعودية. أنا مسؤول عن البنية الموبايل بالكامل — ثلاثة تطبيقات Flutter تخدم العملاء والعمال الميدانيين ومديري الفروع عبر منصة واحدة في الوقت الفعلي. المنتج متاح على App Store وGoogle Play وقد عالج أكثر من 3,000 طلب لأكثر من 8,000 مستخدم نشط.",
      ),
      problem: VAL_EN_AR(
        "Al Shafaq needed to scale a growing manual car wash operation into a digital product across the Saudi market. The previous workflow relied on phone calls and spreadsheets: customers had no way to book online, workers received jobs by phone with no shared state, and branch managers had no live visibility into queue health, worker availability, or revenue. The operation could not grow without a platform.",
        "احتاجت شركة الشفق إلى توسيع عملية غسيل سيارات يدوية متنامية لتصبح منتجاً رقمياً في السوق السعودي. كان سير العمل السابق يعتمد على المكالمات الهاتفية وجداول البيانات: لم يكن للعملاء وسيلة للحجز عبر الإنترنت، وكان العمال يتلقّون الطلبات هاتفياً دون حالة مشتركة، ولم يكن لدى مديري الفروع رؤية حيّة لحجم الطابور وتوفّر العمال أو الإيرادات. لم يكن من الممكن للعملية أن تنمو دون منصة.",
      ),
      solution: VAL_EN_AR(
        "I designed and shipped a three-app ecosystem on a single Flutter stack, backed by a shared Firebase + REST backend. Customers book and pay in under a minute through the Client app. Workers receive push-assigned jobs and complete them on a focused, offline-aware single-screen flow. Branch managers run live operations from a dashboard app with one-tap assignment. State changes propagate to every role in real time.",
        "صمّمت وأطلقت منظومة من ثلاثة تطبيقات على بنية Flutter موحّدة، مدعومة بخلفية مشتركة من Firebase وREST. يحجز العملاء ويدفعون في أقل من دقيقة عبر تطبيق العميل. يتلقّى العمال طلباتهم عبر إشعارات الدفع ويُكملونها على شاشة واحدة مركّزة تعمل دون اتصال أيضاً. ويدير مديرو الفروع العمليات الحيّة من تطبيق لوحة قيادة مع إسناد بضغطة واحدة. تنتشر تغييرات الحالة لكل دور في الوقت الفعلي.",
      ),
      keyFeatures: [
        {
          title: VAL_EN_AR("Booking & wallet", "الحجز والمحفظة"),
          body: VAL_EN_AR(
            "Service catalog, slot picker, add-ons, and a wallet with top-ups and Stripe-backed checkout — booking-to-payment completes in under 60 seconds.",
            "فهرس خدمات، اختيار الوقت، إضافات، ومحفظة مع شحن رصيد وإتمام الدفع عبر Stripe — يتم الحجز والدفع في أقل من 60 ثانية.",
          ),
        },
        {
          title: VAL_EN_AR("Real-time order lifecycle", "دورة حياة الطلب في الوقت الفعلي"),
          body: VAL_EN_AR(
            "Orders move through booking → assignment → in-progress → completion. Firestore broadcasts state to client, worker, and branch apps with no manual refresh.",
            "تنتقل الطلبات من الحجز ← الإسناد ← قيد التنفيذ ← الإكمال. يبثّ Firestore الحالة إلى تطبيقات العميل والعامل والفرع دون أي تحديث يدوي.",
          ),
        },
        {
          title: VAL_EN_AR("Multi-role apps", "تطبيقات متعددة الأدوار"),
          body: VAL_EN_AR(
            "Three apps share one backend. Worker app is push-driven and offline-aware; Branch app shows live queue, worker availability, and rolling revenue.",
            "ثلاثة تطبيقات تتشارك خلفية واحدة. تطبيق العامل يعتمد على الإشعارات ويعمل دون اتصال؛ وتطبيق الفرع يعرض الطابور الحيّ وتوفّر العمال والإيرادات المتجدّدة.",
          ),
        },
        {
          title: VAL_EN_AR("Push notifications via FCM", "إشعارات الدفع عبر FCM"),
          body: VAL_EN_AR(
            "Transactional FCM payloads for booking confirmation, worker assignment, completion receipts, and promo broadcasts.",
            "حمولات FCM للتأكيد على الحجز، وإسناد العمال، وإيصالات الإكمال، وبث العروض.",
          ),
        },
        {
          title: VAL_EN_AR("Promotions & rewards", "العروض والمكافآت"),
          body: VAL_EN_AR(
            "Promo codes and a rewards system designed to drive repeat use — wired directly into the booking and wallet flows.",
            "أكواد عروض ونظام مكافآت مصمَّمة لتعزيز الاستخدام المتكرّر — موصولة مباشرة بتدفقات الحجز والمحفظة.",
          ),
        },
      ],
      architecture: [
        {
          title: VAL_EN_AR("Clean Architecture across three apps", "Clean Architecture عبر ثلاثة تطبيقات"),
          body: VAL_EN_AR(
            "Strict domain / data / presentation split with a shared domain layer. Business rules stay consistent across all three apps even as features ship independently.",
            "فصل صارم بين طبقات الـ domain والـ data والعرض مع طبقة domain مشتركة. تبقى قواعد العمل ثابتة عبر التطبيقات الثلاثة حتى مع إطلاق الميزات بشكل مستقل.",
          ),
        },
        {
          title: VAL_EN_AR("Bloc state machines", "آلات حالة Bloc"),
          body: VAL_EN_AR(
            "Every screen-level flow is modeled as an explicit state machine. Predictable transitions made payment, booking, and order-state edge cases tractable to debug and test.",
            "كل تدفق على مستوى الشاشة مُنمذَج كآلة حالة صريحة. التحوّلات المتوقّعة جعلت حالات الحدّ في الدفع والحجز والطلبات قابلة للتصحيح والاختبار.",
          ),
        },
        {
          title: VAL_EN_AR("Firebase + REST hybrid", "هجين Firebase + REST"),
          body: VAL_EN_AR(
            "Firestore for realtime state (queue, orders, worker location). REST for business operations (pricing, schedules, reports). Cleanly separated through repository interfaces.",
            "Firestore للحالة الفعلية (الطابور، الطلبات، موقع العامل). وREST لعمليات الأعمال (التسعير، الجداول، التقارير). مفصولان بنظافة عبر واجهات الـ repository.",
          ),
        },
        {
          title: VAL_EN_AR("DI with GetIt and routing with GoRouter", "حقن التبعيات بـ GetIt والتوجيه بـ GoRouter"),
          body: VAL_EN_AR(
            "GetIt as the composition root; GoRouter for deep-linkable, role-gated navigation that ties into FCM payload deep links.",
            "GetIt كجذر التركيب؛ وGoRouter للتنقّل القابل للربط العميق والمحصور بالأدوار، والمتّصل بروابط الـ FCM العميقة.",
          ),
        },
      ],
      results: [
        { label: ASHAFAQ_METRICS_ACTIVE, value: VAL_EN_AR("8,000+", "+8,000") },
        { label: VAL_EN_AR("Orders processed", "طلبات مُعالَجة"), value: VAL_EN_AR("3,000+", "+3,000") },
        { label: VAL_EN_AR("Production apps", "تطبيقات إنتاجية"), value: VAL_EN_AR("3", "3") },
        { label: VAL_EN_AR("Crash-free sessions", "جلسات بلا أعطال"), value: VAL_EN_AR("99.6%", "%99.6") },
      ],
      lessonsLearned: [
        VAL_EN_AR(
          "Explicit state machines paid back the upfront cost the first time we had to debug a payment edge case in production.",
          "آلات الحالة الصريحة أعادت لنا كلفتها المبدئية أوّل مرّة احتجنا فيها إلى تصحيح حالة حدّ للدفع في الإنتاج.",
        ),
        VAL_EN_AR(
          "Shipping three apps on a shared backend is only sustainable with a strict repository boundary — otherwise feature work in one app silently breaks another.",
          "إطلاق ثلاثة تطبيقات على خلفية مشتركة لا يكون مستداماً إلا بحدود صارمة على مستوى الـ repository — وإلّا فإن العمل على ميزة في تطبيق يُعطّل آخر بصمت.",
        ),
        VAL_EN_AR(
          "FCM deep links are a UX multiplier for field workers: every second saved navigating to the right screen compounds across hundreds of jobs.",
          "روابط FCM العميقة مُضاعِف لتجربة استخدام العمال الميدانيين: كل ثانية يتم توفيرها للوصول إلى الشاشة الصحيحة تتراكم عبر مئات الطلبات.",
        ),
      ],
      screenshots: [
        {
          src: "/images/projects/ashafaq/ashafaq_home.jpg",
          alt: VAL_EN_AR("Ashafaq home screen with services and active booking", "الشاشة الرئيسية للشفق مع الخدمات والحجز النشط"),
          title: VAL_EN_AR("Home", "الرئيسية"),
          caption: VAL_EN_AR("Home surfaces nearby services and the active booking at a glance.", "الشاشة الرئيسية تُظهر الخدمات القريبة والحجز النشط بنظرة واحدة."),
        },
        {
          src: "/images/projects/ashafaq/ashafaq_create_order.jpg",
          alt: VAL_EN_AR("Ashafaq create order flow", "تدفق إنشاء الطلب في الشفق"),
          title: VAL_EN_AR("Create order", "إنشاء طلب"),
          caption: VAL_EN_AR("Pick a service, location, and time — a three-tap booking flow.", "اختر خدمة وموقعاً ووقتاً — تدفق حجز بثلاث ضغطات."),
        },
        {
          src: "/images/projects/ashafaq/ashafaq_addons.jpg",
          alt: VAL_EN_AR("Ashafaq add-ons selection", "اختيار الإضافات في الشفق"),
          title: VAL_EN_AR("Add-ons", "الإضافات"),
          caption: VAL_EN_AR("Tack on interior cleaning, wax, or extras before checkout.", "أضف التنظيف الداخلي أو الشمع أو إضافات أخرى قبل الدفع."),
        },
        {
          src: "/images/projects/ashafaq/ashafaq_summary_booking.jpg",
          alt: VAL_EN_AR("Ashafaq booking summary", "ملخّص الحجز في الشفق"),
          title: VAL_EN_AR("Summary", "الملخّص"),
          caption: VAL_EN_AR("Final summary with price breakdown and wallet payment.", "ملخّص نهائي مع تفصيل السعر والدفع من المحفظة."),
        },
        {
          src: "/images/projects/ashafaq/ashafaq_orders.jpg",
          alt: VAL_EN_AR("Ashafaq orders list", "قائمة الطلبات في الشفق"),
          title: VAL_EN_AR("Orders", "الطلبات"),
          caption: VAL_EN_AR("Active and past orders with real-time state from Firestore.", "طلبات نشطة وسابقة بحالة فعلية من Firestore."),
        },
        {
          src: "/images/projects/ashafaq/ashafaq_map.jpg",
          alt: VAL_EN_AR("Ashafaq live order map", "خريطة الطلبات الحيّة في الشفق"),
          title: VAL_EN_AR("Live map", "الخريطة الحيّة"),
          caption: VAL_EN_AR("Worker location and order state in real time.", "موقع العامل وحالة الطلب في الوقت الفعلي."),
        },
        {
          src: "/images/projects/ashafaq/ashafaq_wallet.jpg",
          alt: VAL_EN_AR("Ashafaq wallet and payments", "المحفظة والمدفوعات في الشفق"),
          title: VAL_EN_AR("Wallet", "المحفظة"),
          caption: VAL_EN_AR("Wallet balance, Stripe top-ups, and payment history.", "رصيد المحفظة، شحن الرصيد عبر Stripe، وسجل المدفوعات."),
        },
      ],
    },
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. SHAMFIX — graduation project, smart maintenance platform
  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "shamfix",
    title: VAL_EN_AR("ShamFix", "شام فيكس"),
    tagline: VAL_EN_AR("Smart maintenance platform · Graduation project", "منصة صيانة ذكية · مشروع التخرّج"),
    description: VAL_EN_AR(
      "AI-assisted smart home and building maintenance platform that connects customers with vetted technicians. Two Flutter apps (Client and Technician), an eight-stage maintenance workflow, Stripe payments, and a Laravel API backend — built end-to-end as a graduation project.",
      "منصة صيانة ذكية للمنازل والمباني مدعومة بالذكاء الاصطناعي، تربط العملاء بفنّيين موثوقين. تطبيقا Flutter (العميل والفنّي)، وتدفق صيانة من ثماني مراحل، ومدفوعات عبر Stripe، وخلفية بـ Laravel — بُنيت كاملةً كمشروع تخرّج.",
    ),
    stack: [
      "Flutter",
      "Dart",
      "Bloc",
      "Clean Architecture",
      "Laravel API",
      "Firebase",
      "FCM",
      "Stripe",
      "GoRouter",
      "GetIt",
      "Sqflite",
      "AI fault diagnosis",
    ],
    metrics: [
      { label: APPS_SHIPPED, value: VAL_EN_AR("2", "2") },
      { label: VAL_EN_AR("Workflow stages", "مراحل سير العمل"), value: VAL_EN_AR("8", "8") },
      { label: VAL_EN_AR("Graduation grade", "تقدير التخرّج"), value: VAL_EN_AR("Distinction", "امتياز") },
    ],
    icon: Wrench,
    accent: "from-accent/20 to-transparent",
    year: VAL_EN_AR("2024", "2024"),
    role: VAL_EN_AR("Mobile architect · End-to-end build", "مهندس موبايل · بناء من البداية للنهاية"),
    cover: {
      src: "/images/projects/shamfix/ShamFix_home.jpg",
      alt: VAL_EN_AR("ShamFix customer dashboard", "لوحة عميل شام فيكس"),
      title: VAL_EN_AR("Home", "الرئيسية"),
      caption: VAL_EN_AR("Customer dashboard with services and active requests.", "لوحة العميل مع الخدمات والطلبات النشطة."),
    },
    keywords: [
      "Smart maintenance app",
      "AI fault diagnosis Flutter",
      "Laravel API Flutter integration",
      "Stripe Firebase Flutter",
      "Graduation project Flutter",
      "ShamFix",
    ],
    caseStudy: {
      overview: VAL_EN_AR(
        "ShamFix is a smart home and building maintenance platform that pairs customers with vetted technicians and applies AI-assisted fault diagnosis to triage requests before a technician is dispatched. Built as my graduation project, it ships as two Flutter apps (Client and Technician) backed by a Laravel API, Firebase, and Stripe, with an eight-stage maintenance workflow that models the full job lifecycle.",
        "شام فيكس منصة صيانة ذكية للمنازل والمباني، تربط العملاء بفنّيين موثوقين وتستخدم تشخيصاً ذكياً للأعطال لفرز الطلبات قبل إرسال الفنّي. بُنيت كمشروع تخرّج، وتُطلق كتطبيقَي Flutter (العميل والفنّي) مدعومَين بخلفية Laravel وFirebase وStripe، مع تدفق صيانة من ثماني مراحل يُنمذج كامل دورة حياة الطلب.",
      ),
      problem: VAL_EN_AR(
        "Finding a reliable home maintenance technician is fragmented and word-of-mouth. Customers can't compare providers or see ratings; technicians have no structured way to grow a customer base; and triaging a fault correctly the first time is hard, which leads to wasted dispatches and unhappy customers on both sides of the marketplace.",
        "العثور على فنّي صيانة موثوق عملية مفكّكة تعتمد على الشفاهية. لا يستطيع العملاء مقارنة مقدّمي الخدمة أو رؤية التقييمات؛ ولا يملك الفنّيون طريقة منظّمة لتوسيع قاعدة عملائهم؛ والتشخيص الصحيح للعطل من المرّة الأولى صعب، ما يقود إلى زيارات مهدورة وعملاء غير راضين على طرفَي السوق.",
      ),
      solution: VAL_EN_AR(
        "ShamFix combines a two-sided marketplace with AI-assisted fault diagnosis. The Client app guides users through describing the issue; an AI model suggests likely causes and severity to narrow scope before a technician is matched. The Technician app handles inbound jobs, status changes through eight workflow stages, in-app chat, and Stripe payouts. A Laravel API runs the business layer; Firebase handles auth and realtime messaging.",
        "يجمع شام فيكس بين سوق ثنائي الأطراف وتشخيص ذكي للأعطال. يقود تطبيق العميل المستخدمَ عبر وصف المشكلة؛ ويقترح نموذج الذكاء الاصطناعي الأسباب المحتملة وحدّتها لتضييق النطاق قبل مطابقة الفنّي. ويتولّى تطبيق الفنّي الطلبات الواردة وتغييرات الحالة عبر ثماني مراحل، والمحادثات داخل التطبيق، ومدفوعات Stripe. تشغّل خلفية Laravel طبقة الأعمال، ويتولّى Firebase المصادقة والمراسلة الحيّة.",
      ),
      keyFeatures: [
        {
          title: VAL_EN_AR("AI-powered fault diagnosis", "تشخيص الأعطال بالذكاء الاصطناعي"),
          body: VAL_EN_AR(
            "Customers describe the issue; the model classifies likely faults and severity, narrowing the scope before a technician is dispatched.",
            "يصف العملاء المشكلة، ويصنّف النموذج الأعطال المحتملة وحدّتها، فيُضيّق النطاق قبل إرسال الفنّي.",
          ),
        },
        {
          title: VAL_EN_AR("Eight-stage maintenance workflow", "تدفق صيانة من ثماني مراحل"),
          body: VAL_EN_AR(
            "Posted → matched → accepted → en-route → on-site → in-progress → completed → settled. Each stage is a first-class state with its own UI and notifications.",
            "مُنشور ← مُطابَق ← مقبول ← في الطريق ← في الموقع ← قيد التنفيذ ← مُكتمل ← مُسوّى. كل مرحلة حالة من الدرجة الأولى لها واجهة وإشعارات خاصة.",
          ),
        },
        {
          title: VAL_EN_AR("Stripe-backed payments", "مدفوعات عبر Stripe"),
          body: VAL_EN_AR(
            "End-to-end checkout, payouts, and a debt/credit ledger for both customers and technicians.",
            "إتمام دفع كامل، تحويلات، ودفتر ديون/أرصدة لكل من العملاء والفنّيين.",
          ),
        },
        {
          title: VAL_EN_AR("Firebase real-time chat & FCM", "محادثة فعلية عبر Firebase وFCM"),
          body: VAL_EN_AR(
            "Per-request chat scoped to the active job, plus FCM-driven notifications for state changes.",
            "محادثة لكل طلب محصورة بالعمل النشط، مع إشعارات تغيير الحالة عبر FCM.",
          ),
        },
        {
          title: VAL_EN_AR("Provider profiles", "ملفّات الفنّيين"),
          body: VAL_EN_AR(
            "Rated profiles with services, pricing, history, and a debt balance view so technicians always know where they stand.",
            "ملفّات مع تقييمات، خدمات، تسعير، سجل، وعرض رصيد الديون ليعرف الفنّيون موقعهم دائماً.",
          ),
        },
      ],
      architecture: [
        {
          title: VAL_EN_AR("Two apps, one domain", "تطبيقان، نطاق واحد"),
          body: VAL_EN_AR(
            "Client and Technician apps share a domain layer that encodes the marketplace rules — request, offer, accepted job, completion, settlement. Forking would have meant maintaining the same rules twice.",
            "يتشارك تطبيقا العميل والفنّي طبقة domain تُرمّز قواعد السوق — الطلب، العرض، العمل المقبول، الإكمال، التسوية. كان التفرّع سيعني صيانة القواعد نفسها مرّتين.",
          ),
        },
        {
          title: VAL_EN_AR("Bloc + Clean Architecture", "Bloc + Clean Architecture"),
          body: VAL_EN_AR(
            "The eight-stage lifecycle is modeled as explicit Bloc states, which made it testable and made edge cases visible at design time instead of in production.",
            "نُمذجت دورة الحياة من ثماني مراحل كحالات Bloc صريحة، ما جعلها قابلة للاختبار وأظهر حالات الحدّ في وقت التصميم بدل الإنتاج.",
          ),
        },
        {
          title: VAL_EN_AR("Laravel API for business operations", "Laravel API لعمليات الأعمال"),
          body: VAL_EN_AR(
            "Stripe webhooks, ledger, pricing, and reporting live behind a REST boundary. Repositories on the Flutter side hide it from features.",
            "تعيش روابط Stripe والدفتر والتسعير والتقارير خلف حدّ REST. تُخفيها الـ repositories على جانب Flutter عن الميزات.",
          ),
        },
        {
          title: VAL_EN_AR("Firebase for realtime", "Firebase للحالة الفعلية"),
          body: VAL_EN_AR(
            "Auth, Firestore for live request/offer/chat state, and FCM for transactional notifications.",
            "المصادقة، وFirestore لحالة الطلب/العرض/المحادثة الحيّة، وFCM للإشعارات.",
          ),
        },
      ],
      results: [
        { label: VAL_EN_AR("Workflow stages", "مراحل سير العمل"), value: VAL_EN_AR("8", "8") },
        { label: APPS_SHIPPED, value: VAL_EN_AR("2", "2") },
        { label: VAL_EN_AR("Roles modeled", "أدوار مُنمذَجة"), value: VAL_EN_AR("Customer + Technician", "عميل + فنّي") },
        { label: VAL_EN_AR("Graduation grade", "تقدير التخرّج"), value: VAL_EN_AR("Distinction", "امتياز") },
      ],
      lessonsLearned: [
        VAL_EN_AR(
          "Modeling the lifecycle as explicit states (not booleans) made onboarding new contributors fast — the diagram and the code matched.",
          "نمذجة دورة الحياة كحالات صريحة (لا قِيَم منطقية) جعلت تأهيل المساهمين الجدد سريعاً — تطابقَ المخطّط مع الكود.",
        ),
        VAL_EN_AR(
          "AI diagnosis is most valuable as a UX hint that narrows scope, not as a final verdict. Treating it that way avoided over-promising and under-delivering.",
          "تشخيص الذكاء الاصطناعي أعلى قيمةً عندما يكون تلميحاً للتجربة يُضيّق النطاق، لا حكماً نهائياً. تعاملُنا معه على هذا النحو حال دون وعود مبالَغ بها ونتائج أقلّ منها.",
        ),
        VAL_EN_AR(
          "Two-sided in one binary works if — and only if — roles gate routing rather than leaking into shared state.",
          "النموذج الثنائي في تطبيق واحد ينجح إذا — وفقط إذا — كانت الأدوار تتحكّم بالتوجيه دون أن تتسرّب إلى الحالة المشتركة.",
        ),
      ],
      screenshots: [
        {
          src: "/images/projects/shamfix/ShamFix_splash.jpg",
          alt: VAL_EN_AR("ShamFix splash screen", "شاشة البداية لشام فيكس"),
          title: VAL_EN_AR("Splash", "شاشة البداية"),
          caption: VAL_EN_AR("Branded entry point.", "نقطة دخول بهوية المنتج."),
        },
        {
          src: "/images/projects/shamfix/ShamFix_home.jpg",
          alt: VAL_EN_AR("ShamFix customer home dashboard", "لوحة عميل شام فيكس الرئيسية"),
          title: VAL_EN_AR("Customer · Home", "العميل · الرئيسية"),
          caption: VAL_EN_AR("Customer dashboard with services and active requests.", "لوحة العميل مع الخدمات والطلبات النشطة."),
        },
        {
          src: "/images/projects/shamfix/ShamFix_map.jpg",
          alt: VAL_EN_AR("ShamFix map view for service location", "عرض الخريطة في شام فيكس لاختيار موقع الخدمة"),
          title: VAL_EN_AR("Service location", "موقع الخدمة"),
          caption: VAL_EN_AR("Pick the service location on an interactive map.", "اختر موقع الخدمة على خريطة تفاعلية."),
        },
        {
          src: "/images/projects/shamfix/ShamFix_user_accept_addons.jpg",
          alt: VAL_EN_AR("ShamFix customer accepting add-ons", "العميل يقبل الإضافات في شام فيكس"),
          title: VAL_EN_AR("Customer · Add-ons", "العميل · الإضافات"),
          caption: VAL_EN_AR("Customer reviews and accepts add-ons proposed by the technician.", "يراجع العميل ويقبل الإضافات التي يقترحها الفنّي."),
        },
        {
          src: "/images/projects/shamfix/ShamFix_pay_dept.jpg",
          alt: VAL_EN_AR("ShamFix customer settlement and payment", "تسوية ودفع العميل في شام فيكس"),
          title: VAL_EN_AR("Customer · Payment", "العميل · الدفع"),
          caption: VAL_EN_AR("Settle the job balance via Stripe.", "تسوية رصيد العمل عبر Stripe."),
        },
        {
          src: "/images/projects/shamfix/ShamFix_provider_home.jpg",
          alt: VAL_EN_AR("ShamFix technician home dashboard", "لوحة الفنّي الرئيسية في شام فيكس"),
          title: VAL_EN_AR("Technician · Home", "الفنّي · الرئيسية"),
          caption: VAL_EN_AR("Technician inbox of inbound and active jobs.", "بريد الفنّي للطلبات الواردة والنشطة."),
        },
        {
          src: "/images/projects/shamfix/ShamFix_provider_debt.jpg",
          alt: VAL_EN_AR("ShamFix technician debt and earnings", "ديون وأرباح الفنّي في شام فيكس"),
          title: VAL_EN_AR("Technician · Ledger", "الفنّي · الدفتر"),
          caption: VAL_EN_AR("Earnings, debts, and payout history for the technician.", "الأرباح والديون وسجل التحويلات للفنّي."),
        },
      ],
    },
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. ASHAFAQ WORKER — production app
  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "ashafaq-worker",
    title: VAL_EN_AR("Ashafaq Worker App", "تطبيق عامل الشفق"),
    tagline: VAL_EN_AR("Internal production app · Saudi Arabia", "تطبيق إنتاجي داخلي · المملكة العربية السعودية"),
    description: VAL_EN_AR(
      "Worker-side companion app for the Ashafaq Car Wash platform. Built for field workers across Saudi Arabia to claim and complete jobs through an explicit four-stage order workflow (Accepted → Arrived → In Progress → Completed). Multi-language UI in Arabic, English, Hindi, and Bengali to match the on-the-ground workforce.",
      "تطبيق العامل المرافق لمنصة الشفق لغسيل السيارات. مبنيّ للعمال الميدانيين في المملكة العربية السعودية لاستلام الطلبات وإكمالها عبر تدفّق صريح من أربع مراحل (مقبول ← وصل ← قيد التنفيذ ← مُكتمل). واجهة متعدّدة اللغات بالعربية والإنجليزية والهندية والبنغالية لتناسب فريق العمل في الميدان.",
    ),
    stack: [
      "Flutter",
      "Dart",
      "Bloc",
      "Clean Architecture",
      "Firebase",
      "Firestore",
      "FCM",
      "REST APIs",
      "GoRouter",
      "GetIt",
      "Hive",
      "i18n (AR / EN / HI / BN)",
    ],
    metrics: [
      { label: VAL_EN_AR("Order stages", "مراحل الطلب"), value: VAL_EN_AR("4", "4") },
      { label: VAL_EN_AR("Languages", "اللغات"), value: VAL_EN_AR("AR · EN · HI · BN", "العربية · الإنجليزية · الهندية · البنغالية") },
      { label: VAL_EN_AR("Status", "الحالة"), value: VAL_EN_AR("In production", "في الإنتاج") },
    ],
    icon: HardHat,
    accent: "from-primary/15 to-transparent",
    year: VAL_EN_AR("2024 — Present", "2024 — حتى الآن"),
    role: VAL_EN_AR("Flutter Engineer · Worker app owner", "مهندس Flutter · مسؤول تطبيق العامل"),
    keywords: [
      "Flutter production app",
      "Multi-language Flutter app",
      "Arabic English Hindi Bengali Flutter",
      "Worker dispatch app",
      "Field operations Flutter",
      "Ashafaq Worker",
    ],
    caseStudy: {
      overview: VAL_EN_AR(
        "The Ashafaq Worker app is the field-side of the Ashafaq Car Wash platform. It's the tool every car wash worker uses to receive, work, and complete jobs — a focused production app deployed across the Saudi market alongside the Client and Branch apps. The UI ships in Arabic, English, Hindi, and Bengali to match the actual workforce, and the order lifecycle is modeled as four explicit stages: Accepted → Arrived → In Progress → Completed.",
        "تطبيق عامل الشفق هو الواجهة الميدانية لمنصة الشفق لغسيل السيارات. إنه الأداة التي يستخدمها كل عامل غسيل لاستلام العمل وتنفيذه وإكماله — تطبيق إنتاجي مُركَّز مُطلَق في السوق السعودي إلى جانب تطبيقَي العميل والفرع. تأتي الواجهة بالعربية والإنجليزية والهندية والبنغالية لتناسب فريق العمل الفعلي، ودورة حياة الطلب مُنمذَجة بأربع مراحل صريحة: مقبول ← وصل ← قيد التنفيذ ← مُكتمل.",
      ),
      problem: VAL_EN_AR(
        "Field workers in the Saudi car wash industry come from a multilingual workforce — Arabic, English, Hindi, and Bengali speakers all working side by side. They need a tool that they can read in their own language, that surfaces the right job at the right time, and that handles state transitions correctly even when network connectivity in a parking lot is unreliable. A generic English-only app doesn't ship.",
        "يأتي العمال الميدانيون في قطاع غسيل السيارات السعودي من قوى عاملة متعدّدة اللغات — متحدّثو العربية والإنجليزية والهندية والبنغالية يعملون جنباً إلى جنب. يحتاجون إلى أداة يمكنهم قراءتها بلغتهم، تُظهر الطلب الصحيح في الوقت الصحيح، وتُعالج تحوّلات الحالة بشكل صحيح حتى عندما يكون اتصال الشبكة في موقف السيارات غير موثوق. تطبيق إنجليزي فقط لا يُمكن إطلاقه.",
      ),
      solution: VAL_EN_AR(
        "A focused Flutter app with full i18n in four languages and an explicit four-stage state machine for orders. FCM push delivers a deep link directly to the assigned job; the worker confirms arrival, marks in-progress, and completes — each transition broadcast over Firestore to the Client and Branch apps in real time. Offline-aware completion queues actions when the network drops and reconciles on reconnect.",
        "تطبيق Flutter مُركَّز بدعم i18n كامل بأربع لغات وآلة حالة صريحة من أربع مراحل للطلبات. يُسلِّم FCM رابطاً عميقاً مباشرة إلى الطلب المُسنَد؛ يؤكّد العامل وصوله، ثم يُحدّد البدء، ثم الإكمال — وكل تحوّل يُبَثّ عبر Firestore إلى تطبيقَي العميل والفرع في الوقت الفعلي. وعند ضعف الشبكة تُصَفّ إجراءات الإكمال محلياً وتتزامن عند عودة الاتصال.",
      ),
      keyFeatures: [
        {
          title: VAL_EN_AR("Four-stage order workflow", "تدفّق الطلب من أربع مراحل"),
          body: VAL_EN_AR(
            "Explicit Accepted → Arrived → In Progress → Completed states with their own UI and validation. No implicit transitions, no booleans pretending to be states.",
            "حالات صريحة: مقبول ← وصل ← قيد التنفيذ ← مُكتمل، لكل منها واجهة وتحقّق خاصّ. لا تحوّلات ضمنيّة ولا قِيَم منطقية تتظاهر بالحالات.",
          ),
        },
        {
          title: VAL_EN_AR("Multi-language UI", "واجهة متعدّدة اللغات"),
          body: VAL_EN_AR(
            "Full localization in Arabic, English, Hindi, and Bengali — including RTL handling for Arabic.",
            "ترجمة كاملة بالعربية والإنجليزية والهندية والبنغالية — مع دعم اتجاه الكتابة من اليمين لليسار للعربية.",
          ),
        },
        {
          title: VAL_EN_AR("Real-time order updates", "تحديثات الطلبات في الوقت الفعلي"),
          body: VAL_EN_AR(
            "Order state streams from Firestore; assignment changes from the Branch app land on the Worker app instantly.",
            "تتدفّق حالة الطلب من Firestore؛ وتظهر تغييرات الإسناد من تطبيق الفرع على تطبيق العامل فوراً.",
          ),
        },
        {
          title: VAL_EN_AR("Push notifications via FCM", "إشعارات الدفع عبر FCM"),
          body: VAL_EN_AR(
            "Job assignments arrive via push with a deep link to the active job — no manual refresh.",
            "تصل إسنادات الطلبات عبر إشعارات الدفع مع رابط عميق إلى الطلب النشط — دون أي تحديث يدوي.",
          ),
        },
        {
          title: VAL_EN_AR("Worker status management", "إدارة حالة العامل"),
          body: VAL_EN_AR(
            "Worker toggles availability and breaks. State is broadcast to the Branch dashboard for live operations.",
            "يبدّل العامل التوفّر والاستراحات. تُبَثّ الحالة إلى لوحة الفرع للعمليات الحيّة.",
          ),
        },
        {
          title: VAL_EN_AR("Route & location support", "دعم المسار والموقع"),
          body: VAL_EN_AR(
            "Built-in navigation handoff to the customer location and live location for the Client app.",
            "تمرير التنقّل المدمج إلى موقع العميل وموقع حيّ يظهر في تطبيق العميل.",
          ),
        },
      ],
      architecture: [
        {
          title: VAL_EN_AR("Bloc state machines per flow", "آلات حالة Bloc لكل تدفق"),
          body: VAL_EN_AR(
            "Order lifecycle, availability, and authentication each modeled as their own Bloc. Transitions are explicit and testable.",
            "دورة حياة الطلب والتوفّر والمصادقة، كلّها مُنمذَجة كـ Bloc خاص. التحوّلات صريحة وقابلة للاختبار.",
          ),
        },
        {
          title: VAL_EN_AR("Shared domain with Client + Branch", "نطاق مشترك مع تطبيقَي العميل والفرع"),
          body: VAL_EN_AR(
            "Reuses the Ashafaq platform domain layer (order, worker, branch, payment). Business rules stay consistent across all three apps.",
            "يُعيد استخدام طبقة domain لمنصة الشفق (الطلب، العامل، الفرع، الدفع). تبقى قواعد العمل ثابتة عبر التطبيقات الثلاثة.",
          ),
        },
        {
          title: VAL_EN_AR("Offline-aware completion queue", "طابور إكمال يدرك حالة الاتصال"),
          body: VAL_EN_AR(
            "Completion actions are persisted to Hive locally and synced when connectivity returns — no lost work in a low-signal parking lot.",
            "تُحفَظ إجراءات الإكمال في Hive محلياً وتُزامَن عند عودة الاتصال — لا يضيع أي عمل في موقف ذي إشارة ضعيفة.",
          ),
        },
        {
          title: VAL_EN_AR("Four-language i18n pipeline", "خطّ i18n بأربع لغات"),
          body: VAL_EN_AR(
            "Translations split per feature module so adding a language is a localized change, not a global one.",
            "الترجمات موزّعة لكل وحدة ميزة بحيث تكون إضافة لغة تعديلاً موضعياً لا عالمياً.",
          ),
        },
      ],
      results: [
        { label: VAL_EN_AR("Order stages", "مراحل الطلب"), value: VAL_EN_AR("4", "4") },
        { label: VAL_EN_AR("Languages", "اللغات"), value: VAL_EN_AR("4", "4") },
        { label: VAL_EN_AR("Status", "الحالة"), value: VAL_EN_AR("In production", "في الإنتاج") },
        { label: VAL_EN_AR("Offline", "دون اتصال"), value: VAL_EN_AR("Resilient", "صامد") },
      ],
      lessonsLearned: [
        VAL_EN_AR(
          "Designing for a real multilingual workforce changes everything — font selection, line height, RTL handling, and string length budgeting all have to be in the design from day one.",
          "التصميم لقوى عاملة متعدّدة اللغات فعلياً يُغيّر كل شيء — اختيار الخط، ارتفاع السطر، التعامل مع RTL، وميزانية طول النصوص — كلّها يجب أن تكون في التصميم منذ اليوم الأول.",
        ),
        VAL_EN_AR(
          "An explicit state per workflow stage (not booleans) made it possible to add per-stage UI and validation later without touching the rest of the flow.",
          "حالة صريحة لكل مرحلة عمل (لا قِيَم منطقية) جعلت من الممكن إضافة واجهة وتحقّق خاصّين بكل مرحلة لاحقاً دون لمس بقيّة التدفّق.",
        ),
        VAL_EN_AR(
          "FCM deep links into the assigned job are the single highest-leverage UX choice for a field app — every saved tap compounds across hundreds of orders per day.",
          "روابط FCM العميقة إلى الطلب المُسنَد هي أكثر قرار تجربة استخدام تأثيراً في تطبيق ميداني — كل ضغطة يتم توفيرها تتراكم عبر مئات الطلبات يومياً.",
        ),
      ],
      screenshots: [],
    },
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. ASHAFAQ BRANCH — production management app
  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "ashafaq-branch",
    title: VAL_EN_AR("Ashafaq Branch App", "تطبيق فرع الشفق"),
    tagline: VAL_EN_AR("Branch management · Riyadh · 11 branches", "إدارة الفروع · الرياض · 11 فرعاً"),
    description: VAL_EN_AR(
      "Branch management application used across 11 Ashafaq branches in Riyadh. A dashboard-first Flutter app for live order assignment, worker coordination, and operational monitoring — the daily tool branch managers use to run a multi-location car wash operation in real time.",
      "تطبيق إدارة الفروع المُستخدَم في 11 فرعاً من فروع الشفق في الرياض. تطبيق Flutter يعتمد على لوحة قيادة لإسناد الطلبات الحيّ وتنسيق العمال ومراقبة العمليات — الأداة اليومية التي يستخدمها مديرو الفروع لإدارة عمليات غسيل سيارات متعدّدة المواقع في الوقت الفعلي.",
    ),
    stack: [
      "Flutter",
      "Dart",
      "Bloc",
      "Clean Architecture",
      "Firebase",
      "Firestore",
      "REST APIs",
      "FCM",
      "GoRouter",
      "GetIt",
    ],
    metrics: [
      { label: VAL_EN_AR("Live branches", "فروع نشطة"), value: VAL_EN_AR("11", "11") },
      { label: VAL_EN_AR("Region", "المنطقة"), value: VAL_EN_AR("Riyadh", "الرياض") },
      { label: VAL_EN_AR("Assignment", "الإسناد"), value: VAL_EN_AR("1-tap", "بضغطة واحدة") },
    ],
    icon: Building2,
    accent: "from-accent/15 to-transparent",
    year: VAL_EN_AR("2024 — Present", "2024 — حتى الآن"),
    role: VAL_EN_AR("Flutter Engineer · Branch app owner", "مهندس Flutter · مسؤول تطبيق الفرع"),
    keywords: [
      "Flutter operations dashboard",
      "Branch management Flutter",
      "Multi-branch Flutter app",
      "Live ops Flutter app",
      "Ashafaq Branch",
      "Riyadh car wash dashboard",
    ],
    caseStudy: {
      overview: VAL_EN_AR(
        "The Ashafaq Branch app is the operational dashboard for Ashafaq's 11 branches in Riyadh. It's the tool branch managers use every day to see the live queue, assign workers, monitor performance, and coordinate staff across multiple locations. Built on Flutter with a shared domain layer, it stays in lockstep with the Client and Worker apps on the Ashafaq platform.",
        "تطبيق فرع الشفق هو لوحة القيادة التشغيليّة لـ 11 فرعاً من فروع الشفق في الرياض. إنه الأداة التي يستخدمها مديرو الفروع يومياً لرؤية الطابور الحيّ وإسناد العمال ومراقبة الأداء وتنسيق الفِرَق عبر مواقع متعدّدة. مبنيّ بـ Flutter مع طبقة domain مشتركة، يبقى متزامناً مع تطبيقَي العميل والعامل في منصة الشفق.",
      ),
      problem: VAL_EN_AR(
        "Running 11 branches in real time is impossible without a single pane of glass. Managers needed live visibility into who's free, what's in the queue, and how the day is performing — without bouncing between phone calls, spreadsheets, and the worker app. Multi-branch operations also need the assignment workflow to be one tap, not five.",
        "إدارة 11 فرعاً في الوقت الفعلي مستحيلة دون نافذة موحَّدة. احتاج المديرون إلى رؤية حيّة لمن هو متاح، ما هو في الطابور، وكيف يسير اليوم — دون التنقّل بين المكالمات وجداول البيانات وتطبيق العامل. كما تحتاج العمليات متعدّدة الفروع إلى أن يكون تدفّق الإسناد بضغطة واحدة لا بخمسة.",
      ),
      solution: VAL_EN_AR(
        "A dashboard-first Flutter app showing live queue, worker availability, and rolling revenue per branch. One-tap worker assignment broadcasts via Firestore to the Worker app in a single round-trip. Multi-branch support lets the platform scale horizontally — adding a new branch is configuration, not deployment.",
        "تطبيق Flutter يعتمد على لوحة قيادة يعرض الطابور الحيّ وتوفّر العمال والإيرادات المتجدّدة لكل فرع. إسناد العامل بضغطة واحدة يُبَثّ عبر Firestore إلى تطبيق العامل في رحلة واحدة. ودعم الفروع المتعدّدة يُتيح للمنصة التوسّع أفقياً — إضافة فرع جديد إعدادٌ لا نشر.",
      ),
      keyFeatures: [
        {
          title: VAL_EN_AR("Branch operations dashboard", "لوحة عمليات الفرع"),
          body: VAL_EN_AR(
            "Single screen showing live queue, worker availability, and the day's performance — the manager's home base.",
            "شاشة واحدة تعرض الطابور الحيّ وتوفّر العمال وأداء اليوم — قاعدة المدير الرئيسيّة.",
          ),
        },
        {
          title: VAL_EN_AR("Order management", "إدارة الطلبات"),
          body: VAL_EN_AR(
            "View, filter, and triage active orders across the branch. Reassign or cancel from the same view.",
            "عرض الطلبات النشطة وتصفيتها وفرزها عبر الفرع. إعادة الإسناد أو الإلغاء من العرض نفسه.",
          ),
        },
        {
          title: VAL_EN_AR("One-tap worker assignment", "إسناد العامل بضغطة واحدة"),
          body: VAL_EN_AR(
            "Manager assigns a worker; the change broadcasts to client and worker apps in one round-trip — no friction, no double-dispatch.",
            "يُسنِد المدير العامل؛ ويُبَثّ التغيير إلى تطبيقَي العميل والعامل في رحلة واحدة — دون احتكاك ودون ازدواج إسناد.",
          ),
        },
        {
          title: VAL_EN_AR("Live request handling", "التعامل مع الطلبات الحيّة"),
          body: VAL_EN_AR(
            "Incoming requests appear in real time via Firestore — no manual refresh, no missed jobs.",
            "تظهر الطلبات الواردة فورياً عبر Firestore — دون تحديث يدوي ودون طلبات ضائعة.",
          ),
        },
        {
          title: VAL_EN_AR("Multi-branch support", "دعم تعدّد الفروع"),
          body: VAL_EN_AR(
            "Scales across 11 branches today; the architecture lets a 12th branch be a configuration change.",
            "يتوسّع عبر 11 فرعاً حالياً؛ وتسمح البنية بأن يكون الفرع الثاني عشر تغيير إعدادات.",
          ),
        },
        {
          title: VAL_EN_AR("Performance tracking", "تتبّع الأداء"),
          body: VAL_EN_AR(
            "Rolling revenue, completed orders, and worker performance per branch — visible to the manager all day long.",
            "إيرادات متجدّدة وطلبات مُكتملة وأداء العامل لكل فرع — مرئية للمدير طوال اليوم.",
          ),
        },
      ],
      architecture: [
        {
          title: VAL_EN_AR("Realtime ops view via Firestore", "عرض عمليات حيّة عبر Firestore"),
          body: VAL_EN_AR(
            "Queue, worker availability, and order state flow through Firestore listeners scoped per branch.",
            "يتدفّق الطابور وتوفّر العمال وحالة الطلب عبر مستمعي Firestore محصورين لكل فرع.",
          ),
        },
        {
          title: VAL_EN_AR("Shared domain with the Ashafaq platform", "نطاق مشترك مع منصة الشفق"),
          body: VAL_EN_AR(
            "The Branch app sits on the same domain layer as the Client and Worker apps. Business rules stay aligned automatically.",
            "يجلس تطبيق الفرع على طبقة domain نفسها التي يجلس عليها تطبيقا العميل والعامل. تبقى قواعد العمل متوافقة تلقائياً.",
          ),
        },
        {
          title: VAL_EN_AR("One-tap assignment flow", "تدفّق إسناد بضغطة واحدة"),
          body: VAL_EN_AR(
            "Assignment is a single Bloc event that updates Firestore and triggers FCM in one path — no race conditions, no double-dispatch.",
            "الإسناد حدث Bloc واحد يُحدّث Firestore ويُطلق FCM في مسار واحد — دون حالات سباق ودون ازدواج إسناد.",
          ),
        },
        {
          title: VAL_EN_AR("Branch-scoped data model", "نموذج بيانات مَحصور بالفرع"),
          body: VAL_EN_AR(
            "All queries and listeners are scoped by branch ID, so adding a branch doesn't grow query cost for existing ones.",
            "كل الاستعلامات والمستمعين محصورون بمعرّف الفرع، لذا فإن إضافة فرع لا تزيد تكلفة الاستعلام للفروع القائمة.",
          ),
        },
      ],
      results: [
        { label: VAL_EN_AR("Live branches", "فروع نشطة"), value: VAL_EN_AR("11", "11") },
        { label: VAL_EN_AR("Region", "المنطقة"), value: VAL_EN_AR("Riyadh", "الرياض") },
        { label: VAL_EN_AR("Visibility", "الرؤية"), value: VAL_EN_AR("Live", "حيّة") },
        { label: VAL_EN_AR("Assignment", "الإسناد"), value: VAL_EN_AR("1-tap", "بضغطة واحدة") },
      ],
      lessonsLearned: [
        VAL_EN_AR(
          "Dashboard apps live or die by latency. Keeping every list backed by a Firestore listener — not a periodic refresh — was the difference between a usable app and a frustrating one.",
          "تطبيقات لوحة القيادة تحيا أو تموت بحسب الكمون. إبقاء كل قائمة مدعومة بمستمع Firestore — لا بتحديث دوري — كان الفارق بين تطبيق صالح للاستخدام وآخر مُحبط.",
        ),
        VAL_EN_AR(
          "Multi-branch from day one is cheaper than retrofitting it. Scoping every read by branch ID early made the move from 1 branch to 11 a non-event.",
          "تعدّد الفروع منذ اليوم الأول أرخص من إضافته لاحقاً. حصرُ كل قراءة بمعرّف الفرع باكراً جعل الانتقال من فرع واحد إلى 11 فرعاً حدثاً غير مُلاحَظ.",
        ),
        VAL_EN_AR(
          "Operational tools need to feel like one screen, not a tree of nested pages. Managers don't tap five times to assign a worker — they tap once.",
          "أدوات العمليات يجب أن تشعر وكأنها شاشة واحدة، لا شجرة من الصفحات المتداخلة. لا يضغط المديرون خمس مرّات لإسناد عامل — بل ضغطة واحدة.",
        ),
      ],
      screenshots: [],
    },
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. FOOD DELIVERY (Wassi)
  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "food-delivery",
    title: VAL_EN_AR("Wassi · Food Delivery", "وَصّي · توصيل الطعام"),
    tagline: VAL_EN_AR("Nationwide platform · Syria–Germany team", "منصة على المستوى الوطني · فريق سوريا–ألمانيا"),
    description: VAL_EN_AR(
      "Customer-facing food delivery client for a nationwide operator, built with a distributed team spanning Syria and Germany. Single Flutter codebase covering restaurant discovery, customization, checkout, and live order tracking — built on Clean Architecture, Bloc, and Firestore.",
      "تطبيق توصيل طعام موجَّه للعميل لمشغّل على المستوى الوطني، بُني مع فريق موزّع بين سوريا وألمانيا. قاعدة كود Flutter واحدة تغطّي استكشاف المطاعم والتخصيص والدفع وتتبّع الطلب الحيّ — مبنيّة على Clean Architecture وBloc وFirestore.",
    ),
    stack: [
      "Flutter",
      "Dart",
      "Bloc",
      "Clean Architecture",
      "Firestore",
      "REST APIs",
      "GoRouter",
      "GetIt",
      "Hive",
    ],
    metrics: [
      { label: VAL_EN_AR("Team", "الفريق"), value: VAL_EN_AR("Syria + Germany", "سوريا + ألمانيا") },
      { label: VAL_EN_AR("Platforms", "المنصّات"), value: VAL_EN_AR("iOS + Android", "iOS + Android") },
      { label: VAL_EN_AR("Architecture", "البنية"), value: VAL_EN_AR("Clean + Bloc", "Clean + Bloc") },
    ],
    icon: UtensilsCrossed,
    accent: "from-primary/20 to-transparent",
    year: VAL_EN_AR("2023", "2023"),
    role: VAL_EN_AR("Flutter Engineer · Distributed team", "مهندس Flutter · فريق موزّع"),
    cover: {
      src: "/images/projects/food-delivery/wassi_home1.png",
      alt: VAL_EN_AR("Wassi food delivery home screen", "الشاشة الرئيسية لتطبيق وَصّي"),
      title: VAL_EN_AR("Home", "الرئيسية"),
      caption: VAL_EN_AR("Restaurant discovery with cuisine and distance filters.", "استكشاف المطاعم مع مرشّحات المطبخ والمسافة."),
    },
    keywords: [
      "Flutter food delivery app",
      "Clean Architecture Flutter",
      "Bloc Firestore Flutter",
      "Distributed team Flutter project",
      "Wassi delivery app",
    ],
    caseStudy: {
      overview: VAL_EN_AR(
        "Wassi is a nationwide food delivery client built for a regional operator by a distributed team spanning Syria and Germany. I joined as a Flutter engineer responsible for the catalog, cart, customization, and checkout flows on a single codebase shipped to iOS and Android. The codebase uses Clean Architecture, Bloc, Firestore, GoRouter, and GetIt — chosen to make parallel work across time zones reliable.",
        "وَصّي تطبيق توصيل طعام على مستوى وطني بُني لمشغّل إقليمي عبر فريق موزّع بين سوريا وألمانيا. انضممت كمهندس Flutter مسؤول عن تدفقات الفهرس والسلة والتخصيص والدفع على قاعدة كود واحدة تُطلَق على iOS وAndroid. تستخدم القاعدة Clean Architecture وBloc وFirestore وGoRouter وGetIt — اختيرت لجعل العمل المتوازي عبر المناطق الزمنية موثوقاً.",
      ),
      problem: VAL_EN_AR(
        "Build a customer-facing food delivery client for a nationwide operator under a tight scope, with a team distributed across two countries and time zones. The product needed feature parity across iOS and Android, an aligned UX, and a codebase that lets multiple engineers ship in parallel without breaking each other's work.",
        "بناء تطبيق توصيل طعام موجَّه للعميل لمشغّل على مستوى وطني، ضمن نطاق ضيّق، مع فريق موزّع عبر بلدَين ومنطقتَين زمنيتَين. احتاج المنتج إلى تكافؤ ميزات بين iOS وAndroid، وتجربة استخدام متوافقة، وقاعدة كود تتيح لعدّة مهندسين الإطلاق بالتوازي دون تعطيل عمل بعضهم بعضاً.",
      ),
      solution: VAL_EN_AR(
        "A single Flutter codebase organized around Clean Architecture and Bloc — every major flow (catalog, restaurant, cart, customization, checkout, tracking) is its own feature module with explicit boundaries. Firestore handles live order tracking and restaurant state; REST handles business operations. Distributed work flowed through small, well-defined interfaces between modules.",
        "قاعدة كود Flutter واحدة مُنظَّمة حول Clean Architecture وBloc — كل تدفق رئيسي (الفهرس، المطعم، السلة، التخصيص، الدفع، التتبّع) وحدةُ ميزة خاصّة بحدود صريحة. يتولّى Firestore تتبّع الطلب الحيّ وحالة المطعم؛ ويتولّى REST عمليات الأعمال. تدفّق العمل الموزّع عبر واجهات صغيرة محدَّدة جيداً بين الوحدات.",
      ),
      keyFeatures: [
        {
          title: VAL_EN_AR("Restaurant discovery", "استكشاف المطاعم"),
          body: VAL_EN_AR(
            "Browse and filter by cuisine, distance, and rating. Per-restaurant menu and signature items.",
            "تصفّح ومرشّحات حسب المطبخ والمسافة والتقييم. قائمة طعام لكل مطعم وأطباق مميّزة.",
          ),
        },
        {
          title: VAL_EN_AR("Meal customization", "تخصيص الوجبة"),
          body: VAL_EN_AR(
            "Add-ons, sizes, and modifiers per item, with a cart that survives cold starts and connectivity drops.",
            "إضافات وأحجام وتعديلات لكل صنف، مع سلّة تصمد أمام إعادة التشغيل وفقدان الاتصال.",
          ),
        },
        {
          title: VAL_EN_AR("Live order tracking", "تتبّع الطلب الحيّ"),
          body: VAL_EN_AR(
            "Order state streams from Firestore from acceptance through delivery — no manual refresh.",
            "تتدفّق حالة الطلب من Firestore من القبول حتى التسليم — دون أي تحديث يدوي.",
          ),
        },
        {
          title: VAL_EN_AR("Offline-first cart", "سلّة تعمل دون اتصال أولاً"),
          body: VAL_EN_AR(
            "Hive-backed local cart that survives app restarts; reconciles with the server on resume.",
            "سلّة محلّية مدعومة بـ Hive تصمد أمام إعادة تشغيل التطبيق، وتتزامن مع الخادم عند الاستئناف.",
          ),
        },
      ],
      architecture: [
        {
          title: VAL_EN_AR("Feature modules, Bloc per flow", "وحدات ميزات، Bloc لكل تدفق"),
          body: VAL_EN_AR(
            "Each major flow is isolated in its own module with its own Bloc. That kept the team's parallel work clean across two countries.",
            "كل تدفق رئيسي معزول في وحدته الخاصة مع Bloc خاص به. أبقى ذلك العمل المتوازي للفريق نظيفاً عبر بلدَين.",
          ),
        },
        {
          title: VAL_EN_AR("Clean Architecture", "Clean Architecture"),
          body: VAL_EN_AR(
            "Strict domain / data / presentation split per feature. The interface layer between Firestore and REST sits behind a single repository per feature.",
            "فصل صارم بين الـ domain والـ data والعرض لكل ميزة. طبقة الواجهة بين Firestore وREST تجلس خلف repository واحد لكل ميزة.",
          ),
        },
        {
          title: VAL_EN_AR("Offline-aware cart", "سلّة تدرك حالة الاتصال"),
          body: VAL_EN_AR(
            "Hive persists the cart locally. On resume the cart reconciles against the latest restaurant menu so price changes propagate without losing items.",
            "يحفظ Hive السلّة محلياً. عند الاستئناف تتزامن السلّة مع أحدث قائمة طعام للمطعم لتنتشر تغييرات الأسعار دون فقدان الأصناف.",
          ),
        },
      ],
      results: [
        { label: VAL_EN_AR("Team", "الفريق"), value: VAL_EN_AR("Distributed", "موزّع") },
        { label: VAL_EN_AR("Platforms", "المنصّات"), value: VAL_EN_AR("iOS + Android", "iOS + Android") },
        { label: VAL_EN_AR("Cart reliability", "موثوقية السلّة"), value: VAL_EN_AR("Offline-first", "تعمل دون اتصال أولاً") },
      ],
      lessonsLearned: [
        VAL_EN_AR(
          "Small, well-defined module interfaces are the single biggest enabler for async distributed work — they make code review a local activity, not a global one.",
          "الواجهات الصغيرة المحدَّدة جيداً للوحدات هي أكبر مُمكِّن للعمل الموزّع غير المتزامن — تجعل مراجعة الكود نشاطاً محلياً لا عالمياً.",
        ),
        VAL_EN_AR(
          "An offline-first cart is non-negotiable in a region with patchy connectivity. The reconciliation step is the part most teams forget.",
          "السلّة التي تعمل دون اتصال أولاً غير قابلة للنقاش في منطقة ذات اتصال متقطّع. خطوة التزامن هي الجزء الذي تنساه معظم الفِرَق.",
        ),
      ],
      screenshots: [
        {
          src: "/images/projects/food-delivery/wassi_home1.png",
          alt: VAL_EN_AR("Wassi home screen with restaurant discovery", "الشاشة الرئيسية لـ وَصّي مع استكشاف المطاعم"),
          title: VAL_EN_AR("Home", "الرئيسية"),
          caption: VAL_EN_AR("Restaurant discovery with cuisine and distance filters.", "استكشاف المطاعم مع مرشّحات المطبخ والمسافة."),
        },
        {
          src: "/images/projects/food-delivery/wassi_restaurant_home_page1.png",
          alt: VAL_EN_AR("Wassi restaurant detail page", "صفحة تفاصيل المطعم في وَصّي"),
          title: VAL_EN_AR("Restaurant", "المطعم"),
          caption: VAL_EN_AR("Restaurant detail with menu, hours, and signature items.", "تفاصيل المطعم مع القائمة والمواعيد والأطباق المميّزة."),
        },
        {
          src: "/images/projects/food-delivery/wassi_addons_to_meal1.png",
          alt: VAL_EN_AR("Wassi meal customization with add-ons", "تخصيص الوجبة بالإضافات في وَصّي"),
          title: VAL_EN_AR("Customize", "تخصيص"),
          caption: VAL_EN_AR("Add-ons, sizes, and modifiers per item.", "إضافات وأحجام وتعديلات لكل صنف."),
        },
        {
          src: "/images/projects/food-delivery/wassi_restaurant_orders1.png",
          alt: VAL_EN_AR("Wassi orders list grouped by restaurant", "قائمة الطلبات في وَصّي مُجمَّعة حسب المطعم"),
          title: VAL_EN_AR("Orders", "الطلبات"),
          caption: VAL_EN_AR("Active and past orders, grouped by restaurant.", "الطلبات النشطة والسابقة، مُجمَّعة حسب المطعم."),
        },
        {
          src: "/images/projects/food-delivery/wassi_complete_order1.png",
          alt: VAL_EN_AR("Wassi order completion screen", "شاشة إكمال الطلب في وَصّي"),
          title: VAL_EN_AR("Confirmation", "التأكيد"),
          caption: VAL_EN_AR("Checkout confirmation with live tracking handoff.", "تأكيد الدفع مع تمرير التتبّع الحيّ."),
        },
      ],
    },
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. DOCTOR APPOINTMENT
  // ────────────────────────────────────────────────────────────────────────
  {
    slug: "doctor-appointment",
    title: VAL_EN_AR("Doctor Appointment Booking", "حجز مواعيد الأطباء"),
    tagline: VAL_EN_AR("Healthcare scheduling", "جدولة في الرعاية الصحية"),
    description: VAL_EN_AR(
      "Patient-facing healthcare booking app: searchable doctor profiles, real-time slot availability, patient information capture, and offline-first browsing via Hive. Built on Flutter with API integration, Lottie animations, and an opinionated focus on a clean booking flow.",
      "تطبيق حجز رعاية صحية موجَّه للمرضى: ملفّات أطباء قابلة للبحث، توفّر فعليّ للمواعيد، التقاط معلومات المريض، وتصفّح يعمل دون اتصال أولاً عبر Hive. مبنيّ بـ Flutter مع تكامل API ورسوم Lottie وتركيز واضح على تدفق حجز نظيف.",
    ),
    stack: [
      "Flutter",
      "Dart",
      "Bloc",
      "REST APIs",
      "Hive",
      "Lottie",
      "GoRouter",
      "GetIt",
      "FCM",
    ],
    metrics: [
      { label: VAL_EN_AR("Booking flow", "تدفق الحجز"), value: VAL_EN_AR("< 30s", "أقل من 30 ثانية") },
      { label: VAL_EN_AR("Offline support", "دعم العمل دون اتصال"), value: VAL_EN_AR("Hive cache", "ذاكرة Hive") },
      { label: VAL_EN_AR("Reminders", "التذكيرات"), value: VAL_EN_AR("Automated", "آليّة") },
    ],
    icon: Stethoscope,
    accent: "from-accent/15 to-transparent",
    year: VAL_EN_AR("2023", "2023"),
    role: VAL_EN_AR("Flutter Engineer", "مهندس Flutter"),
    cover: {
      src: "/images/projects/doctor/Doctor_app_home.jpg",
      alt: VAL_EN_AR("Doctor appointment home screen", "الشاشة الرئيسية لتطبيق حجز الأطباء"),
      title: VAL_EN_AR("Home", "الرئيسية"),
      caption: VAL_EN_AR("Browse doctors by specialty with a clean discovery UI.", "تصفّح الأطباء حسب الاختصاص بواجهة استكشاف نظيفة."),
    },
    keywords: [
      "Flutter healthcare app",
      "Doctor appointment Flutter",
      "Hive offline Flutter",
      "Lottie animations Flutter",
      "Healthcare scheduling app",
    ],
    caseStudy: {
      overview: VAL_EN_AR(
        "A patient-facing healthcare booking app built in Flutter. Patients search doctors by specialty, pick a real-time available slot, and submit their information through a guided flow. The app integrates with a REST backend, caches profiles and appointments locally via Hive for offline access, and uses Lottie for lightweight, professional motion.",
        "تطبيق حجز رعاية صحية موجَّه للمرضى مبنيّ بـ Flutter. يبحث المرضى عن الأطباء حسب الاختصاص، ويختارون موعداً متاحاً فعلياً، ويرسلون معلوماتهم عبر تدفّق موجَّه. يتكامل التطبيق مع خلفية REST، ويُخزِّن الملفّات والمواعيد محلياً عبر Hive للوصول دون اتصال، ويستخدم Lottie لرسوم خفيفة واحترافيّة.",
      ),
      problem: VAL_EN_AR(
        "Booking a specialist appointment is still a phone-call experience for most patients — slow, lossy, and frustrating. Clinics get unpredictable scheduling and avoidable no-shows. The patient flow needs to feel calm and trustworthy, work offline when needed, and complete the booking in well under a minute.",
        "حجز موعد لدى اختصاصي لا يزال تجربة مكالمة هاتفية لمعظم المرضى — بطيء، يفقد معلومات، ومُحبِط. تحصل العيادات على جدولة غير متوقّعة وعدم حضور يمكن تجنّبه. يحتاج تدفّق المريض إلى أن يكون هادئاً وموثوقاً، يعمل دون اتصال عند الحاجة، ويُتمّ الحجز في أقل من دقيقة بكثير.",
      ),
      solution: VAL_EN_AR(
        "A focused booking flow with clear hierarchy: discover by specialty → review the doctor's profile → pick from realtime-available slots → submit patient information → confirmation. Hive caches profiles and upcoming appointments so the app launches instantly and stays usable when the network is patchy. Lottie animations are used sparingly to make the otherwise clinical flow feel personable. FCM reminders fire at configurable offsets to reduce no-shows.",
        "تدفّق حجز مُركَّز بهرميّة واضحة: استكشف حسب الاختصاص ← راجِع ملف الطبيب ← اختر من المواعيد المتاحة فعلياً ← أرسل معلومات المريض ← التأكيد. يُخزِّن Hive الملفّات والمواعيد القادمة فيبدأ التطبيق فوراً ويبقى صالحاً للاستخدام حين تكون الشبكة متقطّعة. تُستخدم رسوم Lottie باعتدال لتمنح التدفّق الإكلينيكي طابعاً إنسانياً. وتُطلَق تذكيرات FCM في أوقات قابلة للضبط للحدّ من حالات عدم الحضور.",
      ),
      keyFeatures: [
        {
          title: VAL_EN_AR("Doctor discovery & profiles", "استكشاف الأطباء وملفّاتهم"),
          body: VAL_EN_AR(
            "Search and filter by specialty, see doctor profiles with availability, location, and clinic information.",
            "بحث ومرشّحات حسب الاختصاص، عرض ملفّات الأطباء مع التوفّر والموقع ومعلومات العيادة.",
          ),
        },
        {
          title: VAL_EN_AR("Real-time slot scheduling", "جدولة مواعيد فعليّة"),
          body: VAL_EN_AR(
            "Live slot availability with concurrency protection on the booking call so two patients can't claim the same slot.",
            "توفّر فعليّ للمواعيد مع حماية تَوازُن على عملية الحجز كي لا يحجز مريضان الموعد نفسه.",
          ),
        },
        {
          title: VAL_EN_AR("Patient information capture", "التقاط معلومات المريض"),
          body: VAL_EN_AR(
            "Guided form for patient details, validated and persisted before submission so a connectivity drop doesn't lose data.",
            "نموذج موجَّه لتفاصيل المريض، مع تحقّق وحفظ قبل الإرسال كي لا يُفقد فقدان الاتصال أي بيانات.",
          ),
        },
        {
          title: VAL_EN_AR("Offline support via Hive", "دعم العمل دون اتصال عبر Hive"),
          body: VAL_EN_AR(
            "Doctor profiles, specialties, and upcoming appointments cached locally — the app launches instantly and stays usable offline.",
            "ملفّات الأطباء والاختصاصات والمواعيد القادمة مُخزَّنة محلياً — يبدأ التطبيق فوراً ويبقى صالحاً للاستخدام دون اتصال.",
          ),
        },
        {
          title: VAL_EN_AR("Lottie animations", "رسوم Lottie"),
          body: VAL_EN_AR(
            "Soft success and empty-state animations make the flow feel personable without overdoing motion.",
            "رسوم نجاح وحالة فارغة لطيفة تُكسب التدفّق طابعاً إنسانياً دون مبالغة في الحركة.",
          ),
        },
        {
          title: VAL_EN_AR("FCM reminders", "تذكيرات FCM"),
          body: VAL_EN_AR(
            "Configurable reminder schedule to reduce no-shows.",
            "جدول تذكيرات قابل للضبط للحدّ من حالات عدم الحضور.",
          ),
        },
      ],
      architecture: [
        {
          title: VAL_EN_AR("Bloc per flow", "Bloc لكل تدفق"),
          body: VAL_EN_AR(
            "Discovery, doctor detail, scheduling, and patient information are each their own Bloc — testable in isolation.",
            "الاستكشاف وتفاصيل الطبيب والجدولة ومعلومات المريض، لكلٍّ منها Bloc خاص — قابلٌ للاختبار بمعزل.",
          ),
        },
        {
          title: VAL_EN_AR("Hive-backed cache", "ذاكرة مدعومة بـ Hive"),
          body: VAL_EN_AR(
            "Profiles, specialties, and upcoming appointments persisted to Hive. Cache is the source of truth on cold start; the network reconciles in the background.",
            "الملفّات والاختصاصات والمواعيد القادمة محفوظة في Hive. الذاكرة هي مصدر الحقيقة عند البدء البارد؛ والشبكة تتزامن في الخلفية.",
          ),
        },
        {
          title: VAL_EN_AR("REST repository layer", "طبقة repository فوق REST"),
          body: VAL_EN_AR(
            "All network access goes through repository interfaces — the Blocs never touch HTTP. Swapping endpoints is a one-line change.",
            "كل وصول للشبكة يمرّ عبر واجهات repository — لا تلمس الـ Blocs بروتوكول HTTP أبداً. تبديل النقاط تعديلٌ بسطر واحد.",
          ),
        },
        {
          title: VAL_EN_AR("Reminder pipeline", "خطّ التذكيرات"),
          body: VAL_EN_AR(
            "FCM-driven reminder system fires at scheduled offsets before each appointment.",
            "نظام تذكيرات بقيادة FCM يُطلَق في أوقات مجدوَلة قبل كل موعد.",
          ),
        },
      ],
      results: [
        { label: VAL_EN_AR("Booking flow", "تدفق الحجز"), value: VAL_EN_AR("< 30s", "أقل من 30 ثانية") },
        { label: VAL_EN_AR("Cold start", "البدء البارد"), value: VAL_EN_AR("Cache-backed", "بدعم الذاكرة") },
        { label: VAL_EN_AR("Reminders", "التذكيرات"), value: VAL_EN_AR("Automated", "آليّة") },
        { label: VAL_EN_AR("Network resilience", "صلابة الشبكة"), value: VAL_EN_AR("Hive offline", "Hive دون اتصال") },
      ],
      lessonsLearned: [
        VAL_EN_AR(
          "Healthcare UX is calm UX. Less motion, larger touch targets, and tight error states matter more than visual flair.",
          "تجربة الاستخدام في الرعاية الصحية تجربةٌ هادئة. حركة أقل، أهداف لمس أكبر، وحالات خطأ مُحكَمة — أهمّ من البريق البصري.",
        ),
        VAL_EN_AR(
          "Hive shines for read-heavy domain data (specialties, profiles, slot snapshots). Treating the cache as source-of-truth on cold start removes a class of loading-state bugs.",
          "يتألّق Hive في بيانات domain الكثيرة القراءة (اختصاصات، ملفّات، لقطات مواعيد). معاملة الذاكرة كمصدر للحقيقة عند البدء البارد تُلغي فئةً من أعطال حالات التحميل.",
        ),
        VAL_EN_AR(
          "Lottie pays off only when used sparingly — one or two motion moments per flow. More than that and the UI starts to feel busy.",
          "يستحقّ Lottie فقط حين يُستخدم باعتدال — لحظة حركة أو اثنتان في كل تدفّق. أكثر من ذلك وتبدأ الواجهة بالظهور بازدحام.",
        ),
      ],
      screenshots: [
        {
          src: "/images/projects/doctor/Doctor_app_about_app.jpg",
          alt: VAL_EN_AR("Doctor app onboarding / about screen", "شاشة التعريف بالتطبيق"),
          title: VAL_EN_AR("About", "نبذة"),
          caption: VAL_EN_AR("Onboarding sets the tone — calm, trustworthy, focused.", "التهيئة تُحدِّد النَّبرَة — هادئة، موثوقة، مُركَّزة."),
        },
        {
          src: "/images/projects/doctor/Doctor_app_home.jpg",
          alt: VAL_EN_AR("Doctor app home screen with specialties", "الشاشة الرئيسية للتطبيق مع الاختصاصات"),
          title: VAL_EN_AR("Home", "الرئيسية"),
          caption: VAL_EN_AR("Browse doctors by specialty with a clean discovery UI.", "تصفّح الأطباء حسب الاختصاص بواجهة استكشاف نظيفة."),
        },
        {
          src: "/images/projects/doctor/Doctor_app_filter_room.jpg",
          alt: VAL_EN_AR("Doctor app filter and room selection", "ترشيح واختيار الغرفة في التطبيق"),
          title: VAL_EN_AR("Filter", "تصفية"),
          caption: VAL_EN_AR("Filter by clinic, specialty, and room for fast narrowing.", "ترشيح حسب العيادة والاختصاص والغرفة لتضييق سريع."),
        },
        {
          src: "/images/projects/doctor/Doctor_app_choose_date.jpg",
          alt: VAL_EN_AR("Doctor app appointment date and slot picker", "اختيار تاريخ وموعد في التطبيق"),
          title: VAL_EN_AR("Pick a slot", "اختر موعداً"),
          caption: VAL_EN_AR("Real-time available slots — concurrency-safe at the API.", "مواعيد متاحة فعلياً — آمنة من حيث التَّوازُن على مستوى الـ API."),
        },
        {
          src: "/images/projects/doctor/Doctor_app_patient_information.jpg",
          alt: VAL_EN_AR("Doctor app patient information form", "نموذج معلومات المريض في التطبيق"),
          title: VAL_EN_AR("Patient info", "معلومات المريض"),
          caption: VAL_EN_AR("Guided patient information capture before submission.", "التقاط معلومات المريض بشكل موجَّه قبل الإرسال."),
        },
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export type SkillGroup = {
  title: LS;
  icon: LucideIcon;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: VAL_EN_AR("Mobile · Flutter", "الموبايل · Flutter"),
    icon: Smartphone,
    skills: [
      "Flutter",
      "Dart",
      "Bloc / Cubit",
      "Clean Architecture",
      "GoRouter",
      "GetIt",
      "Hive",
      "Sqflite",
      "Lottie",
    ],
  },
  {
    title: VAL_EN_AR("Backend & Services", "الخلفية والخدمات"),
    icon: Cloud,
    skills: [
      "Firebase",
      "Cloud Firestore",
      "Laravel API",
      "REST APIs",
      "FCM",
      "Stripe",
      "Authentication",
    ],
  },
  {
    title: VAL_EN_AR("Engineering & Tools", "الهندسة والأدوات"),
    icon: Code2,
    skills: [
      "Git / GitHub",
      "CI basics",
      "Figma → Code",
      "App Store / Play Console",
      "Crashlytics",
      "Analytics",
    ],
  },
];

export type Experience = {
  company: LS;
  role: LS;
  period: LS;
  location: LS;
  highlights: LS[];
};

export const experiences: Experience[] = [
  {
    company: VAL_EN_AR("Al Shafaq Company", "شركة الشفق"),
    role: VAL_EN_AR("Flutter Developer", "مطوّر Flutter"),
    period: VAL_EN_AR("2024 — Present", "2024 — حتى الآن"),
    location: VAL_EN_AR("Saudi Arabia · Remote", "المملكة العربية السعودية · عن بُعد"),
    highlights: [
      VAL_EN_AR(
        "Shipped and maintain the Ashafaq Car Wash production platform — 8,000+ active users and 3,000+ completed orders, live on the App Store and Google Play.",
        "أطلقت وأصون منصة الشفق لغسيل السيارات في الإنتاج — أكثر من 8,000 مستخدم نشط و3,000 طلب مُنجَز، متاحة على App Store وGoogle Play.",
      ),
      VAL_EN_AR(
        "Own a three-app mobile stack (Client, Worker, Branch) backed by a shared Firebase + REST platform.",
        "أملك بنية موبايل من ثلاثة تطبيقات (العميل، العامل، الفرع) مدعومة بمنصة مشتركة من Firebase وREST.",
      ),
      VAL_EN_AR(
        "Implemented Stripe payments, FCM-driven order notifications, and a real-time order lifecycle that syncs across all three roles.",
        "نفّذت مدفوعات Stripe وإشعارات الطلبات عبر FCM ودورة حياة طلب فعليّة تتزامن عبر الأدوار الثلاثة.",
      ),
      VAL_EN_AR(
        "Drove Clean Architecture and Bloc adoption so the codebase scales as the product grows.",
        "قُدتُ تبنّي Clean Architecture وBloc كي تتوسّع قاعدة الكود مع نمو المنتج.",
      ),
    ],
  },
];

export const heroStats: { label: LS; value: string; icon: LucideIcon }[] = [
  { label: VAL_EN_AR("Active users", "مستخدمون نشطون"), value: "8,000+", icon: Sparkles },
  { label: VAL_EN_AR("Orders processed", "طلبات مُعالَجة"), value: "3,000+", icon: CreditCard },
  { label: VAL_EN_AR("Production apps", "تطبيقات إنتاجية"), value: "3", icon: Layers },
];

export const featureIcons = {
  database: Database,
  branch: GitBranch,
  layers: Layers,
  boxes: Boxes,
  workflow: Workflow,
  bell: Bell,
};
