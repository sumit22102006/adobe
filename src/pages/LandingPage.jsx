import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Link } from 'react-router-dom'

const categoryTabs = ['Everyone', 'Students', 'Photographers', 'Business', 'Adobe Stock', 'Special Offers']

const features = [
  {
    id: 1,
    header: 'ADOBE FIREFLY',
    title: 'The ultimate creative AI solution',
    text: 'Create images, video, audio and vector graphics in the Firefly app.',
    btn: 'Learn more',
    bg: 'bg-black',
    textColor: 'text-white',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=80',
    gradient: '',
  },
  {
    id: 2,
    title: 'Meet the new Acrobat Studio',
    text: 'Insights, content creation and trusted PDF tools in one place',
    btn: 'Learn more',
    bg: 'bg-gray-200',
    textColor: 'text-adobe-dark',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=80',
    gradient: '',
  },
  {
    id: 3,
    title: 'Creative Cloud',
    text: '50% off for the first 3 months on Creative Cloud Pro annual plan',
    btn: 'Student pricing',
    bg: '',
    textColor: 'text-white',
    gradient: 'bg-gradient-to-br from-pink-600 via-red-500 to-purple-700',
    hasSubSection: true,
  },
  {
    id: 4,
    title: 'Amazing apps. Endless possibilities.',
    text: 'Create something beautiful, boost productivity and deliver engaging customer experiences with Adobe software',
    btn: 'See all products',
    bg: 'bg-gray-200',
    textColor: 'text-adobe-dark',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop&q=80',
    gradient: '',
  },
  {
    id: 5,
    header: 'ADOBE GENSTUDIO FOR PERFORMANCE MARKETING',
    title: 'Empower marketing teams',
    text: 'Generate high-performing on-brand campaign content.',
    btn: 'Learn more',
    bg: 'bg-gray-300',
    textColor: 'text-adobe-dark',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
    gradient: '',
  },
  {
    id: 6,
    header: 'STUDENTS AND TEACHERS',
    title: 'Save 70% on Creative Cloud for the first year.',
    text: 'Go from standard to standout with 20+ amazing apps.',
    btn: 'Learn more',
    bg: 'bg-amber-100',
    textColor: 'text-adobe-dark',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80',
    gradient: '',
  },
]

