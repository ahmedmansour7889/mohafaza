import { Governorate } from '../types';

export const egyptData: Governorate[] = [
  {
    id: 'cairo',
    name: 'القاهرة',
    nameEn: 'Cairo',
    centers: [
      {
        id: 'old-cairo',
        name: 'القاهرة القديمة',
        streets: [
          {
            id: 'muski',
            name: 'شارع الموسكي',
            description: 'من أشهر شوارع الأدوات الكهربائية في القاهرة، يضم محلات متنوعة للإضاءة والأدوات الكهربائية',
            specialties: ['إضاءة منزلية', 'أدوات كهربائية', 'مفاتيح وقوابس', 'كابلات'],
            shops: 85
          },
          {
            id: 'azhar',
            name: 'شارع الأزهر',
            description: 'شارع تجاري مهم يحتوي على محلات الأدوات الكهربائية والإضاءة',
            specialties: ['إضاءة تجارية', 'أدوات صناعية', 'مولدات كهرباء'],
            shops: 45
          }
        ]
      },
      {
        id: 'heliopolis',
        name: 'مصر الجديدة',
        streets: [
          {
            id: 'baghdad',
            name: 'شارع بغداد',
            description: 'منطقة تجارية راقية تضم محلات الإضاءة الحديثة والأدوات الكهربائية المتطورة',
            specialties: ['إضاءة ديكورية', 'أنظمة ذكية', 'إضاءة LED'],
            shops: 32
          }
        ]
      },
      {
        id: 'nasr-city',
        name: 'مدينة نصر',
        streets: [
          {
            id: 'makram-ebeid',
            name: 'شارع مكرم عبيد',
            description: 'شارع تجاري حيوي يحتوي على محلات الأدوات الكهربائية والإلكترونيات',
            specialties: ['أجهزة كهربائية', 'إضاءة منزلية', 'أدوات صيانة'],
            shops: 28
          }
        ]
      }
    ]
  },
  {
    id: 'giza',
    name: 'الجيزة',
    nameEn: 'Giza',
    centers: [
      {
        id: 'giza-center',
        name: 'مركز الجيزة',
        streets: [
          {
            id: 'haram',
            name: 'شارع الهرم',
            description: 'شارع رئيسي يضم العديد من محلات الأدوات الكهربائية والإضاءة',
            specialties: ['إضاءة منزلية', 'أدوات كهربائية', 'مراوح سقف'],
            shops: 65
          },
          {
            id: 'sudan',
            name: 'شارع السودان',
            description: 'منطقة تجارية مهمة للأدوات الكهربائية في الجيزة',
            specialties: ['كابلات كهربائية', 'مفاتيح', 'لوحات توزيع'],
            shops: 42
          }
        ]
      },
      {
        id: 'dokki',
        name: 'الدقي',
        streets: [
          {
            id: 'tahrir',
            name: 'شارع التحرير',
            description: 'يحتوي على محلات متخصصة في الإضاءة الحديثة والأدوات الكهربائية',
            specialties: ['إضاءة ديكورية', 'أنظمة إضاءة ذكية'],
            shops: 25
          }
        ]
      },
      {
        id: 'october',
        name: 'أكتوبر',
        streets: [
          {
            id: 'central-axis',
            name: 'المحور المركزي',
            description: 'منطقة حديثة تضم محلات الأدوات الكهربائية والإلكترونيات المتطورة',
            specialties: ['أنظمة ذكية', 'إضاءة LED', 'أتمتة منزلية'],
            shops: 38
          }
        ]
      }
    ]
  },
  {
    id: 'alexandria',
    name: 'الإسكندرية',
    nameEn: 'Alexandria',
    centers: [
      {
        id: 'alexandria-center',
        name: 'وسط الإسكندرية',
        streets: [
          {
            id: 'fouad',
            name: 'شارع فؤاد',
            description: 'شارع تجاري تاريخي يضم محلات الأدوات الكهربائية والإضاءة',
            specialties: ['إضاءة بحرية', 'أدوات كهربائية مقاومة للرطوبة', 'كابلات بحرية'],
            shops: 55
          },
          {
            id: 'salah-salem',
            name: 'شارع صلاح سالم',
            description: 'منطقة تجارية مهمة للأدوات الكهربائية في الإسكندرية',
            specialties: ['مولدات كهرباء', 'أدوات صناعية', 'إضاءة خارجية'],
            shops: 48
          }
        ]
      },
      {
        id: 'montaza',
        name: 'المنتزه',
        streets: [
          {
            id: 'gamal-abdelnasser',
            name: 'شارع جمال عبد الناصر',
            description: 'يحتوي على محلات الأدوات الكهربائية والإضاءة الحديثة',
            specialties: ['إضاءة منزلية', 'أجهزة كهربائية'],
            shops: 32
          }
        ]
      }
    ]
  },
  {
    id: 'qalyubia',
    name: 'القليوبية',
    nameEn: 'Qalyubia',
    centers: [
      {
        id: 'benha',
        name: 'بنها',
        streets: [
          {
            id: 'benha-main',
            name: 'شارع الجمهورية',
            description: 'الشارع الرئيسي في بنها للأدوات الكهربائية',
            specialties: ['أدوات زراعية كهربائية', 'مضخات مياه', 'إضاءة'],
            shops: 35
          }
        ]
      },
      {
        id: 'shubra-el-kheima',
        name: 'شبرا الخيمة',
        streets: [
          {
            id: 'shubra-main',
            name: 'شارع شبرا',
            description: 'منطقة صناعية مهمة للأدوات الكهربائية',
            specialties: ['أدوات صناعية', 'محركات كهربائية', 'لوحات تحكم'],
            shops: 62
          }
        ]
      },
      {
        id: 'qalyub',
        name: 'قليوب',
        streets: [
          {
            id: 'qalyub-center',
            name: 'وسط قليوب',
            description: 'مركز تجاري للأدوات الكهربائية في قليوب',
            specialties: ['إضاءة منزلية', 'أدوات كهربائية أساسية'],
            shops: 28
          }
        ]
      }
    ]
  },
  {
    id: 'beheira',
    name: 'البحيرة',
    nameEn: 'Beheira',
    centers: [
      {
        id: 'damanhour',
        name: 'دمنهور',
        streets: [
          {
            id: 'damanhour-center',
            name: 'وسط دمنهور',
            description: 'المركز التجاري الرئيسي للأدوات الكهربائية في البحيرة',
            specialties: ['مضخات ري', 'أدوات زراعية كهربائية', 'إضاءة'],
            shops: 45
          }
        ]
      },
      {
        id: 'kafr-el-dawar',
        name: 'كفر الدوار',
        streets: [
          {
            id: 'kafr-dawar-industrial',
            name: 'المنطقة الصناعية',
            description: 'منطقة صناعية تضم محلات الأدوات الكهربائية الصناعية',
            specialties: ['أدوات صناعية', 'محركات', 'معدات كهربائية ثقيلة'],
            shops: 38
          }
        ]
      }
    ]
  },
  {
    id: 'dakahlia',
    name: 'الدقهلية',
    nameEn: 'Dakahlia',
    centers: [
      {
        id: 'mansoura',
        name: 'المنصورة',
        streets: [
          {
            id: 'mansoura-center',
            name: 'وسط المنصورة',
            description: 'المركز التجاري الرئيسي للأدوات الكهربائية في الدقهلية',
            specialties: ['إضاءة طبية', 'أدوات كهربائية متخصصة', 'أنظمة إنذار'],
            shops: 52
          }
        ]
      },
      {
        id: 'mit-ghamr',
        name: 'ميت غمر',
        streets: [
          {
            id: 'mit-ghamr-main',
            name: 'الشارع الرئيسي',
            description: 'شارع تجاري يضم محلات الأدوات الكهربائية',
            specialties: ['أدوات منزلية', 'إضاءة', 'مراوح'],
            shops: 25
          }
        ]
      }
    ]
  },
  {
    id: 'gharbia',
    name: 'الغربية',
    nameEn: 'Gharbia',
    centers: [
      {
        id: 'tanta',
        name: 'طنطا',
        streets: [
          {
            id: 'tanta-center',
            name: 'وسط طنطا',
            description: 'المركز التجاري للأدوات الكهربائية في الغربية',
            specialties: ['أدوات نسيج كهربائية', 'محركات صناعية', 'إضاءة'],
            shops: 48
          }
        ]
      },
      {
        id: 'mahalla',
        name: 'المحلة الكبرى',
        streets: [
          {
            id: 'mahalla-industrial',
            name: 'المنطقة الصناعية',
            description: 'منطقة صناعية مهمة للأدوات الكهربائية الصناعية',
            specialties: ['معدات نسيج', 'محركات كهربائية', 'لوحات تحكم'],
            shops: 65
          }
        ]
      }
    ]
  },
  {
    id: 'monufia',
    name: 'المنوفية',
    nameEn: 'Monufia',
    centers: [
      {
        id: 'shibin-el-kom',
        name: 'شبين الكوم',
        streets: [
          {
            id: 'shibin-center',
            name: 'وسط شبين الكوم',
            description: 'المركز التجاري للأدوات الكهربائية في المنوفية',
            specialties: ['أدوات زراعية', 'مضخات', 'إضاءة منزلية'],
            shops: 32
          }
        ]
      },
      {
        id: 'quwaysna',
        name: 'قويسنا',
        streets: [
          {
            id: 'quwaysna-main',
            name: 'الشارع الرئيسي',
            description: 'شارع تجاري للأدوات الكهربائية',
            specialties: ['أدوات كهربائية أساسية', 'إضاءة'],
            shops: 18
          }
        ]
      }
    ]
  },
  {
    id: 'sharqia',
    name: 'الشرقية',
    nameEn: 'Sharqia',
    centers: [
      {
        id: 'zagazig',
        name: 'الزقازيق',
        streets: [
          {
            id: 'zagazig-center',
            name: 'وسط الزقازيق',
            description: 'المركز التجاري الرئيسي للأدوات الكهربائية في الشرقية',
            specialties: ['أدوات زراعية كهربائية', 'مضخات ري', 'إضاءة'],
            shops: 55
          }
        ]
      },
      {
        id: 'tenth-ramadan',
        name: 'العاشر من رمضان',
        streets: [
          {
            id: 'tenth-industrial',
            name: 'المنطقة الصناعية',
            description: 'مدينة صناعية حديثة تضم محلات الأدوات الكهربائية المتطورة',
            specialties: ['معدات صناعية', 'أنظمة تحكم', 'أتمتة صناعية'],
            shops: 72
          }
        ]
      }
    ]
  },
  {
    id: 'kafr-el-sheikh',
    name: 'كفر الشيخ',
    nameEn: 'Kafr El Sheikh',
    centers: [
      {
        id: 'kafr-sheikh-center',
        name: 'كفر الشيخ',
        streets: [
          {
            id: 'kafr-sheikh-main',
            name: 'الشارع الرئيسي',
            description: 'المركز التجاري للأدوات الكهربائية في كفر الشيخ',
            specialties: ['أدوات صيد كهربائية', 'مضخات مياه', 'إضاءة بحرية'],
            shops: 35
          }
        ]
      },
      {
        id: 'desouk',
        name: 'دسوق',
        streets: [
          {
            id: 'desouk-center',
            name: 'وسط دسوق',
            description: 'منطقة تجارية للأدوات الكهربائية',
            specialties: ['أدوات منزلية', 'إضاءة', 'مراوح'],
            shops: 22
          }
        ]
      }
    ]
  },
  {
    id: 'damietta',
    name: 'دمياط',
    nameEn: 'Damietta',
    centers: [
      {
        id: 'damietta-center',
        name: 'دمياط',
        streets: [
          {
            id: 'damietta-port',
            name: 'منطقة الميناء',
            description: 'منطقة تجارية بحرية تضم محلات الأدوات الكهربائية البحرية',
            specialties: ['إضاءة بحرية', 'أدوات مقاومة للمياه', 'معدات صيد'],
            shops: 28
          }
        ]
      },
      {
        id: 'new-damietta',
        name: 'دمياط الجديدة',
        streets: [
          {
            id: 'new-damietta-industrial',
            name: 'المنطقة الصناعية',
            description: 'منطقة صناعية حديثة للأدوات الكهربائية',
            specialties: ['معدات أثاث كهربائية', 'أدوات نجارة', 'إضاءة صناعية'],
            shops: 42
          }
        ]
      }
    ]
  },
  {
    id: 'port-said',
    name: 'بورسعيد',
    nameEn: 'Port Said',
    centers: [
      {
        id: 'port-said-center',
        name: 'وسط بورسعيد',
        streets: [
          {
            id: 'port-said-main',
            name: 'شارع الجمهورية',
            description: 'الشارع الرئيسي للأدوات الكهربائية في بورسعيد',
            specialties: ['أدوات بحرية كهربائية', 'إضاءة موانئ', 'معدات شحن'],
            shops: 38
          },
          {
            id: 'port-said-free-zone',
            name: 'المنطقة الحرة',
            description: 'منطقة تجارية حرة تضم محلات الأدوات الكهربائية المستوردة',
            specialties: ['أدوات مستوردة', 'إلكترونيات', 'أنظمة متطورة'],
            shops: 55
          }
        ]
      }
    ]
  },
  {
    id: 'ismailia',
    name: 'الإسماعيلية',
    nameEn: 'Ismailia',
    centers: [
      {
        id: 'ismailia-center',
        name: 'الإسماعيلية',
        streets: [
          {
            id: 'ismailia-main',
            name: 'شارع صلاح سالم',
            description: 'الشارع الرئيسي للأدوات الكهربائية في الإسماعيلية',
            specialties: ['أدوات قناة السويس', 'إضاءة مائية', 'معدات بحرية'],
            shops: 32
          }
        ]
      },
      {
        id: 'fayed',
        name: 'الفايد',
        streets: [
          {
            id: 'fayed-center',
            name: 'وسط الفايد',
            description: 'منطقة تجارية للأدوات الكهربائية',
            specialties: ['أدوات منزلية', 'إضاءة', 'مراوح'],
            shops: 15
          }
        ]
      }
    ]
  },
  {
    id: 'suez',
    name: 'السويس',
    nameEn: 'Suez',
    centers: [
      {
        id: 'suez-center',
        name: 'وسط السويس',
        streets: [
          {
            id: 'suez-main',
            name: 'شارع الجيش',
            description: 'الشارع الرئيسي للأدوات الكهربائية في السويس',
            specialties: ['معدات بترولية كهربائية', 'أدوات صناعية', 'إضاءة مقاومة للحرارة'],
            shops: 45
          },
          {
            id: 'suez-port',
            name: 'منطقة الميناء',
            description: 'منطقة الميناء التجارية للأدوات الكهربائية البحرية',
            specialties: ['إضاءة بحرية', 'معدات شحن', 'أنظمة ملاحة'],
            shops: 28
          }
        ]
      }
    ]
  },
  {
    id: 'north-sinai',
    name: 'شمال سيناء',
    nameEn: 'North Sinai',
    centers: [
      {
        id: 'arish',
        name: 'العريش',
        streets: [
          {
            id: 'arish-center',
            name: 'وسط العريش',
            description: 'المركز التجاري للأدوات الكهربائية في شمال سيناء',
            specialties: ['أنظمة طاقة شمسية', 'إضاءة صحراوية', 'مولدات'],
            shops: 25
          }
        ]
      }
    ]
  },
  {
    id: 'south-sinai',
    name: 'جنوب سيناء',
    nameEn: 'South Sinai',
    centers: [
      {
        id: 'sharm-el-sheikh',
        name: 'شرم الشيخ',
        streets: [
          {
            id: 'sharm-center',
            name: 'وسط شرم الشيخ',
            description: 'منطقة سياحية تضم محلات الأدوات الكهربائية للفنادق والمنتجعات',
            specialties: ['إضاءة فندقية', 'أنظمة تكييف', 'إضاءة حمامات سباحة'],
            shops: 32
          }
        ]
      },
      {
        id: 'dahab',
        name: 'دهب',
        streets: [
          {
            id: 'dahab-center',
            name: 'وسط دهب',
            description: 'منطقة سياحية للأدوات الكهربائية',
            specialties: ['أنظمة طاقة شمسية', 'إضاءة خارجية'],
            shops: 18
          }
        ]
      }
    ]
  },
  {
    id: 'red-sea',
    name: 'البحر الأحمر',
    nameEn: 'Red Sea',
    centers: [
      {
        id: 'hurghada',
        name: 'الغردقة',
        streets: [
          {
            id: 'hurghada-center',
            name: 'وسط الغردقة',
            description: 'المركز السياحي للأدوات الكهربائية في البحر الأحمر',
            specialties: ['إضاءة فندقية', 'أنظمة تكييف بحرية', 'معدات غوص كهربائية'],
            shops: 42
          }
        ]
      },
      {
        id: 'safaga',
        name: 'سفاجا',
        streets: [
          {
            id: 'safaga-port',
            name: 'منطقة الميناء',
            description: 'منطقة ميناء تجاري للأدوات الكهربائية',
            specialties: ['معدات ميناء', 'إضاءة بحرية'],
            shops: 22
          }
        ]
      }
    ]
  },
  {
    id: 'matrouh',
    name: 'مطروح',
    nameEn: 'Matrouh',
    centers: [
      {
        id: 'marsa-matrouh',
        name: 'مرسى مطروح',
        streets: [
          {
            id: 'matrouh-center',
            name: 'وسط مرسى مطروح',
            description: 'المركز التجاري للأدوات الكهربائية في مطروح',
            specialties: ['أنظمة طاقة شمسية', 'إضاءة ساحلية', 'مولدات رياح'],
            shops: 28
          }
        ]
      }
    ]
  },
  {
    id: 'beni-suef',
    name: 'بني سويف',
    nameEn: 'Beni Suef',
    centers: [
      {
        id: 'beni-suef-center',
        name: 'بني سويف',
        streets: [
          {
            id: 'beni-suef-main',
            name: 'شارع الجمهورية',
            description: 'الشارع الرئيسي للأدوات الكهربائية في بني سويف',
            specialties: ['أدوات زراعية', 'مضخات ري', 'إضاءة منزلية'],
            shops: 38
          }
        ]
      },
      {
        id: 'wasta',
        name: 'الواسطى',
        streets: [
          {
            id: 'wasta-center',
            name: 'وسط الواسطى',
            description: 'منطقة تجارية للأدوات الكهربائية',
            specialties: ['أدوات منزلية', 'إضاءة'],
            shops: 22
          }
        ]
      }
    ]
  },
  {
    id: 'fayoum',
    name: 'الفيوم',
    nameEn: 'Fayoum',
    centers: [
      {
        id: 'fayoum-center',
        name: 'الفيوم',
        streets: [
          {
            id: 'fayoum-main',
            name: 'شارع السعد الأعلى',
            description: 'الشارع الرئيسي للأدوات الكهربائية في الفيوم',
            specialties: ['مضخات مياه', 'أدوات زراعية', 'أنظمة ري كهربائية'],
            shops: 45
          }
        ]
      },
      {
        id: 'tamiya',
        name: 'طامية',
        streets: [
          {
            id: 'tamiya-center',
            name: 'وسط طامية',
            description: 'منطقة زراعية تضم محلات الأدوات الكهربائية الزراعية',
            specialties: ['معدات ري', 'مضخات', 'أدوات زراعية'],
            shops: 25
          }
        ]
      }
    ]
  },
  {
    id: 'minya',
    name: 'المنيا',
    nameEn: 'Minya',
    centers: [
      {
        id: 'minya-center',
        name: 'المنيا',
        streets: [
          {
            id: 'minya-main',
            name: 'شارع كورنيش النيل',
            description: 'الشارع الرئيسي للأدوات الكهربائية في المنيا',
            specialties: ['أدوات زراعية', 'مضخات نيلية', 'إضاءة منزلية'],
            shops: 52
          }
        ]
      },
      {
        id: 'mallawi',
        name: 'ملوي',
        streets: [
          {
            id: 'mallawi-center',
            name: 'وسط ملوي',
            description: 'منطقة تجارية للأدوات الكهربائية',
            specialties: ['أدوات منزلية', 'مضخات', 'إضاءة'],
            shops: 28
          }
        ]
      }
    ]
  },
  {
    id: 'asyut',
    name: 'أسيوط',
    nameEn: 'Asyut',
    centers: [
      {
        id: 'asyut-center',
        name: 'أسيوط',
        streets: [
          {
            id: 'asyut-main',
            name: 'شارع الثورة',
            description: 'الشارع الرئيسي للأدوات الكهربائية في أسيوط',
            specialties: ['أدوات زراعية متطورة', 'مضخات عميقة', 'أنظمة ري حديثة'],
            shops: 58
          }
        ]
      },
      {
        id: 'abnub',
        name: 'أبنوب',
        streets: [
          {
            id: 'abnub-center',
            name: 'وسط أبنوب',
            description: 'منطقة زراعية للأدوات الكهربائية',
            specialties: ['معدات زراعية', 'مضخات'],
            shops: 22
          }
        ]
      }
    ]
  },
  {
    id: 'sohag',
    name: 'سوهاج',
    nameEn: 'Sohag',
    centers: [
      {
        id: 'sohag-center',
        name: 'سوهاج',
        streets: [
          {
            id: 'sohag-main',
            name: 'شارع الجمهورية',
            description: 'الشارع الرئيسي للأدوات الكهربائية في سوهاج',
            specialties: ['أدوات زراعية', 'مضخات آبار', 'إضاءة ريفية'],
            shops: 48
          }
        ]
      },
      {
        id: 'akhmim',
        name: 'أخميم',
        streets: [
          {
            id: 'akhmim-center',
            name: 'وسط أخميم',
            description: 'منطقة تجارية تاريخية للأدوات الكهربائية',
            specialties: ['أدوات حرفية كهربائية', 'إضاءة تقليدية'],
            shops: 25
          }
        ]
      }
    ]
  },
  {
    id: 'qena',
    name: 'قنا',
    nameEn: 'Qena',
    centers: [
      {
        id: 'qena-center',
        name: 'قنا',
        streets: [
          {
            id: 'qena-main',
            name: 'شارع المحطة',
            description: 'الشارع الرئيسي للأدوات الكهربائية في قنا',
            specialties: ['أدوات زراعية صحراوية', 'مضخات عميقة', 'أنظمة طاقة شمسية'],
            shops: 42
          }
        ]
      },
      {
        id: 'nag-hammadi',
        name: 'نجع حمادي',
        streets: [
          {
            id: 'nag-hammadi-industrial',
            name: 'المنطقة الصناعية',
            description: 'منطقة صناعية تضم محلات الأدوات الكهربائية الصناعية',
            specialties: ['معدات صناعية', 'محركات كبيرة', 'أنظمة تحكم'],
            shops: 35
          }
        ]
      }
    ]
  },
  {
    id: 'luxor',
    name: 'الأقصر',
    nameEn: 'Luxor',
    centers: [
      {
        id: 'luxor-center',
        name: 'الأقصر',
        streets: [
          {
            id: 'luxor-main',
            name: 'شارع التلفزيون',
            description: 'الشارع الرئيسي للأدوات الكهربائية في الأقصر',
            specialties: ['إضاءة أثرية', 'أنظمة أمان متاحف', 'إضاءة فندقية سياحية'],
            shops: 38
          },
          {
            id: 'luxor-tourist',
            name: 'المنطقة السياحية',
            description: 'منطقة سياحية تضم محلات الأدوات الكهربائية للفنادق',
            specialties: ['إضاءة ديكورية', 'أنظمة صوتية', 'إضاءة حدائق'],
            shops: 28
          }
        ]
      }
    ]
  },
  {
    id: 'aswan',
    name: 'أسوان',
    nameEn: 'Aswan',
    centers: [
      {
        id: 'aswan-center',
        name: 'أسوان',
        streets: [
          {
            id: 'aswan-main',
            name: 'شارع أبطال التحرير',
            description: 'الشارع الرئيسي للأدوات الكهربائية في أسوان',
            specialties: ['معدات السد العالي', 'أنظمة طاقة مائية', 'إضاءة مقاومة للحرارة'],
            shops: 45
          },
          {
            id: 'aswan-tourist',
            name: 'المنطقة السياحية',
            description: 'منطقة سياحية نوبية تضم محلات الأدوات الكهربائية',
            specialties: ['إضاءة نوبية تقليدية', 'أنظمة فندقية'],
            shops: 22
          }
        ]
      }
    ]
  },
  {
    id: 'new-valley',
    name: 'الوادي الجديد',
    nameEn: 'New Valley',
    centers: [
      {
        id: 'kharga',
        name: 'الخارجة',
        streets: [
          {
            id: 'kharga-center',
            name: 'وسط الخارجة',
            description: 'المركز الرئيسي للأدوات الكهربائية في الوادي الجديد',
            specialties: ['أنظمة طاقة شمسية صحراوية', 'مضخات آبار عميقة', 'إضاءة صحراوية'],
            shops: 32
          }
        ]
      },
      {
        id: 'dakhla',
        name: 'الداخلة',
        streets: [
          {
            id: 'dakhla-center',
            name: 'وسط الداخلة',
            description: 'واحة الداخلة ومحلات الأدوات الكهربائية',
            specialties: ['أنظمة طاقة متجددة', 'مضخات واحات'],
            shops: 18
          }
        ]
      }
    ]
  }
];