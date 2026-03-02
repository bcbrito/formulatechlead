import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const LinkedInNewsletter = () => {
  return (
    <motion.a
      href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7419361239694241793"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
    >
      <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
      <span>Assinar Newsletter no LinkedIn</span>
    </motion.a>
  );
};

export default LinkedInNewsletter;
