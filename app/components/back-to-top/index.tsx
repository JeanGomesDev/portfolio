'use client'
 
import { TbArrowNarrowUp } from 'react-icons/tb'
import { useCallback, useEffect, useState } from 'react'
import Button from '../buttons'
 
export const BackToTop = () => {
    const [show, setShow] = useState(false)
   
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const handleScroll = useCallback(() => {
      if (!show && window.scrollY > 500) setShow(true)
      if (show && window.scrollY <= 500) setShow(false)
    }, [show])
   
    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])
   
    return (
      <div className="fixed right-4 bottom-4 z-20">
        {show ? (
          <Button onClick={scrollToTop} className="shadow-lg shadow-emerald-400/20">
            <TbArrowNarrowUp size={20} />
          </Button>
        ) : null}
      </div>
    )
  }