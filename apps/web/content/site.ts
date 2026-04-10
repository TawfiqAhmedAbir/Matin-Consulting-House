export const siteMetadata = {
  name: "Matin Consulting House",
  shortName: "Matin House",
  title: "Matin Consulting House",
  description: "Independent consultancy pairing digital strategy with business intelligence for SMEs and NPOs.",
  themeColor: "#031f44",
  logoPath: "/images/logo-matin.png",
  backgroundImagePath: "/images/background-seamless-2048.jpg",
  linkedinUrl: "https://www.linkedin.com/company/matin-consulting-house/",
} as const;

export const primaryNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;
