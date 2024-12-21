// Imports
import React from 'react';
import Image from 'next/image';

// Content Component
function Content() {
    return(
        <div className="lg:w-[80%] md:w-[90%] w-full p-4 mx-auto my-4">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec dictum turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris lacus eros, mollis id bibendum sed, semper vitae ligula. Pellentesque nibh lacus, ultrices vel finibus aliquet, pellentesque ac nisl. Donec quis porta massa. Cras tempus mattis mi vitae vestibulum. Duis semper lobortis nulla, ut sollicitudin neque suscipit eu. Morbi vitae felis in nulla interdum fringilla ac vitae felis. Fusce sit amet felis ut dolor blandit pretium. Donec imperdiet in ipsum at luctus. Nulla a enim vel ante consectetur dignissim. 
                </p>
            </div>
            <div className="my-8">
                <h1 className="text-3xl text-white font-bold text-center">Installation instructions:</h1>
                <div className="bg-darker p-4 my-8 rounded-lg w-auto">
                    <h1 className="text-2xl text-pacstall-green font-bold text-center">
                        <span className="text-pacstall-pink">$</span> sudo bash -c "$(curl -fsSL https://pacstall.dev/q/install)"
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Content;