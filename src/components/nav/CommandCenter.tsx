import { type ComponentType, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, LayoutGrid, Gamepad2, Sparkles } from 'lucide-react';

type NavItem = {
  name: string;
  to: string;
  description: string;
  icon: ComponentType<{ size?: number; className?: string }>;
};

export function CommandCenter() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const nav = useMemo<NavItem[]>(
    () => [
      {
        name: 'Studio',
        to: '/',
        description: 'Brand + Web + Product Design',
        icon: Sparkles
      },
      {
        name: 'Event OS',
        to: '/event-os',
        description: 'Top 9 money-maker platforms',
        icon: LayoutGrid
      },
      {
        name: 'LOA Game',
        to: '/loa-game',
        description: 'Fund this game',
        icon: Gamepad2
      }
    ],
    []
  );

  const isActive = (to: string) => (to === '/' ? location.pathname === '/' : location.pathname.startsWith(to));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-brand-accent/20 bg-brand-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-panel border border-brand-accent/30">
            <Zap size={18} className="text-brand-accent" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">
              <span className="font-futuristic">9LMNTS</span>
              <span className="ml-1 font-graffiti text-brand-accent">Studio</span>
            </div>
            <div className="text-xs text-gray-400">Command Center</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`group flex items-center gap-3 rounded-lg px-4 py-2 transition-all border ${
                isActive(item.to)
                  ? 'bg-brand-accent text-brand-ink border-brand-accent'
                  : 'border-transparent hover:border-brand-accent/30 hover:bg-brand-accent/10'
              }`}
            >
              <item.icon size={18} />
              <div className="text-left">
                <div className="text-sm font-medium leading-tight">{item.name}</div>
                <div className={`text-xs leading-tight ${isActive(item.to) ? 'text-brand-ink/80' : 'text-gray-400'}`}>
                  {item.description}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-accent/20"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-brand-accent/20 bg-brand-bg">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3 py-3 transition-all border ${
                  isActive(item.to)
                    ? 'bg-brand-accent text-brand-ink border-brand-accent'
                    : 'border-brand-accent/10 hover:border-brand-accent/30 hover:bg-brand-accent/10'
                }`}
              >
                <item.icon size={18} />
                <div className="text-left">
                  <div className="text-sm font-medium leading-tight">{item.name}</div>
                  <div className={`text-xs leading-tight ${isActive(item.to) ? 'text-brand-ink/80' : 'text-gray-400'}`}>
                    {item.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
