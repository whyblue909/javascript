// ######################################################## //
// Date : 2020.08.26(수) - 1교시
// Title : 슬라이드 이벤트
// ######################################################## //

/*
// 1-1) 슬라이드 다운 이벤트 
//   - 기본작업
//   - 25(화) 이어서 작업
//   - style.css 36Line 주석처리, hover_.sub 가 하위메뉴(sub) 메뉴이다.
//     36Line 주석처리하면 index.html 에서 더이상 sub 메뉴가 나오지 않는다.
(function ($, window, document, undefined) {

    // 1-1-1) header 속성 추가하기
    // - starBucks 는객체 이다.
    var starBucks = {
        init: function () {
            // 선언할때는 앞에 객체이름.속성이름
            starBucks.header();
            starBucks.section5Fn();
            starBucks.section6Fn();
            starBucks.section7Fn();
            starBucks.section9Fn();
        },
        // header,section5Fn 같은것들 : 속성
        header : function(){
            alert();
            
        },

        section5Fn: function () {

            var t = 0;

            function sec5FormatStartFn() {
                $('.section5-left').stop().animate({ left: -70 + '%', opacity: 0 }, 1500);
                $('.section5-right').stop().animate({ right: -70 + '%', opacity: 0 }, 1500);
            }

            function sec5AnimationFn() {
                $('.section5-left').stop().animate({ left: 30 + '%', opacity: 1 }, 2000);
                $('.section5-right').stop().animate({ right: 30 + '%', opacity: 1 }, 2000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section4').offset().top - 500) {
                    if (t == 0) {
                        t = 1;
                        sec5AnimationFn();
                    }
                }
                else {
                    if (t == 1) {
                        t = 0;
                        sec5FormatStartFn();
                    }
                }
            });
        },
        section6Fn: function () {

            var t = 0;

            function formatFn() {
                $('.section6-right').stop().animate({ opacity: 0 }, 1500);
            }

            function animationFn() {
                $('.section6-right').stop().animate({ opacity: 1 }, 3000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },
        section7Fn: function () {

            var t = 0;

            function formatFn() {
                $('.section7-txt1').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.section7-txt2').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.moreBtn-wrap').stop().animate({ opacity: 0 }, 1000);
            }
            function animationFn() {
                $('.section7-txt1').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.section7-txt2').stop().animate({ left: 0, opacity: 1 }, 2500);
                $('.moreBtn-wrap').stop().animate({ opacity: 1 }, 2500);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top + 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },

        section9Fn() {

            var t = 0;

            function formatFn() {
                $('.sec9-right-title h2').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title h3').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title span').stop().animate({ left: 1000, opacity: 0 }, 0);
            }

            function animationFn() {
                $('.sec9-right-title h2').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.sec9-right-title h3').stop().animate({ left: 0, opacity: 1 }, 2300);
                $('.sec9-right-title span').stop().animate({ left: 0, opacity: 1 }, 2600);
            }

            $(window).scroll(function () {
                if ($('#section8').offset().top - 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        }
    }

    starBucks.init(); //객체.초기실행 함수 호출 실행

})(jQuery, window, document);
*/

/*
// 1-2) 슬라이드 이벤트
//   - 슬라이드 다운이벤트 : 마우스 메뉴버튼올라가면 슬라이드 다운
//   - 메인메뉴 버튼$('.mainBtn') 마우스 오버시{ (mouseover) or (mouseenter) }, 해당 서브메뉴{ (this).next() }가 부드럽게
//     아래로 떨어진다 이것을 슬라이드 다운{ slideDown(300) }이라고 한다.

//   - 마우스가 다음메뉴에 마우스 오버이벤트 발생시, 
//     모든 서브메뉴$('.sub')는 위로 접히고 슬라이드 업{ = slideUp(100) }이라고한다. 해당 서브메뉴{ (this).next() }만 부드럽게 펼쳐진다.

//  - 메인메뉴 버튼$('.mainBtn') / 마우스 오버 { (mouseover) or (mouseenter) } / 슬라이드 다운{ slideDown(300) }
//    서브메뉴{ $(this).next() }  /            서브메뉴$('.sub')                / 슬라이드 업{ = slideUp(100) }
(function ($, window, document, undefined) {

    var starBucks = {
        init: function () {

            starBucks.header();
            starBucks.section5Fn();
            starBucks.section6Fn();
            starBucks.section7Fn();
            starBucks.section9Fn();
        },

        // 1-2-1) 위에 서술한 내용 작성
        //    - index.html 88Line 메인버튼 클래스 이름 확인
        header: function () {

            // - $ 달러사인은 선택자이다.
            // - 버튼(.mainBtn)을 선택하여($) 등록하겠다(on)
            $('.mainBtn').on({
                mouseenter : function(){
                    $('sub').slideUp(100);
                    $(this).next().slideDown(300)
                }
            });

        },

        section5Fn: function () {

            var t = 0;

            function sec5FormatStartFn() {
                $('.section5-left').stop().animate({ left: -70 + '%', opacity: 0 }, 1500);
                $('.section5-right').stop().animate({ right: -70 + '%', opacity: 0 }, 1500);
            }

            function sec5AnimationFn() {
                $('.section5-left').stop().animate({ left: 30 + '%', opacity: 1 }, 2000);
                $('.section5-right').stop().animate({ right: 30 + '%', opacity: 1 }, 2000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section4').offset().top - 500) {
                    if (t == 0) {
                        t = 1;
                        sec5AnimationFn();
                    }
                }
                else {
                    if (t == 1) {
                        t = 0;
                        sec5FormatStartFn();
                    }
                }
            });
        },
        section6Fn: function () {

            var t = 0;

            function formatFn() {
                $('.section6-right').stop().animate({ opacity: 0 }, 1500);
            }

            function animationFn() {
                $('.section6-right').stop().animate({ opacity: 1 }, 3000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },
        section7Fn: function () {

            var t = 0;

            function formatFn() {
                $('.section7-txt1').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.section7-txt2').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.moreBtn-wrap').stop().animate({ opacity: 0 }, 1000);
            }
            function animationFn() {
                $('.section7-txt1').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.section7-txt2').stop().animate({ left: 0, opacity: 1 }, 2500);
                $('.moreBtn-wrap').stop().animate({ opacity: 1 }, 2500);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top + 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },

        section9Fn() {

            var t = 0;

            function formatFn() {
                $('.sec9-right-title h2').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title h3').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title span').stop().animate({ left: 1000, opacity: 0 }, 0);
            }

            function animationFn() {
                $('.sec9-right-title h2').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.sec9-right-title h3').stop().animate({ left: 0, opacity: 1 }, 2300);
                $('.sec9-right-title span').stop().animate({ left: 0, opacity: 1 }, 2600);
            }

            $(window).scroll(function () {
                if ($('#section8').offset().top - 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        }
    }

    starBucks.init(); 

})(jQuery, window, document);
*/

