export interface Translations {
  header: {
    links: { href: string; label: string }[];
    cta: string;
  };
  hero: {
    tagline: string;
    steam: string;
    itch: string;
    wishlist: string;
    releaseLabel: string;
    releaseDate: string;
  };
  about: {
    title: string;
    description: string;
    highlights: { icon: string; title: string; text: string }[];
  };
  features: {
    title: string;
    items: { icon: string; title: string; text: string }[];
  };
  countdown: {
    label: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  languages: {
    title: string;
    description: string;
  };
  roadmap: {
    title: string;
    description: string;
    steps: { title: string; text: string }[];
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  developer: {
    title: string;
    name: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    link: string;
  };
  community: {
    title: string;
    description: string;
    email: string;
  };
  trailer: {
    title: string;
  };
  footer: {
    tagline: string;
    steam: string;
    itch: string;
    wishlist: string;
    copyright: string;
    powered: string;
    links: { href: string; label: string }[];
  };
  gallery: {
    title: string;
    prev: string;
    next: string;
    close: string;
    loading: string;
    error: string;
    alt: string;
  };
  systemReq: {
    title: string;
    description: string;
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    directx: string;
    network: string;
    storage: string;
  };
  socialProof: {
    title: string;
    badge: string;
    players: string;
    rating: string;
  };
  skipLink: string;
  menuOpen: string;
  menuClose: string;
  scrollToTop: string;
  nowAvailable: string;
}
