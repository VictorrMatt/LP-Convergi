import React from "react";
import { ServiceCircle } from "./ServiceCircle";
import { ScrollIndicator } from "./ScrollIndicator";

const serviceCircles = [
  {
    svg: `<svg id="32:25832" width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" class="service-circle" style="width: 100%; height: 100%"> <circle cx="120" cy="120" r="118.902" stroke="url(#paint0_linear_32_25832)" stroke-width="2.19512"></circle> <text fill="#D6D6E1" xml:space="preserve" style="white-space: pre" font-family="Bricolage Grotesque" font-size="20" font-weight="600" letter-spacing="0em"><tspan x="83.3416" y="158.6">UX & UI </tspan><tspan x="68.3513" y="186.6">Excellence</tspan></text> <path d="M110.833 112.616V96.3333C110.833 94.4924 112.326 93 114.167 93H125.833C127.674 93 129.167 94.4924 129.167 96.3333V112.616" stroke="#3078FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M115.833 93H124.167V96.3333C124.167 96.7936 123.793 97.1667 123.333 97.1667H116.667C116.206 97.1667 115.833 96.7936 115.833 96.3333V93Z" stroke="#3078FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="105" y="83" width="30" height="30" rx="8.33333" stroke="#3078FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></rect> <defs> <linearGradient id="paint0_linear_32_25832" x1="240" y1="139.024" x2="4.75611" y2="84.1463" gradientUnits="userSpaceOnUse"> <stop offset="0.045" stop-color="#2B0C56"></stop> <stop offset="0.33" stop-color="#140F3C"></stop> <stop offset="0.65" stop-color="#190A3A"></stop> <stop offset="0.97" stop-color="#2D0B58"></stop> </linearGradient> </defs> </svg>`,
    title: "UX & UI",
    subtitle: "Excellence",
  },
  {
    svg: `<svg id="32:25836" width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" class="service-circle" style="width: 100%; height: 100%"> <circle cx="120" cy="120" r="118.902" stroke="url(#paint0_linear_32_25836)" stroke-width="2.19512"></circle> <text fill="#D6D6E1" xml:space="preserve" style="white-space: pre" font-family="Bricolage Grotesque" font-size="20" font-weight="600" letter-spacing="0em"><tspan x="73.5737" y="158.6">AI Chat & </tspan><tspan x="64.1108" y="186.6">Automation</tspan></text> <path d="M107.512 101.762C106.677 102.822 106.465 104.245 106.955 105.503C108.289 107.806 113.832 107.171 119.998 104.244" stroke="#3078FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M132.489 94.2384C133.322 93.1771 133.534 91.7548 133.046 90.4968C131.712 88.1942 126.168 88.8294 120.002 91.7557" stroke="#3078FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M125.427 101.121C124.897 107.911 122.668 113.006 120 113.006C118.905 113.006 117.886 112.136 117.026 110.654" stroke="#3078FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M110.486 89.1063C109.147 88.9171 107.806 89.445 106.955 90.4969C105.621 92.7995 108.937 97.2697 114.573 101.121" stroke="#3078FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M129.514 106.894C130.854 107.083 132.195 106.555 133.046 105.503C134.38 103.2 131.063 98.7303 125.428 94.8787" stroke="#3078FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M114.573 94.8787C115.103 88.0892 117.332 82.9937 120 82.9937C121.095 82.9937 122.114 83.8641 122.975 85.3464" stroke="#3078FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <defs> <linearGradient id="paint0_linear_32_25836" x1="240" y1="139.024" x2="4.75611" y2="84.1463" gradientUnits="userSpaceOnUse"> <stop offset="0.045" stop-color="#2B0C56"></stop> <stop offset="0.33" stop-color="#140F3C"></stop> <stop offset="0.65" stop-color="#190A3A"></stop> <stop offset="0.97" stop-color="#2D0B58"></stop> </linearGradient> </defs> </svg>`,
    title: "AI Chat &",
    subtitle: "Automation",
  },
  {
    svg: `<svg id="32:25840" width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" class="service-circle" style="width: 100%; height: 100%"> <circle cx="120" cy="120" r="118.902" stroke="url(#paint0_linear_32_25840)" stroke-width="2.19512"></circle> <text fill="#D6D6E1" xml:space="preserve" style="white-space: pre" font-family="Bricolage Grotesque" font-size="20" font-weight="600" letter-spacing="0em"><tspan x="57.1562" y="158.6">Web, Apps & </tspan><tspan x="50.3398" y="186.6">Landing Pages</tspan></text> <path d="M104.994 90.3305H135.006" stroke="#3078FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M118.11 86.1538L118.101 86.1621L118.11 86.1704L118.118 86.1621L118.11 86.1538" stroke="#3078FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M134.373 105.236L126.925 102.753C126.592 102.642 126.225 102.729 125.977 102.977C125.729 103.225 125.643 103.592 125.754 103.925L128.236 111.373C128.351 111.716 128.654 111.961 129.014 112C129.373 112.04 129.723 111.866 129.909 111.556L131.414 109.049C131.57 108.788 131.788 108.57 132.049 108.413L134.557 106.909C134.867 106.723 135.04 106.373 135.001 106.014C134.961 105.654 134.716 105.35 134.373 105.236Z" stroke="#3078FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M134.531 111.531L131.692 108.692" stroke="#3078FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M131.752 97.6352L130.85 98.5623L131.752 97.6352" stroke="#3078FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M126.194 95.3327L126.21 96.6258" stroke="#3078FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M120.636 97.6353L121.563 98.5356L120.636 97.6353" stroke="#3078FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M118.333 103.193L119.627 103.174L118.333 103.193" stroke="#3078FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M120.636 108.751L121.563 107.849L120.636 108.751" stroke="#3078FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M113.876 86.1538L113.868 86.1621L113.876 86.1704L113.884 86.1621L113.876 86.1538" stroke="#3078FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M109.628 86.1455L109.619 86.1538L109.628 86.1621L109.636 86.1538L109.628 86.1455" stroke="#3078FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M116.665 112.006H108.329C107.444 112.006 106.596 111.655 105.97 111.03C105.345 110.404 104.994 109.556 104.994 108.671V85.3284C104.994 84.4439 105.345 83.5956 105.97 82.9702C106.596 82.3447 107.444 81.9937 108.329 81.9937H131.672C132.556 81.9937 133.405 82.3447 134.03 82.9702C134.655 83.5956 135.006 84.4439 135.006 85.3284V93.6652" stroke="#3078FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <defs> <linearGradient id="paint0_linear_32_25840" x1="240" y1="139.024" x2="4.75611" y2="84.1463" gradientUnits="userSpaceOnUse"> <stop offset="0.045" stop-color="#2B0C56"></stop> <stop offset="0.33" stop-color="#140F3C"></stop> <stop offset="0.65" stop-color="#190A3A"></stop> <stop offset="0.97" stop-color="#2D0B58"></stop> </linearGradient> </defs> </svg>`,
    title: "Web, Apps &",
    subtitle: "Landing Pages",
  },
];

