import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS JavaScript

// Initialize AOS
AOS.init({
  // Global settings:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element should trigger the animation

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  animatedClassName: 'aos-animate', // class applied after animation has been done
  initClassName: 'aos-init', // class applied to animated elements before animation has been initiated
});
createRoot(document.getElementById("root")!).render(<App />);
