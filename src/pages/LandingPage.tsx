import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, ClipboardCheck, MessageCircle, Home, CheckCircle2, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-[#0F1115] text-[#F8F9FA]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#16191E] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" 
            alt="Modern home interior" 
            className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
          />
        </div>
        <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center py-16">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif tracking-tight font-light text-white mb-6">
            Build your dream home <br className="hidden sm:block" />
            <span className="text-[#C2A37E] italic">with absolute clarity.</span>
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl text-[#94A3B8] font-light mb-10 leading-relaxed">
            Apex Builders isn't just a contractor. We provide a transparent, 
            interactive platform to manage your custom home build, select finishes, 
            and stay connected every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <Link 
              to="/portal" 
              className="px-8 py-4 bg-[#C2A37E] text-[#0F1115] rounded-sm text-[10px] uppercase font-bold tracking-widest hover:bg-[#A38763] transition flex items-center justify-center gap-2"
            >
              Client Login <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="#features" 
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-sm text-[10px] uppercase tracking-widest hover:bg-white/10 transition flex items-center justify-center backdrop-blur-sm"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F1115]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-white font-light tracking-tight mb-4">A Better Way to Build</h2>
            <p className="text-sm text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
              We've replaced the messy email chains and lost spreadsheets with a 
              custom builder platform designed for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#16191E] border border-white/10 p-8 flex flex-col items-center text-center group cursor-pointer hover:border-white/20 transition-colors">
              <div className="w-12 h-12 bg-[#2D3139] border border-white/5 flex items-center justify-center text-[#C2A37E] mb-6 rounded-sm">
                <Home className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold mb-3 text-white tracking-wide">Custom Options</h3>
              <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                Browse and select your flooring, fixtures, paint colors, and more from our digital design studio.
              </p>
            </div>
            
            <div className="bg-[#16191E] border border-white/10 p-8 flex flex-col items-center text-center group cursor-pointer hover:border-white/20 transition-colors">
              <div className="w-12 h-12 bg-[#2D3139] border border-white/5 flex items-center justify-center text-[#C2A37E] mb-6 rounded-sm">
                <ClipboardCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold mb-3 text-white tracking-wide">Real-time Progress</h3>
              <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                Track the construction schedule, see milestone updates, and view weekly photo logs of your home.
              </p>
            </div>

            <div className="bg-[#16191E] border border-white/10 p-8 flex flex-col items-center text-center group cursor-pointer hover:border-white/20 transition-colors">
              <div className="w-12 h-12 bg-[#2D3139] border border-white/5 flex items-center justify-center text-[#C2A37E] mb-6 rounded-sm">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold mb-3 text-white tracking-wide">Direct Comms</h3>
              <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                Message your project manager directly, ask questions, and keep all communication securely in one place.
              </p>
            </div>

            <div className="bg-[#16191E] border border-white/10 p-8 flex flex-col items-center text-center group cursor-pointer hover:border-white/20 transition-colors">
              <div className="w-12 h-12 bg-[#2D3139] border border-white/5 flex items-center justify-center text-[#C2A37E] mb-6 rounded-sm">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold mb-3 text-white tracking-wide">Document Hub</h3>
              <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                Access your contracts, blueprints, permits, and warranties whenever you need them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#16191E] border-t border-white/10 py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{background: 'repeating-linear-gradient(45deg, #333, #333 10px, #444 10px, #444 20px)'}}></div>
        <div className="max-w-4xl mx-auto border border-[#C2A37E] bg-[#0F1115] relative z-10 text-white p-10 sm:p-14 text-center">
          <h2 className="text-3xl font-serif font-light mb-6">Ready to start planning your build?</h2>
          <p className="text-sm text-[#94A3B8] mb-10 max-w-xl mx-auto leading-relaxed">
            Contact our team today to learn about our process and how our digital platform makes building a home stress-free.
          </p>
          <button className="bg-[#C2A37E] text-[#0F1115] px-8 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-white transition shadow-sm rounded-sm">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-[#0F1115] text-[#94A3B8] py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-[#C2A37E] flex items-center justify-center text-[#0F1115] font-bold text-sm rounded-sm">A</div>
              <span className="font-serif text-xl tracking-tight font-light text-white">APEX <span className="italic text-[#C2A37E]">&</span> BUILDERS</span>
            </div>
            <p className="text-[11px] leading-relaxed max-w-xs">Building exceptional custom homes with transparent processes and modern technology.</p>
          </div>
          <div>
            <h4 className="text-[10px] text-white uppercase tracking-[0.2em] font-medium mb-6">Platform</h4>
            <ul className="space-y-3 text-[11px] tracking-wide">
              <li><Link to="/portal" className="hover:text-white transition">Client Portal</Link></li>
              <li><Link to="/admin" className="hover:text-white transition">Admin Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] text-white uppercase tracking-[0.2em] font-medium mb-6">Contact</h4>
            <ul className="space-y-3 text-[11px] tracking-wide">
              <li>555 Builder Lane, Suite 100</li>
              <li>Austin, TX 78701</li>
              <li>hello@apexbuilders.com</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
