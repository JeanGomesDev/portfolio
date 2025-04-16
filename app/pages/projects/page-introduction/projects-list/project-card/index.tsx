import Image from 'next/image'
import React from 'react'

const ProjectCard = () => {
    return (
        <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group ">
            <div className="w-full h-48 overflow-hidden">
                <Image
                    width={380}
                    height={200}
                    unoptimized
                    src="https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA"
                    alt="thumbnail do projeto"
                    className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all "
                />
            </div>
            <div className="flex-1 flex flex-col p-8">
                <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">Nome do Projeto</strong>
                <p className="mt-2 text-gray-400 line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro itaque delectus fugiat nihil eos consequuntur facilis numquam.
                    Ea quisquam voluptas, ratione hic iusto similique deserunt ducimus.
                    Deserunt, minima. Enim, rem?
                </p>
                <span className="text-gray-300 text-sm font-medium block mt-auto truncate ">Next.js, Next.js, Next.js, Next.js ,Next.js, Next.js, Next.js, Next.js,</span>
            </div>
        </div>
    )
}

export default ProjectCard
