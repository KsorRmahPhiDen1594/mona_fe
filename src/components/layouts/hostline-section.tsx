import Link from "next/link";
import Image from "next/image";

const HostlineSection = () => {
  return (
    <div className="relative flex items-center">
      {/* Mask Group - Background Image */}
      <Link href="/" className="z-10">
        <Image
          src="/assets/Mask-Group.png"
          alt="Mask Group"
          width={120}
          height={35}
          className="h-8 lg:h-12 w-auto dark:hidden"
        />
      </Link>

      {/* Hotline Panda - Positioned below header */}
      <Link href="/" className="">
        <Image
          src="/assets/hotline-panda.png"
          alt="Hotline panda"
          width={150}
          height={82}
          className="relative h-12 lg:h-12 w-auto dark:hidden drop-shadow-lg"
        />
      </Link>
    </div>
  );
};

export default HostlineSection; 