import Image from "next/image";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Sadaf Associates"
      width={60}
      height={60}
      priority
      className={className}
    />
  );
}