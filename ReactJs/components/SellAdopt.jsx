import React, { useState } from "react";
import Slider from "react-slick";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SellAdopt() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    category: "",
    name: "",
    gender: "",
    age: "",
    weight: "",
    story: "",
    url1: "",
    url2: "",
    url3: "",
    url4: "",
  });
  const [img, setImg] = useState([]);
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    var email = localStorage.getItem("email");
    console.log(email);

    if (email === null) {
      navigate("/SignIn");
    } else {
      const currentDate = new Date();
      const formattedDate = formatDate(currentDate);
      console.log("Submitting form with data:", formData); // Log form data
      try {
        const response = await axios.post(
          "http://localhost:8080/api/pets",
          new URLSearchParams({
            userEmail: email+"",
            category: formData.category,
            name: formData.name,
            gender: formData.gender,
            story: formData.story,
            age: formData.age,
            weight: formData.weight,
            img1: formData.url1,
            img2: formData.url2,
            img3: formData.url3,
            img4: formData.url4,
            postedAt: formattedDate
          }).toString(),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        console.log(response.data);
        // Ensure login function is defined
        // login(formData.email);
        navigate("/Search/allPet");
      } catch (error) {
        console.error(
          "Login failed:",
          error.response ? error.response.data : error.message
        );
        alert(
          "Login failed: " +
            (error.response ? error.response.data : error.message)
        );
      }
    }

    // Add logic to handle form submission, like sending data to the backend
    console.log(formData);
  };

  // Carousel settings
  const carouselSettings = {
    vertical: true,
    verticalSwiping: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col min-h-screen">
<div className="flex-wrap  max-sm:px-4 py-7 max-md:px-10 gap-3 justify-center max-w-[1600px] mx-auto flex">
        <div className=" max-w-[500px] grow shrink w-full basis-[250px] my-10  mr-10">
          <Slider {...carouselSettings}>
            <div className="w-full">
              <img
                src="https://images.unsplash.com/photo-1601758176559-76c75ead317a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZyUyMGFuZCUyMG93bmVyfGVufDB8MXwwfHx8MA%3D%3D"
                alt="Dog 1"
                className="aspect-square"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1557173134-2ec6ea626983?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvZyUyMGFuZCUyMG93bmVyfGVufDB8MXwwfHx8MA%3D%3D"
                alt="Dog 2"
                className="aspect-square"
              />
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1673710478948-fdf10d4bea0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dog 3"
                className=" aspect-square"
              />
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1683121426817-6ccd9e6ccb41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nJTIwYW5kJTIwb3duZXJ8ZW58MHwxfDB8fHww"
                alt="Dog 4"
                className=" aspect-square"
              />
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1664094921234-7020235ff35e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvZyUyMGFuZCUyMG93bmVyfGVufDB8MXwwfHx8MA%3D%3D"
                alt="Dog 5"
                className=" aspect-square"
              />
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </div>
        <div className=" grow shrink max-w-[500px] basis-[250px] w-full ">
          <div className="mt-10">
            <h1 className="text-4xl font-bold mb-6 font-sans hover:underline">
              Sell or Rehome a Pet
            </h1>
            <p className="text-lg mb-4">
              Fill out the form below to list a pet for sale or finding a new
              home
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 transition-all duration-300 hover:shadow-2xl"
          >
            {/* Form fields */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="gender"
              >
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Select Category</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
                <option value="reptile">Reptile</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="age"
              >
                Age
              </label>
              <input
                id="age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="weight"
              >
                Weight (kg)
              </label>
              <input
                id="weight"
                name="weight"
                type="number"
                value={formData.weight}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor=""
              >
                Image Urls
              </label>
              <input
                className="w-full p-1 shadow appearance-none border rounded "
                placeholder="Your Pets- Img Url 1"
                type="url"
                name="url1"
                value={formData.url1}
                onChange={handleChange}
                id=""
              />
              <input
                className="w-full p-1 shadow appearance-none border rounded "
                placeholder="Your Pets- Img Url 2"
                type="url"
                name="url2"
                value={formData.url2}
                onChange={handleChange}
                id=""
              />
              <input
                className="w-full p-1 shadow appearance-none border rounded "
                placeholder="Your Pets- Img Url 3"
                type="url"
                name="url3"
                value={formData.url3}
                onChange={handleChange}
                id=""
              />
              <input
                className="w-full p-1 shadow appearance-none border rounded "
                placeholder="Your Pets- Img Url 4"
                type="url"
                name="url4"
                value={formData.url4}
                onChange={handleChange}
                id=""
              />
            </div>
            {/* <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="photo"
              >
                Photo
              </label>
              <input
                id="photo"
                name="photo"
                type="file"
                multiple
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div> */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="story"
              >
                Story
              </label>
              <textarea
                id="story"
                name="story"
                value={formData.story}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SellAdopt;
