window.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    if (!themeToggleBtn) {
        console.error();
        return;
    }

    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-bs-theme", savedTheme);
    updateIcon(savedTheme);

    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-bs-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-bs-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (!themeIcon) return;
        if (theme === "dark") {
            themeIcon.className = "fa-solid fa-sun";
            themeToggleBtn.style.borderColor = "#ff9100";
            themeToggleBtn.style.color = "#ff9100";
        } else {
            themeIcon.className = "fa-solid fa-moon";
            themeToggleBtn.style.borderColor = "var(--brand-orange)";
            themeToggleBtn.style.color = "var(--brand-orange)";
        }
    }
});

// ===========================================================
    // Scroll Up
    // ===========================================================
    const scrollBtn = document.getElementById("scroll-to-top");

    if (scrollBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                scrollBtn.classList.add("show");
            } else {
                scrollBtn.classList.remove("show");
            }
        });

        scrollBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }