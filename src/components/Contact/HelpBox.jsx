import React from 'react';
import CustomButton from './CustomButton';

const HelpBox = () => {
    return (
        <div className="bg-white text-green-700 p-6 rounded-md shadow-md mt-10 lg:mt-[2%] 2xl:mt-[.9vw] w-[100%] md:max-w-[600px] lg:max-w-[100%] lg:h-[262px]">
            <h3 className="text-lg font-bold mb-2">Still have questions?</h3>
            <p className="text-base mb-4">We're happy to help. You can reach us via email for anything we didn't cover.</p>
            <CustomButton text={'Email us'} className={'bg-white border border-green-400 inline-block px-4 py-2 rounded cursor-pointer hover:bg-green-100 transition duration-2000 ease-in-out'} />
        </div>
    )
}

export default HelpBox;