/*
// 1-2) 슬라이드 이벤트
//   -  슬라이드 업 이벤트 : 슬라이드 영역밖에 마우스 벗어나면 업
//   -  웹페이지에 F12 Elements에서 영역 사이즈, 클래스등을 확인한다.

//   - style.css 23Line 부분 수정
(function ($, window, document, undefined) {

    var starBucks = {
        init: function () {

            starBucks.header();
            starBucks.section5Fn();
            starBucks.section6Fn();
            starBucks.section7Fn();
            starBucks.section9Fn();
        },

        header: function () {

            $('.mainBtn').on({
                mouseenter: function () {
                    $('sub').slideUp(100);
                    $(this).next().slideDown(300)
                }
            });
        },

        section5Fn: function () {

            var t = 0;

            function sec5FormatStartFn() {
                $('.section5-left').stop().animate({ left: -70 + '%', opacity: 0 }, 1500);
                $('.section5-right').stop().animate({ right: -70 + '%', opacity: 0 }, 1500);
            }

            function sec5AnimationFn() {
                $('.section5-left').stop().animate({ left: 30 + '%', opacity: 1 }, 2000);
                $('.section5-right').stop().animate({ right: 30 + '%', opacity: 1 }, 2000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section4').offset().top - 500) {
                    if (t == 0) {
                        t = 1;
                        sec5AnimationFn();
                    }
                }
                else {
                    if (t == 1) {
                        t = 0;
                        sec5FormatStartFn();
                    }
                }
            });
        },
        section6Fn: function () {

            var t = 0;

            function formatFn() {
                $('.section6-right').stop().animate({ opacity: 0 }, 1500);
            }

            function animationFn() {
                $('.section6-right').stop().animate({ opacity: 1 }, 3000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },
        section7Fn: function () {

            var t = 0;

            function formatFn() {
                $('.section7-txt1').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.section7-txt2').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.moreBtn-wrap').stop().animate({ opacity: 0 }, 1000);
            }
            function animationFn() {
                $('.section7-txt1').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.section7-txt2').stop().animate({ left: 0, opacity: 1 }, 2500);
                $('.moreBtn-wrap').stop().animate({ opacity: 1 }, 2500);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top + 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },

        section9Fn() {

            var t = 0;

            function formatFn() {
                $('.sec9-right-title h2').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title h3').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title span').stop().animate({ left: 1000, opacity: 0 }, 0);
            }

            function animationFn() {
                $('.sec9-right-title h2').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.sec9-right-title h3').stop().animate({ left: 0, opacity: 1 }, 2300);
                $('.sec9-right-title span').stop().animate({ left: 0, opacity: 1 }, 2600);
            }

            $(window).scroll(function () {
                if ($('#section8').offset().top - 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        }
    }

    starBucks.init();

})(jQuery, window, document);
*/


/*
// 1-4) 슬라이드 이벤트
//   - style.css 작업끝내고 여기에 작성

//   - 네비게이션 영역$('.nav')을 마우스가 떠나면 { mouseleave or mouseout }
//     서브메뉴$(.sub)와 서브메뉴배경이 위로 부드럽게 접힌다 { slideUp(100) }
(function ($, window, document, undefined) {

    var starBucks = {
        init: function () {

            starBucks.header();
            starBucks.section5Fn();
            starBucks.section6Fn();
            starBucks.section7Fn();
            starBucks.section9Fn();
        },

        header: function () {

            $('.mainBtn').on({
                mouseenter: function () {
                    $('sub').slideUp(100);
                    $(this).next().slideDown(300)
                }
            });

            // 1-4-1)
            //   - 마우스가떠나면 -> 뭐를? nav 영역을 그러면 선택자를 사용해야한다.
            //      ==> $('.nav') ... mouseleave
            //      이런식으로 코딩을 해석하는것이다.
            $('.nav').on({
                mouseleave : function(){
                    $('.sub').stop().slideUp(500);
                }
            });

        },

        section5Fn: function () {

            var t = 0;

            function sec5FormatStartFn() {
                $('.section5-left').stop().animate({ left: -70 + '%', opacity: 0 }, 1500);
                $('.section5-right').stop().animate({ right: -70 + '%', opacity: 0 }, 1500);
            }

            function sec5AnimationFn() {
                $('.section5-left').stop().animate({ left: 30 + '%', opacity: 1 }, 2000);
                $('.section5-right').stop().animate({ right: 30 + '%', opacity: 1 }, 2000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section4').offset().top - 500) {
                    if (t == 0) {
                        t = 1;
                        sec5AnimationFn();
                    }
                }
                else {
                    if (t == 1) {
                        t = 0;
                        sec5FormatStartFn();
                    }
                }
            });
        },
        section6Fn: function () {

            var t = 0;

            function formatFn() {
                $('.section6-right').stop().animate({ opacity: 0 }, 1500);
            }

            function animationFn() {
                $('.section6-right').stop().animate({ opacity: 1 }, 3000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },
        section7Fn: function () {

            var t = 0;

            function formatFn() {
                $('.section7-txt1').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.section7-txt2').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.moreBtn-wrap').stop().animate({ opacity: 0 }, 1000);
            }
            function animationFn() {
                $('.section7-txt1').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.section7-txt2').stop().animate({ left: 0, opacity: 1 }, 2500);
                $('.moreBtn-wrap').stop().animate({ opacity: 1 }, 2500);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top + 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },

        section9Fn() {

            var t = 0;

            function formatFn() {
                $('.sec9-right-title h2').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title h3').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title span').stop().animate({ left: 1000, opacity: 0 }, 0);
            }

            function animationFn() {
                $('.sec9-right-title h2').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.sec9-right-title h3').stop().animate({ left: 0, opacity: 1 }, 2300);
                $('.sec9-right-title span').stop().animate({ left: 0, opacity: 1 }, 2600);
            }

            $(window).scroll(function () {
                if ($('#section8').offset().top - 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        }
    }

    starBucks.init();

})(jQuery, window, document);
*/

