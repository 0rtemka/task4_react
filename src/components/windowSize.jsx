import { useWindowSize } from "../hooks/useWindowSize"

export const WindowSize = () => {

    const size = useWindowSize()

    return (
        <div>
            {`Текущий размер окна браузера: ${size.width}:${size.height}`}
        </div>
    )
}