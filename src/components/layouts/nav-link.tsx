import Link from "next/link";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

interface NavLinkProps {
  href: string;
  label: string;
  hoverColor?: string;
}

const NavLink = ({ href, label, hoverColor }: NavLinkProps) => (
  <NavigationMenuLink asChild>
    <Link
      href={href}
      className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors ${hoverColor || 'hover:bg-gray-100 hover:text-gray-900'} focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 text-[16px]`}
    >
      {label}
    </Link>
  </NavigationMenuLink>
);

export default NavLink; 