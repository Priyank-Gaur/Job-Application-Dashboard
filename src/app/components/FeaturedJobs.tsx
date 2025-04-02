import Image from 'next/image';
import Link from 'next/link';

type TagType = 'Marketing' | 'Design' | 'Business' | 'Technology';

interface JobListing {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  logo: string;
  tags: TagType[];
}

const jobListings: JobListing[] = [
  {
    id: 1,
    title: 'Email Marketing',
    company: 'Revolut',
    location: 'Madrid, Spain',
    type: 'Full Time',
    description: 'Revolut is looking for Email Marketing to help team ma...',
    logo: '/company-logos/revolut.png',
    tags: ['Marketing', 'Design']
  },
  {
    id: 2,
    title: 'Brand Designer',
    company: 'Dropbox',
    location: 'San Fransisco, US',
    type: 'Full Time',
    description: 'Dropbox is looking for Brand Designer to help the team t...',
    logo: '/company-logos/dropbox.png',
    tags: ['Design', 'Business']
  },
  {
    id: 3,
    title: 'Email Marketing',
    company: 'Pitch',
    location: 'Berlin, Germany',
    type: 'Full Time',
    description: 'Pitch is looking for Customer Manager to join marketing t...',
    logo: '/company-logos/pitch.png',
    tags: ['Marketing']
  },
  {
    id: 4,
    title: 'Visual Designer',
    company: 'Blinklist',
    location: 'Granada, Spain',
    type: 'Full Time',
    description: 'Blinklist is looking for Visual Designer to help team desi...',
    logo: '/company-logos/blinklist.png',
    tags: ['Design']
  },
  {
    id: 5,
    title: 'Product Designer',
    company: 'ClassPass',
    location: 'Manchester, UK',
    type: 'Full Time',
    description: 'ClassPass is looking for Product Designer to help us...',
    logo: '/company-logos/classpass.png',
    tags: ['Marketing', 'Design']
  },
  {
    id: 6,
    title: 'Lead Designer',
    company: 'Canva',
    location: 'Ontario, Canada',
    type: 'Full Time',
    description: 'Canva is looking for Lead Engineer to help develop n...',
    logo: '/company-logos/canva.png',
    tags: ['Design', 'Business']
  },
  {
    id: 7,
    title: 'Brand Strategist',
    company: 'GoDaddy',
    location: 'Marseille, France',
    type: 'Full Time',
    description: 'GoDaddy is looking for Brand Strategist to join the team...',
    logo: '/company-logos/godaddy.png',
    tags: ['Marketing']
  },
  {
    id: 8,
    title: 'Data Analyst',
    company: 'Twitter',
    location: 'San Diego, US',
    type: 'Full Time',
    description: 'Twitter is looking for Data Analyst to help team desi...',
    logo: '/company-logos/twitter.png',
    tags: ['Technology']
  }
];

const tagColors: Record<TagType, string> = {
  Marketing: 'bg-orange-50 text-orange-600',
  Design: 'bg-green-50 text-green-600',
  Business: 'bg-blue-50 text-blue-600',
  Technology: 'bg-red-50 text-red-600'
};

const FeaturedJobs = () => {
  return (
    <section className="py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured <span className="text-blue-500">jobs</span>
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

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobListings.map((job) => (
            <Link
              key={job.id}
              href={`/jobs/${job.id}`}
              className="bg-white rounded-lg border border-gray-100 p-6 hover:border-blue-500 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 relative">
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <span className="text-sm text-blue-600 border border-blue-100 rounded-full px-3 py-1 bg-blue-50">
                  {job.type}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {job.title}
              </h3>
              
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <span>{job.company}</span>
                <span>•</span>
                <span>{job.location}</span>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full text-sm ${tagColors[tag]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs; 