//timer.js
(function($, window, document, undefined){
    // var h = 5;  //30도(시간당) + 0.5도(분당)
    // var m = 27; //6도(분당)
    // var s = 30; //6도(초당)
    
    //날짜객체


    setInterval(timerFn, 1000);  //1초에 한번씩 Date() 객체 로딩

    function timerFn(){
        var toDay = new Date();  //날짜 생성자
        var h = toDay.getHours()-12;   //24시각제를 12시각제로 변경
        var m = toDay.getMinutes();   
        var s = toDay.getSeconds();   
            console.log('h '+ h );
            console.log('m '+ m );
            console.log('s '+ s );



        //6시 45분 40초
        $('.timeS').css({ transform:'rotate(' + (6*s) + 'deg)' });  //초
        $('.timeM').css({ transform:'rotate(' + (6*m) + 'deg)' });  //분
        $('.timeH').css({ transform:'rotate(' + ((30*h) + (m*0.5)) + 'deg)' }); //시

    }

})(jQuery, window, document);