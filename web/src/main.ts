// Import styles
import './style.css';

// Import i18n
import { initI18n, setLang } from './i18n.js';

// Google Ads Conversion Labels (one per conversion action in Google Ads)
const AW_ID = 'AW-18381037285';
const CONVERSION_LABELS = {
  call: 'XHy6COXz_eAcEOW94bxE', // call_website
  line: 'e1NCCK2ql-IcEOW94bxE', // add_line_website
  map: 'aBGDCP7emOIcEOW94bxE', // web_directions
  facebook: 'bpi7CKarmeIcEOW94bxE' // web_facebook_click
};

function reportConversion(type) {
  const label = CONVERSION_LABELS[type];
  if (!label || typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', {
    'send_to': `${AW_ID}/${label}`,
    'value': 1.0,
    'currency': 'THB'
  });
}

// Global Google Ads Conversion Helper Function
window.gtag_report_conversion = function(url, type) {
  var callback = function () {
    if (typeof(url) !== 'undefined' && url) {
      window.location = url;
    }
  };
  const label = CONVERSION_LABELS[type] || CONVERSION_LABELS.call;
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      'send_to': `${AW_ID}/${label}`,
      'value': 1.0,
      'currency': 'THB',
      'event_callback': callback
    });
  } else if (url) {
    window.location = url;
  }
  return false;
};

// Main init
document.addEventListener('DOMContentLoaded', () => {
  console.log('SAN GAYA Massage Landing Page Loaded');

  // --- 1. Initialize i18n ---
  initI18n();

  // --- 2. Language Switcher ---
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLang(lang);
    });
  });

  // --- 3. Handle URL hash on initial load ---
  if (window.location.hash) {
    setTimeout(() => {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  }

  // --- 4. Navbar scroll class ---
  const navbar = document.querySelector('.navbar') as HTMLElement | null;
  if (navbar) {
    const handleNavScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();
  }

  // --- 5. Scroll-reveal animations ---
  const revealTargets = document.querySelectorAll<HTMLElement>(
    '.highlight-card, .service-card, .google-review-card, .location-info-card, .map-container, .google-rating-banner'
  );

  revealTargets.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealTargets.forEach(el => revealObserver.observe(el));

  // --- 6. Google Ads Conversion Tracking ---
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const url = link.getAttribute('href');
      if (typeof (window as any).gtag_report_conversion === 'function') {
        (window as any).gtag_report_conversion(url, 'call');
      } else if (url) {
        window.location.href = url;
      }
    });
  });

  document.querySelectorAll('a[href*="lin.ee"], a[href*="line.me"]').forEach(link => {
    link.addEventListener('click', () => reportConversion('line'));
  });

  document.querySelectorAll('a[href*="maps.app.goo.gl"], a[href*="google.com/maps"]').forEach(link => {
    link.addEventListener('click', () => reportConversion('map'));
  });

  document.querySelectorAll('a[href*="facebook.com"]').forEach(link => {
    link.addEventListener('click', () => reportConversion('facebook'));
  });
});


// Dynamic Google Places API Fetcher Helper (Option to dynamic load Google Maps Reviews)
window.fetchGoogleReviews = function(placeId, googleApiKey) {
  if (!googleApiKey || !placeId) return;

  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=places&callback=initGooglePlacesReviews`;
  script.async = true;
  document.head.appendChild(script);

  window.initGooglePlacesReviews = function() {
    const dummyDiv = document.createElement('div');
    const service = new google.maps.places.PlacesService(dummyDiv);

    service.getDetails({ placeId: placeId, fields: ['name', 'rating', 'user_ratings_total', 'reviews'] }, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && place.reviews) {
        renderDynamicReviews(place.reviews);
      }
    });
  };
};

function renderDynamicReviews(reviews) {
  const container = document.getElementById('google-reviews-container');
  if (!container || !reviews.length) return;

  const gSvg = `<svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>`;

  container.innerHTML = reviews.slice(0, 3).map(r => `
    <div class="google-review-card">
      <div>
        <div class="google-review-header">
          <div class="review-author">
            <div class="author-avatar">${r.author_name ? r.author_name.charAt(0) : 'G'}</div>
            <div class="author-details">
              <h5>${r.author_name}</h5>
              <p>Google Verified Reviewer</p>
            </div>
          </div>
          <div class="google-icon-badge">${gSvg}</div>
        </div>
        <div class="review-stars">${'★'.repeat(r.rating || 5)}</div>
        <p class="review-text">"${r.text}"</p>
      </div>
      <div class="review-time">Google Review • ${r.relative_time_description || 'Recently'}</div>
    </div>
  `).join('');
}
