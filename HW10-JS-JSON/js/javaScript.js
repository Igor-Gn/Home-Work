let data;
const grid = document.querySelector('.grid');
var html;
let pagination = document.querySelector('#pagination');
fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=qxFzaKEc3wrfPhyKhm5KCZOVkSeSNYZRWwFMTM8g')
    .then(response => response.json())
    .then(json => data = json);

let dataArr1;
let notesOnPage = 40;
let countOfItems;
setTimeout(function () {
    dataArr1 = data.photos;
    countOfItems = Math.ceil(dataArr1.length / notesOnPage);
    let showPage = (function () {
        let active;

        return function (item) {
            if (active) {
                active.classList.remove('active');
            }
            active = item;

            item.classList.add('active');

            let pageNum = +item.innerHTML;
            let start = (pageNum - 1) * notesOnPage;
            let end = start + notesOnPage;

            let notes = dataArr1.slice(start, end);

            grid.innerHTML = '';
            for (let note of notes) {

                html = `
                    <div class="grid__item">
                            <img src="${note.img_src}" class="grid__img" alt="">
                            <div class="grid__name">camera name: ${note.camera.name} (${note.camera.full_name})</div>
                            <div class="grid__name">rover landing date: ${note.rover.landing_date}</div>
                            <div class="grid__name">earth date: ${note.earth_date}</div>
                            <div class="grid__name">rover name: ${note.rover.name}</div>
                    `
                grid.insertAdjacentHTML('beforeend', html);
            }
        };
    }());

    let items = [];
    for (let i = 1; i <= countOfItems; i++) {
        let li = document.createElement('li');
        li.innerHTML = i;
        pagination.appendChild(li);
        items.push(li);
    }

    showPage(items[0]);

    for (let item of items) {
        item.addEventListener('click', function () {

            showPage(this);
        });
    }

}, 2200);



