import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navigation/Navbar';
import { AboutSection } from '@/components/Sections/AboutSection';
import { ExperienceSection } from '@/components/Sections/ExperienceSection';
import { ProjectsSection } from '@/components/Sections/ProjectsSection';
import { PublicationsSection } from '@/components/Sections/PublicationsSection';
import { AchievementsSection } from '@/components/Sections/AchievementsSection';
import { BlogSection } from '@/components/Sections/BlogSection';
import { ContactSection } from '@/components/Sections/ContactSection';
import { Footer } from '@/components/Layout/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      
      <main className="relative">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <AboutSection />
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ExperienceSection />
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ProjectsSection />
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <PublicationsSection />
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <AchievementsSection />
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <BlogSection />
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <ContactSection />
        </motion.div>
      </main>
      
      <Footer />
      <Toaster />
    </motion.div>
  );
}

export default App;