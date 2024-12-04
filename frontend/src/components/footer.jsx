import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Về chúng tôi</h3>
            <p className="text-gray-400 text-sm">
              Chúng tôi cung cấp các sản phẩm công nghệ chất lượng cao, bao
              gồm laptop, PC, chuột, bàn phím, và các linh kiện máy tính, với
              cam kết mang đến sự hài lòng cho khách hàng.
            </p>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hỗ trợ khách hàng</h3>
            <ul className="space-y-2">
              <li>
                <a href="/faq" className="text-gray-400 hover:text-emerald-400">
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a href="/shipping" className="text-gray-400 hover:text-emerald-400">
                  Chính sách vận chuyển
                </a>
              </li>
              <li>
                <a href="/return" className="text-gray-400 hover:text-emerald-400">
                  Chính sách đổi trả
                </a>
              </li>
              <li>
                <a href="/warranty" className="text-gray-400 hover:text-emerald-400">
                  Chính sách bảo hành
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Email: </span>
                <a href="mailto:support@shopmaytinh.vn" className="text-emerald-400">
                  support@shopmaytinh.vn
                </a>
              </li>
              <li>
                <span className="text-gray-400">Điện thoại: </span>
                <a href="tel:+84912345678" className="text-emerald-400">
                  +84 91 234 5678
                </a>
              </li>
              <li>
                <span className="text-gray-400">Địa chỉ: </span>
                123 Đường ABC, Quận 1, TP.HCM
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Theo dõi chúng tôi</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="/facebook-icon.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="/twitter-icon.svg" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img src="/youtube-icon.svg" alt="YouTube" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-sm text-gray-400">
            &copy; 2024 Shop Máy Tính. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
