// ==========================================================================
// SAN GAYA Massage - i18n Translations (TypeScript)
// Languages: EN (default), TH, ZH
// ==========================================================================

type LangCode = 'en' | 'th' | 'zh';

type Translations = {
  [key: string]: string;
};

type TranslationMap = {
  [L in LangCode]: Translations;
};

export const translations: TranslationMap = {
  en: {
    nav_services: 'Services',
    nav_highlights: 'Why Us',
    nav_reviews: 'Reviews',
    nav_location: 'Location',
    hero_badge: '✨ Experience Premium Relaxation',
    hero_title_main: 'SAN GAYA Massage',
    hero_title_sub: 'Revive Your Body. Melt the Stress Away.',
    hero_desc: 'Professional health massage services — Traditional Thai, Office Syndrome, Aroma & more — by certified therapists with DHSS standard. A clean, serene, and private sanctuary.',
    hero_btn_call: 'Call to Book: 092-609-6923',
    hero_btn_line: 'Book via LINE',
    hero_pill1: 'Fresh linen changed every session — 100%',
    hero_pill2: 'Convenient free parking on-site',
    highlights_subtitle: 'Why Choose Us',
    highlights_title: '4 Reasons SAN GAYA Stands Out',
    highlights_desc: 'We are committed to delivering the highest service standards for your ultimate relaxation and peace of mind.',
    highlight1_title: 'Fresh Linen Every Session',
    highlight1_desc: 'We prioritize hygiene above all. Bed sheets, pillow covers, and towels are hotel-standard washed and sanitized fresh for every single client.',
    highlight2_title: 'DHSS-Certified Therapists',
    highlight2_desc: 'Every therapist is trained and registered with the Department of Health Service Support (DHSS). Skilled hands, trusted techniques.',
    highlight3_title: 'Private & Tranquil Atmosphere',
    highlight3_desc: "Our space is thoughtfully designed — open, clean, and free from noise. Subtle natural aromas help your body and mind fully unwind.",
    highlight4_title: 'Free Parking Available',
    highlight4_desc: "No stress finding parking. We have spacious, safe parking right in front — just follow the pin and you're here.",
    services_subtitle: 'Our Signature Services',
    services_title: 'SAN GAYA Massage Menu',
    services_desc: 'Curated massage programs to target your needs — Thai, Office Syndrome, Aroma, Foot, and our exclusive Bamboo Signature.',
    service1_title: 'Thai Massage',
    service1_desc: 'Acupressure, stretching, and deep muscle release across the whole body. Reduces tension and stiffness, leaving you refreshed and energized.',
    service2_title: 'Office Syndrome Massage',
    service2_badge: '🔥 Most Popular',
    service2_desc: 'Targeted deep-tissue work on neck, shoulders, upper back, and shoulder blades — ideal for those who sit at a computer for long hours.',
    service3_title: 'Foot Massage',
    service3_desc: 'Warm herbal foot soak followed by leg muscle relief and reflexology pressure points. Stimulates blood circulation and melts away fatigue.',
    service4_title: 'Aroma Massage',
    service4_desc: 'Gentle gliding strokes with organic essential oils. Nourishes skin, reduces stress, and promotes deeper, more restful sleep.',
    service5_title: 'Bamboo Signature Massage',
    service5_badge: '✨ Signature',
    service5_desc: 'Our exclusive treatment using warmed bamboo sticks to knead and roll deep into muscles. Exceptional pressure and relaxation unlike anything else.',
    service_btn_call: '092-609-6923',
    service_btn_line: '',
    reviews_subtitle: 'Real Guest Reviews',
    reviews_title: 'What Our Clients Say About SAN GAYA',
    google_rating_title: 'Rated 5.0 Stars on Google Maps',
    google_rating_sub: 'From verified guests of SAN GAYA Massage (San Sai, Chiang Mai)',
    google_badge: 'See All Reviews on Google Maps ↗',
    review1_name: 'Patthraporn K.',
    review1_role: 'Local Guide • 18 reviews',
    review1_text: '"The Office Syndrome massage was outstanding. My shoulder blades always hurt from bad sleep — the therapist hit every right spot. Gentle yet so deep. The sheets smelled so fresh. So peaceful. Highly recommended."',
    review1_time: 'Google Review • 2 weeks ago',
    review2_name: 'Anant T.',
    review2_role: 'Local Guide • 42 reviews',
    review2_text: '"Incredibly clean place. The linen was fresh, the aroma was calming, and the therapist was so polite. Parking was easy right in front. The oil massage left me completely relaxed."',
    review2_time: 'Google Review • 1 month ago',
    review3_name: 'Wisarut M.',
    review3_role: 'Verified Reviewer',
    review3_text: '"Great value and worth every visit. Came in for the Thai Massage 90 mins and left feeling brand new. Therapist had perfect pressure. Very clean and professional. Book ahead by phone!"',
    review3_time: 'Google Review • 1 month ago',
    location_subtitle: 'Find Us',
    location_title: 'Visit SAN GAYA Massage',
    location_hours_title: 'Opening Hours',
    location_hours_detail: 'Open Daily: 1:00 PM – 9:00 PM',
    location_hours_note: '*Last appointment at 8:00 PM (advance booking recommended)',
    location_address_title: 'Our Location',
    location_address_name: 'SAN GAYA Massage',
    location_address_note: 'Spacious, safe parking available right in front',
    location_contact_title: 'Contact & Social',
    location_phone: 'Phone:',
    location_line: 'LINE Official:',
    location_facebook: 'Facebook:',
    location_facebook_name: 'San Gaya Massage',
    location_btn_map: 'Open in Google Maps',
    location_btn_call: 'Call for Directions',
    cta_title: 'Ready for SAN GAYA to Take Care of You?',
    cta_desc: 'Book your session today and let our expert therapists give you the care you deserve. No waiting — just relaxation.',
    cta_btn_call: 'Call Now: 092-609-6923',
    cta_btn_line: 'Add LINE @sangayamassage',
    footer_copy: '© 2026 SAN GAYA Massage. All Rights Reserved. Premium health massage services for ultimate relaxation.',
    sticky_call: '📞 Call to Book',
    sticky_line: '💬 Book on LINE',
  },

  th: {
    nav_services: 'บริการนวด',
    nav_highlights: 'จุดเด่นร้าน',
    nav_reviews: 'รีวิว',
    nav_location: 'แผนที่',
    hero_badge: '✨ สัมผัสประสบการณ์นวดผ่อนคลายระดับพรีเมียม',
    hero_title_main: 'SAN GAYA Massage',
    hero_title_sub: 'ฟื้นฟูร่างกาย คลายความเมื่อยล้า',
    hero_desc: 'บริการนวดเพื่อสุขภาพ นวดไทยโบราณ นวดออฟฟิศซินโดรม และนวดอโรมา โดยเทราพีสผู้เชี่ยวชาญมีใบรับรองมาตรฐาน สบส. บรรยากาศเงียบสงบ สะอาด เป็นส่วนตัว',
    hero_btn_call: 'โทรจองคิว: 092-609-6923',
    hero_btn_line: 'แอด LINE จองคิวด่วน',
    hero_pill1: 'ผ้าปูสะอาดซักอบฆ่าเชื้อเปลี่ยนทุกเคส 100%',
    hero_pill2: 'มีที่จอดรถสะดวกหน้าร้าน',
    highlights_subtitle: 'ทำไมต้องเลือกเรา',
    highlights_title: '4 จุดเด่นที่ SAN GAYA ให้ความสำคัญที่สุด',
    highlights_desc: 'เรามุ่งมั่นมอบมาตรฐานการบริการที่ดีที่สุด เพื่อความผ่อนคลายและความสบายใจสูงสุดของคุณ',
    highlight1_title: 'ผ้าปูสะอาดเปลี่ยนทุกเคส',
    highlight1_desc: 'ใส่ใจสุขอนามัยสูงสุด ผ้าปู ปลอกหมอน และผ้าเช็ดตัวผ่านการซักอบฆ่าเชื้อมาตรฐานโรงแรม เปลี่ยนชุดใหม่ทุกเคส 100%',
    highlight2_title: 'หมอนวดมีใบรับรอง สบส.',
    highlight2_desc: 'เทราพีสทุกคนผ่านการฝึกอบรม ขึ้นทะเบียนผู้ให้บริการนวดเพื่อสุขภาพจากกรมสนับสนุนบริการสุขภาพ (สบส.) สบายใจ นวดตรงจุด',
    highlight3_title: 'บรรยากาศส่วนตัว เงียบสงบ',
    highlight3_desc: 'ออกแบบพื้นที่ให้โปร่ง สะอาด ปราศจากเสียงรบกวน พร้อมกลิ่นหอมอโรมาธรรมชาติเบาๆ ช่วยให้ร่างกายและสมองผ่อนคลายเต็มที่',
    highlight4_title: 'มีที่จอดรถสะดวกสบาย',
    highlight4_desc: 'หมดกังวลเรื่องวนหาที่จอดรถ ร้านมีพื้นที่จอดรถกว้างขวาง ปลอดภัย บริเวณหน้าร้าน ปักหมุดเดินทางมาได้ง่ายดาย',
    services_subtitle: 'บริการของเรา',
    services_title: 'เมนูนวดเพื่อสุขภาพ SAN GAYA',
    services_desc: 'คัดสรรโปรแกรมนวดที่ตอบโจทย์ความเมื่อยล้า ครบครันทั้งนวดไทย ออฟฟิศซินโดรม อโรมา นวดเท้า และแบมบู ซิกเนเจอร์',
    service1_title: 'นวดไทยโบราณ',
    service1_desc: 'กดจุด ยืดดัด คลายเส้นตึงทั่วร่างกาย ลดอาการยึดเกร็ง คลายความอ่อนล้า ให้ร่างกายกลับมากระปรี้กระเปร่า',
    service2_title: 'นวดออฟฟิศซินโดรม',
    service2_badge: '🔥 ยอดนิยม',
    service2_desc: 'เน้นย้ำพิเศษบริเวณ คอ บ่า ไหล่ และสะบัก เหมาะสำหรับผู้ที่ทำงานนั่งหน้าคอมนานๆ หรือปวดสะบักจม',
    service3_title: 'นวดเท้า & กดจุดสะท้อน',
    service3_desc: 'แช่เท้าด้วยน้ำอุ่นสมุนไพร นวดคลายกล้ามเนื้อขาและกดจุดสะท้อนใต้ฝ่าเท้า กระตุ้นการไหลเวียนโลหิต',
    service4_title: 'นวดออยล์ / อโรมาบำบัด',
    service4_desc: 'นวดรีดเส้นอย่างนุ่มนวลด้วยน้ำมันหอมระเหยออร์แกนิค บำรุงผิวให้ชุ่มชื้น ลดความเครียด ช่วยให้หลับสบายยิ่งขึ้น',
    service5_title: 'แบมบู ซิกเนเจอร์ แมสเสจ',
    service5_badge: '✨ ซิกเนเจอร์',
    service5_desc: 'ทรีตเมนต์พิเศษเฉพาะร้านด้วยไม้ไผ่อุ่นๆ นวดกดลึกเข้าไปในกล้ามเนื้อ ให้ความรู้สึกผ่อนคลายสุดพิเศษที่ไม่เหมือนใคร',
    service_btn_call: '092-609-6923',
    service_btn_line: '',
    reviews_subtitle: 'รีวิวจากลูกค้าจริง',
    reviews_title: 'ความประทับใจผู้ใช้บริการ SAN GAYA Massage',
    google_rating_title: 'การันตีความประทับใจระดับ 5 ดาวบน Google Maps',
    google_rating_sub: 'จากรีวิวผู้ใช้บริการจริงร้าน SAN GAYA Massage (สันสาย เชียงใหม่)',
    google_badge: 'อ่านรีวิวทั้งหมดบน Google Maps ↗',
    review1_name: 'คุณภัทราภรณ์ K.',
    review1_role: 'Local Guide • 18 รีวิว',
    review1_text: '"นวดออฟฟิศซินโดรมดีมากกกค่ะ ปกติปวดสะบักจนนอนหลับยาก หมอนวดกดถูกจุดเป๊ะ เบามือแต่เข้าถึงเส้น ผ้าปูหอมสะอาด บรรยากาศเงียบสงบ ประทับใจมากค่ะ"',
    review1_time: 'Google Review • 2 สัปดาห์ที่แล้ว',
    review2_name: 'คุณอนันต์ T.',
    review2_role: 'Local Guide • 42 รีวิว',
    review2_text: '"ร้านสะอาดมากครับ ผ้าปูเปลี่ยนใหม่สดๆ กลิ่นอโรมาหอมผ่อนคลาย หมอนวดมารยาทดี มีที่จอดรถหน้าร้านจอดสะดวก นวดออยล์ผ่อนคลายสบายตัวสุดๆ"',
    review2_time: 'Google Review • 1 เดือนที่แล้ว',
    review3_name: 'คุณวิศรุต M.',
    review3_role: 'Verified Reviewer',
    review3_text: '"คุ้มค่าราคามากครับ มานวดไทย 90 นาที หายเมื่อยไปเยอะเลย หมอนวดน้ำหนักมือดีมาก สุภาพ ใส่ใจเรื่องความสะอาด แนะนำให้โทรจองคิวล่วงหน้านะครับ"',
    review3_time: 'Google Review • 1 เดือนที่แล้ว',
    location_subtitle: 'ที่ตั้งและการเดินทาง',
    location_title: 'แวะมาผ่อนคลายที่ SAN GAYA Massage',
    location_hours_title: 'เวลาเปิด - ปิดให้บริการ',
    location_hours_detail: 'เปิดให้บริการทุกวัน: 13.00 - 21.00 น.',
    location_hours_note: '*รับคิวสุดท้ายเวลา 20.00 น. (แนะนำจองคิวล่วงหน้า)',
    location_address_title: 'สถานที่ตั้งร้าน',
    location_address_name: 'SAN GAYA Massage',
    location_address_note: 'มีพื้นที่จอดรถกว้างขวาง ปลอดภัย บริเวณหน้าร้าน',
    location_contact_title: 'ติดต่อและติดตามโซเชียล',
    location_phone: 'โทรศัพท์:',
    location_line: 'LINE Official:',
    location_facebook: 'Facebook Page:',
    location_facebook_name: 'San Gaya Massage นวด เพื่อสุขภาพ',
    location_btn_map: 'เปิดนำทาง Google Maps',
    location_btn_call: 'โทรสอบถามเส้นทาง',
    cta_title: 'พร้อมให้ SAN GAYA ดูแลความผ่อนคลายของคุณแล้วหรือยัง?',
    cta_desc: 'สำรองคิวล่วงหน้าวันนี้ เพื่อรับการดูแลที่ดีที่สุดจากเทราพีสผู้เชี่ยวชาญ ไม่ต้องเสียเวลารอคิว',
    cta_btn_call: 'โทรจองคิวทันที: 092-609-6923',
    cta_btn_line: 'แอด LINE @sangayamassage',
    footer_copy: '© 2026 SAN GAYA Massage. All Rights Reserved. บริการนวดเพื่อสุขภาพเพื่อความผ่อนคลายสูงสุด',
    sticky_call: '📞 โทรจองคิว',
    sticky_line: '💬 แอด LINE จองคิว',
  },

  zh: {
    nav_services: '服务项目',
    nav_highlights: '我们的特色',
    nav_reviews: '客户评价',
    nav_location: '地图位置',
    hero_badge: '✨ 尊享顶级放松体验',
    hero_title_main: 'SAN GAYA 按摩',
    hero_title_sub: '修复身体，释放压力',
    hero_desc: '专业健康按摩服务——传统泰式按摩、办公室综合症按摩、精油芳疗等，由持证治疗师提供。宁静、整洁、私密的放松空间。',
    hero_btn_call: '电话预约: 092-609-6923',
    hero_btn_line: 'LINE 在线预约',
    hero_pill1: '每次更换经消毒床单，100% 卫生',
    hero_pill2: '店门前有宽敞免费停车位',
    highlights_subtitle: '为什么选择我们',
    highlights_title: 'SAN GAYA 的 4 大特色',
    highlights_desc: '我们致力于提供最高水准的服务，让您尽享极致放松与舒适。',
    highlight1_title: '每次更换新床单',
    highlight1_desc: '我们高度重视卫生。床单、枕套和毛巾均经过酒店级消毒清洗，每位客人使用全新套装，100% 保障。',
    highlight2_title: '持DHSS认证治疗师',
    highlight2_desc: '每位治疗师均经过专业培训，并在卫生部服务支持局（DHSS）注册备案。技术精湛，值得信赖。',
    highlight3_title: '私密宁静的环境',
    highlight3_desc: '空间设计开放、整洁，隔绝噪音。淡淡的天然香薰帮助身心彻底放松。',
    highlight4_title: '方便的免费停车场',
    highlight4_desc: '无需担心停车问题。店门前有宽敞、安全的停车场，按导航前来即可。',
    services_subtitle: '我们的招牌服务',
    services_title: 'SAN GAYA 按摩菜单',
    services_desc: '精心定制的按摩项目，满足您的多种需求——泰式、办公室综合症、精油、足部及竹制特色按摩。',
    service1_title: '传统泰式按摩',
    service1_desc: '穴位按压、拉伸及全身深层肌肉放松，缓解僵硬与酸痛，让您神清气爽、精力充沛。',
    service2_title: '办公室综合症按摩',
    service2_badge: '🔥 最受欢迎',
    service2_desc: '针对颈部、肩膀、上背及肩胛骨的深层放松，特别适合长时间坐在电脑前的上班族。',
    service3_title: '足部按摩',
    service3_desc: '草药热水泡脚后，进行腿部肌肉放松及反射区穴位按摩，促进血液循环，消除疲劳。',
    service4_title: '精油芳疗按摩',
    service4_desc: '使用有机精油进行轻柔滑动式按摩，滋养肌肤，减轻压力，促进更深沉的睡眠。',
    service5_title: '竹制特色按摩',
    service5_badge: '✨ 招牌项目',
    service5_desc: '本店独家疗程，采用温热竹棒深层揉压肌肉，带来无与伦比的放松体验。',
    service_btn_call: '092-609-6923',
    service_btn_line: '',
    reviews_subtitle: '真实客户评价',
    reviews_title: '客户对 SAN GAYA 的评价',
    google_rating_title: 'Google 地图 5 星好评认证',
    google_rating_sub: '来自 SAN GAYA Massage（清迈 San Sai）的真实客户评价',
    google_badge: '在 Google 地图查看全部评价 ↗',
    review1_name: 'Patthraporn K.',
    review1_role: 'Local Guide • 18 条评论',
    review1_text: '"办公室综合症按摩效果非常好！肩胛骨一直很痛影响睡眠，治疗师每个穴位都按得很准，力度轻柔却深入。床单香气清新，环境宁静，强烈推荐！"',
    review1_time: 'Google 评价 • 2 周前',
    review2_name: 'Anant T.',
    review2_role: 'Local Guide • 42 条评论',
    review2_text: '"店面非常整洁，床单全部更换，精油香气令人放松，治疗师礼貌周到，门前停车很方便。精油按摩结束后全身轻盈，太舒服了！"',
    review2_time: 'Google 评价 • 1 个月前',
    review3_name: 'Wisarut M.',
    review3_role: '认证评论者',
    review3_text: '"性价比极高！90 分钟泰式按摩后酸痛感消失大半，治疗师力度掌握得非常好，态度亲切。卫生状况很好，建议提前电话预约！"',
    review3_time: 'Google 评价 • 1 个月前',
    location_subtitle: '门店位置',
    location_title: '来 SAN GAYA 享受放松时光',
    location_hours_title: '营业时间',
    location_hours_detail: '每日营业：下午 1:00 – 晚上 9:00',
    location_hours_note: '*最后接待时间为晚上 8:00（建议提前预约）',
    location_address_title: '门店地址',
    location_address_name: 'SAN GAYA Massage',
    location_address_note: '门前有宽敞、安全的免费停车场',
    location_contact_title: '联系方式',
    location_phone: '电话：',
    location_line: 'LINE：',
    location_facebook: 'Facebook：',
    location_facebook_name: 'San Gaya Massage',
    location_btn_map: '在 Google 地图中打开',
    location_btn_call: '来电咨询路线',
    cta_title: '准备好让 SAN GAYA 为您服务了吗？',
    cta_desc: '立即预约，让我们的专业治疗师为您提供最贴心的服务。无需等待，尽享放松。',
    cta_btn_call: '立即致电: 092-609-6923',
    cta_btn_line: '添加 LINE @sangayamassage',
    footer_copy: '© 2026 SAN GAYA Massage. 版权所有。专业健康按摩服务，带来极致放松体验。',
    sticky_call: '📞 来电预约',
    sticky_line: '💬 LINE 预约',
  }
};

