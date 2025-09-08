'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SocialMediaButton from './util/social-media-button';
import { IoArrowUp } from 'react-icons/io5';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-background-400 border-t border-border-600">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary-text-500">
              Mario Nikolov
            </h3>
            <p className="text-secondary-text-500 text-sm leading-relaxed">
              Junior Software Engineer passionate about creating innovative
              solutions and building scalable applications.
            </p>
            <div className="flex gap-4">
              <SocialMediaButton
                icon="/icons/github.svg"
                href="https://github.com/marionikolov17"
              />
              <SocialMediaButton
                icon="/icons/linkedin.svg"
                href="https://www.linkedin.com/in/marionikolovdev"
              />
              <SocialMediaButton
                icon="/icons/instagram.svg"
                href="https://www.instagram.com/marionikolov17"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-text-500">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#hero"
                className="text-secondary-text-500 hover:text-primary-text-500 transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-secondary-text-500 hover:text-primary-text-500 transition-colors text-sm"
              >
                About
              </Link>
              <Link
                href="#experience"
                className="text-secondary-text-500 hover:text-primary-text-500 transition-colors text-sm"
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="text-secondary-text-500 hover:text-primary-text-500 transition-colors text-sm"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-secondary-text-500 hover:text-primary-text-500 transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-text-500">
              Get In Touch
            </h4>
            <div className="space-y-2">
              <p className="text-secondary-text-500 text-sm">
                Email:{' '}
                <span className="text-primary-text-500">
                  marionikolovdev@gmail.com
                </span>
              </p>
              <p className="text-secondary-text-500 text-sm">
                Location:{' '}
                <span className="text-primary-text-500">Bulgaria</span>
              </p>
              <p className="text-secondary-text-500 text-sm">
                Status:{' '}
                <span className="text-green-400">
                  Available for opportunities
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-text-600 text-sm">
            © 2025 Mario Nikolov. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-background-300 hover:bg-background-200 border border-border-500 rounded-lg transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-secondary-text-500 text-sm group-hover:text-primary-text-500">
              Back to top
            </span>
            <IoArrowUp className="text-secondary-text-500 group-hover:text-primary-text-500" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
