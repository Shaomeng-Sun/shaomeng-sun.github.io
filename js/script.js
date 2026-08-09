/* =========================
   Tab Navigation
========================= */

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");


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

const sidebar = document.getElementById("sidebar");

const container = document.querySelector(".container");

const toggleButton = document.getElementById("toggle");



function toggleSidebar(){

    const isCollapsed =
        sidebar.classList.toggle("collapsed");


    container.classList.toggle(
        "collapsed",
        isCollapsed
    );


    toggleButton.textContent =
        isCollapsed ? "▶" : "◀";

}



toggleButton.addEventListener(
    "click",
    toggleSidebar
);