export const SUPPORTED_LANGS: LangCode[] = ['en', 'th', 'zh'];
export const DEFAULT_LANG: LangCode = 'en';
export const STORAGE_KEY = 'sangaya_lang';

export function getCurrentLang(): LangCode {
  const stored = localStorage.getItem(STORAGE_KEY);
  return (SUPPORTED_LANGS as string[]).includes(stored ?? '') ? (stored as LangCode) : DEFAULT_LANG;
}

export function setLang(lang: LangCode): void {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  localStorage.setItem(STORAGE_KEY, lang);
  applyTranslations(lang);
  updateLangSwitcherUI(lang);
  updateHtmlLang(lang);
}

export function applyTranslations(lang: LangCode): void {
  const t = translations[lang] ?? translations[DEFAULT_LANG];
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && t[key] !== undefined) {
      el.textContent = t[key];
    }
  });
}

export function updateLangSwitcherUI(lang: LangCode): void {
  document.querySelectorAll<HTMLButtonElement>('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-btn--active', btn.getAttribute('data-lang') === lang);
  });
}

export function updateHtmlLang(lang: LangCode): void {
  const langMap: Record<LangCode, string> = { en: 'en', th: 'th', zh: 'zh-CN' };
  document.documentElement.setAttribute('lang', langMap[lang]);
}

export function initI18n(): void {
  const lang = getCurrentLang();
  applyTranslations(lang);
  updateLangSwitcherUI(lang);
  updateHtmlLang(lang);
}
