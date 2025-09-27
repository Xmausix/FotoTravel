import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Menu, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-xl group-hover:shadow-lg transition-shadow duration-200">
              <Camera className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Fototravel
              </h1>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Posts
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/dashboard" 
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-red-600 transition-colors font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </Link>
            )}
          </nav>

          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;