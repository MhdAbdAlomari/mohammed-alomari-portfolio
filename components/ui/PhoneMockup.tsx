import type { LucideIcon } from "lucide-react";
import { clsx } from "./clsx";

type PhoneMockupProps = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  className?: string;
};

export function PhoneMockup({ icon: Icon, title, tagline, className }: PhoneMockupProps) {
  return (
    <div
      className={clsx(
        "relative mx-auto aspect-[9/19] w-[210px] rounded-[34px] border border-white/10 bg-gradient-to-b from-[#1A2230] to-[#0E141C] p-1.5 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.04)_inset]",
        className,
      )}
      aria-hidden
    >
      {/* notch */}
      <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black/80" />

      {/* screen */}
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[28px] bg-bg">
        {/* status bar */}
        <div className="flex items-center justify-between px-4 pt-5 text-[9px] text-muted-soft">
          <span>9:41</span>
          <span className="size-1 rounded-full bg-accent/60" />
        </div>

        {/* hero icon */}
        <div className="mt-6 flex flex-col items-center px-4">
          <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-accent/30 to-primary/10 ring-1 ring-accent/30">
            <Icon size={22} className="text-accent" />
          </div>
          <div className="mt-3 text-center">
            <div className="text-[10px] font-medium text-white">{title}</div>
            <div className="mt-0.5 text-[8px] text-muted-soft">{tagline}</div>
          </div>
        </div>

        {/* fake content rows */}
        <div className="mt-4 flex-1 space-y-1.5 px-3">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg border border-white/[0.04] bg-white/[0.02] p-2"
            >
              <div className="size-5 rounded-md bg-gradient-to-br from-accent/30 to-primary/20" />
              <div className="flex-1 space-y-1">
                <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
                <div className="h-1 w-1/2 rounded-full bg-white/[0.06]" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="px-3 pb-5 pt-2">
          <div className="rounded-full bg-gradient-to-r from-primary to-accent py-1.5 text-center text-[9px] font-medium text-bg">
            Continue
          </div>
        </div>
      </div>
    </div>
  );
}
