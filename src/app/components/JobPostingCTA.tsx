import Image from 'next/image';
import Link from 'next/link';

const JobPostingCTA = () => {
  return (
    <section className="relative bg-blue-600 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#4F46E5,#7C3AED)] opacity-90"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-20 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side - Text content */}
        <div className="text-white max-w-xl z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Start posting
            <br />
            jobs today
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Start posting jobs for only $10.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Sign Up For Free
          </Link>
        </div>

        {/* Right side - Dashboard preview */}
        <div className="relative w-full lg:w-[640px] z-10">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <Image
              src="/dashboard-preview.png"
              alt="JobHuntly Dashboard Preview"
              width={640}
              height={480}
              className="w-full h-auto"
              priority
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500/20 rounded-lg"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-purple-500/20 rounded-lg"></div>
        </div>

        {/* Background decorative shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/10 transform skew-x-12"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-purple-500/10 transform -skew-x-12"></div>
      </div>
    </section>
  );
};

export default JobPostingCTA; 