import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Container, Nav } from 'react-bootstrap';
import { Plane, Hotel, Car, Camera, Shield, Headphones } from 'lucide-react';
const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Find and book the best flights at competitive prices with our global airline partnerships.",
    features: ["Best Price Guarantee", "24/7 Support", "Flexible Booking"]
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description: "Choose from luxury resorts to boutique hotels, all carefully selected for quality and comfort.",
    features: ["Handpicked Hotels", "Instant Confirmation", "Special Rates"]
  },
  {
    icon: Car,
    title: "Car Rentals",
    description: "Explore destinations at your own pace with our reliable car rental services worldwide.",
    features: ["Premium Vehicles", "GPS Navigation", "Insurance Included"]
  },
  {
    icon: Camera,
    title: "Guided Tours",
    description: "Experience destinations like a local with our expert guides and curated tour packages.",
    features: ["Local Experts", "Small Groups", "Cultural Immersion"]
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Travel with peace of mind knowing you're protected with comprehensive travel insurance.",
    features: ["Medical Coverage", "Trip Cancellation", "24/7 Assistance"]
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated travel specialists are available around the clock to assist you.",
    features: ["Instant Response", "Multi-language", "Emergency Support"]
  }
];

function  Services() {
  return (
   <>
      <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="service text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From planning to execution, we handle every aspect of your journey to ensure 
            a seamless and unforgettable travel experience.
          </p>
        </div>

        <div className="hh grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="service-icon flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-600 to-orange-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="ul space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="li flex items-center space-x-2">
                      <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-6 text-sky-600 font-semibold hover:text-orange-500 transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
   
   </>
  );
}

export default Services;