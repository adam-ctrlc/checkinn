"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Waves, 
  Utensils, 
  Wifi, 
  Car, 
  Coffee, 
  Wind, 
  Star, 
  MapPin, 
  Phone, 
  Mail,
  Menu,
  X,
  ChevronRight
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const headerY = useTransform(scrollY, [0, 100], [-20, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-yellow-200">
      {/* Navigation */}
      <motion.nav 
        style={{ opacity: headerOpacity, y: headerY }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent text-white py-6"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="relative z-50 text-2xl font-serif font-bold tracking-wider group">
            Check<span className="text-yellow-500 group-hover:text-yellow-400 transition-colors">Inn</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/room"
              className={cn(
                "text-sm font-medium relative group overflow-hidden",
                !isScrolled ? "text-white/90" : "text-slate-900"
              )}
            >
              <span className="relative z-10 group-hover:text-yellow-500 transition-colors duration-300">Rooms</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </Link>
            {["About", "Amenities", "Gallery", "Contact"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={cn(
                  "text-sm font-medium relative group overflow-hidden",
                  !isScrolled ? "text-white/90" : "text-slate-900"
                )}
              >
                <span className="relative z-10 group-hover:text-yellow-500 transition-colors duration-300">{item}</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </Link>
            ))}
            <button className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-yellow-500/20">
              Book Now
            </button>
          </div>

          <button 
            className={cn(
              "md:hidden p-2 relative z-50 transition-colors",
              mobileMenuOpen ? "text-slate-900" : (isScrolled ? "text-slate-900" : "text-white")
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? "0%" : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-40 bg-white md:hidden flex flex-col justify-center items-center"
      >
        <div className="flex flex-col space-y-8 text-center">
          <Link 
            href="/room"
            onClick={() => setMobileMenuOpen(false)}
            className="text-3xl font-serif font-bold text-slate-900 hover:text-yellow-500 transition-colors"
          >
            Rooms
          </Link>
          {["About", "Amenities", "Gallery", "Contact"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : 20 }}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <Link 
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-serif font-bold text-slate-900 hover:text-yellow-500 transition-colors"
              >
                {item}
              </Link>
            </motion.div>
          ))}
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : 20 }}
            transition={{ delay: 0.6 }}
            className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-400 transition-colors shadow-lg"
          >
            Book Your Stay
          </motion.button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
            alt="Luxury Hotel Pool"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-yellow-400 font-medium">
              Welcome to Paradise
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight">
              Experience <br />
              <span className="italic text-yellow-500">Luxury</span> Living
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
              Immerse yourself in the ultimate relaxation at CheckInn. 
              Where golden sunsets meet crystal clear waters.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105 w-full sm:w-auto">
                Check Availability
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full text-lg font-medium transition-all w-full sm:w-auto">
                View Suites
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-[1px] h-12 bg-white/50" />
          </div>
        </motion.div>
      </section>

      {/* About / Intro */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-yellow-500 font-medium tracking-widest uppercase mb-4">About Us</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-900 leading-tight">
              A Sanctuary for the <br />
              <span className="italic text-yellow-500">Senses</span>
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              Nestled along the pristine coastline, CheckInn offers an escape from the ordinary. 
              Our architecture blends seamlessly with nature, featuring open-air spaces, 
              abundant natural light, and a color palette inspired by the sun and sand.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Whether you're lounging by our infinity pool or indulging in world-class dining, 
              every moment is curated for your absolute comfort.
            </p>
            <Link href="/about" className="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-500 transition-colors group">
              Read Our Story <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
             <Image
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80"
              alt="Hotel Exterior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-yellow-500 font-medium tracking-widest uppercase mb-4">Amenities</h3>
            <h2 className="text-4xl md:text-6xl font-serif font-bold">
              World-Class Comfort
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Waves, title: "Infinity Pool", desc: "Panoramic ocean views" },
                { icon: Utensils, title: "Fine Dining", desc: "Michelin-starred chefs" },
                { icon: Coffee, title: "Luxury Spa", desc: "Rejuvenating treatments" },
                { icon: Car, title: "Valet Parking", desc: "24/7 secure service" },
                { icon: Wifi, title: "High-Speed Wifi", desc: "Stay connected everywhere" },
                { icon: Wind, title: "Private Beach", desc: "Exclusive access" },
                { icon: Star, title: "Concierge", desc: "Personalized experiences" },
                { icon: MapPin, title: "Prime Location", desc: "Heart of the city" },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-yellow-500 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-yellow-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 group-hover:text-yellow-500 transition-colors">{item.title}</h4>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
               <Image
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80"
                alt="Amenities Highlight"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 max-w-md">
                <p className="text-yellow-400 font-serif italic text-2xl mb-2">"Unforgettable"</p>
                <p className="text-white/80">Every detail is designed to provide you with an experience of unparalleled luxury and relaxation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery / Showcase */}
      <section id="gallery" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-yellow-500 font-medium tracking-widest uppercase mb-4">Gallery</h3>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
              Visual Journey
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Explore the beauty of our resort, from the sun-drenched pools to the elegantly appointed suites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
            <motion.div 
              className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80"
                alt="Luxury Bedroom"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </motion.div>
            
            <motion.div 
              className="md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80"
                alt="Resort View"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            <motion.div 
              className="md:col-span-1 md:row-span-2 relative rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80"
                alt="Beach"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            <motion.div 
              className="md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80"
                alt="Dining"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80"
            alt="Luxury Resort Pool Evening"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight">
               Ready for your <br />
               <span className="text-yellow-500 italic">Dream Vacation?</span>
             </h2>
             <p className="text-xl md:text-2xl mb-12 text-white/80 max-w-2xl mx-auto font-light">
               Book directly with us for the best rates and exclusive benefits. 
               Your paradise is just a click away.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button className="bg-yellow-500 text-slate-900 px-10 py-5 rounded-full text-lg font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-yellow-500/20">
                 Book Your Stay Now
               </button>
               <button className="px-10 py-5 rounded-full text-lg font-bold text-white border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm">
                 Contact Concierge
               </button>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-white pt-24 pb-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="text-4xl font-serif font-bold tracking-wider block mb-8">
              Check<span className="text-yellow-500">Inn</span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-8">
              Experience the pinnacle of luxury and comfort. 
              Where every detail is curated for your perfect getaway.
            </p>
            <div className="flex space-x-4">
              {/* Social Placeholders */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-all cursor-pointer">
                  <span className="text-sm font-bold">So</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8 text-yellow-500">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              {["About Us", "Rooms & Suites", "Dining", "Spa & Wellness", "Gallery", "Events"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white hover:translate-x-2 transition-all inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-yellow-500">Contact</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex items-start gap-4 group">
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-yellow-500 group-hover:text-slate-900 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>123 Luxury Ave,<br />Paradise City, PC 12345</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-yellow-500 group-hover:text-slate-900 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-yellow-500 group-hover:text-slate-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>reservations@checkinn.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-yellow-500">Newsletter</h4>
            <p className="text-slate-400 mb-6">Subscribe for exclusive offers and updates.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 text-white px-6 py-4 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-white/10 transition-all"
              />
              <button className="absolute right-2 top-2 bg-yellow-500 text-slate-900 p-2 rounded-full hover:bg-yellow-400 transition-colors transform group-hover:rotate-[-45deg] duration-300">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} CheckInn Hotels. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
