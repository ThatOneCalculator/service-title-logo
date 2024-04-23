import { getImages } from "@/data/images"
import Image from "next/image";
import Link from "next/link"
import ArtCard from "./ArtCard"

export default async function Home() {
  return (
    <main className="*:mb-2">
      <div className='relative'>
        <h1 className="text-6xl font-display tracking-wider text-slate-600 relative z-[1]">VTuber Service Logo</h1>
      </div>
      <p className="">A collection of service logos with the VTuber style.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-2 gap-y-8 mt-8">
        {
          (await getImages()).map((image, index) => {
            return (
              <ArtCard key={index} image={image} />
            )
          })
        }
      </div>
    </main>
  );
}