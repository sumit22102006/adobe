import { useState } from 'react'
import { Link } from 'react-router-dom'

const sidebarItems = [
  { icon: '🏠', label: 'Home', active: true },
  { icon: '▦', label: 'Apps' },
  { icon: '📁', label: 'Files' },
]

const tabs = [
  { icon: '✨', label: 'Featured', active: true },
  { icon: '✨', label: 'Generative AI' },
  { icon: '📷', label: 'Imaging' },
  { icon: '▶', label: 'Video' },
  { icon: '✒', label: 'Design' },
  { icon: '📄', label: 'Document' },
  { icon: '🧊', label: '3D' },
]

const promoCards = [
  {
    icon: 'CC',
    iconBg: 'bg-gradient-to-br from-red-500 to-fuchsia-500',
    name: 'Creative Cloud Pro',
    desc: 'Create in new ways. Includes Firefly, Express, Photoshop, Lightroom, and more.',
    hasLink: false,
  },
  {
    icon: 'Ps',
    iconBg: 'bg-[#31a8ff]',
    name: 'Photoshop',
    desc: 'Create beautiful graphics, photos, and art on desktop, web, iPhone, and iPad. Comes with Adobe Fresco for drawing and painting.',
    hasLink: false,
  },
  {
    icon: 'Ac',
    iconBg: 'bg-red-600',
    name: 'Adobe Acrobat',
    desc: 'Create, edit, sign, and manage your PDFs — quickly, easily, anywhere.',
    hasLink: true,
    linkText: 'View Acrobat pricing',
  },
]

const actionCards = [
  { title: 'Generate a new image', subtitle: 'to add to your project', app: 'Adobe Express', appIcon: 'Ae', bgColor: 'bg-blue-50', image: 'https://odin.adobe.com/adobe/dynamicmedia/deliver/dm-aid--716d3cda-e806-4f7b-b0d0-345f0df83a76/generate_image_express_v2.jpg' },
  { title: 'Summarize key points', subtitle: 'in your document with AI Assistant', app: 'Acrobat', appIcon: 'Ac', bgColor: 'bg-red-50', image: 'https://odin.adobe.com/adobe/dynamicmedia/deliver/dm-aid--0574f2ec-225c-4d6a-a1fe-edb5eeec6185/ai_assistant_summary.jpg' },
  { title: 'Create an animated character', subtitle: 'to bring your voice recording to life', app: 'Adobe Express', appIcon: 'Ae', bgColor: 'bg-indigo-50', image: 'https://odin.adobe.com/adobe/dynamicmedia/deliver/dm-aid--13809e5e-a71a-47ba-aff7-1abd779342ef/audio_to_animation_v2.jpg' },
  { title: 'Remove excess content', subtitle: 'with generative fill', app: 'Adobe Firefly', appIcon: 'Ff', bgColor: 'bg-gray-900', image: 'https://odin.adobe.com/adobe/dynamicmedia/deliver/dm-aid--33b7f350-d361-42a4-b127-8b4390a42253/gen_fill_firefly_v2.jpg' },
  { title: 'Generate a QR code', subtitle: 'for quick outreach', app: 'Adobe Express', appIcon: 'Ae', bgColor: 'bg-purple-50', image: 'https://odin.adobe.com/adobe/dynamicmedia/deliver/dm-aid--daf37848-e0e8-4f7e-89d8-271a8b84dfe4/gen_qr_code_v2.jpg' },
  { title: 'Convert to PDF', subtitle: 'from Microsoft Office or image file formats', app: 'Acrobat', appIcon: 'Ac', bgColor: 'bg-orange-50', image: 'https://odin.adobe.com/adobe/dynamicmedia/deliver/dm-aid--1010559c-0d22-4d42-b415-30b693890f2c/convert_to_pdf_acrobat.jpg' },
  { title: 'Remove the background', subtitle: 'from an image', app: 'Adobe Express', appIcon: 'Ae', bgColor: 'bg-emerald-50', image: 'https://odin.adobe.com/adobe/dynamicmedia/deliver/dm-aid--3ed95248-f407-4cbb-a682-3bc7d093d2ef/remove_background_express.jpg' },
  { title: 'Export a video to MP4 format', subtitle: '', app: 'Adobe Express', appIcon: 'Ae', bgColor: 'bg-sky-50', image: 'https://odin.adobe.com/adobe/dynamicmedia/deliver/dm-aid--7383db6e-a06a-4c57-8e46-f1267f9d9078/convert_to_mp4_v2.jpg' },
]

