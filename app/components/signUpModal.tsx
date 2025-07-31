import React from 'react'
import type { TSignUpSchema } from '~/lib/types';
import { signUpSchema } from '~/lib/types';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import { Link, redirect } from 'react-router';

export default function SignUpModal() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors , isSubmitting},
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: TSignUpSchema) => {
    console.log(data);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    reset();

    redirect('/login'); // Redirect to login after successful sign up
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-lg w-5/6 md:w-4/5  mx-auto'>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-y-1 w-full' >
        
        <div className='flex flex-col md:flex-row justify-center items-center w-full md:gap-2'>
          <div className='flex flex-col items-start gap-y-1 w-full'>
            
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 ml-2">
              Name
            </label>
            <input
              {...register("name")}
              className={`w-full p-3 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              type="text" 
              placeholder='Name'
            />
            <span className='text-red-500 text-sm min-h-[20px]'>{errors.name?.message || ''}</span>
    
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 ml-2">
              Email
            </label>
            <input 
              {...register("email")}
              className={`w-full p-3 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              type="email" 
              placeholder='Email'
            />
            <span className='text-red-500 text-sm min-h-[20px] '>{errors.email?.message || ''}</span>
    
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 ml-2">
              Password
            </label>
            <input 
              {...register("password")}
              className={`w-full p-3 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              type="password" 
              placeholder='Password'
            />
            <span className='text-red-500 text-sm min-h-[20px] '>{errors.password?.message || ''}</span>
    
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 ml-2">
              Confirm Password
            </label>
            <input 
              {...register("confirmPassword")}
              className={`w-full p-3 border rounded-md ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
              type="password" 
              placeholder='Confirm Password'
            />
            <span className='text-red-500 text-sm min-h-[20px] '>{errors.confirmPassword?.message || ''}</span>
    
          </div>
  
          <div className='flex flex-col items-start gap-y-1 w-full'>
            
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 ml-2">
              Address
            </label>
            <input
              {...register("address")}
              className={`w-full p-3 border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
              type="text" 
              placeholder=''
            />
            <span className='text-red-500 text-sm min-h-[20px] '>{errors.address?.message || ''}</span>
    
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 ml-2">
              Phone
            </label>
            <input
              {...register("phone")}
              className={`w-full p-3 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
              type="tel" 
              placeholder='0300-1234567'
            />
            <span className='text-red-500 text-sm min-h-[20px] '>{errors.phone?.message || ''}</span>
    
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 ml-2">
              Zip Code
            </label>
            <input
              {...register("zipCode")}
              className={`w-full p-3 border rounded-md ${errors.zipCode ? 'border-red-500' : 'border-gray-300'}`}
              type="text" 
              placeholder='Zip Code'
            />
            <span className='text-red-500 text-sm min-h-[20px] '>{errors.zipCode?.message || ''}</span>
    
            <label htmlFor="website" className="block text-sm font-medium text-gray-700 ml-2">
              Website (optional)
            </label>
            <input 
              {...register("website")}
              className={`w-full p-3 border rounded-md ${errors.website ? 'border-red-500' : 'border-gray-300'}`}
              type="url" 
              placeholder='Website'
            />
            <span className='text-red-500 text-sm min-h-[20px] '>{errors.website?.message || ''}</span>   
    
          </div>
        </div>
           
      <button 
        type="submit" 
        disabled={isSubmitting} 
        className={`w-4/6 md:w-1/2 p-3 bg-blue-600 text-white rounded-md transition-colors duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 hover:cursor-pointer'}`}
      >
        {isSubmitting ? 'Signing up...' : 'Sign Up'}
      </button>

      <Link to="/login" className="self-start text-sm text-blue-600 hover:underline hover:cursor-pointer mt-4">
        Already have an account? Login
      </Link>
      
      </form>
 
    </div>
  )
}
