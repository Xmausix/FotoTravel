import React from 'react';
import { Camera, Globe, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 py-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%230EA5E9%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%2230%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-2xl shadow-lg">
            <Camera className="h-12 w-12 text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Capture Your{' '}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Adventures
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Share your travel stories through stunning photography and inspire others to explore the world. 
          Every journey has a story worth telling.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="flex items-center space-x-3 text-gray-700">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Globe className="h-6 w-6 text-orange-600" />
            </div>
            <span className="font-medium">Explore the World</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-700">
            <div className="bg-pink-100 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-pink-600" />
            </div>
            <span className="font-medium">Share Your Stories</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-700">
            <div className="bg-green-100 p-2 rounded-lg">
              <Camera className="h-6 w-6 text-green-600" />
            </div>
            <span className="font-medium">Capture Memories</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;