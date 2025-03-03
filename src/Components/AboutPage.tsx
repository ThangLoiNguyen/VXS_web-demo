import React from 'react'
import ourMission from '@/Assets/our-mission.avif'
import ourVision from '@/Assets/our-vision.avif'
import ourStory from '@/Assets/our-story.avif'
import Image from 'next/image'
export default function AboutPage() {
    const dataAbout = [
        {
            title:'Our Mission',
            text:'I am a paragraph. Click here to add your own text and edit me. It is easy to add your own text to this page. Just click the text to start editing, then delete it and start again.',
            image: ourMission
        },
        {
            title:'Our Vision',
            text:'I am a paragraph. Click here to add your own text and edit me. It is easy to add your own text to this page. Just click the text to start editing, then delete it and start again.',
            image: ourVision
        },
        {
            title:'Our Story',
            text:'I am a paragraph. Click here to add your own text and edit me. It is easy to add your own text to this page. Just click the text to start editing, then delete it and start again.',
            image: ourStory
        }
    ]
  return (
    <div>
      <span> We provide the web design</span>
      <div>
        {
            dataAbout.map(({ title, text, image }, index) => {
                return(
                    <div key={index}>
                        <h1>{title}</h1>
                        <p>{text}</p>
                        <Image src={image} alt="image" width={500} height={300}/>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}
