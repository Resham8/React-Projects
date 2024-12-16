const Footer = () => {
  return (
    <div className="w-full h-1/3 bg-black text-white uppercase">
      <div className="flex justify-between">
        {/* Parent div for list */}
        <div className="flex flex-wrap m-16 max-w-3xl">
          <ul className="flex flex-wrap gap-4 text-lg ">
            <li className="hover:border-b-2 hover:border-white">
              <a href="#">Company</a>
            </li>
            <li className="hover:border-b-2 hover:border-white">
              <a href="#">Financials</a>
            </li>
            <li className="hover:border-b-2 hover:border-white">
              <a href="#">Careers</a>
            </li>
            <li className="hover:border-b-2 hover:border-white">
              <a href="#">Contact us</a>
            </li>
            <li className="hover:border-b-2 hover:border-white">
              <a href="#">Sustainability</a>
            </li>
            <li className="hover:border-b-2 hover:border-white">
              <a href="#">Media Center</a>
            </li>
            <li className="hover:border-b-2 hover:border-white">
              <a href="#">Privacy &amp; Legal</a>
            </li>
            <li className="hover:border-b-2 hover:border-white">
              <a href="#">Cookie settings</a>
            </li>
            <li className="hover:border-b-2 hover:border-white">
              <a href="#">Sitemap</a>
            </li>
            <li className="hover:border-b-2 hover:border-white">
              <a href="#">Newsletter</a>
            </li>
            <li className="hover:border-b-2 hover:border-white">
              <a href="#">Accessibility</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap m-16">
          <ul className="flex flex-wrap gap-4 text-xl ">
            <li className="cursor-pointer">
              <i className="fa-brands fa-facebook-f"></i>
            </li>
            <li className="cursor-pointer">
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li className="cursor-pointer">
              <i className="fa-brands fa-threads"></i>
            </li>
            <li className="cursor-pointer">
              <i className="fa-brands fa-youtube"></i>
            </li>
            <li className="cursor-pointer">
              <i className="fa-brands fa-x-twitter"></i>
            </li>
            <li className="cursor-pointer">
              <i className="fa-brands fa-tiktok"></i>
            </li>
            <li className="cursor-pointer">
              <i className="fa-brands fa-linkedin-in"></i>
            </li>
            <li className="cursor-pointer">
              <i className="fa-brands fa-weibo"></i>
            </li>
            <li className="cursor-pointer">
              <i className="fa-regular fa-circle-play"></i>
            </li>
            <li className="cursor-pointer">
              <i className="fa-brands fa-weixin"></i>
            </li>
            <li className="cursor-pointer">
              <i className="fa-brands fa-discord"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
