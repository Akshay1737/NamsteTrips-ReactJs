import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';
import { aboutImages, imageMetadata } from '../assets/media';

const stats = [
  { icon: Users, number: "50,000+", label: "Happy Travelers" },
  { icon: Globe, number: "150+", label: "Destinations" },
  { icon: Award, number: "25+", label: "Years Experience" },
  { icon: Heart, number: "98%", label: "Satisfaction Rate" }
];

const About = () => {
  return (
    <section href='/about' id="about" className="py-20 bg-gradient-to-br from-sky-50 to-orange-50">
      <div className="about-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="about-2 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className='about-3'>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-sky-600">NamasteTrips</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For over 25 years, WanderLux has been crafting extraordinary travel experiences 
              that go beyond the ordinary. We believe that travel is not just about visiting 
              places—it's about creating memories that last a lifetime.
            </p>
            
            <div className="about-4 space-y-6 mb-8">
              <div className=" about-5 flex items-start space-x-4">
                <div className=" abot flex-shrink-0 w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className='abot'>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Planning</h3>
                  <p className="text-gray-600">Our travel specialists design personalized itineraries based on your preferences and dreams.</p>
                </div>
              </div>

              <div className=" about-5 flex items-start space-x-4">
                <div className="abot flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className='abot'>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Connections</h3>
                  <p className="text-gray-600">We partner with local guides and businesses to provide authentic, immersive experiences.</p>
                </div>
              </div>

              <div className="about-5 flex items-start space-x-4">
                <div className="abot flex-shrink-0 w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center">
                  <span className=" text-white font-bold text-sm">3</span>
                </div>
                <div className='abot'>
                  <h3 className=" text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                  <p className="text-gray-600">From booking to return, our dedicated team is always available to assist you.</p>
                </div>
              </div>
            </div>

            <button className="abot-btn bg-gradient-to-r from-sky-600 to-orange-500 text-white px-8 py-3 rounded-full hover:from-sky-700 hover:to-orange-600 transition-all duration-300 font-semibold">
              Learn More About Us
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={aboutImages.team}
              alt={imageMetadata.team.alt}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-600 to-orange-500 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">25+</p>
                  <p className="text-gray-600 text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className=" mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className=" abo-6 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-sky-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;