// ===================================
// MANU TOYS - JavaScript Application
// ===================================

// Product Data - MINI GT Collection
const products = [
  {
    id: 496,
    category: 'mini-gt',
    name: 'McLaren Artura',
    description: 'Flux Green',
    images: [
      'resources/images/Productos/MINI GT/496 McLaren Artura (Flux Green)/496.jpeg',
      'resources/images/Productos/MINI GT/496 McLaren Artura (Flux Green)/496-2.jpeg',
      'resources/images/Productos/MINI GT/496 McLaren Artura (Flux Green)/496-3.jpeg',
      'resources/images/Productos/MINI GT/496 McLaren Artura (Flux Green)/496-4.jpeg'
    ]
  },
  {
    id: 702,
    category: 'mini-gt',
    name: 'Nissan Skyline Kenmeri Liberty Walk',
    description: 'White',
    images: [
      'resources/images/Productos/MINI GT/702 Nissan Skyline Kenmeri Liberty Walk (White)/702.jpeg',
      'resources/images/Productos/MINI GT/702 Nissan Skyline Kenmeri Liberty Walk (White)/702-2.jpeg',
      'resources/images/Productos/MINI GT/702 Nissan Skyline Kenmeri Liberty Walk (White)/702-3.jpeg',
      'resources/images/Productos/MINI GT/702 Nissan Skyline Kenmeri Liberty Walk (White)/702-4.jpeg'
    ]
  },
  {
    id: 714,
    category: 'mini-gt',
    name: 'Nissan Silvia (S15) Top Secret',
    description: 'D1GP',
    images: [
      'resources/images/Productos/MINI GT/714 Nissan Silvia (S15) Top Secret D1GP/714.jpeg',
      'resources/images/Productos/MINI GT/714 Nissan Silvia (S15) Top Secret D1GP/714-2.jpeg',
      'resources/images/Productos/MINI GT/714 Nissan Silvia (S15) Top Secret D1GP/714-3.jpeg',
      'resources/images/Productos/MINI GT/714 Nissan Silvia (S15) Top Secret D1GP/714-4.jpeg'
    ]
  },
  {
    id: 748,
    category: 'mini-gt',
    name: 'Lamborghini Revuelto',
    description: 'Blu Eleos',
    images: [
      'resources/images/Productos/MINI GT/748 Lamborghini Revuelto (Blu Eleos)/748.jpeg',
      'resources/images/Productos/MINI GT/748 Lamborghini Revuelto (Blu Eleos)/748-2.jpeg',
      'resources/images/Productos/MINI GT/748 Lamborghini Revuelto (Blu Eleos)/748-3.jpeg',
      'resources/images/Productos/MINI GT/748 Lamborghini Revuelto (Blu Eleos)/748-4.jpeg'
    ]
  },
  {
    id: 759,
    category: 'mini-gt',
    name: 'Nissan Skyline GT-R R34 V-Spec',
    description: 'Bayside Blue',
    images: [
      'resources/images/Productos/MINI GT/759 Nissan Skyline GT-R R34 V-Spec (Bayside Blue)/759.jpg',
      'resources/images/Productos/MINI GT/759 Nissan Skyline GT-R R34 V-Spec (Bayside Blue)/759-2.jpeg',
      'resources/images/Productos/MINI GT/759 Nissan Skyline GT-R R34 V-Spec (Bayside Blue)/759-3.jpeg',
      'resources/images/Productos/MINI GT/759 Nissan Skyline GT-R R34 V-Spec (Bayside Blue)/759-4.jpeg'
    ]
  },
  {
    id: 796,
    category: 'mini-gt',
    name: 'Nissan Skyline GT-R R34 V-Spec',
    description: 'Active Red',
    images: [
      'resources/images/Productos/MINI GT/796 Nissan Skyline GT-R R34 V-Spec (Active Red)/796.jpg',
      'resources/images/Productos/MINI GT/796 Nissan Skyline GT-R R34 V-Spec (Active Red)/796-2.jpeg',
      'resources/images/Productos/MINI GT/796 Nissan Skyline GT-R R34 V-Spec (Active Red)/796-3.jpeg',
      'resources/images/Productos/MINI GT/796 Nissan Skyline GT-R R34 V-Spec (Active Red)/796-4.jpeg'
    ]
  },
  {
    id: 812,
    category: 'mini-gt',
    name: 'McLaren 750S Spider',
    description: 'Belize Blue',
    images: [
      'resources/images/Productos/MINI GT/812 McLaren 750S Spider (Belize Blue)/812.jpg',
      'resources/images/Productos/MINI GT/812 McLaren 750S Spider (Belize Blue)/812-2.jpeg',
      'resources/images/Productos/MINI GT/812 McLaren 750S Spider (Belize Blue)/812-3.jpeg',
      'resources/images/Productos/MINI GT/812 McLaren 750S Spider (Belize Blue)/812-4.jpeg'
    ]
  },
  {
    id: 814,
    category: 'mini-gt',
    name: 'McLaren 750S',
    description: 'McLaren Orange',
    images: [
      'resources/images/Productos/MINI GT/814 McLaren 750S (McLaren Orange)/814.jpg',
      'resources/images/Productos/MINI GT/814 McLaren 750S (McLaren Orange)/814-2.jpeg',
      'resources/images/Productos/MINI GT/814 McLaren 750S (McLaren Orange)/814-3.jpeg',
      'resources/images/Productos/MINI GT/814 McLaren 750S (McLaren Orange)/814-4.jpeg'
    ]
  },
  {
    id: 850,
    category: 'mini-gt',
    name: 'Nissan Z GT500 #24',
    description: 'REALIZE CORPORATION ADVAN Z - KONDO RACING 2023 SUPER GT',
    images: [
      'resources/images/Productos/MINI%20GT/850_Nissan_Z_GT500_24_REALIZE_CORPORTATION_ADVAN_Z_KONDO_RACING_2023_SUPER_GT_SERIES/850.jpeg',
      'resources/images/Productos/MINI%20GT/850_Nissan_Z_GT500_24_REALIZE_CORPORTATION_ADVAN_Z_KONDO_RACING_2023_SUPER_GT_SERIES/850-2.jpeg',
      'resources/images/Productos/MINI%20GT/850_Nissan_Z_GT500_24_REALIZE_CORPORTATION_ADVAN_Z_KONDO_RACING_2023_SUPER_GT_SERIES/850-3.jpeg',
      'resources/images/Productos/MINI%20GT/850_Nissan_Z_GT500_24_REALIZE_CORPORTATION_ADVAN_Z_KONDO_RACING_2023_SUPER_GT_SERIES/850-4.jpeg'
    ]
  },
  {
    id: 857,
    category: 'mini-gt',
    name: 'Nissan Silvia (S15) D-MAX #46',
    description: 'D-MAX Racing 2023 D1 Grand Prix',
    images: [
      'resources/images/Productos/MINI%20GT/857%20Nissan%20Silvia%20(S15)%20D-MAX%20%2346%20D-MAX%20Racing%202023%20D1%20Grand%20Prix/857.jpeg',
      'resources/images/Productos/MINI%20GT/857%20Nissan%20Silvia%20(S15)%20D-MAX%20%2346%20D-MAX%20Racing%202023%20D1%20Grand%20Prix/857-2.jpeg',
      'resources/images/Productos/MINI%20GT/857%20Nissan%20Silvia%20(S15)%20D-MAX%20%2346%20D-MAX%20Racing%202023%20D1%20Grand%20Prix/857-3.jpeg',
    ]
  },
  {
    id: 860,
    category: 'mini-gt',
    name: 'Nissan GT-R NISMO GT3 #10',
    description: 'PONOS GAINER GT-R 2023 SUPER GT',
    images: [
      'resources/images/Productos/MINI%20GT/860%20Nissan%20GT-R%20NISMO%20GT3%20%2310%20PONOS%20GAINER%20GT-R%202023%20SUPER%20GT%20SERIES/860.jpeg',
      'resources/images/Productos/MINI%20GT/860%20Nissan%20GT-R%20NISMO%20GT3%20%2310%20PONOS%20GAINER%20GT-R%202023%20SUPER%20GT%20SERIES/860-2.jpeg',
      'resources/images/Productos/MINI%20GT/860%20Nissan%20GT-R%20NISMO%20GT3%20%2310%20PONOS%20GAINER%20GT-R%202023%20SUPER%20GT%20SERIES/860-3.jpeg',
      'resources/images/Productos/MINI%20GT/860%20Nissan%20GT-R%20NISMO%20GT3%20%2310%20PONOS%20GAINER%20GT-R%202023%20SUPER%20GT%20SERIES/860-4.jpeg'
    ]
  },
  {
    id: 869,
    category: 'mini-gt',
    name: 'Nissan Skyline GT-R R32',
    description: 'Gunmetal - Tsugio Matsuda Collection',
    images: [
      'resources/images/Productos/MINI GT/869 Nissan Skyline GT-R R32 (Gunmetal) W: Matsuda Figure Tsugio Matsuda Collection/869.jpg',
      'resources/images/Productos/MINI GT/869 Nissan Skyline GT-R R32 (Gunmetal) W: Matsuda Figure Tsugio Matsuda Collection/869-2.jpeg',
      'resources/images/Productos/MINI GT/869 Nissan Skyline GT-R R32 (Gunmetal) W: Matsuda Figure Tsugio Matsuda Collection/869-3.jpeg',
      'resources/images/Productos/MINI GT/869 Nissan Skyline GT-R R32 (Gunmetal) W: Matsuda Figure Tsugio Matsuda Collection/869-4.jpeg'
    ]
  },
  {
    id: 871,
    category: 'mini-gt',
    name: 'Hyundai i20 N Rally1 Hybrid #11',
    description: '2024 Rallye Monte-Carlo Winner',
    images: [
      'resources/images/Productos/MINI%20GT/871%20Hyundai%20i20%20N%20Rally1%20Hybrid%20%2311%202024%20Rallye%20Monte-Carlo%20Winner/871.jpeg',
      'resources/images/Productos/MINI%20GT/871%20Hyundai%20i20%20N%20Rally1%20Hybrid%20%2311%202024%20Rallye%20Monte-Carlo%20Winner/871-2.jpeg',
      'resources/images/Productos/MINI%20GT/871%20Hyundai%20i20%20N%20Rally1%20Hybrid%20%2311%202024%20Rallye%20Monte-Carlo%20Winner/871-3.jpeg',
      'resources/images/Productos/MINI%20GT/871%20Hyundai%20i20%20N%20Rally1%20Hybrid%20%2311%202024%20Rallye%20Monte-Carlo%20Winner/871-4.jpeg'
    ]
  },
  {
    id: 875,
    category: 'mini-gt',
    name: 'Nissan GT-R NISMO #23',
    description: 'MOTUL AUTECH GT-R 2021 SUPER GT - Tsugio Matsuda Collection',
    images: [
      'resources/images/Productos/MINI%20GT/875%20Nissan%20GT-R%20NISMO%20%2323%20MOTUL%20AUTECH%20GT-R%202021%20SUPER%20GT%20SERIES%20Suzuka%20winner%20W%20Matsuda%20Figure%20Tsugio%20Matsuda%20Collection%20No.2/875.jpeg',
      'resources/images/Productos/MINI%20GT/875%20Nissan%20GT-R%20NISMO%20%2323%20MOTUL%20AUTECH%20GT-R%202021%20SUPER%20GT%20SERIES%20Suzuka%20winner%20W%20Matsuda%20Figure%20Tsugio%20Matsuda%20Collection%20No.2/875-2.jpeg',
    ]
  },
  {
    id: 885,
    category: 'mini-gt',
    name: 'Toyota GR86 LB★Nation',
    description: 'Red',
    images: [
      'resources/images/Productos/MINI GT/885 Toyota GR86 LB★Nation (Red)/885.jpg',
      'resources/images/Productos/MINI GT/885 Toyota GR86 LB★Nation (Red)/885-2.jpeg',
      'resources/images/Productos/MINI GT/885 Toyota GR86 LB★Nation (Red)/885-3.jpeg',
      'resources/images/Productos/MINI GT/885 Toyota GR86 LB★Nation (Red)/885-4.jpeg'
    ]
  },
  {
    id: 886,
    category: 'mini-gt',
    name: 'Lamborghini Revuelto',
    description: 'Giallo',
    images: [
      'resources/images/Productos/MINI GT/886 Lamborghini Revuelto (Giallo)/886.jpg',
      'resources/images/Productos/MINI GT/886 Lamborghini Revuelto (Giallo)/886-2.jpeg',
      'resources/images/Productos/MINI GT/886 Lamborghini Revuelto (Giallo)/886-3.jpeg',
      'resources/images/Productos/MINI GT/886 Lamborghini Revuelto (Giallo)/886-4.jpeg'
    ]
  },
  {
    id: 889,
    category: 'mini-gt',
    name: 'Porsche 911 GT3 R #77',
    description: 'AO Racing 2024 IMSA Daytona 24 Hrs GTD Pro 2nd Place',
    images: [
      'resources/images/Productos/MINI%20GT/889%20Porsche%20911%20GT3%20R%20%2377%20AO%20Racing%202024%20IMSA%20Daytona%2024%20Hrs%20GTD%20Pro%202nd%20Place/889.jpeg',
      'resources/images/Productos/MINI%20GT/889%20Porsche%20911%20GT3%20R%20%2377%20AO%20Racing%202024%20IMSA%20Daytona%2024%20Hrs%20GTD%20Pro%202nd%20Place/889-2.jpeg',
      'resources/images/Productos/MINI%20GT/889%20Porsche%20911%20GT3%20R%20%2377%20AO%20Racing%202024%20IMSA%20Daytona%2024%20Hrs%20GTD%20Pro%202nd%20Place/889-3.jpeg',
      'resources/images/Productos/MINI%20GT/889%20Porsche%20911%20GT3%20R%20%2377%20AO%20Racing%202024%20IMSA%20Daytona%2024%20Hrs%20GTD%20Pro%202nd%20Place/889-4.jpeg'
    ]
  },
  {
    id: 890,
    category: 'mini-gt',
    name: 'Bugatti EB110 Super Sport',
    description: 'Blu Bugatti',
    images: [
      'resources/images/Productos/MINI GT/890 Bugatti EB110 Super Sport (Blu Bugatti)/890.jpg',
      'resources/images/Productos/MINI GT/890 Bugatti EB110 Super Sport (Blu Bugatti)/890-2.jpeg',
      'resources/images/Productos/MINI GT/890 Bugatti EB110 Super Sport (Blu Bugatti)/890-3.jpeg',
      'resources/images/Productos/MINI GT/890 Bugatti EB110 Super Sport (Blu Bugatti)/890-4.jpeg'
    ]
  },
  {
    id: 953,
    category: 'mini-gt',
    name: 'Mazda AZ-1 Liberty Walk LB40',
    description: 'White - 2024 Tokyo Auto Salon',
    images: [
      'resources/images/Productos/MINI%20GT/953%20Mazda%20AZ-1%20Liberty%20Walk%20LB40%20(White)%202024%20Tokyo%20Auto%20Salon/953.jpg',
      'resources/images/Productos/MINI%20GT/953%20Mazda%20AZ-1%20Liberty%20Walk%20LB40%20(White)%202024%20Tokyo%20Auto%20Salon/953-2.jpeg',
      'resources/images/Productos/MINI%20GT/953%20Mazda%20AZ-1%20Liberty%20Walk%20LB40%20(White)%202024%20Tokyo%20Auto%20Salon/953-3.jpeg',
      'resources/images/Productos/MINI%20GT/953%20Mazda%20AZ-1%20Liberty%20Walk%20LB40%20(White)%202024%20Tokyo%20Auto%20Salon/953-4.jpeg'
    ]
  },
  {
    id: 956,
    category: 'mini-gt',
    name: 'Toyota GR86 HKS TYPE R ADVAN',
    description: '2022 Tokyo Auto Salon',
    images: [
      'resources/images/Productos/MINI%20GT/956%20Toyota%20GR86%20HKS%20TYPE%20R%20ADVAN%202022%20Tokyo%20Auto%20Salon/956.jpeg',
      'resources/images/Productos/MINI%20GT/956%20Toyota%20GR86%20HKS%20TYPE%20R%20ADVAN%202022%20Tokyo%20Auto%20Salon/956-2.jpeg',
      'resources/images/Productos/MINI%20GT/956%20Toyota%20GR86%20HKS%20TYPE%20R%20ADVAN%202022%20Tokyo%20Auto%20Salon/956-3.jpeg',
      'resources/images/Productos/MINI%20GT/956%20Toyota%20GR86%20HKS%20TYPE%20R%20ADVAN%202022%20Tokyo%20Auto%20Salon/956-4.jpeg'
    ]
  },
  {
    id: 963,
    category: 'mini-gt',
    name: 'LB-WORKS x Abas Works ABARTH 595',
    description: 'Red',
    images: [
      'resources/images/Productos/MINI GT/963 LB-WORKS x Abas Works ABARTH 595 (Red)/963.jpeg',
      'resources/images/Productos/MINI GT/963 LB-WORKS x Abas Works ABARTH 595 (Red)/963-2.jpeg',
      'resources/images/Productos/MINI GT/963 LB-WORKS x Abas Works ABARTH 595 (Red)/963-3.jpeg',
      'resources/images/Productos/MINI GT/963 LB-WORKS x Abas Works ABARTH 595 (Red)/963-4.jpeg'
    ]
  },
  {
    id: 964,
    category: 'mini-gt',
    name: 'Porsche 911 Dakar',
    description: 'Ice Grey Metallic - Rally 1978',
    images: [
      'resources/images/Productos/MINI GT/964 Porsche 911 Dakar (Ice Grey Metallic) Rally 1978/964.jpeg',
      'resources/images/Productos/MINI GT/964 Porsche 911 Dakar (Ice Grey Metallic) Rally 1978/964-2.jpeg',
      'resources/images/Productos/MINI GT/964 Porsche 911 Dakar (Ice Grey Metallic) Rally 1978/964-3.jpeg',
      'resources/images/Productos/MINI GT/964 Porsche 911 Dakar (Ice Grey Metallic) Rally 1978/964-4.jpeg'
    ]
  },
  {
    id: 996,
    category: 'mini-gt',
    name: 'Mazda RX-7 (FD3S)',
    description: 'Itosyoukai Rei-gouki with RE Amemiya',
    images: [
      'resources/images/Productos/MINI GT/996 Mazda RX-7 (FD3S) Itosyoukai Rei-gouki with RE Amemiya/996.jpeg',
      'resources/images/Productos/MINI GT/996 Mazda RX-7 (FD3S) Itosyoukai Rei-gouki with RE Amemiya/996-2.jpeg',
      'resources/images/Productos/MINI GT/996 Mazda RX-7 (FD3S) Itosyoukai Rei-gouki with RE Amemiya/996-3.jpeg',
      'resources/images/Productos/MINI GT/996 Mazda RX-7 (FD3S) Itosyoukai Rei-gouki with RE Amemiya/996-4.jpeg'
    ]
  },
  {
    id: 1045,
    category: 'mini-gt',
    name: 'Nissan GT-R Nismo 2024',
    description: 'Brilliant White Pearl',
    images: [
      'resources/images/Productos/MINI GT/1045 Nissan GT-R Nismo 2024 (Brilliant White Pearl) /1045.jpg',
      'resources/images/Productos/MINI GT/1045 Nissan GT-R Nismo 2024 (Brilliant White Pearl) /1045-2.jpeg',
      'resources/images/Productos/MINI GT/1045 Nissan GT-R Nismo 2024 (Brilliant White Pearl) /1045-3.jpeg',
      'resources/images/Productos/MINI GT/1045 Nissan GT-R Nismo 2024 (Brilliant White Pearl) /1045-4.jpeg'
    ]
  }
];

