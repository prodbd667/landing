(function () {
    console.log('test');
})();

var menu_selector = ".top-menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.

function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}

$(document).ready(function () {

    $('.rate-card').hover(
        function () {
            $(this).find('.ui-btn').addClass('animated swing');
        },
        function () {
            $(this).find('.ui-btn').removeClass('animated swing');
        }
    );

    $('.client-items').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<button type="button" class="prev icon-left_sl">Previous</button>',
        nextArrow: '<button type="button" class="next icon-right_sl">Next</button>'
    });
    $('.blog-items').slick({
        infinite: true,
        dots: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="prev icon-left_sl">Previous</button>',
        nextArrow: '<button type="button" class="next icon-right_sl">Next</button>'
    });
    $('.case-items').slick({
        infinite: true,
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="prev icon-left_sl">Previous</button>',
        nextArrow: '<button type="button" class="next icon-right_sl">Next</button>'
    });

    var show = true;
    var countbox = "#serviceWork";
    $(window).on("scroll load resize", function(){
        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        console.log(w_top + 'Количество пикселей на которое была прокручена страница');
        console.log(e_top + 'Расстояние от блока со счетчиками до верха всего документа');
        console.log(w_height + 'Высота окна браузера');
        console.log(d_height + 'Высота всего документа');
        console.log(e_height + 'Полная высота блока со счетчиками');
        console.log(w_height + w_top +  'сумма');
        // console.log(w_top + ' ' + e_top + ' ' + w_height + ' ' + d_height + ' '+ e_height);
        // console.log(w_top + 400);
        // || w_height + w_top == d_height || e_height + e_top < w_height

        // if( w_top + w_top >= e_top ){
        //
        // }
        if( w_top >= e_top - w_height ){
            $('.timer:eq(0)').countTo({
                from: 0,
                to: 3000,
                speed: 2000,
                refreshInterval: 100
            });
            $('.timer:eq(1)').countTo({
                from: 0,
                to: 2100,
                speed: 2000
            });
            $('.timer:eq(2)').countTo({
                from: 0,
                to: 1300,
                speed: 2000
            });
            $('.timer:eq(3)').countTo({
                from: 0,
                to: 150,
                speed: 1000
            });
            $('.timer:eq(4)').countTo({
                from: 0,
                to: 189000,
                speed: 1000
            });
            show = false;
        }
    });


    $(document).on("scroll", onScroll);
    $("a[href^=#]").click(function(e){
        e.preventDefault();

        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);

        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });

    });


    var h_hght = 54; // высота шапки
    var h_mrg = 0;    // отступ когда шапка уже не видна

    $(function(){
        var elem = $('#top_nav');
        var top = $(this).scrollTop();
        if(top > h_hght){
            elem.css('top', h_mrg);
        }
        $(window).scroll(function(){
            top = $(this).scrollTop();
            if (top+h_mrg < h_hght) {
                elem.css('top', (h_hght-top));
                elem.removeClass('action-menu');
            } else {
                elem.css('top', h_mrg);
                elem.addClass('action-menu');
            }
        });
    });

});