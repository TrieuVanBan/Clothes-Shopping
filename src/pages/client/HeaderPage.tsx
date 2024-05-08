import React, { useEffect, useState } from 'react'
import "../../index.css"
import { AiOutlineMenu } from 'react-icons/ai'
import { IoSearchOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { CiHeart, CiShoppingCart, CiUser } from 'react-icons/ci'
import { PiPhoneThin } from 'react-icons/pi'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { searchProducts } from '../../features/product/productSlice'
import { Product } from '../../types/product'

function HeaderPage() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [openSearch, setOpenSearch] = useState(false)
  const [itemSearch, setItemSearch] = useState<Product[]>([])
  const itemsCart = useAppSelector(state => state.cart.carts)
  const itemsFavorite = useAppSelector(state => state.favorite.favorites)
  const searchItem = useAppSelector(state => state.product.productsSearch)
  const products = useAppSelector(state => state.product.listProducts)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSearch = (e: any) => {
    dispatch(searchProducts(e.target.value))
    setOpenSearch(true);
    if (!e.target.value) {
      setOpenSearch(false);
    }
  }

  useEffect(() => {
    const itemsSearch = products?.filter((e) => e.name.toLowerCase().includes(searchItem.toLowerCase()))
    setItemSearch(itemsSearch)
  }, [searchItem])

  const handleFocus = () => {
    if (searchItem) {
      setOpenSearch(true);
    }
  };

  const handleBlur = () => {
    setOpenSearch(false);
  };

  const handleClickSearch = () => {
    setOpenSearch(!openSearch)
  }

  const handleClickDetail = (id: any) => {
    navigate(`/detail/${id}`)
    setOpenSearch(false)
  }

  return (
    <div className=''>
      <div className='w-[100%] bg-white flex justify-between items-center p-3 md:py-[45px] md:px-[40px] sm:p-5 '>
        <div className='flex items-center md:w-[25%] w-[25%] relative'>
          <Button onClick={toggleDropdown} lable={<AiOutlineMenu />} buttonCss="mr-2 text-[18px] md:text-[25px] md:mr-4 " />
          {showDropdown && (
            <div className="dropdown-menu">
              <a href="#">Mục 1</a>
              <a href="#">Mục 2</a>
              <a href="#">Mục 3</a>
            </div>
          )}
          <Link to="/" className='lg:w-[48%] md:w-[50%] w-[48%]'>
            <img src="https://elise.vn/media/logo/default/logo_color.png" alt="Logo website" />
          </Link>
        </div>
        <div className='relative flex justify-end lg:text-xl !text-lg md:w-[35%] sm:w-[50%] sm:justify-start w-[25%]'>
          <Input onChange={handleSearch} onFocus={handleFocus} value={searchItem} placeholder="Tìm kiếm" inputCss="border-b-2 border-b-black xl:w-[70%] md:w-[80%]" />
          <Button onClick={handleClickSearch} buttonCss="pt-[7px]" lable={<IoSearchOutline />} />
          {openSearch && (
            <div className="absolute w-[60%] text-[14px] top-[30px] mt-2 py-2 bg-white border rounded-lg shadow-lg max-h-64 overflow-y-auto">
              {
                itemSearch?.map((item, index) => (
                  <div onClick={() => handleClickDetail(item.id)} key={index}
                    className="flex items-center gap-4 px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                  >
                    <div className='w-[30%]'>
                      <img src={item.image} alt="" />
                    </div>
                    <span>{item.name}</span>
                  </div>
                ))
              }
            </div>
          )}
        </div>
        <div className='flex justify-end items-center md:w-[40%] sm:w-[20%] w-[25%]'>
          <Link to="" className='flex items-center ml-3'>
            <PiPhoneThin className='text-[20px] mr-1' />
            <span className='hidden md:block'>Gọi Ngay</span>
          </Link>
          <Link to="/login" className='flex items-center ml-3'>
            <CiUser className='text-[20px] mr-1' />
            <span className='hidden md:block'>Tài Khoản</span>
          </Link>
          <Link to="/cart" className='relative flex items-center ml-3'>
            <CiShoppingCart className='text-[20px]' />
            <span className='absolute bottom-[13px] left-[13px]'>{itemsCart.length}</span>
          </Link>
          <Link to="/favorite" className='relative flex items-center ml-3'>
            <CiHeart className='text-[20px]' />
            <span className='absolute bottom-[12px] left-[13px]'>{itemsFavorite.length}</span>
          </Link>
        </div>
      </div >
    </div>
  )
}

export default HeaderPage
