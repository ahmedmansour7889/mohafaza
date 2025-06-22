import React from 'react';
import { Building2, MapPin, Edit, Trash2 } from 'lucide-react';
import { Center } from '../types';

interface CenterCardProps {
  center: Center;
  onClick: () => void;
  onEdit?: (center: Center) => void;
  onDelete?: (center: Center) => void;
  showActions?: boolean;
}

export const CenterCard: React.FC<CenterCardProps> = ({ 
  center, 
  onClick, 
  onEdit, 
  onDelete, 
  showActions = false 
}) => {
  const totalShops = center.streets.reduce((total, street) => total + street.shops, 0);

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit?.(center);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete?.(center);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-green-200 group relative"
      onClick={onClick}
    >
      {/* Action Buttons */}
      {showActions && (onEdit || onDelete) && (
        <div className="absolute top-3 left-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {onEdit && (
            <button
              onClick={handleEdit}
              className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
              title="تعديل المركز"
            >
              <Edit className="w-4 h-4" />
            </button>
          )}
          {onDelete && (
            <button
              onClick={handleDelete}
              className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors"
              title="حذف المركز"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

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