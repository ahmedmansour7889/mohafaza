import React, { useState, useMemo } from 'react';
import { Zap, ArrowRight, Search } from 'lucide-react';
import { egyptData } from './data/egyptData';
import { GovernorateCard } from './components/GovernorateCard';
import { CenterCard } from './components/CenterCard';
import { StreetCard } from './components/StreetCard';
import { SearchBar } from './components/SearchBar';
import { Breadcrumb } from './components/Breadcrumb';
import { AddCenterModal } from './components/AddCenterModal';
import { AddStreetModal } from './components/AddStreetModal';
import { EditCenterModal } from './components/EditCenterModal';
import { EditStreetModal } from './components/EditStreetModal';
import { DeleteConfirmModal } from './components/DeleteConfirmModal';
import { Governorate, Center, Street } from './types';

type ViewState = 'governorates' | 'centers' | 'streets';

function App() {
  const [data, setData] = useState(egyptData);
  const [currentView, setCurrentView] = useState<ViewState>('governorates');
  const [selectedGovernorate, setSelectedGovernorate] = useState<Governorate | null>(null);
  const [selectedCenter, setSelectedCenter] = useState<Center | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modal states
  const [showAddCenterModal, setShowAddCenterModal] = useState(false);
  const [showAddStreetModal, setShowAddStreetModal] = useState(false);
  const [showEditCenterModal, setShowEditCenterModal] = useState(false);
  const [showEditStreetModal, setShowEditStreetModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editingCenter, setEditingCenter] = useState<Center | null>(null);
  const [editingStreet, setEditingStreet] = useState<Street | null>(null);
  const [deleteItem, setDeleteItem] = useState<{type: 'center' | 'street', item: Center | Street} | null>(null);

  const filteredGovernorates = useMemo(() => {
    if (!searchQuery) return data;
    return data.filter(gov => 
      gov.name.includes(searchQuery) || 
      gov.nameEn.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [data, searchQuery]);

  const filteredCenters = useMemo(() => {
    if (!selectedGovernorate) return [];
    if (!searchQuery) return selectedGovernorate.centers;
    return selectedGovernorate.centers.filter(center =>
      center.name.includes(searchQuery)
    );
  }, [selectedGovernorate, searchQuery]);

  const filteredStreets = useMemo(() => {
    if (!selectedCenter) return [];
    if (!searchQuery) return selectedCenter.streets;
    return selectedCenter.streets.filter(street =>
      street.name.includes(searchQuery) ||
      street.description.includes(searchQuery) ||
      street.specialties.some(specialty => specialty.includes(searchQuery))
    );
  }, [selectedCenter, searchQuery]);

  const handleGovernorateSelect = (governorate: Governorate) => {
    const updatedGov = data.find(g => g.id === governorate.id) || governorate;
    setSelectedGovernorate(updatedGov);
    setCurrentView('centers');
    setSearchQuery('');
  };

  const handleCenterSelect = (center: Center) => {
    const updatedCenter = selectedGovernorate?.centers.find(c => c.id === center.id) || center;
    setSelectedCenter(updatedCenter);
    setCurrentView('streets');
    setSearchQuery('');
  };

  const handleBackToGovernorates = () => {
    setCurrentView('governorates');
    setSelectedGovernorate(null);
    setSelectedCenter(null);
    setSearchQuery('');
  };

  const handleBackToCenters = () => {
    setCurrentView('centers');
    setSelectedCenter(null);
    setSearchQuery('');
  };

  // Add Center
  const handleAddCenter = (centerData: Omit<Center, 'id'>) => {
    if (!selectedGovernorate) return;
    
    const newCenter: Center = {
      ...centerData,
      id: `${selectedGovernorate.id}-${Date.now()}`,
    };

    const updatedData = data.map(gov => {
      if (gov.id === selectedGovernorate.id) {
        const updatedGov = {
          ...gov,
          centers: [...gov.centers, newCenter]
        };
        setSelectedGovernorate(updatedGov);
        return updatedGov;
      }
      return gov;
    });

    setData(updatedData);
    setShowAddCenterModal(false);
  };

  // Edit Center
  const handleEditCenter = (centerData: Omit<Center, 'id'>) => {
    if (!selectedGovernorate || !editingCenter) return;

    const updatedCenter: Center = {
      ...centerData,
      id: editingCenter.id,
    };

    const updatedData = data.map(gov => {
      if (gov.id === selectedGovernorate.id) {
        const updatedGov = {
          ...gov,
          centers: gov.centers.map(center => 
            center.id === editingCenter.id ? updatedCenter : center
          )
        };
        setSelectedGovernorate(updatedGov);
        return updatedGov;
      }
      return gov;
    });

    setData(updatedData);
    setShowEditCenterModal(false);
    setEditingCenter(null);
  };

  // Delete Center
  const handleDeleteCenter = (center: Center) => {
    setDeleteItem({ type: 'center', item: center });
    setShowDeleteModal(true);
  };

  // Add Street
  const handleAddStreet = (streetData: Omit<Street, 'id'>) => {
    if (!selectedGovernorate || !selectedCenter) return;
    
    const newStreet: Street = {
      ...streetData,
      id: `${selectedCenter.id}-${Date.now()}`,
    };

    const updatedData = data.map(gov => {
      if (gov.id === selectedGovernorate.id) {
        const updatedGov = {
          ...gov,
          centers: gov.centers.map(center => {
            if (center.id === selectedCenter.id) {
              const updatedCenter = {
                ...center,
                streets: [...center.streets, newStreet]
              };
              setSelectedCenter(updatedCenter);
              return updatedCenter;
            }
            return center;
          })
        };
        setSelectedGovernorate(updatedGov);
        return updatedGov;
      }
      return gov;
    });

    setData(updatedData);
    setShowAddStreetModal(false);
  };

  // Edit Street
  const handleEditStreet = (streetData: Omit<Street, 'id'>) => {
    if (!selectedGovernorate || !selectedCenter || !editingStreet) return;

    const updatedStreet: Street = {
      ...streetData,
      id: editingStreet.id,
    };

    const updatedData = data.map(gov => {
      if (gov.id === selectedGovernorate.id) {
        const updatedGov = {
          ...gov,
          centers: gov.centers.map(center => {
            if (center.id === selectedCenter.id) {
              const updatedCenter = {
                ...center,
                streets: center.streets.map(street => 
                  street.id === editingStreet.id ? updatedStreet : street
                )
              };
              setSelectedCenter(updatedCenter);
              return updatedCenter;
            }
            return center;
          })
        };
        setSelectedGovernorate(updatedGov);
        return updatedGov;
      }
      return gov;
    });

    setData(updatedData);
    setShowEditStreetModal(false);
    setEditingStreet(null);
  };

  // Delete Street
  const handleDeleteStreet = (street: Street) => {
    setDeleteItem({ type: 'street', item: street });
    setShowDeleteModal(true);
  };

  // Confirm Delete
  const handleConfirmDelete = () => {
    if (!deleteItem || !selectedGovernorate) return;

    if (deleteItem.type === 'center') {
      const updatedData = data.map(gov => {
        if (gov.id === selectedGovernorate.id) {
          const updatedGov = {
            ...gov,
            centers: gov.centers.filter(center => center.id !== deleteItem.item.id)
          };
          setSelectedGovernorate(updatedGov);
          return updatedGov;
        }
        return gov;
      });
      setData(updatedData);
    } else if (deleteItem.type === 'street' && selectedCenter) {
      const updatedData = data.map(gov => {
        if (gov.id === selectedGovernorate.id) {
          const updatedGov = {
            ...gov,
            centers: gov.centers.map(center => {
              if (center.id === selectedCenter.id) {
                const updatedCenter = {
                  ...center,
                  streets: center.streets.filter(street => street.id !== deleteItem.item.id)
                };
                setSelectedCenter(updatedCenter);
                return updatedCenter;
              }
              return center;
            })
          };
          setSelectedGovernorate(updatedGov);
          return updatedGov;
        }
        return gov;
      });
      setData(updatedData);
    }

    setShowDeleteModal(false);
    setDeleteItem(null);
  };

  const getBreadcrumbItems = () => {
    const items = [];
    
    if (currentView === 'centers' && selectedGovernorate) {
      items.push(
        { label: 'المحافظات', onClick: handleBackToGovernorates },
        { label: selectedGovernorate.name }
      );
    } else if (currentView === 'streets' && selectedGovernorate && selectedCenter) {
      items.push(
        { label: 'المحافظات', onClick: handleBackToGovernorates },
        { label: selectedGovernorate.name, onClick: handleBackToCenters },
        { label: selectedCenter.name }
      );
    } else {
      items.push({ label: 'المحافظات' });
    }
    
    return items;
  };

  const getSearchPlaceholder = () => {
    switch (currentView) {
      case 'governorates':
        return 'ابحث عن محافظة...';
      case 'centers':
        return 'ابحث عن مركز...';
      case 'streets':
        return 'ابحث عن شارع أو تخصص...';
      default:
        return 'بحث...';
    }
  };

  const getTotalStats = () => {
    const totalGovernorates = data.length;
    const totalCenters = data.reduce((total, gov) => total + gov.centers.length, 0);
    const totalStreets = data.reduce((total, gov) => 
      total + gov.centers.reduce((centerTotal, center) => centerTotal + center.streets.length, 0), 0
    );
    const totalShops = data.reduce((total, gov) => 
      total + gov.centers.reduce((centerTotal, center) => 
        centerTotal + center.streets.reduce((streetTotal, street) => streetTotal + street.shops, 0), 0
      ), 0
    );

    return { totalGovernorates, totalCenters, totalStreets, totalShops };
  };

  const stats = getTotalStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">دليل الأدوات الكهربائية</h1>
                <p className="text-gray-600">محافظات مصر ومراكز بيع المستلزمات الكهربائية</p>
              </div>
            </div>
            
            {currentView !== 'governorates' && (
              <button
                onClick={currentView === 'centers' ? handleBackToGovernorates : handleBackToCenters}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
                <span>رجوع</span>
              </button>
            )}
          </div>

          {/* Stats Bar */}
          {currentView === 'governorates' && (
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{stats.totalGovernorates}</div>
                <div className="text-sm text-blue-800">محافظة</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{stats.totalCenters}</div>
                <div className="text-sm text-green-800">مركز</div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600">{stats.totalStreets}</div>
                <div className="text-sm text-yellow-800">شارع متخصص</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">{stats.totalShops.toLocaleString()}</div>
                <div className="text-sm text-purple-800">محل تجاري</div>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={getBreadcrumbItems()} />

        {/* Search and Add Button */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex-1">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder={getSearchPlaceholder()}
            />
          </div>
          
          {/* Add Buttons */}
          {currentView === 'centers' && selectedGovernorate && (
            <button
              onClick={() => setShowAddCenterModal(true)}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              إضافة مركز جديد
            </button>
          )}
          
          {currentView === 'streets' && selectedCenter && (
            <button
              onClick={() => setShowAddStreetModal(true)}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              إضافة شارع جديد
            </button>
          )}
        </div>

        {/* Content */}
        {currentView === 'governorates' && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">المحافظات</h2>
              <p className="text-gray-600">اختر محافظة لعرض المراكز المتخصصة في الأدوات الكهربائية</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGovernorates.map((governorate) => (
                <GovernorateCard
                  key={governorate.id}
                  governorate={governorate}
                  onClick={() => handleGovernorateSelect(governorate)}
                />
              ))}
            </div>
          </div>
        )}

        {currentView === 'centers' && selectedGovernorate && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">مراكز {selectedGovernorate.name}</h2>
              <p className="text-gray-600">اختر مركز لعرض الشوارع المتخصصة في الأدوات الكهربائية</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCenters.map((center) => (
                <CenterCard
                  key={center.id}
                  center={center}
                  onClick={() => handleCenterSelect(center)}
                  onEdit={(center) => {
                    setEditingCenter(center);
                    setShowEditCenterModal(true);
                  }}
                  onDelete={handleDeleteCenter}
                  showActions={true}
                />
              ))}
            </div>
          </div>
        )}

        {currentView === 'streets' && selectedCenter && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">شوارع {selectedCenter.name}</h2>
              <p className="text-gray-600">الشوارع المتخصصة في بيع الأدوات الكهربائية والإضاءة</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredStreets.map((street) => (
                <StreetCard 
                  key={street.id} 
                  street={street}
                  onEdit={(street) => {
                    setEditingStreet(street);
                    setShowEditStreetModal(true);
                  }}
                  onDelete={handleDeleteStreet}
                  showActions={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {((currentView === 'governorates' && filteredGovernorates.length === 0) ||
          (currentView === 'centers' && filteredCenters.length === 0) ||
          (currentView === 'streets' && filteredStreets.length === 0)) && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">لا توجد نتائج</h3>
            <p className="text-gray-600">جرب البحث بكلمات مختلفة</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>دليل شامل لمحلات الأدوات الكهربائية في جمهورية مصر العربية</p>
            <p className="mt-2 text-sm">يشمل جميع المحافظات الـ 27 مع {stats.totalShops.toLocaleString()} محل تجاري</p>
            <p className="mt-1 text-xs text-gray-500">جميع البيانات قابلة للتحديث والتطوير</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showAddCenterModal && (
        <AddCenterModal
          onClose={() => setShowAddCenterModal(false)}
          onAdd={handleAddCenter}
        />
      )}

      {showAddStreetModal && (
        <AddStreetModal
          onClose={() => setShowAddStreetModal(false)}
          onAdd={handleAddStreet}
        />
      )}

      {showEditCenterModal && editingCenter && (
        <EditCenterModal
          center={editingCenter}
          onClose={() => {
            setShowEditCenterModal(false);
            setEditingCenter(null);
          }}
          onSave={handleEditCenter}
        />
      )}

      {showEditStreetModal && editingStreet && (
        <EditStreetModal
          street={editingStreet}
          onClose={() => {
            setShowEditStreetModal(false);
            setEditingStreet(null);
          }}
          onSave={handleEditStreet}
        />
      )}

      {showDeleteModal && deleteItem && (
        <DeleteConfirmModal
          itemName={deleteItem.item.name}
          itemType={deleteItem.type === 'center' ? 'المركز' : 'الشارع'}
          onClose={() => {
            setShowDeleteModal(false);
            setDeleteItem(null);
          }}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
}

export default App;