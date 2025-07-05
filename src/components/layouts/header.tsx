'use client'
import Link from "next/link";
import { cn } from "@/lib/utils";
import BrandLogo from "@/components/ui/brand-logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ServicesDropdown from "@/components/layouts/services-dropdown";
import { Search, X } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

// Navigation configuration - dễ chỉnh sửa
const navigationConfig = [
  { type: "link", href: "/about", label: "Giới thiệu", hoverColor: "hover:bg-blue-100 hover:text-blue-900" },
  {
    type: "dropdown",
    trigger: "Dịch vụ",
    dropdownType: "services",
    component: ServicesDropdown,
    hoverColor: "hover:bg-green-100 hover:text-green-900"
  },
  { type: "link", href: "/portfolio", label: "Dự án", hoverColor: "hover:bg-purple-100 hover:text-purple-900" },
  { type: "link", href: "/clients", label: "Khách hàng", hoverColor: "hover:bg-orange-100 hover:text-orange-900" },
  {
    type: "dropdown",
    trigger: "Blog",
    dropdownType: "blog",
    hoverColor: "hover:bg-pink-100 hover:text-pink-900",
    items: [
      { href: "/blog/seo-guide", label: "Cẩm nang SEO" },
      { href: "/blog/digital-marketing", label: "Digital Marketing" },
      { href: "/blog/web-design-experience", label: "Kinh nghiệm thiết kế website" },
      { href: "/blog/hosting-knowledge", label: "Kiến thức Hosting" },
      { href: "/blog/education", label: "Giáo dục" },
    ]
  },
  { type: "link", href: "/activities", label: "Hoạt động", hoverColor: "hover:bg-yellow-100 hover:text-yellow-900" },
  { type: "link", href: "/partnership", label: "Hợp tác với MONA", hoverColor: "hover:bg-indigo-100 hover:text-indigo-900" },
];

// Reusable navigation link component
const NavLink = ({ href, label, hoverColor }: { href: string; label: string; hoverColor?: string }) => (
  <NavigationMenuLink asChild>
    <Link
      href={href}
      className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors ${hoverColor || 'hover:bg-gray-100 hover:text-gray-900'} focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 text-[16px]`}
    >
      {label}
    </Link>
  </NavigationMenuLink>
);

// Reusable dropdown content component
const BlogDropdownContent = ({ items, hoverColor }: { items: Array<{ href: string; label: string }>; hoverColor?: string }) => (
  <NavigationMenuContent className="animate-in slide-in-from-top-2 duration-300 min-w-[220px] w-[220px] p-0">
    <ul className="flex flex-col gap-1 p-2">
      {items.map((item, index) => (
        <li key={index}>
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

const Header = ({ className }: { className?: string }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock search suggestions
  const searchSuggestions = [
    "Thiết kế website",
    "Digital Marketing",
    "SEO",
    "Hosting",
    "Domain",
    "Bảo mật website",
    "Tối ưu hiệu suất",
    "Responsive design"
  ];

  const filteredSuggestions = searchSuggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className={cn("border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-1">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <BrandLogo className="h-12" />
          </Link>

          {/* Navigation Menu */}
          <div className="flex items-center justify-between gap-1">

            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                {navigationConfig.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    {item.type === "link" ? (
                      <NavLink href={item.href!} label={item.label!} hoverColor={item.hoverColor} />
                    ) : item.type === "dropdown" ? (
                      item.dropdownType === "services" ? (
                        <>
                          <NavigationMenuTrigger
                            className={`after:hidden [&>svg]:hidden [&>svg]:!hidden ${item.hoverColor}`}
                            style={{ '--tw-after-content': 'none' } as React.CSSProperties}
                          >
                            {item.trigger}
                          </NavigationMenuTrigger>
                          <ServicesDropdown />
                        </>
                      ) : (
                        <>
                          <NavigationMenuTrigger
                            className={`after:hidden [&>svg]:hidden [&>svg]:!hidden ${item.hoverColor}`}
                            style={{ '--tw-after-content': 'none' } as React.CSSProperties}
                          >
                            {item.trigger}
                          </NavigationMenuTrigger>
                          <BlogDropdownContent items={item.items!} hoverColor={item.hoverColor} />
                        </>
                      )
                    ) : null}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          {/* Divider */}
          <div className="w-px h-8 bg-gray-300 mx-2"></div>
            {/* Search Button */}
            <div className="relative">
              <Button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 hover:text-gray-800"
                aria-label="Tìm kiếm"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="w-5 h-5" />
              </Button>

              {/* Search Dropdown */}
              {isSearchOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 w-80 z-50">
                  <div className="p-3 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 text-sm outline-none border-none bg-transparent"
                        autoFocus
                      />
                    </div>
                  </div>
                  
                  {/* Search Suggestions */}
                  {searchQuery && filteredSuggestions.length > 0 && (
                    <div className="max-h-48 overflow-y-auto">
                      {filteredSuggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          className="w-full text-left px-3 py-2 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 text-sm"
                          onClick={() => {
                            setSearchQuery(suggestion);
                            setIsSearchOpen(false);
                            // TODO: Navigate to search results
                            console.log("Search for:", suggestion);
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <Search className="w-3 h-3 text-gray-400" />
                            <span className="text-gray-700">{suggestion}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {/* No results */}
                  {searchQuery && filteredSuggestions.length === 0 && (
                    <div className="p-3 text-center text-gray-500 text-sm">
                      Không tìm thấy kết quả cho "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          

          
          <div className="">
            HostLine
          </div>
        </div>
      </div>


    </header>
  );
};

export default Header; 