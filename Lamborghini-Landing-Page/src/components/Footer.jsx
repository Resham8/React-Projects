const Footer = () => {
  return (
    <div className="w-full h-1/3 bg-black text-white uppercase">
      <div className="flex justify-between">
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
      <div className="ml-16 mr-16 capitalize mb-10 text-base">
        <p>
          * The consumption and emissions values in the website refer to your
          geographical IP. This value might be unrealistic if you navigate using
          VPN or if the position of your Internet provider is imprecise. If you
          believe you are incorrectly geolocalized, contact your dealer to get
          valid consumption and emissions information in your area.
        </p>
      </div>
      <div className="ml-16 mr-16 pb-16 text-lg">
        <p className="capitalize">Copyright © 2024 Automobili Lamborghini S.p.A. a company with sole shareholder subject to the management and coordination of AUDI AG.</p>
        <p className="capitalize">All rights reserved. VAT no. IT 00591801204</p>             
        <p >WARNING ABOUT ILLEGAL OFFERS OF ALLEGED SHARES OF AUTOMOBILI LAMBORGHINI S.P.A.</p>
        <p className="capitalize">Automobili Lamborghini S.p.A. got the notice that several third parties across different
        countries are allegedly offering shares in Automobili Lamborghini S.p.A.
        These offers are unlawful and originate neither from Volkswagen
        Aktiengesellschaft nor from any of its subsidiaries.</p>        
      </div>
    </div>
  );
};

export default Footer;
