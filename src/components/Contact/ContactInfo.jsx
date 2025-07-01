import React from 'react';

const  ContactInfo = () => {
    return (
        <section className="mt-10 flex flex-col gap-y-[10px] rounded-md shadow-md p-6">
            <h3 className="font-serif font-bold text-xl">Faculty Contact Info</h3>
            <div className="flex flex-col gap-y-[15px]">
                <div className="flex flex-row gap-x-[8px]">
                    📍
                    <div>
                        <h4 className="text-base font-bold">Faculty of Vocational and Technical Education</h4>
                        <p className="text-sm" >Opposite St. Peter’s Catholic Church,<br/>University of Nigeria, Nsukka, Enugu State.</p>
                    </div>                    
                </div>
                <div className="flex flex-row gap-x-[8px]">
                    🕿
                    <div>
                        <h4 className="text-base font-bold">Phone Number</h4>
                        <p className="text-sm">+234 803 278 9726</p>
                    </div>                    
                </div>
                <div className="flex flex-row gap-x-[8px]">
                    ✉️
                    <div>
                        <h4 className="text-base font-bold">Email Address</h4>
                        <p className="text-sm">vte@unn.edu.ng</p>
                    </div>                    
                </div>
            </div>            
        </section>
    )
}

export default ContactInfo;