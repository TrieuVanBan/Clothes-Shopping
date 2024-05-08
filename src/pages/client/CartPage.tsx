import React, { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import Button from '../../components/Button'
import ItemProduct from '../../components/ItemProduct'
import { RootState } from '../../app/store'
import { Product } from '../../types/product'
// import { ListCart } from '../../features/cart/cartSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { deleteCartAll, getCartTotal } from '../../features/cart/cartSlice'

const CartPage = () => {
  const { carts, totalQuantity, totalPrice } = useAppSelector((state: RootState) => state.cart)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCartTotal())
  }, [carts])

  return (
    <div className='max-w-[1200px] mx-auto'>
      <h3 className='px-4 text-[25px] font-bold mb-1'>THÔNG TIN GIỎ HÀNG</h3>
      {carts.length > 0 ? <h6 className='px-4 text-[#333] mb-6'>Bạn có <span className='text-red-600'>{carts.length}</span> sản phẩm trong giỏ hàng, tổng số lượng <span className='text-red-600'>{totalQuantity}</span> bộ</h6> : null}
      <div>
        <div className='flex flex-wrap'>
          {carts.length > 0 && carts.map((item: Product, index) => (
            <div key={index} className='xl:w-[25%] lg:w-[33.333333%] sm:w-[50%] w-[90%] mx-auto sm:mx-0 p-4 '>
              <ItemProduct productItem={item} cartItem />
            </div>
          ))}
        </div>
        {carts.length > 0 ?
          <div className='flex flex-col md:flex-row lg:gap-x-14 gap-x-6 gap-y-6 px-[10%] text-center md:px-4 py-10 bg-slate-300'>
            <Button lable="TIẾP TỤC MUA HÀNG" buttonCss="py-2 px-4 hover:bg-[#a68242] hover:text-white transition ease-in-out duration-300 border-[1px] border-black" />
            <div>
              <span className='font-semibold'>Tổng đơn đặt hàng <span className='text-[#fd2c18]'>{totalPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span></span>
              <h6>* Đã bao gồm thuế VAT</h6>
            </div>
            <Button onClick={() => dispatch(deleteCartAll())} lable="XÓA TẤT CẢ" buttonCss="py-2 px-4 hover:bg-[#a68242] hover:text-white transition ease-in-out duration-300 border-[1px] border-black" />
            <Button lable="THANH TOÁN" buttonCss="py-2 px-4 hover:bg-[#a68242] transition ease-in-out duration-300 border-[1px] border-black text-white bg-black" />
          </div>
          : <div className='px-4 text-red-600 flex flex-col'>
            <span>Không có sản phẩm nào được yêu thích!</span>
            <Button lable="MUA HÀNG" buttonCss="py-2 px-4 hover:bg-[#a68242] hover:text-white transition ease-in-out duration-300 border-[1px] border-black lg:w-[15%] sm:w-[25%] w-[50%] my-4" />
          </div>}
      </div>
      <ToastContainer />
    </div>
  )
}

export default CartPage
