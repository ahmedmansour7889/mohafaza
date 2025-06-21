import React, { useState, useMemo } from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import { egyptData } from './data/egyptData';
import { GovernorateCard } from './components/GovernorateCard';
import { CenterCard } from './components/CenterCard';
import { StreetCard } from './components/StreetCard';
import { SearchBar } from './components/SearchBar';
import { Breadcrumb } from './components/Breadcrumb';
import { Governorate, Center } from './types';

type ViewState = 'governorates' | 'centers' | 'streets';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('governorates');
  const [selectedGovernorate, setSelectedGovernorate] = useState<Governorate | null>(null);
  const [selectedCenter, setSelectedCenter] = useState<Center | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGovernorates = useMemo(() => {
    if (!searchQuery) return egyptData;
    return egyptData.filter(gov => 
      gov.name.includes(searchQuery) || 
      gov.nameEn.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

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
    setSelectedGovernorate(governorate);
    setCurrentView('centers');
    setSearchQuery('');
  };

  const handleCenterSelect = (center: Center) => {
    setSelectedCenter(center);
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
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={getBreadcrumbItems()} />

        {/* Search */}
        <div className="mb-8">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={getSearchPlaceholder()}
          />
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
                <StreetCard key={street.id} street={street} />
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
            <p className="mt-2 text-sm">جميع البيانات قابلة للتحديث والتطوير</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;