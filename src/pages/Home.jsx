import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex-1 w-full bg-gradient-to-br from-base-200 to-base-300 flex items-center justify-center px-4 py-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-3 leading-tight">
            Let First Impressions Be{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Unforgettable
            </span>
          </h1>
          <p className="text-base-content/80 text-base md:text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
            Create stunning portfolios that showcase your work and leave a lasting impression on clients and employers.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Link to="/create" className="btn btn-primary btn-lg px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Create Now
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <button className="btn btn-outline btn-lg px-8 py-3 text-lg font-semibold hover:scale-105 transition-all duration-300">
            View Examples
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="card-body py-3 px-6 text-center">
              <div className="text-2xl mb-2">✨</div>
              <h3 className="card-title justify-center text-lg mb-1">Beautiful Design</h3>
              <p className="text-base-content/70 text-sm">Professional templates that shine</p>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="card-body py-3 px-6 text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="card-title justify-center text-lg mb-1">Fast & Easy</h3>
              <p className="text-base-content/70 text-sm">Create in minutes, not hours</p>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="card-body py-3 px-6 text-center">
              <div className="text-2xl mb-2">📱</div>
              <h3 className="card-title justify-center text-lg mb-1">Mobile Ready</h3>
              <p className="text-base-content/70 text-sm">Perfect on all devices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home