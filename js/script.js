/* =========================
   Tab Navigation
========================= */

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");


tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const targetPanel = tab.dataset.tab;

        tabs.forEach(item => item.classList.remove("active"));
        panels.forEach(panel => panel.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(targetPanel).classList.add("active");
    });
});


function switchTab(event) {

    const selectedTab = event.currentTarget;

    const targetPanel = selectedTab.dataset.tab;


    // Remove active state

    tabs.forEach(tab => {

        tab.classList.remove("active");

    });


    panels.forEach(panel => {

        panel.classList.remove("active");

    });


    // Add active state

    selectedTab.classList.add("active");

    document
        .getElementById(targetPanel)
        .classList.add("active");

}



tabs.forEach(tab => {

    tab.addEventListener(
        "click",
        switchTab
    );

});



/* =========================
   Sidebar Collapse
========================= */

const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const toggle = document.querySelector(".toggle");

if (sidebar && container && toggle) {
    toggle.addEventListener("click", () => {
        const isCollapsed = sidebar.classList.toggle("collapsed");

        container.classList.toggle("collapsed", isCollapsed);

        toggle.textContent = isCollapsed ? "▶" : "◀";

        toggle.setAttribute(
            "aria-label",
            isCollapsed ? "Expand sidebar" : "Collapse sidebar"
        );
    });
}


/* =========================
   Open External Links in New Tabs
========================= */

document.querySelectorAll("a[href]").forEach(link => {
    const url = new URL(link.href, window.location.href);

    if (url.origin !== window.location.origin) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    }
});
