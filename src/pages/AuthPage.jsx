import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AuthPage() {
  const [email, setEmail] = useState('')

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&auto=format&fit=crop&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[#2c2c2c]/70 backdrop-blur-[2px]" />

      {/* Container */}
      <div className="relative z-10 w-[85%] h-full flex items-center mx-auto">
        {/* Left Side - Logo & Text */}
        <div className="flex-1 flex flex-col items-center justify-center text-white animate-fade-in-left">
          <Link to="/" className="mb-8 hover:scale-105 transition-transform duration-300">
            <svg width="60" height="52" viewBox="0 0 30 26" fill="none">
              <path d="M11.5 0H0V26L11.5 0Z" fill="white"/>
              <path d="M18.5 0H30V26L18.5 0Z" fill="white"/>
              <path d="M15 9.5L21.5 26H17L14.8 20H9.5L15 9.5Z" fill="white"/>
            </svg>
          </Link>
          <h2 className="text-xl font-medium mb-4 text-center">Sign in or create an account</h2>
          <div className="absolute bottom-8 left-0 flex items-center gap-2">
            <div className="w-5 h-4 bg-red-700 rounded-sm" />
            <span className="text-sm text-white/70">Room The Agents</span>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="w-[400px] bg-white rounded-xl shadow-2xl p-12 animate-fade-in-right glass" style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)' }}>
          <div className="w-full">
            <h2 className="text-3xl font-bold text-adobe-dark mb-6">Sign in</h2>

            <div className="flex items-center gap-2 mb-10 text-sm">
              <span className="text-gray-600">New user?</span>
              <a href="#" className="text-[#0d69da] hover:underline font-medium">Create account</a>
            </div>

            {/* Email Form */}
            <form onSubmit={(e) => e.preventDefault()} className="mb-6">
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm text-gray-600 mb-1.5">Email address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 text-sm text-adobe-dark border border-gray-300 rounded-lg outline-none transition-all duration-200 focus:border-[#1473e6] focus:shadow-[0_0_0_3px_rgba(20,115,230,0.1)] placeholder:text-gray-400"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#0a60c8] hover:bg-[#0350ad] text-white font-bold py-2.5 px-8 rounded-full transition-all duration-200 active:scale-[0.98] text-sm cursor-pointer hover:shadow-lg hover:shadow-blue-300/30"
                >
                  Continue
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-gray-400 text-lg font-light">or</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Social Buttons */}
            <div className="flex flex-col gap-3 mb-6">
              {/* Google */}
              <button className="w-full py-3 px-4 border border-gray-300 rounded-full flex items-center justify-center gap-3 text-sm font-semibold text-adobe-dark hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 active:scale-[0.98] cursor-pointer group">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="group-hover:translate-x-0.5 transition-transform">Continue with Google</span>
              </button>

              {/* Apple */}
              <button className="w-full py-3 px-4 border border-gray-300 rounded-full flex items-center justify-center gap-3 text-sm font-semibold text-adobe-dark hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 active:scale-[0.98] cursor-pointer group">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <span className="group-hover:translate-x-0.5 transition-transform">Continue with Apple</span>
              </button>

              {/* Facebook */}
              <button className="w-full py-3 px-4 border border-gray-300 rounded-full flex items-center justify-center gap-3 text-sm font-semibold text-adobe-dark hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 active:scale-[0.98] cursor-pointer group">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="group-hover:translate-x-0.5 transition-transform">Continue with Facebook</span>
              </button>
            </div>

            {/* Home Button */}
            <Link
              to="/home"
              className="block text-center text-[#1473e6] font-semibold text-sm border border-[#1473e6] rounded-full py-2 px-6 mx-auto w-fit hover:bg-[#1473e6] hover:text-white transition-all duration-300 mb-5 no-underline"
            >
              Home
            </Link>

            {/* Terms */}
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 leading-relaxed">
                By continuing, you agree to Adobe's{' '}
                <a href="#" className="text-[#1473e6] hover:underline">Terms of Use</a> and{' '}
                <a href="#" className="text-[#1473e6] hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
