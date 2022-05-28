import React from "react";
import logo from "./react.svg";
import "./Home.css";
import Post from "./components";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo CrowdWork" />
          <h1>Giới thiệu về CrowdWork</h1>
        </div>
        <p className="Home-intro">
          Chào mừng bạn đến với CrowdWork - Nền tảng tìm kiếm và làm việc online
          (remote working) tại FPT Software. Nền tảng CrowdWork được phát triển
          bởi FPT Digital Processing Services (FPT DPS) với sứ mệnh tạo nên cộng
          đồng freelancers lớn mạnh ở khắp mọi nơi trên thế giới, không phân
          biệt thời gian và khoảng cách trong trong nhiều lĩnh vực khác nhau như
          nhập liệu, xử lý dữ liệu, thu thập dữ liệu cho máy học, trí tuệ nhân
          tạo… Tham gia thực hiện công việc thông qua nền tảng CrowdWork rất
          thích hợp để bạn có thể dùng thời gian rảnh rỗi để kiếm thêm thu nhập.
          Chỉ cần một chiếc máy tính với đường truyền Internet ổn định là bạn có
          thể sẵn sàng để tham gia với chúng tôi. Thời gian làm việc linh hoạt,
          quy trình thủ tục đơn giản nhưng vẫn tuân thủ pháp luật, đảm bảo quyền
          lợi hợp pháp của freelancer tham gia hợp tác với sự bảo trợ của tập
          đoàn công nghệ FPT. FPT Digital Processing Services là đơn vị mở rộng
          của FPT Software từ phát triển phần mềm sang thêm lĩnh vực BPO
          (Business Process Outsourcing). Các hoạt… động chính bao gồm: sản
          xuất, cung cấp các sản phẩm, dịch vụ vận hành và bảo trì phần mềm; tư
          vấn và quản trị hệ thống; dịch vụ CNTT… Chúng tôi tập trung vào việc
          cung cấp dịch vụ thuê ngoài quy trình kinh doanh, các dịch vụ làm dữ
          liệu, chuẩn hóa dữ liệu cho máy học và các dịch vụ hỗ trợ chuyển đổi
          số - Digital Transformation (DX) cho khách hàng.
        </p>
        <ul className="Home-resources"></ul>
        <Post />
      </div>
    );
  }
}

export default Home;
