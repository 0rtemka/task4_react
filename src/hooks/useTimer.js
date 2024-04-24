import { useEffect, useState } from "react";

export const useTimer = (timerInit) => {

    const [timer, setTimer] = useState(timerInit)

    useEffect(
        () => { 
            if (timer === 0) return

            const timeout = setInterval(
                () => { setTimer(timer - 1) },
                1000
            )

            return () => clearInterval(timeout)
        }, [timer])

    return timer
} 