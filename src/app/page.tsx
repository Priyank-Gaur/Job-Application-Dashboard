import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CompanyLogos from './components/CompanyLogos';
import CategorySection from './components/CategorySection';
import JobPostingCTA from './components/JobPostingCTA';
import FeaturedJobs from './components/FeaturedJobs';
import LatestJobs from './components/LatestJobs';
import Footer from './components/Footer';


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <CompanyLogos />
      <CategorySection />
      <JobPostingCTA />
      <FeaturedJobs />
      <LatestJobs />
      <Footer />
    </main>
  );
}