function FeatureCard({ feature, index }) {
  const [ref, isVisible] = useScrollAnimation(0.15)
  const delay = `animate-delay-${(index % 3) * 200 + 100}`

  if (feature.hasSubSection) {
    return (
      <div
        ref={ref}
        className={`rounded-2xl overflow-hidden cursor-pointer group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${isVisible ? `animate-fade-in-up ${delay}` : 'opacity-0'}`}
      >
        {/* Top gradient section */}
        <div className={`${feature.gradient} p-8 h-[40%]`}>
          <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
          <p className="text-white/90 text-sm mb-4">{feature.text}</p>
          <span className="text-white text-sm font-semibold cursor-pointer hover:underline">{feature.btn}</span>
        </div>
        {/* Bottom section */}
        <div className="bg-gray-200 p-8 h-[60%]">
          <h3 className="text-xl font-bold text-adobe-dark mb-3">Acrobat</h3>
          <p className="text-sm font-semibold text-adobe-dark hover:text-adobe-blue cursor-pointer mb-2">Acrobat free trial</p>
          <p className="text-sm text-gray-600 mb-4">Online PDF tools</p>
          <h4 className="text-lg font-bold text-adobe-dark mb-2">Explore</h4>
          <p className="text-sm text-gray-600 mb-1">View all products</p>
          <p className="text-sm font-semibold text-adobe-dark hover:text-adobe-blue cursor-pointer">See all plans and pricing</p>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={`rounded-2xl overflow-hidden cursor-pointer group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${feature.bg} ${feature.gradient} relative ${isVisible ? `animate-fade-in-up ${delay}` : 'opacity-0'}`}
    >
      {feature.image && (
        <div className="absolute inset-0">
          <img src={feature.image} alt="" className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
        </div>
      )}
      <div className={`relative z-10 p-8 h-full flex flex-col ${feature.textColor}`}>
        {feature.header && (
          <span className="text-xs font-bold tracking-wider mb-3 opacity-80">{feature.header}</span>
        )}
        <h3 className="text-2xl font-bold mb-3 leading-tight">{feature.title}</h3>
        <p className="text-sm opacity-85 mb-6 leading-relaxed">{feature.text}</p>
        <span className="text-sm font-semibold mt-auto cursor-pointer hover:underline group-hover:translate-x-1 transition-transform duration-300">
          {feature.btn} →
        </span>
      </div>
    </div>
  )
}

export default function LandingPage() {
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    setHeroVisible(true)
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen bg-black flex flex-col items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&auto=format&fit=crop&q=80"
            alt="Creative Cloud"
            className={`w-full h-full object-cover transition-all duration-[2s] ${heroVisible ? 'opacity-60 scale-100' : 'opacity-0 scale-110'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        {/* Hero Text */}
        <div className={`relative z-10 flex flex-col items-center justify-end h-[60vh] text-white text-center gap-5 pb-12 px-4 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-xs font-bold tracking-[0.25em] uppercase opacity-80">Adobe Creative Cloud</span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Save 50% on <span className="gradient-text">Creative Cloud Pro.</span>
          </h1>
          <p className="max-w-2xl text-lg text-white/80 leading-relaxed">
            Get the complete toolkit, including Photoshop, Premiere Pro, Illustrator, Adobe Express and Acrobat Pro and save 50% for the first 3 months.
          </p>
          <button className="bg-adobe-blue hover:bg-adobe-dark-blue text-white font-bold py-3.5 px-10 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 animate-pulse-glow mt-2">
            Save today
          </button>
        </div>

        {/* Sub Banners */}
        <div className={`relative z-10 w-full flex justify-center gap-6 px-8 pb-12 transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Photoshop Card */}
          <div className="w-[55%] rounded-3xl bg-adobe-blue text-white overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 flex">
            <div className="p-8 flex flex-col justify-center flex-1">
              <span className="text-sm font-bold mb-4 tracking-wider">ADOBE PHOTOSHOP</span>
              <h2 className="text-2xl font-bold mb-2">Work faster in Photoshop.</h2>
              <p className="text-white/80 mb-6">Now with precise selection, instant colour adjustment and more.</p>
              <button className="self-start border-2 border-white text-white py-2 px-6 rounded-full font-semibold hover:bg-white hover:text-adobe-blue transition-all duration-300 text-sm">
                Learn more
              </button>
            </div>
            <div className="flex-1 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&auto=format&fit=crop&q=80"
                alt="Photoshop"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Premiere Card */}
          <div className="w-[35%] rounded-3xl bg-gradient-to-br from-gray-500 via-gray-800 to-gray-900 text-white overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500">
            <div className="p-8">
              <span className="text-sm font-bold mb-3 tracking-wider block">ADOBE PREMIERE</span>
              <h2 className="text-xl font-bold mb-2">Introducing Adobe Premiere on iPhone</h2>
              <p className="text-white/70 mb-6 text-sm">Easily create, edit and share sharp, stylish video from anywhere.</p>
              <button className="border-2 border-white text-white py-2 px-6 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm">
                Learn more
              </button>
            </div>
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&auto=format&fit=crop&q=80"
                alt="Premiere"
                className="w-[90%] ml-auto group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation Tabs */}
      <section className="w-full py-5 flex items-center justify-center gap-6 bg-white border-b border-gray-100">
        <span className="text-lg font-bold text-adobe-dark">Adobe Creative Cloud:</span>
        <div className="flex items-center gap-3">
          {categoryTabs.map((tab) => (
            <button
              key={tab}
              className="border-2 border-black rounded-full px-5 py-1 text-sm font-semibold text-adobe-dark hover:bg-black hover:text-white transition-all duration-300 capitalize cursor-pointer"
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <main className="w-full px-12 py-16">
        <div className="grid grid-cols-3 gap-8 auto-rows-[400px]">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
