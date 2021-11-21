document.querySelector('.input').innerHTML = '';
const bat = document.querySelectorAll(".item");
const hclick = (e) => {
    let a = e.target.dataset.num;

    document.querySelector('.input').innerHTML += a;
}

bat.forEach(button => {
    button.addEventListener('click', hclick)
});

function clean() {
    document.querySelector('.input').innerHTML = '';
}
function back() {
    let exp = document.querySelector('.input').innerHTML;
    document.querySelector('.input').innerHTML = exp.substring(0, exp.length - 1);
}
function aqual() {
    let exp = document.querySelector('.input').innerHTML;
    if (exp) {
        document.querySelector('.input').innerHTML = eval(exp);
    }

};