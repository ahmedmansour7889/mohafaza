import React from 'react';
import { Loader as Road, Zap, Store } from 'lucide-react';
import { Street } from '../types';

interface StreetCardProps {
  street: Street;
}

export const StreetCard: React.FC<StreetCardProps> = ({ street }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Road className="w-6 h-6 text-yellow-600" />
          <h3 className="text-xl font-semibold text-gray-900">{street.name}</h3>
        </div>
        
        <p className="text-gray-600 mb-4">{street.description}</p>
        
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700">التخصصات:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {street.specialties.map((specialty, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-600">
          <Store className="w-4 h-4" />
          <span className="text-sm">
            عدد المحلات: <span className="font-semibold text-yellow-600">{street.shops}</span>
          </span>
        </div>
      </div>
    </div>
  );
};