
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center absolute bottom-0 left-0 right-0 pb-6">
        <div className="flex justify-center space-x-6 text-sm text-gray-500">
          <Link to="/privacy" className="hover:text-gray-700 hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-gray-700 hover:underline">
            Terms of Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
