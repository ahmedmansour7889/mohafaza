import { Governorate } from '../types';

export const egyptData: Governorate[] = [
  {
    id: 'cairo',
    name: 'القاهرة',
    nameEn: 'Cairo',
    centers: [
      {
        id: 'downtown-cairo',
        name: 'وسط القاهرة',
        streets: [
          {
            id: 'muski',
            name: 'شارع الموسكي',
            description: 'من أشهر شوارع الأدوات الكهربائية في القاهرة، يضم محلات متنوعة للإضاءة والأدوات الكهربائية',
            specialties: ['إضاءة منزلية', 'أدوات كهربائية', 'مفاتيح وقوابس', 'كابلات'],
            shops: 120
          },
          {
            id: 'azhar',
            name: 'شارع الأزهر',
            description: 'شارع تجاري مهم يحتوي على محلات الأدوات الكهربائية والإضاءة',
            specialties: ['إضاءة تجارية', 'أدوات صناعية', 'مولدات كهرباء'],
            shops: 65
          },
          {
            id: 'abdin',
            name: 'حي عابدين',
            description: 'منطقة تجارية تاريخية تضم محلات الأدوات الكهربائية',
            specialties: ['أدوات كهربائية كلاسيكية', 'إضاءة تقليدية'],
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
            shops: 55
          },
          {
            id: 'othman-ibn-affan',
            name: 'شارع عثمان بن عفان',
            description: 'شارع تجاري يحتوي على محلات الأدوات الكهربائية الحديثة',
            specialties: ['أجهزة كهربائية', 'إضاءة منزلية راقية'],
            shops: 38
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
            shops: 48
          },
          {
            id: 'abbas-el-akkad',
            name: 'شارع عباس العقاد',
            description: 'منطقة تجارية متطورة للأدوات الكهربائية',
            specialties: ['أنظمة ذكية', 'إضاءة LED', 'أتمتة منزلية'],
            shops: 42
          }
        ]
      },
      {
        id: 'shubra',
        name: 'شبرا',
        streets: [
          {
            id: 'shubra-street',
            name: 'شارع شبرا',
            description: 'شارع شعبي مهم يضم محلات الأدوات الكهربائية بأسعار مناسبة',
            specialties: ['أدوات كهربائية شعبية', 'إضاءة اقتصادية', 'قطع غيار'],
            shops: 85
          }
        ]
      },
      {
        id: 'maadi',
        name: 'المعادي',
        streets: [
          {
            id: 'maadi-corniche',
            name: 'كورنيش المعادي',
            description: 'منطقة راقية تضم محلات الإضاءة والأدوات الكهربائية الفاخرة',
            specialties: ['إضاءة فاخرة', 'أنظمة منزلية ذكية', 'إضاءة حدائق'],
            shops: 32
          }
        ]
      },
      {
        id: 'helwan',
        name: 'حلوان',
        streets: [
          {
            id: 'helwan-industrial',
            name: 'المنطقة الصناعية',
            description: 'منطقة صناعية تضم محلات الأدوات الكهربائية الصناعية',
            specialties: ['معدات صناعية', 'محركات كهربائية', 'لوحات تحكم'],
            shops: 68
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
            shops: 95
          },
          {
            id: 'sudan',
            name: 'شارع السودان',
            description: 'منطقة تجارية مهمة للأدوات الكهربائية في الجيزة',
            specialties: ['كابلات كهربائية', 'مفاتيح', 'لوحات توزيع'],
            shops: 58
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
            shops: 42
          },
          {
            id: 'mesaha',
            name: 'شارع المساحة',
            description: 'منطقة تجارية للأدوات الكهربائية المتخصصة',
            specialties: ['أدوات قياس كهربائية', 'معدات هندسية'],
            shops: 28
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
            shops: 65
          }
        ]
      },
      {
        id: 'sheikh-zayed',
        name: 'الشيخ زايد',
        streets: [
          {
            id: 'zayed-center',
            name: 'مركز الشيخ زايد',
            description: 'مدينة حديثة تضم محلات الأدوات الكهربائية المتطورة',
            specialties: ['أنظمة منزلية ذكية', 'إضاءة حديثة', 'طاقة شمسية'],
            shops: 48
          }
        ]
      },
      {
        id: 'badrashein',
        name: 'البدرشين',
        streets: [
          {
            id: 'badrashein-center',
            name: 'وسط البدرشين',
            description: 'مركز تجاري للأدوات الكهربائية الزراعية',
            specialties: ['مضخات مياه', 'أدوات زراعية كهربائية'],
            shops: 35
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
            shops: 78
          },
          {
            id: 'salah-salem',
            name: 'شارع صلاح سالم',
            description: 'منطقة تجارية مهمة للأدوات الكهربائية في الإسكندرية',
            specialties: ['مولدات كهرباء', 'أدوات صناعية', 'إضاءة خارجية'],
            shops: 65
          },
          {
            id: 'attarin',
            name: 'حي العطارين',
            description: 'حي تجاري تاريخي يضم محلات الأدوات الكهربائية',
            specialties: ['أدوات كهربائية تقليدية', 'قطع غيار'],
            shops: 42
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
            shops: 48
          }
        ]
      },
      {
        id: 'borg-el-arab',
        name: 'برج العرب',
        streets: [
          {
            id: 'borg-arab-industrial',
            name: 'المنطقة الصناعية',
            description: 'منطقة صناعية حديثة تضم محلات الأدوات الكهربائية الصناعية',
            specialties: ['معدات صناعية متطورة', 'أنظمة تحكم', 'محركات'],
            shops: 85
          }
        ]
      },
      {
        id: 'ameria',
        name: 'العامرية',
        streets: [
          {
            id: 'ameria-center',
            name: 'وسط العامرية',
            description: 'منطقة تجارية للأدوات الكهربائية',
            specialties: ['أدوات منزلية', 'إضاءة', 'مراوح'],
            shops: 38
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
            shops: 52
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
            shops: 88
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
            shops: 35
          }
        ]
      },
      {
        id: 'khanka',
        name: 'الخانكة',
        streets: [
          {
            id: 'khanka-center',
            name: 'وسط الخانكة',
            description: 'مركز تجاري للأدوات الكهربائية الزراعية',
            specialties: ['مضخات ري', 'أدوات زراعية'],
            shops: 28
          }
        ]
      },
      {
        id: 'qanater',
        name: 'القناطر الخيرية',
        streets: [
          {
            id: 'qanater-center',
            name: 'وسط القناطر',
            description: 'منطقة تجارية للأدوات الكهربائية',
            specialties: ['أدوات منزلية', 'إضاءة', 'مضخات'],
            shops: 32
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
            shops: 68
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
            shops: 55
          }
        ]
      },
      {
        id: 'rashid',
        name: 'رشيد',
        streets: [
          {
            id: 'rashid-port',
            name: 'منطقة الميناء',
            description: 'منطقة بحرية تضم محلات الأدوات الكهربائية البحرية',
            specialties: ['إضاءة بحرية', 'معدات صيد كهربائية'],
            shops: 32
          }
        ]
      },
      {
        id: 'abu-hummus',
        name: 'أبو حمص',
        streets: [
          {
            id: 'abu-hummus-center',
            name: 'وسط أبو حمص',
            description: 'مركز تجاري للأدوات الكهربائية الزراعية',
            specialties: ['أدوات زراعية', 'مضخات'],
            shops: 28
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
            shops: 75
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
            shops: 42
          }
        ]
      },
      {
        id: 'belqas',
        name: 'بلقاس',
        streets: [
          {
            id: 'belqas-center',
            name: 'وسط بلقاس',
            description: 'مركز تجاري للأدوات الكهربائية',
            specialties: ['أدوات زراعية', 'مضخات'],
            shops: 35
          }
        ]
      },
      {
        id: 'talkha',
        name: 'طلخا',
        streets: [
          {
            id: 'talkha-center',
            name: 'وسط طلخا',
            description: 'منطقة تجارية للأدوات الكهربائية',
            specialties: ['أدوات منزلية', 'إضاءة'],
            shops: 28
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
            shops: 72
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
            shops: 95
          }
        ]
      },
      {
        id: 'kafr-el-zayat',
        name: 'كفر الزيات',
        streets: [
          {
            id: 'kafr-zayat-center',
            name: 'وسط كفر الزيات',
            description: 'مركز تجاري للأدوات الكهربائية',
            specialties: ['أدوات صناعية', 'محركات'],
            shops: 38
          }
        ]
      },
      {
        id: 'zefta',
        name: 'زفتى',
        streets: [
          {
            id: 'zefta-center',
            name: 'وسط زفتى',
            description: 'منطقة تجارية للأدوات الكهربائية',
            specialties: ['أدوات منزلية', 'إضاءة'],
            shops: 32
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
            shops: 48
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
            shops: 25
          }
        ]
      },
      {
        id: 'menuf',
        name: 'منوف',
        streets: [
          {
            id: 'menuf-center',
            name: 'وسط منوف',
            description: 'مركز تجاري للأدوات الكهربائية',
            specialties: ['أدوات زراعية', 'مضخات'],
            shops: 32
          }
        ]
      },
      {
        id: 'ashmoun',
        name: 'أشمون',
        streets: [
          {
            id: 'ashmoun-center',
            name: 'وسط أشمون',
            description: 'منطقة تجارية للأدوات الكهربائية الزراعية',
            specialties: ['معدات ري', 'أدوات زراعية'],
            shops: 28
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
            shops: 78
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
            shops: 125
          }
        ]
      },
      {
        id: 'belbeis',
        name: 'بلبيس',
        streets: [
          {
            id: 'belbeis-center',
            name: 'وسط بلبيس',
            description: 'مركز تجاري للأدوات الكهربائية',
            specialties: ['أدوات زراعية', 'مضخات'],
            shops: 42
          }
        ]
      },
      {
        id: 'abu-kebir',
        name: 'أبو كبير',
        streets: [
          {
            id: 'abu-kebir-center',
            name: 'وسط أبو كبير',
            description: 'منطقة تجارية للأدوات الكهربائية الزراعية',
            specialties: ['معدات ري', 'أدوات زراعية'],
            shops: 35
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
            shops: 52
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
            shops: 35
          }
        ]
      },
      {
        id: 'fouh',
        name: 'فوه',
        streets: [
          {
            id: 'fouh-center',
            name: 'وسط فوه',
            description: 'منطقة تجارية بحرية للأدوات الكهربائية',
            specialties: ['معدات صيد', 'إضاءة بحرية'],
            shops: 28
          }
        ]
      },
      {
        id: 'metoubes',
        name: 'مطوبس',
        streets: [
          {
            id: 'metoubes-center',
            name: 'وسط مطوبس',
            description: 'مركز تجاري للأدوات الكهربائية الزراعية',
            specialties: ['أدوات زراعية', 'مضخات'],
            shops: 25
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
            shops: 45
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
            shops: 68
          }
        ]
      },
      {
        id: 'faraskur',
        name: 'فارسكور',
        streets: [
          {
            id: 'faraskur-center',
            name: 'وسط فارسكور',
            description: 'مركز تجاري للأدوات الكهربائية',
            specialties: ['أدوات منزلية', 'إضاءة'],
            shops: 32
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
            shops: 58
          },
          {
            id: 'port-said-free-zone',
            name: 'المنطقة الحرة',
            description: 'منطقة تجارية حرة تضم محلات الأدوات الكهربائية المستوردة',
            specialties: ['أدوات مستوردة', 'إلكترونيات', 'أنظمة متطورة'],
            shops: 85
          }
        ]
      },
      {
        id: 'port-fouad',
        name: 'بورفؤاد',
        streets: [
          {
            id: 'port-fouad-center',
            name: 'وسط بورفؤاد',
            description: 'منطقة تجارية للأدوات الكهربائية البحرية',
            specialties: ['معدات بحرية', 'إضاءة موانئ'],
            shops: 32
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
            shops: 48
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
            shops: 22
          }
        ]
      },
      {
        id: 'tel-el-kebir',
        name: 'التل الكبير',
        streets: [
          {
            id: 'tel-kebir-center',
            name: 'وسط التل الكبير',
            description: 'مركز تجاري للأدوات الكهربائية الزراعية',
            specialties: ['أدوات زراعية', 'مضخات'],
            shops: 28
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
            shops: 68
          },
          {
            id: 'suez-port',
            name: 'منطقة الميناء',
            description: 'منطقة الميناء التجارية للأدوات الكهربائية البحرية',
            specialties: ['إضاءة بحرية', 'معدات شحن', 'أنظمة ملاحة'],
            shops: 42
          }
        ]
      },
      {
        id: 'arbaeen',
        name: 'الأربعين',
        streets: [
          {
            id: 'arbaeen-center',
            name: 'وسط الأربعين',
            description: 'منطقة تجارية للأدوات الكهربائية',
            specialties: ['أدوات منزلية', 'إضاءة'],
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
            shops: 42
          }
        ]
      },
      {
        id: 'bir-el-abd',
        name: 'بئر العبد',
        streets: [
          {
            id: 'bir-abd-center',
            name: 'وسط بئر العبد',
            description: 'منطقة تجارية للأدوات الكهربائية الصحراوية',
            specialties: ['أنظمة طاقة شمسية', 'مولدات'],
            shops: 18
          }
        ]
      },
      {
        id: 'rafah',
        name: 'رفح',
        streets: [
          {
            id: 'rafah-center',
            name: 'وسط رفح',
            description: 'منطقة حدودية للأدوات الكهربائية',
            specialties: ['أدوات أساسية', 'مولدات'],
            shops: 15
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
            shops: 58
          },
          {
            id: 'naama-bay',
            name: 'خليج نعمة',
            description: 'منطقة سياحية راقية للأدوات الكهربائية الفندقية',
            specialties: ['إضاءة ديكورية فاخرة', 'أنظمة صوتية'],
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
            shops: 28
          }
        ]
      },
      {
        id: 'nuweiba',
        name: 'نويبع',
        streets: [
          {
            id: 'nuweiba-center',
            name: 'وسط نويبع',
            description: 'منطقة ساحلية للأدوات الكهربائية',
            specialties: ['إضاءة بحرية', 'أنظمة طاقة شمسية'],
            shops: 22
          }
        ]
      },
      {
        id: 'saint-catherine',
        name: 'سانت كاترين',
        streets: [
          {
            id: 'saint-catherine-center',
            name: 'وسط سانت كاترين',
            description: 'منطقة جبلية للأدوات الكهربائية',
            specialties: ['أنظمة طاقة شمسية', 'إضاءة جبلية'],
            shops: 15
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
            shops: 72
          },
          {
            id: 'sakkala',
            name: 'السقالة',
            description: 'منطقة سياحية تجارية للأدوات الكهربائية',
            specialties: ['إضاءة ديكورية', 'أنظمة فندقية'],
            shops: 38
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
            shops: 35
          }
        ]
      },
      {
        id: 'qusair',
        name: 'القصير',
        streets: [
          {
            id: 'qusair-center',
            name: 'وسط القصير',
            description: 'مدينة ساحلية تاريخية للأدوات الكهربائية',
            specialties: ['إضاءة بحرية', 'أدوات صيد'],
            shops: 25
          }
        ]
      },
      {
        id: 'marsa-alam',
        name: 'مرسى علم',
        streets: [
          {
            id: 'marsa-alam-center',
            name: 'وسط مرسى علم',
            description: 'منطقة سياحية حديثة للأدوات الكهربائية',
            specialties: ['إضاءة فندقية', 'أنظمة طاقة شمسية'],
            shops: 28
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
            shops: 48
          }
        ]
      },
      {
        id: 'siwa',
        name: 'واحة سيوة',
        streets: [
          {
            id: 'siwa-center',
            name: 'وسط سيوة',
            description: 'واحة صحراوية للأدوات الكهربائية',
            specialties: ['أنظمة طاقة شمسية', 'مضخات آبار', 'إضاءة صحراوية'],
            shops: 25
          }
        ]
      },
      {
        id: 'alamein',
        name: 'العلمين',
        streets: [
          {
            id: 'alamein-center',
            name: 'وسط العلمين',
            description: 'منطقة ساحلية سياحية للأدوات الكهربائية',
            specialties: ['إضاءة فندقية', 'أنظمة تكييف'],
            shops: 32
          }
        ]
      },
      {
        id: 'sidi-barani',
        name: 'سيدي براني',
        streets: [
          {
            id: 'sidi-barani-center',
            name: 'وسط سيدي براني',
            description: 'منطقة حدودية للأدوات الكهربائية',
            specialties: ['أدوات أساسية', 'مولدات'],
            shops: 18
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
            shops: 58
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
            shops: 32
          }
        ]
      },
      {
        id: 'naser',
        name: 'ناصر',
        streets: [
          {
            id: 'naser-center',
            name: 'وسط ناصر',
            description: 'مركز تجاري للأدوات الكهربائية الزراعية',
            specialties: ['أدوات زراعية', 'مضخات'],
            shops: 28
          }
        ]
      },
      {
        id: 'ihnasya',
        name: 'إهناسيا',
        streets: [
          {
            id: 'ihnasya-center',
            name: 'وسط إهناسيا',
            description: 'منطقة تجارية للأدوات الكهربائية',
            specialties: ['أدوات منزلية', 'مضخات'],
            shops: 25
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
            shops: 68
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
            shops: 38
          }
        ]
      },
      {
        id: 'sinnuris',
        name: 'سنورس',
        streets: [
          {
            id: 'sinnuris-center',
            name: 'وسط سنورس',
            description: 'مركز تجاري للأدوات الكهربائية الزراعية',
            specialties: ['أدوات زراعية', 'مضخات'],
            shops: 32
          }
        ]
      },
      {
        id: 'itsa',
        name: 'إطسا',
        streets: [
          {
            id: 'itsa-center',
            name: 'وسط إطسا',
            description: 'منطقة تجارية للأدوات الكهربائية',
            specialties: ['أدوات منزلية', 'مضخات'],
            shops: 28
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
            shops: 78
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
            shops: 42
          }
        ]
      },
      {
        id: 'abu-qurqas',
        name: 'أبو قرقاص',
        streets: [
          {
            id: 'abu-qurqas-center',
            name: 'وسط أبو قرقاص',
            description: 'مركز تجاري للأدوات الكهربائية الزراعية',
            specialties: ['أدوات زراعية', 'مضخات'],
            shops: 35
          }
        ]
      },
      {
        id: 'samalut',
        name: 'سمالوط',
        streets: [
          {
            id: 'samalut-center',
            name: 'وسط سمالوط',
            description: 'منطقة تجارية للأدوات الكهربائية',
            specialties: ['أدوات منزلية', 'مضخات'],
            shops: 32
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
            shops: 85
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
            shops: 35
          }
        ]
      },
      {
        id: 'dairut',
        name: 'ديروط',
        streets: [
          {
            id: 'dairut-center',
            name: 'وسط ديروط',
            description: 'مركز تجاري للأدوات الكهربائية',
            specialties: ['أدوات زراعية', 'مضخات'],
            shops: 42
          }
        ]
      },
      {
        id: 'qusiya',
        name: 'القوصية',
        streets: [
          {
            id: 'qusiya-center',
            name: 'وسط القوصية',
            description: 'منطقة تجارية للأدوات الكهربائية الزراعية',
            specialties: ['معدات ري', 'أدوات زراعية'],
            shops: 32
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
            shops: 72
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
            shops: 38
          }
        ]
      },
      {
        id: 'balina',
        name: 'البلينا',
        streets: [
          {
            id: 'balina-center',
            name: 'وسط البلينا',
            description: 'مركز تجاري للأدوات الكهربائية',
            specialties: ['أدوات زراعية', 'مضخات'],
            shops: 32
          }
        ]
      },
      {
        id: 'girga',
        name: 'جرجا',
        streets: [
          {
            id: 'girga-center',
            name: 'وسط جرجا',
            description: 'منطقة تجارية للأدوات الكهربائية',
            specialties: ['أدوات منزلية', 'مضخات'],
            shops: 35
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
            shops: 65
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
            shops: 52
          }
        ]
      },
      {
        id: 'qift',
        name: 'قفط',
        streets: [
          {
            id: 'qift-center',
            name: 'وسط قفط',
            description: 'مركز تجاري للأدوات الكهربائية',
            specialties: ['أدوات زراعية', 'مضخات'],
            shops: 32
          }
        ]
      },
      {
        id: 'qus',
        name: 'قوص',
        streets: [
          {
            id: 'qus-center',
            name: 'وسط قوص',
            description: 'منطقة تجارية للأدوات الكهربائية',
            specialties: ['أدوات منزلية', 'مضخات'],
            shops: 28
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
            shops: 58
          },
          {
            id: 'luxor-tourist',
            name: 'المنطقة السياحية',
            description: 'منطقة سياحية تضم محلات الأدوات الكهربائية للفنادق',
            specialties: ['إضاءة ديكورية', 'أنظمة صوتية', 'إضاءة حدائق'],
            shops: 42
          }
        ]
      },
      {
        id: 'qurna',
        name: 'القرنة',
        streets: [
          {
            id: 'qurna-center',
            name: 'وسط القرنة',
            description: 'منطقة أثرية للأدوات الكهربائية',
            specialties: ['إضاءة أثرية', 'أنظمة حماية'],
            shops: 25
          }
        ]
      },
      {
        id: 'esna',
        name: 'إسنا',
        streets: [
          {
            id: 'esna-center',
            name: 'وسط إسنا',
            description: 'مركز تجاري للأدوات الكهربائية',
            specialties: ['أدوات منزلية', 'مضخات'],
            shops: 32
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
            shops: 68
          },
          {
            id: 'aswan-tourist',
            name: 'المنطقة السياحية',
            description: 'منطقة سياحية نوبية تضم محلات الأدوات الكهربائية',
            specialties: ['إضاءة نوبية تقليدية', 'أنظمة فندقية'],
            shops: 35
          }
        ]
      },
      {
        id: 'kom-ombo',
        name: 'كوم أمبو',
        streets: [
          {
            id: 'kom-ombo-center',
            name: 'وسط كوم أمبو',
            description: 'مركز تجاري للأدوات الكهربائية الزراعية',
            specialties: ['أدوات زراعية', 'مضخات'],
            shops: 32
          }
        ]
      },
      {
        id: 'edfu',
        name: 'إدفو',
        streets: [
          {
            id: 'edfu-center',
            name: 'وسط إدفو',
            description: 'منطقة تجارية للأدوات الكهربائية',
            specialties: ['أدوات منزلية', 'مضخات'],
            shops: 28
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
            shops: 48
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
            shops: 28
          }
        ]
      },
      {
        id: 'farafra',
        name: 'الفرافرة',
        streets: [
          {
            id: 'farafra-center',
            name: 'وسط الفرافرة',
            description: 'واحة صحراوية للأدوات الكهربائية',
            specialties: ['أنظمة طاقة شمسية', 'مضخات آبار'],
            shops: 18
          }
        ]
      },
      {
        id: 'paris',
        name: 'باريس',
        streets: [
          {
            id: 'paris-center',
            name: 'وسط باريس',
            description: 'منطقة صحراوية للأدوات الكهربائية الأساسية',
            specialties: ['أدوات أساسية', 'مولدات'],
            shops: 12
          }
        ]
      }
    ]
  }
];