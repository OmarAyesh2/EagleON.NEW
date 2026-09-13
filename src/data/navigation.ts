export interface NavLink {
  label: { en: string; ar: string };
  href: string;
}

export const navLinks: NavLink[] = [
  { label: { en: 'Home', ar: 'الرئيسية' }, href: '/' },
  { label: { en: 'About', ar: 'من نحن' }, href: '/about' },
  { label: { en: 'Services', ar: 'خدماتنا' }, href: '/services' },
  { label: { en: 'Our Work', ar: 'أعمالنا' }, href: '/portfolio' },
  { label: { en: 'Q&A', ar: 'أسئلة شائعة' }, href: '/qa' },
];

export const ctaLink = {
  label: { en: 'Contact Us', ar: 'تواصل معنا' },
  href: '/contact',
};
