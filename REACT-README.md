# GIGALAB React Website

## 🚀 React Version with App.jsx

This is the **React version** of your GIGALAB website using React Router for navigation.

## 📁 Project Structure

```
gigalab-react/
├── package.json          # Dependencies & scripts
├── public/
│   └── index.html       # HTML template
└── src/
    ├── App.jsx          # Main app with routing ✨
    ├── index.js         # Entry point
    ├── components/
    │   ├── Header.jsx   # Logo & navigation
    │   └── Footer.jsx   # Footer component
    ├── pages/
    │   ├── Home.jsx     # Landing page
    │   ├── Services.jsx # Services page
    │   ├── Portfolio.jsx# Portfolio page
    │   ├── About.jsx    # About page
    │   └── Contact.jsx  # Contact page
    └── styles/
        └── App.css      # All styles
```

## 🎯 Key Features

✅ **React Router** - Client-side routing (no page reloads!)
✅ **Component-based** - Reusable Header & Footer
✅ **Single Page App** - Fast, smooth transitions
✅ **Modern React** - Hooks (useState, useEffect)
✅ **Responsive** - Mobile-first design
✅ **Animated** - Scroll effects & transitions

## 🛠️ Setup & Run Locally

### 1. Install Dependencies

```bash
cd gigalab-react
npm install
```

This installs:
- React 18
- React Router DOM 6
- React Scripts (Create React App)

### 2. Start Development Server

```bash
npm start
```

Opens at `http://localhost:3000`

- Hot reload enabled (changes update instantly)
- Dev tools integrated

### 3. Build for Production

```bash
npm run build
```

Creates optimized production build in `build/` folder

## 🌐 Deployment Options

### Option 1: Netlify (Recommended for React)

**Method A - Drag & Drop:**
1. Run `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `build` folder
4. Done! ✨

**Method B - GitHub Integration:**
1. Push code to GitHub
2. Connect repository in Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
4. Auto-deploys on every push!

### Option 2: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts
4. Done!

Or use Vercel dashboard to connect GitHub repo

### Option 3: GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/gigalab",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:
```bash
npm run deploy
```

## 🔄 How Routing Works

**App.jsx** is the central file that manages all routes:

```jsx
<Router>
  <Header />          {/* Shows on all pages */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  <Footer />          {/* Shows on all pages */}
</Router>
```

**Navigation Links** use React Router's `<Link>`:
```jsx
<Link to="/services">Services</Link>
```

No page reloads - instant navigation! ⚡

## ✏️ Customization

### Change Content

Edit the page components in `src/pages/`:
- `Home.jsx` - Landing page
- `Services.jsx` - Services content
- `Portfolio.jsx` - Projects showcase
- `About.jsx` - Company info
- `Contact.jsx` - Contact form

### Change Colors

Edit `src/styles/App.css`:
```css
:root {
  --primary-blue: #4D4DFF;
  --electric-blue: #6B6BFF;
  /* ... more colors */
}
```

### Add New Page

1. Create `src/pages/NewPage.jsx`:
```jsx
import React from 'react';

function NewPage() {
  return <div>New Page Content</div>;
}

export default NewPage;
```

2. Add route in `App.jsx`:
```jsx
import NewPage from './pages/NewPage';

<Route path="/newpage" element={<NewPage />} />
```

3. Add link in `Header.jsx`:
```jsx
<Link to="/newpage">New Page</Link>
```

## 🎨 Why React?

**Advantages over plain HTML:**
- ✅ Component reusability (write once, use everywhere)
- ✅ No page reloads (faster navigation)
- ✅ Easy state management
- ✅ Better developer experience
- ✅ Scales well for larger apps
- ✅ Huge ecosystem of libraries

## 📦 Dependencies

```json
{
  "react": "^18.2.0",           // UI library
  "react-dom": "^18.2.0",       // React for web
  "react-router-dom": "^6.20.0", // Routing
  "react-scripts": "5.0.1"      // Build tooling
}
```

## 🐛 Common Issues

**Issue:** `npm install` fails
**Fix:** Delete `node_modules` and `package-lock.json`, run `npm install` again

**Issue:** Port 3000 already in use
**Fix:** Kill process on port 3000 or run `PORT=3001 npm start`

**Issue:** Blank page after deployment
**Fix:** Check browser console for errors. Ensure `homepage` in package.json matches your deploy URL

## 🔧 Development Commands

```bash
npm start          # Start dev server
npm run build      # Production build
npm test           # Run tests
npm run eject      # Eject from Create React App (irreversible!)
```

## 📱 Progressive Web App (Optional)

Want to make it a PWA?

1. Uncomment in `src/index.js`:
```js
// serviceWorkerRegistration.register();
```

2. Add icons to `public/` folder
3. Configure `manifest.json`

## 🚀 Performance

- Code splitting ready
- Lazy loading supported
- Optimized production builds
- Fast refresh in development

## 📚 Learn More

- [React Docs](https://react.dev/)
- [React Router Docs](https://reactrouter.com/)
- [Create React App Docs](https://create-react-app.dev/)

## 🆚 React vs HTML Version

**Use React if:**
- You want modern, component-based architecture
- Planning to add complex features later
- Want smooth, no-reload navigation
- Comfortable with npm and build tools

**Use HTML if:**
- Need simple, static website
- Want to edit directly in any text editor
- Don't want to deal with build process
- Hosting on basic server

---

**You now have BOTH versions:**
- HTML version (simpler, ready to go)
- React version (modern, scalable) ✨

Choose what works best for your needs!
