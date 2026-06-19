import type { Metadata } from "next";
import { BackgroundFX } from "@/components/BackgroundFX";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Dashboard } from "@/components/sections/Dashboard";
import { getSiteStats } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Lightweight site insights for this portfolio.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/dashboard" },
};

export default async function DashboardPage() {
  const stats = await getSiteStats();
  return (
    <>
      <BackgroundFX />
      <Navbar />
      <main className="relative flex flex-1 flex-col">
        <Dashboard stats={stats} />
      </main>
      <Footer />
    </>
  );
}
