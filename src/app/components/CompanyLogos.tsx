import Image from 'next/image';

const CompanyLogos = () => {
  const companies = [
    { name: 'Vodafone', logo: '/company-logos/vodafone.svg' },
    { name: 'Intel', logo: '/company-logos/intel.svg' },
    { name: 'Tesla', logo: '/company-logos/tesla.svg' },
    { name: 'AMD', logo: '/company-logos/amd.svg' },
    { name: 'Talkit', logo: '/company-logos/talkit.svg' },
  ];

  return (
    <section className="py-12 px-6 md:px-20">
      <h2 className="text-xl text-gray-500 text-center mb-10">
        Companies we helped grow
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {companies.map((company) => (
          <div
            key={company.name}
            className="w-32 h-12 relative grayscale hover:grayscale-0 transition-all duration-300"
          >
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyLogos; 