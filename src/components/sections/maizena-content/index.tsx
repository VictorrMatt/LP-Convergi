"use client";
import * as React from "react";
import { Text } from "./Text";
import { ServicesGrid } from "./ServiceGrid";
import { Button } from "@/components/ui/button";
import Maizena from "@/components/effects/maizena";
import Container from "./Container";
import { VerticalContainer } from "@/components/ui/vertical-container";

const MaizenaSection = () => {
  return (
    <main className="w-full h-[1254px] bg-[url('/png/maizena-background.png')] debug-border flex relative flex-col gap-10 p-28 bg-[#19204B] max-md:px-10 max-md:py-16 max-sm:px-5 max-sm:py-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <Maizena />
      </div>


      <div className="debug-border justify-between flex flex-col flex-1">
        <VerticalContainer gap="10">
          <Text className="debug-border h-[128px] mt-[106px]">
            Seamlessly guiding your project from idea to reality.
          </Text>
          <section className="flex flex-col gap-10 items-end">
            <Text alignment="right">
              Where business vision meets cutting-edge technology
            </Text>
            <Button>Free Consultation</Button>
          </section>

        </VerticalContainer>

        <ServicesGrid />
      </div>
    </main>
  );
};

export default MaizenaSection;
