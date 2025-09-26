import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonialImages } from '../assets/media';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "WanderLux made our honeymoon in Santorini absolutely magical. Every detail was perfectly planned, and the local experiences they arranged were unforgettable. We couldn't have asked for a better trip!",
    image: testimonialImages.sarah
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    rating: 5,
    text: "The Japan tour exceeded all expectations. Our guide was incredibly knowledgeable, and the itinerary perfectly balanced must-see attractions with authentic local experiences. Highly recommended!",
    image: testimonialImages.michael
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Madrid, Spain",
    rating: 5,
    text: "From the moment we contacted WanderLux, their service was exceptional. They handled everything seamlessly, and their 24/7 support gave us peace of mind throughout our adventure in Peru.",
    image: testimonialImages.emma
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="test max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" test-1 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-orange-400">Travelers Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their experiences with WanderLux.
          </p>
        </div>

        <div className="test-2 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="test-3 bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="test-4 flex items-center justify-between mb-6">
                <div className=" flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-sky-600 opacity-50" />
              </div>

              <p className="test-5 text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="test-6 flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className=" test-btn bg-gradient-to-r from-sky-600 to-orange-500 text-white px-8 py-3 rounded-full hover:from-sky-700 hover:to-orange-600 transition-all duration-300 font-semibold">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;