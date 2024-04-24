import { useEffect, useState } from "react"

export const useWindowSize = () => {

    const [size, setSize] = useState({width: window.innerWidth, height: window.innerHeight})

    useEffect(
        () => {
            function handleResize() {
                setSize({width: window.innerWidth, height: innerHeight})
            }
            window.addEventListener('resize', handleResize)
            handleResize()
            return () => window.removeEventListener('resize', handleResize)
        }, [])

    return size
}