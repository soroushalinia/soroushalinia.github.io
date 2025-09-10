"use client";
import { useEffect, useState } from "react";
import Avatar from "../../assets/avatar.jpg";
import { Sun, Moon, Languages, Search } from "lucide-react";

import { getLangFromUrl, useTranslations } from "../../i18n/utils";

export default function Navbar({ url }: { url: URL }) {
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.theme = newTheme;
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const switchLang = lang === "en" ? "fa" : "en";
  const newHref =
    url.pathname.replace(/^\/(en|fa)/, "") === ""
      ? `/${switchLang}`
      : `/${switchLang}${url.pathname.replace(/^\/(en|fa)/, "")}${url.search}${
          url.hash
        }`;

  return (
    <nav className="sticky top-0 z-50 h-16 w-full border-b border-border/30 bg-background vazirmatn">
      <div className="w-full flex justify-center h-full items-center">
        <div className="max-w-7xl w-full justify-between flex">
          <div className="flex items-center gap-2">
            <img
              src={Avatar.src}
              alt="Avatar"
              className="h-10 w-10 rounded-full object-cover"
            />
            <p className="vazirmatn font-bold text-lg">{t("nav.title")}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg border hover:bg-accent hover:text-accent-foreground transition">
              <Search className="h-5 w-5" />
            </div>
            <button
              className="p-2 rounded-lg border hover:bg-accent hover:text-accent-foreground transition"
              onClick={toggleTheme}
              title="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
            <a
              className="p-2 rounded-lg border hover:bg-accent hover:text-accent-foreground transition"
              href={newHref}
              title="Switch language"
            >
              <Languages className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
