import Convergi from "../icons"

const Header = () => (
  <header className="fixed top-0 left-0 z-10 w-full h-24 flex items-center justify-center px-28 py-6 max-md:px-5 transition-colors duration-200 bg-transparent" id="header">
    <div className="flex w-[1440px] items-center justify-between gap-[9px]">
      <Convergi />
      <div className="flex items-center justify-center gap-4 text-base font-bold">
        <a
          href="mailto:hello@convergi.studio"
          className="text-white border border-white px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors"
        >
          hello@convergi.studio
        </a>
        <button className="bg-white text-[#08102F] px-5 py-2.5 rounded-full hover:bg-opacity-90 transition-colors">
          Free Consultation
        </button>
      </div>
    </div>
  </header>
)

export default Header