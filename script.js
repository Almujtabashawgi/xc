// Data
const projects = [
    {
        id: '1',
        title: 'مسح طبوغرافى لمشروع زراعي',
        description: 'مسح شامل وتخطيط لمشروع زراعي بمساحة 5000 فدان.',
        fullDescription: 'تم تنفيذ مسح طبوغرافى دقيق لمشروع زراعي ضخم يمتد على مساحة 5000 فدان في ولاية الجزيرة. شمل العمل تحديد المناسيب، رسم الخرائط الكنتورية، وتخطيط شبكات الري والصرف لضمان الاستغلال الأمثل للأرض. تم استخدام أحدث أجهزة الرصد المساحي لضمان دقة البيانات، مما ساهم في تصميم نظام ري فعال يقلل من الهدر المائي ويزيد من الإنتاجية الزراعية.',
        imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        category: 'مساحة',
        instruments: [
            { name: 'Total Station Leica TS06', icon: 'crosshair' },
            { name: 'GPS RTK Trimble R8', icon: 'satellite' },
            { name: 'AutoCAD Civil 3D', icon: 'monitor' },
            { name: 'Level Instrument', icon: 'ruler' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1581094794329-cd811969d39b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '2',
        title: 'نظام GIS للتخطيط العمراني',
        description: 'تطوير قاعدة بيانات جغرافية لتخطيط حي سكني جديد.',
        fullDescription: 'قمنا بتطوير نظام معلومات جغرافية (GIS) متكامل لدعم التخطيط العمراني لحي سكني جديد في الخرطوم. تضمن المشروع جمع البيانات المكانية، تحليل استخدامات الأراضي، وتوفير خرائط تفاعلية لصناع القرار. ساعد النظام في تحسين توزيع الخدمات والمرافق العامة، وتقليل التكاليف التشغيلية من خلال التخطيط الذكي.',
        imageUrl: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        category: 'GIS',
        instruments: [
            { name: 'ArcGIS Pro', icon: 'map' },
            { name: 'QGIS', icon: 'globe' },
            { name: 'GPS Handheld Garmin', icon: 'navigation' },
            { name: 'Server Database', icon: 'database' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '3',
        title: 'مسح جوي بالطائرات المسيرة',
        description: 'استخدام الدرون لمسح منطقة تعدين وتحديد الكميات.',
        fullDescription: 'استخدام أحدث تقنيات الطائرات المسيرة (Drones) لإجراء مسح جوي عالي الدقة لمنطقة تعدين. تم إنتاج نماذج ثلاثية الأبعاد (3D Models) وحساب كميات الحفر والردم بدقة متناهية. وفرت هذه التقنية الوقت والجهد مقارنة بالطرق التقليدية، وقدمت بيانات تفصيلية ساعدت في إدارة الموقع بكفاءة.',
        imageUrl: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        category: 'استشعار عن بعد',
        instruments: [
            { name: 'DJI Phantom 4 RTK', icon: 'plane' },
            { name: 'Pix4D Mapper', icon: 'cpu' },
            { name: 'Ground Control Points (GCPs)', icon: 'target' },
            { name: 'High-End Workstation', icon: 'monitor' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1508614589041-895b8c9d7ef5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '4',
        title: 'تخطيط شبكة طرق',
        description: 'دراسة مساحية وتصميم هندسي لشبكة طرق فرعية.',
        fullDescription: 'إجراء الدراسات المساحية والتصميم الهندسي لشبكة طرق فرعية بطول 20 كم. شمل العمل الرفع المساحي، تصميم المسارات، وحساب الكميات اللازمة للتنفيذ. تم مراعاة المعايير الهندسية العالمية لضمان سلامة الطرق وانسيابية الحركة المرورية، مع تقديم حلول اقتصادية للتنفيذ.',
        imageUrl: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        category: 'بنية تحتية',
        instruments: [
            { name: 'Total Station Sokkia', icon: 'crosshair' },
            { name: 'Level Instrument', icon: 'ruler' },
            { name: 'AutoCAD Civil 3D', icon: 'monitor' },
            { name: 'Traffic Analysis Software', icon: 'activity' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '5',
        title: 'مسح هيدرولوجي للأودية',
        description: 'دراسة مسارات السيول وتحديد مناطق الخطر.',
        fullDescription: 'دراسة هيدرولوجية شاملة لمسارات السيول والأودية في منطقة البحر الأحمر. تم استخدام صور الأقمار الصناعية ونماذج الارتفاع الرقمية (DEM) لتحديد مناطق الخطر واقتراح حلول للحماية من الفيضانات.',
        imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        category: 'هيدرولوجيا',
        instruments: [
            { name: 'Hydrological Modeling', icon: 'droplet' },
            { name: 'Satellite Imagery', icon: 'satellite' },
            { name: 'GPS Survey', icon: 'map-pin' },
            { name: 'HEC-RAS Software', icon: 'monitor' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '6',
        title: 'توقيع حدود أراضي استثمارية',
        description: 'تثبيت العلامات المساحية لمشروع استثماري كبير.',
        fullDescription: 'مشروع لتوقيع وتثبيت حدود أراضي استثمارية بمساحة 10,000 فدان. تم استخدام أجهزة GPS عالية الدقة لضمان مطابقة الحدود مع الخرط الرسمية وتسليم الموقع للمستثمرين.',
        imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        category: 'مساحة',
        instruments: [
            { name: 'DGPS Trimble', icon: 'satellite' },
            { name: 'Concrete Markers', icon: 'map-pin' },
            { name: 'Survey Vehicle', icon: 'truck' },
            { name: 'Data Collector', icon: 'tablet' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1464039397837-d7d9d630413e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '7',
        title: 'إنشاء خريطة سياحية رقمية',
        description: 'تطبيق ويب تفاعلي للمواقع السياحية والأثرية.',
        fullDescription: 'تصميم وتطوير خريطة سياحية رقمية تفاعلية تعرض المواقع الأثرية والسياحية في السودان. يتيح التطبيق للمستخدمين استكشاف المواقع، معرفة الخدمات المتوفرة، والحصول على اتجاهات الوصول.',
        imageUrl: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        category: 'GIS & Web',
        instruments: [
            { name: 'Web GIS', icon: 'globe' },
            { name: 'Leaflet JS', icon: 'code' },
            { name: 'Database SQL', icon: 'database' },
            { name: 'UI/UX Design', icon: 'layout' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '8',
        title: 'مراقبة تشوهات السدود',
        description: 'رصد دقيق لتحركات جسم السد لضمان السلامة.',
        fullDescription: 'مشروع دوري لمراقبة التشوهات والهبوط في جسم أحد السدود الرئيسية. يتم استخدام أجهزة رصد دقيقة جداً لقياس أي تحركات مليمترية وتحليلها لضمان سلامة المنشأة.',
        imageUrl: 'https://images.unsplash.com/photo-1574968476365-54654936a448?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        category: 'مراقبة منشآت',
        instruments: [
            { name: 'High Precision Total Station', icon: 'crosshair' },
            { name: 'Digital Level', icon: 'ruler' },
            { name: 'Deformation Analysis', icon: 'activity' },
            { name: 'Safety Sensors', icon: 'shield' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '9',
        title: 'مسح عقاري للمدن',
        description: 'تحديث السجلات العقارية وإنشاء خرائط رقمية.',
        fullDescription: 'مشروع لتحديث السجلات العقارية لمدينة كاملة. تم إجراء مسح ميداني لكل العقارات، مطابقة البيانات مع السجلات القديمة، وإنشاء نظام رقمي حديث لإدارة الممتلكات.',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        category: 'مساحة عقارية',
        instruments: [
            { name: 'Mobile GIS', icon: 'smartphone' },
            { name: 'Laser Distance Meter', icon: 'maximize' },
            { name: 'Database Management', icon: 'server' },
            { name: 'Cadastral Maps', icon: 'map' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
    {
        id: '10',
        title: 'تحليل مخاطر السيول',
        description: 'نمذجة هيدروليكية لحماية المناطق السكنية.',
        fullDescription: 'دراسة تحليلية لمخاطر السيول على المناطق السكنية الجديدة. تم استخدام نماذج المحاكاة الهيدروليكية لتوقع سيناريوهات الفيضانات وتصميم قنوات تصريف آمنة.',
        imageUrl: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        category: 'بيئة ومخاطر',
        instruments: [
            { name: 'Flood Simulation', icon: 'waves' },
            { name: 'Risk Assessment', icon: 'alert-triangle' },
            { name: 'GIS Analysis', icon: 'map' },
            { name: 'Reporting Tools', icon: 'file-text' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ]
    },
];

const testimonials = [
    {
        id: '1',
        name: 'م. أحمد عثمان',
        role: 'مدير مشاريع - شركة النيل',
        content: 'احترافية عالية ودقة في المواعيد. فريق Xtreme Capabilities قدم لنا بيانات مساحية دقيقة ساعدتنا في توفير الكثير من التكاليف.',
    },
    {
        id: '2',
        name: 'د. سارة حسن',
        role: 'استشارية تخطيط عمراني',
        content: 'حلول GIS التي قدموها كانت مذهلة وسهلت علينا عملية اتخاذ القرار بشكل كبير. أنصح بالتعامل معهم بشدة.',
    },
    {
        id: '3',
        name: 'السيد/ محمد علي',
        role: 'مستثمر زراعي',
        content: 'خدمة ممتازة وفريق عمل متعاون. المسح الطبوغرافي كان دقيقاً جداً وساعدنا في تصميم نظام الري بكفاءة.',
    },
];

// Initialize Lucide Icons
lucide.createIcons();

// Set Year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');
const htmlElement = document.documentElement;

// Check for saved theme preference or system preference
const savedTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

if (savedTheme === 'dark' || (!savedTheme && systemTheme === 'dark')) {
    htmlElement.classList.add('dark');
    updateThemeIcons(true);
} else {
    htmlElement.classList.remove('dark');
    updateThemeIcons(false);
}

function toggleTheme() {
    htmlElement.classList.toggle('dark');
    const isDark = htmlElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons(isDark);
}

function updateThemeIcons(isDark) {
    const iconName = isDark ? 'sun' : 'moon';
    const iconHtml = `<i data-lucide="${iconName}" class="w-5 h-5"></i>`;
    
    if (themeToggleBtn) themeToggleBtn.innerHTML = iconHtml;
    if (themeToggleMobileBtn) themeToggleMobileBtn.innerHTML = iconHtml;
    lucide.createIcons();
}

if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener('click', toggleTheme);


// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileMenu.classList.contains('hidden') ? 'menu' : 'x';
    menuBtn.innerHTML = `<i data-lucide="${icon}" class="w-6 h-6"></i>`;
    lucide.createIcons();
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.innerHTML = `<i data-lucide="menu" class="w-6 h-6"></i>`;
        lucide.createIcons();
    });
});

// Header Scroll Effect
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('bg-white/90', 'dark:bg-gray-900/90', 'backdrop-blur-md', 'shadow-md', 'py-2');
        header.classList.remove('py-4');
    } else {
        header.classList.remove('bg-white/90', 'dark:bg-gray-900/90', 'backdrop-blur-md', 'shadow-md', 'py-2');
        header.classList.add('py-4');
    }
});

// Render Projects (Home Page)
const projectsGrid = document.getElementById('projects-grid');
if (projectsGrid) {
    // Show only first 6 projects on home page
    projects.slice(0, 6).forEach((project, index) => {
        const delay = index * 100;
        const card = document.createElement('div');
        card.className = `reveal fade-up delay-${delay} group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700`;
        card.innerHTML = `
            <div class="relative h-64 overflow-hidden">
                <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button onclick="window.location.href='project-detail.html?id=${project.id}'" class="px-6 py-3 bg-white text-blue-900 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-50">
                        <i data-lucide="eye" class="w-5 h-5"></i>
                        <span>عرض التفاصيل</span>
                    </button>
                </div>
                <div class="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    ${project.category}
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    ${project.title}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                    ${project.description}
                </p>
                <button onclick="window.location.href='project-detail.html?id=${project.id}'" class="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    <span>اقرأ المزيد</span>
                    <i data-lucide="arrow-left" class="w-4 h-4"></i>
                </button>
            </div>
        `;
        projectsGrid.appendChild(card);
    });
}

// Render All Projects (Projects Page)
const allProjectsGrid = document.getElementById('all-projects-grid');
if (allProjectsGrid) {
    projects.forEach((project, index) => {
        const delay = index * 100;
        const card = document.createElement('div');
        card.className = `reveal fade-up delay-${delay} group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700`;
        card.innerHTML = `
            <div class="relative h-64 overflow-hidden">
                <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button onclick="window.location.href='project-detail.html?id=${project.id}'" class="px-6 py-3 bg-white text-blue-900 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-50">
                        <i data-lucide="eye" class="w-5 h-5"></i>
                        <span>عرض التفاصيل</span>
                    </button>
                </div>
                <div class="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    ${project.category}
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    ${project.title}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                    ${project.description}
                </p>
                <button onclick="window.location.href='project-detail.html?id=${project.id}'" class="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    <span>اقرأ المزيد</span>
                    <i data-lucide="arrow-left" class="w-4 h-4"></i>
                </button>
            </div>
        `;
        allProjectsGrid.appendChild(card);
    });
}

// Render Testimonials
const testimonialsGrid = document.getElementById('testimonials-grid');
if (testimonialsGrid) {
    testimonials.forEach((testimonial, index) => {
        const delay = index * 200;
        const card = document.createElement('div');
        card.className = `reveal fade-up delay-${delay} bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors relative`;
        card.innerHTML = `
            <i data-lucide="quote" class="absolute top-6 left-6 text-blue-400/30 w-12 h-12"></i>
            <p class="text-gray-200 text-lg leading-relaxed mb-6 relative z-10">
                "${testimonial.content}"
            </p>
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold text-white">
                    ${testimonial.name.charAt(0)}
                </div>
                <div>
                    <h4 class="font-bold text-white">${testimonial.name}</h4>
                    <p class="text-blue-300 text-sm">${testimonial.role}</p>
                </div>
            </div>
        `;
        testimonialsGrid.appendChild(card);
    });
}

// Re-initialize icons for dynamically added content
lucide.createIcons();

// Project Detail Page Logic
const detailContainer = document.getElementById('project-detail-container');
if (detailContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const project = projects.find(p => p.id === projectId);

    const loadingState = document.getElementById('loading-state');
    const errorState = document.getElementById('error-state');

    if (project) {
        // Populate Data
        document.title = `${project.title} - Xtreme Capabilities`;
        document.getElementById('detail-category').textContent = project.category;
        document.getElementById('detail-title').textContent = project.title;
        document.getElementById('detail-description').textContent = project.fullDescription;
        document.getElementById('detail-main-image').src = project.imageUrl;

        // Instruments
        const instrumentsList = document.getElementById('detail-instruments');
        if (project.instruments) {
            project.instruments.forEach(inst => {
                const li = document.createElement('li');
                li.className = 'flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600';
                li.innerHTML = `
                    <div class="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center shrink-0">
                        <i data-lucide="${inst.icon}" class="w-5 h-5 text-blue-600 dark:text-blue-400"></i>
                    </div>
                    <span class="font-medium text-gray-800 dark:text-gray-200">${inst.name}</span>
                `;
                instrumentsList.appendChild(li);
            });
        }

        // Gallery
        const galleryGrid = document.getElementById('detail-gallery');
        if (project.gallery) {
            project.gallery.forEach((imgUrl, index) => {
                const div = document.createElement('div');
                div.className = `rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-64 group relative cursor-pointer`;
                div.innerHTML = `
                    <img src="${imgUrl}" alt="Gallery Image ${index + 1}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                `;
                galleryGrid.appendChild(div);
            });
        }

        // Show Content
        setTimeout(() => {
            loadingState.classList.add('hidden');
            detailContainer.classList.remove('hidden');
            lucide.createIcons();
            
            // Trigger animations manually since they might be missed by observer on initial load
            document.querySelectorAll('#project-detail-container .reveal').forEach(el => {
                el.classList.add('active');
            });
        }, 500);

    } else {
        // Show Error
        loadingState.classList.add('hidden');
        errorState.classList.remove('hidden');
    }
}

// Modal Logic (Only on Index Page)
const modal = document.getElementById('project-modal');
if (modal) {
    const modalContent = document.getElementById('modal-content');
    const closeModalBtn = document.getElementById('close-modal');
    const favoriteBtn = document.getElementById('favorite-btn');
    let currentProjectId = null;

    window.openModal = (id) => {
        const project = projects.find(p => p.id === id);
        if (!project) return;

        currentProjectId = id;
        document.getElementById('modal-image').src = project.imageUrl;
        document.getElementById('modal-category').textContent = project.category;
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-description').textContent = project.fullDescription;

        updateFavoriteBtn();

        modal.classList.remove('hidden');
        // Small delay to allow display:flex to apply before opacity transition
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-90');
            modalContent.classList.add('scale-100');
        }, 10);
    };

    const closeModal = () => {
        modal.classList.add('opacity-0');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-90');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    };

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Favorites Logic
    const getFavorites = () => JSON.parse(localStorage.getItem('favorites') || '[]');
    const updateFavoriteBtn = () => {
        const favorites = getFavorites();
        const isFavorite = favorites.includes(currentProjectId);
        const icon = favoriteBtn.querySelector('i');
        const text = document.getElementById('favorite-text');

        if (isFavorite) {
            favoriteBtn.classList.remove('bg-gray-100', 'text-gray-600', 'dark:bg-gray-700', 'dark:text-gray-300');
            favoriteBtn.classList.add('bg-red-50', 'text-red-600', 'dark:bg-red-900/20', 'dark:text-red-400');
            icon.setAttribute('fill', 'currentColor');
            text.textContent = 'مفضل';
        } else {
            favoriteBtn.classList.add('bg-gray-100', 'text-gray-600', 'dark:bg-gray-700', 'dark:text-gray-300');
            favoriteBtn.classList.remove('bg-red-50', 'text-red-600', 'dark:bg-red-900/20', 'dark:text-red-400');
            icon.setAttribute('fill', 'none');
            text.textContent = 'إضافة للمفضلة';
        }
        lucide.createIcons();
    };

    favoriteBtn.addEventListener('click', () => {
        if (!currentProjectId) return;
        const favorites = getFavorites();
        const index = favorites.indexOf(currentProjectId);
        
        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(currentProjectId);
        }
        
        localStorage.setItem('favorites', JSON.stringify(favorites));
        updateFavoriteBtn();
    });
}

// Contact Form Logic
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create message object
        const newMessage = {
            id: Date.now().toString(),
            name,
            email,
            subject,
            message,
            date: new Date().toLocaleDateString('ar-EG', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        };

        // Save to localStorage
        const messages = JSON.parse(localStorage.getItem('messages') || '[]');
        messages.unshift(newMessage); // Add to beginning
        localStorage.setItem('messages', JSON.stringify(messages));

        // Simulate form submission
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalContent = btn.innerHTML;
        
        // Loading state
        btn.disabled = true;
        btn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i><span>جاري الإرسال...</span>';
        lucide.createIcons();

        setTimeout(() => {
            // Success state
            btn.disabled = false;
            btn.innerHTML = originalContent;
            contactForm.reset();
            showToast();
        }, 1500);
    });
}

// Messages Page Logic
const messagesContainer = document.getElementById('messages-container');
const clearMessagesBtn = document.getElementById('clear-messages-btn');
const noMessagesEl = document.getElementById('no-messages');

if (messagesContainer) {
    const renderMessages = () => {
        const messages = JSON.parse(localStorage.getItem('messages') || '[]');
        
        // Clear existing content except no-messages element
        Array.from(messagesContainer.children).forEach(child => {
            if (child.id !== 'no-messages') {
                messagesContainer.removeChild(child);
            }
        });

        if (messages.length === 0) {
            noMessagesEl.classList.remove('hidden');
            if (clearMessagesBtn) clearMessagesBtn.classList.add('hidden');
        } else {
            noMessagesEl.classList.add('hidden');
            if (clearMessagesBtn) clearMessagesBtn.classList.remove('hidden');

            messages.forEach((msg, index) => {
                const delay = index * 100;
                const card = document.createElement('div');
                card.className = `reveal fade-up delay-${Math.min(delay, 500)} bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300`;
                card.innerHTML = `
                    <div class="flex justify-between items-start mb-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                                ${msg.name.charAt(0)}
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900 dark:text-white">${msg.name}</h4>
                                <p class="text-sm text-gray-500 dark:text-gray-400">${msg.email}</p>
                            </div>
                        </div>
                        <span class="text-xs text-gray-400 bg-gray-50 dark:bg-gray-700 px-2 py-1 rounded-full">
                            ${msg.date}
                        </span>
                    </div>
                    <div class="mb-2">
                        <span class="text-xs font-bold text-blue-600 uppercase tracking-wider">الموضوع:</span>
                        <span class="font-bold text-gray-800 dark:text-gray-200 mr-1">${msg.subject}</span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg text-sm">
                        ${msg.message}
                    </p>
                `;
                messagesContainer.appendChild(card);
            });
            
            // Trigger animations
            setTimeout(() => {
                document.querySelectorAll('#messages-container .reveal').forEach(el => {
                    el.classList.add('active');
                });
            }, 100);
        }
    };

    // Initial Render
    renderMessages();

    // Clear Messages Logic
    if (clearMessagesBtn) {
        clearMessagesBtn.addEventListener('click', () => {
            if (confirm('هل أنت متأكد من مسح جميع الرسائل؟')) {
                localStorage.removeItem('messages');
                renderMessages();
            }
        });
    }
}

function showToast() {
    toast.classList.remove('translate-y-20', 'opacity-0');
    
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 4000);
}

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});
