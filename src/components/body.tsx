import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Body() {
    const router = useRouter();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-5 justify-center items-center sm:ml-0">
            <div className='text-center sm:text-left'>
            <h4 className='text-white text-5xl mt-10 sm:mt-44 font-serif'>An obscure task-manager <br></br>that you have never heard of</h4>
                <button className="flex flex-row items-center justify-center w-80 px-4 py-4 mb-4 sm:mb-0 sm:ml-14 text-sm font-bold bg-white leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4  focus:ring-opacity-50 focus:outline-none md:pl-8 md:pr-6 xl:pl-12 xl:pr-10 hover:shadow-lg hover:-translate-y-1 mt-6 sm:mt-56" type="button" onClick={() => router.push('/task')}>
                    Add your  task
                </button>
            </div>
            <div className='text-center sm:text-right w-full mt-10 sm:mt-0'>
                <Image src="/logo.png" alt="Your Logo" width={400} height={100} />
            </div>
        </div>
    );
}
