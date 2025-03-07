
const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Smoothie Search Engine. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
