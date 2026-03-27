import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const footerLinks = {
  'For individuals & small business': ['Creative AI', 'Photography', 'Design and illustration', 'Video and animation', 'PDF', '3D', 'Elements Family', 'Stock image and video', 'View all products'],
  'For medium & large business': ['Personalisation at scale', 'Content supply chain', 'Unified customer experience', 'Creativity and production', 'B2B GTM orchestration', 'View all products'],
  'For organizations': ['Education', 'Non-profits', 'Government'],
  'Support': ['Help Center', 'Download and install', 'Adobe Community', 'Adobe Learn', 'Medium and large business support'],
  'Adobe': ['Log into your account', 'About', 'Careers', 'Events', 'Newsroom', 'Corporate responsibility', 'Investor Relations', 'Supply chain', 'Trust Center', 'Integrity', 'Adobe for All', 'Adobe Blog'],
}

const featuredProducts = [
  { name: 'Acrobat Reader', color: 'bg-red-600' },
  { name: 'Firefly', color: 'bg-purple-600' },
  { name: 'Adobe Express', color: 'bg-pink-500' },
  { name: 'Photoshop', color: 'bg-blue-500' },
]

export default function Footer() {
  const [ref, isVisible] = useScrollAnimation(0.05)

  return (
    <footer ref={ref} className={`w-full bg-adobe-light px-10 py-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
      {/* Link Columns */}
      <div className="flex justify-between gap-8 mb-12 flex-wrap">
        {Object.entries(footerLinks).map(([title, links]) => (
          <ul key={title} className="space-y-2.5">
            <p className="text-sm font-semibold text-adobe-dark mb-3">{title}</p>
            {links.map((link) => (
              <li key={link} className="text-sm text-gray-500 hover:text-adobe-dark-blue cursor-pointer transition-colors duration-200 list-none">
                {link}
              </li>
            ))}
          </ul>
        ))}
      </div>

      <hr className="border-gray-300 mb-6" />

      {/* Featured Products */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <span className="text-sm font-bold text-gray-500">Featured products:</span>
        {featuredProducts.map((product) => (
          <div key={product.name} className="flex items-center gap-2 group cursor-pointer">
            <div className={`w-7 h-7 ${product.color} rounded-md flex items-center justify-center transition-transform duration-200 group-hover:scale-110`}>
              <span className="text-white text-xs font-bold">{product.name[0]}</span>
            </div>
            <span className="text-sm text-gray-500 group-hover:text-adobe-dark transition-colors">{product.name}</span>
          </div>
        ))}
      </div>

      <hr className="border-gray-300 mb-6" />

      {/* Bottom */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-sm text-gray-500 cursor-pointer hover:text-adobe-dark transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
            <span>Choose your language</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-500 flex-wrap">
          <span>Copyright © 2025 All rights reserved.</span>
          <div className="flex gap-2 flex-wrap">
            {['Privacy', 'Terms of Use', 'Cookie Preferences', 'Do Not Sell My Personal Information', 'AdChoices'].map((link, i) => (
              <span key={link}>
                <a href="#" className="hover:text-adobe-dark-blue transition-colors">{link}</a>
                {i < 4 && <span className="ml-2">/</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