const footerCols = [
  { title: 'Shop for', links: ['Creative Cloud', 'Photoshop', 'Photography', 'Adobe Stock', 'Acrobat', 'View plans and pricing'] },
  { title: 'Support', links: ['Download and install', 'Help Center'] },
  { title: 'Adobe Account', links: ['Manage your account', 'Subscribe to Adobe Status'] },
  { title: 'Adobe', links: ['About', 'Careers', 'Newsroom', 'Investor Relations'] },
]

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('Featured')

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-50 animate-fade-in">
      {/* Header */}
      <header className="h-[60px] bg-white flex justify-between items-center px-5 border-b border-adobe-border flex-shrink-0 z-50">
        <div className="flex items-center gap-5">
          <Link to="/" className="text-adobe-red font-bold text-lg flex items-center gap-2 cursor-pointer group">
            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
              <svg width="24" height="21" viewBox="0 0 30 26" fill="none">
                <path d="M11.5 0H0V26L11.5 0Z" fill="#FA0F00"/>
                <path d="M18.5 0H30V26L18.5 0Z" fill="#FA0F00"/>
                <path d="M15 9.5L21.5 26H17L14.8 20H9.5L15 9.5Z" fill="#FA0F00"/>
              </svg>
            </span>
            Adobe
          </Link>
          <nav className="flex gap-5">
            {['Creativity & Design', 'PDF & E-signatures', 'Marketing & Commerce', 'Learn & Support'].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-gray-700 hover:text-adobe-dark transition-colors no-underline">
                {item} <span className="text-gray-400 ml-1 text-xs">⌄</span>
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center w-[250px] border border-transparent focus-within:border-adobe-link focus-within:bg-white transition-all">
            <span className="text-gray-400 text-sm mr-2">🔍</span>
            <input type="text" placeholder="Search Adobe" className="bg-transparent border-none outline-none text-sm w-full" />
          </div>
          <div className="flex items-center gap-4">
            <span className="cursor-pointer text-gray-500 text-lg hover:text-adobe-dark transition-colors">?</span>
            <span className="cursor-pointer text-gray-500 text-lg hover:text-adobe-dark transition-colors">▦</span>
            <div className="w-8 h-8 bg-[#003366] rounded-full border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>
      </header>

      {/* App Container */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-[60px] bg-white border-r border-adobe-border flex flex-col items-center pt-4 gap-2 flex-shrink-0">
          {sidebarItems.map((item) => (
            <div
              key={item.label}
              className={`w-[50px] h-[50px] flex flex-col items-center justify-center rounded-lg cursor-pointer text-[10px] transition-all duration-200 ${
                item.active ? 'bg-adobe-dark text-white' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              <span className="text-xl mb-0.5">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
          <div className="h-5 w-4/5 border-b border-gray-200 mb-2" />
          <div className="w-[50px] h-[50px] flex flex-col items-center justify-center rounded-lg cursor-pointer text-[10px] text-gray-500 hover:bg-gray-100 transition-colors">
            <span className="text-xl mb-0.5">＋</span>
            <span>Create</span>
          </div>
        </aside>

        {/* Main Canvas */}
        <main className="flex-1 overflow-y-auto bg-white px-8 py-8">
          {/* Hero Section */}
          <section className="relative rounded-2xl p-10 mb-10 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/03/09/18/98/240_F_309189896_oQsCps7fYUMx9yp8tVf9I9esfJW6rzQV.jpg')" }}
            />
            <div className="relative z-10">
              <h1 className="text-3xl font-bold text-adobe-dark text-center mb-6 animate-fade-in-down">Create something new</h1>

              {/* AI Generate Bar */}
              <div className="bg-white rounded-full p-1.5 flex items-center shadow-lg max-w-[700px] mx-auto mb-10 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center px-4 border-r border-gray-100 gap-2 font-semibold text-sm whitespace-nowrap">
                  <span>🖼️</span>
                  <span>Image</span>
                  <span className="text-gray-400 text-xs">⌄</span>
                </div>
                <input
                  type="text"
                  placeholder="Describe the image you want to generate"
                  className="flex-1 border-none outline-none px-4 py-2.5 text-sm"
                />
                <button className="bg-adobe-link text-white rounded-full px-6 py-2.5 font-semibold text-sm hover:bg-[#0054b6] transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/30 cursor-pointer">
                  ✨ Generate
                </button>
              </div>

              {/* Promo Cards */}
              <div className="flex gap-5 justify-center">
                {promoCards.map((card, i) => (
                  <div
                    key={card.name}
                    className={`bg-white rounded-xl p-5 shadow-md flex-1 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up animate-delay-${(i + 1) * 100}`}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-8 h-8 ${card.iconBg} rounded-md flex items-center justify-center text-white font-bold text-sm`}>
                          {card.icon}
                        </div>
                        <h3 className="font-bold text-sm">{card.name}</h3>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed mb-3">{card.desc}</p>
                      {card.hasLink && (
                        <a href="#" className="text-xs text-adobe-link hover:underline block mb-3">{card.linkText}</a>
                      )}
                    </div>
                    <div className="flex gap-2 justify-end">
                      <button className="px-4 py-1.5 rounded-full text-xs font-semibold border border-gray-300 text-adobe-dark hover:bg-gray-50 transition-colors cursor-pointer">
                        Free trial
                      </button>
                      <button className="px-4 py-1.5 rounded-full text-xs font-semibold bg-adobe-dark text-white hover:bg-black transition-colors cursor-pointer">
                        Buy
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Suggestion Tabs */}
          <div className="flex gap-3 mb-6 overflow-x-auto pb-1">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeTab === tab.label ? 'bg-gray-200 text-adobe-dark' : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Action Cards Grid */}
          <div className="grid grid-cols-4 gap-5 mb-16">
            {actionCards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 cursor-pointer group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="h-[180px] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                </div>
                <div className="p-3 flex flex-col flex-1 justify-between">
                  <h4 className="text-sm font-bold text-gray-800 leading-snug">
                    {card.title}{' '}
                    {card.subtitle && <span className="font-normal text-gray-500">{card.subtitle}</span>}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-semibold mt-2">
                    <span className="w-4 h-4 bg-adobe-dark text-white rounded-sm flex items-center justify-center text-[8px] font-bold">
                      {card.appIcon}
                    </span>
                    {card.app}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className="border-t border-adobe-border pt-10 flex gap-20 pb-10">
            {footerCols.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <h5 className="text-sm font-semibold text-adobe-dark mb-1">{col.title}</h5>
                {col.links.map((link) => (
                  <a key={link} href="#" className="text-xs text-gray-500 no-underline hover:text-adobe-link transition-colors">
                    {link}
                  </a>
                ))}
                {col.title === 'Shop for' && (
                  <div className="mt-5 font-bold text-adobe-red flex items-center gap-1">
                    <svg width="16" height="14" viewBox="0 0 30 26" fill="none">
                      <path d="M11.5 0H0V26L11.5 0Z" fill="#FA0F00"/>
                      <path d="M18.5 0H30V26L18.5 0Z" fill="#FA0F00"/>
                      <path d="M15 9.5L21.5 26H17L14.8 20H9.5L15 9.5Z" fill="#FA0F00"/>
                    </svg>
                    Adobe
                  </div>
                )}
              </div>
            ))}
          </footer>
        </main>

        {/* Right Sidebar */}
        <aside className="w-[280px] bg-white border-l border-adobe-border p-5 flex flex-col flex-shrink-0">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-sm font-semibold text-adobe-dark">Recent files</h3>
            <div className="flex gap-4 text-gray-500 cursor-pointer">
              <span className="hover:text-adobe-dark transition-colors">＋</span>
              <span className="hover:text-adobe-dark transition-colors">📁</span>
            </div>
          </div>
          <div className="flex flex-col items-center text-center mt-16">
            <span className="text-4xl text-gray-300 mb-4">📄</span>
            <h4 className="text-sm font-semibold mb-2">No recent files</h4>
            <p className="text-xs text-gray-500 leading-relaxed mb-5 max-w-[200px]">
              Files you save or upload to Adobe cloud storage will appear here.
            </p>
            <button className="border border-adobe-dark rounded-full px-5 py-2 text-sm font-semibold hover:bg-adobe-dark hover:text-white transition-all duration-300 cursor-pointer">
              ☁ Upload
            </button>
          </div>
        </aside>
      </div>

      {/* Chat Bubble */}
      <div className="fixed bottom-8 right-8 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-2xl cursor-pointer border border-gray-100 z-50 hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-bounce-in">
        💬
      </div>
    </div>
  )
}
