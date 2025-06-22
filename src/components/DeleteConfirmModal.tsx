import React from 'react';
import { X, Trash2, AlertTriangle } from 'lucide-react';

interface DeleteConfirmModalProps {
  itemName: string;
  itemType: string;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({ 
  itemName, 
  itemType, 
  onClose, 
  onConfirm 
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full" dir="rtl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">تأكيد الحذف</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-3 space-x-reverse mb-4">
            <div className="flex-shrink-0">
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                هل أنت متأكد من حذف {itemType}؟
              </h3>
              <p className="text-gray-600 mt-1">
                سيتم حذف "{itemName}" نهائياً ولا يمكن التراجع عن هذا الإجراء.
              </p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Trash2 className="w-5 h-5 text-red-600" />
              <p className="text-sm text-red-800">
                {itemType === 'المركز' 
                  ? 'سيتم حذف جميع الشوارع المرتبطة بهذا المركز أيضاً'
                  : 'سيتم حذف هذا الشارع وجميع بياناته'
                }
              </p>
            </div>
          </div>

          <div className="flex justify-end space-x-3 space-x-reverse">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              إلغاء
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
            >
              <Trash2 className="w-4 h-4" />
              <span>حذف {itemType}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};