import { useState } from "react";
import { Button } from "@/components/ui/button";
import CarbonAtom from "@/components/CarbonAtom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="section-container flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2">
          {/* <CarbonAtom size={28} animate={false} />
          <span className="font-display font-bold text-xl text-foreground">
            Clime<span className="gradient-text">Sc</span>ore
          </span> */}
                  <img src="/ClimeScore.png" alt="logo" style={{ height: "40px" }} />
                  <span className="font-display font-bold text-sm text-foreground">by<span className="gradient-text"> NettZero</span></span> 
        </a>
       

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#platform" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Platform</a>
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#reports" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Reports</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="/clientlogin">
          <Button variant="ghost" size="sm">Client Log in</Button>
          </a>

<a href="/userlogin">

          <Button variant="ghost" size="sm">User Log in</Button>
          </a>
          

          <a href="/clientlogin">
          <Button size="sm">Start Measuring</Button>
          </a>
        </div>

        {/* Mobile */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          <a href="#platform" className="block text-sm text-muted-foreground py-2">Platform</a>
          <a href="#features" className="block text-sm text-muted-foreground py-2">Features</a>
          <a href="#pricing" className="block text-sm text-muted-foreground py-2">Pricing</a>
          <a href="#reports" className="block text-sm text-muted-foreground py-2">Reports</a>
          <Button className="w-full" size="sm">Start Measuring</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
