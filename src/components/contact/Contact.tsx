import React, { useState } from "react";
import { Send, Linkedin, Facebook, Instagram, Phone } from "lucide-react";
import { sendContactForm } from "../../services/contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await sendContactForm(formData);
      setSuccessMessage(response.message);
      setFormData({ name: "", email: "", message: "" }); // Reset form on success
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              DO YOU HAVE A PROJECT TO DISCUSS?
            </span>
          </h1>
          <h2 className="text-3xl font-semibold text-white flex items-center gap-2">
            GET IN TOUCH <Send className="w-6 h-6" />
          </h2>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">CONTACT</h3>
            <a
              href="mailto:damoun.meriam@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              damoun.meriam@gmail.com
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-8">CONTACT FORM</h2>
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#1e2330] border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#1e2330] border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-[#1e2330] border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3 border-2 border-white text-lg hover:bg-white hover:text-[#0040C1] transition-color"
              disabled={loading}
            >
              {loading ? "Sending..." : "SEND"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
