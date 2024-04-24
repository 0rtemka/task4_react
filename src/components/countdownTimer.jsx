import { useTimer } from "../hooks/useTimer"

export const CountdownTimer = () => {    

    const timer = useTimer(10)

    return (
        <div>
            {`Таймер: ${timer}`}
        </div>
    )
}