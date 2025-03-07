
const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container max-w-5xl mx-auto px-4 text-center absolute bottom-0 left-0 right-0 pb-6">
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Smoothie Search Engine. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
