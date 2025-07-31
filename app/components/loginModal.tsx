import React from 'react'
import type { TLoginSchema } from '~/lib/types';
import { loginSchema } from '~/lib/types';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import { Link } from 'react-router';

export default function LoginModal() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors , isSubmitting},
    reset,
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: TLoginSchema) => {
    console.log(data);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    reset();
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-lg w-5/6 md:w-1/2  mx-auto'>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start gap-y-1' >

        <label htmlFor="email" className="block text-sm font-medium text-gray-700 ml-2">
          Email
        </label>
        <input 
          {...register("email")}
          className={`w-full p-3 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          type="email" 
          placeholder='abc@email.com'
        />
        <span className='text-red-500 text-sm min-h-[20px]'>{errors.email?.message || ''}</span>

        <label htmlFor="password" className="block text-sm font-medium text-gray-700 ml-2">
          Password
        </label>
        <input 
          {...register("password")}
          className={`w-full p-3 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
          type="password" 
          placeholder='*********'
        />
        <span className='text-red-500 text-sm min-h-[20px]'>{errors.password?.message || ''}</span>
           
      <button 
        type="submit" 
        disabled={isSubmitting} 
        className={`w-full p-3 bg-blue-600 text-white rounded-md transition-colors duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 hover:cursor-pointer'}`}
      >
        {isSubmitting ? 'Logging in...' : 'Login'}
      </button>

      <Link to="/sign-up" className="text-sm text-blue-600 hover:underline hover:cursor-pointer mt-4">
        Don't have an account? Sign Up
      </Link>
      
      </form>
 
    </div>
  )
}
