# SAN GAYA Massage Project (ซานกายา นวดเพื่อสุขภาพ)

โปรเจกต์รวมศูนย์สำหรับการพัฒนาเว็บไซต์และการตลาดของ **SAN GAYA Massage (ซานกายา นวดเพื่อสุขภาพ)** สาขาสนามกอล์ฟ M Sport Plus สันทราย เชียงใหม่

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
sangaya/
├── 🌐 web/                           # ซอร์สโค้ดและไฟล์ของเว็บไซต์ / Salepage
│   ├── src/                          # TypeScript, Styles, i18n
│   ├── public/                       # รูปภาพและ Assets ของเว็บ
│   ├── index.html                    # หน้าแรกเว็บไซต์
│   ├── firebase.json                 # การตั้งค่า Firebase Hosting
│   ├── package.json                  # Scripts & Dependencies
│   ├── tsconfig.json                 # TypeScript config
│   ├── vite.config.js                # Vite build config
│   └── dist/                         # Production build output
│
├── 📁 docs/                          # เอกสารธุรกิจ กลยุทธ์การตลาด และนโยบาย
│   ├── README.md                     # ข้อมูลร้าน, พิกัด, นโยบายความลับราคา
│   ├── rules/                        # กฎเกณฑ์และข้อกำหนด
│   ├── marketing/                    # แผนกลยุทธ์การตลาดและ Ads
│   └── assets/                       # โลโก้และไฟล์มีเดียสำหรับงานเอกสาร
│
├── 📊 reports/                       # รายงานผลโฆษณา Google Ads
│   └── search/                       # รายงาน Search Campaign (HTML & PNG)
│       ├── search_30aug2026.html
│       └── search_30aug2026.png
│
├── 🖼️ assets/                        # ไฟล์ Asset และสื่อโฆษณา
│   └── google_ads_images/            # รูปภาพที่ใช้สำหรับรัน Google Ads
│
├── .gitignore
└── README.md
```

---

## 🚀 การพัฒนาและ Deploy เว็บไซต์

คำสั่งทั้งหมดให้รันจากภายในโฟลเดอร์ `web/`:

```bash
cd web

# 1. ติดตั้ง Dependencies
npm install

# 2. รัน Local Development Server
npm run dev

# 3. Build สำหรับ Production
npm run build

# 4. Deploy ขึ้น Firebase Hosting
npm run deploy
```

---

## 🔒 ข้อมูลแคมเปญและนโยบาย

- **ข้อมูลแคมเปญและนโยบายราคา:** ดูได้ใน [`docs/README.md`](docs/README.md)
- **รายงานผลโฆษณา Search:** ดูได้ใน [`reports/search/`](reports/search/)
