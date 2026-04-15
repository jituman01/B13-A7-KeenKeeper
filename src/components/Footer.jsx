import InstagramIcon from '../assets/instagram.png'
import FacebookIcon from '../assets/facebook.png'
import TwitterIcon from '../assets/twitter.png'

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-16 px-6 md:px-12 mt-20">
      <div className=" mx-auto text-center">

        <h2 className="text-5xl font-black mb-6 ">KeenKeeper</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <h3 className="mb-4 text-xl font-bold  ">Social Links</h3>
        <div className="flex justify-center gap-4 mb-12">
          <a className="bg-white rounded-full ">
            <img src={InstagramIcon} alt="" className="w-10 h-10" />
          </a>
          <a className="bg-white rounded-full ">
            <img src={FacebookIcon} alt="" className="w-10 h-10" />
          </a>
          <a className="bg-white rounded-full ">
            <img src={TwitterIcon} alt="" className="w-10 h-10" />
          </a>
        </div>

        <div className="border-t border-gray-500 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="order-2 md:order-1">
            <p className="text-gray-400 font-bold text-[14px]">
              © 2026 KeenKeeper. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-wider text-gray-400 order-1 md:order-2">
            <a>Terms of Service</a>
            <a>Cookies</a>
            <a>Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;