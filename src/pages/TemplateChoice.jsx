import React from 'react'
import { Link } from 'react-router-dom'

const TemplateChoice = () => {
  return (
    <div className="flex-1 w-full bg-gradient-to-br from-base-200 to-base-300 flex items-center justify-center px-2 sm:px-4 py-4 sm:py-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 sm:mb-3">
          Choose Your Template Type
        </h1>
        <p className="text-base-content/80 text-sm sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
          Select the type of template that best fits your needs and skill level.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto px-4">
          {/* Simple Template Card */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="card-body p-6 sm:p-8">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡</div>
              <h2 className="card-title justify-center text-xl sm:text-2xl mb-3 sm:mb-4 text-primary">
                Simple Template
              </h2>
              <p className="text-base-content/70 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Perfect for beginners. Just fill in your information and we'll create a beautiful portfolio for you.
              </p>
              <ul className="text-left text-xs sm:text-sm text-base-content/60 mb-4 sm:mb-6 space-y-1 sm:space-y-2">
                <li>✓ Pre-designed layouts</li>
                <li>✓ Easy form-based setup</li>
                <li>✓ Quick customization</li>
                <li>✓ Perfect for first-time users</li>
              </ul>
              <div className="card-actions justify-center">
                <Link 
                  to="simple" 
                  className="btn btn-primary btn-md sm:btn-lg px-6 sm:px-8 py-2 sm:py-3 font-semibold text-sm sm:text-base"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Custom Template Card */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="card-body p-6 sm:p-8">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎨</div>
              <h2 className="card-title justify-center text-xl sm:text-2xl mb-3 sm:mb-4 text-secondary">
                Custom Template
              </h2>
              <p className="text-base-content/70 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Full control over your design. Drag, drop, and customize every element to match your vision.
              </p>
              <ul className="text-left text-xs sm:text-sm text-base-content/60 mb-4 sm:mb-6 space-y-1 sm:space-y-2">
                <li>✓ Drag & drop editor</li>
                <li>✓ Advanced customization</li>
                <li>✓ Custom layouts</li>
                <li>✓ For experienced users</li>
              </ul>
              <div className="card-actions justify-center">
                <Link 
                  to="custom" 
                  className="btn btn-secondary btn-md sm:btn-lg px-6 sm:px-8 py-2 sm:py-3 font-semibold text-sm sm:text-base"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8">
          <Link to="/" className="btn btn-ghost text-base-content/60 text-sm sm:text-base">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TemplateChoice 