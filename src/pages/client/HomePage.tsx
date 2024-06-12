import React, { useEffect } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import ItemProduct from '../../components/ItemProduct'
import Button from '../../components/Button'
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../../features/product/productSlice'
import { Product } from '../../types/product'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

function HomePage() {
  const products = useAppSelector((state: RootState) => state.product.listProducts)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  return (
    <>
      <div>
        <Link to="">
          <img className='!px-4' src="https://elise.vn/media/wysiwyg/A-SALE/cv-th-sale.jpg" alt="" />
        </Link>
        {/* <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img className='!px-4' src="https://elise.vn/media/wysiwyg/A-SALE/cv-th-sale.jpg" alt="" />
            </div>
            <div>
              <img className='!px-4' src="https://elise.vn/media/wysiwyg/A-SALE/cv-th-sale.jpg" alt="" />
            </div>
          </Slider>
        </div> */}
        <h3 className='text-base text-center mt-3 mb-2 lg:text-3xl lg:mt-7 lg:mb-5 md:text-2xl md:mt-5 md:mb-3 sm:text-lg'>NEW ARRIVAL</h3>
        <div className='flex flex-wrap'>
          {products.length >= 12 && products.slice(0, 12).map((item: Product, index) => {
            const discountPrice = Math.round((item.price / 100) * (100 - item.discount))
            return (
              <div key={index} className='lg:w-[25%] md:w-[33.333333%] sm:w-[50%] w-[90%] mx-auto sm:mx-0 p-4 '>
                <ItemProduct productItem={item} reprice={discountPrice} />
              </div>
            )
          })}
        </div>
        <Link to='/' className='flex justify-center my-4'>
          <Button lable="XEM THÊM" buttonCss="bg-black text-[#fff] px-7 py-2 hover:bg-[#a68242] transition ease-in-out duration-300" />
        </Link>
      </div >
    </>
  )
}

export default HomePage
