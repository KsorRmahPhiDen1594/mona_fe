import Link from "next/link";
import { NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";

interface BlogItem {
  href: string;
  label: string;
}

interface BlogDropdownProps {
  items: BlogItem[];
  hoverColor?: string;
}

const BlogDropdown = ({ items, hoverColor }: BlogDropdownProps) => (
  <NavigationMenuContent className="animate-in slide-in-from-top-2 duration-300 min-w-[220px] w-[220px] p-0">
    <ul className="flex flex-col gap-1 p-2">
      {items.map((item) => (
        <li key={item.href}>
          <NavigationMenuLink asChild>
            <Link
              href={item.href}
              className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors ${hoverColor || 'hover:bg-gray-100 hover:text-gray-900'}`}
            >
              <div className="text-[16px] font-medium leading-none">{item.label}</div>
            </Link>
          </NavigationMenuLink>
        </li>
      ))}
    </ul>
  </NavigationMenuContent>
);

export default BlogDropdown; 