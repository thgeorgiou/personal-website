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

// Text links shown under the introduction on the home page
export const PROFILES = [
  { name: "GitHub", href: "https://github.com/thgeorgiou" },
  // TODO: add your ORCID iD and Google Scholar profile
  // { name: "ORCID", href: "https://orcid.org/0000-0000-0000-0000" },
  // { name: "Google Scholar", href: "https://scholar.google.com/citations?user=..." },
  { name: "Email", href: "mailto:web@thgeorgiou.com" },
] as const;
