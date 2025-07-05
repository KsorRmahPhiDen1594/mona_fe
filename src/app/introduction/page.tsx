import Banner from "@/components/introduction/banner";
import VideoSection from "@/components/introduction/video-section";
import IntroText from "@/components/introduction/intro-text";
import { GallerySection, SingleImageCard } from "@/components/gallery/gallery-section";

export default function Introduction() {
    const cards = [
        { id: 1, height: 'min-h-[100px]' },
        { id: 2, height: 'min-h-[200px]' },
        { id: 3, height: 'min-h-[150px]' },
        { id: 4, height: 'min-h-[120px]' },
        { id: 5, height: 'min-h-[180px]' },
        { id: 6, height: 'min-h-[140px]' },
        { id: 7, height: 'min-h-[160px]' },
        { id: 8, height: 'min-h-[130px]' },
        { id: 9, height: 'min-h-[170px]' },
        { id: 10, height: 'min-h-[190px]' },
        { id: 11, height: 'min-h-[110px]' },
        { id: 12, height: 'min-h-[150px]' },
        { id: 13, height: 'min-h-[140px]' },
        { id: 14, height: 'min-h-[180px]' },
        { id: 15, height: 'min-h-[160px]' },
        { id: 16, height: 'min-h-[120px]' },
    ];
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
            <GallerySection />
            <div className="w-full p-4 grid grid-cols-4 gap-4">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`card bg-white rounded-lg p-4 shadow-md ${card.height}`}
                    >
                        Card {card.id}
                        <p className="text-sm text-gray-500">
                            {card.id % 2 === 0 ? 'Some extra text here' : 'Content'}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
