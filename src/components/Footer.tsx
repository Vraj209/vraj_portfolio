const Footer = () => {
  return (
    <footer className="bg-background border-t py-6">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Footer Text */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vraj Panchal. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
