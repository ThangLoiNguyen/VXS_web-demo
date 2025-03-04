import React from 'react'
import ourMission from '@/Assets/our-mission.avif'
import ourVision from '@/Assets/our-purpose.avif'
import ourStory from '@/Assets/our-story.avif'
import Image from 'next/image'
export default function AboutPageContent() {
    const dataAbout = [
        {
            id: 1,
            title: 'Our Story',
            text: 'I am a paragraph. Click here to add your own text and edit me. It is easy to add your own text to this page. Just click the text to start editing, then delete it and start again.',
            image: ourStory,
            background: 'bg-green-500'
        },
        {
            id: 2,
            title: 'Our Vision',
            text: 'I am a paragraph. Click here to add your own text and edit me. It is easy to add your own text to this page. Just click the text to start editing, then delete it and start again.',
            image: ourVision,
            background: 'bg-blue-500'
        },
        {
            id: 3,
            title: 'Our Mission',
            text: 'I am a paragraph. Click here to add your own text and edit me. It is easy to add your own text to this page. Just click the text to start editing, then delete it and start again.',
            image: ourMission,
            background: 'bg-red-500'
        }
    ]
    return (
        <div className='flex flex-col w-full py-10'>
            <div className="flex flex-col gap-10">
                {dataAbout.map(({ id, title, text, image, background }) => (
                    <div key={id} className={`flex flex-row w-full gap-2
                        ${id % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <div className={`w-full md:w-3/4 flex gap-10 p-3 items-center
                            ${background}
                            ${id % 2 === 1 ? 'flex-row rounded-r-full pl-3 md:pl-10 animate-fade-left-right' : 'flex-row-reverse rounded-l-full pr-3 md:pr-10 animate-fade-right-left'}`}>
                            <div className='flex flex-col items-center gap-3'>
                                <h3 className="md:text-3xl font-semibold">{title}</h3>
                                <p className="text-sm md:text-base text-gray-600">{text}</p>
                            </div>
                            <Image src={image} alt={title} className={`w-1/2 h-full object-cover
                                ${id % 2 === 0 ? 'rounded-l-full' : 'rounded-r-full'}`} />
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}
