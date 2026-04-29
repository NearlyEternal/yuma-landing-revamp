import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";

export default function CaptainsLounge() {
  const [, setLocation] = useLocation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg transition-all duration-300" style={{paddingTop: scrollY > 100 ? '8px' : '12px', paddingBottom: scrollY > 100 ? '8px' : '12px'}}>
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer transition-all duration-300" onClick={() => setLocation("/")} style={{transform: scrollY > 100 ? 'scale(0.85)' : 'scale(1)'}}>
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663610026698/oAgSEXOUvrQWUciM.png" alt="Yuma Landing Logo" className="h-16 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="hover:opacity-80 transition-opacity font-semibold" style={{fontFamily: 'Play, sans-serif', fontSize: '18px'}}>Home</a>
            <a href="/hangar" className="hover:opacity-80 transition-opacity font-semibold" style={{fontFamily: 'Play, sans-serif', fontSize: '18px'}}>Hangar Sports Bar</a>
            <a href="#" className="hover:opacity-80 transition-opacity font-semibold" style={{fontFamily: 'Play, sans-serif', fontSize: '18px'}}>Captain's Lounge</a>
            <a href="/#contact" className="hover:opacity-80 transition-opacity font-semibold" style={{fontFamily: 'Play, sans-serif', fontSize: '18px'}}>Contact</a>
          </div>
          <a href="tel:(928)782-7427" className="flex items-center gap-2 bg-white text-primary px-4 py-2 rounded font-bold hover:opacity-90 transition-opacity">
            <Phone size={18} />
            <span className="hidden sm:inline">(928) 782-7427</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663610026698/M35vhbkmMv8tGsBc8875Xx/yuma-hero-main-CZX3j4y3i4grM3FR9ScKij.webp"
          alt="Captain's Lounge"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/75 to-primary/30"></div>
        <div className="relative h-full flex flex-col justify-center items-start container">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4 leading-tight">
              Captain's Lounge
            </h1>
            <p className="text-xl text-white/95 mb-8 max-w-xl">
              An intimate setting with premium liquors and specialty coffee drinks. Located in San Luis.
            </p>
            <Button size="lg" className="bg-white hover:bg-gray-100 text-primary font-bold">
              Order Online
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary">
                Sophisticated Elegance
              </h2>
              <p className="text-lg mb-6 opacity-95">
                If you are looking for a more intimate setting, the Captain's Lounge is for you. Located in the adjacent town of San Luis, our lounge offers a refined atmosphere perfect for special occasions, quiet conversations, or simply unwinding in style.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                    ★
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Premium Liquors</h4>
                    <p className="opacity-85">Curated selection of fine spirits and wines</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                    ★
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Specialty Coffee Drinks</h4>
                    <p className="opacity-85">Expertly crafted beverages to complement any time of day</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                    ★
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Intimate Atmosphere</h4>
                    <p className="opacity-85">Perfect for special occasions and refined gatherings</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold">
                Order Online
              </Button>
            </div>
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl border-4 border-primary">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663610026698/M35vhbkmMv8tGsBc8875Xx/yuma-hero-main-CZX3j4y3i4grM3FR9ScKij.webp"
                alt="Captain's Lounge Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-background p-8 rounded-lg border-2 border-primary">
              <h3 className="text-2xl font-display font-bold mb-6 text-primary flex items-center gap-2">
                <Clock size={24} />
                Hours
              </h3>
              <div className="space-y-2 text-sm">
                <p><span className="font-bold">Monday - Thursday:</span> 11 AM - 10 PM</p>
                <p><span className="font-bold">Friday - Saturday:</span> 11 AM - 11 PM</p>
                <p><span className="font-bold">Sunday:</span> 11 AM - 9 PM</p>
              </div>
            </div>

            <div className="bg-background p-8 rounded-lg border-2 border-primary">
              <h3 className="text-2xl font-display font-bold mb-6 text-primary flex items-center gap-2">
                <MapPin size={24} />
                Location
              </h3>
              <div className="space-y-2 text-sm">
                <p className="font-semibold">San Luis, AZ</p>
                <p className="text-muted-foreground">Adjacent to Yuma, AZ</p>
                <Button size="sm" variant="outline" className="mt-4 w-full">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container text-center text-sm">
          <p>&copy; 2026 Yuma Landing Bar & Grill. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
