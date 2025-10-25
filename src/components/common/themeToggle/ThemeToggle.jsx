import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // تحقق من الإعداد المحفوظ فقط، الوضع الافتراضي فاتح دائماً
    const savedTheme = localStorage.getItem("theme");

    const shouldBeDark = savedTheme === "dark";
    setIsDark(shouldBeDark);

    // تطبيق الوضع على HTML
    if (shouldBeDark) {
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    // حفظ الإعداد
    localStorage.setItem("theme", newTheme ? "dark" : "light");

    // تطبيق الوضع الجديد
    if (newTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle"
      aria-label="تبديل الوضع"
    >
      <FontAwesomeIcon
        icon={isDark ? faSun : faMoon}
        className="w-5 h-5 text-gray-300 dark:text-gray-500"
      />
    </button>
  );
};

export default ThemeToggle;
