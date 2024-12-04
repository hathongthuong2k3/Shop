import { useEffect, useState } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
  { href: "/laptop", name: "Laptop", imageUrl: "/laptop.jpg" },
  { href: "/pc-maytinhban", name: "PC - Máy tính bàn", imageUrl: "/pc.jpg" },
  { href: "/chuot", name: "Chuột", imageUrl: "/chuot.jpg" },
  { href: "/banphim", name: "Bàn phím", imageUrl: "/banphim.jpg" },
  { href: "/tainghe", name: "Tai nghe", imageUrl: "/tainghe.jpg" },
  { href: "/linhkien", name: "Linh kiện máy tính", imageUrl: "/linhkien.jpg" },
  { href: "/thietbikhac", name: "Thiết bị khác", imageUrl: "/thietbikhac.jpg" },
  { href: "/dichvusuachua", name: "Dịch vụ sửa chữa", imageUrl: "/dichvusuachua.jpg" },
  { href: "/khuyenmai", name: "Sản phẩm khuyến mãi", imageUrl: "/sanphamkhuyenmai.jpg" },
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  // Open modal
  const openModal = (title, content) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchFeaturedProducts();
  }, [fetchFeaturedProducts]);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Banner Section */}
      <div className="relative w-full">
        <img
          src="banner.jpg"
          alt="Promotion Banner"
          className="w-full h-90 object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h2 className="text-3xl sm:text-4xl text-white font-bold">
            Cung cấp Laptop, PC và các thiết bị, phụ kiện uy tín chất lượng.
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4">
          Các loại sản phẩm
        </h1>
        <p className="text-center text-xl text-gray-300 mb-12">
          Với các ưu đãi khủng và dịch vụ tốt nhất
        </p>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>

        {/* Featured Products */}
        {!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}

        {/* SEO Blog Posts */}
				<div className="mt-16">
					<h2 className="text-4xl font-bold text-center text-emerald-400 mb-8">
						Cẩm nang chọn mua sản phẩm máy tính
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Blog Post 1 */}
						<div className="bg-gray-800 p-6 rounded-lg shadow-lg">
							<img
								src="chonlaptop.jpg"
								alt="Hướng dẫn chọn Laptop"
								className="w-full h-48 object-cover rounded-lg mb-4"
							/>
							<h3 className="text-xl font-semibold text-emerald-400 mb-4">
								Hướng dẫn chọn Laptop phù hợp với nhu cầu
							</h3>
							<p className="text-gray-300 mb-4">
							Laptop là thiết bị không thể thiếu trong công việc, học tập và giải trí. Khi chọn mua laptop, bạn cần xác định rõ nhu cầu sử dụng. Nếu chỉ dùng để duyệt web, soạn thảo văn bản, một chiếc laptop tầm trung là đủ. Tuy nhiên, nếu bạn chơi game hoặc làm việc với đồ họa, hãy chọn laptop với cấu hình mạnh mẽ, vi xử lý và card đồ họa tốt. Kích thước laptop cũng quan trọng: nếu di chuyển nhiều, laptop 11-13 inch sẽ tiện lợi, còn 15-17 inch phù hợp cho công việc đòi hỏi màn hình lớn. Thời lượng pin và các yếu tố như bàn phím, cổng kết nối cũng cần được xem xét để chọn chiếc laptop phù hợp nhất.
							</p>
						</div>
            {/* Blog Post 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="chonpc.jpg"
                alt="PC Gaming"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                PC Gaming – Tại sao bạn nên chọn máy tính để bàn?
              </h3>
              <p className="text-gray-300 mb-4">
			  PC gaming đem lại trải nghiệm chơi game đỉnh cao. Nếu bạn đang tìm kiếm một chiếc PC để nâng cao trải nghiệm gaming, đây là những lý do tại sao bạn nên chọn máy tính để bàn. Đầu tiên, PC gaming có khả năng nâng cấp dễ dàng, giúp bạn thay thế các linh kiện như card đồ họa, RAM, hoặc ổ cứng khi cần thiết mà không phải mua một chiếc máy mới. Thứ hai, với cấu hình mạnh mẽ, PC gaming mang lại hiệu suất vượt trội, đảm bảo chạy mượt mà các tựa game yêu cầu cấu hình cao, ngay cả ở độ phân giải 4K. Bên cạnh đó, PC gaming còn hỗ trợ các thiết bị ngoại vi như chuột, bàn phím cơ, và tai nghe cao cấp, giúp tăng cường trải nghiệm chơi game. Nếu bạn muốn chơi game ở mức độ chuyên nghiệp, PC gaming chắc chắn là sự lựa chọn lý tưởng.
              </p>
            </div>
            {/* Blog Post 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src="chonchuot.jpg"
                alt="Chọn mua chuột"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                Chọn mua chuột - Những yếu tố quan trọng cần lưu ý
              </h3>
              <p className="text-gray-300 mb-4">
			  Chuột là thiết bị quan trọng trong việc sử dụng máy tính, từ công việc văn phòng cho đến chơi game. Khi chọn mua một chiếc chuột, bạn cần xem xét một số yếu tố để đảm bảo sự thoải mái và hiệu suất cao nhất. Đầu tiên là kiểu dáng: chuột công thái học giúp giảm mỏi tay khi sử dụng lâu, trong khi chuột dành cho game thủ thường có thiết kế đặc biệt để hỗ trợ các thao tác nhanh chóng và chính xác. Thứ hai là độ phân giải (DPI): chuột có DPI cao cho phép di chuyển con trỏ mượt mà hơn, đặc biệt là khi chơi game hoặc thiết kế đồ họa. Cuối cùng, nếu bạn thường xuyên di chuyển, chuột không dây sẽ mang lại sự tiện lợi, nhưng nếu bạn cần độ chính xác cao nhất, chuột có dây vẫn là lựa chọn tốt hơn. Hãy chọn chuột phù hợp với nhu cầu và thói quen sử dụng của bạn để tối ưu hóa hiệu quả công việc và giải trí.
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-16 bg-gray-800 p-10 rounded-lg">
          <h2 className="text-3xl font-bold text-center text-emerald-400 mb-8">
            Về shopmaytinh.vn
          </h2>
          <p className="text-gray-300 text-lg mb-4">
            Chúng tôi chuyên cung cấp các sản phẩm công nghệ cao cấp, từ laptop, PC đến các thiết bị ngoại vi như chuột, bàn phím, tai nghe, và linh kiện máy tính. Với cam kết chất lượng và dịch vụ tận tâm, shopmaytinh.vn là địa chỉ uy tín cho những ai yêu thích công nghệ.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* About Image 1 */}
            <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
              <img
                src="chinhhang.jpg"
                alt="Chất lượng chính hãng"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-300 text-lg">
                Chúng tôi cam kết cung cấp các sản phẩm chính hãng, chất lượng vượt trội để đáp ứng nhu cầu của bạn.
              </p>
            </div>
            {/* About Image 2 */}
            <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
              <img
                src="hotrokhachhang.jpg"
                alt="Dịch vụ hỗ trợ khách hàng"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-300 text-lg">
                Chúng tôi luôn sẵn sàng hỗ trợ bạn với dịch vụ chăm sóc khách hàng tận tình, giúp bạn giải đáp mọi thắc mắc.
              </p>
            </div>
            {/* About Image 3 */}
            <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
              <img
                src="baohanh.jpg"
                alt="Chế độ bảo hành"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-300 text-lg">
                Mọi sản phẩm đều được bảo hành chính hãng, mang đến cho bạn sự yên tâm tuyệt đối khi mua sắm tại chúng tôi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
