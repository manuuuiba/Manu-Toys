// ===================================
// MANU TOYS - JavaScript Application
// ===================================

// Product Data - MINI GT Collection
// Product Data - Loaded from SQLite via API
let products = [];

async function fetchProducts() {
  try {
    const response = await fetch('http://127.0.0.1:5000/api/products');
    if (!response.ok) throw new Error('Network response was not ok');
    products = await response.json();
    console.log('Products loaded from database:', products.length);

    // Initial render once data is loaded
    renderNewArrivals();
    if (document.getElementById('productsGrid')) {
      renderProducts();
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    // Fallback or error message could go here
  }
}

// ===================================
// DOM Elements
// ===================================
let currentProduct = null;
let currentImageIndex = 0;
let slideInterval = null;
let activeCategory = 'mini-gt'; // Global state for category
let currentView = 'grid';      // 'grid' or 'list'

// ===================================
// Header Scroll Effect
// ===================================
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ===================================
// Mobile Menu Toggle
// ===================================
function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (!mobileMenuBtn || !navLinks) return;

  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking a link
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// ===================================
// Active Nav Link
// ===================================
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
}

// ===================================
// Scroll Animations
// ===================================
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(el => observer.observe(el));
}

// ===================================
// Product Rendering
// ===================================
// ===================================
// Product Rendering & Filtering
// ===================================
function renderProducts() {
  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;

  // Apply current view class
  if (currentView === 'list') {
    productsGrid.classList.add('list-view');
  } else {
    productsGrid.classList.remove('list-view');
  }

  // Sync button states
  const gridBtn = document.getElementById('gridViewBtn');
  const listBtn = document.getElementById('listViewBtn');
  if (gridBtn && listBtn) {
    gridBtn.classList.toggle('active', currentView === 'grid');
    listBtn.classList.toggle('active', currentView === 'list');
  }
  const searchInput = document.getElementById('productSearch');
  const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';

  // Filter products by category AND search query
  const filteredProducts = products.filter(p => {
    const matchesCategory = p.category === activeCategory;
    const matchesSearch = !searchQuery ||
      p.name.toLowerCase().includes(searchQuery) ||
      p.description.toLowerCase().includes(searchQuery) ||
      p.id.toString().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  // Clear grid
  productsGrid.innerHTML = '';

  // Show "No results" message if empty
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
      <div class="no-results fade-in">
        <i class="fas fa-search"></i>
        <h3>No encontramos ese modelo</h3>
        <p>No tenemos "${searchQuery}" en este momento, pero ¡podemos intentar conseguirlo para ti!</p>
        <a href="https://wa.me/525667796480?text=Hola%20Manu%20Toys,%20busco%20un%20modelo%20que%20no%20vi%20en%20la%20página:%20${searchQuery}" 
           class="btn btn-primary" target="_blank" rel="noopener noreferrer">
           Consultar por WhatsApp →
        </a>
      </div>
    `;
    return;
  }

  // Render products
  filteredProducts.forEach((product, index) => {
    const productCard = createProductCard(product, index);
    productsGrid.appendChild(productCard);
  });

  // Reinitialize scroll animations
  initScrollAnimations();
}

// View Toggle listeners
function initViewToggleListeners() {
  const gridBtn = document.getElementById('gridViewBtn');
  const listBtn = document.getElementById('listViewBtn');
  const productsGrid = document.getElementById('productsGrid'); // Renamed from 'grid' to avoid confusion and match existing usage

  if (gridBtn && listBtn && productsGrid) {
    gridBtn.addEventListener('click', () => {
      if (currentView === 'grid') return;
      currentView = 'grid';
      renderProducts();
    });

    listBtn.addEventListener('click', () => {
      if (currentView === 'list') return;
      currentView = 'list';
      renderProducts();
    });
  }
}


function showSkeletons() {
  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;

  productsGrid.innerHTML = '';
  // Show 4 skeleton cards
  for (let i = 0; i < 4; i++) {
    const skeleton = document.createElement('div');
    skeleton.className = 'skeleton-card';
    skeleton.innerHTML = `
      <div class="skeleton-image"></div>
      <div class="skeleton-info">
        <div class="skeleton-text short"></div>
        <div class="skeleton-text long"></div>
        <div class="skeleton-text btn"></div>
      </div>
    `;
    productsGrid.appendChild(skeleton);
  }
}

function createProductCard(product, index) {
  const card = document.createElement('div');

  // Determine badge type and text (priority: sold out > new > most wanted > low stock)
  let badgeHTML = '';
  if (product.isSoldOut) {
    badgeHTML = '<span class="product-badge badge-sold-out">¡AGOTADO!</span>';
  } else if (product.isNew) {
    badgeHTML = '<span class="product-badge badge-novedad">¡Novedad!</span>';
  } else if (product.isMostWanted) {
    badgeHTML = '<span class="product-badge badge-most-wanted">¡Más Buscado!</span>';
  } else if (product.isLowStock) {
    badgeHTML = '<span class="product-badge badge-low-stock">¡Pocas Unidades!</span>';
  }

  card.className = `product-card fade-in category-${product.category} ${product.isNew ? 'is-new' : ''}`;
  card.style.animationDelay = `${index * 0.05}s`;

  card.innerHTML = `
    <div class="product-image-container">
      ${badgeHTML}
      <img src="${product.images[0]}" alt="${product.name}" class="product-image" loading="lazy">
      <div class="product-overlay">
        <span style="color: white; font-weight: 600; font-size: 1.125rem;">Ver Detalles</span>
      </div>
    </div>
    <div class="product-info">
      <div class="product-number" style="${(product.category === 'hot-wheels' || product.category === 'hw-premium') ? 'display: none;' : ''}">#${product.id}</div>
      <h3 class="product-name">${product.name}</h3>
      <p style="color: var(--text-secondary); font-size: 0.875rem; margin: 0.5rem 0;">${product.description}</p>
      <button class="view-details-btn">Ver Detalles</button>
    </div>
  `;

  const productImage = card.querySelector('.product-image');
  let hoverInterval;
  let currentHoverIndex = 0;

  // Hover carousel for MINI GT
  if (product.category === 'mini-gt' && product.images.length > 1) {
    card.addEventListener('mouseenter', () => {
      hoverInterval = setInterval(() => {
        currentHoverIndex = (currentHoverIndex + 1) % product.images.length;
        productImage.style.opacity = '0.7';
        setTimeout(() => {
          productImage.src = product.images[currentHoverIndex];
          productImage.style.opacity = '1';
        }, 150);
      }, 1000); // Cycle every 1 second
    });

    card.addEventListener('mouseleave', () => {
      clearInterval(hoverInterval);
      currentHoverIndex = 0;
      productImage.src = product.images[0];
    });
  }

  card.addEventListener('click', () => openModal(product));

  return card;
}

// ===================================
// New Arrivals Section (Homepage)
// ===================================
function renderNewArrivals() {
  const newArrivalsGrid = document.getElementById('newArrivalsGrid');
  const newArrivalsSection = document.getElementById('newArrivalsSection');
  if (!newArrivalsGrid || !newArrivalsSection) return;

  const newProducts = products.filter(p => p.isNew);

  if (newProducts.length === 0) {
    newArrivalsSection.style.display = 'none';
    return;
  }

  newArrivalsSection.style.display = 'block';
  newArrivalsGrid.innerHTML = '';

  newProducts.forEach((product, index) => {
    const card = createProductCard(product, index);
    newArrivalsGrid.appendChild(card);
  });
}

// ===================================
// Related Products (Modal)
// ===================================
function renderRelatedProducts(currentProduct) {
  const relatedGrid = document.getElementById('relatedProductsGrid');
  const relatedContainer = document.getElementById('relatedProductsContainer');
  if (!relatedGrid || !relatedContainer) return;

  // Filter products from same category, excluding current
  const related = products
    .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
    .sort(() => 0.5 - Math.random()) // Randomize
    .slice(0, 3); // Take 3

  if (related.length === 0) {
    relatedContainer.style.display = 'none';
    return;
  }

  relatedContainer.style.display = 'block';
  relatedGrid.innerHTML = '';

  related.forEach((product, index) => {
    // We use a simplified version of createProductCard if needed, or just the same one
    const card = createProductCard(product, index);
    // Adjust size for related products if needed via CSS or classes
    card.classList.add('related-card');
    relatedGrid.appendChild(card);
  });
}

// ===================================
// Category Filtering
// ===================================
function initCategoryFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Hot Wheels is now active
      const category = btn.dataset.category;

      // If the button is disabled, do nothing
      if (btn.classList.contains('disabled')) return;

      // Update active state
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update global category and re-render
      activeCategory = category;
      currentProduct = null;

      // Show skeletons before rendering
      showSkeletons();
      setTimeout(() => {
        renderProducts();
      }, 400); // Brief delay for the "premium" feel
    });
  });
}

function initSearch() {
  const searchInput = document.getElementById('productSearch');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    renderProducts();
  });
}

// ===================================
// Modal Functions
// ===================================
function openModal(product) {
  currentProduct = product;
  currentImageIndex = 0;

  const modal = document.getElementById('productModal');
  if (!modal) return;

  // Update modal content
  updateModalContent();

  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Render related products
  renderRelatedProducts(product);

  startSlideShow();
}

function closeModal() {
  stopSlideShow();
  const modal = document.getElementById('productModal');
  if (!modal) return;

  modal.classList.remove('active');
  document.body.style.overflow = '';
  currentProduct = null;
  currentImageIndex = 0;
}


function updateModalContent() {
  if (!currentProduct) return;

  const mainImage = document.getElementById('modalMainImage');
  const modalTitle = document.getElementById('modalProductName');
  const modalNumber = document.getElementById('modalProductNumber');
  const modalDescription = document.getElementById('modalProductDescription');

  const modal = document.getElementById('productModal');
  if (modal) {
    // Remove previous category classes
    modal.classList.forEach(className => {
      if (className.startsWith('modal-category-')) {
        modal.classList.remove(className);
      }
    });
    // Add current category class
    modal.classList.add(`modal-category-${currentProduct.category}`);
  }

  // Update text content immediately
  if (modalTitle) modalTitle.textContent = currentProduct.name;
  if (modalNumber) {
    modalNumber.textContent = `#${currentProduct.id}`;
    modalNumber.style.display = (currentProduct.category === 'hot-wheels' || currentProduct.category === 'hw-premium') ? 'none' : 'block';
  }
  if (modalDescription) modalDescription.textContent = currentProduct.description;

  const longDesc = document.getElementById('modalLongDescription');
  const featuresList = document.getElementById('modalFeaturesList');

  if (currentProduct.category === 'hot-wheels') {
    if (longDesc) {
      longDesc.textContent = "Línea Básica: Los juguetes que todos conocemos, los auténticos Hot Wheels que han marcado generaciones. ¡Colecciónalos todos!";
    }
    if (featuresList) {
      featuresList.innerHTML = `
        <li>✓ Escala 1:64</li>
        <li>✓ Diseños icónicos</li>
        <li>✓ Construcción resistente</li>
        <li>✓ Diversión garantizada</li>
      `;
    }
  } else if (currentProduct.category === 'hw-premium') {
    if (longDesc) {
      longDesc.textContent = "Hot Wheels Premium: Modelos de alta gama con detalles superiores, base de metal y llantas de goma (Real Riders). La joya de la corona para coleccionistas.";
    }
    if (featuresList) {
      featuresList.innerHTML = `
        <li>✓ Escala 1:64</li>
        <li>✓ Llantas de Goma (Real Riders)</li>
        <li>✓ Carrocería y Base de Metal</li>
        <li>✓ Pintura y Detalles Premium</li>
      `;
    }
  } else {
    // MINI GT / Default
    if (longDesc) {
      longDesc.textContent = "Modelo a escala 1:64 de alta precisión. Réplica detallada con acabados premium, ideal para coleccionistas exigentes. Incluye detalles auténticos del vehículo original.";
    }
    if (featuresList) {
      featuresList.innerHTML = `
        <li>✓ Escala 1:64</li>
        <li>✓ Detalles ultra realistas</li>
        <li>✓ Acabados de alta calidad</li>
        <li>✓ Perfecto para coleccionistas</li>
      `;
    }
  }

  // Animate and update image
  if (mainImage) {
    const isHotWheels = currentProduct.category === 'hot-wheels' || currentProduct.category === 'hw-premium';

    if (isHotWheels) {
      // Direct update without animation for Hot Wheels
      mainImage.src = currentProduct.images[0];
      mainImage.classList.remove('slide-out-left', 'slide-in-right');
    } else {
      // Phase 1: Slide Out (Only for MINI GT or others with multiple images)
      mainImage.classList.add('slide-out-left');
      mainImage.classList.remove('slide-in-right');

      setTimeout(() => {
        // Phase 2: Change Source
        mainImage.src = currentProduct.images[currentImageIndex];

        // Phase 3: Slide In
        mainImage.onload = () => {
          mainImage.classList.remove('slide-out-left');
          mainImage.classList.add('slide-in-right');
        };
        // Fallback
        setTimeout(() => {
          mainImage.classList.remove('slide-out-left');
          mainImage.classList.add('slide-in-right');
        }, 50);

      }, 200);
    }
  }

  // Update thumbnails
  const thumbnailContainer = document.getElementById('modalThumbnails');
  if (thumbnailContainer) {
    thumbnailContainer.innerHTML = '';
    // Only show thumbnails if there's more than one image
    if (currentProduct.images.length > 1) {
      currentProduct.images.forEach((img, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = img;
        thumbnail.alt = `${currentProduct.name} - Image ${index + 1}`;
        thumbnail.className = 'thumbnail' + (index === currentImageIndex ? ' active' : '');
        thumbnail.addEventListener('click', () => selectImage(index));
        thumbnailContainer.appendChild(thumbnail);
      });
    }
  }
}

function selectImage(index) {
  currentImageIndex = index;
  updateModalContent();
  stopSlideShow();
  startSlideShow();
}

function startSlideShow() {
  stopSlideShow();
  // Don't start slideshow for Hot Wheels categories
  if (currentProduct && (currentProduct.category === 'hot-wheels' || currentProduct.category === 'hw-premium')) {
    return;
  }

  slideInterval = setInterval(() => {
    if (!currentProduct) return;
    currentImageIndex = (currentImageIndex + 1) % currentProduct.images.length;
    updateModalContent();
  }, 3000);
}

function stopSlideShow() {
  if (slideInterval) {
    clearInterval(slideInterval);
    slideInterval = null;
  }
}


function initModalControls() {
  // Close button
  const closeBtn = document.querySelector('.modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Click outside to close
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

// ===================================
// Contact Form Validation
// ===================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form fields
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    let isValid = true;

    // Validate name
    if (!name.value.trim()) {
      showError(name, 'Por favor ingresa tu nombre');
      isValid = false;
    } else {
      clearError(name);
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
      showError(email, 'Por favor ingresa un email válido');
      isValid = false;
    } else {
      clearError(email);
    }

    // Validate message
    if (!message.value.trim()) {
      showError(message, 'Por favor ingresa un mensaje');
      isValid = false;
    } else {
      clearError(message);
    }

    // If valid, show success
    if (isValid) {
      showSuccessMessage();
      form.reset();
    }
  });
}

