import React from 'react';
import CustomButton from './CustomButton';

const HelpBox = () => {
    return (
        <div className="bg-white text-green-700 p-6 rounded-md shadow-md mt-10 w-[100%] md:max-w-[600px]">
            <h3 className="text-lg font-bold mb-2">Still have questions?</h3>
            <p className="text-base mb-4">We're happy to help. You can reach us via email for anything we didn't cover.</p>
            <CustomButton text={'Email us'} className={'bg-white border border-green-400 inline-block px-4 py-2 rounded'} />
        </div>
    )
}

export default HelpBox;