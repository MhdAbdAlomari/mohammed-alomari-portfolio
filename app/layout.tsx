import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://alomari.dev";

export const viewport: Viewport = {
  themeColor: "#0B0F14",
  width: "device-width",
  initialScale: 1,
};

const SITE_TITLE = "M. Abdulrahman Alomari — Flutter Engineer";
const SITE_DESCRIPTION =
  "Flutter Engineer shipping production mobile apps. Creator of Ashafaq Car Wash, live in Saudi Arabia with 15,000+ active users and 14,000+ completed operations. Clean Architecture, Bloc, Firebase, MyFatoorah.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Abdulrahman Alomari",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Abdulrahman Alomari — Portfolio",
  keywords: [
    "Flutter Developer",
    "Flutter Engineer",
    "Mobile Engineer",
    "Senior Flutter Developer",
    "Saudi Arabia Flutter Developer",
    "Syrian Flutter Developer",
    "Remote Flutter Developer",
    "Dart",
    "Bloc",
    "Cubit",
    "Clean Architecture",
    "Firebase",
    "Cloud Firestore",
    "Firebase Cloud Messaging",
    "Stripe Flutter integration",
    "FCM",
    "GoRouter",
    "GetIt",
    "Hive",
    "Sqflite",
    "Laravel API",
    "Ashafaq Car Wash",
    "Ashafaq App",
    "ShamFix",
    "Smart maintenance app",
    "Wassi food delivery",
    "Doctor appointment app",
    "Abdulrahman Alomari",
    "MyFatoorah Flutter integration",
  ],
  authors: [{ name: "Abdulrahman Alomari", url: SITE_URL }],
  creator: "Abdulrahman Alomari",
  publisher: "Abdulrahman Alomari",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Abdulrahman Alomari",
    title: SITE_TITLE,
    description:
      "Production Flutter apps with 15,000+ users. Clean Architecture, Bloc, Firebase, MyFatoorah. Live in Saudi Arabia.",
    images: [
      {
        url: "/images/projects/ashafaq/ashafaq_home.jpg",
        width: 1200,
        height: 630,
        alt: "Ashafaq Car Wash — Abdulrahman Alomari's featured Flutter project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: "Production Flutter apps with 15,000+ users. Clean Architecture, Bloc, Firebase.",
    creator: "@malomari",
    images: ["/images/projects/ashafaq/ashafaq_home.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdulrahman Alomari",
  alternateName: "M. Abdulrahman Alomari",
  jobTitle: "Flutter Engineer",
  description:
    "Flutter Engineer building production mobile applications. Creator of Ashafaq Car Wash — 15,000+ active users in Saudi Arabia.",
  url: SITE_URL,
  email: "mailto:mohamed.alomari.dev@gmail.com",
  worksFor: { "@type": "Organization", name: "Al Shafaq Company" },
  knowsAbout: [
    "Flutter",
    "Dart",
    "Bloc",
    "Clean Architecture",
    "Firebase",
    "Firestore",
    "MyFatoorah",
    "Laravel",
    "Mobile Engineering",
    "Mobile Architecture",
  ],
  sameAs: [
    "https://github.com/MhdAbdAlomari",
    "https://linkedin.com/in/mhdalomari",
    "https://mostaql.com/Abdulrhman_Alomari",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text selection:bg-accent selection:text-bg">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
