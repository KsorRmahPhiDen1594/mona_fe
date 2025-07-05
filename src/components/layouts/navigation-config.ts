import ServicesDropdown from "@/components/layouts/services-dropdown";

// Navigation configuration - dễ chỉnh sửa
export const navigationConfig = [
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