import Image from 'next/image'
import React from 'react'

const sections = [
    {
        title: "Login",
        image: "https://open.spotifycdn.com/cdn/images/download-page-image-mac.fec937cc.png"
    },
    {
        title: "Home",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWm2gV61s1PJF1iMOrbWuoYfqCHSrxKkCLdg&s"
    }
]

const ProjectSections = () => {
    return (
        <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
            {sections.map(section => (
                <div key={section.title} className="flex flex-col items-center gap-6 md:gap-12 ">
                    <h2>{section.title} </h2>
                    <Image
                        src={section.image}
                        alt={`Imagem da sessão ${section.title}`}
                        width={1080}
                        height={672}
                        unoptimized
                        className="w-full aspect-auto rounded-lg object-cover"
                    />
                </div>
            ))}

        </section>
    )
}

export default ProjectSections