import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Input from '../../components/Input'
import Button from '../../components/Button';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchUsers } from '../../features/user/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle } from 'react-icons/fa6';

const LoginPage = () => {
  const users = useAppSelector(state => state.user.listUsers)
  const [isFocused, setIsFocused] = useState((false));
  const [email, setEmail] = useState("ban@gmail.com")
  const [password, setPassword] = useState("123456")

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogin = async () => {
    // const user = await login({ email: email, password: password })
    const user = users.find((item) => item.email === email && item.password === password)
    console.log(user);
    if (user) {
      toast.success('Đăng nhập thành công!')
      setTimeout(() => {
        navigate('/')
      }, 1500);
    } else {
      toast.error('Đăng nhập thất bại!');
    }
    return user
  }

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className='max-w-[1200px] mx-auto my-[20px] justify-center'>
      <div className='flex xl:my-[100px]'>
        <div className='max-w-[50%] hidden md:block'>
          <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="" />
        </div>
        <div className='w-[60%] md:w-[35%] lg:w-[30%] mx-auto flex flex-col justify-center'>
          <h3 className='text-center text-[25px] mb-12 font-semibold'>THÔNG TIN ĐĂNG NHẬP</h3>
          <Input onChange={(e: any) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" inputCss={`border-b-[2px] border-b-gray-900 mb-6`} />
          <Input onChange={(e: any) => setPassword(e.target.value)} value={password} type="password" placeholder="Mật khẩu" inputCss={`border-b-[2px] border-b-gray-900 mb-6`} />
          <div className='flex justify-between'>
            <div className='flex items-center gap-x-1'>
              <Input type="checkbox" /> <span>Remember me</span>
            </div>
            <Link to="" className='hover:text-blue-700'>Quên mật khẩu?</Link>
          </div>
          <Button onClick={handleLogin} lable="ĐĂNG NHẬP" buttonCss="w-50% mx-auto py-2 px-8 mt-8 bg-black text-white hover:bg-[#a68242]" />
          <Link to="/register" className='text-center mt-6 hover:text-blue-700'>Bạn chưa có tài khoản? Đăng ký ngay</Link>
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

export default LoginPage