// ######################################################## //
// Date : 2020.08.26(수) - 2교시
// Title : 슬라이드 이벤트
// ######################################################## //

/*
// 1-5) 슬라이드 이벤트
//   - 원래 스벅홈피는 메인메뉴 마우스올려놓고 서브메뉴로가도 메인메뉴버튼이 활성화(검정색)으로 되는데
//     1-5) 전까지는 마우스 떠나면 메인메뉴 활성화(검정색)이 비활성화된다.

//   - addClass(); 이용하여 메인버튼에 스타일적용이 되어서 검정색표시
//     다른 메인버튼에 마우스 오버시 추가된 클래스 삭제
(function ($, window, document, undefined) {

    var starBucks = {
        init: function () {

            starBucks.header();
            starBucks.section5Fn();
            starBucks.section6Fn();
            starBucks.section7Fn();
            starBucks.section9Fn();
        },

        header: function () {

            
            $('.mainBtn').on({
                mouseenter: function () {
                    $('sub').slideUp(100);
                    $(this).next().slideDown(300)
                    // 1-5-1) 추가된클래스 삭제
                    //   - style.css 43Line 호버기능 (a.mainBtn:hover)
                    //     에서 활성화시키는것이 addMainbBtn Class 이다
                    $('.mainBtn').removeClass('.addMainbBtn')

                    // 1-5-2) 클래스 추가
                    $(this).addClass('.addMainbBtn')

                    // 642Line의$('.mainBtn') 는 전체에 해당하는것이고
                    // 645Line의$(this) 는 나자신에 해당한다.
                }
            });

            // 1-5-3) nav 영역에도 클래스 삭제
            $('.nav').on({
                mouseleave: function () {
                    $('.sub').stop().slideUp(500);
                    $('.mainBtn').removeClass('.addMainbBtn')
                }
            });

        },

        section5Fn: function () {

            var t = 0;

            function sec5FormatStartFn() {
                $('.section5-left').stop().animate({ left: -70 + '%', opacity: 0 }, 1500);
                $('.section5-right').stop().animate({ right: -70 + '%', opacity: 0 }, 1500);
            }

            function sec5AnimationFn() {
                $('.section5-left').stop().animate({ left: 30 + '%', opacity: 1 }, 2000);
                $('.section5-right').stop().animate({ right: 30 + '%', opacity: 1 }, 2000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section4').offset().top - 500) {
                    if (t == 0) {
                        t = 1;
                        sec5AnimationFn();
                    }
                }
                else {
                    if (t == 1) {
                        t = 0;
                        sec5FormatStartFn();
                    }
                }
            });
        },
        section6Fn: function () {

            var t = 0;

            function formatFn() {
                $('.section6-right').stop().animate({ opacity: 0 }, 1500);
            }

            function animationFn() {
                $('.section6-right').stop().animate({ opacity: 1 }, 3000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },
        section7Fn: function () {

            var t = 0;

            function formatFn() {
                $('.section7-txt1').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.section7-txt2').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.moreBtn-wrap').stop().animate({ opacity: 0 }, 1000);
            }
            function animationFn() {
                $('.section7-txt1').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.section7-txt2').stop().animate({ left: 0, opacity: 1 }, 2500);
                $('.moreBtn-wrap').stop().animate({ opacity: 1 }, 2500);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top + 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },

        section9Fn() {

            var t = 0;

            function formatFn() {
                $('.sec9-right-title h2').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title h3').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title span').stop().animate({ left: 1000, opacity: 0 }, 0);
            }

            function animationFn() {
                $('.sec9-right-title h2').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.sec9-right-title h3').stop().animate({ left: 0, opacity: 1 }, 2300);
                $('.sec9-right-title span').stop().animate({ left: 0, opacity: 1 }, 2600);
            }

            $(window).scroll(function () {
                if ($('#section8').offset().top - 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        }
    }

    starBucks.init();

})(jQuery, window, document);
*/

