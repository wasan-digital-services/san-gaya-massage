# SAN GAYA Massage Project

โปรเจกต์รวมศูนย์สำหรับการพัฒนาเว็บไซต์และการตลาดของ **SAN GAYA Massage (ซานกายา นวดเพื่อสุขภาพ)**

---

## 📁 โครงสร้างโปรเจกต์ (Monorepo Structure)

```text
san-gaya-massage-web/
├── 🌐 web/                           # ซอร์สโค้ดเว็บไซต์ Sale Page
│   ├── src/                          # TypeScript, Styles, i18n
│   ├── public/                       # รูปภาพและ Assets ของเว็บ
│   ├── index.html                    # หน้าแรกเว็บไซต์
│   ├── firebase.json                 # การตั้งค่า Firebase Hosting
│   └── package.json                  # Scripts & Dependencies
│
└── 📁 docs/                          # เอกสารธุรกิจ กลยุทธ์การตลาด และรายงาน
    ├── marketing/                    # แผนกลยุทธ์การตลาดและ Ads
    │   ├── google_ads_recommendations.md
    │   ├── google_maps_recommendations.md
    │   └── san_gaya_business_profile.md
    ├── reports/                      # รายงานและสื่อสรุปผล
    │   ├── san_gaya_summary.html
    │   └── san_gaya_summary_th.png
    └── assets/                       # โลโก้และไฟล์มีเดียสำหรับงานเอกสาร
        └── san_gaya_health_massage_logo.jpeg
```

---

## 🚀 การรันและ Build เว็บไซต์

เข้าไปที่โฟลเดอร์ `web/`:

```bash
cd web

# รัน Development Server
npm run dev

# Build สำหรับ Production
npm run build

# Deploy ขึ้น Firebase Hosting
npm run deploy
```
