import { useEffect, useState } from "react";

/**
 * Shows a graceful placeholder until the real image file exists at `src`.
 * Lets the owner drop project photos into /public/images/... later.
 */
export function SmartImage({
  src,
  alt,
  label,
  className = "",
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
}) {
  const [status, setStatus] = useState<"loading" | "ok" | "failed">("loading");

  useEffect(() => {
    let alive = true;
    const probe = new Image();
    probe.onload = () => alive && setStatus("ok");
    probe.onerror = () => alive && setStatus("failed");
    probe.src = src;
    return () => {
      alive = false;
    };
  }, [src]);

  if (status !== "ok") {
    return (
      <div
        className={`flex items-center justify-center bg-secondary/60 text-center ${className}`}
        aria-label={alt}
      >
        <span className="px-4 text-xs tracking-widest text-muted-foreground uppercase">
          {status === "failed" ? (label ?? "Add image") : ""}
        </span>
      </div>
    );
  }

  return <img src={src} alt={alt} loading="lazy" className={className} />;
}
