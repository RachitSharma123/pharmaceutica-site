// ─── Site ────────────────────────────────────────────────────────────────────

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Pharmaceutica - Global Pharmaceutical Excellence",
  description: "Pharmaceutica Pty Ltd - Bridging pharmaceutical precision with nutritional wisdom. Quality medicines and supplements that improve lives across emerging markets.",
  language: "en",
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface MenuLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface NavigationConfig {
  brandName: string;
  menuLinks: MenuLink[];
  socialLinks: SocialLink[];
  searchPlaceholder: string;
  cartEmptyText: string;
  cartCheckoutText: string;
  continueShoppingText: string;
  menuBackgroundImage: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "Pharmaceutica",
  menuLinks: [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Quality Assurance", href: "#quality" },
    { label: "Facilities", href: "#subhero" },
    { label: "Research", href: "#video" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { icon: "Linkedin", label: "LinkedIn", href: "https://linkedin.com" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com" },
  ],
  searchPlaceholder: "Search products, categories...",
  cartEmptyText: "Your inquiry cart is empty",
  cartCheckoutText: "Submit Inquiry",
  continueShoppingText: "Continue Browsing",
  menuBackgroundImage: "/images/menu-bg.jpg",
};

// ─── Hero ────────────────────────────────────────────────────────────────────

export interface HeroConfig {
  tagline: string;
  title: string;
  ctaPrimaryText: string;
  ctaPrimaryTarget: string;
  ctaSecondaryText: string;
  ctaSecondaryTarget: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  tagline: "BRIDGING PHARMACEUTICAL PRECISION WITH NUTRITIONAL WISDOM",
  title: "Dedicated to Quality\nMedicines That Improve Lives",
  ctaPrimaryText: "Explore Our Products",
  ctaPrimaryTarget: "#products",
  ctaSecondaryText: "Learn About Us",
  ctaSecondaryTarget: "#about",
  backgroundImage: "/images/hero-bg.jpg",
};

// ─── SubHero ─────────────────────────────────────────────────────────────────

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface SubHeroConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  linkText: string;
  linkTarget: string;
  image1: string;
  image2: string;
  stats: Stat[];
}

export const subHeroConfig: SubHeroConfig = {
  tag: "OUR GLOBAL PRESENCE",
  heading: "World-Class Manufacturing, Global Reach",
  bodyParagraphs: [
    "Pharmaceutica operates three state-of-the-art manufacturing facilities in India, equipped with cutting-edge technology and adhering to the highest international quality standards including WHO-GMP, ISO 9001:2015, and FDA certifications.",
    "Our commitment to excellence has enabled us to expand our footprint across emerging markets worldwide, bringing quality healthcare to diverse populations across three continents."
  ],
  linkText: "Discover Our Facilities",
  linkTarget: "#about",
  image1: "/images/facility-1.jpg",
  image2: "/images/packaging-line.jpg",
  stats: [
    { value: 3, suffix: "", label: "Manufacturing Facilities" },
    { value: 11, suffix: "", label: "Years of Excellence" },
    { value: 500, suffix: "+", label: "Product Portfolio" },
    { value: 3, suffix: "", label: "Patents In Progress" },
  ],
};

// ─── Video Section ───────────────────────────────────────────────────────────

export interface VideoSectionConfig {
  tag: string;
  heading: string;
  bodyParagraphs: string[];
  ctaText: string;
  ctaTarget: string;
  backgroundImage: string;
}

export const videoSectionConfig: VideoSectionConfig = {
  tag: "RESEARCH & INNOVATION",
  heading: "Pioneering Tomorrow's Medicines Today",
  bodyParagraphs: [
    "Our dedicated R&D team works tirelessly to develop innovative formulations that meet evolving healthcare needs. With 3 patents currently in progress for process improvement, we're committed to pushing the boundaries of pharmaceutical science.",
    "From concept to commercialization, we maintain the highest standards of scientific rigor and regulatory compliance, investing significantly in research to bring affordable, high-quality medicines to markets that need them most."
  ],
  ctaText: "Explore Our Research",
  ctaTarget: "#products",
  backgroundImage: "/images/research-lab.jpg",
};

// ─── Products ────────────────────────────────────────────────────────────────

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface ProductsConfig {
  tag: string;
  heading: string;
  description: string;
  viewAllText: string;
  addToCartText: string;
  addedToCartText: string;
  categories: string[];
  products: Product[];
}

export const productsConfig: ProductsConfig = {
  tag: "OUR PORTFOLIO",
  heading: "Comprehensive Healthcare Solutions",
  description: "From essential medicines to specialized therapeutics, our diverse product portfolio spans multiple therapeutic categories, ensuring quality healthcare for every need.",
  viewAllText: "View All Categories",
  addToCartText: "Add to Inquiry",
  addedToCartText: "Added to Inquiry",
  categories: ["All", "GI & Antacids", "Antibiotics", "Cardiology", "Neurology", "Hormonal", "Dermatology", "Nutraceuticals"],
  products: [
    { id: 1, name: "GI Medications Range", price: 0, category: "GI & Antacids", image: "/images/product-gi.jpg" },
    { id: 2, name: "Antibiotics Portfolio", price: 0, category: "Antibiotics", image: "/images/product-antibiotics.jpg" },
    { id: 3, name: "Cardiovascular Care", price: 0, category: "Cardiology", image: "/images/product-cardiology.jpg" },
    { id: 4, name: "Neurological Solutions", price: 0, category: "Neurology", image: "/images/product-neuro.jpg" },
    { id: 5, name: "Hormonal Therapies", price: 0, category: "Hormonal", image: "/images/product-hormonal.jpg" },
    { id: 6, name: "Dermatology Range", price: 0, category: "Dermatology", image: "/images/product-derma.jpg" },
    { id: 7, name: "Nutraceuticals", price: 0, category: "Nutraceuticals", image: "/images/product-nutra.jpg" },
    { id: 8, name: "Anti-Inflammatory", price: 0, category: "GI & Antacids", image: "/images/products-bg.jpg" },
  ],
};

// ─── Quality Assurance ───────────────────────────────────────────────────────

export interface Certification {
  id: number;
  code: string;
  name: string;
  description: string;
}

export interface QualityConfig {
  tag: string;
  heading: string;
  description: string;
  certifications: Certification[];
}

export const qualityConfig: QualityConfig = {
  tag: "QUALITY ASSURANCE",
  heading: "Certified Excellence in Every Dose",
  description: "Our commitment to quality is validated by internationally recognized certifications, ensuring that every product meets the highest standards of safety, efficacy, and compliance.",
  certifications: [
    {
      id: 1,
      code: "ISO 9001:2015",
      name: "Quality Management Systems",
      description: "Internationally recognized standard for quality management systems, ensuring consistent product quality and continuous improvement across all our processes."
    },
    {
      id: 2,
      code: "WHO-GMP",
      name: "World Health Organization Good Manufacturing Practice",
      description: "Global standard ensuring pharmaceutical products are consistently produced and controlled to quality standards appropriate for their intended use."
    },
    {
      id: 3,
      code: "ISO/IEC 17025",
      name: "Testing and Calibration Laboratories",
      description: "International standard for testing laboratories, demonstrating our technical competence and ability to produce precise, accurate test and calibration data."
    },
    {
      id: 4,
      code: "FSSAI",
      name: "Food Safety and Standards Authority of India",
      description: "License ensuring our nutraceutical products meet stringent food safety standards and regulatory requirements for the Indian market."
    },
    {
      id: 5,
      code: "FDA (CDSCO)",
      name: "Central Drugs Standard Control Organization",
      description: "Indian regulatory approval ensuring our pharmaceutical products meet national standards for safety, efficacy, and quality before market authorization."
    },
    {
      id: 6,
      code: "HACCP",
      name: "Hazard Analysis Critical Control Points",
      description: "Systematic preventive approach to food safety and pharmaceutical manufacturing, identifying and controlling potential hazards throughout the production process."
    },
  ],
};

// ─── Features ────────────────────────────────────────────────────────────────

export interface Feature {
  icon: "Truck" | "ShieldCheck" | "Leaf" | "Heart";
  title: string;
  description: string;
}

export interface FeaturesConfig {
  features: Feature[];
}

export const featuresConfig: FeaturesConfig = {
  features: [
    {
      icon: "ShieldCheck",
      title: "Quality Certified",
      description: "All products manufactured under strict GMP and WHO guidelines with comprehensive quality control at every stage."
    },
    {
      icon: "Truck",
      title: "Global Distribution",
      description: "Efficient supply chain ensuring timely delivery of medicines across emerging markets with proper cold chain management."
    },
    {
      icon: "Leaf",
      title: "Sustainable Practices",
      description: "Environmentally responsible manufacturing with sustainable packaging and waste reduction initiatives."
    },
    {
      icon: "Heart",
      title: "Patient-Centric",
      description: "Every product developed with patient wellbeing at the center, ensuring safety, efficacy, and affordability."
    },
  ],
};

// ─── Blog ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface BlogConfig {
  tag: string;
  heading: string;
  viewAllText: string;
  readMoreText: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  tag: "NEWS & INSIGHTS",
  heading: "Latest from Pharmaceutica",
  viewAllText: "View All News",
  readMoreText: "Read More",
  posts: [
    {
      id: 1,
      title: "Three New Patents Filed for Process Improvement",
      date: "March 2025",
      image: "/images/quality-lab.jpg",
      excerpt: "Pharmaceutica's R&D team achieves milestone with three patent applications for innovative manufacturing process improvements."
    },
    {
      id: 2,
      title: "Expanded Manufacturing Capacity in India",
      date: "August 2019",
      image: "/images/facility-1.jpg",
      excerpt: "Our manufacturing facilities undergo major expansion, adding new production lines for hormonal and neurological therapies."
    },
    {
      id: 3,
      title: "Pharmaceutica Founded with a Vision for Global Healthcare",
      date: "January 2015",
      image: "/images/team-meeting.jpg",
      excerpt: "Established with a mission to bridge pharmaceutical precision with nutritional wisdom for emerging markets worldwide."
    },
  ],
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqConfig {
  tag: string;
  heading: string;
  ctaText: string;
  ctaTarget: string;
  faqs: FaqItem[];
}

export const faqConfig: FaqConfig = {
  tag: "",
  heading: "",
  ctaText: "",
  ctaTarget: "",
  faqs: [],
};

// ─── About ───────────────────────────────────────────────────────────────────

export interface AboutSection {
  tag: string;
  heading: string;
  paragraphs: string[];
  quote: string;
  attribution: string;
  image: string;
  backgroundColor: string;
  textColor: string;
}

export interface AboutConfig {
  sections: AboutSection[];
}

export const aboutConfig: AboutConfig = {
  sections: [
    {
      tag: "OUR STORY",
      heading: "A Legacy of Healthcare Excellence",
      paragraphs: [
        "Pharmaceutica was founded in 2015 on a fundamental belief: that access to quality healthcare should never depend on geography or economics. We observed that emerging markets needed pharmaceutical partners who understood local challenges while maintaining global standards.",
        "Our journey began with a simple question: 'How can we create medicines that don't just cure, but truly care?' This led us to develop an integrated approach—prescription pharmaceuticals that meet rigorous therapeutic standards, combined with preventive nutraceuticals that address nutritional gaps before they become health crises.",
        "Today, our portfolio serves diverse populations across three continents. From GI medications to hormonal health solutions and daily wellness support, every product reflects our commitment to what we call 'The Pharmaceutica Standard'—where efficacy meets empathy, and innovation serves accessibility."
      ],
      quote: "",
      attribution: "",
      image: "/images/about-1.jpg",
      backgroundColor: "#25142d",
      textColor: "#ffffff",
    },
    {
      tag: "OUR MISSION",
      heading: "Quality Medicines for a Healthier World",
      paragraphs: [],
      quote: "We believe in care that continues—from the scientist in our labs to the patient in a remote village, every step matters, every life counts.",
      attribution: "— The Pharmaceutica Team",
      image: "/images/shipping.jpg",
      backgroundColor: "#7b4397",
      textColor: "#ffffff",
    },
  ],
};

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface FormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
}

