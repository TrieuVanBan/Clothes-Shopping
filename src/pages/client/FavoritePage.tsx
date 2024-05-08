import React, { useEffect } from 'react'
import Button from '../../components/Button'
import ItemProduct from '../../components/ItemProduct'
import { RootState } from '../../app/store'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { deleteFavoriteAll } from '../../features/favorite/favoriteSlice'

const FavoritePage = () => {
  const { favorites } = useAppSelector((state: RootState) => state.favorite)
  console.log(favorites);

  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(getCartTotal())
  // }, [favorites])

  return (
    <div className='max-w-[1200px] mx-auto'>
      <h3 className='px-4 text-[25px] font-bold mb-1'>THÔNG TIN SẢN PHẨM YÊU THÍCH</h3>
      {favorites.length > 0 ? <h6 className='px-4 text-[#333] mb-6'>Bạn có <span className='text-red-600'>{favorites.length}</span> sản phẩm được yêu thích!</h6> : null}
      <div>
        <div className='flex flex-wrap'>
          {favorites?.length > 0 && favorites?.map((item, index) => (
            <div key={index} className='xl:w-[25%] lg:w-[33.333333%] sm:w-[50%] w-[90%] mx-auto sm:mx-0 p-4 '>
              <ItemProduct productItem={item} favorite />
            </div>
          ))}
        </div>
      </div>
      {favorites.length > 0 ?
        <div className='flex flex-col md:flex-row lg:gap-x-14 gap-x-6 gap-y-6 px-[10%] text-center md:px-4 py-10 bg-slate-300'>
          <Button lable="TIẾP TỤC MUA HÀNG" buttonCss="py-2 px-4 hover:bg-[#a68242] hover:text-white transition ease-in-out duration-300 border-[1px] border-black" />
          <Button onClick={() => dispatch(deleteFavoriteAll())} lable="XÓA TẤT CẢ" buttonCss="bg-black text-white py-2 px-4 hover:bg-[#a68242] transition ease-in-out duration-300 border-[1px] border-black" />
        </div>
        : <div className='px-4 text-red-600 flex flex-col'>
          <span>Không có sản phẩm nào được yêu thích!</span>
          <Button lable="MUA HÀNG" buttonCss="py-2 px-4 hover:bg-[#a68242] hover:text-white transition ease-in-out duration-300 border-[1px] border-black lg:w-[15%] sm:w-[25%] w-[50%] my-4" />
        </div>}
    </div>
  )
}

export default FavoritePage
