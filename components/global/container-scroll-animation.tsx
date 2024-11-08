/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import StarryNight from "../Scene/StarryNight"

export const ContainerScroll = ({
  titleComponent,
}: {
  titleComponent: string | React.ReactNode
}) => {
  const containerRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const scaleDimensions = () => {
    return isMobile ? [1,1] : [1, 1]
  }

  const rotate = useTransform(scrollYProgress, [0, 0], [20, 10])
  const translate = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <div
      className="h-[80rem] flex items-center justify-center relative p-20"
      ref={containerRef}
    >
      <div
        className="pt-40 w-full relative"
        style={{
          perspective: '1000px',
        }}
      >
        <Header
          translate={translate}
          titleComponent={titleComponent}
        />
        <motion.div
          style={{
            rotateX: rotate,
            boxShadow:
              '0 10px #ffffff4d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
          }}
          className="max-w-5xl -mt-12 mx-auto h-[40rem] w-full p-6 bg-[#222222] rounded-[30px] shadow-2xl"
        >
          <StarryNight/>
        </motion.div>
      </div>
    </div>
  )
}

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  )
}