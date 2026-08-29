import Sticker from "./Sticker";
import {
  Bike,
  Trees
} from "lucide-react";
import Image from 'next/image'

export default function HeroCollage () {
    return (
        <div className="grid grid-cols-3 gap-3">
        {/* Card 1 */}
        <div className="col-span-2 aspect-[4/3] relative rounded-[28px] bg-white border-2 border-black shadow-[6px_6px_0_0_#1c2b2d] p-2">
            <div className="absolute -top-3 -left-3 rotate-[-4deg]">
                <Sticker text="More neighbors"/>
            </div>
            <div className="overflow-hidden w-full h-full rounded-[28px] ">
                <Image
                  src="/assets/img/printers-row-art-fest.jpg"
                  width={400}
                  height={267}
                  style={{objectFit: "cover"}}
                  alt="Printers Row Art Fest"
                  className="w-full h-full"
                />
            </div>
        </div>
        {/* Card 2 */}
        <div className="aspect-square rounded-[28px] bg-[#ffd166] border-2 border-black shadow-[6px_6px_0_0_#1c2b2d] p-5 flex items-center justify-center">
            <Bike className="w-12 h-12"/>
        </div>
        {/* Card 3 */}
        <div className="aspect-square rounded-[28px] bg-white border-2 border-black shadow-[6px_6px_0_0_#1c2b2d] p-5 flex items-center justify-center">
            <Trees className="w-12 h-12"/>
        </div>
        {/* Card 4 */}
        <div className="col-span-2 aspect-[4/3] rounded-[28px] bg-white border-2 border-black shadow-[6px_6px_0_0_#1c2b2d] p-2 relative">
            <div className="absolute -top-3 -right-3 rotate-4"><Sticker text="Play streets" color="#c9f0e1"/></div>
            <div className="overflow-hidden w-full h-full rounded-[28px] ">
                <Image
                  src="/assets/img/play_streets.jpg"
                  width={400}
                  height={267}
                  style={{objectFit: "cover"}}
                  alt="Printers Row Art Fest"
                  className="w-full h-full"
                />
            </div>
        </div>
        </div>
    )
}
