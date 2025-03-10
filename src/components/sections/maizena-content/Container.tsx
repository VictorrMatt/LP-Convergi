"use client";
import * as React from "react";
import { Text } from "./Text";
import { ServicesGrid } from "./ServiceGrid";
import Maizena from "@/components/effects/maizena";
import { Button } from "@/components/ui/button";

const Container: React.FC = () => {
  return (
      <main className="w-full debug-border flex relative flex-col gap-10 p-28 bg-indigo-950 max-md:px-10 max-md:py-16 max-sm:px-5 max-sm:py-10">
        <Text className="debug-border  z-10">Seamlessly guiding your project from idea to reality.</Text>

        <div className="absolute top-0">
          <Maizena />
        </div>


        <div className="debug-border flex flex-col gap-10 z-10">
          <section className="flex flex-col gap-10 items-end">
            <Text alignment="right">
              Where business vision meets cutting-edge technology
            </Text>
            <Button>Free Consultation</Button>
          </section>

          <ServicesGrid />
        </div>
      </main>
  );
};

export default Container;
