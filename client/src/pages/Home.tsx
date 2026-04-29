import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Yuma Landing Bar & Grill - Modern Website
 * Design: Muted Red & White Branding (matching original site, toned down)
 * Color Palette: Muted Red (#a8364a), White (#ffffff), Light Gray backgrounds
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState<"restaurant" | "hangar" | "lounge">("restaurant");
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

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
          {/* Logo */}
          <a href="/#top" className="flex items-center gap-2 transition-all duration-300 hover:opacity-80" style={{transform: scrollY > 100 ? 'scale(0.85)' : 'scale(1)', cursor: 'pointer'}}>
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663610026698/oAgSEXOUvrQWUciM.png" alt="Yuma Landing Logo" className="h-16 w-auto" />
          </a>
          <div className="hidden lg:flex items-center gap-8">
            <a href="#menu" className="hover:opacity-80 transition-opacity font-semibold" style={{fontFamily: 'Play, sans-serif', fontSize: '18px'}}>Menu</a>
            <a href="/hangar" className="hover:opacity-80 transition-opacity font-semibold" style={{fontFamily: 'Play, sans-serif', fontSize: '18px'}}>Hangar Sports Bar</a>
            <a href="/captains-lounge" className="hover:opacity-80 transition-opacity font-semibold" style={{fontFamily: 'Play, sans-serif', fontSize: '18px'}}>Captain's Lounge</a>
            <a href="/contact" className="hover:opacity-80 transition-opacity font-semibold" style={{fontFamily: 'Play, sans-serif', fontSize: '18px'}}>Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="tel:(928)782-7427" className="hidden sm:flex items-center gap-2 bg-white text-primary px-4 py-2 rounded font-bold hover:opacity-90 transition-opacity">
              <Phone size={18} />
              <span className="hidden sm:inline">(928) 782-7427</span>
            </a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 hover:opacity-80 transition-opacity">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-primary text-primary-foreground border-t border-white/20">
            <div className="container py-4 space-y-3">
              <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="block hover:opacity-80 transition-opacity font-semibold py-2" style={{fontFamily: 'Play, sans-serif'}}>Menu</a>
              <a href="/hangar" onClick={() => setMobileMenuOpen(false)} className="block hover:opacity-80 transition-opacity font-semibold py-2" style={{fontFamily: 'Play, sans-serif'}}>Hangar Sports Bar</a>
              <a href="/captains-lounge" onClick={() => setMobileMenuOpen(false)} className="block hover:opacity-80 transition-opacity font-semibold py-2" style={{fontFamily: 'Play, sans-serif'}}>Captain's Lounge</a>
              <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="block hover:opacity-80 transition-opacity font-semibold py-2" style={{fontFamily: 'Play, sans-serif'}}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="top" className="relative h-screen md:h-[600px] overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663610026698/M35vhbkmMv8tGsBc8875Xx/yuma-hero-main-CZX3j4y3i4grM3FR9ScKij.webp"
          alt="Yuma Landing Bar & Grill"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/75 to-primary/30"></div>
        <div className="relative h-full flex flex-col justify-center items-start container">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 leading-tight">
              A Fun Night Out Begins Here
            </h2>
            <p className="text-xl text-white/95 mb-8 max-w-xl">
              Historic aviation-themed bar & grill in Yuma, AZ. Premium steaks, fresh seafood, and 24 beers on tap.
            </p>
            <div className="flex gap-4">
              <a href="https://orders.hazlnut.com/menu/b/Yuma%20Landing%20Bar%20&%20Grill/n/303/p/82/g/1277" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-primary font-bold">
                  Order Online
                </Button>
              </a>
              <a href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold">
                  Reserve Table
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section id="venues" className="py-12 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8">
            Three Unique <span className="text-primary">Experiences</span>
          </h2>

          {/* Venue Tabs */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Restaurant */}
            <div
              onClick={() => setActiveTab("restaurant")}
              className={`flex-1 p-4 rounded cursor-pointer transition-all ${activeTab === "restaurant" ? "bg-primary text-white shadow-lg" : "bg-card text-foreground border-2 border-border hover:border-primary"}`}
            >
              <h3 className="text-lg font-display font-bold mb-2">Restaurant</h3>
              <p className="mb-2 opacity-90 text-sm">Full breakfast, lunch, and dinner menu with steaks, seafood, pasta, and more.</p>
              <div className="flex items-center gap-2 text-xs">
                <Clock size={14} />
                <span>6 AM - 11 PM</span>
              </div>
            </div>

            {/* Hangar Sports Bar */}
            <div
              onClick={() => setActiveTab("hangar")}
              className={`flex-1 p-4 rounded cursor-pointer transition-all ${activeTab === "hangar" ? "bg-primary text-white shadow-lg" : "bg-card text-foreground border-2 border-border hover:border-primary"}`}
            >
              <h3 className="text-lg font-display font-bold mb-2">Hangar Sports Bar</h3>
              <p className="mb-2 opacity-90 text-sm">24 beers on tap, appetizers, and all your favorite sports on big screens.</p>
              <div className="flex items-center gap-2 text-xs">
                <Clock size={14} />
                <span>11 AM - 11 PM</span>
              </div>
            </div>

            {/* Captain's Lounge */}
            <div
              onClick={() => setActiveTab("lounge")}
              className={`flex-1 p-4 rounded cursor-pointer transition-all ${activeTab === "lounge" ? "bg-primary text-white shadow-lg" : "bg-card text-foreground border-2 border-border hover:border-primary"}`}
            >
              <h3 className="text-lg font-display font-bold mb-2">Captain's Lounge</h3>
              <p className="mb-2 opacity-90 text-sm">Premium liquors, specialty coffee drinks, and an intimate atmosphere.</p>
              <div className="flex items-center gap-2 text-xs">
                <Clock size={14} />
                <span>11 AM - 11 PM</span>
              </div>
            </div>
          </div>

          {/* Active Venue Image with Overlaid Text and Learn More Button */}
          <div className="space-y-4">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-2xl border-4 border-primary">
            {activeTab === "hangar" && (
              <>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663610026698/M35vhbkmMv8tGsBc8875Xx/yuma-hangar-bar-E7KH9uLTt8s7FsjBLXRDrq.webp"
                  alt="Hangar Sports Bar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="text-center text-white max-w-2xl">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Hangar Sports Bar</h3>
                    <p className="text-sm md:text-base">Full-service bar with appetizers, main entrees, and 24 beers on tap. Covers all sports including college and pro football.</p>
                  </div>
                </div>
              </>
            )}
            {activeTab === "restaurant" && (
              <>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663610026698/M35vhbkmMv8tGsBc8875Xx/yuma-hero-main-CZX3j4y3i4grM3FR9ScKij.webp"
                  alt="Restaurant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="text-center text-white max-w-2xl">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Restaurant</h3>
                    <p className="text-sm md:text-base">Full breakfast, lunch, and dinner menu featuring steaks, seafood, pasta dishes, South-of-the-Border specialties, burgers, salads, and more.</p>
                  </div>
                </div>
              </>
            )}
            {activeTab === "lounge" && (
              <>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663610026698/M35vhbkmMv8tGsBc8875Xx/yuma-hero-main-CZX3j4y3i4grM3FR9ScKij.webp"
                  alt="Captain's Lounge"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="text-center text-white max-w-2xl">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Captain's Lounge (San Luis)</h3>
                    <p className="text-sm md:text-base">A more intimate setting with premium liquors and specialty coffee drinks. Perfect for a sophisticated evening out.</p>
                  </div>
                </div>
              </>            )}
            </div>
            {/* Learn More Button */}
            <div className="flex justify-center">
              {activeTab === "hangar" && (
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold" onClick={() => {setLocation("/hangar"); setTimeout(() => window.scrollTo(0, 0), 100)}}>
                  Learn More
                </Button>
              )}
              {activeTab === "lounge" && (
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold" onClick={() => {setLocation("/captains-lounge"); setTimeout(() => window.scrollTo(0, 0), 100)}}>
                  Learn More
                </Button>
              )}
              {activeTab === "restaurant" && (
                <a href="#menu">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold">
                    Learn More
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section id="menu" className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663610026698/M35vhbkmMv8tGsBc8875Xx/yuma-food-showcase-RRwMwwXEa8wgQxHfFYUYXU.webp')",
            backgroundPosition: "center",
          }}
        />
        {/* Red Overlay */}
        <div className="absolute inset-0 bg-primary/85"></div>

        {/* Content */}
        <div className="relative container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                Culinary <span className="text-white/90">Excellence</span>
              </h2>
              <p className="text-lg mb-8 opacity-95 text-white">
                From our signature Campfire Sirloin Steak to fresh seafood and South-of-the-Border specialties, our diverse menu celebrates quality ingredients and timeless flavors.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-lg">
                    ★
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">Premium Steaks</h4>
                    <p className="opacity-85 text-white/90">Hand-cut and perfectly grilled to order</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-lg">
                    ★
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">Fresh Seafood</h4>
                    <p className="opacity-85 text-white/90">Daily specials featuring seasonal catches</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-lg">
                    ★
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">Full Bar</h4>
                    <p className="opacity-85 text-white/90">24 beers on tap plus premium spirits</p>
                  </div>
                </div>
              </div>
              <a href="https://orders.hazlnut.com/menu/b/Yuma%20Landing%20Bar%20&%20Grill/n/303/p/82/g/1277" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-primary font-bold">
                  Order Online
                </Button>
              </a>
            </div>
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663610026698/M35vhbkmMv8tGsBc8875Xx/yuma-food-showcase-RRwMwwXEa8wgQxHfFYUYXU.webp"
                alt="Premium Food"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Hours */}
            <div className="bg-card p-8 rounded-lg border-2 border-primary">
              <h3 className="text-2xl font-display font-bold mb-6 text-primary">Hours</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-bold text-foreground">Restaurant</p>
                  <p className="text-muted-foreground">Mon-Thurs: 6 AM - 10 PM</p>
                  <p className="text-muted-foreground">Fri-Sat: 6 AM - 11 PM</p>
                  <p className="text-muted-foreground">Sunday: 6 AM - 9 PM</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-foreground">Bars & Lounge</p>
                  <p className="text-muted-foreground">Mon-Thurs: 11 AM - 10 PM</p>
                  <p className="text-muted-foreground">Fri-Sat: 11 AM - 11 PM</p>
                  <p className="text-muted-foreground">Sunday: 11 AM - 9 PM</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-card p-8 rounded-lg border-2 border-primary">
              <h3 className="text-2xl font-display font-bold mb-6 text-primary flex items-center gap-2">
                <MapPin size={24} />
                Location
              </h3>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-foreground">Yuma Landing Bar & Grill</p>
                <p className="text-muted-foreground">195 South 4th Avenue</p>
                <p className="text-muted-foreground">Yuma, AZ 85364</p>
                <Button size="sm" variant="outline" className="mt-4 w-full">
                  Get Directions
                </Button>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-card p-8 rounded-lg border-2 border-primary">
              <h3 className="text-2xl font-display font-bold mb-6 text-primary flex items-center gap-2">
                <Phone size={24} />
                Contact
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-foreground mb-2">(928) 782-7427</p>
                  <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-white mb-2">
                    Order Online
                  </Button>
                </div>
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
