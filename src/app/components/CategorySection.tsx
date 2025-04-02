import Link from 'next/link';
import { 
  Pencil, 
  LineChart, 
  Megaphone, 
  Wallet, 
  Monitor, 
  Code, 
  Briefcase, 
  Users 
} from 'lucide-react';

const categories = [
  { icon: Pencil, name: 'Design', jobs: 235 },
  { icon: LineChart, name: 'Sales', jobs: 756 },
  { icon: Megaphone, name: 'Marketing', jobs: 140 },
  { icon: Wallet, name: 'Finance', jobs: 325 },
  { icon: Monitor, name: 'Technology', jobs: 436 },
  { icon: Code, name: 'Engineering', jobs: 542 },
  { icon: Briefcase, name: 'Business', jobs: 211 },
  { icon: Users, name: 'Human Resource', jobs: 346 },
];

const CategorySection = () => {
  return (
    <section className="py-16 px-6 md:px-20">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Explore by <span className="text-blue-500">category</span>
        </h2>
        <Link 
          href="/jobs" 
          className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
        >
          Show all jobs
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/jobs/category/${category.name.toLowerCase()}`}
            className="p-6 bg-white rounded-lg border border-gray-100 hover:border-blue-500 transition-colors group"
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
              category.name === 'Marketing' ? 'bg-gray-50 group-hover:bg-blue-50bg-blue-600' : 'bg-gray-50 group-hover:bg-blue-50'
            }`}>
              <category.icon 
                className={`w-6 h-6 ${
                  category.name === 'Marketing' ? 'text-blue-600' : 'text-blue-600'
                }`} 
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {category.name}
            </h3>
            <p className="text-gray-500 flex items-center gap-2">
              {category.jobs} jobs available
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection; 