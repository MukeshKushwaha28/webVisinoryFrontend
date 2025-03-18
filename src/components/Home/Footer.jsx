import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoIosMail, IoIosCall, IoIosPin } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Mailing List */}
        <div className=" flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-4">ConCho</h2>
          <p className="mb-4">
            Nunc imperdiet odio et urna dignissim, sitamet sagittis exque.
          </p>
          <div className="flex items-center border border-gray-500 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent p-3 w-full outline-none text-white"
            />
            <button className="relative overflow-hidden px-6 py-3 text-black bg-white border border-gray-300 transition-all duration-500 group">
              {/* Background Gradient */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-x-full transition-all duration-500 group-hover:translate-x-0"></span>

              {/* SVG with Hover Effect */}
              <span className="relative z-10">
                <svg
                  width="50"
                  height="30"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-500 group-hover:fill-white"
                >
                  <path d="M10 5L40 25L10 45L20 25L10 5Z" fill="black" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-4">| Useful Links</h3>
          <ul className="flex flex-col gap-[32px]">
            <li>How It Works</li>
            <li>Partners</li>
            <li>Testimonials</li>
            <li>Case Studies</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-4">| Navigation</h3>
          <ul className=" flex flex-col gap-8">
            <li>Company</li>
            <li>Careers</li>
            <li>Services</li>
            <li>Our Blog</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">| Contact Info</h3>
          <p className="flex items-center gap-2">
            <IoIosPin /> 58 A, East Madison Street, Baltimore, MD, USA 4508
          </p>
          <p className="flex items-center gap-2 mt-4">
            <IoIosCall /> 000 - 123 - 456789
          </p>
          <p className="flex items-center gap-2 mt-4">
            <IoIosMail /> info@example.com
          </p>
          <h3 className="font-semibold mt-6">| Follow Us</h3>
          <div className="flex gap-2 mt-2">
            <button className="bg-gray-500 p-2 rounded-lg">
              <FaFacebookF />
            </button>
            <button className="bg-gray-500 p-2 rounded-lg">
              <FaInstagram />
            </button>
            <button className="bg-gray-500 p-2 rounded-lg">
              <FaTwitter />
            </button>
            <button className="bg-gray-500 p-2 rounded-lg">
              <FaYoutube />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-gray-400">© 2024 Design by WedesignTech.</p>
        <div className="flex justify-center gap-3 mt-4">
          <img src="/visa.png" alt="Visa" className="h-6" />
          <img src="/paypal.png" alt="Paypal" className="h-6" />
          <img src="/skrill.png" alt="Skrill" className="h-6" />
          <img src="/amazon.png" alt="Amazon Pay" className="h-6" />
          <img src="/gpay.png" alt="Google Pay" className="h-6" />
        </div>
        <div className="mt-4 text-gray-400">
          <span className="mx-2">Terms And Conditions</span> |
          <span className="mx-2">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
