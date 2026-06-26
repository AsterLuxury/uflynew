/* ═══════════════════════════════════════════════════
   UFLY TRAVEL — i18n Engine (Embedded Translations)
   3 languages: Kurdish (Badini, default), English, Arabic (RTL)
   ═══════════════════════════════════════════════════ */
(function() {
  'use strict';

  const LANG_KEY = 'ufly-lang';

  const translations = {
    ku: {
      site_title: 'UFLY Travel | بریتی&zwnj;ی گەشتیاری ئاسمانی',
      nav_services: 'ڕاژەکان',
      nav_about: 'دەربارە',
      nav_partners: 'تۆڕ',
      nav_contact: 'پەیوەندی',
      hero_tagline: 'بفڕە<br>بەرەوپێش',
      hero_sub: 'گەشتی ئاسمانی&zwnj;ی پلەبەرز · جیهانی · لە ٢٠١٠&zwnj;ەوە',
      hero_cta: 'گەشتەکەت بەسترێنە',
      scroll_text: 'خوار&zwnj;ەوە',
      services_label: 'ئەوەی پێشکە&zwnj;شی دەکەین',
      services_title: 'ڕاژە&zwnj;کانی<br>فڕینی پلەبەرز',
      services_sub: 'لە بەکرێگرتنی تایبەتەوە بۆ یەدەگی بازرگانی، هەموو وردەکاری&zwnj;ەکانی گەشتەکەت بە شارەزاییەوە بەڕێوە دەبەین.',
      service_1_title: 'فڕۆکەی تایبەت',
      service_1_desc: 'بەکرێگرتنی فڕۆکەی تایبەت و لۆکس بەپێی خشتەی کاتی خۆت. بە خزمەتی کابینی ئاستی جیهانی بفڕە.',
      service_2_title: 'گەشتی بازرگانی',
      service_2_desc: 'باشترین مامەڵە لەسەر هێڵە ئاسمانییەکانی جیهان. پلەی یەکەم، بازرگانی و ئابووری بە پێگەرەنتی خزمەتی پلەبەرزەوە.',
      service_3_title: 'گەشتی هەلیکۆپتەر',
      service_3_desc: 'گەشتی ئاسمانی&zwnj;ی سەرسوڕهێنەر بەسەر جوانترین دیمەنە سروشتییەکان و ئاسۆی شارەکانی سەر زەوی.',
      stat_1: 'وڵاتان',
      stat_2: 'گەشتیاری دڵخۆش',
      stat_3: 'فڕۆکە',
      stat_4: 'ساڵ ئەزموون',
      divider_text: 'گەشتەکەت لێرەوە دەست پێ دەکات',
      gallery_label: 'ئاراستەکان',
      gallery_title: 'بۆ کوێ<br>دەتبەین',
      gallery_sub: 'بگەڕێ بە کۆکراوە ئامادەکراوەکەمان لە ئاراستەکان — لە کەناراوە پاکەکانەوە بۆ لووتکەی شاخە بەرزەکان.',
      gallery_1: 'چیاکانی ئەڵپ',
      gallery_2: 'ئاسۆی ڕۆژئاوا',
      gallery_3: 'کەناراوەکانی ماڵدیڤ',
      gallery_4: 'مارینای دوبەی',
      gallery_5: 'تێرمیناڵی گەورە',
      gallery_6: 'گردە لمییەکانی سەحرا',
      gallery_7: 'ئامادە بۆ سەرکێشی',
      partners_label: 'متمانەی پێکراوە',
      partners_title: 'تۆڕەکەمان',
      partners_sub: 'هاوبەشی دەکەین لەگەڵ پێشەنگەکانی هێڵە ئاسمانییەکانی جیهان بۆ ئەوەی باشترین پێشکەش بکەین.',
      contact_label: 'پەیوەندیمان پێوە بکە',
      contact_title: 'گەشتی داهاتووت<br>پلان بکە',
      contact_sub: 'ئامادەیت بۆ فڕین؟ وردەکاری&zwnj;ەکانت بۆمان بنێرە و تیمی ئێمە لە ماوەی ٢٤ کاتژمێردا دەگەڕێتەوە.',
      contact_quote: '"ئاسمان<br>سنوور نییە"',
      contact_author: '— UFLY Travel',
      form_name: 'ناوی تەواو',
      form_email: 'ئیمەیڵ',
      form_phone: 'تەلەفۆن',
      form_dest: 'ئاراستە',
      form_message: 'پەیام',
      form_submit: 'پەیامەکە بنێرە',
      footer_desc: 'بریتی&zwnj;ی گەشتیاری ئاسمانی&zwnj;ی پلەبەرز کە پەیوەندیت بە جیهانەوە دەکات. فڕۆکەی تایبەت، گەشتی بازرگانی و گەشتی هەلیکۆپتەر لە سەرانسەری جیهاندا.',
      footer_services: 'ڕاژەکان',
      footer_s1: 'فڕۆکەی تایبەت',
      footer_s2: 'گەشتی بازرگانی',
      footer_s3: 'گەشتی هەلیکۆپتەر',
      footer_s4: 'گواستنەوەی فڕۆکەخانە',
      footer_company: 'کۆمپانیا',
      footer_c1: 'دەربارەی ئێمە',
      footer_c2: 'تیمی ئێمە',
      footer_c3: 'کارەکان',
      footer_c4: 'بلۆگ',
      footer_support: 'پاڵپشتی',
      footer_sup1: 'پرسیارە دووبارەکان',
      footer_sup2: 'سیاسەتی تایبەتی',
      footer_sup3: 'مەرجەکانی خزمەت',
      footer_sup4: 'پەیوەندی بە پاڵپشتییەوە',
      footer_copy: '© ٢٠٢٦ UFLY Travel. هەموو مافەکان پارێزراون.',
      footer_tagline: 'بۆ ئەوانە دروست کراوە کە بەرەوپێش دەفڕن'
    },

    en: {
      site_title: 'UFLY Travel | Premium Air Travel Agency',
      nav_services: 'Services',
      nav_about: 'About',
      nav_partners: 'Network',
      nav_contact: 'Contact',
      hero_tagline: 'Fly<br>Beyond',
      hero_sub: 'Premium Air Travel · Worldwide · Since 2010',
      hero_cta: 'Book Your Flight',
      scroll_text: 'Scroll',
      services_label: 'What We Offer',
      services_title: 'Premium Flight<br>Services',
      services_sub: 'From private charters to commercial bookings, we handle every detail of your journey with excellence.',
      service_1_title: 'Private Jets',
      service_1_desc: 'Luxury private charters tailored to your schedule. Fly on your terms with world-class cabin service.',
      service_2_title: 'Commercial Flights',
      service_2_desc: 'Best deals on airlines worldwide. First, business, and economy with premium service guarantees.',
      service_3_title: 'Helicopter Tours',
      service_3_desc: 'Breathtaking aerial tours over the most stunning landscapes and city skylines on earth.',
      stat_1: 'Countries',
      stat_2: 'Happy Travelers',
      stat_3: 'Aircraft',
      stat_4: 'Years Experience',
      divider_text: 'Your Journey Begins Here',
      gallery_label: 'Destinations',
      gallery_title: 'Where We<br>Take You',
      gallery_sub: 'Explore our curated collection of destinations — from pristine beaches to soaring mountain peaks.',
      gallery_1: 'Swiss Alps',
      gallery_2: 'Sunset Horizon',
      gallery_3: 'Maldives Coast',
      gallery_4: 'Dubai Marina',
      gallery_5: 'Grand Terminal',
      gallery_6: 'Sahara Dunes',
      gallery_7: 'Ready for Adventure',
      partners_label: 'Trusted By',
      partners_title: 'Our Network',
      partners_sub: 'We partner with the world\'s leading airlines and aviation services to bring you the best.',
      contact_label: 'Get In Touch',
      contact_title: 'Let\'s Plan Your<br>Next Flight',
      contact_sub: 'Ready to fly? Send us your details and our team will get back to you within 24 hours.',
      contact_quote: '"The sky is<br>not the limit"',
      contact_author: '— UFLY Travel',
      form_name: 'Full Name',
      form_email: 'Email',
      form_phone: 'Phone',
      form_dest: 'Destination',
      form_message: 'Message',
      form_submit: 'Send Message',
      footer_desc: 'Premium air travel agency connecting you to the world. Private jets, commercial flights, and helicopter tours across the globe.',
      footer_services: 'Services',
      footer_s1: 'Private Jets',
      footer_s2: 'Commercial Flights',
      footer_s3: 'Helicopter Tours',
      footer_s4: 'Airport Transfers',
      footer_company: 'Company',
      footer_c1: 'About Us',
      footer_c2: 'Our Team',
      footer_c3: 'Careers',
      footer_c4: 'Blog',
      footer_support: 'Support',
      footer_sup1: 'FAQ',
      footer_sup2: 'Privacy Policy',
      footer_sup3: 'Terms of Service',
      footer_sup4: 'Contact Support',
      footer_copy: '© 2026 UFLY Travel. All rights reserved.',
      footer_tagline: 'Made for those who fly beyond'
    },

    ar: {
      site_title: 'UFLY Travel | وكالة السفر الجوي الفاخر',
      nav_services: 'الخدمات',
      nav_about: 'حول',
      nav_partners: 'الشبكة',
      nav_contact: 'اتصل بنا',
      hero_tagline: 'حلق<br>أبعد',
      hero_sub: 'سفر جوي فاخر · عالمياً · منذ 2010',
      hero_cta: 'احجز رحلتك',
      scroll_text: 'تمرير',
      services_label: 'ماذا نقدم',
      services_title: 'خدمات الطيران<br>الفاخرة',
      services_sub: 'من الرحلات الخاصة إلى الحجوزات التجارية، نحن ندير كل تفاصيل رحلتك بامتياز.',
      service_1_title: 'طائرات خاصة',
      service_1_desc: 'رحلات خاصة فاخرة مصممة حسب جدولك. حلق بشروطك مع خدمة مقصورة عالمية المستوى.',
      service_2_title: 'رحلات تجارية',
      service_2_desc: 'أفضل الصفقات على خطوط الطيران العالمية. الدرجة الأولى ورجال الأعمال والاقتصادية مع ضمانات الخدمة الممتازة.',
      service_3_title: 'جولات الهليكوبتر',
      service_3_desc: 'جولات جوية خلابة فوق أجمل المناظر الطبيعية وأفق المدن على وجه الأرض.',
      stat_1: 'دولة',
      stat_2: 'مسافر سعيد',
      stat_3: 'طائرة',
      stat_4: 'عام خبرة',
      divider_text: 'رحلتك تبدأ من هنا',
      gallery_label: 'الوجهات',
      gallery_title: 'إلى أين<br>نأخذك',
      gallery_sub: 'استكشف مجموعتنا المنسقة من الوجهات — من الشواطئ البكر إلى قمم الجبال الشاهقة.',
      gallery_1: 'جبال الألب السويسرية',
      gallery_2: 'أفق الغروب',
      gallery_3: 'ساحل جزر المالديف',
      gallery_4: 'مارينا دبي',
      gallery_5: 'المحطة الكبرى',
      gallery_6: 'كثبان الصحراء الكبرى',
      gallery_7: 'مستعد للمغامرة',
      partners_label: 'موثوق به من قبل',
      partners_title: 'شبكتنا',
      partners_sub: 'نحن نتعاون مع شركات الطيران الرائدة في العالم وخدمات الطيران لنقدم لك الأفضل.',
      contact_label: 'تواصل معنا',
      contact_title: 'خطط لرحلتك<br>القادمة',
      contact_sub: 'مستعد للسفر؟ أرسل لنا تفاصيلك وسيعود فريقنا إليك خلال 24 ساعة.',
      contact_quote: '"السماء<br' + '>ليست الحدود"',
      contact_author: '— UFLY Travel',
      form_name: 'الاسم الكامل',
      form_email: 'البريد الإلكتروني',
      form_dest: 'الوجهة',
      form_phone: 'الهاتف',
      form_message: 'الرسالة',
      form_submit: 'أرسل الرسالة',
      footer_desc: 'وكالة سفر جوي فاخرة تربطك بالعالم. طائرات خاصة، رحلات تجارية، وجولات هليكوبتر في جميع أنحاء العالم.',
      footer_services: 'الخدمات',
      footer_s1: 'طائرات خاصة',
      footer_s2: 'رحلات تجارية',
      footer_s3: 'جولات هليكوبتر',
      footer_s4: 'خدمات المطار',
      footer_company: 'الشركة',
      footer_c1: 'من نحن',
      footer_c2: 'فريقنا',
      footer_c3: 'الوظائف',
      footer_c4: 'المدونة',
      footer_support: 'الدعم',
      footer_sup1: 'الأسئلة الشائعة',
      footer_sup2: 'سياسة الخصوصية',
      footer_sup3: 'شروط الخدمة',
      footer_sup4: 'اتصل بالدعم',
      footer_copy: '© 2026 UFLY Travel. جميع الحقوق محفوظة.',
      footer_tagline: 'صُنع لأولئك الذين يحلقون أبعد'
    }
  };

  function setLang(lang) {
    const rtlLangs = ['ar', 'ku'];
    const isRTL = rtlLangs.includes(lang);
    const doc = document.documentElement;
    
    doc.lang = lang;
    doc.dir = isRTL ? 'rtl' : 'ltr';
    
    // Update all data-i18n elements
    const t = translations[lang] || translations['en'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.innerHTML = t[key];
      }
    });

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem(LANG_KEY, lang);
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  function getInitialLang() {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && translations[saved]) return saved;
    const browser = navigator.language?.split('-')[0];
    if (translations[browser]) return browser;
    return 'ku';
  }

  // Init
  const initialLang = getInitialLang();
  setLang(initialLang);

  // Expose switcher globally
  window.UflyI18n = { setLang, getLang: () => document.documentElement.lang, t: translations };

  // Event delegation for lang buttons
  document.addEventListener('click', e => {
    const btn = e.target.closest('.lang-btn');
    if (btn) {
      const l = btn.getAttribute('data-lang');
      if (l && translations[l]) setLang(l);
    }
  });
})();
