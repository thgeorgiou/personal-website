import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/thgeorgiou",
    linkTitle: `${SITE.title} on GitHub`,
    icon: IconGitHub,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/thanasis.georgiou",
    linkTitle: `${SITE.title} on Instagram`,
    icon: IconBrandX,
  },
  {
    name: "Mail",
    href: "mailto:web@thgeorgiou.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
] as const;

// Text links shown on the home page and the CV. Entries with an empty href are
// hidden, so fill them in when you have them.
export const PROFILES = [
  { name: "ORCID", href: "https://orcid.org/0000-0002-2940-5672" },
  { name: "Google Scholar", href: "https://scholar.google.com/citations?user=CxFkOjsAAAAJ" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/thgeorgiou/" },
  { name: "GitHub", href: "https://github.com/thgeorgiou" },
  { name: "Email", href: "mailto:web@thgeorgiou.com" },
].filter(profile => profile.href);
