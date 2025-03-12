"use client";
import * as React from "react";
import { ContactItem } from "./footer-content/ContactItem"; 
import { SocialLinks } from "./footer-content/SocialLinks"; 

export default function Footer() {
  return (
    <section className="w-full h-[482px] bg-[url('/png/footer.png')] bg-center bg-cover bg-no-repeat flex gap-8 p-28 items-center text-white">
      <div className="flex-1 shrink self-stretch my-auto w-full basis-0 min-w-60 max-md:max-w-full">
        <div className="flex flex-wrap gap-4 items-center w-full text-2xl font-medium leading-none max-md:max-w-full">
          <h1 className="flex-1 shrink self-stretch my-auto text-3xl font-semibold leading-10 text-white basis-4 max-md:max-w-full">
            Transform your ideas into
            <br />
            impactful results
          </h1>
          <ContactItem text="hello@convergi.studio" />
          <ContactItem text="+61 413 321 164" />
        </div>
        <SocialLinks />
      </div>
    </section>
  );
}
