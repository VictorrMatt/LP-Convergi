"use client";

import { useEffect, useRef, useState } from "react";

interface TextScramblePairProps {
  titlePhrases: string[];
  subtitlePhrases: string[];
  delay?: number;
  className?: string;
}

export default function TextScramblePair({
  titlePhrases,
  subtitlePhrases,
  delay = 2000,
  className = "",
}: TextScramblePairProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let titleFrame = 0;
    let subtitleFrame = 0;
    let titleFrameRequest: number;
    let subtitleFrameRequest: number;
    let titleQueue: Array<{
      from: string;
      to: string;
      start: number;
      end: number;
      char?: string;
    }> = [];
    let subtitleQueue: Array<{
      from: string;
      to: string;
      start: number;
      end: number;
      char?: string;
    }> = [];
    let titleResolve: () => void;
    let subtitleResolve: () => void;

    const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

    const updateTitle = () => {
      let output = "";
      let complete = 0;

      for (let i = 0, n = titleQueue.length; i < n; i++) {
        let { from, to, start, end, char } = titleQueue[i];

        if (titleFrame >= end) {
          complete++;
          output += to;
        } else if (titleFrame >= start) {
          if (!char || Math.random() < 0.28) {
            char = randomChar();
            titleQueue[i].char = char;
          }
          output += `<span class="text-muted-foreground">${char}</span>`;
        } else {
          output += from;
        }
      }

      if (titleRef.current) {
        titleRef.current.innerHTML = output;
      }

      if (complete === titleQueue.length) {
        titleResolve();
      } else {
        titleFrameRequest = requestAnimationFrame(updateTitle);
        titleFrame++;
      }
    };

    const updateSubtitle = () => {
      let output = "";
      let complete = 0;

      for (let i = 0, n = subtitleQueue.length; i < n; i++) {
        let { from, to, start, end, char } = subtitleQueue[i];

        if (subtitleFrame >= end) {
          complete++;
          output += to;
        } else if (subtitleFrame >= start) {
          if (!char || Math.random() < 0.28) {
            char = randomChar();
            subtitleQueue[i].char = char;
          }
          output += `<span class="text-muted-foreground">${char}</span>`;
        } else {
          output += from;
        }
      }

      if (subtitleRef.current) {
        subtitleRef.current.innerHTML = output;
      }

      if (complete === subtitleQueue.length) {
        subtitleResolve();
      } else {
        subtitleFrameRequest = requestAnimationFrame(updateSubtitle);
        subtitleFrame++;
      }
    };

    const setTitleText = (newText: string) => {
      const oldText = titleRef.current?.innerText || "";
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise<void>((res) => (titleResolve = res));

      titleQueue = [];

      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        titleQueue.push({ from, to, start, end });
      }

      cancelAnimationFrame(titleFrameRequest);
      titleFrame = 0;
      updateTitle();

      return promise;
    };

    const setSubtitleText = (newText: string) => {
      const oldText = subtitleRef.current?.innerText || "";
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise<void>((res) => (subtitleResolve = res));

      subtitleQueue = [];

      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        subtitleQueue.push({ from, to, start, end });
      }

      cancelAnimationFrame(subtitleFrameRequest);
      subtitleFrame = 0;
      updateSubtitle();

      return promise;
    };

    const nextTexts = async () => {
      // Start both animations in parallel
      await Promise.all([
        setTitleText(titlePhrases[counter]),
        setSubtitleText(subtitlePhrases[counter]),
      ]);

      // After both are complete, wait for delay and then update counter
      setTimeout(() => {
        setCounter((prevCounter) => (prevCounter + 1) % titlePhrases.length);
      }, delay);
    };

    nextTexts();

    return () => {
      cancelAnimationFrame(titleFrameRequest);
      cancelAnimationFrame(subtitleFrameRequest);
    };
  }, [counter, delay, titlePhrases, subtitlePhrases]);

  return (
    <div
      className={`flex flex-col items-center justify-center gap-6 ${className}`}
    >
      <div
        ref={titleRef}
        className="text-[#FFF] text-[164px] font-semibold leading-[180px] text-center"
      ></div>
      <div
        ref={subtitleRef}
        className="text-[#8B8B8B] font-inter text-[32px] font-medium leading-10 text-center"
      ></div>
    </div>
  );
}
