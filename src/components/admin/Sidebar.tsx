"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { LayoutDashboard, Users, Calendar, Image as ImageIcon, Settings, LogOut, Utensils, MessageSquare } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Lead Management", href: "/admin/leads", icon: Users },
    { name: "Bookings", href: "/admin/bookings", icon: Calendar },
    { name: "Menu", href: "/admin/menu", icon: Utensils },
    { name: "Media Gallery", href: "/admin/gallery", icon: ImageIcon },
    { name: "Reviews", href: "/admin/reviews", icon: MessageSquare },
  ];

  return (
    <aside className="w-64 bg-card border-r border-border hidden md:flex flex-col">
      <div className="h-20 flex items-center px-6 border-b border-border">
        <span className="font-serif text-xl font-bold text-primary">AACHMAN ADMIN</span>
      </div>
      
      <nav className="flex-1 py-6 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link 
              key={item.href}
              href={item.href} 
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-border">
        <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:text-foreground transition-colors">
          <Settings size={20} />
          <span className="font-medium">Settings</span>
        </Link>
        <button 
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="w-full mt-2 flex items-center gap-3 px-3 py-2 text-destructive hover:bg-destructive/10 rounded-md transition-colors"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