function showError(field, message) {
  field.classList.add('error');
  let errorElement = field.nextElementSibling;
  if (!errorElement || !errorElement.classList.contains('form-error')) {
    errorElement = document.createElement('div');
    errorElement.className = 'form-error';
    field.parentNode.appendChild(errorElement);
  }
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}

function clearError(field) {
  field.classList.remove('error');
  const errorElement = field.nextElementSibling;
  if (errorElement && errorElement.classList.contains('form-error')) {
    errorElement.style.display = 'none';
  }
}

function showSuccessMessage() {
  // Create success message
  const successDiv = document.createElement('div');
  successDiv.className = 'success-message';
  successDiv.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: linear-gradient(135deg, #FF6B35, #FF8555);
    color: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(255, 107, 53, 0.3);
    z-index: 10000;
    animation: fadeInUp 0.3s ease;
    font-weight: 600;
  `;
  successDiv.textContent = '¡Mensaje enviado con éxito!';

  document.body.appendChild(successDiv);

  // Remove after 3 seconds
  setTimeout(() => {
    successDiv.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => successDiv.remove(), 300);
  }, 3000);
}


// ===================================
// Scroll to Top Button
// ===================================
function initScrollToTop() {
  // Create button
  const scrollBtn = document.createElement('button');
  scrollBtn.className = 'scroll-top-btn';
  scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollBtn.setAttribute('aria-label', 'Volver arriba');
  document.body.appendChild(scrollBtn);

  // Show/Hide on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });

  // Scroll to top on click
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ===================================
// Initialize Everything
// ===================================
/**
 * Countdown Timer Logic
 */
function initCountdown() {
  const countdownContainer = document.getElementById('countdown');
  if (!countdownContainer) return;

  // Set target date: 7 days from now for demonstration
  // In production, this can be set to a specific date like: new Date('2024-01-15T10:00:00').getTime();
  const targetDate = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('minutes');
    const secsEl = document.getElementById('seconds');

    if (daysEl) daysEl.innerText = days.toString().padStart(2, '0');
    if (hoursEl) hoursEl.innerText = hours.toString().padStart(2, '0');
    if (minsEl) minsEl.innerText = minutes.toString().padStart(2, '0');
    if (secsEl) secsEl.innerText = seconds.toString().padStart(2, '0');

    if (distance < 0) {
      clearInterval(timerInterval);
      document.querySelector('.countdown-section .countdown-title').innerText = "¡El Drop Esté Aquí!";
      countdownContainer.innerHTML = `<h3 style="color: var(--primary-orange); font-size: 2rem;">¡YA DISPONIBLE!</h3>`;
    }
  };

  const timerInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
}

// ===================================
// Gallery Lightbox
// ===================================
function initGalleryLightbox() {
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImg = document.getElementById('lightboxImage');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (!lightbox || !lightboxImg || galleryItems.length === 0) return;

  let currentIndex = 0;
  const images = Array.from(galleryItems).map(item => item.querySelector('img').src);

  const openLightbox = (index) => {
    currentIndex = index;
    lightboxImg.src = images[currentIndex];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  const showNext = () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex];
  };

  const showPrev = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex];
  };

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  setActiveNavLink();
  initScrollAnimations();
  initCategoryFilters();
  initModalControls();
  initContactForm();
  initScrollToTop();
  initCountdown();
  initSearch();
  initViewToggleListeners();
  initGalleryLightbox();

  // Load products from API
  fetchProducts();

  // Check URL params for category
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  if (categoryParam) {
    activeCategory = categoryParam;
    // Update button active state
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns.length > 0) {
      filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === activeCategory) {
          btn.classList.add('active');
        }
      });
    }
  }
});