/*
// 1-6) 슬라이드 이벤트 완성
(function ($, window, document, undefined) {

    var starBucks = {
        init: function () {
            starBucks.header();
            starBucks.section5Fn();
            starBucks.section6Fn();
            starBucks.section7Fn();
            starBucks.section9Fn();
        },

        header: function () {
            $('.mainBtn').on({
                mouseenter: function () {
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(500);
                    $('.mainBtn').removeClass('addMainbBtn');
                    $(this).addClass('addMainbBtn');
                }
            });

            $('.nav').on({
                mouseleave: function () {
                    $('.sub').stop().slideUp(500);
                    $('.mainBtn').removeClass('addMainbBtn');
                }
            });

        },

        section5Fn: function () {
            var t = 0;

            function sec5FormatStartFn() {
                $('.section5-left').stop().animate({ left: -70 + '%', opacity: 0 }, 1500);
                $('.section5-right').stop().animate({ right: -70 + '%', opacity: 0 }, 1500);
            }

            function sec5AnimationFn() {
                $('.section5-left').stop().animate({ left: 30 + '%', opacity: 1 }, 2000);
                $('.section5-right').stop().animate({ right: 30 + '%', opacity: 1 }, 2000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section4').offset().top - 500) {
                    if (t == 0) {
                        t = 1;
                        sec5AnimationFn();
                    }
                }
                else {
                    if (t == 1) {
                        t = 0;
                        sec5FormatStartFn();
                    }
                }
            });
        },
        section6Fn: function () {
            var t = 0;

            function formatFn() {
                $('.section6-right').stop().animate({ opacity: 0 }, 1500);
            }

            function animationFn() {
                $('.section6-right').stop().animate({ opacity: 1 }, 3000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },
        section7Fn: function () {
            var t = 0;

            function formatFn() {
                $('.section7-txt1').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.section7-txt2').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.moreBtn-wrap').stop().animate({ opacity: 0 }, 1000);
            }
            function animationFn() {
                $('.section7-txt1').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.section7-txt2').stop().animate({ left: 0, opacity: 1 }, 2500);
                $('.moreBtn-wrap').stop().animate({ opacity: 1 }, 2500);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top + 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },

        section9Fn() {
            var t = 0;

            function formatFn() {
                $('.sec9-right-title h2').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title h3').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title span').stop().animate({ left: 1000, opacity: 0 }, 0);
            }

            function animationFn() {
                $('.sec9-right-title h2').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.sec9-right-title h3').stop().animate({ left: 0, opacity: 1 }, 2300);
                $('.sec9-right-title span').stop().animate({ left: 0, opacity: 1 }, 2600);
            }

            $(window).scroll(function () {
                if ($('#section8').offset().top - 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        }
    }

    starBucks.init();

})(jQuery, window, document);
*/


// ######################################################## //
// Date : 2020.08.26(수) - 3교시
// Title : 슬라이드 이벤트
// ######################################################## //


// etc-1) this의 의미
//   1) headerSlide: function() 내부에서 $식별자로 mainBtn을 선택했다 == $('.mainBtn').on({
                
//   2) 그리고 mainBtn 클래스에 마우스가 위로올라가면 어떤것을 수행하도록 했다. == mouseenter: function(){

//   3) 근데 여기가중요하다. 스타벅스 메인메뉴버튼 6개는 전부 mainBtn로 같은이름으로 만들었다(개발자가 의도적으로, 제어하기 편하게하기위해)
//   3-1) 그래서 this 를 사용한다. this는 현재 마우스가 올라가져있는곳, mouseenter 된곳을 의미한다.
//        만약에 mouseenter 이벤트 대신에 클릭이벤트도 마찬가지이다. 6개의 mainBtn 중에서 click 된놈(this)을 작업을해줄때 this 를 사용한다.

//   4) 만약 this 를 사용하지 않으려면 $('.mainBtn').eq(0).next... 이런식으로 써야된다.

//   5) 예를들어 스타벅스홈피 첫번째 메인메뉴버튼인 COFFEE에 해당하는작업을할땐
//   5-1)             $(this).next().stop().slideDown(500); 이놈과
//   5-2) $('.mainBtn').eq(0).next().stop().slideDown(500); 이놈이 모두 동일한 작업이다.



// etc-2) next 의미 
//  1) index.html 86Line을 보게되면 <a href='#' class='mainBtn' title="COFFEE">COFFEE</a>
//  1-1) 이렇게 mainBtn 클래스 밑에 <div class='sub sub1'> 
//  1-2) sub 클래스가있다. 이 sub 클래스를 지칭할때 next() 이것을 사용한다.

//  2) 만약에 mainBtn 위에 <p></p> p tag 같은것이 있으면 preveiw를 사용하여 지칭한다.

/*
// 2-1) 슬라이드 이벤트 
//   - 메인메뉴 -> 서브메뉴 나왔을때 부드럽게하는작업

//   - index.html section1-element-1 ~ 5까지 작업
//   - style.css 81Line 부터 애니메이션작업 주석처리

//   - 실행해서 애니메이션작업 비활성화상태 확인하기
(function ($, window, document, undefined) {

    var starBucks = {
        init: function () {
            starBucks.header();
            starBucks.section5Fn();
            starBucks.section6Fn();
            starBucks.section7Fn();
            starBucks.section9Fn();
        },

        header: function () {
            $('.mainBtn').on({
                mouseenter: function () {
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(500);
                    $('.mainBtn').removeClass('addMainbBtn');
                    $(this).addClass('addMainbBtn');
                }
            });

            $('.nav').on({
                mouseleave: function () {
                    $('.sub').stop().slideUp(500);
                    $('.mainBtn').removeClass('addMainbBtn');
                }
            });

        },

        section5Fn: function () {
            var t = 0;

            function sec5FormatStartFn() {
                $('.section5-left').stop().animate({ left: -70 + '%', opacity: 0 }, 1500);
                $('.section5-right').stop().animate({ right: -70 + '%', opacity: 0 }, 1500);
            }

            function sec5AnimationFn() {
                $('.section5-left').stop().animate({ left: 30 + '%', opacity: 1 }, 2000);
                $('.section5-right').stop().animate({ right: 30 + '%', opacity: 1 }, 2000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section4').offset().top - 500) {
                    if (t == 0) {
                        t = 1;
                        sec5AnimationFn();
                    }
                }
                else {
                    if (t == 1) {
                        t = 0;
                        sec5FormatStartFn();
                    }
                }
            });
        },
        section6Fn: function () {
            var t = 0;

            function formatFn() {
                $('.section6-right').stop().animate({ opacity: 0 }, 1500);
            }

            function animationFn() {
                $('.section6-right').stop().animate({ opacity: 1 }, 3000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },
        section7Fn: function () {
            var t = 0;

            function formatFn() {
                $('.section7-txt1').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.section7-txt2').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.moreBtn-wrap').stop().animate({ opacity: 0 }, 1000);
            }
            function animationFn() {
                $('.section7-txt1').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.section7-txt2').stop().animate({ left: 0, opacity: 1 }, 2500);
                $('.moreBtn-wrap').stop().animate({ opacity: 1 }, 2500);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top + 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },

        section9Fn() {
            var t = 0;

            function formatFn() {
                $('.sec9-right-title h2').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title h3').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title span').stop().animate({ left: 1000, opacity: 0 }, 0);
            }

            function animationFn() {
                $('.sec9-right-title h2').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.sec9-right-title h3').stop().animate({ left: 0, opacity: 1 }, 2300);
                $('.sec9-right-title span').stop().animate({ left: 0, opacity: 1 }, 2600);
            }

            $(window).scroll(function () {
                if ($('#section8').offset().top - 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        }
    }

    starBucks.init();

})(jQuery, window, document);
*/