export const HeroSection = () => {
  return (
    <main className="w-[1312px] h-[1080px] max-sm:h-[956px] pt-[360px] max-sm:pt-[318px] gap-[60px] pb-[60px] max-sm:pb-[250px] flex flex-col relative items-center justify-center">
      <section className="max-w-[1007px] max-sm:px-[24px] w-full flex flex-col items-center justify-center gap-10 ">
        <header className="flex flex-col items-center gap-6 w-full ">
          <h1 className="text-white text-center text-8xl font-semibold leading-[104px] max-sm:text-[64px] max-sm:leading-[72px] ">
            Innovation, Design,<br/> & Strategy
          </h1>
          <p className="text-[#BFBFBF] font-inter text-center text-base font-normal leading-5">
            <span>Elevating Digital Experiences Beyond Expectations.</span>
            <br />
            <span>
              UX/UI design and AI-driven development to transform ideas into
              seamless interactions.
            </span>
          </p>
        </header>
        <button
          className="text-white text-base font-bold leading-6 cursor-pointer px-6 py-3 rounded-[200px] bg-blue-600 hover:bg-blue-700 transition-colors  bg-gradient-to-r from-[#3078FF] to-[#7601AB]"
          aria-label="Request Free Consultation"
        >
          Free Consultation
        </button>
      </section>
       <ScrollIndicator className="" />
       <div className="flex justify-center items-center gap-10 w-[800px] mx-auto my-0 bottom-0 max-md:w-full max-md:flex-wrap max-md:relative max-md:mt-10 max-sm:hidden">
        {serviceCircles.map((circle, index) => (
          <ServiceCircle
            key={index}
            svg={circle.svg}
            title={circle.title}
            subtitle={circle.subtitle}
          />
        ))}
      </div>
    </main>
  );
};
