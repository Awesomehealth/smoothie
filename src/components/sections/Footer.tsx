
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Music } from "lucide-react"; // For TikTok icon

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
          {/* Left side - Links and Copyright */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-gray-700 hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gray-700 hover:underline">
              Terms & Conditions
            </Link>
            <span className="text-gray-500">
              © 2025 Final Round, 1 E Erie St, Suite 525-2207 Chicago, IL 60611
            </span>
          </div>

          {/* Right side - Social Media Icons */}
          <div className="flex items-center space-x-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-black" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-black" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-black" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <Music className="h-5 w-5 text-black" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube className="h-5 w-5 text-black" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
