import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Button from '../../components/Button'
import Input from '../../components/Input'
import Modal from '../../components/Modal'
import { useParams } from 'react-router-dom'
import { fetchDetailProduct, fetchProducts } from '../../features/product/productSlice'
import { RootState, AppDispatch } from '../../app/store'
import { Product } from '../../types/product'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { addToCart } from '../../features/cart/cartSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorite } from '../../features/favorite/favoriteSlice'
// import ItemProduct from '../../components/ItemProduct';
import { FaUserEdit } from 'react-icons/fa';
import { addComment, fetchComments } from '../../features/comment/commentSlice';

const DetailPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeTabColor, setActiveTabColor] = useState();
  const [activeTabSize, setActiveTabSize] = useState();
  const [quantityPro, setQuantityPro] = useState<number>(1);
  const [comment, setComment] = useState("")
  const itemDetail = useAppSelector((state: RootState) => state.product.productDetail)
  const products = useAppSelector((state: RootState) => state.product.listProducts)
  const comments = useAppSelector((state: RootState) => state.comment.listComments)

  const { id } = useParams()
  const dispatch = useDispatch<AppDispatch>()

  // Product detail
  useEffect(() => {
    if (id) {
      dispatch(fetchDetailProduct(id))
      // dispatch(fetchProducts())
    }
  }, [id])

  // Comment
  useEffect(() => {
    dispatch(fetchComments())
  }, [comment])

  const listCommentPro = comments.filter(item => item.productId === itemDetail?.id)

  const handleComment = () => {
    const addItemComment = {
      name: "User Name",
      comment: comment,
      productId: itemDetail.id
    }
    dispatch(addComment(addItemComment))
    setComment("")
  }
  // 
  const handleTabClick = (index: any) => {
    setActiveTabColor(index);
  };

  const handleTabClickSize = (index: any) => {
    setActiveTabSize(index);
  };

  const increment = () => {
    setQuantityPro(quantityPro + 1);
  };

  const decrement = () => {
    setQuantityPro(quantityPro > 1 ? quantityPro - 1 : 1);
  };

  const clickAddProduct = () => {
    const cartItem = { ...itemDetail, color: activeTabColor, size: activeTabSize, reprice: discountPrice, quantity: quantityPro }
    if (activeTabColor !== undefined && activeTabSize !== undefined) {
      dispatch(addToCart(cartItem))
    }
    //   dispatch(AddItemCart({ item: cartItem, carts }))
  }

  const clickAddFavorite = () => {
    const favoriteItem = { ...itemDetail }
    dispatch(addToFavorite(favoriteItem))
  }

  // Giá sau khi giảm
  const discountPrice = Math.round((itemDetail?.price / 100) * (100 - itemDetail?.discount))

  return (
    <>
      <div className='lg:max-w-[1400px] mx-auto flex sm:flex-row flex-col sm:justify-center'>
        <div className='sm:w-[50%] w-[100%] px-4 flex justify-center'>
          <img src={itemDetail?.image} alt="" className='' />
        </div>
        <div className='sm:w-[50%] w-[100%] text-[17px] px-4'>
          <div className='flex mb-3'>
            <h4 className='text-[25px] font-semibold pr-3 leading-8'>{itemDetail?.name}</h4>
            <div>
              <i className='text-[#fff] text-[12px] bg-[#fd2c18] px-2 py-1 ml-4'>{itemDetail?.discount}%</i>
            </div>
          </div>
          <span className='line-through mr-3'>{itemDetail?.price?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
          <span className='text-[#fd2c18]'>{discountPrice?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</span>
          <p className='my-3'>SKU: FS2401157BKWOBK</p>
          <div className='flex mt-10'>
            <p>Kích cỡ</p>
            <div className='ml-14'>
              {itemDetail?.size?.map((item: Product, index: number) => {
                return (
                  <Button onClick={() => handleTabClickSize(index)} key={index} lable={item} buttonCss={`mr-5 px-2 ${index === activeTabSize ? 'bg-black text-white' : ''}`} />
                )
              })}
            </div>
          </div>
          <div className='flex my-3'>
            <p>Màu sắc</p>
            <div className='ml-12'>
              {itemDetail?.color?.map((item: Product, index: number) => {
                return (
                  <Button onClick={() => handleTabClick(index)} key={index} lable={item} buttonCss={`mr-5 px-2 ${index === activeTabColor ? 'bg-black text-white' : ''}`} />
                )
              })}
            </div>
          </div>
          <div className='flex items-center my-3'>
            <p>Số lượng</p>
            <div className='border !w-[25%] flex justify-between ml-10'>
              <Button onClick={decrement} lable={<AiOutlineMinus />} buttonCss="p-3 hover:bg-black hover:text-white" />
              <Input value={quantityPro} onChange={(e: any) => setQuantityPro(e.target.value)} type="text" inputCss="!w-[30%] text-center" />
              <Button onClick={increment} lable={<AiOutlinePlus />} buttonCss="p-3 hover:bg-black hover:text-white" />
            </div>
          </div>
          <div className='my-8 flex'>
            <Button onClick={clickAddProduct} lable="THÊM VÀO GIỎ HÀNG" buttonCss="w-[80%] sm:w-[50%] lg:w-[42%] bg-black text-[#fff] text-[14px] font-medium p-5 hover:bg-[#a68242] mr-3" />
            <Button onClick={clickAddFavorite} lable="THÊM VÀO YÊU THÍCH" buttonCss="w-[80%] sm:w-[50%] lg:w-[42%] bg-white border-[1px] border-black text-[14px] font-medium p-5 hover:bg-[#a68242] hover:text-[#fff]" />
          </div>
          <div className='text-[14px]'>
            <Button lable="HƯỚNG DẪN MUA HÀNG" onClick={() => setOpen(true)} />
            <Modal open={open} onClose={() => setOpen(false)}>
              <div>
                Hướng dẫn mua hàng
              </div>
            </Modal>
            {/* <Button lable="HƯỚNG DẪN CHỌN KÍCH CỠ" onClick={() => setOpen(true)} />
            <Modal open={open} onClose={() => setOpen(false)}>
              Hướng dẫn mua hàng
            </Modal>
            <Button lable="CHIA SẺ" onClick={() => setOpen(true)} />
            <Modal open={open} onClose={() => setOpen(false)}>
              CHIA SẺ
            </Modal> */}
          </div>
        </div>
      </div>
      <ToastContainer />
      <h4 className='px-4 py-10'>SẢN PHẨM LIÊN QUAN</h4>
      {/* <div className='flex flex-wrap'>
        {products.length > 0 && products.map((item, index) => (
          <div key={index} className='xl:w-[25%] lg:w-[33.333333%] sm:w-[50%] w-[90%] mx-auto sm:mx-0 p-4 '>
            <ItemProduct productItem={item} />
          </div>
        ))}
      </div> */}
      <h4 className='px-4 m-auto font-semibold text-[25px] mb-6'>ĐÁNH GIÁ SẢN PHẨM</h4>
      <div className='p-10'>
        <div className='max-h-64 overflow-y-auto'>
          {
            listCommentPro.length > 0 ? listCommentPro?.map((item, index) => {
              return (
                <div key={index} className='mb-3 '>
                  <p className='font-semibold'>{item.name}</p>
                  <p className='ml-2'>{item.comment}</p>
                </div>
              )
            }) : <div>Sản phẩm chưa có đánh giá nào!</div>
          }
        </div>
        <div className='flex items-center gap-2 mt-10'>
          <p className='font-semibold'>Triệu Ban</p>
          <FaUserEdit />
        </div>
        <div className='flex flex-col'>
          <textarea onChange={(e) => setComment(e.target.value)} value={comment} className="outline-none bg-gray-100 px-3 lg:w-[80%] w-[100%] py-2" placeholder="Bạn hãy nhập đánh giá ..." cols="100" rows="3"></textarea>
          <Button onClick={handleComment} lable="Gửi" buttonCss="py-1 px-3 bg-blue-600 text-white transition ease-in-out duration-300 rounded-md sm:w-[10%] w-[25%] hover:bg-blue-700 mt-2" />
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default DetailPage
