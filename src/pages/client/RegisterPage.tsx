import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Button from '../../components/Button'
import { FaFacebookF, FaGoogle } from 'react-icons/fa6'
import Input from '../../components/Input';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { addUser } from '../../features/user/userSlice';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const RegisterPage = () => {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const dispatch = useAppDispatch()

  const handleHidePassword = () => {
    setOpen(!open)
  }

  const handleRegister = () => {
    const createUser = {
      email: email,
      name: name,
      phone: phone,
      password: password
    }
    dispatch(addUser(createUser))
  }

  return (
    <div className='max-w-[1200px] mx-auto my-[20px] justify-center'>
      <div className='flex xl:my-[100px]'>
        <div className='max-w-[50%] hidden md:block'>
          <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="" />
        </div>
        <div className='w-[60%] md:w-[35%] lg:w-[30%] mx-auto flex flex-col justify-center'>
          <h3 className='text-center text-[25px] mb-12 font-semibold'>THÔNG TIN ĐĂNG KÝ</h3>
          <Input onChange={(e: any) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" inputCss={`border-b-[2px] border-b-gray-900 mb-6`} />
          <Input onChange={(e: any) => setName(e.target.value)} value={name} type="text" placeholder="Họ tên" inputCss={`border-b-[2px] border-b-gray-900 mb-6`} />
          <Input onChange={(e: any) => setPhone(e.target.value)} value={phone} type="text" placeholder="Số điện thoại" inputCss={`border-b-[2px] border-b-gray-900 mb-6`} />
          <div className='relative '>
            <Input onChange={(e: any) => setPassword(e.target.value)} value={password} type={open === false ? "password" : "text"} placeholder="Mật khẩu" inputCss={`w-[100%] border-b-[2px] border-b-gray-900 mb-6`} />
            {open === false ? <Button lable={<IoMdEye />} onClick={handleHidePassword} buttonCss="absolute right-0" /> : <Button lable={<IoMdEyeOff />} onClick={handleHidePassword} buttonCss="absolute right-0" />}
          </div>
          <div className='flex justify-between'>
            <div className='flex items-center gap-x-1'>
              <Input type="checkbox" /> <span>Remember me</span>
            </div>
            <Link to="" className='hover:text-blue-700'>Quên mật khẩu?</Link>
          </div>
          <Button onClick={handleRegister} lable="ĐĂNG KÝ" buttonCss="w-50% mx-auto py-2 px-8 mt-8 bg-black text-white hover:bg-[#a68242]" />
          <Link to="/login" className='text-center mt-6 hover:text-blue-700'>Bạn đã có tài khoản! Đăng nhập ngay!</Link>
          <div className='flex justify-between gap-x-3 mt-6'>
            <Button icon={<FaFacebookF />} lable="FaceBook" buttonCss="min-w-[50%] flex items-center justify-center gap-x-2 px-5 py-2 bg-blue-900 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/70 transition ease-in-out duration-300" />
            <Button icon={<FaGoogle />} lable="Google" buttonCss="min-w-[50%] flex items-center justify-center gap-x-2 px-5 py-2 bg-orange-700 text-white hover:bg-orange-600 shadow-lg shadow-orange-900/70 transition ease-in-out duration-300" />
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  )
}

export default RegisterPage
