document.getElementById('slider').onchange = function () {
    themeChanger();
};

function themeChanger() {
    var slider = document.getElementById('slider').value;
    var body = document.body;

    if (slider == 2) {
        if (body.classList.contains('theme3')) {
            body.classList.remove('theme3');
        }
        body.classList.add('theme2');
    } else if (slider == 3) {
        if (body.classList.contains('theme2')) {
            body.classList.remove('theme2');
        }
        body.classList.add('theme3');
    } else {
        body.classList.remove('theme2');
        body.classList.remove('theme3');
    }
    {
    }
}
