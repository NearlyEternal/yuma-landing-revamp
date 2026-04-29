import { useState } from 'react';
import { Phone, MapPin, Clock, MapIcon, Menu, X } from 'lucide-react';

export default function Contact() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener('scroll', handleScroll);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success message
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Floating Phone Button */}
      <a href="tel:(928)782-7427" className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
        <Phone size={24} />
      </a>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg transition-all duration-300" style={{paddingTop: scrollY > 100 ? '8px' : '12px', paddingBottom: scrollY > 100 ? '8px' : '12px'}}>
        <div className="container flex items-center justify-between">
          <a href="/#top" className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:opacity-80" style={{transform: scrollY > 100 ? 'scale(0.85)' : 'scale(1)'}}>
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663610026698/oAgSEXOUvrQWUciM.png" alt="Yuma Landing Logo" className="h-16 w-auto" style={{cursor: 'pointer'}} />
          </a>
          <div className="hidden lg:flex items-center gap-8">
            <a href="/#menu" className="hover:opacity-80 transition-opacity font-semibold" style={{fontFamily: 'Play, sans-serif', fontSize: '18px'}}>Menu</a>
            <a href="/hangar" className="hover:opacity-80 transition-opacity font-semibold" style={{fontFamily: 'Play, sans-serif', fontSize: '18px'}}>Hangar Sports Bar</a>
            <a href="/captains-lounge" className="hover:opacity-80 transition-opacity font-semibold" style={{fontFamily: 'Play, sans-serif', fontSize: '18px'}}>Captain's Lounge</a>
            <a href="#" className="hover:opacity-80 transition-opacity font-semibold" style={{fontFamily: 'Play, sans-serif', fontSize: '18px'}}>Contact</a>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 hover:opacity-80 transition-opacity">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-primary text-primary-foreground border-t border-white/20">
            <div className="container py-4 space-y-3">
              <a href="/#menu" onClick={() => setMobileMenuOpen(false)} className="block hover:opacity-80 transition-opacity font-semibold py-2" style={{fontFamily: 'Play, sans-serif'}}>Menu</a>
              <a href="/hangar" onClick={() => setMobileMenuOpen(false)} className="block hover:opacity-80 transition-opacity font-semibold py-2" style={{fontFamily: 'Play, sans-serif'}}>Hangar Sports Bar</a>
              <a href="/captains-lounge" onClick={() => setMobileMenuOpen(false)} className="block hover:opacity-80 transition-opacity font-semibold py-2" style={{fontFamily: 'Play, sans-serif'}}>Captain's Lounge</a>
              <a href="#" onClick={() => setMobileMenuOpen(false)} className="block hover:opacity-80 transition-opacity font-semibold py-2" style={{fontFamily: 'Play, sans-serif'}}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="top" className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663610026698/M35vhbkmMv8tGsBc8875Xx/yuma-hero-main-CZX3j4y3i4grM3FR9ScKij.webp"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center">Contact Us</h1>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>

              {/* Address */}
              <div className="flex gap-4">
                <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Address</h3>
                  <p className="text-foreground/80">195 South 4th Avenue<br />Yuma, AZ 85364</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <Phone className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <a href="tel:(928)782-7427" className="text-primary hover:opacity-80 font-semibold">(928) 782-7427</a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <Clock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Hours of Operation</h3>
                  <div className="text-foreground/80 space-y-1">
                    <p><strong>Restaurant:</strong></p>
                    <p>Monday - Thursday: 6 AM - 10 PM</p>
                    <p>Friday - Saturday: 6 AM - 11 PM</p>
                    <p>Sunday: 6 AM - 9 PM</p>
                    <p className="mt-3"><strong>Bar & Lounge:</strong></p>
                    <p>Monday - Thursday: 11 AM - 10 PM</p>
                    <p>Friday - Saturday: 11 AM - 11 PM</p>
                    <p>Sunday: 11 AM - 9 PM</p>
                  </div>
                </div>
              </div>


            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 bg-gray-50">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-display font-bold text-primary mb-6 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-display font-bold text-primary mb-2">Make a Reservation</h3>
              <p className="text-gray-700 mb-4">Use the form above to reserve a table at Yuma Landing. We look forward to hosting you!</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-display font-bold text-primary mb-2">Send us a Message</h3>
              <p className="text-gray-700 mb-4">Have questions? Fill out the contact form above and we'll get back to you as soon as possible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <p>&copy; 2026 Yuma Landing Bar & Grill. All rights reserved.</p>
          <a href="tel:(928)782-7427" className="mt-4 md:mt-0 font-semibold hover:opacity-80">(928) 782-7427</a>
        </div>
      </footer>
    </div>
  );
}
