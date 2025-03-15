import React from "react";
import { ServiceCard } from "./ServicesCard";

const servicesData = [
  {
    icon: `<svg id="32:25914" layer-name="Mobile, Devices/mobile-devices-camera" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; flex-shrink: 0"> <path fill-rule="evenodd" clip-rule="evenodd" d="M30 8.33333V31.6667C30 33.5076 28.5076 35 26.6667 35H13.3333C11.4924 35 10 33.5076 10 31.6667V8.33333C10 6.49238 11.4924 5 13.3333 5H26.6667C28.5076 5 30 6.49238 30 8.33333Z" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M24.1666 5V8.33333C24.1666 8.79357 23.7935 9.16667 23.3333 9.16667H16.6666C16.2063 9.16667 15.8333 8.79357 15.8333 8.33333V5" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
    title: "Usability",
    links: [
      { text: "Simple Design" },
      { text: "User Centered" },
      { text: "Human Behaviour" },
      { text: "Visual Organisation" },
    ],
    className: "bg-[#30345B]",
    borderPosition: "bottom",
  },
  {
    icon: `<svg id="32:25923" layer-name="Computers, Devices, Electronics/desktop-computer-pc" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; flex-shrink: 0"> <rect x="25.0024" y="16.6655" width="11.6715" height="18.341" rx="1.66667" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></rect> <path d="M25.0021 28.3371H6.66114C4.81942 28.3371 3.32642 26.8441 3.32642 25.0023V9.9961C3.32642 8.15438 4.81942 6.66138 6.66114 6.66138H30.0042C31.8459 6.66138 33.3389 8.15438 33.3389 9.9961V16.6655" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.99585 33.3391H20" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
    title: "Web Design",
    links: [
      { text: "Website Ecommerce" },
      { text: "SaaS & CRM" },
      { text: "Landing Page" },
      { text: "Apps" },
    ],
    className: "bg-[#242A53]",
    borderPosition: "top",
  },
  {
    icon: `<svg id="32:25932" layer-name="Internet, Network/Browser, Internet, Web, Network, Code" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; flex-shrink: 0"> <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3333 35H6.66659C4.82492 35 3.33325 33.5083 3.33325 31.6667V8.33333C3.33325 6.49167 4.82492 5 6.66659 5H33.3333C35.1749 5 36.6666 6.49167 36.6666 8.33333V31.6667C36.6666 33.5083 35.1749 35 33.3333 35Z" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3.33325 13.3333H36.6666" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.96517 9.1502C7.96017 9.1502 7.95684 9.15353 7.95684 9.15853C7.95684 9.16353 7.96017 9.16686 7.96517 9.16686C7.97017 9.16686 7.9735 9.16353 7.9735 9.15853C7.9735 9.15353 7.97017 9.1502 7.96517 9.1502" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.2035 9.1502C12.1985 9.1502 12.1951 9.15353 12.1951 9.15853C12.1951 9.16353 12.2001 9.16686 12.2035 9.16686C12.2085 9.16686 12.2118 9.16353 12.2118 9.15853C12.2118 9.15353 12.2085 9.1502 12.2035 9.1502" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.4351 9.1502C16.4301 9.1502 16.4268 9.15353 16.4268 9.15853C16.4268 9.16353 16.4301 9.16686 16.4351 9.16686C16.4401 9.16686 16.4435 9.16353 16.4435 9.15853C16.4435 9.15353 16.4401 9.1502 16.4351 9.1502" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21.3 18.3333L18.7 29.9999" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M25.4167 21.25L28.3334 24.1667L25.4167 27.0833" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.5834 27.0833L11.6667 24.1667L14.5834 21.25" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
    title: "Development",
    links: [
      { text: "Front-end" },
      { text: "Back-end" },
      { text: "Low Code" },
      { text: "Systems" },
    ],
    className: "bg-[#191F4B]",
    borderPosition: "bottom",
  },
  {
    icon: `<svg id="32:25941" layer-name="Technology/ai-artificial-intelligence-chip" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; flex-shrink: 0"> <path d="M36.6667 15.0001H35.8334" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M36.6667 20.0001H35.8334" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M36.6667 25.0001H35.8334" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="8.33325" y="8.33325" width="23.3333" height="23.3333" rx="6.48148" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></rect> <path d="M4.16675 15.0001L3.33341 15.0001" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4.16675 20.0001L3.33341 20.0001" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4.16675 25.0001L3.33341 25.0001" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.0001 3.33341V4.16675" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20.0001 3.33342V4.16674" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M25.0001 3.33341V4.16675" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.0001 35.8334V36.6667" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20.0001 35.8334V36.6667" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M25.0001 35.8334V36.6667" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.6638 22.2501H20.4426" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20.9382 23.75L18.5082 16.25H16.6182L14.1882 23.75" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M25.0626 23.75V16.25" stroke="#904AE8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
    title: "Artificial Intelligence",
    links: [
      { text: "Agents" },
      { text: "Multi-agent Systems" },
      { text: "Automations" },
      { text: "Visual Organisation" },
    ],
    className: "bg-[#161B41]",
    borderPosition: "top",
  },
];

export const ServicesGrid: React.FC = () => {
  return (
    <section className="flex items-start w-full max-md:flex-wrap">
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          links={service.links}
          className={service.className}
          borderPosition={service.borderPosition}
        />
      ))}
    </section>
  );
};
