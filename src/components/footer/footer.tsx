import { useTranslations } from "@/i18n/utils";

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
  return (
    <footer className="w-screen border-t border-border text-gray-800 dark:text-gray-200 py-6">
      <p className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
        &copy; {year} {t("name")}. {t("copyright")}
      </p>
    </footer>
  );
}
