export default function VideoSection() {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-1/2">
                {/* Khung bên ngoài */}
                <img
                    src="/assets/iframe-frame.png"
                    alt="Video Frame"
                    className="w-full h-auto relative z-10"
                />
                {/* YouTube iframe bên trong khung */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/7aDmATXOjDk?si=Gpbdpmgpn6w5cPxk&enablejsapi=1&origin=https%3A%2F%2Fmona.media"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            
            {/* Mona journey person left - bottom left corner */}
            <div className="absolute bottom-0 left-30 z-20">
                <img
                    src="/assets/mona-journey-person-left.png"
                    alt="Mona Journey Person Left"
                    className="w-120 h-auto"
                />
            </div>
            
            {/* Mona journey person right - bottom right corner */}
            <div className="absolute bottom-0 right-30 z-20">
                <img
                    src="/assets/mona-journey-person-right.png"
                    alt="Mona Journey Person Right"
                    className="w-120 h-auto"
                />
            </div>
        </div>
    );
} 