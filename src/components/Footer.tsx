const Footer = () => {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center text-sm text-muted-foreground">
          <p>© 2025 CS-semHUB — Simplifying Your Semester Journey</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Feedback
            </a>
            <a href="/about" className="hover:text-primary transition-colors">
              About
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
