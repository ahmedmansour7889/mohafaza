import React from 'react';
import { Building2, MapPin } from 'lucide-react';
import { Center } from '../types';

interface CenterCardProps {
  center: Center;
  onClick: () => void;
}

export const CenterCard: React.FC<CenterCardProps> = ({ center, onClick }) => {
  const totalShops = center.streets.reduce((total, street) => total + street.shops, 0);

  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-green-200 group"
      onClick={onClick}
    >
      <div className="p-5">
        <div className="flex items-center space-x-3 mb-3">
          <Building2 className="w-6 h-6 text-green-600 group-hover:text-green-700 transition-colors" />
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
            {center.name}
          </h3>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{center.streets.length} شارع متخصص</span>
          </div>
          <div className="text-green-600 font-medium">
            {totalShops} محل
          </div>
        </div>
      </div>
    </div>
  );
};