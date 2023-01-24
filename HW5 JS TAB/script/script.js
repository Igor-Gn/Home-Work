var tabItem = document.querySelectorAll('.tab');

function viewTab1() {
    tabItem[0].nextElementSibling.style.display = "block";
    tabItem[0].style.backgroundColor = "white";
    tabItem[0].style.borderBottom = "1px solid white";
    tabItem[1].nextElementSibling.style.display = "none";
    tabItem[1].style.backgroundColor = "#e0e0e0";
    tabItem[1].style.borderBottom = "1px solid #3f3f3f";
    tabItem[2].nextElementSibling.style.display = "none";
    tabItem[2].style.backgroundColor = "#e0e0e0";
    tabItem[2].style.borderBottom = "1px solid #3f3f3f";
}
function viewTab2() {
    tabItem[0].nextElementSibling.style.display = "none";
    tabItem[0].style.backgroundColor = "#e0e0e0";
    tabItem[0].style.borderBottom = "1px solid #3f3f3f";
    tabItem[1].nextElementSibling.style.display = "block";
    tabItem[1].style.backgroundColor = "white";
    tabItem[1].style.borderBottom = "1px solid white";
    tabItem[2].nextElementSibling.style.display = "none";
    tabItem[2].style.backgroundColor = "#e0e0e0";
    tabItem[2].style.borderBottom = "1px solid #3f3f3f";
}
function viewTab3() {
    tabItem[0].nextElementSibling.style.display = "none";
    tabItem[0].style.backgroundColor = "#e0e0e0";
    tabItem[0].style.borderBottom = "1px solid #3f3f3f";
    tabItem[1].nextElementSibling.style.display = "none";
    tabItem[1].style.backgroundColor = "#e0e0e0";
    tabItem[1].style.borderBottom = "1px solid #3f3f3f";
    tabItem[2].nextElementSibling.style.display = "block";
    tabItem[2].style.backgroundColor = "white";
    tabItem[2].style.borderBottom = "1px solid white";
}
