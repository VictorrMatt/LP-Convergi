
export const Footer = () => {
  return (
    <footer className="bg-[#07102F] text-white border-t border-[#071641] pt-24 pb-16 px-28 max-md:px-5" style={{ border: '1px solid red' }}>
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <h2 className="text-[32px] font-semibold leading-10">
            Transform your ideas into<br />
            impactful results
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <a
              href="mailto:hello@convergi.studio"
              className="text-xl hover:text-opacity-80 transition-opacity"
            >
              hello@convergi.studio
            </a>
            <a
              href="tel:+61413321164"
              className="text-xl hover:text-opacity-80 transition-opacity"
            >
              +61 413 321 164
            </a>
          </div>
        </div>
        <div className="flex gap-4">
          <a
            href="#"
            className="bg-[#0A1743] px-4 py-2 rounded-full text-xs font-semibold hover:bg-opacity-80 transition-colors"
          >
            instagram
          </a>
          <a
            href="#"
            className="bg-[#0A1743] px-4 py-2 rounded-full text-xs font-semibold hover:bg-opacity-80 transition-colors"
          >
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
};
