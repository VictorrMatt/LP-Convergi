"use client";
import { ContactInfo } from "./footer-content/ContactInfo";
import { SocialLinks } from "./footer-content/SocialLinks";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ContactSection() {
  const isMobile = useIsMobile();

  return (
    <div className="w-screen flex justify-center bg-[#07102F]">
    <section className="h-[578px] max-w-[1440px] relative flex flex-col gap-28 pt-28 pr-28 max-sm:pr-[0px] pl-28 max-sm:pl-[0px] w-full bg-[#07102F]">
      {/* DESKTOP */}
      <div className={isMobile ? 'hidden' : 'flex w-full gap-4 justify-between items-start'}>
        <div className="flex flex-col gap-28 items-start w-full">
        <h2 className="flex-1 text-[32px] font-semibold leading-10 text-white">
        Transform your ideas into<br/> impactful results
          </h2>
        <SocialLinks />
        </div>
          <ContactInfo />
      </div>

    {/* MOBILE */}
      <div className={isMobile ? 'flex px-6 w-full gap-4 justify-between items-start' : 'hidden'}>
        <div className="flex flex-col gap-4 items-start w-full">
          <h2 className="flex-1 text-[32px] font-semibold leading-10 text-white">
            Transform your ideas into<br className="max-sm:hidden"/> impactful results
          </h2>
          <ContactInfo hideExtraInfo />
        <SocialLinks  />
        </div>
      </div>

      <div className="max-sm:absolute max-sm:bottom-0 w-[1306px] max-sm:w-full h-[130px] self-center z-50 bg-[url('/png/footer.png')] max-sm:bg-cover bg-no-repeat bg-center">
      </div>
    </section>
    </div>
  );
}
