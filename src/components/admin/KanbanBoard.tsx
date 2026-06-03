"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Phone, Calendar, Mail } from "lucide-react";

type Lead = {
  id: string;
  name: string;
  status: string;
  mobile: string;
  email: string | null;
  eventType: string | null;
};

const STAGES = ["NEW", "CONTACTED", "QUALIFIED", "PROPOSAL_SENT", "WON", "LOST"];

export default function KanbanBoard({ initialLeads }: { initialLeads: Lead[] }) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [draggedLead, setDraggedLead] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, leadId: string) => {
    setDraggedLead(leadId);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = async (e: React.DragEvent, newStatus: string) => {
    e.preventDefault();
    if (!draggedLead) return;

    // Optimistically update UI
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === draggedLead ? { ...lead, status: newStatus } : lead
      )
    );
    
    setDraggedLead(null);
    
    // In a real implementation, we would call an API route here to update the DB
    // await fetch(`/api/leads/${draggedLead}`, { method: 'PATCH', body: JSON.stringify({ status: newStatus }) });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'NEW': return 'bg-blue-500/10 text-blue-500 border-blue-200';
      case 'CONTACTED': return 'bg-yellow-500/10 text-yellow-500 border-yellow-200';
      case 'QUALIFIED': return 'bg-purple-500/10 text-purple-500 border-purple-200';
      case 'PROPOSAL_SENT': return 'bg-orange-500/10 text-orange-500 border-orange-200';
      case 'WON': return 'bg-green-500/10 text-green-500 border-green-200';
      case 'LOST': return 'bg-red-500/10 text-red-500 border-red-200';
      default: return 'bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <div className="flex gap-6 overflow-x-auto pb-4 h-[70vh]">
      {STAGES.map((stage) => {
        const stageLeads = leads.filter((l) => l.status === stage);
        
        return (
          <div 
            key={stage}
            className="flex-shrink-0 w-80 bg-muted/30 rounded-xl border border-border flex flex-col"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, stage)}
          >
            <div className={`p-4 border-b border-border font-semibold flex items-center justify-between ${getStatusColor(stage)} rounded-t-xl bg-background`}>
              <span>{stage.replace('_', ' ')}</span>
              <Badge variant="outline">{stageLeads.length}</Badge>
            </div>
            
            <div className="flex-1 p-3 space-y-3 overflow-y-auto">
              {stageLeads.map((lead) => (
                <div
                  key={lead.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, lead.id)}
                  className="bg-card p-4 rounded-lg border border-border shadow-sm cursor-grab active:cursor-grabbing hover:border-primary/50 transition-colors"
                >
                  <div className="font-medium text-sm mb-1">{lead.name}</div>
                  <div className="text-xs text-muted-foreground mb-3">{lead.eventType || "General Inquiry"}</div>
                  
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3" />
                      {lead.mobile}
                    </div>
                    {lead.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="w-3 h-3" />
                        {lead.email}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {stageLeads.length === 0 && (
                <div className="h-24 flex items-center justify-center text-muted-foreground text-sm border-2 border-dashed border-border rounded-lg">
                  Drop here
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
