import React from 'react'
import { BsShop } from 'react-icons/bs'
import { FaClockRotateLeft, FaFacebookF, FaInstagram, FaPhoneVolume, FaTiktok, FaYoutube } from 'react-icons/fa6'
import { SiZalo } from 'react-icons/si'
import { TbTruckDelivery } from 'react-icons/tb'
import { Link } from 'react-router-dom'

function FooterPage() {
  const arrayShip = [
    {
      icon: <FaClockRotateLeft />,
      lalbe: "7 NGÀY ĐỔI SẢN PHẨM NGUYÊN GIÁ",
      value: "Đổi trả sản phẩm trong 7 ngày"
    },
    {
      icon: <FaPhoneVolume />,
      lalbe: "HOTLINE 1900 3060",
      value: "8h00 - 17h00, T2 - T7 (Giờ hành chính)"
    }, {
      icon: <BsShop />,
      lalbe: "HỆ THỐNG CỬA HÀNG",
      value: "120 cửa hàng trên toàn hệ thống"
    }, {
      icon: <TbTruckDelivery />,
      lalbe: "VẬN CHUYỂN",
      value: "Đồng giá 30k toàn quốc"
    },
  ]

  const socialNetwork = [
    {
      icon: <FaFacebookF />,
      text: "FACEBOOK"
    },
    {
      icon: <FaInstagram />,
      text: "INSTAGRAM"
    }, {
      icon: <FaYoutube />,
      text: "YOUTUBE"
    }, {
      icon: <FaTiktok />,
      text: "TIKTOK"
    }, {
      icon: <SiZalo />,
      text: "ZALO"
    },
  ]

  return (
    <>
      <div className='flex flex-wrap gap-y-3 !mt-12'>
        {
          arrayShip?.map((item, index) => (
            <div key={index} className={`md:w-[24.9%] sm:w-[49.8%] !mx-auto w-[90%] bg-black text-[#fff] text-center p-4 ${index !== 3 ? "mr-[1px]" : "mr-0"}`}>
              <div className='w-[5%] mx-auto text-[20px] my-2'>{item.icon}</div>
              <h6 className='font-medium'>{item.lalbe}</h6>
              <h6>{item.value}</h6>
            </div>
          ))
        }
      </div>
      <div className='bg-[#faf9f8] pt-7 pb-16'>
        <div className='flex justify-center flex-wrap max-w-[970px] !mx-auto text-center md:text-left'>
          <div className='md:w-[25%] sm:w-[50%] w-[80%] mt-3 px-5'>
            <h6 className='font-semibold text-[18px] mb-4'>THÔNG TIN</h6>
            <ul className='text-[#666] '>
              <li><p className='transition ease-in-out hover:-translate-x-[-10px] hover:text-[#a68242] duration-500'>CÔNG TY TNHH THỜI TRANG ELISE </p></li>
              <li><p className='transition ease-in-out hover:-translate-x-[-10px] hover:text-[#a68242] duration-500'>Tầng 8 - Số 2 Tôn Thất Tùng - Đống Đa - Hà Nội</p></li>
              <li><p className='transition ease-in-out hover:-translate-x-[-10px] hover:text-[#a68242] duration-500'>Phone: 19003060</p></li>
              <li><p className='transition ease-in-out hover:-translate-x-[-10px] hover:text-[#a68242] duration-500'>Email: support@elise.vn</p></li>
              <li><p className='transition ease-in-out hover:-translate-x-[-10px] hover:text-[#a68242] duration-500'>MST: 0108393204</p></li>
            </ul>
          </div>
          <div className='md:w-[25%] sm:w-[50%] w-[80%] mt-3 px-5'>
            <h6 className='font-semibold text-[18px] mb-4'>LIÊN HỆ</h6>
            <ul className='text-[#666] '>
              <li><p className='transition ease-in-out hover:-translate-x-[-10px] hover:text-[#a68242] duration-500'>Giới thiệu</p></li>
              <li><p className='transition ease-in-out hover:-translate-x-[-10px] hover:text-[#a68242] duration-500'>Tin tức</p></li>
              <li><p className='transition ease-in-out hover:-translate-x-[-10px] hover:text-[#a68242] duration-500'>Hệ thống cửa hàng</p></li>
              <li><p className='transition ease-in-out hover:-translate-x-[-10px] hover:text-[#a68242] duration-500'>Trợ giúp</p></li>
            </ul>
          </div>
          <div className='md:w-[25%] sm:w-[50%] w-[80%] mt-3 px-5'>
            <h6 className='font-semibold text-[18px] mb-4'>HỖ TRỢ KHÁCH HÀNG</h6>
            <ul className='text-[#666] '>
              <li><p className='transition ease-in-out hover:-translate-x-[-10px] hover:text-[#a68242] duration-500'>Hướng dẫn mua hàng</p></li>
              <li><p className='transition ease-in-out hover:-translate-x-[-10px] hover:text-[#a68242] duration-500'>Đăng ký tài khoản</p></li>
              <li><p className='transition ease-in-out hover:-translate-x-[-10px] hover:text-[#a68242] duration-500'>Chính sách giao hàng</p></li>
              <li><p className='transition ease-in-out hover:-translate-x-[-10px] hover:text-[#a68242] duration-500'>Chính sách đổi trả hoàn tiền</p></li>
              <li><p className='transition ease-in-out hover:-translate-x-[-10px] hover:text-[#a68242] duration-500'>Ưu đãi sinh nhật khách hàng</p></li>
              <li><p className='transition ease-in-out hover:-translate-x-[-10px] hover:text-[#a68242] duration-500'>Hướng dẫn thanh toán qua Insta</p></li>
              <li><p className='transition ease-in-out hover:-translate-x-[-10px] hover:text-[#a68242] duration-500'>Hướng dẫn trả góp qua Insta</p></li>
            </ul>
          </div>
          <div className='md:w-[25%] sm:w-[40%] w-[60%] mt-3 px-5 flex items-center'>
            <div className='flex flex-col w-[60%]'>
              <img className='w-[100%] mb-[2px]' src="https://elise.vn/media/wysiwyg/footer/apple-download.png" alt="" />
              <img className='w-[100%]' src="https://elise.vn/media/wysiwyg/footer/chplay-download.png" alt="" />
            </div>
            <div className='w-[40%]'>
              <img className='w-[100%]' src="https://elise.vn/media/wysiwyg/ECOM/codepr.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-evenly flex-wrap lg:w-[60%] w-[100%] mx-auto'>
        {socialNetwork?.map((item: any, index) => (
          <Link to="" key={index} className='flex items-center p-3 '>
            <span>
              {item?.icon}
            </span>
            <span className='ml-1 hover:border-b-black hover:text-[#a68242]'>{item.text}</span>
          </Link>
        ))}
      </div>
      <div className='text-center lg:w-[30%] w-[100%] mx-auto'>
        <span>© Elise 2024. All rizghts reserved</span>
        <img className='lg:w-[60%] md:w-[20%]  sm:w-[30%] w-[30%] mx-auto' src="https://elise.vn/media/wysiwyg/bocongthuong.png" alt="" />
      </div>
    </>
  )
}

export default FooterPage
