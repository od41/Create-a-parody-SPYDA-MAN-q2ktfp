import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { validateEmail, validateName, validateMessage } from '@/utils/validation';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!validateName(formData.name)) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!validateMessage(formData.message)) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission delay
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="w-full bg-slate-900 text-white py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get in Touch with <span className="text-red-600">SPYDA MAN</span>
          </h2>
          <p className="text-gray-400 text-lg">Have a question or want to share a laugh? Reach out!</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-slate-800 rounded-lg p-6 border border-red-600/30 hover:border-red-600/60 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-bold">Email</h3>
            </div>
            <p className="text-gray-400">
              <a
                href="mailto:hello@spydaman.com"
                className="hover:text-red-600 transition-colors"
              >
                hello@spydaman.com
              </a>
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-red-600/30 hover:border-red-600/60 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-bold">Phone</h3>
            </div>
            <p className="text-gray-400">
              <a
                href="tel:+1-555-SPYDA-MAN"
                className="hover:text-red-600 transition-colors"
              >
                +1 (555) 779-3626
              </a>
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-red-600/30 hover:border-red-600/60 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-bold">Location</h3>
            </div>
            <p className="text-gray-400">New York, NY<br />Web-based HQ</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-800 rounded-lg border border-red-600/30 p-8 max-w-2xl mx-auto">
          {submitted && (
            <div className="mb-6 p-4 bg-green-900/30 border border-green-600/50 rounded-lg">
              <p className="text-green-400 font-semibold">✓ Message sent successfully! SPYDA MAN will get back to you soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-colors"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-2">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-colors"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-2">{errors.email}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600/50 transition-colors resize-none"
                placeholder="Tell SPYDA MAN what's on your mind..."
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-2">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-800 disabled:opacity-50 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
