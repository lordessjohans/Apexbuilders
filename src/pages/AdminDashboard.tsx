import React, { useState } from 'react';
import { Search, Plus, Filter, MoreVertical, MessageSquare, FileText, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';
import type { Project } from '../types';

const mockProjects: Project[] = [
  { id: '1', name: 'The Smith House', clientName: 'John & Sarah Smith', status: 'in-progress', progress: 35, startDate: 'Aug 2026', estimatedCompletion: 'Mar 2027' },
  { id: '2', name: 'Riverfront Estate', clientName: 'Michael Chen', status: 'planning', progress: 10, startDate: 'Pending', estimatedCompletion: 'TBD' },
  { id: '3', name: 'Oakview Remodel', clientName: 'Emma Watson', status: 'in-progress', progress: 85, startDate: 'May 2026', estimatedCompletion: 'Nov 2026' },
  { id: '4', name: 'Sunset Ridge Build', clientName: 'David & Lisa Thorne', status: 'completed', progress: 100, startDate: 'Jan 2026', estimatedCompletion: 'Oct 2026' },
];

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = mockProjects.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.clientName.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#0F1115] text-[#F8F9FA] flex flex-col font-sans">
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col">
        
        {/* Header & Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="font-serif text-3xl tracking-tight mb-2">Projects <span className="text-[#C2A37E] italic">Overview</span></h1>
            <p className="text-[11px] text-[#94A3B8] uppercase tracking-[0.1em]">Manage all active builds and client communications.</p>
          </div>
          <button className="bg-[#C2A37E] text-[#0F1115] px-6 py-3 text-[10px] uppercase font-bold tracking-widest hover:bg-[#A38763] transition flex items-center gap-2 rounded-sm shadow-sm">
            <Plus className="w-4 h-4" /> New Project
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#16191E] p-6 border border-white/10 flex flex-col justify-between">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] mb-4">Active Builds</h3>
            <p className="text-4xl font-light text-white">12</p>
          </div>
          <div className="bg-[#16191E] p-6 border border-white/10 flex flex-col justify-between">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] mb-4">In Planning</h3>
            <p className="text-4xl font-light text-white">4</p>
          </div>
          <div className="bg-[#16191E] p-6 border border-[#C2A37E]/30 flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-0 right-0 w-16 h-16 bg-[#C2A37E]/10 rounded-bl-full"></div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#C2A37E] mb-4">Unread Messages</h3>
            <p className="text-4xl font-light text-[#C2A37E]">7</p>
          </div>
          <div className="bg-[#16191E] p-6 border border-white/10 flex flex-col justify-between">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] mb-4">Pending Approvals</h3>
            <p className="text-4xl font-light text-white">3</p>
          </div>
        </div>

        {/* Projects Table & Tools */}
        <div className="flex-1 bg-[#16191E] border border-white/10 overflow-hidden flex flex-col lg:flex-row">
          
          <div className="flex-1 flex flex-col min-w-0">
            {/* Toolbar */}
            <div className="p-4 border-b border-white/10 flex gap-4 bg-[#1A1D23]">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                <input 
                  type="text" 
                  placeholder="Search projects or clients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[#0F1115] pl-12 pr-4 py-2 border border-white/10 text-white placeholder:text-[#94A3B8] text-xs focus:outline-none focus:border-[#C2A37E] transition-colors rounded-sm"
                />
              </div>
              <button className="px-6 py-2 border border-white/10 flex items-center gap-2 hover:bg-[#2D3139] text-white text-[10px] uppercase font-bold tracking-widest transition-colors rounded-sm">
                <Filter className="w-3 h-3 text-[#C2A37E]" /> Filter
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/5">
                <thead className="bg-[#16191E]">
                  <tr>
                    <th className="px-6 py-4 text-left text-[10px] font-medium text-[#94A3B8] uppercase tracking-[0.2em]">Project</th>
                    <th className="px-6 py-4 text-left text-[10px] font-medium text-[#94A3B8] uppercase tracking-[0.2em]">Status</th>
                    <th className="px-6 py-4 text-left text-[10px] font-medium text-[#94A3B8] uppercase tracking-[0.2em]">Progress</th>
                    <th className="px-6 py-4 text-right text-[10px] font-medium text-[#94A3B8] uppercase tracking-[0.2em]">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 bg-[#16191E]">
                  {filteredProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-white/5 group transition-colors">
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="font-semibold text-white group-hover:text-[#C2A37E] transition-colors cursor-pointer tracking-wide">{project.name}</span>
                          <span className="text-[11px] text-[#94A3B8] mt-1">{project.clientName}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <span className={cn(
                          "px-3 py-1 text-[9px] uppercase tracking-widest font-bold border rounded-sm",
                          project.status === 'in-progress' ? "border-[#C2A37E]/40 text-[#C2A37E] bg-[#C2A37E]/5" :
                          project.status === 'planning' ? "border-[#94A3B8]/40 text-[#94A3B8] bg-white/5" :
                          "border-green-500/40 text-green-400 bg-green-500/5"
                        )}>
                          {project.status === 'in-progress' ? 'Active Build' : project.status === 'planning' ? 'Planning' : 'Completed'}
                        </span>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex items-center gap-4 w-48">
                          <div className="flex-1 bg-[#2D3139] h-1">
                            <div 
                              className={cn("h-1", project.progress === 100 ? "bg-green-500" : "bg-[#C2A37E]")}
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs font-medium text-[#94A3B8] w-8 text-right">{project.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-3">
                          <button className="text-[#94A3B8] hover:text-[#C2A37E] transition-colors" title="Messages">
                            <MessageSquare className="w-4 h-4" />
                          </button>
                          <button className="text-[#94A3B8] hover:text-[#C2A37E] transition-colors" title="Documents">
                            <FileText className="w-4 h-4" />
                          </button>
                          <button className="text-[#94A3B8] hover:text-white transition-colors" title="More">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions / Recent Activity Sidebar */}
          <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-white/10 bg-[#1A1D23] p-6 flex flex-col shrink-0">
             <h3 className="text-[10px] uppercase text-[#C2A37E] tracking-[0.2em] mb-6">Activity Log</h3>
             <div className="space-y-8 flex-1">
               <div className="flex gap-4">
                 <div className="w-6 h-6 border border-white/20 flex items-center justify-center shrink-0 bg-[#2D3139]">
                   <MessageSquare className="w-3 h-3 text-[#94A3B8]" />
                 </div>
                 <div>
                   <p className="text-xs font-semibold text-white mb-1">John Smith</p>
                   <p className="text-[11px] text-[#94A3B8] leading-tight">Sent a message regarding painting choices in Kitchen.</p>
                   <p className="text-[10px] text-[#C2A37E] uppercase tracking-wider mt-2">10 min ago</p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-6 h-6 border border-[#C2A37E]/50 flex items-center justify-center shrink-0 bg-[#C2A37E]/10">
                   <CheckCircle2 className="w-3 h-3 text-[#C2A37E]" />
                 </div>
                 <div>
                   <p className="text-xs font-semibold text-white mb-1">Emma Watson</p>
                   <p className="text-[11px] text-[#94A3B8] leading-tight">Approved 'Dark Oak' flooring change order.</p>
                   <p className="text-[10px] text-[#94A3B8] opacity-60 uppercase tracking-wider mt-2">2 hours ago</p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-6 h-6 border border-white/20 flex items-center justify-center shrink-0 bg-[#2D3139]">
                   <FileText className="w-3 h-3 text-[#94A3B8]" />
                 </div>
                 <div>
                   <p className="text-xs font-semibold text-white mb-1">System</p>
                   <p className="text-[11px] text-[#94A3B8] leading-tight">Permit #8829 uploaded to Riverfront Estate.</p>
                   <p className="text-[10px] text-[#94A3B8] opacity-60 uppercase tracking-wider mt-2">Yesterday</p>
                 </div>
               </div>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}
