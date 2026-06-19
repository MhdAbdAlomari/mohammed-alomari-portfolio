// Lightweight analytics adapter. Currently returns mock data; swap the
// implementation of `getSiteStats` to plug in GA4 Data API or Vercel.

export type SiteStats = {
  uniqueVisitors: number;
  pageViews: number;
  avgSessionSeconds: number;
  topPages: { path: string; views: number }[];
  topProjects: { slug: string; title: string; views: number }[];
  daily: { date: string; views: number }[];
  range: { from: string; to: string };
};

function isoDay(offset = 0): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - offset);
  return d.toISOString().slice(0, 10);
}

export async function getSiteStats(): Promise<SiteStats> {
  // Deterministic-ish mock that looks plausible
  const daily = Array.from({ length: 7 }, (_, i) => {
    const offset = 6 - i;
    const base = 120 + Math.round(Math.sin(offset * 1.1) * 30) + offset * 8;
    return { date: isoDay(offset), views: base };
  });
  const pageViews = daily.reduce((a, b) => a + b.views, 0);
  const uniqueVisitors = Math.round(pageViews * 0.62);

  return {
    uniqueVisitors,
    pageViews,
    avgSessionSeconds: 142,
    topPages: [
      { path: "/", views: Math.round(pageViews * 0.46) },
      { path: "/projects/ashafaq-car-wash", views: Math.round(pageViews * 0.21) },
      { path: "/blog", views: Math.round(pageViews * 0.09) },
      { path: "/projects/shamfix", views: Math.round(pageViews * 0.07) },
      { path: "/blog/flutter-clean-architecture-in-real-apps", views: Math.round(pageViews * 0.05) },
    ],
    topProjects: [
      { slug: "ashafaq-car-wash", title: "Ashafaq Car Wash", views: Math.round(pageViews * 0.21) },
      { slug: "shamfix", title: "ShamFix", views: Math.round(pageViews * 0.07) },
      { slug: "food-delivery", title: "Food Delivery App", views: Math.round(pageViews * 0.04) },
      { slug: "doctor-appointment", title: "Doctor Appointment App", views: Math.round(pageViews * 0.03) },
    ],
    daily,
    range: { from: daily[0].date, to: daily[daily.length - 1].date },
  };
}

export function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s.toString().padStart(2, "0")}s`;
}
