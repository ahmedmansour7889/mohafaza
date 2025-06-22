import React, { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { Street } from '../types';

interface AddStreetModalProps {
  onClose: () => void;
  onAdd: (street: Omit<Street, 'id'>) => void;
}

export const AddStreetModal: React.FC<AddStreetModalProps> = ({ onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [shops, setShops] = useState(10);
  const [specialties, setSpecialties] = useState(['']);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addSpecialty = () => {
    setSpecialties([...specialties, '']);
  };

  const removeSpecialty = (index: number) => {
    if (specialties.length > 1) {
      setSpecialties(specialties.filter((_, i) => i !== index));
    }
  };

  const updateSpecialty = (index: number, value: string) => {
    const updated = [...specialties];
    updated[index] = value;
    setSpecialties(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;

    const validSpecialties = specialties.filter(s => s.trim());
    if (validSpecialties.length === 0) return;

    setIsSubmitting(true);
    
    const newStreet: Omit<Street, 'id'> = {
      name: name.trim(),
      description: description.trim(),
      specialties: validSpecialties,
      shops
    };

    onAdd(newStreet);
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto" dir="rtl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">إضافة شارع جديد</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label htmlFor="streetName" className="block text-sm font-medium text-gray-700 mb-2">
              اسم الشارع *
            </label>
            <input
              type="text"
              id="streetName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="أدخل اسم الشارع"
              required
              dir="rtl"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="streetDescription" className="block text-sm font-medium text-gray-700 mb-2">
              وصف الشارع *
            </label>
            <textarea
              id="streetDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="أدخل وصف الشارع والأنشطة التجارية به"
              required
              dir="rtl"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="streetShops" className="block text-sm font-medium text-gray-700 mb-2">
              عدد المحلات
            </label>
            <input
              type="number"
              id="streetShops"
              value={shops}
              onChange={(e) => setShops(Math.max(1, parseInt(e.target.value) || 1))}
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              dir="rtl"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              التخصصات *
            </label>
            {specialties.map((specialty, index) => (
              <div key={index} className="flex items-center space-x-2 space-x-reverse mb-2">
                <input
                  type="text"
                  value={specialty}
                  onChange={(e) => updateSpecialty(index, e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="أدخل التخصص"
                  dir="rtl"
                />
                {specialties.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSpecialty(index)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addSpecialty}
              className="mt-2 flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>إضافة تخصص</span>
            </button>
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
              disabled={!name.trim() || !description.trim() || specialties.filter(s => s.trim()).length === 0 || isSubmitting}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>{isSubmitting ? 'جاري الإضافة...' : 'إضافة الشارع'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};