export interface ContactConfig {
  heading: string;
  description: string;
  locationLabel: string;
  location: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  formFields: FormFields;
  submitText: string;
  submittingText: string;
  submittedText: string;
  successMessage: string;
  backgroundImage: string;
}

export const contactConfig: ContactConfig = {
  heading: "Get in Touch",
  description: "Whether you're interested in our products, seeking distribution partnerships, or exploring contract manufacturing opportunities, we'd love to hear from you.",
  locationLabel: "Headquarters",
  location: "470 St Kilda Rd, Melbourne VIC 3004, Australia",
  emailLabel: "Email",
  email: "info@pharmaceutica.com.au",
  phoneLabel: "Phone",
  phone: "+61 370675260",
  formFields: {
    nameLabel: "Your Name",
    namePlaceholder: "Enter your full name",
    emailLabel: "Email Address",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder: "How can we help you?",
  },
  submitText: "Send Message",
  submittingText: "Sending...",
  submittedText: "Message Sent",
  successMessage: "Thank you for reaching out. Our team will get back to you within 24-48 hours.",
  backgroundImage: "/images/contact-bg.jpg",
};

// ─── Footer ──────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterConfig {
  brandName: string;
  brandDescription: string;
  acnNumber: string;
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  linkGroups: FooterLinkGroup[];
  legalLinks: FooterLink[];
  copyrightText: string;
  socialLinks: FooterSocialLink[];
}

