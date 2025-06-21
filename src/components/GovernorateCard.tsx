import React from 'react';
import { MapPin, Store } from 'lucide-react';
import { Governorate } from '../types';

interface GovernorateCardProps {
  governorate: Governorate;
  onClick: () => void;
}

export const GovernorateCard: React.FC<GovernorateCardProps> = ({ governorate, onClick }) => {
  const totalShops = governorate.centers.reduce(
    (total, center) => total + center.streets.reduce((centerTotal, street) => centerTotal + street.shops, 0),
    0
  );

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200 group"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <MapPin className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                {governorate.name}
              </h3>
              <p className="text-sm text-gray-500">{governorate.nameEn}</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Store className="w-4 h-4" />
            <span>{totalShops} محل تجاري</span>
          </div>
          <div className="text-blue-600 font-medium group-hover:text-blue-700">
            {governorate.centers.length} مركز
          </div>
        </div>
      </div>
      
      <div className="h-1 bg-gradient-to-r from-blue-500 to-green-500 group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300"></div>
    </div>
  );
};