const Footer = () => {
  return (
    <footer className="bg-footer text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center font-bold text-sm text-foreground">D</div>
              <span className="font-bold">DataGenZ Academy</span>
            </div>
            <p className="text-sm text-primary-foreground/60 max-w-xs">
              Empowering the next generation with data skills for a tech-driven future.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#courses" className="hover:text-primary-foreground transition-colors">Courses</a></li>
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4">Courses</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Data Analytics</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Power BI</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Microsoft Azure</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-primary-foreground/40">
          © 2026 DataGenZ Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