/*
// 2-2) 슬라이드 이벤트 
//  
//  - 페이드인 효과이용 / opacity:1 (보임) or opacity:0 (안보임) / fadeIn(1000) or fadeOut(1000)

//  - 무엇을 어떻게 할것인가?
//  - 무엇(선택자 selector) 어떻게(opacity or 페이드 인아웃 애니메이션효과 두가지로 구현)

(function ($, window, document, undefined) {

    var starBucks = {
        init: function () {

            // 2-2-2) 여기에서 실행
            //    - 즉시실행 된다 여기있는것을은 전부 즉시실행함수이다.
            starBucks.header();
            starBucks.section1Fn();
            starBucks.section5Fn();
            starBucks.section6Fn();
            starBucks.section7Fn();
            starBucks.section9Fn();
        },

        header: function () {
            $('.mainBtn').on({
                mouseenter: function () {
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(500);
                    $('.mainBtn').removeClass('addMainbBtn');
                    $(this).addClass('addMainbBtn');
                }
            });

            $('.nav').on({
                mouseleave: function () {
                    $('.sub').stop().slideUp(500);
                    $('.mainBtn').removeClass('addMainbBtn');
                }
            });
        },
        
        // 2-2-1) section1 이라는 리터럴 객체화 함수 작성후,
        // section1Fn: function(){
        //     alert('section1Fn');

        // },


        section1Fn: function(){
            -  콜백함수 처리 애니메이션작업
            // 2-2-3-1) 두라인을 하나로합침
            // $('.section1-element-1').stop().fadeOut(0);
            // $('.section1-element-1').stop().fadeIn(2000);

            $('.section1-element-1').stop().fadeOut(0).fadeIn(2000);
            $('.section1-element-2').stop().fadeOut(0).fadeIn(2000);
            $('.section1-element-3').stop().fadeOut(0).fadeIn(2000);
            $('.section1-element-4').stop().fadeOut(0).fadeIn(2000);
            $('.section1-element-5').stop().fadeOut(0).fadeIn(2000);
        },

        section5Fn: function () {
            var t = 0;

            function sec5FormatStartFn() {
                $('.section5-left').stop().animate({ left: -70 + '%', opacity: 0 }, 1500);
                $('.section5-right').stop().animate({ right: -70 + '%', opacity: 0 }, 1500);
            }

            function sec5AnimationFn() {
                $('.section5-left').stop().animate({ left: 30 + '%', opacity: 1 }, 2000);
                $('.section5-right').stop().animate({ right: 30 + '%', opacity: 1 }, 2000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section4').offset().top - 500) {
                    if (t == 0) {
                        t = 1;
                        sec5AnimationFn();
                    }
                }
                else {
                    if (t == 1) {
                        t = 0;
                        sec5FormatStartFn();
                    }
                }
            });
        },
        section6Fn: function () {
            var t = 0;

            function formatFn() {
                $('.section6-right').stop().animate({ opacity: 0 }, 1500);
            }

            function animationFn() {
                $('.section6-right').stop().animate({ opacity: 1 }, 3000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },
        section7Fn: function () {
            var t = 0;

            function formatFn() {
                $('.section7-txt1').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.section7-txt2').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.moreBtn-wrap').stop().animate({ opacity: 0 }, 1000);
            }
            function animationFn() {
                $('.section7-txt1').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.section7-txt2').stop().animate({ left: 0, opacity: 1 }, 2500);
                $('.moreBtn-wrap').stop().animate({ opacity: 1 }, 2500);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top + 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },

        section9Fn() {
            var t = 0;

            function formatFn() {
                $('.sec9-right-title h2').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title h3').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title span').stop().animate({ left: 1000, opacity: 0 }, 0);
            }

            function animationFn() {
                $('.sec9-right-title h2').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.sec9-right-title h3').stop().animate({ left: 0, opacity: 1 }, 2300);
                $('.sec9-right-title span').stop().animate({ left: 0, opacity: 1 }, 2600);
            }

            $(window).scroll(function () {
                if ($('#section8').offset().top - 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        }
    }

    starBucks.init();

})(jQuery, window, document);
*/

