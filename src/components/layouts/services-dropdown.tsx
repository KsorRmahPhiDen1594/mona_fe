import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import "@/app/globals.css";

type Service = {
  href: string;
  title: string;
  description?: string;
  image?: string;
};

type ServiceCategories = Record<string, Service[]>;

const serviceCategories: ServiceCategories = {
  "BẠN ĐANG MUỐN KINH DOANH DỊCH VỤ": [
    {
      href: "/dich-vu-seo",
      title: "Dịch vụ SEO",
      description: "Tìm kiếm các traffic từ các khách hàng tìm năng. Nhu cầu sẵn có",
      image: "/placeholder-seo.jpg",
    },
    {
      href: "/quay-phim-gioi-thieu-doanh-nghiep",
      title: "Quay video doanh nghiệp",
      description: "Thu hút các sự chú ý của khách hàng với video chất lượng, nâng tầm uy tín doanh nghiệp",
      image: "/placeholder-video.jpg",
    },
    {
      href: "/chup-anh-profile-cong-ty",
      title: "Chụp hình doanh nghiệp chuyên nghiệp",
      description: "Xây dựng hình ảnh chuyên nghiệp trong mắt khách hàng",
      image: "/placeholder-photo.jpg",
    },
    {
      href: "//thiet-ke-website-tai-hcm",
      title: "Thiết kế website",
      description: "Một trang web cần vừa đẹp vừa thuyết phục khách hàng",
      image: "/placeholder-website.jpg",
    },
    {
      href: "/thiet-ke-landing-page",
      title: "Thiết kế landing page",
      description: "Theo mục đích riêng cho từng chiến dịch",
      image: "/placeholder-landing.jpg",
    },
    {
      href: "/mau-website",
      title: "Website sẵn có",
      description: "Tiêu chuẩn cao, tiện lợi và phát triển nhanh",
      image: "/placeholder-ready.jpg",
    },
    {
      href: "/cloud-hosting",
      title: "Cloud Hosting",
      description: "Hệ Thống hosting mạnh mẽ và bảo mật toàn diện",
      image: "/placeholder-hosting.jpg",
    },
    {
      href: "/email-doanh-nghiep",
      title: "Email doanh nghiệp",
      description: "Tạo sự uy tín, chuyên nghiệp trong mắt khách hàng",
      image: "/placeholder-email.jpg",
    },
    {
      href: "/dang-ky-ten-mien",
      title: "Đăng ký tên miền",
      description: "Sở hữu ngay tên miền \"ĐỘC LẠ\" cho doanh nghiệp",
      image: "/placeholder-domain.jpg",
    },
  ],
  "BẠN ĐANG BÁN HÀNG": [
    {
      href: "/thiet-ke-website-ban-hang",
      title: "Thiết kế website bán hàng",
      description: "Tăng chuyển đổi khách cho doanh nghiệp của bạn",
      image: "/placeholder-ecommerce.jpg",
    },
    {
      href: "/mau-web-danh-muc/mau-web-ban-hang/?linh-vuc=mau-web-ban-hang",
      title: "Mẫu website bán hàng",
      description: "Website tiêu chuẩn cao, tiện lợi và triển khai nhanh chóng",
      image: "/placeholder-template.jpg",
    },
    {
      href: "/cloud-hosting",
      title: "Cloud Hosting",
      description: "Hệ Thống hosting mạnh mẽ và bảo mật toàn diện",
      image: "/placeholder-hosting.jpg",
    },
    {
      href: "/mona-ecommerce",
      title: "Phần mềm quản lý bán hàng",
      description: "Tự động hóa quy trình bán hàng, hoạt động kinh doanh tối ưu",
      image: "/placeholder-software.jpg",
    },
    {
      href: "/phan-mem-quan-ly-kho-bai-container",
      title: "Phần mềm quản lý kho",
      image: "/placeholder-warehouse.jpg",
    },
    {
      href: "/phan-mem-quan-ly-ban-hang",
      title: "Phần mềm quản bán sỉ",
      image: "/placeholder-wholesale.jpg",
    },
    {
      href: "/phan-mem-quan-ly-ban-hang",
      title: "Tích hợp máy in, tích hợp máy chấm công",
      image: "/placeholder-integration.jpg",
    },
    {
      href: "/tich-hop-thanh-toan-visa-vao-website",
      title: "Liên kết cổng thanh toán online",
      image: "/placeholder-payment.jpg",
    },
    {
      href: "/phan-mem-quan-ly-ban-hang",
      title: "Phần mềm quản lý đại lý",
      image: "/placeholder-agency.jpg",
    },
    {
      href: "/dich-vu-seo",
      title: "Dịch vụ SEO",
      description: "Tìm kiếm các traffic từ các khách hàng tìm năng. Nhu cầu sẵn có",
      image: "/placeholder-seo.jpg",
    },
    {
      href: "/quay-phim-gioi-thieu-doanh-nghiep",
      title: "Quay video doanh nghiệp",
      description: "Thu hút các sự chú ý của khách hàng với video chất lượng, nâng tầm uy tín doanh nghiệp",
      image: "/placeholder-video.jpg",
    },
    {
      href: "/dich-vu-xay-kenh-tiktok",
      title: "Xây dựng thương hiệu",
      description: "Tạo sức hút với hình ảnh, câu chuyện ghi dấu ấn trong tâm trí khách hàng",
      image: "/placeholder-brand.jpg",
    },
  ],
  "GIẢI PHÁP PHẦN MỀM": [
    {
      href: "/nhtq/?_gl=1*7n3fqc*_gcl_au*MTg0MjY2MTQzNS4xNzUwNDM0NzI3Ljc5ODc3MzEyOS4xNzUxMDQ5MzMzLjE3NTEwNTE2MTA.*_ga*MTYxMTI1ODc0LjE3NTA0MzQ3Mjc.*_ga_RD0BJPKRTG*czE3NTE3MzIyODIkbzE5JGcxJHQxNzUxNzM3MjA1JGo0NCRsMCRoMA..",
      title: "Hệ thống NHTQ",
      description: "Đáp ứng toàn bộ nghiệp vụ chuyển Trung - Việt",
      image: "/placeholder-nhtq.jpg",
    },
    {
      href: "/phan-mem-dao-tao-noi-bo/",
      title: "MONA SHILLHUB",
      description: "Phần mềm đào tạo nội bộ",
      image: "/placeholder-training.jpg",
    },
    {
      href: "/select-trial",
      title: "nhahang AI",
      description: "Phần mềm quản lý nhà hàng, quán ăn",
      image: "/placeholder-restaurant.jpg",
    },
    {
      href: "/edutech/?_gl=1*31e6aw*_gcl_au*MTg0MjY2MTQzNS4xNzUwNDM0NzI3Ljc5ODc3MzEyOS4xNzUxMDQ5MzMzLjE3NTEwNTE2MTA.*_ga*MTYxMTI1ODc0LjE3NTA0MzQ3Mjc.*_ga_RD0BJPKRTG*czE3NTE3MzIyODIkbzE5JGcxJHQxNzUxNzM3NTExJGo2MCRsMCRoMA..",
      title: "Giải pháp cho toàn ngành LMS",
      image: "/placeholder-lms.jpg",
    },
    {
      href: "/phan-mem-quan-ly-tiem-vang",
      title: "Giải pháp cphần mềm bán vàng, kim cương, ngoại tệ và cầm đồ",
      image: "/placeholder-gold.jpg",
    },
    {
      href: "/dich-vu-thiet-ke-phan-mem-theo-yeu-cau",
      title: "Lập trình phần mềm theo yêu cầu",
      image: "/placeholder-custom.jpg",
    },
  ],
  "HẠ TẦNG HOSTING, VPS": [
    {
      href: "/dang-ky-ten-mien",
      title: "Domain riêng",
      description: "Sở hữu ngay tên miền \"ĐỘC LẠ\" cho doanh nghiệp",
      image: "/placeholder-domain.jpg",
    },
    {
      href: "/email-doanh-nghiep",
      title: "Email doanh nghiệp",
      description: "Tạo dựng sự uy tín, chuyên nghiệp trong mắt khách hàng",
      image: "/placeholder-email.jpg",
    },
    {
      href: "/mua-ssl",
      title: "SSL",
      description: "tăng cường bảo mật và uy tín hơn trong mắt khách hàng",
      image: "/placeholder-ssl.jpg",
    },
    {
      href: "/wordpress-hosting",
      title: "WordPress Hosting",
      description: "Giải pháp hạ tầng phù hợp với WordPress",
      image: "/placeholder-wordpress.jpg",
    },
    {
      href: "/lms-hosting",
      title: "Elearning Hosting",
      description: "Giải pháp hạ tầng dành riêng cho khách hàng ngành giáo dục",
      image: "/placeholder-elearning.jpg",
    },
    {
      href: "/thue-cho-dat-may-chu",
      title: "Dịch vụ Co-Location",
      description: "Giải pháp cho thuê địa chỉ lưu trữ an toàn, bảo mật và đội ngũ theo dõi 24/7",
      image: "/placeholder-colocation.jpg",
    },
    {
      href: "/chan-download-video",
      title: "Video Protection",
      description: "Giải pháp hạ tầng dành riêng để lưu trữ kho dữ liệu video khổng lồ",
      image: "/placeholder-video-protection.jpg",
    },
    {
      href: "/cloud-hosting",
      title: "MONA Cloud Hosting",
      description: "Tốc độ tải dưới 3s, uptime 99.99%, bảo mật website hoạt động",
      image: "/placeholder-cloud.jpg",
    },
    {
      href: "/vps-linux",
      title: "MONA LINUX VPS",
      description: "Giải pháp hạ tầng cho phát triển web, ứng dụng trên Linux",
      image: "/placeholder-linux.jpg",
    },
    {
      href: "/lien-he",
      title: "Dịch vụ sao lưu dữ liệu",
      description: "Giải pháp bảo vệ dữ liệu khỏi các mối nguy hại",
      image: "/placeholder-backup.jpg",
    },
    {
      href: "/mona-drm-chong-quay-man-hinh",
      title: "Digital Rights Management",
      description: "Giải pháp bảo vệ video và chất xám của bạn",
      image: "/placeholder-drm.jpg",
    },
    {
      href: "/ecommerce-hosting",
      title: "Ecommerce Hosting",
      description: "Giải pháp hạ tầng cho doanh nghiệp bán hàng",
      image: "/placeholder-ecommerce-hosting.jpg",
    },
    {
      href: "/vps-windows",
      title: "MONA Windows VPS",
      description: "Giải pháp hạ tầng cho phát triển web, ứng dụng trên Windows",
      image: "/placeholder-windows.jpg",
    },
    {
      href: "/quan-tri-may-chu-la-gi",
      title: "Cài đặt, quản trị server",
      description: "Giải pháp quản lý server hiệu quả, tối ưu chi phí",
      image: "/placeholder-server.jpg",
    },
    
  ],
  "BẠN LÀ MỘT GIẢNG VIÊN KINH DOANH KHÓA HỌC": [
    {
      href: "/giao-duc/thiet-ke-website-ban-khoa-hoc-online",
      title: "MONA E-Learning",
      description: "Hệ thống website đầy đủ tính năng để bán một khóa học thành công",
      image: "/placeholder-elearning-system.jpg",
    },
    {
      href: "/learn/auth",
      title: "Khóa học kinh doanh khóa học",
      description: "30+ Bài giảng Miễn phí giúp bạn bán khóa học hoàn toàn tự động",
      image: "/placeholder-course.jpg",
    },
    {
      href: "/video-marketing-course",
      title: "Video Marketing cho giảng viên",
      description: "Tạo video bán hàng hiệu quả cho khóa học",
      image: "/placeholder-video-marketing.jpg",
    },
    {
      href: "/instructor-branding",
      title: "Xây dựng thương hiệu cá nhân",
      image: "/placeholder-personal-brand.jpg", // Item cuối chỉ có ảnh, không có description
    },
  ],
};

