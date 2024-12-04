import { ShoppingCart, UserPlus, LogIn, LogOut, Lock, User } from "lucide-react"; // Import icon User
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const { user, logout } = useUserStore();
  const isAdmin = user?.role === "admin";
  const { cart } = useCartStore();

  const categories = [
    { href: "/category/laptop", name: "Laptop" },
    { href: "/category/pc-maytinhban", name: "PC - Máy tính bàn" },
    { href: "/category/chuot", name: "Chuột" },
    { href: "/category/banphim", name: "Bàn phím" },
    { href: "/category/tainghe", name: "Tai nghe" },
    { href: "/category/linhkien", name: "Linh kiện máy tính" },
    { href: "/category/thietbikhac", name: "Thiết bị khác" },
    { href: "/category/dichvusuachua", name: "Dịch vụ sửa chữa" },
    { href: "/category/khuyenmai", name: "Sản phẩm khuyến mãi" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-emerald-400 items-center space-x-2 flex">
            shopmaytinh.vn
          </Link>

          <nav className="flex flex-wrap items-center gap-4">
            <Link to={"/"} className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out">
              Trang chủ
            </Link>

            {/* Dropdown for Categories */}
            <div
              ref={menuRef}
              className="relative"
            >
              <button
                className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
                onClick={() => setIsMenuOpen(!isMenuOpen)}  // Toggle menu khi click
              >
                Danh mục sản phẩm
              </button>
              {isMenuOpen && (
                <div className="absolute left-0 bg-gray-800 text-white rounded-lg shadow-lg w-48 mt-2">
                  <ul>
                    {categories.map((category) => (
                      <li key={category.name}>
                        <Link
                          to={category.href}
                          className="block px-4 py-2 text-sm hover:bg-emerald-600 transition duration-300"
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {user && (
              <Link
                to={"/cart"}
                className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out"
              >
                <ShoppingCart className="inline-block mr-1 group-hover:text-emerald-400" size={20} />
                <span className="hidden sm:inline">Giỏ hàng</span>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out">
                    {cart.length}
                  </span>
                )}
              </Link>
            )}

            {isAdmin && (
              <Link
                className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center"
                to={"/secret-dashboard"}
              >
                <Lock className="inline-block mr-1" size={18} />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            )}

            {user ? (
              <div className="relative group text-white flex items-center">
                <User className="mr-2 cursor-pointer hover:text-emerald-400" size={20} />
                
                {/* Hiển thị thông tin người dùng khi hover */}
                <div className="absolute top-8 right-0 w-48 bg-gray-800 text-white rounded-lg p-4 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p><strong>Họ và tên:</strong> {user.name}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                </div>

                {/* Nút đăng xuất */}
                <button
                  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                  onClick={logout}
                >
                  <LogOut size={18} />
                  <span className="hidden sm:inline ml-2">Đăng xuất</span>
                </button>
              </div>
            ) : (
              <>
                <Link
                  to={"/signup"}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                >
                  <UserPlus className="mr-2" size={18} />
                  Đăng ký
                </Link>
                <Link
                  to={"/login"}
                  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out"
                >
                  <LogIn className="mr-2" size={18} />
                  Đăng nhập
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
