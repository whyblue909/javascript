// ######################################################## //
// Date : 2020.08.25(화) - 1교시
// Title : 스크롤이벤트
// ######################################################## //

(function($){

    var cnt=0;

    var setId = 0; // 7번을 수행하기위한 타이머 변수.

        //1. 슬라이드 메인함수
        //애니메이션
        //stop() 메소드는 애니메이션 이전 발생한 여러번 수행 할거를 막는다.
        //버블링을 막음.
        function slideFn(){
            $('.section3-slide-wrap').stop().animate({ left: -819*cnt },600 ,function(){
                if(cnt>2){cnt=0} //마지막이면 처음슬라이드로 설정
                if(cnt<0){cnt=2} //처음보다 더 뒤로가면 마지막 슬라이드로 설정
                $('.section3-slide-wrap').stop().animate({ left: -819*cnt },0);
            });
        }

        //2. 슬라이드 다음슬라이드 카운트함수 ++
        function nextSlideCountFn(){
            cnt++; //숫자 증가후
            slideFn(); //슬라이드 메인함수 호출 - cnt 증가변수 전달된다.
        }

        //3. 슬라이드 이전슬라이드 카운트함수 --
        function prevSlideCountFn(){
            cnt--;
            slideFn(); //슬라이드 메인함수 호출
        }

        //4. 버튼 클릭 이벤트 - 다음클릭버튼
        $('.nextArrowBtn').click(function(){
            //다음 카운트 함수
            //애니메이션이 진행이 안될 때만 함수 호출 가능
            if( !$('.section3-slide-wrap').is(':animated') ){
                nextSlideCountFn();
            }

        });


        //5. 버튼 클릭 이벤트 - 이전클릭버튼
        $('.prevArrowBtn').click(function(){
                //이전 카운트 함수 
                if( !$('.section3-slide-wrap').is(':animated') ){
                    prevSlideCountFn();
                }
        });


        // 6. 자동 타이머 설정
        //   3초에 한번씩 다음슬라이드 카운트를 호출 실행하게 해보자
        //   setInterval 함수 (실행할 함수, 넘길 시간 m/s)
        
        // setInterval(nextSlideCountFn,3000);
        function timer(){
            setId = setInterval(nextSlideCountFn, 1000); // 7번 사용하기위해 변수 setId에다가 함수를 저장함
                                                         // 그리고 해당라인을 함수화 한다.

        }
        timer();    // 최초 로드시 시작하는 것.
        

        





        // 7. 일시 정지하기 (삼각형 플레이)
        // paly 버튼을 클릭하여 
        // 그리고 버튼 모양을 play 이미지로 변경하기. addPaly 클래스 추가해서 만들기
        // 플레이버튼 클릭하면 함수를 바꿔라?
        
        var t = 0; // 토글 변수, 플레이 상태 체크 변수
                   // 초기값은 자신의 기준대로 정하는것.

        $('.playBtn').click(function(){
            // $(this).addClass('addPlay'); // 클래스를 태그 요소에 추가하는 메소드
            //                              // playBtn 이 클래스에서 addPlay이것을 추가시켰으니까 
            //                              // addClass('addPlay') 이렇게 하는것.
            // $(this).rmoveClass('addPlay'); // remove 클래스
            // $(this).toggleClass('addPlay'); // 한번누르면 add 한번누르면 remove 되는 클래스
                                            // 추가와 삭제를 반복하는 토글 메소드(함수)


            // 위에거 주석풀고 테스트 해보고

            // 한번 클릭하면 일시정지
            // 다시한번 클릭하면 재시작 하는 함수 만들기

            // 현재 플레이가 되는 상태를 표시
            if( t == 0 ){ // t = 0 플레이 상태
                t = 1;    // t = 1 정지 상태 변환
                clearInterval(setId)    // 타이머를 중지시키는 일시정지 함수임.
                                        // 인터벌을 클리어하는것이다. 어떤것을? setId를

                console.log(setId);   // setId 의 고유번호를 알아야 정지시킬수있기에 console.log로 찍는다.

                $('.playBtn').addClass('addPlay');  // 72~76에서 실습했던 내용을 여기에 최종으로 추가하는것.
            }
            else{
                t = 0;

                clearInterval(setId)    // 타이머를 중지시키는 일시정지 함수임.
                                        // 원래 없었는데, 버블 제거를 위해서 (자동실행 반복을 막기위해서)

                timer(); // 다시 플레이시키기 위한 함수
                console.log(setId);   // 다시 시작했을때 setId 의 고유번호는 바뀔까?

                $('.playBtn').removeClass('addPlay');
            }
            // 실제로 콘솔로그에서 찍어보면 setId의 값이 계속해서 바뀐다.
        });
        




})(jQuery);
//slide.js