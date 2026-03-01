import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogPosts';
import { useNavigate } from 'react-router-dom';
import { cn } from "@/lib/utils";

const Blog = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReadMore = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <>
      <Helmet>
        <title>Blog - Fórmula Tech Lead</title>
        <meta name="description" content="Artigos, dicas e insights sobre liderança técnica, gestão de times, engenharia de software e carreira em tecnologia." />
      </Helmet>

      <div className="bg-slate-50 min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <BookOpen size={16} />
                <span>Central de Conhecimento</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Blog Tech Lead
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Insights profundos sobre liderança, arquitetura e gestão de pessoas para acelerar sua jornada.
              </p>
            </motion.div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {currentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full group"
              >
                {/* Image */}
                <div 
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => handleReadMore(post.slug)}
                >
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-700 uppercase tracking-wide">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 
                    className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors cursor-pointer"
                    onClick={() => handleReadMore(post.slug)}
                  >
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <Button 
                    variant="outline" 
                    className="w-full justify-between group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200"
                    onClick={() => handleReadMore(post.slug)}
                  >
                    Leia Mais
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="w-24"
              >
                Anterior
              </Button>
              
              <div className="flex gap-1">
                {[...Array(totalPages)].map((_, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    className={cn(
                      "w-10 h-10 p-0 border-transparent", 
                      currentPage === idx + 1 
                        ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-white border-blue-600" 
                        : "hover:bg-slate-100 text-slate-600"
                    )}
                    onClick={() => handlePageChange(idx + 1)}
                  >
                    {idx + 1}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="w-24"
              >
                Próximo
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;