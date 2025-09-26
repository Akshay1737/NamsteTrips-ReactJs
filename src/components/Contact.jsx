
import { Container, Row, Col } from 'react-bootstrap';
import { Mail } from 'lucide-react';

const Contact = () => {
 

 

  // Replace with your WhatsApp number (with country code, no "+" or spaces)
  const whatsappNumber = "919923271737"; // Example: 91 for India + your number
  const whatsappMessage = "Hi, I am interested in Web Devoplment ";


  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <Container className="contact-container bg-gradient-to-r from-sky-600 to-orange-500 py-20 px-4">
      <Col className="contact-col bg-white rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto">
        <Row className="contact-row flex flex-col items-center text-center space-y-6">
          
          {/* Mail Icon */}
          <div className="social bg-gradient-to-r from-sky-600 to-orange-500 p-3 rounded-full shadow-lg">
            <img className='social1' src="./whatsapp.svg" alt="" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold">
            Stay Updated with <span className="text-sky-600">Travel Deals</span>
          </h1>

          <p className="p3 text-gray-700 max-w-xl">
            Subscribe to our newsletter and be the first to know about exclusive travel deals, destination guides, and insider tips from our travel experts.
          </p>

          {/* Newsletter Form */}
          

          {/* WhatsApp Button */}
          <div className=" whats-a  mt-6">
           <button
                     onClick={openWhatsApp}
                  className=" bg-gradient-to-r from-sky-600 to-orange-500 text-white px-6 py-3  font-semibold hover:from-sky-700 hover:to-orange-600 transition-all duration-300; cursor-pointer hover:scale-110 transition-transform focus:outline-none rounded-full bg-transparent p-0"
                aria-label="Chat with us on WhatsApp"
                
              > Continue chat on WhatsApp      
              </button>

            <p className="text-gray-600 mt-2 text-sm">Chat with us on WhatsApp</p>
          </div>

          <p className="p4 text-sm text-gray-500">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </Row>
      </Col>
    </Container>
  );
};

export default Contact;
