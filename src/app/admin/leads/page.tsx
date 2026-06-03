import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import KanbanBoard from "@/components/admin/KanbanBoard";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  // Fetch leads from DB
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: 'desc' }
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'NEW': return 'bg-blue-500/10 text-blue-500';
      case 'CONTACTED': return 'bg-yellow-500/10 text-yellow-500';
      case 'QUALIFIED': return 'bg-purple-500/10 text-purple-500';
      case 'PROPOSAL_SENT': return 'bg-orange-500/10 text-orange-500';
      case 'WON': return 'bg-green-500/10 text-green-500';
      case 'LOST': return 'bg-red-500/10 text-red-500';
      default: return 'bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Lead Management</h1>
        <Button>Add New Lead</Button>
      </div>

      <div className="mt-8">
        <KanbanBoard initialLeads={leads} />
      </div>
    </div>
  );
}