/*
// 2-3) 슬라이드 이벤트 
//   - fadein 효과 콜백추가
(function ($, window, document, undefined) {

    var starBucks = {
        init: function () {

            starBucks.header();
            starBucks.section1Fn();
            starBucks.section5Fn();
            starBucks.section6Fn();
            starBucks.section7Fn();
            starBucks.section9Fn();
        },

        header: function () {
            $('.mainBtn').on({
                mouseenter: function () {
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(500);
                    $('.mainBtn').removeClass('addMainbBtn');
                    $(this).addClass('addMainbBtn');
                }
            });

            $('.nav').on({
                mouseleave: function () {
                    $('.sub').stop().slideUp(500);
                    $('.mainBtn').removeClass('addMainbBtn');
                }
            });
        },

        section1Fn: function () {

            // 2-3-1) 콜백함수화
            //   - 콜백을쓸땐 항상 시간뒤에 1) ,(콤마) -> 2) function(){} 이렇게 작성한다.         
            // $('.section1-element-1').stop().fadeOut(0).fadeIn(2000, function(){
            //     $('.section1-element-2').stop().fadeOut(0).fadeIn(2000);
            // });
            // $('.section1-element-3').stop().fadeOut(0).fadeIn(2000);
            // $('.section1-element-4').stop().fadeOut(0).fadeIn(2000);
            // $('.section1-element-5').stop().fadeOut(0).fadeIn(2000);

            //  2-3-1) 이렇게하면 단계별로 실행된다.
            //     $('.section1-element-1').stop().fadeOut(0).fadeIn(2000, function(){
            //         $('.section1-element-2').stop().fadeOut(0).fadeIn(2000, function(){
            //             $('.section1-element-3').stop().fadeOut(0).fadeIn(2000, function(){
            //                 $('.section1-element-4').stop().fadeOut(0).fadeIn(2000, function(){
            //                     $('.section1-element-5').stop().fadeOut(0).fadeIn(2000);
            //                 });
            //             });
            //         });
            //     });
            // },

            // 2-3-2) 처음에 안보이게하고 나오게하기
            $('.section1-element-1').stop().fadeOut(0)
            $('.section1-element-2').stop().fadeOut(0)
            $('.section1-element-3').stop().fadeOut(0)
            $('.section1-element-4').stop().fadeOut(0)
            $('.section1-element-5').stop().fadeOut(0)
            $('.section1-element-1').stop().fadeIn(500, function(){
                $('.section1-element-2').stop().fadeIn(500, function(){
                    $('.section1-element-3').stop().fadeIn(500, function(){
                        $('.section1-element-4').stop().fadeIn(500, function(){
                            $('.section1-element-5').stop().fadeIn(500);
                        });
                    });
                });
            });
        },

        section5Fn: function () {
            var t = 0;

            function sec5FormatStartFn() {
                $('.section5-left').stop().animate({ left: -70 + '%', opacity: 0 }, 1500);
                $('.section5-right').stop().animate({ right: -70 + '%', opacity: 0 }, 1500);
            }

            function sec5AnimationFn() {
                $('.section5-left').stop().animate({ left: 30 + '%', opacity: 1 }, 2000);
                $('.section5-right').stop().animate({ right: 30 + '%', opacity: 1 }, 2000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section4').offset().top - 500) {
                    if (t == 0) {
                        t = 1;
                        sec5AnimationFn();
                    }
                }
                else {
                    if (t == 1) {
                        t = 0;
                        sec5FormatStartFn();
                    }
                }
            });
        },
        section6Fn: function () {
            var t = 0;

            function formatFn() {
                $('.section6-right').stop().animate({ opacity: 0 }, 1500);
            }

            function animationFn() {
                $('.section6-right').stop().animate({ opacity: 1 }, 3000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },
        section7Fn: function () {
            var t = 0;

            function formatFn() {
                $('.section7-txt1').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.section7-txt2').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.moreBtn-wrap').stop().animate({ opacity: 0 }, 1000);
            }
            function animationFn() {
                $('.section7-txt1').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.section7-txt2').stop().animate({ left: 0, opacity: 1 }, 2500);
                $('.moreBtn-wrap').stop().animate({ opacity: 1 }, 2500);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top + 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },

        section9Fn() {
            var t = 0;

            function formatFn() {
                $('.sec9-right-title h2').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title h3').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title span').stop().animate({ left: 1000, opacity: 0 }, 0);
            }

            function animationFn() {
                $('.sec9-right-title h2').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.sec9-right-title h3').stop().animate({ left: 0, opacity: 1 }, 2300);
                $('.sec9-right-title span').stop().animate({ left: 0, opacity: 1 }, 2600);
            }

            $(window).scroll(function () {
                if ($('#section8').offset().top - 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        }
    }

    starBucks.init();

})(jQuery, window, document);
*/

