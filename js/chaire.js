$(document).ready(function() {
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
});