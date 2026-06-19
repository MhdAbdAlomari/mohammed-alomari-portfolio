import Image from "next/image";
import { clsx } from "./clsx";

type PhoneFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  loading?: "lazy" | "eager";
};

/**
 * Phone-shaped frame that renders a real screenshot with next/image (fill).
 * Aspect ratio is locked to a phone (9/19) so the layout never jumps.
 */
export function PhoneFrame({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 240px, (min-width: 640px) 30vw, 60vw",
  className,
  loading,
}: PhoneFrameProps) {
  return (
    <div
      className={clsx(
        "relative mx-auto aspect-[9/19] w-[210px] rounded-[34px] border border-white/10 bg-gradient-to-b from-[#1A2230] to-[#0E141C] p-1.5 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.04)_inset]",
        className,
      )}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black/80" />

      {/* screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-bg">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={loading ?? (priority ? "eager" : "lazy")}
          className="object-cover object-top"
          draggable={false}
        />
      </div>
    </div>
  );
}
