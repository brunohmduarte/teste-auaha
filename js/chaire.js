$(document).ready(function() {
    // Efeito hover do campo busca.
    $(".busca").hover(
        function() {
            $(".busca span, .busca i").removeClass("active");
            $(".busca form").addClass("active");
            $(".busca form.active button").addClass("active");
        },
        function() {
            $(".busca span, .busca i").addClass("active");
            $(".busca form").removeClass("active");
        }
    );

    // Carrossel da vitrine.
    $('.feeds').slick({
        dots: true,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        lazyLoad: 'ondemand',
    });

    // Carrossel da vitrine.
    $('.feeds-2 ul').slick({
        dots: true,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        lazyLoad: 'ondemand',
    });

    // Substitui os icones(Prev/Next) do carrossel.
    $('.slick-prev').html('<i class="flaticon-left-arrow"></i>');
    $('.slick-next').html('<i class="flaticon-next"></i>');

});