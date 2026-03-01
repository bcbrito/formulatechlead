import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Share2 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogPosts';
import { useToast } from '@/components/ui/use-toast';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [post, setPost] = useState(null);
  
  // Progress Bar Hooks
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Find post by slug
    const foundPost = blogPosts.find(p => p.slug === slug);
    if (foundPost) {
      setPost(foundPost);
    } else {
      // Redirect to blog index if not found
      navigate('/blog');
      toast({
        title: "Artigo não encontrado",
        description: "O artigo que você procurou não existe ou foi removido.",
        variant: "destructive"
      });
    }
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, [slug, navigate, toast]);

  if (!post) return null;

  // Social Share Handlers
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  const handleShare = (platform) => {
    let shareUrl = '';
    const text = `Confira este artigo incrível: ${post.title}`;
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(text)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + currentUrl)}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
    toast({
      title: "Compartilhado!",
      description: `Link aberto para compartilhar no ${platform}.`
    });
  };

  return (
    <>
      <Helmet>
        <title>{post.title} - Fórmula Tech Lead</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 origin-left z-[60]"
        style={{ scaleX }}
      />

      <div className="bg-white min-h-screen pb-20">
        {/* Header / Hero */}
        <div className="bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60"></div>
          
          <div className="container mx-auto max-w-4xl px-4 py-24 relative z-10">
            <Link to="/blog" className="inline-flex items-center text-blue-300 hover:text-blue-100 mb-8 transition-colors group">
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Voltar para o Blog
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-300 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime} de leitura</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold text-white">
                  FT
                </div>
                <span>Por Fórmula Tech Lead</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="container mx-auto max-w-4xl px-4 -mt-10 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            
            {/* Share Buttons (Mobile Top) */}
            <div className="flex md:hidden justify-end gap-2 mb-6">
               <Button size="sm" variant="outline" onClick={() => handleShare('whatsapp')} className="text-green-600 border-green-200 bg-green-50">
                 <Share2 size={16} />
               </Button>
            </div>

            <div className="grid md:grid-cols-[1fr_auto] gap-12">
              {/* Article Content */}
              <article 
                className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-blue-600 hover:prose-a:text-blue-800"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Sidebar / Share (Desktop) */}
              <aside className="hidden md:flex flex-col gap-4 sticky top-24 h-fit">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-2">
                  Compartilhar
                </p>
                
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full w-12 h-12 border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all"
                  onClick={() => handleShare('facebook')}
                  title="Compartilhar no Facebook"
                >
                  <Facebook size={20} />
                </Button>

                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full w-12 h-12 border-slate-200 text-slate-600 hover:text-sky-500 hover:border-sky-200 hover:bg-sky-50 transition-all"
                  onClick={() => handleShare('twitter')}
                  title="Compartilhar no Twitter/X"
                >
                  <Twitter size={20} />
                </Button>

                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full w-12 h-12 border-slate-200 text-slate-600 hover:text-blue-700 hover:border-blue-200 hover:bg-blue-50 transition-all"
                  onClick={() => handleShare('linkedin')}
                  title="Compartilhar no LinkedIn"
                >
                  <Linkedin size={20} />
                </Button>

                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full w-12 h-12 border-slate-200 text-slate-600 hover:text-green-600 hover:border-green-200 hover:bg-green-50 transition-all"
                  onClick={() => handleShare('whatsapp')}
                  title="Compartilhar no WhatsApp"
                >
                  <Share2 size={20} /> {/* Using Share2 as generic/WhatsApp indicator */}
                </Button>

                <div className="w-px h-12 bg-slate-200 mx-auto my-2"></div>
                
                <p className="text-[10px] text-slate-400 text-center font-medium">
                  {post.readTime}
                </p>
              </aside>
            </div>

            {/* Mobile Share Buttons (Bottom) */}
            <div className="md:hidden mt-12 pt-8 border-t border-slate-100">
              <p className="text-sm font-bold text-slate-900 mb-4 text-center">Gostou? Compartilhe!</p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => handleShare('facebook')}>
                  <Facebook size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => handleShare('twitter')}>
                  <Twitter size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => handleShare('linkedin')}>
                  <Linkedin size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => handleShare('whatsapp')}>
                  <Share2 size={18} />
                </Button>
              </div>
            </div>

          </div>
        </div>
        
        {/* Navigation Footer */}
        <div className="container mx-auto max-w-4xl px-4 mt-12 flex justify-center">
            <Button 
                onClick={() => navigate('/blog')}
                variant="ghost" 
                className="text-slate-500 hover:text-slate-900"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para todos os artigos
            </Button>
        </div>
      </div>
    </>
  );
};

export default BlogPost;