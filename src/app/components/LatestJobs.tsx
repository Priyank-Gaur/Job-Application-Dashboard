import Image from 'next/image';
import Link from 'next/link';

type TagType = 'Marketing' | 'Design';

interface LatestJob {
  id: number;
  title: string;
  company: string;
  location: string;
  logo: string;
  tags: TagType[];
}

const latestJobs: LatestJob[] = [
  {
    id: 1,
    title: 'Social Media Assistant',
    company: 'Nomad',
    location: 'Paris, France',
    logo: '/company-logos/nomad.png',
    tags: ['Marketing', 'Design']
  },
  {
    id: 2,
    title: 'Social Media Assistant',
    company: 'Netlify',
    location: 'Paris, France',
    logo: '/company-logos/netlify.png',
    tags: ['Marketing', 'Design']
  },
  {
    id: 3,
    title: 'Brand Designer',
    company: 'Dropbox',
    location: 'San Fransisco, USA',
    logo: '/company-logos/dropbox.png',
    tags: ['Marketing', 'Design']
  },
  {
    id: 4,
    title: 'Brand Designer',
    company: 'Maze',
    location: 'San Fransisco, USA',
    logo: '/company-logos/maze.png',
    tags: ['Marketing', 'Design']
  },
  {
    id: 5,
    title: 'Interactive Developer',
    company: 'Terraform',
    location: 'Hamburg, Germany',
    logo: '/company-logos/terraform.png',
    tags: ['Marketing', 'Design']
  },
  {
    id: 6,
    title: 'Interactive Developer',
    company: 'Udacity',
    location: 'Hamburg, Germany',
    logo: '/company-logos/udacity.png',
    tags: ['Marketing', 'Design']
  },
  {
    id: 7,
    title: 'HR Manager',
    company: 'Packer',
    location: 'Lucern, Switzerland',
    logo: '/company-logos/packer.png',
    tags: ['Marketing', 'Design']
  },
  {
    id: 8,
    title: 'HR Manager',
    company: 'Webflow',
    location: 'Lucern, Switzerland',
    logo: '/company-logos/webflow.png',
    tags: ['Marketing', 'Design']
  }
];

const tagStyles = {
  'Full-Time': 'bg-green-50 text-green-600',
  Marketing: 'bg-orange-50 text-orange-600 border border-orange-100',
  Design: 'bg-blue-50 text-blue-600 border border-blue-100'
};

const LatestJobs = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Latest <span className="text-blue-500">jobs open</span>
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

        {/* Job List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestJobs.map((job) => (
            <Link
              key={job.id}
              href={`/jobs/${job.id}`}
              className="bg-white rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src={job.logo}
                  alt={`${job.company} logo`}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <span>{job.company}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm ${tagStyles['Full-Time']}`}>
                    Full-Time
                  </span>
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-sm ${tagStyles[tag]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestJobs; 