const ServicesDropdown = () => {
  const [activeTab, setActiveTab] = useState<string>(Object.keys(serviceCategories)[0]);

  return (
    <div className="relative">
      <NavigationMenuContent
        className="animate-in slide-in-from-top-2 duration-300 fixed top-full z-50"
        style={{
          position: "fixed",
          top: "100%",
          left: "0",
          right: "0",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
          zIndex: 50,
        }}
      >
        <div
          className="bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg border-t border-border"
          style={{
            width: "100vw",
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
          }}
        >
          <div className="px-6 py-4">
            {/* Tab buttons */}
            <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
              {Object.keys(serviceCategories).map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`px-4 py-2 rounded-md text-sm whitespace-nowrap transition-colors font-medium ${
                    activeTab === category
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Services grid - 4 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {(serviceCategories[activeTab] as Service[]).map((service: Service, index: number) => {
                const isLastItem = index === serviceCategories[activeTab].length - 1;
                const hasOnlyImage = service.image && !service.description;
                
                return (
                  <Link
                    key={`${service.href}-${index}`}
                    href={service.href}
                    className="group"
                  >
                    <div className={`bg-card rounded-lg border hover:shadow-lg transition-all duration-300 hover:border-primary/30 group-hover:bg-accent/5 overflow-hidden ${
                      hasOnlyImage ? 'flex flex-col items-center justify-center p-6' : 'p-4'
                    }`}>
                      {/* Layout với ảnh ngang (bên trái) + text (bên phải) */}
                      {service.image && !hasOnlyImage && (
                        <div className="flex items-start space-x-3">
                          {/* Image */}
                          <div className="relative w-16 h-12 flex-shrink-0 rounded-md overflow-hidden">
                            <Image
                              src={service.image ?? ""}
                              alt={service.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                              {service.title}
                            </h3>
                            {service.description && (
                              <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                {service.description}
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Layout đặc biệt cho item chỉ có ảnh (ảnh ở giữa) */}
                      {hasOnlyImage && (
                        <div className="text-center">
                          <div className="relative w-20 h-20 mx-auto mb-3 rounded-lg overflow-hidden">
                            <Image
                              src={service.image ?? ""}
                              alt={service.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <h3 className="text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                        </div>
                      )}

                      {/* Layout cho item không có ảnh */}
                      {!service.image && (
                        <div>
                          <h3 className="text-sm font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          {service.description && (
                            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                              {service.description}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </NavigationMenuContent>
    </div>
  );
};

export default ServicesDropdown;