// ===================================
// DOM Elements
// ===================================
let currentProduct = null;
let currentImageIndex = 0;
let slideInterval = null;
let activeCategory = 'mini-gt'; // Global state for category

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

  // Get Search Query
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
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">
        <p style="font-size: 1.25rem;">No encontramos productos que coincidan con tu búsqueda 🔍</p>
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

function createProductCard(product, index) {
  const card = document.createElement('div');
  card.className = 'product-card fade-in';
  card.style.animationDelay = `${index * 0.05}s`;

  card.innerHTML = `
    <div class="product-image-container">
      <img src="${product.images[0]}" alt="${product.name}" class="product-image" loading="lazy">
      <div class="product-overlay">
        <span style="color: white; font-weight: 600; font-size: 1.125rem;">Ver Detalles</span>
      </div>
    </div>
    <div class="product-info">
      <div class="product-number">#${product.id}</div>
      <h3 class="product-name">${product.name}</h3>
      <p style="color: var(--text-secondary); font-size: 0.875rem; margin: 0.5rem 0;">${product.description}</p>
      <button class="view-details-btn">Ver Detalles</button>
    </div>
  `;

  card.addEventListener('click', () => openModal(product));

  return card;
}

// ===================================
// Category Filtering
// ===================================
function initCategoryFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('disabled')) return;

      // Update active state
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update global category and re-render
      activeCategory = btn.dataset.category;
      renderProducts();
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

  // Update text content immediately
  if (modalTitle) modalTitle.textContent = currentProduct.name;
  if (modalNumber) modalNumber.textContent = `#${currentProduct.id}`;
  if (modalDescription) modalDescription.textContent = currentProduct.description;

  // Animate and update image
  if (mainImage) {
    // Phase 1: Slide Out
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
      // Fallback in case onload feels slow or cached
      setTimeout(() => {
        mainImage.classList.remove('slide-out-left');
        mainImage.classList.add('slide-in-right');
      }, 50);

    }, 200); // Wait for slide out animation part
  }

  // Update thumbnails
  const thumbnailContainer = document.getElementById('modalThumbnails');
  if (thumbnailContainer) {
    thumbnailContainer.innerHTML = '';
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

function selectImage(index) {
  currentImageIndex = index;
  updateModalContent();
  stopSlideShow();
  startSlideShow();
}

function startSlideShow() {
  stopSlideShow();
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
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  setActiveNavLink();
  initScrollAnimations();
  initCategoryFilters();
  initModalControls();
  initContactForm();
  initScrollToTop();

  initModalControls();
  initContactForm();
  initScrollToTop();
  initSearch(); // Initialize Search

  // Render products if on products page
  if (document.getElementById('productsGrid')) {
    renderProducts(); // No args needed now
  }
});
