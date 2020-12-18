import Head from 'next/head'
import { useEffect, useRef } from 'react'

export default function Home() {
  const avatarNod = useRef(null)
  const avatarShakeHead = useRef(null)
  const avatarHandUp = useRef(null)

  useEffect(()=>{
    document.addEventListener('keydown', ({code}) => {
      if (['KeyN', 'KeyS', 'KeyH'].includes(code)){
        let element
        let others
        if (code === 'KeyN'){
          element = avatarNod
          others = [avatarShakeHead, avatarHandUp]
        }
        if (code === 'KeyS'){
          element = avatarShakeHead
          others = [avatarNod, avatarHandUp]
        }
        if (code === 'KeyH'){
          element = avatarHandUp
          others = [avatarShakeHead, avatarNod]
        }
        element.current.classList.remove('hidden')
        element.current.play()
        others.forEach(el => el.current.classList.add('hidden'))
      }
    })
  }, [])

  return (
    <>
      <Head>
        <title>Zoo Conference Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <video className="avatarVideo" ref={avatarNod} src='/video/giraffeNod3.mp4' width="750" height="500" />
          <video className="avatarVideo hidden" ref={avatarShakeHead} src='/video/giraffeShakeHead.mp4' width="750" height="500" />
          <video className="avatarVideo hidden" ref={avatarHandUp} src='/video/giraffeHandUp.mp4' width="750" height="500" />
      </main>
    </>
  )
}
