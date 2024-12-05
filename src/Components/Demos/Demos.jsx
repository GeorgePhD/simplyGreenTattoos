import { useEffect } from "react"

const Demos = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (

        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="title text-center text-3xl">Demos</h1>
        </div>
    )
}

export default Demos