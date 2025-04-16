import React from 'react'

const ProjectDetails = () => {
  return (
    <section className=" w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden ">
      <div className="absolute inset-0 z-[-1]"
      style={{
        background: 'url(../../../../public/images/hero-bg.png) no-repeat center/cover, url(../../../../public/images/profile-pic.jpeg)',
      }}
       />
    </section>
  )
}

export default ProjectDetails