import { useTranslations } from "@/i18n/utils";

import XTwitter from "../icons/XTwitter";
import TelegramIcon from "../icons/Telegram";
import LinkedinIcon from "../icons/Linkedin";
import GithubIcon from "../icons/Github";

export default function Footer({ lang }: { lang: "en" | "fa" }) {
  const t = useTranslations(lang);
  const date = new Date();
  const year =
    lang === "fa"
      ? date.toLocaleDateString("fa-IR", {
          year: "numeric",
          calendar: "persian",
        })
      : date.getFullYear();

  const siteLinks = [
    { label: t("nav.home"), href: `/${lang}` },
    { label: t("nav.about"), href: `/${lang}/about` },
    { label: t("nav.projects"), href: `/${lang}/projects` },
    { label: t("nav.blog"), href: `/${lang}/blog` },
  ];

  const socialLinks = [
    {
      icon: <XTwitter className="size-6 lg:size-7" />,
      href: "https://x.com/xero_dl",
      label: "Twitter",
    },
    {
      icon: <TelegramIcon className="size-6 lg:size-7" />,
      href: "https://t.me/xero_dl",
      label: "Telegram",
    },
    {
      icon: <LinkedinIcon className="size-6 lg:size-7" />,
      href: "https://linkedin.com/in/soroushalinia",
      label: "LinkedIn",
    },
    {
      icon: <GithubIcon className="size-6 lg:size-7" />,
      href: "https://github.com/soroushalinia",
      label: "GitHub",
    },
  ];

  return (
    <footer className="w-full border-t border-border text-gray-800 dark:text-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Site links */}
        <div className="flex flex-row gap-2 lg:gap-3 flex-1 justify-center sm:justify-start items-center">
          {siteLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm lg:text-md hover:text-primary transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Center copyright */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 flex-2">
          &copy; {year} {t("name")}. {t("copyright")}
        </p>

        {/* Social links */}
        <div className="flex gap-2 lg:gap-3 flex-1 justify-center sm:justify-end items-center">
          {socialLinks.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
