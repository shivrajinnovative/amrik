  
        $(document).ready(function () {
            var owl = $(".services .owl-carousel").owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 2000,
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            });
            $(".services .custom-prev").click(function () {
                owl.trigger('prev.owl.carousel');
            });
            $(".services .custom-next").click(function () {
                owl.trigger('next.owl.carousel');
            });

            var owl2 = $(".clients .owl-carousel").owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 2000,
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 4
                    }
                }
            });
            $(".clients .custom-prev").click(function () {
                owl2.trigger('prev.owl.carousel');
            });
            $(".clients .custom-next").click(function () {
                owl2.trigger('next.owl.carousel');
            });
        });

        
        // $(document).ready(function () {
        //     var lastScrollTop = 0;
        //     $(window).scroll(function (event) {
        //         var st = $(this).scrollTop();
        //         if (st > lastScrollTop) {
        //             $('.navbar').css('top', '-60px');
        //         } else {
        //             $('.navbar').css('top', '0');
        //         }
        //         lastScrollTop = st;
        //     });
        // });