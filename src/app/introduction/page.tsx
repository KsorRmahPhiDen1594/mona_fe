import Banner from "@/components/introduction/banner";
import VideoSection from "@/components/introduction/video-section";
import IntroText from "@/components/introduction/intro-text";
import { GalleryExample } from "@/components/introduction/gallery-section";

export default function Introduction() {
    return (
        <div className="px-1 flex flex-col items-center relative">
            <div className="relative z-10 w-full">
                <Banner />
            </div>
            <div className="relative -mt-80 w-full">
                <img
                    src="/assets/bg-abit.png"
                    alt="Background Image"
                    className="w-full object-contain relative z-0"
                />
                <VideoSection />
                <IntroText />
            </div>
            <GalleryExample/>
        </div>
    )
}
