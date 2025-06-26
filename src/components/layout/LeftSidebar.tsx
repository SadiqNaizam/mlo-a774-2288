import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Home, AppWindow, Gamepad2, Library, Settings } from 'lucide-react';

interface NavLinkItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
}

const NavLinkItem: React.FC<NavLinkItemProps> = ({ to, icon: Icon, label }) => (
  <NavLink
    to={to}
    end={to === "/"}
    className={({ isActive }) =>
      cn(
        'w-full',
        isActive ? 'text-primary' : 'text-muted-foreground'
      )
    }
  >
    {({ isActive }) => (
      <Button
        variant={isActive ? 'secondary' : 'ghost'}
        className="w-full justify-start gap-3"
      >
        <Icon className="h-5 w-5" />
        {label}
      </Button>
    )}
  </NavLink>
);

const LeftSidebar: React.FC = () => {
  console.log('LeftSidebar loaded');

  return (
    <aside className="hidden md:flex flex-col w-64 border-r bg-background fixed h-full">
      <div className="flex-1 p-4">
        <nav className="flex flex-col gap-2">
          <NavLinkItem to="/" icon={Home} label="Home" />
          <NavLinkItem to="/app-category" icon={AppWindow} label="Apps" />
          <NavLinkItem to="/app-category?category=games" icon={Gamepad2} label="Games" />
          {/* Using a placeholder link as library page does not exist yet */}
          <NavLinkItem to="/library" icon={Library} label="Library" /> 
        </nav>
      </div>
       <div className="p-4 border-t">
        <NavLinkItem to="/settings" icon={Settings} label="Settings" />
      </div>
    </aside>
  );
};

export default LeftSidebar;