import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import Button from './Button'
import Input from './Input'
import { decreaseItemQuantity, deleteCart, increaseItemQuantity } from '../features/cart/cartSlice'
import { addToFavorite, deleteFavorite } from '../features/favorite/favoriteSlice'
import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
// import { FaCartPlus } from "react-icons/fa";
// import { MdFavoriteBorder } from 'react-icons/md';

function ItemProduct(props: any) {
  const { productItem, cartItem, reprice, favorite } = props
  const itemDetail = useAppSelector((state: RootState) => state.product.productDetail)
  const dispatch = useDispatch()

  const color = ["Đen", "Trắng", "Ghi", "Sữa"]
  const size = ["S", "M", "L", "XL"]

  const clickAddFavorite = () => {
    const favoriteItem = { ...itemDetail }
    dispatch(addToFavorite(favoriteItem))
  }


  return (
    <>
      <div>
        <Link to={`/detail/${productItem?.id}`}>
          <div className='relative'>
            <img src={productItem?.image} loading="lazy" alt="" className='block' />
            <i className='absolute top-2 sm:right-2 right-2 text-[#fff] text-[12px] bg-[#fd2c18] flex items-center justify-center w-[46px] h-[25px] z-10'>{productItem?.discount}%</i>
            <div className='absolute flex flex-col justify-center gap-3 top-0 bg-[rgba(0,0,0,0.6)] opacity-0 transition ease-in-out duration-500 hover:opacity-[1] translate-y-[25px] transform-[0.6] hover:translate-y-[0px] w-[100%] h-[100%]'>
              <p className='text-center text-[#fff] hover:text-[#a68242] transition ease-in-out duration-300 truncate font-medium mb-10'>{productItem?.name}</p>
              <Button lable="Thêm vào giỏ hàng" buttonCss="bg-[#a68242] hover:bg-[#333] px-5 py-3 max-w-[60%] mx-auto mt-4 text-[#fff] transition ease-in-out duration-300 hover:text-[#fff]" />
              <Button onClick={clickAddFavorite} lable="Thêm vào yêu thích" buttonCss="bg-[#a68242] hover:bg-[#333] px-5 py-3 max-w-[60%] mx-auto mt-0 text-[#fff] transition ease-in-out duration-300 hover:text-[#fff]" />
            </div>
          </div>
          <div className='hover:text-[#a68242] transition ease-in-out duration-300 truncate !my-1 font-medium'>{productItem?.name}</div>
        </Link>
        <div>
          {cartItem ? <span className='mr-3'>{productItem?.reprice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span> : <span className='line-through mr-3'>{productItem?.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>}
          {cartItem ? <span className='text-[#fd2c18]'>Tổng: {(productItem?.reprice * productItem.quantity).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span> : <span className='text-[#fd2c18]'>{reprice?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>}
          {favorite ? <span className='text-[#fd2c18]'>{productItem?.reprice?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span> : ""}
        </div>
        {
          cartItem ? <div>
            <b className='block mb-2'>{color?.filter((item, index) => index === productItem?.color ? item : "")}</b>
            <b className='block mb-2'>{size?.filter((item, index) => index === productItem?.size ? item : "")}</b>
            <div className='border !w-[35%] flex justify-between'>
              <Button lable={<AiOutlineMinus />} onClick={() => dispatch(decreaseItemQuantity(productItem))} buttonCss="p-3 hover:bg-black hover:text-white" />
              <Input value={productItem?.quantity} type="text" inputCss="!w-[30%] text-center" />
              <Button lable={<AiOutlinePlus />} onClick={() => dispatch(increaseItemQuantity(productItem))} buttonCss="p-3 hover:bg-black hover:text-white" />
            </div>
            <Button onClick={() => dispatch(deleteCart(productItem?.id))} lable="Gỡ sản phẩm" buttonCss="underline mt-4 transition ease-in-out duration-300 hover:text-[#a68242]" />
          </div> : null
        }
        {favorite ? <Button onClick={() => dispatch(deleteFavorite(productItem?.id))} lable="Gỡ sản phẩm" buttonCss="underline mt-4 transition ease-in-out duration-300 hover:text-[#a68242]" /> : null}
      </div>
    </>
  )
}

export default ItemProduct
