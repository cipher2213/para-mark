"use client";
import { MapPinIcon, PhoneIcon, ClockIcon } from "@heroicons/react/24/solid";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-8">
      <div className="container mx-auto text-center">
        <h2 className="mb-4 text-3xl md:text-4xl font-bold text-blue-gray-900">Contact & Location</h2>
        <p className="mx-auto lg:w-3/5 text-gray-500 mb-12 text-lg">
          We'd love to hear from you! Visit us, give us a call, or drop us a line. We're here to make your day a little more delicious.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white/80 shadow rounded-2xl p-8 text-center">
            <MapPinIcon className="h-10 w-10 mx-auto text-blue-gray-700 mb-4" />
            <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">Our Address</h5>
            <p className="text-gray-600">Add-Jamkar Complex,Old Pedgaon Road,Parbhani 431401</p>
          </div>
          <div className="bg-white/80 shadow rounded-2xl p-8 text-center">
            <PhoneIcon className="h-10 w-10 mx-auto text-blue-gray-700 mb-4" />
            <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">Phone Number</h5>
            <p className="text-gray-600">+91 8668315638,+91 8446121364</p>
          </div>
          <div className="bg-white/80 shadow rounded-2xl p-8 text-center">
            <ClockIcon className="h-10 w-10 mx-auto text-blue-gray-700 mb-4" />
            <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">Opening Hours</h5>
            <p className="text-gray-600">Mon - Sun: 10:00 AM - 10:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 