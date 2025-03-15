import { Convergi } from "../icons"
import { Button } from "../ui/button"

const Header = () => (
  <header className="fixed top-0 left-0 z-30 w-full h-[72px] flex items-center justify-center px-28 py-[10px] max-md:px-5 transition-colors duration-200 bg-transparent" id="header">
    <div className="flex w-[1440px] items-center justify-between">
        <Convergi />
        <div className="flex items-center justify-center gap-2">
          <Button variant="outline" className="max-sm:hidden">
          hello@convergi.studio
          </Button>

          <Button>
            Free Consultation
          </Button>
        </div>
    </div>
  </header>
)

export default Header
