$(document).ready(function () {

    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {

        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if ($(window).scrollTop() > 30) {
            $('header').addClass('header-active');
        } else {
            $('header').removeClass('header-active');
        }

        $('section').each(function () {
            var top = $(window).scrollTop();
            var id = $(this).attr('id');
            var height = $(this).height();
            var top = $(this).offset().top - 200;
            if (top >= offset && top < height + offset) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find('[href="#' + id + '"]').addClass('active');

            }
        });

    });
});

var form = document.getElementById('sheetdb-form');
var modal = document.getElementById('submissionModal');
var closeBtn = document.querySelector('.close-btn');
var submissionMessage = document.getElementById('submissionMessage');

form.addEventListener("submit", function (e) {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(response => response.json())
        .then(html => {
            submissionMessage.textContent = '😊 Thank you, for Dropping a Message ! ' + document.getElementById('uname').value;
            modal.style.display = "flex";
        });
});

// Close the modal when clicking the close button
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    window.location.href = '';  // Optional: reload the page
    location.reload();
});

// Close the modal when clicking anywhere outside the modal content
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        window.location.href = '';  // Optional: reload the page
        location.reload();
    }
});