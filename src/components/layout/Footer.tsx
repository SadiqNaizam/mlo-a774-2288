import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Twitter, Github, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm">
          &copy; {currentYear} Windows Store Clone. All Rights Reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6 text-sm">
          <Link to="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </nav>
        <div className="flex items-center gap-2">
           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;