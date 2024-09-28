import React from 'react';
import heroimage from '../assets/heroimage.svg';

const Hero = ({ onSubmit }) => {
    return (
        <div className="relative w-full h-screen">
            <img 
                src={heroImage} 
                alt="Hero Image" 
                className="absolute inset-0 object-cover w-full h-full" 
            />
            <div className="relative flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                <div className="text-center text-white p-5">
                    <h1 className="text-4xl md:text-6xl font-bold">Welcome to FoTI Betting</h1>
                    <p className="mt-4 text-lg md:text-xl">
                        Test your knowledge and win amazing prizes while supporting wildlife conservation!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
