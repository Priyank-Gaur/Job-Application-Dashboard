import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1D1E24] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/jobhuntly-logo-white.svg"
                alt="JobHuntly"
                width={140}
                height={32}
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          {/* About Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">About</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/companies" className="text-gray-400 hover:text-white transition-colors">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/advice" className="text-gray-400 hover:text-white transition-colors">
                  Advice
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white transition-colors">
                  Help Docs
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-gray-400 hover:text-white transition-colors">
                  Guide
                </Link>
              </li>
              <li>
                <Link href="/updates" className="text-gray-400 hover:text-white transition-colors">
                  Updates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Get job notifications</h3>
            <p className="text-gray-400 text-sm mb-4">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            2021 @ JobHuntly. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://facebook.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Image src="/social/facebook.svg" alt="Facebook" width={20} height={20} />
            </Link>
            <Link href="https://instagram.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Image src="/social/instagram.svg" alt="Instagram" width={20} height={20} />
            </Link>
            <Link href="https://dribbble.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Image src="/social/dribbble.svg" alt="Dribbble" width={20} height={20} />
            </Link>
            <Link href="https://linkedin.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Image src="/social/linkedin.svg" alt="LinkedIn" width={20} height={20} />
            </Link>
            <Link href="https://twitter.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Image src="/social/twitter.svg" alt="Twitter" width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 