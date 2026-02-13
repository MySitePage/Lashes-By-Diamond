# 💎 Lashes by Diamond - Website

A premium, high-fashion website for a lash technician business with **BADDIE vibes** - featuring neon pink (#FF10F0) and black color scheme perfect for a confident, luxury aesthetic.

## 📁 Files Included

1. **index.html** - Main website file with all sections
2. **styles.css** - Complete styling with gradients, animations, and responsive design
3. **script.js** - Interactive features and form handling
4. **README.md** - This file

## 🎯 Features

✨ **Fully Responsive** - Looks amazing on desktop, tablet, and mobile
🎨 **Premium Design** - Neon pink and black gradient aesthetic with smooth animations
💗 **Multiple Sections:**
   - Hero section with call-to-action
   - Services showcase (6 lash service types)
   - Pricing with featured popular option
   - Booking form with validation
   - Policies and aftercare information
   - About section with business stats
   - Contact information
   - Sticky navigation

📱 **Interactive Elements:**
   - Smooth scrolling navigation
   - Booking form with client validation
   - Hover animations on cards
   - Success messages after booking
   - Scroll animations
   - Mobile-optimized

## 🚀 How to Use

1. **Open in Browser**: Simply double-click `index.html` or open it in any web browser
2. **No Installation Required** - This is a standalone website, no dependencies needed!

## 🎨 Customization Guide

### Change Business Info
Open `index.html` and find these sections to update:

```html
<!-- Navigation Logo -->
<div class="logo">💎 Lashes by Diamond</div>

<!-- Hero Section -->
<h1 class="hero-title">LASHES BY DIAMOND</h1>

<!-- Booking Info -->
<p><strong>📞 Contact:</strong><br>(555) 123-LASH<br>info@lashesbydiamond.com</p>

<!-- Social Links -->
<a href="#" class="social-link">Instagram</a>
```

### Update Prices
In `index.html`, find the pricing cards section (search for "PRICING"):

```html
<div class="pricing-card">
    <h3>Service Name</h3>
    <p class="price">$XX</p>
```

### Customize Hours/Location
In the booking section, update:

```html
<p><strong>⏰ Hours:</strong><br>Tuesday - Saturday<br>9:00 AM - 6:00 PM</p>
<p><strong>📍 Location:</strong><br>Available by appointment in your area</p>
```

### Change Colors

Open `styles.css` and replace the color codes:

- **Neon Pink Main**: `#ff10f0` (find/replace all)
- **Hot Pink Accent**: `#ff69b4` (find/replace all)
- **Black Background**: `#0a0a0a` (find/replace all)

Example: Change all neon pink to a different color
```css
/* Old */
border: 2px solid #ff10f0;

/* New - for example, neon purple */
border: 2px solid #d700ff;
```

### Add Your Images

Add photos by creating an "images" folder and updating the HTML. For example, add a gallery section:

```html
<div class="gallery">
    <img src="images/lash1.jpg" alt="Lash work">
    <img src="images/lash2.jpg" alt="Lash work">
</div>
```

### Modify Services

In the "Services Section", update or add services:

```html
<div class="service-card">
    <div class="service-icon">✨</div>
    <h3>Your Service Name</h3>
    <p>Description of your service...</p>
</div>
```

### Update Policies

Find the "POLICIES & AFTERCARE" section and modify text as needed. Each policy card is individually editable.

### Change Social Media Links

In the Contact section, update:

```html
<a href="https://instagram.com/LashesByDiamond" class="social-link">Instagram</a>
```

## 📋 Form Submission

The booking form currently shows a confirmation message in an alert. To actually send emails:

**Option 1: Use Formspree** (Easy, Free)
1. Go to https://formspree.io
2. Create a free account
3. Replace the form action in `index.html`:

```html
<form class="booking-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: Use Email Service**
- Contact your web host about form-to-email services
- Or hire a developer to set up a backend

**Option 3: Manual Integration**
- Connect to services like Zapier, Make.com, or similar

## 🎯 Tips for Best Results

1. **Add Real Photos** - Replace placeholder emojis with actual before/after lash photos
2. **Get More Testimonials** - Add a testimonials section with client reviews
3. **Add Portfolio** - Create a gallery showing your best work
4. **Google Maps** - Embed your location on the contact page
5. **Social Media** - Link to your Instagram/TikTok for more engagement
6. **SEO** - Add meta descriptions for search engines (in the `<head>` tag)

## 🔧 Technical Details

- **Built with**: HTML5, CSS3, JavaScript (ES6)
- **Responsive Breakpoints**: 768px and 480px
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)
- **Performance**: Fully optimized, lightweight, fast loading
- **Accessibility**: Semantic HTML, proper contrast ratios

## 💬 Support Notes

- The booking form works standalone (shows confirmation alerts)
- To enable actual email submissions, you'll need backend integration
- All animations are smooth and GPU-accelerated
- Mobile experience is fully optimized

## 🎀 Features Ready to Use

✅ Fully functional booking system (alert-based)
✅ Pricing calculator display
✅ Policy information
✅ Aftercare guide
✅ Contact section
✅ Smooth animations
✅ Mobile responsive
✅ Professional branding
✅ Easy to customize
✅ No coding knowledge needed for basic updates

---

**Made with 💗 for Lashes by Diamond**

Update the content, save, and you're LIVE! 💎✨
