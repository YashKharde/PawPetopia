// src/components/Footer.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faDog,
  faPaw,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="mt-10 py-6 border-t flex justify-between items-center">
      <div className="flex flex-col items-start space-y-4">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faCheck} className="text-green-500 h-6" />
          <span className="text-lg">100% Satisfaction</span>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faDog} className="text-yellow-500 h-6" />
          <span className="text-lg">Well-Trained Manners</span>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPaw} className="text-blue-500 h-6" />
          <span className="text-lg">Different Varieties</span>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faHeart} className="text-red-500 h-6" />
          <span className="text-lg">Lovely Pets</span>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg mb-2">Contact Us: info@example.com</p>
        <p className="text-lg">&copy; 2024 Our Project. All rights reserved.</p>
        <p className="text-lg mb-2">
          {" "}
          Visit Us Again: We can't wait to see you soon!
        </p>
      </div>
    </footer>
  );
}

export default Footer;
