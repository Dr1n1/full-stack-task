import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-gray-200 text-gray-800 px-6 py-6 md:px-10 md:py-8">
      <div className="flex-auto">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="flex flex-col items-center md:flex-row gap-2 w-full md:w-[35%]">
              <img
                src="https://tailwind-generator.b-cdn.net/favicon.png"
                width="100"
                alt="Logo Preview"
                className="w-16 h-16 md:w-20 md:h-20"
              />
              <div className="text-xl md:text-2xl text-center md:text-left">
                Fullstack Task
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end w-full md:w-[65%] mt-4 md:mt-0">
              <div className="text-xl md:text-2xl">Drin Krasniqi</div>
            </div>
          </div>

          <div className="w-full border-t border-gray-400 my-4"></div>

          <div className="text-center text-sm md:text-lg">
            © 2024 Your Company - All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
