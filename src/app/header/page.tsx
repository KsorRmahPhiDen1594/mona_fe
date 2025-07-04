"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { HiMenu, HiX } from "react-icons/hi"

// Danh sách các mục menu với màu sắc và biểu tượng
const menuItems = [
  { title: "Giới thiệu", href: "/gioi-thieu", color: "text-purple-500", icon: "📘" },
  { title: "Dịch vụ", href: "/dich-vu", color: "text-blue-500", icon: "💼" },
  { title: "Dự án", href: "/du-an", color: "text-orange-500", icon: "🏗️" },
  { title: "Khách hàng", href: "/khach-hang", color: "text-green-500", icon: "👥" },
  { title: "Blog", href: "/blog", color: "text-red-500", icon: "📝" },
  { title: "Hoạt động", href: "/hoat-dong", color: "text-yellow-500", icon: "🎉" },
  { title: "Hợp tác với MONA", href: "/hop-tac", color: "text-pink-500", icon: "🤝" },
]

export function NavigationMenuDemo() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <>
      <header className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-14 lg:h-16">
            
            {/* Logo Section */}
            <div className="flex-shrink-0 w-auto">
              <Link href="/" className="block">
                <Image
                  src="/assets/Logo-Mona.png"
                  alt="MONA.Media logo"
                  width={200}
                  height={32}
                  className="h-6 lg:h-8 w-auto dark:hidden"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation Menu */}
            <NavigationMenu className="hidden lg:flex items-center flex-1 justify-center mx-8">
              <NavigationMenuList className="flex space-x-1 xl:space-x-2">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      asChild
                      className={`${navigationMenuTriggerStyle()} ${item.color} flex items-center gap-1`}
                    >
                      <Link href={item.href}>
                        {item.icon} {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Contact Images Section - Hidden on Mobile, Visible on Desktop */}
            <div className="hidden lg:flex flex-shrink-0 items-center relative">
              <div className="relative flex items-center">
                {/* Mask Group - Background Image */}
                <Link href="/" className="block relative z-10">
                  <Image
                    src="/assets/Mask-Group.png"
                    alt="Mask Group"
                    width={100}
                    height={32}
                    className="h-8 lg:h-9 w-auto dark:hidden"
                  />
                </Link>
                
                {/* Hotline Panda - Positioned below header */}
                <Link
                  href="/"
                  className="block absolute -right-4 lg:-right-12 top-6 lg:top-1 z-20 transition-all duration-300 hover:scale-110 hover:-translate-x-1 lg:hover:-translate-x-2"
                >
                  <Image
                    src="/assets/hotline-panda.png"
                    alt="Hotline panda"
                    width={140}
                    height={82}
                    className="h-10 lg:h-12 w-auto dark:hidden drop-shadow-lg"
                  />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button - React Icons */}
            <div className="lg:hidden">
              <button
                type="button"
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <HiMenu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Background Overlay */}
          <button
            type="button"
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsMobileMenuOpen(false)
              }
            }}
            aria-label="Close mobile menu overlay"
            tabIndex={0}
            style={{ cursor: "pointer" }}
          />
          
          {/* Slide Menu from Left */}
          <div className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <Image
                src="/assets/Logo-Mona.png"
                alt="MONA.Media logo"
                width={120}
                height={20}
                className="h-6 w-auto dark:hidden"
              />
              <button
                type="button"
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <HiX className="h-6 w-6" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="py-4">
              {menuItems.map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`${item.color} flex items-center gap-3 px-6 py-4 hover:bg-gray-50 transition-colors border-l-4 border-transparent hover:border-current`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-lg font-medium">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
