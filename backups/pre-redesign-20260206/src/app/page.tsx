"use client";

import SlideHero from "@/components/slides/Slide1_Hero";
import Slide2_Crisis from "@/components/slides/Slide2_Crisis";
import Slide3_Market from "@/components/slides/Slide3_Market";
import Slide_ICP from "@/components/slides/Slide_ICP_V2";
import Slide4_WhyNow from "@/components/slides/Slide4_WhyNow";
import Slide5_Product from "@/components/slides/Slide5_Product";
import Slide6_Experience from "@/components/slides/Slide6_Experience";
import Slide7_Psychology from "@/components/slides/Slide7_Psychology";
import Slide8_Economics from "@/components/slides/Slide8_Economics";
import Slide9_Traction from "@/components/slides/Slide9_Traction";
import Slide10_Competition from "@/components/slides/Slide10_Competition_V2";
import Slide11_BusinessModel from "@/components/slides/Slide11_BusinessModel";
import Slide12_Team from "@/components/slides/Slide12_Team";
import Slide13_Roadmap from "@/components/slides/Slide13_Roadmap";
import Slide14_Ask from "@/components/slides/Slide14_Ask";
import { Slide } from "@/components/ui/slide";
import { useEnhancedScroll } from "@/hooks/useEnhancedScroll";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const TOTAL_SLIDES = 16; // 15 main slides + Thank You slide

export default function Home() {
  const { currentSlide, scrollToSlide, containerRef } = useEnhancedScroll(TOTAL_SLIDES);

  return (
    <>
      <main
        ref={containerRef as React.RefObject<HTMLElement>}
        className="h-[100dvh] w-full overflow-y-scroll snap-y snap-mandatory bg-deep-void text-white no-scrollbar isolate"
      >
        <div data-slide-index="0"><SlideHero /></div>
        <div data-slide-index="1"><Slide2_Crisis /></div>
        <div data-slide-index="2"><Slide3_Market /></div>
        <div data-slide-index="3"><Slide_ICP /></div>
        <div data-slide-index="4"><Slide4_WhyNow /></div>
        <div data-slide-index="5"><Slide5_Product /></div>
        <div data-slide-index="6"><Slide6_Experience /></div>
        <div data-slide-index="7"><Slide7_Psychology /></div>
        <div data-slide-index="8"><Slide8_Economics /></div>
        <div data-slide-index="9"><Slide9_Traction /></div>
        <div data-slide-index="10"><Slide10_Competition /></div>
        <div data-slide-index="11"><Slide11_BusinessModel /></div>
        <div data-slide-index="12"><Slide12_Team /></div>
        <div data-slide-index="13"><Slide13_Roadmap /></div>
        <div data-slide-index="14"><Slide14_Ask /></div>

        {/* End of Deck */}
        <div data-slide-index="15">
          <Slide className="bg-deep-void flex items-center justify-center">
            <div className="text-center opacity-50">
              <h2 className="text-2xl font-mono mb-4 text-white">Thank You</h2>
              <p className="text-white">Gamified Data Arcade</p>
            </div>
          </Slide>
        </div>
      </main>

      {/* Scroll Progress Indicator */}
      <ScrollProgress
        totalSlides={TOTAL_SLIDES}
        currentSlide={currentSlide}
        onSlideClick={scrollToSlide}
      />
    </>
  );
}
