import React, { useState } from 'react';
import { LayoutDashboard, Palette, FileText, MessageSquare, CheckCircle2, Clock, Upload, Send } from 'lucide-react';
import { cn } from '../lib/utils';
import type { FinishOption, Document, Message } from '../types';

// Mock Data
const designOptions: FinishOption[] = [
  { id: '1', category: 'Kitchen Counters', name: 'White Quartz', price: 0, image: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?w=400&q=80', selected: true },
  { id: '2', category: 'Kitchen Counters', name: 'Calacatta Marble', price: 2500, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80' },
  { id: '3', category: 'Flooring', name: 'Light Oak Engineered Hardwood', price: 0, image: 'https://images.unsplash.com/photo-1581858326456-9acab43d92fb?w=400&q=80', selected: true },
  { id: '4', category: 'Flooring', name: 'Dark Walnut Hardwood', price: 3200, image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=400&q=80' },
];

const mockDocs: Document[] = [
  { id: '1', name: 'Initial Contract.pdf', type: 'PDF', date: 'Oct 12, 2026', size: '2.4 MB' },
  { id: '2', name: 'Floorplan_v2.pdf', type: 'PDF', date: 'Oct 15, 2026', size: '5.1 MB' },
  { id: '3', name: 'Appliance_Specs.xlsx', type: 'Spreadsheet', date: 'Nov 02, 2026', size: '1.1 MB' },
];

const mockMessages: Message[] = [
  { id: '1', sender: 'builder', text: 'Hi John, the framing inspection passed today! We will start drywall on Monday.', timestamp: 'Yesterday, 2:30 PM' },
  { id: '2', sender: 'client', text: 'That is great news! Did you need my final paint color choices by this week?', timestamp: 'Yesterday, 3:15 PM' },
  { id: '3', sender: 'builder', text: 'Yes, if you can confirm them in the Design Studio tab by Friday, that would be perfect.', timestamp: 'Today, 9:00 AM' }
];

export default function ClientPortal() {
  const [activeTab, setActiveTab] = useState<'overview' | 'design' | 'docs' | 'messages'>('overview');
  const [selections, setSelections] = useState<string[]>(['1', '3']);
  const [messageText, setMessageText] = useState('');

  const toggleSelection = (optionId: string, category: string) => {
    // Only allow one selection per category
    const categoryOptions = designOptions.filter(o => o.category === category).map(o => o.id);
    const newSelections = selections.filter(id => !categoryOptions.includes(id));
    setSelections([...newSelections, optionId]);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-4rem)] bg-[#0F1115] text-[#F8F9FA] font-sans">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-72 bg-[#16191E] border-r border-white/10 p-6 flex flex-col shrink-0 gap-6">
        <div className="mb-2 hidden md:block">
          <h3 className="text-[10px] text-[#C2A37E] uppercase tracking-[0.2em] mb-4">Project Scope</h3>
          <h2 className="text-2xl font-serif text-white tracking-tight">The Smith <span className="italic text-[#C2A37E]">House</span></h2>
          <p className="text-xs text-[#94A3B8] mt-2 tracking-wide">123 Meadow Lane</p>
        </div>

        <nav className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 flex-1">
          <button 
            onClick={() => setActiveTab('overview')}
            className={cn("flex items-center gap-3 px-4 py-3 rounded-md text-[10px] uppercase font-bold tracking-widest transition-all whitespace-nowrap", activeTab === 'overview' ? "bg-white/5 text-[#C2A37E] border border-[#C2A37E]/20" : "text-[#94A3B8] hover:bg-white/5 hover:text-white border border-transparent")}
          >
            <LayoutDashboard className="w-4 h-4 opacity-70" /> Overview
          </button>
          <button 
            onClick={() => setActiveTab('design')}
            className={cn("flex items-center gap-3 px-4 py-3 rounded-md text-[10px] uppercase font-bold tracking-widest transition-all whitespace-nowrap", activeTab === 'design' ? "bg-white/5 text-[#C2A37E] border border-[#C2A37E]/20" : "text-[#94A3B8] hover:bg-white/5 hover:text-white border border-transparent")}
          >
            <Palette className="w-4 h-4 opacity-70" /> Design Studio
          </button>
          <button 
            onClick={() => setActiveTab('docs')}
            className={cn("flex items-center gap-3 px-4 py-3 rounded-md text-[10px] uppercase font-bold tracking-widest transition-all whitespace-nowrap", activeTab === 'docs' ? "bg-white/5 text-[#C2A37E] border border-[#C2A37E]/20" : "text-[#94A3B8] hover:bg-white/5 hover:text-white border border-transparent")}
          >
            <FileText className="w-4 h-4 opacity-70" /> Documents
          </button>
          <button 
            onClick={() => setActiveTab('messages')}
            className={cn("flex items-center gap-3 px-4 py-3 rounded-md text-[10px] uppercase font-bold tracking-widest transition-all whitespace-nowrap", activeTab === 'messages' ? "bg-white/5 text-[#C2A37E] border border-[#C2A37E]/20" : "text-[#94A3B8] hover:bg-white/5 hover:text-white border border-transparent")}
          >
            <MessageSquare className="w-4 h-4 opacity-70" /> Messages
          </button>
        </nav>
        
        <div className="mt-auto border-t border-white/10 pt-6">
          <button className="w-full py-3 bg-white/5 border border-white/10 text-[10px] text-white uppercase tracking-widest hover:bg-white/10 transition-all font-medium rounded-sm">Contact Project Manager</button>
        </div>
      </aside>

      {/* Main Content Area */}
      <section className="flex-1 p-6 md:p-8 bg-[#0F1115] flex flex-col overflow-y-auto">
        <div className="max-w-5xl w-full mx-auto">
          
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
             <div className="space-y-6">
               <h1 className="font-serif text-4xl mb-6 tracking-tight">Project Overview <span className="text-[#C2A37E] italic">Status</span></h1>
               
               {/* Progress Card */}
               <div className="bg-[#16191E] p-6 border border-white/10 relative overflow-hidden">
                 <div className="flex justify-between items-end mb-4">
                   <div>
                     <h3 className="text-[10px] uppercase text-[#94A3B8] tracking-[0.2em] mb-1">Current Phase</h3>
                     <p className="text-xl font-medium tracking-wide">Framing & Rough-ins</p>
                   </div>
                   <div className="text-right">
                     <div className="flex items-baseline gap-2">
                       <span className="text-4xl font-light">35%</span>
                       <span className="text-[10px] text-green-500 font-bold tracking-widest uppercase">+2% THIS WEEK</span>
                     </div>
                   </div>
                 </div>
                 <div className="w-full h-1 bg-[#2D3139] mt-6">
                   <div className="h-full bg-[#C2A37E]" style={{ width: '35%' }}></div>
                 </div>
                 <p className="text-[10px] text-[#C2A37E] mt-4 uppercase tracking-[0.1em] italic font-serif">Estimated Completion: March 2027</p>
               </div>

               {/* Timeline */}
               <div className="bg-[#16191E] p-6 border border-white/10">
                  <h3 className="text-[10px] uppercase text-[#94A3B8] tracking-[0.2em] mb-6">Timeline Events</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4 relative">
                      <div className="flex flex-col items-center z-10 bg-[#16191E]">
                        <div className="w-5 h-5 border border-[#C2A37E] rounded-sm flex items-center justify-center bg-[#1A1D23]">
                          <span className="text-[10px] text-[#C2A37E]">✓</span>
                        </div>
                        <div className="w-px h-full bg-white/10 my-2 absolute top-5 left-2.5"></div>
                      </div>
                      <div className="pb-2">
                        <p className="font-medium text-sm text-white opacity-60">Permits & Planning</p>
                        <p className="text-[11px] text-[#94A3B8] mt-1">Completed Sep 2026</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 relative">
                      <div className="flex flex-col items-center z-10 bg-[#16191E]">
                        <div className="w-5 h-5 border border-[#C2A37E] rounded-sm flex items-center justify-center bg-[#1A1D23]">
                          <span className="text-[10px] text-[#C2A37E]">✓</span>
                        </div>
                        <div className="w-px h-full bg-white/10 my-2 absolute top-5 left-2.5"></div>
                      </div>
                      <div className="pb-2">
                        <p className="font-medium text-sm text-white opacity-60">Foundation</p>
                        <p className="text-[11px] text-[#94A3B8] mt-1">Completed Oct 2026</p>
                      </div>
                    </div>

                    <div className="flex gap-4 relative">
                      <div className="flex flex-col items-center z-10 bg-[#16191E]">
                        <div className="w-5 h-5 border border-[#C2A37E] rounded-sm bg-[#2D3139] border-dashed"></div>
                        <div className="w-px h-full bg-white/10 my-2 absolute top-5 left-2.5"></div>
                      </div>
                      <div className="pb-2">
                        <p className="font-medium text-sm text-white">Framing</p>
                        <p className="text-[10px] text-[#C2A37E] mt-1 uppercase tracking-widest font-bold">In Progress</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex flex-col items-center z-10 bg-[#16191E]">
                        <div className="w-5 h-5 border border-white/20 rounded-sm bg-transparent"></div>
                      </div>
                      <div>
                        <p className="font-medium text-sm text-white opacity-40">Drywall & Interior</p>
                      </div>
                    </div>
                  </div>
               </div>
             </div>
          )}

          {/* DESIGN STUDIO TAB */}
          {activeTab === 'design' && (
            <div className="space-y-6 flex flex-col h-full">
              <div className="mb-8 flex justify-between items-end">
                <div>
                  <h1 className="font-serif text-4xl mb-2 tracking-tight">Design Choices <span className="text-[#C2A37E] italic">Studio</span></h1>
                  <p className="text-[#94A3B8] text-sm font-light">Select your finishes. Upgrades will directly update your change order view.</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[#1A1D23] text-[#C2A37E] border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold">2 Pending</span>
                </div>
              </div>

              {['Kitchen Counters', 'Flooring'].map(category => (
                <div key={category} className="mb-10">
                  <h3 className="text-[10px] text-[#94A3B8] uppercase tracking-[0.2em] mb-4 border-b border-white/10 pb-2">{category}</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {designOptions.filter(o => o.category === category).map(option => {
                      const isSelected = selections.includes(option.id);
                      return (
                        <div 
                          key={option.id}
                          onClick={() => toggleSelection(option.id, category)}
                          className={cn(
                            "bg-[#16191E] border group cursor-pointer transition-all relative",
                            isSelected ? "border-[#C2A37E]" : "border-white/10 hover:border-white/30"
                          )}
                        >
                          {isSelected && (
                            <div className="absolute top-3 right-3 z-20 w-5 h-5 bg-[#C2A37E] text-[#0F1115] flex items-center justify-center rounded-full text-[10px] font-bold shadow-md">✓</div>
                          )}
                          <div className="h-48 bg-[#2A2E35] flex items-center justify-center relative overflow-hidden p-0 border-b border-white/5">
                            <img src={option.image} alt={option.name} className="w-full h-full object-cover mix-blend-luminosity opacity-70 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#16191E] via-transparent to-transparent opacity-80"></div>
                            <span className="absolute bottom-4 left-4 z-10 text-[10px] uppercase tracking-[0.2em] font-serif text-white">{option.name.split(' ')[0]}</span>
                          </div>
                          <div className="p-5">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="text-sm font-semibold tracking-wide text-white">{option.name}</h4>
                              <span className={cn("text-[10px] font-bold uppercase tracking-widest", option.price > 0 ? "text-white" : "text-[#C2A37E]")}>
                                {option.price > 0 ? `+$${option.price.toLocaleString()}` : 'Standard'}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#94A3B8] leading-relaxed mb-4">Sample premium description for material finish. Verify physically.</p>
                            <button className={cn(
                              "w-full py-2 text-[10px] uppercase font-bold tracking-widest transition-colors rounded-sm",
                              isSelected ? "bg-white text-[#0F1115]" : "bg-[#2D3139] text-[#94A3B8] group-hover:bg-white/10 group-hover:text-white"
                            )}>
                              {isSelected ? 'Selection Saved' : 'Select Choice'}
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* DOCUMENTS TAB */}
          {activeTab === 'docs' && (
            <div className="space-y-6">
              <div className="flex justify-between items-end mb-6">
                 <div>
                   <h1 className="font-serif text-4xl mb-2 tracking-tight">Project <span className="text-[#C2A37E] italic">Documents</span></h1>
                   <p className="text-[#94A3B8] text-sm">Review permits, plans, and warranty information.</p>
                 </div>
                 <button className="flex items-center gap-2 bg-[#2D3139] text-white border border-white/10 px-4 py-2 text-[10px] uppercase tracking-widest font-bold hover:bg-white/20 transition rounded-sm">
                   <Upload className="w-3 h-3" /> Upload
                 </button>
              </div>

              <div className="bg-[#16191E] border border-white/10 overflow-hidden">
                <table className="min-w-full divide-y divide-white/5">
                  <thead className="bg-[#1A1D23]">
                    <tr>
                      <th className="px-6 py-4 text-left text-[10px] font-medium text-[#94A3B8] uppercase tracking-[0.2em]">Name</th>
                      <th className="px-6 py-4 text-left text-[10px] font-medium text-[#94A3B8] uppercase tracking-[0.2em]">Date</th>
                      <th className="px-6 py-4 text-right text-[10px] font-medium text-[#94A3B8] uppercase tracking-[0.2em]">Size</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {mockDocs.map(doc => (
                      <tr key={doc.id} className="hover:bg-white/5 cursor-pointer transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#2D3139] border border-white/5 flex items-center justify-center text-[10px] font-bold italic text-[#C2A37E]">
                            {doc.type === 'Spreadsheet' ? 'XLS' : 'PDF'}
                          </div>
                          <div>
                            <span className="text-sm font-medium text-white block">{doc.name}</span>
                            <span className="text-[10px] text-[#94A3B8] uppercase tracking-wider">{doc.type}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs text-[#94A3B8]">{doc.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-xs text-[#94A3B8] text-right font-mono">{doc.size}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* MESSAGES TAB */}
          {activeTab === 'messages' && (
            <div className="space-y-6 flex flex-col h-[calc(100vh-10rem)] md:h-[calc(100vh-8rem)]">
              <div>
                 <h1 className="font-serif text-4xl mb-2 tracking-tight">Direct <span className="text-[#C2A37E] italic">Comms</span></h1>
              </div>
              
              <div className="flex-1 bg-[#16191E] border border-white/10 flex flex-col overflow-hidden relative">
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{background: 'radial-gradient(circle at center, #fff 1px, transparent 1px) 0 0 / 20px 20px'}}></div>
                <div className="p-4 border-b border-white/10 bg-[#1A1D23] z-10">
                  <p className="text-xs text-[#94A3B8] uppercase tracking-widest font-medium">Project Manager: <span className="text-white">Sarah Jenkins</span></p>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6 space-y-6 z-10">
                  {mockMessages.map(msg => (
                    <div key={msg.id} className={cn("flex flex-col max-w-[70%]", msg.sender === 'client' ? "ml-auto items-end" : "mr-auto items-start")}>
                      <div className={cn(
                        "px-5 py-4 text-sm leading-relaxed border", 
                        msg.sender === 'client' ? "bg-[#2D3139] border-white/5 text-white rounded-l-lg rounded-tr-lg" : "bg-transparent border-[#C2A37E]/30 text-[#F8F9FA] rounded-r-lg rounded-tl-lg"
                      )}>
                        {msg.text}
                      </div>
                      <span className="text-[10px] text-[#94A3B8] mt-2 tracking-wider uppercase">{msg.timestamp}</span>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 border-t border-white/10 bg-[#1A1D23] flex gap-3 z-10">
                  <div className="flex-1 relative">
                    <input 
                      type="text" 
                      placeholder="Type your message..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      className="w-full bg-[#0F1115] border border-white/10 text-white placeholder:text-[#94A3B8] text-sm px-4 py-3 focus:outline-none focus:border-[#C2A37E] transition-colors rounded-sm"
                    />
                  </div>
                  <button className="bg-[#C2A37E] text-[#0F1115] px-6 text-center hover:bg-[#A38763] transition flex items-center justify-center font-bold tracking-widest text-[10px] uppercase rounded-sm">
                    Send <Send className="w-3 h-3 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
      
      {/* Right Margin Indicators */}
      <div className="hidden lg:flex w-16 border-l border-white/10 bg-[#0F1115] flex-col items-center py-6 gap-8 shrink-0">
         <div className="writing-vertical-lr text-[10px] text-[#94A3B8] uppercase tracking-[0.4em] font-serif rotate-180" style={{ writingMode: 'vertical-lr' }}>ACTIVE SESSION</div>
         <div className="flex-1"></div>
         <div className="flex flex-col gap-4">
           <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
           <div className="w-1.5 h-1.5 bg-[#C2A37E] rounded-full"></div>
           <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
         </div>
      </div>
    </div>
  );
}
