"use client";
import { useEffect, useState } from "react";
import Avatar from "../../assets/avatar.jpg";
import { Sun, Moon, Languages, Search, Menu } from "lucide-react";

import { getLangFromUrl, useTranslations } from "../../i18n/utils";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Navbar({ url }: { url: URL }) {
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initial =
      stored === "dark" || (!stored && prefersDark) ? "dark" : "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <nav className="sticky top-0 z-50 h-16 w-full border-b bg-background/85 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/30 vazirmatn p-4">
      <div
        className="absolute bottom-[-2px] left-0 h-[3px] bg-primary transition-all duration-300 ease-linear"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="w-full flex justify-center h-full items-center">
        <div className="max-w-7xl w-full justify-between flex">
          <div className="flex items-center gap-2">
            <img
              src={Avatar.src}
              alt="Avatar"
              width={64}
              height={64}
              className="size-9 lg:size-10 rounded-full object-cover"
            />
            <a
              href="/"
              className="vazirmatn font-bold text-lg lg:text-xl mt-1 hover:text-primary transition-colors"
            >
              {t("nav.title")}
            </a>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <Dialog>
              <DialogTrigger>
                {" "}
                <div className="p-2 rounded-lg border hover:bg-accent hover:text-accent-foreground transition">
                  <Search className="h-5 w-5" />
                </div>
              </DialogTrigger>
              <DialogContent className="">
                <DialogHeader>
                  <DialogTitle className="text-center">
                    {t("nav.search.description")}
                  </DialogTitle>
                </DialogHeader>
                <div className="p-2 gap-2 flex items-center justify-center rounded-lg border ">
                  <form
                    className="flex w-full items-center gap-2"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const target = e.target as typeof e.target & {
                        searchInput: { value: string };
                      };
                      const query = encodeURIComponent(
                        target.searchInput.value
                      );
                      if (query)
                        window.location.href = `/${lang}/search?key=${query}`;
                    }}
                  >
                    <Search className="h-5 w-5" />
                    <input
                      name="searchInput"
                      type="text"
                      className="w-full focus:outline-none"
                      placeholder={t("nav.search.description")}
                    />
                  </form>
                </div>
              </DialogContent>
            </Dialog>
            <Sheet>
              <SheetTrigger>
                {" "}
                <div className="p-2 rounded-lg border hover:bg-accent hover:text-accent-foreground transition">
                  <Menu className="h-5 w-5" />
                </div>
              </SheetTrigger>
              <SheetContent
                className=""
                side={lang === "fa" ? "left" : "right"}
              >
                <SheetHeader></SheetHeader>
                <div className="w-full flex flex-col items-center gap-4">
                  <a
                    className="text-lg font-bold hover:text-primary transition-colors"
                    href={`/${lang}/about`}
                  >
                    {t("nav.about")}
                  </a>
                  <a
                    className="text-lg font-bold hover:text-primary transition-colors"
                    href={`/${lang}/projects`}
                  >
                    {t("nav.projects")}
                  </a>
                  <a
                    className="text-lg font-bold hover:text-primary transition-colors"
                    href={`/${lang}/blog`}
                  >
                    {t("nav.blog")}
                  </a>
                </div>
                <SheetFooter>
                  <div className="w-full flex justify-center gap-2">
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
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
          <div className="md:flex items-center gap-2 hidden">
            <div className="flex gap-4 items-center mx-4 justify-center mt-1">
              <a
                className="text-md font-bold hover:text-primary transition-colors"
                href={`/${lang}/about`}
              >
                {t("nav.about")}
              </a>
              <a
                className="text-md font-bold hover:text-primary transition-colors"
                href={`/${lang}/projects`}
              >
                {t("nav.projects")}
              </a>
              <a
                className="text-md font-bold hover:text-primary transition-colors"
                href={`/${lang}/blog`}
              >
                {t("nav.blog")}
              </a>
            </div>
            <Dialog>
              <DialogTrigger>
                {" "}
                <div className="p-2 rounded-lg border hover:bg-accent hover:text-accent-foreground transition">
                  <Search className="h-5 w-5" />
                </div>
              </DialogTrigger>
              <DialogContent className="">
                <DialogHeader>
                  <DialogTitle className="text-center">
                    {t("nav.search.description")}
                  </DialogTitle>
                </DialogHeader>
                <div className="p-2 gap-2 flex items-center justify-center rounded-lg border ">
                  <form
                    className="flex w-full items-center gap-2"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const target = e.target as typeof e.target & {
                        searchInput: { value: string };
                      };
                      const query = encodeURIComponent(
                        target.searchInput.value
                      );
                      if (query)
                        window.location.href = `/${lang}/search?key=${query}`;
                    }}
                  >
                    <Search className="h-5 w-5" />
                    <input
                      name="searchInput"
                      type="text"
                      className="w-full focus:outline-none"
                      placeholder={t("nav.search.description")}
                    />
                  </form>
                </div>
              </DialogContent>
            </Dialog>
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
