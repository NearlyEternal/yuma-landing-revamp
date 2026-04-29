import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Yuma Landing Bar & Grill - Modern Website
 * Design: Muted Red & White Branding (matching original site, toned down)
 * Color Palette: Muted Red (#a8364a), White (#ffffff), Light Gray backgrounds
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState<"restaurant" | "hangar" | "lounge">("restaurant");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white tracking-wider">YUMA LANDING</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#menu" className="hover:opacity-80 transition-opacity font-semibold">Menu</a>
            <a href="#venues" className="hover:opacity-80 transition-opacity font-semibold">Venues</a>
            <a href="#contact" className="hover:opacity-80 transition-opacity font-semibold">Contact</a>
          </div>
          <a href="tel:(928)782-7427" className="flex items-center gap-2 bg-white text-primary px-4 py-2 rounded font-bold hover:opacity-90 transition-opacity">
            <Phone size={18} />
            <span className="hidden sm:inline">(928) 782-7427</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen md:h-[600px] overflow-hidden">
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
              <Button size="lg" className="bg-white hover:bg-gray-100 text-primary font-bold">
                Order Online
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold">
                Reserve Table
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section id="venues" className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
            Three Unique <span className="text-primary">Experiences</span>
          </h2>

          {/* Venue Tabs */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Restaurant */}
            <div
              onClick={() => setActiveTab("restaurant")}
              className={`flex-1 p-8 rounded cursor-pointer transition-all ${
                activeTab === "restaurant"
                  ? "bg-primary text-white shadow-xl"
                  : "bg-card text-foreground border-2 border-border hover:border-primary"
              }`}
            >
              <h3 className="text-2xl font-display font-bold mb-3">Restaurant</h3>
              <p className="mb-4 opacity-90">Full breakfast, lunch, and dinner menu with steaks, seafood, pasta, and more.</p>
              <div className="flex items-center gap-2 text-sm">
                <Clock size={16} />
                <span>6 AM - 11 PM</span>
              </div>
            </div>

            {/* Hangar Sports Bar */}
            <div
              onClick={() => setActiveTab("hangar")}
              className={`flex-1 p-8 rounded cursor-pointer transition-all ${
                activeTab === "hangar"
                  ? "bg-primary text-white shadow-xl"
                  : "bg-card text-foreground border-2 border-border hover:border-primary"
              }`}
            >
              <h3 className="text-2xl font-display font-bold mb-3">Hangar Sports Bar</h3>
              <p className="mb-4 opacity-90">24 beers on tap, appetizers, and all your favorite sports on big screens.</p>
              <div className="flex items-center gap-2 text-sm">
                <Clock size={16} />
                <span>11 AM - 11 PM</span>
              </div>
            </div>

            {/* Captain's Lounge */}
            <div
              onClick={() => setActiveTab("lounge")}
              className={`flex-1 p-8 rounded cursor-pointer transition-all ${
                activeTab === "lounge"
                  ? "bg-primary text-white shadow-xl"
                  : "bg-card text-foreground border-2 border-border hover:border-primary"
              }`}
            >
              <h3 className="text-2xl font-display font-bold mb-3">Captain's Lounge</h3>
              <p className="mb-4 opacity-90">Premium liquors, specialty coffee drinks, and an intimate atmosphere.</p>
              <div className="flex items-center gap-2 text-sm">
                <Clock size={16} />
                <span>11 AM - 11 PM</span>
              </div>
            </div>
          </div>

          {/* Active Venue Image */}
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl border-4 border-primary">
            {activeTab === "hangar" && (
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663610026698/M35vhbkmMv8tGsBc8875Xx/yuma-hangar-bar-E7KH9uLTt8s7FsjBLXRDrq.webp"
                alt="Hangar Sports Bar"
                className="w-full h-full object-cover"
              />
            )}
            {activeTab === "restaurant" && (
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663610026698/M35vhbkmMv8tGsBc8875Xx/yuma-hero-main-CZX3j4y3i4grM3FR9ScKij.webp"
                alt="Restaurant"
                className="w-full h-full object-cover"
              />
            )}
            {activeTab === "lounge" && (
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663610026698/M35vhbkmMv8tGsBc8875Xx/yuma-hero-main-CZX3j4y3i4grM3FR9ScKij.webp"
                alt="Captain's Lounge"
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
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
              <Button size="lg" className="bg-white hover:bg-gray-100 text-primary font-bold">
                View Full Menu
              </Button>
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
              <h3 className="text-2xl font-display font-bold mb-6 text-primary">Location</h3>
              <div className="flex gap-3 mb-4">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold text-foreground">Yuma Landing Bar & Grill</p>
                  <p className="text-muted-foreground">195 South 4th Avenue</p>
                  <p className="text-muted-foreground">Yuma, AZ 85364</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4 border-primary text-primary hover:bg-primary/10 font-bold">
                Get Directions
              </Button>
            </div>

            {/* Contact */}
            <div className="bg-card p-8 rounded-lg border-2 border-primary">
              <h3 className="text-2xl font-display font-bold mb-6 text-primary">Contact</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Phone className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:(928)782-7427" className="font-bold text-foreground hover:text-primary transition-colors">
                      (928) 782-7427
                    </a>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold">
                  Order Online
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-display font-bold mb-4 text-lg">Yuma Landing</h4>
              <p className="text-sm opacity-85">Historic aviation-themed bar & grill celebrating Yuma's rich heritage.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#menu" className="opacity-85 hover:opacity-100 transition-opacity">Menu</a></li>
                <li><a href="#venues" className="opacity-85 hover:opacity-100 transition-opacity">Venues</a></li>
                <li><a href="#contact" className="opacity-85 hover:opacity-100 transition-opacity">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Hours</h4>
              <p className="text-sm opacity-85">Mon-Thurs: 6 AM - 10 PM</p>
              <p className="text-sm opacity-85">Fri-Sat: 6 AM - 11 PM</p>
              <p className="text-sm opacity-85">Sunday: 6 AM - 9 PM</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Contact</h4>
              <p className="text-sm opacity-85">(928) 782-7427</p>
              <p className="text-sm opacity-85">195 South 4th Avenue</p>
              <p className="text-sm opacity-85">Yuma, AZ 85364</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2026 Yuma Landing Bar & Grill. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
