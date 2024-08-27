// src/components/AboutUs.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faDog, faPaw, faHeart } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Footer from './Footer';

function AboutUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const stats = [
    { icon: faCheck, label: "Customer Satisfaction", value: 100, color: "text-green-500" },
    { icon: faDog, label: "Pets Sold", value: 20, color: "text-yellow-500" },
    { icon: faHeart, label: "Pets Adopted", value: 10, color: "text-red-500" },
    { icon: faPaw, label: "Pets Present", value: 1000, color: "text-blue-500" },
  ];

  return (
    <div className="relative px-14 max-sm:px-4 py-7 max-md:px-10 max-w-[1600px] mx-auto">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <FontAwesomeIcon icon={faPaw} className="text-gray-200 h-64 w-64 top-1/4 left-1/4 absolute" />
        <FontAwesomeIcon icon={faPaw} className="text-gray-200 h-64 w-64 bottom-1/4 right-1/4 absolute" />
      </div>

      <div className="relative mt-10">
        <h1 className="text-4xl font-bold mb-6 font-mono">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to our project! We are dedicated to bringing you the best services and experiences. Our team is composed of skilled professionals who are passionate about what they do.
        </p>
        <p className="text-lg mb-4">
          Our mission is to provide top-quality solutions that meet the needs of our users. We believe in innovation, excellence, and commitment to our clients.
        </p>
        <p className="text-lg mb-4">
          Thank you for visiting our PawPetopia site. We hope you find everything you're looking for. If you have any questions or need further assistance, please don't hesitate to contact us.
        </p>
       

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10" ref={ref}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative bg-base-100 p-6 rounded-md shadow-lg hover:bg-white transition-transform transform hover:scale-105"
            >
              <div className="absolute inset-0 opacity-10">
                <FontAwesomeIcon icon={faPaw} className="text-gray-200 h-full w-full" />
              </div>
              <div className="relative flex flex-col items-center">
                <FontAwesomeIcon icon={stat.icon} className={`h-12 ${stat.color}`} />
                <h3 className="text-2xl font-bold mb-2">{stat.label}</h3>
                <p className="mb-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi voluptates sapiente odit quasi officia adipisci dolore laborum? Perferendis voluptates accusantium dignissimos nulla deleniti quo officiis incidunt officia exercitationem accusamus!</p>
                {inView && (
                  <div className="flex items-center justify-center text-4xl font-bold">
                    <CountUp end={stat.value} duration={2} />
                    <span className="ml-1">+</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
