import React from 'react'
import { MdNavigateNext } from 'react-icons/md'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaGoogle } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io'

const PayPage = () => {
  return (
    <div className='w-[1200px] m-auto px-4'>
      <div className='flex items-center justify-center gap-x-3 pb-8 border-b-2 border-gray-100'>
        <span>01.CHI TIẾT</span> <MdNavigateNext />
        <span>02.VẬN CHUYỂN</span> <MdNavigateNext />
        <span>03.THANH TOÁN</span> <MdNavigateNext />
        <span>04.HOÀN THÀNH</span>
      </div>
      <p className='text-center py-5'>Vui lòng gọi theo số <b>19003060</b> (miễn phí) để đặt đơn hàng nhanh chóng</p>
      <div className='flex gap-x-16'>
        <div className='w-[65%]'>
          <h3 className='font-bold text-[25px]'>MUA HÀNG KHÔNG CẦN ĐĂNG NHẬP</h3>
          <p className='my-5 text-gray-500'>Chúng tôi sẽ gửi thông tin đặt hàng đến email của bạn</p>
          <Input placeholder="Địa chỉ Email" inputCss="w-[100%] pb-2 border-b-2 border-gray-100 my-8" />
          <Button onClick="" lable="TIẾP TỤC" buttonCss="py-2 px-8 mr-4 hover:bg-[#a68242] text-white transition ease-in-out duration-300 border-[1px] border-black bg-black" />
          <Button onClick="" lable="TÔI KHÔNG CÓ ĐỊA CHỈ EMAIL" buttonCss="py-2 px-8 hover:bg-[#a68242] hover:text-white transition ease-in-out duration-300 border-[1px] border-black" />
          <h3 className='font-bold text-[25px] mt-16'>ĐĂNG NHẬP</h3>
          <p className='mt-5 mb-8'>Bạn chưa có tài khoản?<Link to=""> Tạo tài khoản</Link></p>
          <div className='flex gap-x-4 mt-8 mb-6'>
            <Input placeholder="Địa chỉ Email" inputCss="w-[50%] pb-2 border-b-2 border-gray-100" />
            <Input placeholder="Mật khẩu" inputCss="w-[50%] pb-2 border-b-2 border-gray-100" />
          </div>
          <Button onClick="" lable="ĐĂNG NHẬP" buttonCss="mr-4 py-2 px-8 hover:bg-[#a68242] hover:text-white transition ease-in-out duration-300 border-[1px] border-black" />
          <Link to="" className='text-gray-500'>Quên mật khẩu?</Link>
          <div className='w-[80%] flex justify-between gap-x-3 mt-6'>
            <Button icon={<FaFacebookF />} lable="FaceBook" buttonCss="min-w-[50%] flex items-center justify-center gap-x-2 px-5 py-2 bg-blue-900 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/70 transition ease-in-out duration-300" />
            <Button icon={<FaGoogle />} lable="Google" buttonCss="min-w-[50%] flex items-center justify-center gap-x-2 px-5 py-2 bg-orange-700 text-white hover:bg-orange-600 shadow-lg shadow-orange-900/70 transition ease-in-out duration-300" />
          </div>
        </div>
        <div className='w-[35%] border border-black p-6'>
          <h3 className='text-[25px] font-semibold mb-7'>GIỎ HÀNG</h3>
          <div className='flex '>
            <Input placeholder="Mã giảm giá" inputCss="w-[55%] pl-2 bg-gray-200" />
            <Button onClick="" lable="ÁP DỤNG" buttonCss="mr-4 py-2 px-6 bg-black hover:bg-[#a68242] text-white transition ease-in-out duration-300 border-[1px] border-black" />
          </div>
          <p className='my-3'>Bạn có 3 sản phẩm trong giỏ</p>
          <div className=' max-h-[300px] overflow-y-auto'>
            {Array(5).fill(null).map((item, index) => {
              return (
                <div key={index} className='flex gap-4 my-3'>
                  <div>
                    <img src="https://elise.vn/media/catalog/product/cache/0250a74608ae6b32c9f696ab8c3ae771/f/s/fs2401045dxwobk2.jpg" alt="" />
                  </div>
                  <div>
                    <h6>VEST ĐEN LỬNG NGẮN TAY LƠ VÊ</h6>
                    <p>1.598.000 VND</p>
                    <div className='flex items-center gap-x-1'>
                      <p>Xem chi tiết</p> <IoIosArrowDown />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='border-t-[2px] border-gray-700 mt-5'>
            <div className='flex justify-between text-gray-500 my-2'>
              <p>3 sản phẩm</p>
              <p>6.194.000 VND</p>
            </div>
            <div className='flex justify-between text-gray-500'>
              <p>Vận chuyển</p>
              <p>30.000 VND</p>
            </div>
            <div className='flex justify-between text-black mt-6'>
              <p>Tổng đơn đặt hàng</p>
              <p>30.000 VND</p>
            </div>
            <p className='text-gray-500 flex justify-end'>* Đã bao gồm thuế VAT</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PayPage
