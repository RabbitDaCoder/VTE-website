import React from 'react';

const HelpBox = () => {
    return (
        <div className="flex-1 p-6 rounded-md shadow-md mt-10">
            <h3 className="text-xl font-serif font-bold mb-2">Still have questions?</h3>
            <p className="text-sm mb-4">We're happy to help. You can reach us via email for anything we didn't cover.</p>
            <a href="mailto:vte@unn.edu.ng" className="inline-block px-4 py-2 rounded">Email Us</a>
        </div>
    )
}

export default HelpBox;