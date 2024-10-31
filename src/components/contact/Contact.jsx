import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { TbBrandGithubFilled } from "react-icons/tb";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    to_name: "Ahmed AboRaya",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("Sending...");

    emailjs
      .send(
        "service_bplj1hc",
        "template_skwh4ko",
        formData,
        "5eR8XMsDN1mBxKRpk"
      )
      .then(
        (response) => {
          setStatusMessage("Message sent successfully!");
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatusMessage("Failed to send message. Please try again later.");
        }
      )
      .finally(() => {
        setIsSending(false);
        setFormData({
          name: "",
          email: "",
          message: "",
          to_name: "Ahmed AboRaya",
        });
      });
  };

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row w-full  max-w-4xl shadow-lg rounded-lg overflow-hidden">
        {/* Left Section: Contact Info */}
        <div className="w-full lg:w-1/2 bg-[#121329] items-center justify-center text-gray-300 p-8 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Contact Information
          </h2>

          <ul className="space-y-4">
            <li className="flex items-center text-sm md:text-[16px]">
              <MapPin className="text-white mr-3" />
              <strong>Address:&nbsp;</strong> 1234 Example St, City, Country
            </li>
            <li className="flex items-center text-sm md:text-[16px]">
              <Phone className="text-white mr-3" />
              <strong>Phone:&nbsp;</strong> +0201153782020
            </li>
            <li className="flex items-center ">
              <Mail className="text-white mr-3" />
              <strong>Email:&nbsp;</strong> ahmedaboraya399@gmail.com
            </li>
          </ul>
          <div className="flex space-x-3 mt-5 w-full justify-center">
            <a href="https://github.com/AhmedAboRaya" target="_blank" className="cursor-pointer flex justify-center items-center border-2 rounded-full px-2 hover:bg-black hover:border-black duration-500 hover:scale-[1.3]">
              <TbBrandGithubFilled className="gitIcon" />
            </a>
            <a href="https://www.linkedin.com/in/ahmed-abo-raya/" target="_blank" className="cursor-pointer flex justify-center items-center border-2 rounded-full p-2 hover:bg-blue-700 hover:border-blue-700 duration-500 hover:scale-[1.3]">
              <BiLogoLinkedin className="inIcon" />
            </a>
            <a href="https://x.com/AhmedMa27931006" target="_blank" className="cursor-pointer flex justify-center items-center border-2 rounded-full p-2 duration-500 hover:scale-[1.3] hover:bg-black hover:border-black">
              <BsTwitterX className="xIcon" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100016644704372" target="_blank" className="cursor-pointer flex justify-center items-center border-2 rounded-full px-2 hover:text-white hover:bg-blue-700 hover:border-blue-700 duration-500 hover:scale-[1.3]">
              <FaFacebookF className="faceIcon" />
            </a>
            {/* <a href="https://www.instagram.com/abo_raya1212/" target="_blank" className="cursor-pointer flex justify-center items-center border-2 rounded-full px-2 border-white bg-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:border-transparent hover:scale-[1.3] duration-500">
              <FaInstagram className="instaIcon" />
            </a> */}
            <a href="https://wa.me/201153782020" target="_blank" className="cursor-pointer flex justify-center items-center border-2 rounded-full p-2 duration-500 hover:scale-[1.3] hover:bg-green-600 hover:border-black">
              <SiWhatsapp className="xIcon" />
            </a>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="w-full lg:w-1/2 bg-[#151635fc] text-gray-300 p-8">
          <h2 className="text-2xl font-semibold text-white text-center">
            Contact Me
          </h2>
          <p className="mt-2 text-gray-400 text-center">
            I'd love to hear from you! Fill out the form below to get in touch.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                className="peer w-full p-2 text-gray-300 border-b bg-transparent border-gray-300 focus:outline-none caret-gray-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute left-2 -top-2.5 text-sm font-medium text-gray-500 px-1 transition-all duration-500 transform scale-90 origin-top-left peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-gray-500 peer-focus:scale-90"
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                className="peer w-full p-2 text-gray-300 border-b bg-transparent border-gray-300 focus:outline-none caret-gray-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute left-2 -top-2.5 text-sm font-medium text-gray-500 px-1 transition-all duration-500 transform scale-90 origin-top-left peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-gray-500 peer-focus:scale-90"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                onChange={handleChange}
                rows="4"
                className="peer h-11 w-full p-2 text-gray-300 border-b bg-transparent border-gray-300 focus:outline-none caret-gray-500"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-2 -top-2.5 text-sm font-medium text-gray-500 px-1 transition-all duration-500 transform scale-90 origin-top-left peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-gray-500 peer-focus:scale-90"
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-[#2C2D4F] p-2 rounded-md font-semibold hover:text-white hover:bg-transparent border-[1px] border-white duration-500"
              disabled={isSending} // Disable button while sending
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
          <p className="mt-4 text-center text-white">
            {statusMessage === "Sending..." ? "" : statusMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
