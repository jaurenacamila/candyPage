$(function () {
    //when the page is scrolled
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        //run the clase "scrolled", when scroll > nav height
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});