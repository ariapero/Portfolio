'use client'

import { useEffect, useRef } from "react";
import Link from 'next/link'
import { ArrowRight, Instagram, Linkedin, GraduationCap, Megaphone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = ev;
      heroRef.current.style.setProperty("--x", `${clientX}px`);
      heroRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .hero {
          height: 100vh;
          width: 100%;
          background-color: #163734;
          background-image: radial-gradient(
            circle farthest-side at var(--x, 100px) var(--y, 100px),
            #238177 0%,
            transparent 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .title {
          font-size: 80px;
          text-transform: uppercase;
          transform: rotate(10deg) translateX(calc(var(--x) / 10, 0px));
        }
      `}</style>
      <div ref={heroRef} className="hero">
        <div className="min-h-screen w-full relative overflow-hidden">
          {/* Content */}
          <motion.main 
            className="relative z-10 min-h-screen flex flex-col justify-center px-8 sm:px-12 lg:px-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-xl">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 font-reenie"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Ari Peró
              </motion.h1>
              
              <motion.div 
                className="space-y-2 text-lg sm:text-xl text-white/90 mb-12 font-inter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <p>MIT Urban Science, CS, & Music</p>
                <p>B.S. Candidate 2025</p>
              </motion.div>

              <motion.nav 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link 
                  href="/bio" 
                  className="flex items-center gap-2 text-white text-lg sm:text-xl hover:gap-4 transition-all duration-300 font-inter"
                >
                  Bio <ArrowRight className="h-5 w-5" />
                </Link>
                <Link 
                  href="/work" 
                  className="flex items-center gap-2 text-white text-lg sm:text-xl hover:gap-4 transition-all duration-300 font-inter"
                >
                  Work <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.nav>
            </div>
          </motion.main>

          {/* Social Media Icons */}
          <motion.div 
            className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 z-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a 
              href="https://www.linkedin.com/in/ari-pero" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#238177] transition-colors duration-300"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="https://www.instagram.com/ariapero" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#238177] transition-colors duration-300"
            >
              <Instagram size={28} />
            </a>
            <a 
              href="https://www.instagram.com/transindigena" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#238177] transition-colors duration-300"
            >
              <Megaphone size={28} />
            </a>
            <a 
              href="https://dusp.mit.edu/people/ari-pero" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#238177] transition-colors duration-300"
            >
              <GraduationCap size={28} />
            </a>
          </motion.div>

        </div>
      </div>
    </>
  );
}