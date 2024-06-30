import Navbar from "@/components/global/navbar";
import Image from "next/image";
import { ContainerScroll } from '@/components/global/container-scroll-animation'
import { Button } from '@/components/ui/button'
import { WavyBackground } from "@/components/global/waves";
import { products } from "@/lib/constants";
import { HeroParallax } from "@/components/global/connect-parallax";
import { LampComponent } from '@/components/global/lamp';
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
    <Navbar />
   
    <WavyBackground backgroundFill="bg-[#222222]"className="max-w-4xl mx-auto pb-40">
      <div className="flex mt-[340px] z-[11] mb-64 "> <h1 className="text-[82px] md:text-8xl   bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 font-sans font-bold">
        beats.ai
          </h1>
          </div>
          </WavyBackground> 
          
      <section className="h-screen w-full bg-black border-none !overflow-visible relative flex flex-col items-center mt-[-100px] antialiased">
      <div className="absolute inset-0  h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
      
      <div className="flex flex-col mt-[100px] md:mt-[-120px]">
      <ContainerScroll
      titleComponent={
        <div className="flex items-center flex-col mt-[-100px]">
          <Button 
            size={'lg'}
            className="p-8 mb-8 md:mb-[150px] text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
              create beats
            </span>
          </Button>
          <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
           Generate personalized beats using AI
          </h1>
        </div>
      }
    />
    
        </div>
      </section>
      <section className="bg-black">
        <HeroParallax products={products}></HeroParallax>
      </section>
      <section className="mt-[0px] bg-black w-full"> 
      <LampComponent
      />
    
      </section>
     
    </main>
  );
}
