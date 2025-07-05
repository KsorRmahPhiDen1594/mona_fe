import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const ServicesDropdown = () => {
  const services = [
    {
      href: "/services/roadmap",
      title: "MONA thiết kế sẵn lộ trình",
      description: "Lộ trình và giải pháp triển khai cho bạn",
      delay: "delay-75"
    },
    {
      href: "/services/cost-optimization",
      title: "Tối ưu chi phí",
      description: "Giải pháp tiết kiệm chi phí hiệu quả",
      delay: "delay-100"
    },
    {
      href: "/services/seo",
      title: "Dịch vụ SEO",
      description: "Tìm kiếm traffic từ các khách hàng tiềm năng. Nhu cầu sẵn có",
      delay: "delay-150"
    },
    {
      href: "/services/corporate-video",
      title: "Quay video doanh nghiệp",
      description: "Thu hút sự chú ý của khách hàng với video chất lượng, nâng tầm uy tín doanh nghiệp",
      delay: "delay-200"
    },
    {
      href: "/services/corporate-photography",
      title: "Chụp hình doanh nghiệp chuyên nghiệp",
      description: "Xây dựng hình ảnh chuyên nghiệp trong mắt khách hàng",
      delay: "delay-250"
    },
    {
      href: "/services/website-design",
      title: "Thiết kế website",
      description: "Một trang web cần vừa đẹp vừa thuyết phục được khách",
      delay: "delay-300"
    },
    {
      href: "/services/landing-page",
      title: "Thiết kế landing page",
      description: "Theo mục đích riêng cho từng chiến dịch",
      delay: "delay-350"
    },
    {
      href: "/services/ready-website",
      title: "Website sẵn có",
      description: "Tiêu chuẩn cao, tiện lợi và triển khai nhanh",
      delay: "delay-400"
    },
    {
      href: "/services/cloud-hosting",
      title: "Cloud Hosting",
      description: "Hệ thống hosting mạnh mẽ và bảo mật toàn diện",
      delay: "delay-450"
    },
    {
      href: "/services/business-email",
      title: "Email doanh nghiệp",
      description: "Tạo dựng sự uy tín, chuyên nghiệp trong mắt khách hàng",
      delay: "delay-500"
    },
    {
      href: "/services/domain-registration",
      title: "Đăng ký tên miền",
      description: "Sở hữu ngay tên miền \"ĐỘC LẠ\" cho doanh nghiệp",
      delay: "delay-550"
    }
  ];

  return (
    <NavigationMenuContent 
      className="animate-in slide-in-from-top-2 duration-500 fixed top-full z-50"
      style={{
        position: 'fixed',
        top: '100%',
        left: '0',
        right: '0',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        zIndex: 50
      }}
    >
      <div 
        className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg"
        style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)'
        }}
      >
        <div className="px-4 py-8" style={{ maxWidth: '100vw' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={service.href}
                className={`animate-in slide-in-from-top-2 duration-300 ${service.delay}`}
              >
                <NavigationMenuLink asChild>
                  <Link
                    href={service.href}
                    className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105 focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-lg font-semibold leading-none">{service.title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {service.description}
                    </p>
                  </Link>
                </NavigationMenuLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </NavigationMenuContent>
  );
};

export default ServicesDropdown; 