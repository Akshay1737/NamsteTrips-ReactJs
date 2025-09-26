import React from 'react';
import { Star, MapPin, Clock, Users } from 'lucide-react';
import { destinationImages, imageMetadata } from '../assets/media';

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: destinationImages.santorini,
    alt: imageMetadata.santorini.alt,
    price: "$1,299",
    duration: "7 days",
    rating: 4.9,
    reviews: 234,
    description: "Experience the magic of white-washed buildings and stunning sunsets",
    highlights: ["Sunset Views", "Wine Tasting", "Beach Access"]
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    image: destinationImages.bali,
    alt: imageMetadata.bali.alt,
    price: "$899",
    duration: "10 days",
    rating: 4.8,
    reviews: 189,
    description: "Discover tropical paradise with ancient temples and pristine beaches",
    highlights: ["Temple Tours", "Rice Terraces", "Spa Treatments"]
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    image: destinationImages.tokyo,
    alt: imageMetadata.tokyo.alt,
    price: "$1,599",
    duration: "8 days",
    rating: 4.9,
    reviews: 312,
    description: "Immerse yourself in the perfect blend of tradition and modernity",
    highlights: ["Cultural Sites", "Food Tours", "Shopping"]
  },
  {
    id: 4,
    name: "Machu Picchu, Peru",
    image: destinationImages.machuPicchu,
    alt: imageMetadata.machuPicchu.alt,
    price: "$1,199",
    duration: "6 days",
    rating: 4.7,
    reviews: 156,
    description: "Trek through ancient Incan ruins and breathtaking mountain landscapes",
    highlights: ["Hiking Trails", "Ancient Ruins", "Mountain Views"]
  },
  {
    id: 5,
    name: "Dubai, UAE",
    image: destinationImages.dubai,
    alt: imageMetadata.dubai.alt,
    price: "$1,799",
    duration: "5 days",
    rating: 4.8,
    reviews: 278,
    description: "Experience luxury and innovation in this modern desert oasis",
    highlights: ["Luxury Shopping", "Desert Safari", "Skyscrapers"]
  },
  {
    id: 6,
    name: "Iceland",
    image: destinationImages.iceland,
    alt: imageMetadata.iceland.alt,
    price: "$1,499",
    duration: "9 days",
    rating: 4.9,
    reviews: 201,
    description: "Witness the Northern Lights and explore dramatic volcanic landscapes",
    highlights: ["Northern Lights", "Hot Springs", "Waterfalls"]
  }
];

const Destinations = () => {
  return (
    <section  id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" desti-1 text-center mb-16">
          <h2  className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Popular <span className="text-sky-600">Destinations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of breathtaking destinations around the world, 
            each offering unique experiences and unforgettable memories.
          </p>
        </div>

        <div className=" desti-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((destination) => (
            <div key={destination.id} className="desti-2 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="desti-3 relative">
                <img
                  src={destination.image}
                  alt={destination.alt}
                  className=" desti-3"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg">
                  <span className=" text-orange-600 font-bold text-lg">{destination.price}</span>
                </div>
              </div>

              <div className=" p-6">
                <div className="desti-5 ">
                  <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{destination.rating}</span>
                    <span className="text-sm text-gray-500">({destination.reviews})</span>
                  </div>
                </div>

                <p className="desti-6 text-gray-600 mb-4 leading-relaxed">{destination.description}</p>

                <div className=" desti-7 flex items-center space-x-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="  flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>Small Groups</span>
                  </div>
                </div>

                <div className=" desti-8 flex flex-wrap gap-2 mb-6">
                  {destination.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div  >

                <button className="desti-9 bg-gradient-to-r from-sky-600 to-orange-500 text-white py-3 rounded-lg hover:from-sky-700 hover:to-orange-600 transition-all duration-300 font-semibold">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className=" desti-btn text-center mt-12">
          <button href='/destination' className="bg-white text-sky-600 border-2 border-sky-600 px-8 py-3 rounded-full hover:bg-sky-600 hover:text-white transition-all duration-300 font-semibold">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;