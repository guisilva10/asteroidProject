import React from "react";

const Footer = () => {
  return (
    <footer className="fixed right-0 bottom-0 left-0 bg-gray-900 py-2 text-white">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Thiago Silva. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
