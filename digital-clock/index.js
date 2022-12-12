// lay cac phan tu hour, minute, second, ap (am, pm)
const hourE = document.querySelector("#hour");
const minuteE = document.querySelector("#minute");
const secondE = document.querySelector("#second");
const apE = document.querySelector("#AP");

console.log(hourE, minuteE, secondE, apE);

// tao function
function updateClock () {
    //declare
    let h = new Date().getHours(); // lay gio hien tai cua may tinh
    let m = new Date().getMinutes(); // lay phut hien tai cua may tinh
    let s = new Date().getSeconds(); // lay giay hien tai cua may tinh
    let session = "AM"; // mac dinh ban ngay

    // handle
    if (h > 12) {
        session = "PM";
        h = h - 12;
    }

    h = h < 10 ? "0" + h : h; // neu h < 10 thi se .... neu khong thi ...
    m = m < 10 ? "0" + m : m; // neu m < 10 thi se .... neu khong thi ...
    s = s < 10 ? "0" + s : s; // neu s < 10 thi se .... neu khong thi ...

    //change content in html
    hourE.innerText = h;
    minuteE.innerText = m;
    secondE.innerText = s;
    apE.innerText = session;

    setTimeout(() => {
        updateClock();
    }, 1000)

}

updateClock();
