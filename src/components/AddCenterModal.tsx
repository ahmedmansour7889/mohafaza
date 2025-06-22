import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { Center } from '../types';

interface AddCenterModalProps {
  onClose: () => void;
  onAdd: (center: Omit<Center, 'id'>) => void;
}

export const AddCenterModal: React.FC<AddCenterModalProps> = ({ onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);
    
    const newCenter: Omit<Center, 'id'> = {
      name: name.trim(),
      streets: []
    };

    onAdd(newCenter);
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full" dir="rtl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">إضافة مركز جديد</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label htmlFor="centerName" className="block text-sm font-medium text-gray-700 mb-2">
              اسم المركز *
            </label>
            <input
              type="text"
              id="centerName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="أدخل اسم المركز"
              required
              dir="rtl"
            />
          </div>

          <div className="flex justify-end space-x-3 space-x-reverse">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              إلغاء
            </button>
            <button
              type="submit"
              disabled={!name.trim() || isSubmitting}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>{isSubmitting ? 'جاري الإضافة...' : 'إضافة المركز'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};