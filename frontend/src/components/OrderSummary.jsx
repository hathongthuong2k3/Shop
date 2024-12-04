import { motion } from "framer-motion";
import { useCartStore } from "../stores/useCartStore";
import { useUserStore } from "../stores/useUserStore";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import axios from "../lib/axios";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const { total, subtotal, coupon, isCouponApplied, cart } = useCartStore();
  const navigate = useNavigate();
  const { user} = useUserStore();
  const savings = subtotal - total;
  const formattedSubtotal = subtotal.toFixed(2);
  const formattedTotal = total.toFixed(2);
  const formattedSavings = savings.toFixed(2);

  const handlePayment = async () => {
    try {
      // Gửi yêu cầu thanh toán tới backend để nhận URL thanh toán VNPay
      const res = await axios.post("/payments/create-checkout-session", {
        userID: user._id,
        amount: total,
        products: cart,
        couponCode: coupon ? coupon.code : null,
      });
  
      const paymentUrl = res.data; // Backend trả về URL thanh toán VNPay
  
      console.log("VNPay Payment URL:", paymentUrl);  // In ra URL thanh toán để kiểm tra
  
      if (!paymentUrl) {
        alert("Lỗi: URL thanh toán không hợp lệ");
        return;
      }
  
      // Điều hướng người dùng đến trang thanh toán VNPay
      window.location.href = paymentUrl;  // Chuyển hướng người dùng đến VNPay
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("Lỗi trong quá trình thanh toán. Vui lòng thử lại.");
    }
  };
  
  

  return (
    <motion.div
      className='space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-4 shadow-sm sm:p-6'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className='text-xl font-semibold text-emerald-400'>Tổng thanh toán</p>

      <div className='space-y-4'>
        <div className='space-y-2'>
          <dl className='flex items-center justify-between gap-4'>
            <dt className='text-base font-normal text-gray-300'>Giá gốc</dt>
            <dd className='text-base font-medium text-white'>${formattedSubtotal}</dd>
          </dl>

          {savings > 0 && (
            <dl className='flex items-center justify-between gap-4'>
              <dt className='text-base font-normal text-gray-300'>Tiết kiệm</dt>
              <dd className='text-base font-medium text-emerald-400'>-${formattedSavings}</dd>
            </dl>
          )}

          {coupon && isCouponApplied && (
            <dl className='flex items-center justify-between gap-4'>
              <dt className='text-base font-normal text-gray-300'>Coupon ({coupon.code})</dt>
              <dd className='text-base font-medium text-emerald-400'>-{coupon.discountPercentage}%</dd>
            </dl>
          )}
          <dl className='flex items-center justify-between gap-4 border-t border-gray-600 pt-2'>
            <dt className='text-base font-bold text-white'>Tổng</dt>
            <dd className='text-base font-bold text-emerald-400'>${formattedTotal}</dd>
          </dl>
        </div>

        <motion.button
          className='flex w-full items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePayment}  // Gọi hàm thanh toán
        >
          Chuyển tới thanh toán
        </motion.button>

        <div className='flex items-center justify-center gap-2'>
          <span className='text-sm font-normal text-gray-400'>hoặc</span>
          <Link
            to='/'
            className='inline-flex items-center gap-2 text-sm font-medium text-emerald-400 underline hover:text-emerald-300 hover:no-underline'
          >
            Tiếp tục mua sắm
            <MoveRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderSummary;
