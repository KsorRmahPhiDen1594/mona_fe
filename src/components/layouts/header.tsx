'use client'
import Link from "next/link";
import { cn } from "@/lib/utils";
import BrandLogo from "@/components/layouts/brand-logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { navigationConfig } from "./navigation-config";
import NavLink from "./nav-link";
import BlogDropdown from "./blog-dropdown";
import SearchDropdown from "./search-dropdown";
import HostlineSection from "./hostline-section";
import ServicesDropdown from "@/components/layouts/services-dropdown";

const Header = ({ className }: { className?: string }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
                            className={`text-[16px] after:hidden [&>svg]:hidden [&>svg]:!hidden ${item.hoverColor}`}
                            style={{ '--tw-after-content': 'none' } as React.CSSProperties}
                          >
                            {item.trigger}
                          </NavigationMenuTrigger>
                          <ServicesDropdown />
                        </>
                      ) : (
                        <>
                          <NavigationMenuTrigger
                            className={` text-[16px] after:hidden [&>svg]:hidden [&>svg]:!hidden ${item.hoverColor}`}
                            style={{ '--tw-after-content': 'none' } as React.CSSProperties}
                          >
                            {item.trigger}
                          </NavigationMenuTrigger>
                          <BlogDropdown items={item.items!} hoverColor={item.hoverColor} />
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
            <SearchDropdown isOpen={isSearchOpen} onToggle={() => setIsSearchOpen(!isSearchOpen)} />
          </div>
          <HostlineSection />
        </div>
      </div>
    </header>
  );
};

export default Header; 