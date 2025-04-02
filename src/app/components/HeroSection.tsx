import Image from 'next/image';
import { MapPin, Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-20 py-10">
      <div className="flex-1 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Discover <br />
          more than <br />
          <span className="text-blue-500">5000+ Jobs</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Great platform for the job seeker that searching for
          new career heights and passionate about startups.
        </p>
        
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <form className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Florence, Italy"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700"
            >
              Search my job
            </button>
          </form>
        </div>

        <div className="mt-6">
          <p className="text-gray-600 mb-2">Popular: </p>
          <div className="flex flex-wrap gap-2">
            {['UI Designer', 'UX Researcher', 'Android', 'Admin'].map((tag) => (
              <span
                key={tag}
                className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 mt-10 lg:mt-0">
        <div className="relative">
          <Image
            src="/hero-image.png"
            alt="Job seeker"
            width={600}
            height={600}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 