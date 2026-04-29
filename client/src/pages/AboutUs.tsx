import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export default function AboutUs() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-primary py-2" : "bg-primary py-4"
        }`}
      >
        <div className="container flex items-center justify-between">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663610026698/oAgSEXOUvrQWUciM.png"
              alt="Yuma Landing Logo"
              className={`transition-all duration-300 ${
                isScrolled ? "h-10 w-auto" : "h-16 w-auto"
              }`}
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-white font-display hover:opacity-80">
              Menu
            </a>
            <a href="/captains-lounge" className="text-white font-display hover:opacity-80">
              Captain's Lounge
            </a>
            <a href="/hangar" className="text-white font-display hover:opacity-80">
              Hangar Sports Bar
            </a>
            <a href="/about" className="text-white font-display hover:opacity-80">
              About Us
            </a>
            <a href="/contact" className="text-white font-display hover:opacity-80">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Floating Phone Icon */}
          <a
            href="tel:(928)782-7427"
            className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
          >
            <Phone size={24} />
          </a>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-primary border-t border-white/20 mt-2">
            <div className="container py-4 flex flex-col gap-4">
              <a
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white font-display hover:opacity-80"
              >
                Menu
              </a>
              <a
                href="/captains-lounge"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white font-display hover:opacity-80"
              >
                Captain's Lounge
              </a>
              <a
                href="/hangar"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white font-display hover:opacity-80"
              >
                Hangar Sports Bar
              </a>
              <a
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white font-display hover:opacity-80"
              >
                About Us
              </a>
              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white font-display hover:opacity-80"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="top"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/80 to-primary/60 pt-20"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22none%22 stroke=%22white%22 stroke-width=%220.5%22/></svg>')] bg-repeat"></div>
        </div>

        <div className="relative container max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            About Yuma Landing
          </h1>
          <p className="text-xl text-white/95 mb-8">
            A historic and beloved full-bar restaurant celebrating Yuma's aviation heritage
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Welcome to Yuma Landing Bar & Grill, a historic and beloved full-bar restaurant in Yuma, AZ, where great food and fun take flight. We are proud to be a cornerstone of Yuma's dining scene, offering a full-service experience celebrating our city's rich aviation history.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Open daily, the Yuma Landing Bar & Grill serves a full breakfast, lunch and dinner menu that includes steaks and seafood, pasta dishes, South-of-the-Border dishes, burgers, salads, and more.
            </p>

            <h2 className="text-3xl font-display font-bold text-primary mt-12 mb-6">
              Our Venues
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-bold text-primary mb-3">
                  Captain's Lounge
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  If you are looking for a more intimate setting, the Captain's Lounge is for you. We serve Premium Liquors and specialty coffee drinks. Located in San Luis.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-primary mb-3">
                  Hangar Sports Bar & Grill
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Hangar Sports Bar & Grill at the Yuma Landing covers all sports including college and pro football. The Hangar Sports Bar & Grill is a full-service bar that serves appetizers, main entrees, and 24 beers on tap, from Guinness to Budweiser.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-center">
                Ready to experience Yuma Landing?{" "}
                <a href="/contact" className="text-primary font-semibold hover:underline">
                  Contact us
                </a>{" "}
                or{" "}
                <a
                  href="https://orders.hazlnut.com/menu/b/Yuma%20Landing%20Bar%20&%20Grill/n/303/p/82/g/1277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  order online
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
