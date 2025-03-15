interface ContactInfoProps {
  hideExtraInfo?: boolean;
}

export function ContactInfo({ hideExtraInfo }: ContactInfoProps) {
  return (
    <address className="flex flex-col gap-2 justify-center items-start not-italic">
      <div className="flex flex-col gap-2 items-end px-0 py-1">
        <h3
          className={`${
            hideExtraInfo ? "hidden" : ""
          } font-inter font-medium text-2xl leading-8 text-[#545675]`}
        >
          Contact
        </h3>
        <a
          href="mailto:hello@convergi.studio"
          className=" font-inter text-2xl leading-8 text-white"
        >
          hello@convergi.studio
        </a>
      </div>
      <a
        href="tel:+61413321164"
        className={`${
          hideExtraInfo ? "text-left" : "text-end"
        } font-inter gap-2 px-0 py-1 w-full text-2xl leading-8 text-white`}
      >
        +61 413 321 164
      </a>
      <p
        className={`${
          hideExtraInfo ? "hidden" : ""
        } text-end font-inter font-normal text-2xl leading-8 text-[#545675]`}
      >
        ABN 98 156 435 559
      </p>
    </address>
  );
}
