$(document).ready(function () {
    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $('.image-popup-fit-width').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: false
        }
    });

    $('#thanks').hide();
    $('.single-item').slick();

    $(function () {
        $("#accordion").accordion({
            heightStyle: "content",
        });
    });

    let indexInput = $('#index-input');

    indexInput.keydown(function (event) {
        // Получаем код клавиши
        let keyCode = event.keyCode;

        // Разрешаем ввод только цифр и специальных клавиш
        if ((keyCode < 48 || keyCode > 57) && (keyCode < 96 || keyCode > 105) && keyCode !== 8 && keyCode !== 9 && keyCode !== 46 && keyCode !== 37 && keyCode !== 39) {
            event.preventDefault();
        }
    });

    $('#send').click(function () {
        let nameInput = $('#name-input');
        let surnameInput = $('#surname-input');
        let phoneInput = $('#phone-input');
        let countryInput = $('#country-input');
        let addressInput = $('#address-input');

        if (!nameInput.val()) {
            alert('Заполните имя');
            return;
        }
        if (!surnameInput.val()) {
            alert('Заполните фамилию');
            return;
        }
        if (!phoneInput.val()) {
            alert('Заполните телефон');
            return;
        }
        if (!countryInput.val()) {
            alert('Заполните страну');
            return;
        }
        if (!indexInput.val()) {
            alert('Заполните индекс');
            return;
        }
        if (!addressInput.val()) {
            alert('Заполните адрес');
            return;
        }

        if (indexInput.val().length !== 6) {
            alert('Индекс должен содержать 6 символов');
            return;
        }

        $('#form').hide();

        $('#thanks').show();
    });
});