/*
// 2-4) 슬라이드 이벤트 
//   - fadeIn, out 효과를 opacity 효과로 변경
(function ($, window, document, undefined) {

    var starBucks = {
        init: function () {

            starBucks.header();
            starBucks.section1Fn();
            starBucks.section5Fn();
            starBucks.section6Fn();
            starBucks.section7Fn();
            starBucks.section9Fn();
        },

        header: function () {
            $('.mainBtn').on({
                mouseenter: function () {
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(500);
                    $('.mainBtn').removeClass('addMainbBtn');
                    $(this).addClass('addMainbBtn');
                }
            });

            $('.nav').on({
                mouseleave: function () {
                    $('.sub').stop().slideUp(500);
                    $('.mainBtn').removeClass('addMainbBtn');
                }
            });
        },

        section1Fn: function () {

            // 2-4-1) css에서 opacity 를 0으로 미리해놓으면 1516~1521Line 없애도된다.
            //     $('.section1-element-1').stop().fadeOut(0)
            //     $('.section1-element-2').stop().fadeOut(0)
            //     $('.section1-element-3').stop().fadeOut(0)
            //     $('.section1-element-4').stop().fadeOut(0)
            //     $('.section1-element-5').stop().fadeOut(0)
            //     $('.section1-element-1').stop().fadeIn(500, function () {
            //         $('.section1-element-2').stop().fadeIn(500, function () {
            //             $('.section1-element-3').stop().fadeIn(500, function () {
            //                 $('.section1-element-4').stop().fadeIn(500, function () {
            //                     $('.section1-element-5').stop().fadeIn(500);
            //                 });
            //             });
            //         });
            //     });
            // },

            // 2-4-2) 2-4-1)의 fadeIn, out 작업을 opacity로 활용
            //   - fadeIn, out보다 opacity를 \훨씬더많이쓴다
            $('.section1-element-1').stop().animate({ opacity: 0 }, 0);
            $('.section1-element-2').stop().animate({ opacity: 0 }, 0);
            $('.section1-element-3').stop().animate({ opacity: 0 }, 0);
            $('.section1-element-4').stop().animate({ opacity: 0 }, 0);
            $('.section1-element-5').stop().animate({ opacity: 0 }, 0);

            $('.section1-element-1').stop().animate({ opacity: 1 }, 600, function () {
                $('.section1-element-2').stop().animate({ opacity: 1 }, 600, function () {
                    $('.section1-element-3').stop().animate({ opacity: 1 }, 600, function () {
                        $('.section1-element-4').stop().animate({ opacity: 1 }, 600, function () {
                            $('.section1-element-5').stop().animate({ opacity: 1 }, 600);
                        });
                    });
                });
            });
        },

        section5Fn: function () {
            var t = 0;

            function sec5FormatStartFn() {
                $('.section5-left').stop().animate({ left: -70 + '%', opacity: 0 }, 1500);
                $('.section5-right').stop().animate({ right: -70 + '%', opacity: 0 }, 1500);
            }

            function sec5AnimationFn() {
                $('.section5-left').stop().animate({ left: 30 + '%', opacity: 1 }, 2000);
                $('.section5-right').stop().animate({ right: 30 + '%', opacity: 1 }, 2000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section4').offset().top - 500) {
                    if (t == 0) {
                        t = 1;
                        sec5AnimationFn();
                    }
                }
                else {
                    if (t == 1) {
                        t = 0;
                        sec5FormatStartFn();
                    }
                }
            });
        },
        section6Fn: function () {
            var t = 0;

            function formatFn() {
                $('.section6-right').stop().animate({ opacity: 0 }, 1500);
            }

            function animationFn() {
                $('.section6-right').stop().animate({ opacity: 1 }, 3000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },
        section7Fn: function () {
            var t = 0;

            function formatFn() {
                $('.section7-txt1').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.section7-txt2').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.moreBtn-wrap').stop().animate({ opacity: 0 }, 1000);
            }
            function animationFn() {
                $('.section7-txt1').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.section7-txt2').stop().animate({ left: 0, opacity: 1 }, 2500);
                $('.moreBtn-wrap').stop().animate({ opacity: 1 }, 2500);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top + 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },

        section9Fn() {
            var t = 0;

            function formatFn() {
                $('.sec9-right-title h2').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title h3').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title span').stop().animate({ left: 1000, opacity: 0 }, 0);
            }

            function animationFn() {
                $('.sec9-right-title h2').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.sec9-right-title h3').stop().animate({ left: 0, opacity: 1 }, 2300);
                $('.sec9-right-title span').stop().animate({ left: 0, opacity: 1 }, 2600);
            }

            $(window).scroll(function () {
                if ($('#section8').offset().top - 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        }
    }

    starBucks.init();

})(jQuery, window, document);
*/

/*
// 2-5) 슬라이드 이벤트 
//   - opacity 효과 함수화 + 모듈화

//   - 지금 starBucks.header(); / starBucks.section1Fn(); / starBucks.section5Fn();
//     이런식으로 함수를 모듈화시키는코딩이 C++ C# java에서의 모듈화 객체화 이런것을 의미한다. 

(function ($, window, document, undefined) {

    var starBucks = {
        init: function () {

            starBucks.header();
            starBucks.section1Fn();
            starBucks.section5Fn();
            starBucks.section6Fn();
            starBucks.section7Fn();
            starBucks.section9Fn();
        },

        header: function () {
            $('.mainBtn').on({
                mouseenter: function () {
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(500);
                    $('.mainBtn').removeClass('addMainbBtn');
                    $(this).addClass('addMainbBtn');
                }
            });

            $('.nav').on({
                mouseleave: function () {
                    $('.sub').stop().slideUp(500);
                    $('.mainBtn').removeClass('addMainbBtn');
                }
            });
        },

        section1Fn: function () {

            // 2-5-1) 각각을 함수화시켜도 되지만,
            //    - 홈페이지 시작시 실행되는 이러한 함수들은 즉시실행함수 내에 넣어서
            //      이런식으로 많이사용한다. 

            //    - 이러한구분(즉시실행으로? 아니면 함수화?)을 잘해서 코딩을해야 전문가
            (function(){
                $('.section1-element-1').stop().animate({ opacity: 0 }, 0);
                $('.section1-element-2').stop().animate({ opacity: 0 }, 0);
                $('.section1-element-3').stop().animate({ opacity: 0 }, 0);
                $('.section1-element-4').stop().animate({ opacity: 0 }, 0);
                $('.section1-element-5').stop().animate({ opacity: 0 }, 0);
    
                $('.section1-element-1').stop().animate({ opacity: 1 }, 500, function () {
                    $('.section1-element-2').stop().animate({ opacity: 1 }, 600, function () {
                        $('.section1-element-3').stop().animate({ opacity: 1 }, 700, function () {
                            $('.section1-element-4').stop().animate({ opacity: 1 }, 800, function () {
                                $('.section1-element-5').stop().animate({ opacity: 1 }, 900);
                            });
                        });
                    });
                });
            })();   // 
        },

        section5Fn: function () {
            var t = 0;

            function sec5FormatStartFn() {
                $('.section5-left').stop().animate({ left: -70 + '%', opacity: 0 }, 1500);
                $('.section5-right').stop().animate({ right: -70 + '%', opacity: 0 }, 1500);
            }

            function sec5AnimationFn() {
                $('.section5-left').stop().animate({ left: 30 + '%', opacity: 1 }, 2000);
                $('.section5-right').stop().animate({ right: 30 + '%', opacity: 1 }, 2000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section4').offset().top - 500) {
                    if (t == 0) {
                        t = 1;
                        sec5AnimationFn();
                    }
                }
                else {
                    if (t == 1) {
                        t = 0;
                        sec5FormatStartFn();
                    }
                }
            });
        },
        section6Fn: function () {
            var t = 0;

            function formatFn() {
                $('.section6-right').stop().animate({ opacity: 0 }, 1500);
            }

            function animationFn() {
                $('.section6-right').stop().animate({ opacity: 1 }, 3000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },
        section7Fn: function () {
            var t = 0;

            function formatFn() {
                $('.section7-txt1').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.section7-txt2').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.moreBtn-wrap').stop().animate({ opacity: 0 }, 1000);
            }
            function animationFn() {
                $('.section7-txt1').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.section7-txt2').stop().animate({ left: 0, opacity: 1 }, 2500);
                $('.moreBtn-wrap').stop().animate({ opacity: 1 }, 2500);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top + 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },

        section9Fn() {
            var t = 0;

            function formatFn() {
                $('.sec9-right-title h2').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title h3').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title span').stop().animate({ left: 1000, opacity: 0 }, 0);
            }

            function animationFn() {
                $('.sec9-right-title h2').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.sec9-right-title h3').stop().animate({ left: 0, opacity: 1 }, 2300);
                $('.sec9-right-title span').stop().animate({ left: 0, opacity: 1 }, 2600);
            }

            $(window).scroll(function () {
                if ($('#section8').offset().top - 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        }
    }

    starBucks.init();

})(jQuery, window, document);
*/


