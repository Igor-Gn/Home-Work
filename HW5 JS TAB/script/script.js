var tabItem = document.querySelectorAll('.tab');


for (let i = 0; i < tabItem.length; i++) {
    tabItem[i].addEventListener('click', viewTab);
}
function viewTab() {
    var open = this.nextElementSibling.style.display = 'block';
    for (let i = 0; i < tabItem.length; i++) {
        if (tabItem[i] != open) {
            tabItem[i].nextElementSibling.style.display = 'none';
            tabItem[i].style.backgroundColor = "#e0e0e0";
            tabItem[i].style.borderBottom = "1px solid #3f3f3f"
        }
    }
    this.nextElementSibling.style.display = 'block';
    this.style.backgroundColor = 'white';
    this.style.borderBottom = "1px solid white";
}

