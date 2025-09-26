import React from 'react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';

const Hero = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    alert('Searching adventures...');
  };

  return (
    <section className="hero-container  bg-gradient-to-r from-blue-100 to-orange-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Text */}
        <div className="hero-d text-center md:text-left mb-10 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Your Next <span className="text-orange-500">Adventure</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
            Explore breathtaking destinations, create unforgettable memories, and experience the world like never before with our expertly crafted travel packages.
          </p>
        </div>

        {/* Search Form */}
        <form className="hero-form" onSubmit={handleSearch}>
          <div className="form-1  bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto md:flex md:items-end md:space-x-4 flex-wrap">
            {/* Destination */}
            <div className="form-2  relative flex-1 min-w-[200px] mb-4 md:mb-0">
              <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Check-in */}
            <div className="form-2 relative flex-1 min-w-[200px] mb-4 md:mb-0">
              <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Check-out */}
            <div className="form-2 relative flex-1 min-w-[200px] mb-4 md:mb-0">
              <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Guests */}
            <div className="form-2 relative flex-1 min-w-[200px] mb-4 md:mb-0">
              <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent appearance-none"
                  required
                >
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full item-align-center md:w-auto mt-4 md:mt-0 bg-gradient-to-r from-sky-600 to-orange-500 text-white px-8 py-3 rounded-lg hover:from-sky-700 hover:to-orange-600 transition-all duration-300 font-semibold flex items-center justify-center space-x-2"
            >
              <Search className="h-5 w-5" />
              <span>Search Adventures</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
