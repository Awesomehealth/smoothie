
const Footer = () => {
  return (
    <footer className="bg-white py-16 pb-24">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Smoothie Search Engine. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
