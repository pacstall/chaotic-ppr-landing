// Imports
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

// Content Component
function Content({downloadLink}) {
    // Copy alert state
    const [copiedAlert, setCopiedAlert] = useState(false);

    // Copy download function
    const copyDownload = () => {
        navigator.clipboard.writeText(downloadLink);
        setCopiedAlert(true);
        setTimeout(() => { // Hides alert after 5 secs. 
            setCopiedAlert(false);
        }, 5000);
    }

    // Display content
    return (
        <div className="lg:w-[80%] md:w-[90%] w-full p-4 mx-auto my-4">
            {copiedAlert && (
                <div className="fixed bottom-0 left-50 right-0 m-4 rounded-lg bg-pacstall-green p-4 text-white text-center">
                    <h1 className="text-2xl font-bold">Copied to clipboard!</h1>
                    <p>You can now paste this command into your terminal.</p>
                </div>
            )}
                <div className="flex justify-center items-center">
                    <Image 
                        src="/logo.png" 
                        width={480}
                        height={270}
                        alt="logo"
                    />
                </div>
            <div className="my-8">
                <h1 className="text-center text-3xl text-white font-bold">What is the Chaotic PPR?</h1>
                <p className="text-xl text-white my-8">
                    The Chaotic PPR is a system where Pacstall builds debs from pacscripts and uploads them to an APT repository, meaning that you can enjoy prebuilt pacstall packages without the build times, and you can even use the Chaotic PPR without Pacstall installed!
                </p>
            </div>
            <div className="my-8">
                <h1 className="text-3xl text-white font-bold text-center">Installation instructions:</h1>
                <div className="bg-darker p-4 my-8 rounded-lg w-auto hover:cursor-pointer" onClick={copyDownload}>
                    <h1 className="text-2xl text-pacstall-green font-bold text-center download">
                        <span className="text-pacstall-pink">$</span> {downloadLink}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Content;
