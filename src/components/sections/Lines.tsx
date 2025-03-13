"use client";

import EmbersBackground from "../effects/embers-background";
import TextScramblePair from "../effects/text-scramble-pair"; 

const LinesSection = () => {
  const titlePhrases = ["Welcome", "The Matrix", "The Choice", "The Path"]

  const subtitlePhrases = [
    "Enter the digital realm",
    "A world of endless possibilities",
    "Red pill or blue pill?",
    "Follow the white rabbit",
  ]
  return (
    <main className="w-full h-[1080px] bg-[url('/png/lines.png')]  flex items-center justify-center relative flex-col gap-10 max-md:px-10 max-md:py-16 max-sm:px-5 max-sm:py-10">
        <TextScramblePair titlePhrases={titlePhrases} subtitlePhrases={subtitlePhrases} delay={2000} />
        <EmbersBackground/>
    </main>
  );
};

export default LinesSection;
