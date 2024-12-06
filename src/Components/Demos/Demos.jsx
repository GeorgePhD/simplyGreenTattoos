import { useEffect } from "react"



const Demos = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const demoVideos = [
        {
            platform: "TikTok",
            videoTitle: "Octopus",
            embedUrl: "https://www.tiktok.com/embed/7420579877482515718", // TikTok embed URL 

        },
        {
            platform: "Instagram",
            videoTitle: "Jesus in lines",
            embedUrl: "https://www.instagram.com/p/DCzoYhSvwm4/embed", // Instagram embed  
        },
        {
            platform: "YouTube",
            videoTitle: "Mega Hits 2024 🌱 The Best Of Vocal Deep House Music Mix 2024 🌱 Summer Music Mix 2024 #205",
            embedUrl: "https://www.youtube.com/embed/NqDGkdDh8WE", // YouTube embed URL
        },
        {
            platform: "TikTok",
            videoTitle: "Octopus",
            embedUrl: "https://www.tiktok.com/embed/7420579877482515718", // TikTok embed URL 

        },
        {
            platform: "Instagram",
            videoTitle: "Jesus in lines",
            embedUrl: "https://www.instagram.com/p/DCzoYhSvwm4/embed", // Instagram embed  
        },
        {
            platform: "YouTube",
            videoTitle: "Mega Hits 2024 🌱 The Best Of Vocal Deep House Music Mix 2024 🌱 Summer Music Mix 2024 #205",
            embedUrl: "https://www.youtube.com/embed/NqDGkdDh8WE", // YouTube embed URL
        },
        {
            platform: "TikTok",
            videoTitle: "Octopus",
            embedUrl: "https://www.tiktok.com/embed/7420579877482515718", // TikTok embed URL 

        },
        {
            platform: "Instagram",
            videoTitle: "Jesus in lines",
            embedUrl: "https://www.instagram.com/p/DCzoYhSvwm4/embed", // Instagram embed  
        },
        {
            platform: "YouTube",
            videoTitle: "Mega Hits 2024 🌱 The Best Of Vocal Deep House Music Mix 2024 🌱 Summer Music Mix 2024 #205",
            embedUrl: "https://www.youtube.com/embed/NqDGkdDh8WE", // YouTube embed URL
        },
    ];

    return (
        <section className="bg-gray-100 py-10 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Demos
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {demoVideos.map((video, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
                        >
                            <div className="relative pb-[56.25%] h-0"> {/* Aspect ratio 16:9 */}
                                <iframe
                                    src={video.embedUrl}
                                    title={video.videoTitle}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full"
                                ></iframe>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                    {video.videoTitle}
                                </h3>
                                <span className="text-sm text-blue-500">{video.platform}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Demos;

