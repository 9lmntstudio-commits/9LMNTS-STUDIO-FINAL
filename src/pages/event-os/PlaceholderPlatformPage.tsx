import { ArrowLeft, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PlaceholderPlatformPage({ title }: { title: string }) {
  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-2xl border border-brand-accent/15 bg-brand-panel p-8">
        <Link to="/event-os" className="inline-flex items-center text-brand-accent mb-6 hover:text-brand-accent/80">
          <ArrowLeft size={18} className="mr-2" />
          Back to Event OS
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10">
            <Construction className="text-brand-accent" />
          </div>
          <div>
            <h1 className="text-3xl text-white">{title}</h1>
            <p className="text-gray-400">Rebuilding this platform into the 9LMNTS Studio brand system.</p>
          </div>
        </div>

        <div className="mt-6 text-gray-300">
          Next: wiring real event flows (QR check-in, ticketing, voting, sponsors, live dashboards).
        </div>
      </div>
    </div>
  );
}
