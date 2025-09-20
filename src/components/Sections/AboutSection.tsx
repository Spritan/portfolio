import { motion } from 'framer-motion';
import { Section } from '@/components/Layout/Section';
import { personalInfo } from '@/data/mockData';
import { Github, Linkedin, BookOpen, Mail, MapPin } from 'lucide-react';

export function AboutSection() {
  const socialLinks = [
    { icon: Github, url: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, url: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: BookOpen, url: personalInfo.medium, label: 'Medium' },
  ];

  return (
    <Section id="about" title="" className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Photo */}
        <motion.div 
          className="mb-12"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
        >
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-white">
            <img 
              src="/1661620169947.jpeg" 
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.h1 
          className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {personalInfo.name}
        </motion.h1>
        <motion.h2 
          className="text-2xl sm:text-3xl text-gray-700 mb-6 font-medium"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {personalInfo.title}
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 mb-12 italic max-w-3xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Location and Email */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 mb-12 text-gray-600"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.div 
            className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MapPin className="w-5 h-5 text-blue-600" />
            <span className="font-medium">{personalInfo.location}</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Mail className="w-5 h-5 text-blue-600" />
            <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 transition-colors font-medium">
              {personalInfo.email}
            </a>
          </motion.div>
        </motion.div>

        {/* Bio */}
        <motion.p 
          className="text-xl text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {personalInfo.bio}
        </motion.p>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center space-x-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {socialLinks.map(({ icon: Icon, url, label }, index) => (
            url && (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300 group shadow-sm hover:shadow-md"
                aria-label={label}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: 1.0 + index * 0.1, 
                  type: "spring", 
                  stiffness: 200 
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  boxShadow: "0 10px 25px -5px rgb(59 130 246 / 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
              </motion.a>
            )
          ))}
        </motion.div>
      </div>
    </Section>
  );
}