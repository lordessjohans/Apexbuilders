import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HardHat } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navigation() {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Client Portal', path: '/portal' },
    { name: 'Admin Dashboard', path: '/admin' },
  ];

  return (
    <nav className="bg-[#16191E] border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-[#C2A37E] flex items-center justify-center text-[#0F1115] font-bold text-xl rounded-sm">A</div>
              <span className="font-serif text-2xl tracking-tight font-light text-white">APEX <span className="italic text-[#C2A37E]">&</span> BUILDERS</span>
            </Link>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "inline-flex items-center px-1 pt-1 border-b-2 text-[10px] uppercase tracking-widest font-medium transition-colors",
                    location.pathname === link.path
                      ? "border-[#C2A37E] text-[#C2A37E]"
                      : "border-transparent text-[#94A3B8] hover:border-white/20 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            {location.pathname === '/' && (
              <>
                <Link to="/portal" className="text-[#94A3B8] hover:text-white text-[10px] uppercase tracking-widest font-medium transition-colors">Log in</Link>
                <Link to="/portal" className="bg-[#C2A37E] text-[#0F1115] hover:bg-[#A38763] px-4 py-2 rounded-sm text-[10px] uppercase tracking-widest font-bold transition-colors">Client Access</Link>
              </>
            )}
            {location.pathname !== '/' && (
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-[10px] uppercase text-[#94A3B8] tracking-wider">Client Portal</p>
                  <p className="text-xs font-semibold text-white">Smith Residence</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-[#C2A37E] p-0.5">
                  <div className="w-full h-full rounded-full bg-[#2D3139] flex items-center justify-center text-xs font-medium text-white">
                    {location.pathname === '/portal' ? 'JS' : 'AB'}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
