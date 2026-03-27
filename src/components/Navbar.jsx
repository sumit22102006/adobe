import { useState } from 'react'
import { Link } from 'react-router-dom'

const dropdownData = {
  'Creativity & Design': {
    shopFor: [
      { name: 'Individuals', desc: '50% off for the first 3 months' },
      { name: 'Photographers', desc: 'Lightroom, Photoshop and more' },
      { name: 'Business', desc: 'Solution for teams and enterprises' },
      { name: 'Students and Teachers', desc: 'Save over 70% on Creative Cloud' },
    ],
    featured: [
      { name: 'Photoshop', desc: 'Image editing and design' },
      { name: 'Premiere Pro', desc: 'Video editing and production' },
      { name: 'Illustrator', desc: 'Vector graphics and illustration' },
      { name: 'Adobe Express', desc: 'All-in-one design, video, photo and PDF app' },
      { name: 'Lightroom', desc: 'Photo editing and organisation' },
      { name: 'Adobe Firefly', desc: 'AI-powered content creation' },
      { name: 'Adobe Stock', desc: 'High-quality licensable assets' },
    ],
    explore: ['AI at Adobe', 'Photo', 'Design and Illustration', 'Video and animation', '3D', 'PDF'],
  },
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null)

  const navItems = [
    { label: 'Creativity & Design', key: 'creativity' },
    { label: 'PDF & E-signatures', key: 'pdf' },
    { label: 'Marketing & Commerce', key: 'marketing' },
    { label: 'Help & Support', key: 'help' },
  ]

  return (
    <header className="w-full h-16 flex items-center bg-white sticky top-0 left-0 z-50 px-4 shadow-sm animate-fade-in-down">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 w-auto md:w-[10%] min-w-[50px] md:min-w-[100px] mr-4 md:mr-0">
        <svg width="30" height="26" viewBox="0 0 30 26" fill="none">
          <path d="M11.5 0H0V26L11.5 0Z" fill="#FA0F00"/>
          <path d="M18.5 0H30V26L18.5 0Z" fill="#FA0F00"/>
          <path d="M15 9.5L21.5 26H17L14.8 20H9.5L15 9.5Z" fill="#FA0F00"/>
        </svg>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 h-full flex justify-end md:justify-between items-center">
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <div key={item.key} className="relative">
              <button
                className="flex items-center gap-1 text-adobe-gray hover:text-adobe-dark transition-colors duration-200 cursor-pointer font-medium"
                onClick={() => setOpenDropdown(openDropdown === item.key ? null : item.key)}
                onMouseEnter={() => setOpenDropdown(item.key)}
              >
                {item.label}
                <svg className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.key ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-5 mr-2 md:mr-6">
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 cursor-pointer">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button className="hidden md:block p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 cursor-pointer">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a8 8 0 0116 0v2a8 8 0 01-16 0V6z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h4m8 0h4M4 10h16M4 14h16M4 18h16" />
            </svg>
          </button>
          <Link
            to="/auth"
            className="border border-gray-400 rounded-full px-4 py-1 md:px-5 md:py-1 text-sm font-semibold text-adobe-gray hover:bg-gray-100 hover:border-gray-600 transition-all duration-200 whitespace-nowrap"
          >
            Sign up
          </Link>
        </div>
      </nav>

      {/* Dropdown Overlay */}
      {openDropdown === 'creativity' && (
        <div
          className="absolute top-16 left-0 w-full bg-white/95 backdrop-blur-lg shadow-2xl animate-fade-in-down z-50 border-t border-gray-100"
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <div className="max-w-7xl mx-auto flex gap-12 p-10">
            {/* Shop For */}
            <div className="flex-1">
              <h3 className="text-sm text-gray-400 font-semibold mb-4">Shop for</h3>
              <hr className="border-gray-200 mb-3" />
              {dropdownData['Creativity & Design'].shopFor.map((item) => (
                <div key={item.name} className="py-3 px-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group">
                  <div className="font-semibold text-sm text-adobe-gray group-hover:text-adobe-blue transition-colors">{item.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{item.desc}</div>
                </div>
              ))}
              <button className="mt-4 bg-adobe-blue text-white text-sm font-semibold py-2.5 px-6 rounded-full hover:bg-adobe-dark-blue transition-colors">
                View plans and pricing
              </button>
            </div>

            {/* Featured Products */}
            <div className="flex-1">
              <h3 className="text-sm text-gray-400 font-semibold mb-4">Featured products</h3>
              <hr className="border-gray-200 mb-3" />
              {dropdownData['Creativity & Design'].featured.map((item) => (
                <div key={item.name} className="py-2.5 px-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group">
                  <div className="font-semibold text-sm text-adobe-gray group-hover:text-adobe-blue transition-colors">{item.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{item.desc}</div>
                </div>
              ))}
            </div>

            {/* Explore */}
            <div className="flex-1">
              <h3 className="text-sm text-gray-400 font-semibold mb-4">Explore</h3>
              <hr className="border-gray-200 mb-3" />
              {dropdownData['Creativity & Design'].explore.map((item) => (
                <div key={item} className="py-2.5 px-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="font-semibold text-sm text-adobe-gray hover:text-adobe-blue transition-colors">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Simple dropdowns for other items */}
      {['pdf', 'marketing', 'help'].includes(openDropdown) && (
        <div
          className="absolute top-16 left-0 w-full bg-white/95 backdrop-blur-lg shadow-2xl animate-fade-in-down z-50 border-t border-gray-100"
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <div className="max-w-3xl mx-auto p-10 text-center">
            <p className="text-gray-400 text-lg font-medium capitalize">
              {openDropdown === 'pdf' ? 'PDF & E-signatures' : openDropdown === 'marketing' ? 'Marketing & Commerce' : 'Help & Support'} menu
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
