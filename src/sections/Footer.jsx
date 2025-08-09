export default function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="section py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <p className="text-sm text-neutral-400">Fast. Private. Connected.</p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#features">Features</a></li>
              <li><a href="#ai">AI</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Values</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#">Downloads</a></li>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* copyright row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-6 md:flex-row">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Safwan Khan All rights reserved.
          </p>
          <p className="text-xs text-neutral-400">
            By continuing, you agree to our <a href="#" className="underline">Terms</a> & <a href="#" className="underline">Privacy</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
