D:\erp_fe\test-main\src\app
│   favicon.ico                              | Biểu tượng favicon hiển thị trên tab trình duyệt
│   globals.scss                            | File CSS/SCSS toàn cục cho kiểu dáng ứng dụng
│   layout.tsx                              | Bố cục chung cho toàn bộ ứng dụng hoặc tuyến đường gốc
│   not-found.tsx                           | Trang hiển thị khi truy cập tuyến đường không tồn tại (404)
│   page.tsx                                | Nội dung chính của trang chủ (home page)
│   robot.txt                               | File robots.txt hướng dẫn công cụ tìm kiếm cách thu thập dữ liệu
│
├───(auth)                                  | Thư mục chứa các tuyến đường liên quan đến xác thực
│   │   layout.tsx                          | Bố cục chung cho các trang xác thực (login, register, v.v.)
│   │
│   ├───login                               | Tuyến đường cho trang đăng nhập
│   │       page.tsx                        | Nội dung chính của trang đăng nhập
│   │
│   ├───refer-mailbox                      | Tuyến đường cho trang xác nhận email hoặc hộp thư giới thiệu
│   │       page.tsx                        | Nội dung chính của trang xác nhận email
│   │
│   ├───register                           | Tuyến đường cho trang đăng ký
│   │       page.tsx                        | Nội dung chính của trang đăng ký
│   │
│   └───_utils                             | Thư mục chứa các thành phần/hàm tiện ích cho xác thực
│           actions.ts                      | Hàm xử lý hành động phía server (server actions) cho xác thực
│           login-form.tsx                  | Thành phần biểu mẫu đăng nhập
│           refer-mailbox.tsx               | Thành phần giao diện cho xác nhận email
│           register-form.tsx               | Thành phần biểu mẫu đăng ký
│           token-verify.tsx                | Thành phần để xác minh token (VD: JWT, email token)
│
├───about-us                               | Thư mục cho trang "Giới thiệu"
│   │   layout.tsx                         | Bố cục chung cho trang giới thiệu
│   │   page.tsx                           | Nội dung chính của trang giới thiệu
│   │
│   └───_utils                             | Thư mục chứa thành phần tiện ích cho trang giới thiệu
│           meet-our-ceo.tsx                | Thành phần hiển thị thông tin về CEO
│           message-from-ceo.tsx            | Thành phần hiển thị thông điệp từ CEO
│
├───api                                    | Thư mục chứa các API route
│   ├───quote                              | API liên quan đến báo giá
│   │   │   route.ts                       | Xử lý yêu cầu API cho báo giá
│   │   │
│   │   └───submit                        | API con để gửi báo giá
│   │           route.ts                   | Xử lý yêu cầu gửi biểu mẫu báo giá
│   │
│   ├───sign-cloudinary-params             | API để ký thông số tải lên Cloudinary
│   │       route.ts                       | Xử lý yêu cầu ký thông số cho Cloudinary
│   │
│   └───stripe                             | API liên quan đến thanh toán Stripe
│       ├───create                         | API để tạo phiên thanh toán
│       │       route.ts                   | Xử lý yêu cầu tạo phiên thanh toán Stripe
│       │
│       ├───verify                        | API để xác minh thanh toán
│       │       route.ts                   | Xử lý yêu cầu xác minh thanh toán Stripe
│       │
│       └───webhook                       | API để xử lý webhook từ Stripe
│               route.ts                   | Xử lý sự kiện webhook từ Stripe
│
├───case-studies                           | Thư mục cho trang các nghiên cứu điển hình
│   │   layout.tsx                         | Bố cục chung cho trang nghiên cứu điển hình
│   │   page.tsx                           | Nội dung chính của trang danh sách nghiên cứu
│   │
│   ├───[slug]                            | Tuyến đường động cho nghiên cứu cụ thể
│   │       page.tsx                       | Nội dung chính của trang nghiên cứu cụ thể
│   │
│   ├───_previous                         | Thư mục cho các nghiên cứu cũ
│   │       layout.tsx                     | Bố cục chung cho trang nghiên cứu cũ
│   │       page.tsx                       | Nội dung chính của trang nghiên cứu cũ
│   │
│   └───_utils                            | Thư mục chứa thành phần tiện ích cho nghiên cứu
│       │   about.tsx                      | Thành phần hiển thị thông tin giới thiệu
│       │   approach.tsx                   | Thành phần mô tả phương pháp
│       │   challenges.tsx                 | Thành phần mô tả thách thức
│       │   clients-reviews.tsx            | Thành phần hiển thị đánh giá từ khách hàng
│       │   feature-card-icon-text.tsx     | Thành phần thẻ tính năng với biểu tượng và văn bản
│       │   hero.tsx                       | Thành phần hero (phần đầu trang) cho nghiên cứu
│       │   our-review.tsx                 | Thành phần hiển thị đánh giá nội bộ
│       │   results.tsx                    | Thành phần mô tả kết quả đạt được
│       │   sections-side-image.tsx        | Thành phần hiển thị nội dung với hình ảnh bên cạnh
│       │
│       └───data                          | Thư mục chứa dữ liệu tĩnh cho nghiên cứu
│               data.tsx                   | Dữ liệu chung cho nghiên cứu
│               data___googleads.tsx       | Dữ liệu nghiên cứu về Google Ads
│               data___googleanalytics.tsx | Dữ liệu nghiên cứu về Google Analytics
│               data___socialmedia.tsx     | Dữ liệu nghiên cứu về mạng xã hội
│               data___uiux.tsx            | Dữ liệu nghiên cứu về UI/UX
│               data___webdev.tsx          | Dữ liệu nghiên cứu về phát triển web
│               data___wordpress.tsx       | Dữ liệu nghiên cứu về WordPress
│
├───checkout                               | Thư mục cho trang thanh toán
│       page.tsx                           | Nội dung chính của trang thanh toán
│
├───contact-us                             | Thư mục cho trang liên hệ
│       actions.ts                         | Hàm server actions xử lý biểu mẫu liên hệ
│       contact-form.tsx                   | Thành phần biểu mẫu liên hệ
│       layout.tsx                         | Bố cục chung cho trang liên hệ
│       loading.tsx                        | Thành phần hiển thị khi trang đang tải
│       page.tsx                           | Nội dung chính của trang liên hệ
│
├───dashboard                              | Thư mục cho trang bảng điều khiển (dashboard)
│       layout.tsx                         | Bố cục chung cho trang dashboard
│       page.tsx                           | Nội dung chính của trang dashboard
│
├───get-a-quote                            | Thư mục cho trang yêu cầu báo giá
│       layout.tsx                         | Bố cục chung cho trang báo giá
│       page.tsx                           | Nội dung chính của trang báo giá
│
├───gigs                                   | Thư mục cho trang danh sách công việc/gói dịch vụ
│   │   page.tsx                           | Nội dung chính của trang danh sách công việc
│   │
│   ├───payment-verify                    | Tuyến đường xác minh thanh toán cho công việc
│   │       page.tsx                       | Nội dung chính của trang xác minh thanh toán
│   │
│   └───_utils                            | Thư mục chứa thành phần tiện ích cho công việc
│           actions.ts                     | Hàm server actions xử lý công việc
│           characteristics.tsx            | Thành phần mô tả đặc điểm công việc
│           gig-card.tsx                   | Thành phần thẻ hiển thị thông tin công việc
│           gigs.tsx                       | Thành phần hiển thị danh sách công việc
│           portfolio.tsx                  | Thành phần hiển thị danh mục công việc
│           skills.tsx                     | Thành phần hiển thị kỹ năng liên quan
│           stripe-payment-button.tsx      | Thành phần nút thanh toán Stripe
│           types.ts                      | Định nghĩa các kiểu dữ liệu TypeScript
│
├───joining                                | Thư mục cho trang tham gia (VD: đăng ký dịch vụ)
│   │   page.tsx                           | Nội dung chính của trang tham gia
│   │
│   ├───end                               | Tuyến đường cho trang kết thúc tham gia
│   │       page.tsx                       | Nội dung chính của trang kết thúc
│   │
│   └───_utils                            | Thư mục chứa thành phần tiện ích cho tham gia
│           actions.ts                     | Hàm server actions xử lý tham gia
│           confetti.tsx                   | Thành phần hiệu ứng confetti (mừng hoàn tất)
│           custom-input.tsx               | Thành phần input tùy chỉnh
│           custom-radio.tsx               | Thành phần radio button tùy chỉnh
│           custom-select.tsx              | Thành phần select dropdown tùy chỉnh
│           data.tsx                       | Dữ liệu tĩnh cho trang tham gia
│           datalayer.tsx                  | Thành phần tích hợp với Google Tag Manager
│           google-ads-form.tsx            | Biểu mẫu cho dịch vụ Google Ads
│           google-analytics-form.tsx      | Biểu mẫu cho dịch vụ Google Analytics
│           hero.section.tsx               | Thành phần hero cho trang tham gia
│           shopify-development-form.tsx   | Biểu mẫu cho dịch vụ phát triển Shopify
│           social-media-paid-ads.tsx      | Thành phần cho quảng cáo trả phí mạng xã hội
│           software-development-form.tsx  | Biểu mẫu cho dịch vụ phát triển phần mềm
│           types.ts                      | Định nghĩa các kiểu dữ liệu TypeScript
│           uiux-form.tsx                  | Biểu mẫu cho dịch vụ UI/UX
│           web-development-form.tsx       | Biểu mẫu cho dịch vụ phát triển web
│           wordpress-development-form.tsx | Biểu mẫu cho dịch vụ phát triển WordPress
│
├───meet-with-yeatiq                       | Thư mục cho trang gặp gỡ (VD: đặt lịch tư vấn)
│   │   page.tsx                           | Nội dung chính của trang gặp gỡ
│   │
│   └───_utils                            | Thư mục chứa thành phần tiện ích
│       ├───components                    | Thư mục con chứa các thành phần
│       │       data-layer-pusher-link.tsx | Thành phần tích hợp liên kết với data layer
│       │       data-layer-pusher.tsx      | Thành phần tích hợp với data layer
│       │
│       └───sections                      | Thư mục chứa các phần giao diện
│               about.tsx                  | Phần giới thiệu
│               bottom.tsx                 | Phần chân trang
│               calendly.tsx               | Thành phần tích hợp với Calendly (đặt lịch)
│               cta.tsx                    | Thành phần kêu gọi hành động
│               free-online-dialogue.tsx   | Thành phần cho hội thoại trực tuyến miễn phí
│               hero.tsx                   | Thành phần hero cho trang
│               proof.tsx                  | Thành phần hiển thị bằng chứng xã hội
│               review.tsx                 | Thành phần hiển thị đánh giá
│               visuals.tsx                | Thành phần hiển thị hình ảnh minh họa
│
├───privacy-policy                         | Thư mục cho trang chính sách bảo mật
│       page.tsx                           | Nội dung chính của trang chính sách bảo mật
│
├───quote                                  | Thư mục cho trang báo giá chi tiết
│   │   layout.tsx                         | Bố cục chung cho trang báo giá
│   │   page.tsx                           | Nội dung chính của trang báo giá
│   │
│   ├───confirm                           | Tuyến đường xác nhận báo giá
│   │       page.tsx                       | Nội dung chính của trang xác nhận
│   │
│   ├───faq                               | Tuyến đường cho trang FAQ
│   │       page.tsx                       | Nội dung chính của trang FAQ
│   │       [question].tsx                 | Tuyến đường động cho câu hỏi FAQ cụ thể
│   │
│   ├───_components                      | Thư mục chứa thành phần giao diện
│   │       additional-services-table.tsx  | Bảng hiển thị các dịch vụ bổ sung
│   │       faq-section.tsx                | Phần hiển thị FAQ
│   │       modules-selection.tsx          | Thành phần chọn module/dịch vụ
│   │       pricing-summary.tsx            | Thành phần tóm tắt giá
│   │       quote-header.tsx               | Thành phần tiêu đề báo giá
│   │       qupte-footer.tsx               | Thành phần chân trang báo giá
│   │       user-count-selector.tsx        | Thành phần chọn số lượng người dùng
│   │
│   └───_utils                            | Thư mục chứa tiện ích cho báo giá
│           data.tsx                       | Dữ liệu tĩnh cho trang báo giá
│
├───reviews                                | Thư mục cho trang đánh giá
│   │   layout.tsx                         | Bố cục chung cho trang đánh giá
│   │   page.tsx                           | Nội dung chính của trang đánh giá
│   │
│   └───post                              | Tuyến đường để đăng đánh giá
│       │   page.tsx                       | Nội dung chính của trang đăng đánh giá
│       │
│       └───_utils                       | Thư mục chứa tiện ích cho đánh giá
│               actions.ts                 | Hàm server actions xử lý đăng đánh giá
│               cld-upload-widget.tsx      | Thành phần widget tải lên Cloudinary
│               delete-review.tsx          | Thành phần xóa đánh giá
│               form.tsx                   | Thành phần biểu mẫu đánh giá
│               input.tsx                  | Thành phần input cho biểu mẫu đánh giá
│
├───scale-with-ads                         | Thư mục cho trang quảng cáo (tăng trưởng qua quảng cáo)
│   │   page.tsx                           | Nội dung chính của trang quảng cáo
│   │
│   ├───_assets                           | Thư mục chứa tài nguyên tĩnh
│   │       arrow-line.tsx                 | Thành phần biểu tượng mũi tên
│   │       calendar-time-icon.tsx         | Thành phần biểu tượng lịch và thời gian
│   │       coin-icon.tsx                  | Thành phần biểu tượng đồng tiền
│   │       transperancy-icon.tsx          | Thành phần biểu tượng minh bạch
│   │
│   └───_components                      | Thư mục chứa thành phần giao diện
│           achieve-section-two.tsx        | Phần hiển thị thành tựu (phần 2)
│           achieve-section.tsx            | Phần hiển thị thành tựu
│           advertisement-cta.tsx          | Thành phần kêu gọi hành động quảng cáo
│           brands-section.tsx             | Phần hiển thị thương hiệu đối tác
│           comparison-copy-section.tsx    | Phần so sánh văn bản
│           comparison-table-section.tsx   | Phần bảng so sánh
│           cta-form.tsx                   | Biểu mẫu kêu gọi hành động
│           expire-section.tsx             | Phần hiển thị thời hạn
│           fail-fix-section.tsx           | Phần mô tả cách khắc phục thất bại
│           faq-section.tsx                | Phần hiển thị FAQ
│           footer-section.tsx             | Phần chân trang
│           hero-section.tsx               | Phần hero cho trang quảng cáo
│           refund-policy-terms.tsx        | Thành phần điều khoản hoàn tiền
│           risk-free-section.tsx          | Phần mô tả không rủi ro
│           terms-and-condition-dialog.tsx | Thành phần hộp thoại điều khoản
│           testimonial-aside.tsx          | Thành phần hiển thị đánh giá bên lề
│           testimonials-section.tsx       | Phần hiển thị đánh giá khách hàng
│           three-months-challenge-section.tsx | Phần thử thách 3 tháng
│           why-safe-section.tsx           | Phần giải thích tại sao an toàn
│
├───services                               | Thư mục cho trang dịch vụ
│   │   layout.tsx                         | Bố cục chung cho trang dịch vụ
│   │   page.tsx                           | Nội dung chính của trang danh sách dịch vụ
│   │
│   ├───[slug]                            | Tuyến đường động cho dịch vụ cụ thể
│   │       layout.tsx                     | Bố cục chung cho trang dịch vụ cụ thể
│   │       page.tsx                       | Nội dung chính của trang dịch vụ cụ thể
│   │
│   └───_utils                            | Thư mục chứa tiện ích cho dịch vụ
│       │   core-benefits.tsx              | Thành phần hiển thị lợi ích cốt lõi
│       │   ending-funnel.tsx              | Thành phần phễu kết thúc (CTA cuối trang)
│       │   herosection.tsx                | Thành phần hero cho dịch vụ
│       │   limited-offer-section.tsx      | Phần hiển thị ưu đãi giới hạn
│       │   marquee-wra
pper.tsx             | Thành phần hiển thị nội dung cuộn (marquee)
│       │   testimonials.tsx               | Thành phần hiển thị đánh giá
│       │   user-empathy-banner.tsx        | Thành phần banner tạo sự đồng cảm với người dùng
│       │   what-and-why-section.tsx       | Phần mô tả dịch vụ và lý do chọn
│       │
│       └───data                         | Thư mục chứa dữ liệu tĩnh cho dịch vụ
│               data___customweb.tsx      | Dữ liệu cho dịch vụ phát triển web tùy chỉnh
│               data___googleads.tsx      | Dữ liệu cho dịch vụ Google Ads
│               data___googleanalytics.tsx | Dữ liệu cho dịch vụ Google Analytics
│               data___shopify.tsx        | Dữ liệu cho dịch vụ Shopify
│               data___socialmedia.tsx    | Dữ liệu cho dịch vụ mạng xã hội
│               data___software.tsx       | Dữ liệu cho dịch vụ phát triển phần mềm
│               data___uiux.tsx           | Dữ liệu cho dịch vụ UI/UX
│               data___wordpress.tsx      | Dữ liệu cho dịch vụ WordPress
│               services.tsx              | Dữ liệu chung cho tất cả dịch vụ
│
├───terms-and-conditions                   | Thư mục cho trang điều khoản và điều kiện
│   │   page.tsx                          | Nội dung chính của trang điều khoản
│   │
│   └───_partials                        | Thư mục chứa thành phần con
│       └───_components                  | Thư mục chứa thành phần giao diện
│               terms-and-conditions.tsx  | Thành phần hiển thị nội dung điều khoản
│
├───verify                                | Thư mục cho trang xác minh
│       layout.tsx                        | Bố cục chung cho trang xác minh
│       page.tsx                          | Nội dung chính của trang xác minh
│
└───_utils                                | Thư mục chứa tiện ích chung cho ứng dụng
        calendly.tsx                      | Thành phần tích hợp với Calendly
        carousel.tsx                      | Thành phần hiển thị carousel (trình chiếu)
        faq.tsx                           | Thành phần hiển thị FAQ chung
        hero-cta.tsx                      | Thành phần kêu gọi hành động cho hero
        herosection.tsx                   | Thành phần hero chung
        how-we-work.tsx                   | Thành phần mô tả cách hoạt động
        masonry-layout.tsx                | Thành phần bố cục dạng lưới (masonry)
        neetocal.tsx                      | Thành phần tích hợp với công cụ đặt lịch (có thể là NeetoCal)
        our-services.tsx                  | Thành phần hiển thị danh sách dịch vụ
        process.tsx                       | Thành phần mô tả quy trình làm việc
        project-idea-banner.tsx           | Thành phần banner ý tưởng dự án
        testimonial.tsx                   | Thành phần hiển thị đánh giá chung
        video-player.tsx                  | Thành phần phát video