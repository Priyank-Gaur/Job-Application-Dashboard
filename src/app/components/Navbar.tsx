import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-20">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/jobhuntly-logo.svg"
            alt="JobHuntly"
            width={140}
            height={32}
            priority
          />
        </Link>
        <div className="hidden md:flex ml-10 space-x-8">
          <Link href="/jobs" className="text-gray-600 hover:text-blue-600">
            Find Jobs
          </Link>
          <Link href="/companies" className="text-gray-600 hover:text-blue-600">
            Browse Companies
          </Link>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Link href="/login" className="text-blue-600 hover:text-blue-700">
          Login
        </Link>
        <Link
          href="/signup"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 