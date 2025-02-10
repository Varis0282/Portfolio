import React from "react";

function SideBar() {
  return (
    <div className="fixed left-0 bottom-0 px-16 sm:static sm:pb-10">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-10 sm:flex-row">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/varis-rajak/">
            <i className="ri-linkedin-box-fill text-gray-400 text-md"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href='https://github.com/Varis0282'>
            <i className="ri-github-fill text-gray-400 text-md"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="mailto:varisrajakforth11@gmail.com">
            <i className="ri-mail-send-fill text-gray-400 text-md"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/itsvraj_">
            <i className="ri-instagram-fill text-gray-400 text-md"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/varis.rajak.1">
            <i className="ri-facebook-fill text-gray-400 text-md"></i>
          </a>
        </div>
        <div className="w-[1px] h-52 bg-gray-700 sm:hidden"></div>
      </div>
    </div>
  );
}

export default SideBar;
