import { cn } from "@/lib/utils";

const BrandLogo = ({ dark = false, className }: { dark?: boolean; className?: string }) => {
  const logoSrc = dark ? "https://mona.media/wp-content/uploads/2024/10/media-logo-new-1.png" : "https://mona.media/wp-content/uploads/2024/10/media-logo-new-1.png";
  return (
    <div className={cn(className, "flex items-center gap-2")}>
      <img
        src={logoSrc}
        alt="Brand Logo"
        className=" w-[380px] object-contain"
      />
    </div>
  );
};

export default BrandLogo; 