export const footerConfig: FooterConfig = {
  brandName: "Pharmaceutica",
  brandDescription: "Pharmaceutica Pty Ltd - Bridging pharmaceutical precision with nutritional wisdom. Quality medicines and supplements for emerging markets worldwide.",
  acnNumber: "668 232 040",
  newsletterHeading: "Stay Updated",
  newsletterDescription: "Subscribe to receive updates on our latest products, research developments, and industry insights.",
  newsletterPlaceholder: "Enter your email",
  newsletterButtonText: "Subscribe",
  newsletterSuccessText: "Thank you for subscribing!",
  linkGroups: [
    {
      title: "Products",
      links: [
        { label: "GI & Antacids", href: "#products" },
        { label: "Antibiotics", href: "#products" },
        { label: "Cardiology", href: "#products" },
        { label: "Neurology", href: "#products" },
        { label: "Nutraceuticals", href: "#products" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Facilities", href: "#subhero" },
        { label: "Quality Assurance", href: "#quality" },
        { label: "Research", href: "#video" },
        { label: "News", href: "#blog" },
        { label: "Careers", href: "#contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", href: "#contact" },
        { label: "Partner With Us", href: "#contact" },
        { label: "Quality Assurance", href: "#quality" },
      ],
    },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
  copyrightText: "© 2026 Pharmaceutica Pty Ltd. ACN 668 232 040. All rights reserved.",
  socialLinks: [
    { icon: "Linkedin", label: "LinkedIn", href: "https://linkedin.com" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com" },
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com" },
  ],
};