// 2-6) 슬라이드 이벤트 2차완성
(function ($, window, document, undefined) {

    var starBucks = {
        init: function () {

            starBucks.header();
            starBucks.section1Fn();
            starBucks.section5Fn();
            starBucks.section6Fn();
            starBucks.section7Fn();
            starBucks.section9Fn();
        },

        header: function () {
            $('.mainBtn').on({
                mouseenter: function () {
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(500);
                    $('.mainBtn').removeClass('addMainbBtn');
                    $(this).addClass('addMainbBtn');
                }
            });

            $('.nav').on({
                mouseleave: function () {
                    $('.sub').stop().slideUp(500);
                    $('.mainBtn').removeClass('addMainbBtn');
                }
            });
        },

        section1Fn: function () {
            (function () {
                $('.section1-element-1').stop().animate({ opacity: 0 }, 0);
                $('.section1-element-2').stop().animate({ opacity: 0 }, 0);
                $('.section1-element-3').stop().animate({ opacity: 0 }, 0);
                $('.section1-element-4').stop().animate({ opacity: 0 }, 0);
                $('.section1-element-5').stop().animate({ opacity: 0 }, 0);

                $('.section1-element-1').stop().animate({ opacity: 1 }, 500, function () {
                    $('.section1-element-2').stop().animate({ opacity: 1 }, 600, function () {
                        $('.section1-element-3').stop().animate({ opacity: 1 }, 700, function () {
                            $('.section1-element-4').stop().animate({ opacity: 1 }, 800, function () {
                                $('.section1-element-5').stop().animate({ opacity: 1 }, 900);
                            });
                        });
                    });
                });
            })();   // 
        },

        section5Fn: function () {
            var t = 0;

            function sec5FormatStartFn() {
                $('.section5-left').stop().animate({ left: -70 + '%', opacity: 0 }, 1500);
                $('.section5-right').stop().animate({ right: -70 + '%', opacity: 0 }, 1500);
            }

            function sec5AnimationFn() {
                $('.section5-left').stop().animate({ left: 30 + '%', opacity: 1 }, 2000);
                $('.section5-right').stop().animate({ right: 30 + '%', opacity: 1 }, 2000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section4').offset().top - 500) {
                    if (t == 0) {
                        t = 1;
                        sec5AnimationFn();
                    }
                }
                else {
                    if (t == 1) {
                        t = 0;
                        sec5FormatStartFn();
                    }
                }
            });
        },
        section6Fn: function () {
            var t = 0;

            function formatFn() {
                $('.section6-right').stop().animate({ opacity: 0 }, 1500);
            }

            function animationFn() {
                $('.section6-right').stop().animate({ opacity: 1 }, 3000);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },
        section7Fn: function () {
            var t = 0;

            function formatFn() {
                $('.section7-txt1').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.section7-txt2').stop().animate({ left: -1000, opacity: 0 }, 1000);
                $('.moreBtn-wrap').stop().animate({ opacity: 0 }, 1000);
            }
            function animationFn() {
                $('.section7-txt1').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.section7-txt2').stop().animate({ left: 0, opacity: 1 }, 2500);
                $('.moreBtn-wrap').stop().animate({ opacity: 1 }, 2500);
            }

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section5').offset().top + 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        },

        section9Fn() {
            var t = 0;

            function formatFn() {
                $('.sec9-right-title h2').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title h3').stop().animate({ left: 1000, opacity: 0 }, 0);
                $('.sec9-right-title span').stop().animate({ left: 1000, opacity: 0 }, 0);
            }

            function animationFn() {
                $('.sec9-right-title h2').stop().animate({ left: 0, opacity: 1 }, 2000);
                $('.sec9-right-title h3').stop().animate({ left: 0, opacity: 1 }, 2300);
                $('.sec9-right-title span').stop().animate({ left: 0, opacity: 1 }, 2600);
            }

            $(window).scroll(function () {
                if ($('#section8').offset().top - 300) {
                    if (t == 0) {
                        t = 1;
                        animationFn();
                    }
                }
                else {
                    t = 0;
                    formatFn();
                }
            });
        }
    }

    starBucks.init();

})(jQuery, window, document);