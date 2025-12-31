export function Footer() {
  return (
    <footer className="border-t border-brand-accent/20 bg-brand-ink">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">
              <span className="font-futuristic">9LMNTS</span>
              <span className="ml-1 font-graffiti text-brand-accent">Studio</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Where Digital Design Enters the <span className="font-graffiti text-brand-accent">CYBER CYPHER</span>
            </p>
          </div>

          <div className="text-sm">
            <div className="text-white mb-2">Focus</div>
            <div className="text-gray-400">Brand Systems</div>
            <div className="text-gray-400">Web + Product</div>
            <div className="text-gray-400">Event OS Platforms</div>
          </div>

          <div className="text-sm">
            <div className="text-white mb-2">Contact</div>
            <a className="text-gray-400 hover:text-brand-accent" href="mailto:contact@9lmnts.studio">
              contact@9lmnts.studio
            </a>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} 9LMNTS Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
