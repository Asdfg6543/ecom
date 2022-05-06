import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">Về chúng tôi</h1>
            <p className="lead mb-4">
              FPT là công ty tiên phong chuyển đổi số và dẫn đầu về tư vấn, cung
              cấp, triển khai các dịch vụ, giải pháp công nghệ - viễn thông.
              Chúng tôi đồng hành cùng các khách hàng tại 27 quốc gia và vùng
              lãnh thổ trên toàn cầu hiện thực hóa chiến lược, mục tiêu phát
              triển kinh doanh dựa trên công nghệ. Với kinh nghiệm triển khai dự
              án trên phạm vi toàn cầu trong suốt hơn ba thập kỷ qua, chúng tôi
              giúp khách hàng vượt qua những thách thức, rào cản và đạt được
              hiệu quả cao nhất trong hành trình chuyển đổi số. Dựa trên những
              công nghệ mới nhất trí tuệ nhân tạo, phân tích dữ liệu lớn, điện
              toán đám mây, tự động hóa, kết nối vạn vật…, chúng tôi đưa ra
              những giải pháp, dịch vụ công nghệ tiên tiến giúp khách hàng chủ
              động, linh hoạt thích ứng trong mọi bối cảnh.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Liên hệ chúng tôi
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/about.png"
              alt="About US"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
