(function($){
  
    var txt         = '';
    var tab         =  0; //전체공지 탭 0번
    var acnt        =  -1; //전체공지 카운트
    var a           = [];  //전체공지 all : a

    var scnt        =  -1; //쇼핑공지 카운트
    var s           = [];  //쇼핑공지 shopping : s

    var bcnt        =  -1; //브랜드소식 카운트    
    var b           = [];  //브랜드소식 brand : b

    //목록 게시물
    var pages       = 5; //페이지당 5줄씩
    var pageBtn     = 1; //페이지버튼 번호 1 ~ ...
    var startRecord = (pageBtn-1)*pages;   //시작번호(레코드)   0 10 20 30 40 ...
    var endRecord   = startRecord + pages; //끝번호(레코드)    10 20 30 40 50
    

    // 페이지 번호 그룹단위 페이지 지정
    var groupPageBtnList = 10;
    var groupPageBtnCurrentPage = Math.ceil(endRecord/pages/groupPageBtnList); //3페이지(10개묶음 그룹페이지)
    var groupPageBtnStartNum = (groupPageBtnCurrentPage-1)*groupPageBtnList;
    var groupPageBtnEndNum = groupPageBtnStartNum+groupPageBtnList;




    $.ajax({
        url:'./data/notic200e.json',
        dataType:'JSON',
        success: function(data){
            
            //반복 배열처리 each
            $.each(data.공지사항, function(idx, obj){
                acnt++; //0 1 2 3.. 199
                a[acnt] = []; //2차원 배열 선언
                a[acnt][0] = (acnt+1);
                a[acnt][1] = obj.구분;
                a[acnt][2] = obj.제목;
                a[acnt][3] = obj.날짜;

                if( obj.구분 == '쇼핑' ){
                    scnt++; //0 1 2 3 ....
                    s[scnt]=[]; //s[0]=[] //2차원 배열
                    s[scnt][0] = scnt+1;
                    s[scnt][1] = obj.구분;
                    s[scnt][2] = obj.제목;
                    s[scnt][3] = obj.날짜;
                }

                if( obj.구분 == '브랜드' ){
                    bcnt++; //0 1 2 3 ....
                    b[bcnt]=[]; //b[0]=[] //2차원 배열
                    b[bcnt][0] = bcnt+1;
                    b[bcnt][1] = obj.구분;
                    b[bcnt][2] = obj.제목;
                    b[bcnt][3] = obj.날짜;
                }

            });

            acnt = a.length; //200개 전체공지
            scnt = s.length; //150개 쇼핑공지
            bcnt = b.length; //50개  브랜드소식


/////////////////////////////////////////////////////////////////////

        function allBindFn(){
                           //196= 28*7
            startRecord = (pageBtn-1)*pages;   //시작번호(레코드)   0 10 20 30 40 ...
            endRecord  = startRecord + pages; //끝번호(레코드)    10 20 30 40 50
            
            if( endRecord > a.length ){
                endRecord = a.length;
            }

            for(i=startRecord; i<endRecord; i++){
            //for(i in a){ //0 ~199 배열 반복문 간략하게 표현
                txt += '<li class="clearfix">'; //주의: 작은 따옴표 안에 큰따옴표 인용부호
                txt += '<span>'+ (acnt-i) +'</span>';
                txt += '<span>'+ a[i][1] +'</span>';
                txt += '<span>'+ a[i][2] +'</span>';
                txt += '<span>'+ a[i][3] +'</span>';
                txt += '</li>';
            }

            $('.ajaxBinding').html(txt);
            txt='';

            //페이지버튼 바인딩 위치

            //페이지번호 버튼 출력 바인딩
            //총레코드 200(a.length)/10(pages) : 0  ~ 20미만
            //그룹페이지 한화면에 표시할 버튼의 개수 
            //한그룹페이지 10개 1 ~ 10만 보이고 나머지는 안보인다.
            //다음 그룹페이지 10개 11 ~ 20 표시(10번 페이지 넘어가면 노출)
            //다음 그룹페이지 10개 21 ~ 29 표시(20번 페이지 넘어가면 노출)
            //groupPageBtnList = 10; //버튼의 개수를 10개만 보이는 페이지 그룹
            //groupPageBtnTotalPage = Math.ceil(200/7/10); //3페이지(10개묶음 그룹페이지)
            groupPageBtnCurrentPage = Math.ceil(endRecord/pages/groupPageBtnList); //3페이지(10개묶음 그룹페이지)
            //1그룹 : 0 ~ 10미만   2그룹 : 10 ~ 20미만   3그룹 : 20 ~ 29까지
            groupPageBtnStartNum = (groupPageBtnCurrentPage-1)*groupPageBtnList;
            groupPageBtnEndNum = groupPageBtnStartNum+groupPageBtnList;

            // if( 그룹페이지끝페이지번호 > 자리올림(200/7) ){ //전체 버튼의 개수 = 자리올림(200 / 7)
            if( groupPageBtnEndNum > Math.ceil(a.length/pages) ){ //전체 버튼의 개수 = 자리올림(200 / 7)
                // groupPageBtnEndNum = 29;
                groupPageBtnEndNum = Math.ceil(a.length/pages);
            }



            // console.log('pages  : ' +  pages);
            // console.log('endRecord  : ' +  endRecord);
            // console.log('groupPageBtnList  : ' +  groupPageBtnList);
            // console.log('전체그룹페이지 : ' +  groupPageBtnCurrentPage);

            // console.log('시작그룹페이지 : ' +  groupPageBtnStartNum);
            // console.log('끝그룹페이지 : '   +  groupPageBtnEndNum);




            for(i=groupPageBtnStartNum; i<groupPageBtnEndNum; i++){ //0 ~ 20
                txt +='<span><a href="javascript:" class="pageBtn">' + (i+1) + '</a></span>'
                // txt +='<span><a href="javascript:void(0);" class="pageBtn">' + (i+1) + '</a></span>'
               
            }

            
            $('.pageBtn-wrap').html(txt);
            txt = '';

        } //함수 끝
        allBindFn(); //all 바인딩 함수 처음에 로딩시 실행

////////////////////////////////////////////////////////////////////////////
        function sBindFn(){ //쇼핑공지
            

            startRecord = (pageBtn-1)*pages;   //시작번호(레코드)   0 10 20 30 40 ...
            endRecord   = startRecord + pages; //끝번호(레코드)    10 20 30 40 50

            if( endRecord > s.length ){
                endRecord = s.length;
            }            

            for(i=startRecord; i<endRecord; i++){
                txt += '<li class="clearfix">'; //주의: 작은 따옴표 안에 큰따옴표 인용부호
                txt += '<span>'+ (scnt-i) +'</span>';
                txt += '<span>'+ s[i][1] +'</span>';
                txt += '<span>'+ s[i][2] +'</span>';
                txt += '<span>'+ s[i][3] +'</span>';
                txt += '</li>';
            }

            $('.ajaxBinding').html(txt);
            txt='';


            groupPageBtnCurrentPage = Math.ceil(endRecord/pages/groupPageBtnList); //3페이지(10개묶음 그룹페이지)
            groupPageBtnStartNum = (groupPageBtnCurrentPage-1)*groupPageBtnList;
            groupPageBtnEndNum = groupPageBtnStartNum+groupPageBtnList;

            if( groupPageBtnEndNum > Math.ceil(s.length/pages) ){ //전체 버튼의 개수 = 자리올림(200 / 7)
                groupPageBtnEndNum = Math.ceil(s.length/pages);
            }

            for(i=groupPageBtnStartNum; i<groupPageBtnEndNum; i++){ //0 ~ 20
                txt +='<span><a href="javascript:" class="pageBtn">' + (i+1) + '</a></span>'
            }

            $('.pageBtn-wrap').html(txt);
            txt = '';
//127.0.0.1/ajax_notice19/

        } //쇼핑공지 함수 끝


        function bBindFn(){ //브랜드 소식
           
            startRecord = (pageBtn-1)*pages;   //시작번호(레코드)   0 10 20 30 40 ...
            endRecord   = startRecord + pages; //끝번호(레코드)    10 20 30 40 50
            
            if( endRecord > b.length ){
                endRecord = b.length;  //마지막페이지 를 정한다.
            }

            for(i=startRecord; i<endRecord; i++){
                txt += '<li class="clearfix">'; //주의: 작은 따옴표 안에 큰따옴표 인용부호
                txt += '<span>'+ (bcnt-i) +'</span>';
                txt += '<span>'+ b[i][1] +'</span>';
                txt += '<span>'+ b[i][2] +'</span>';
                txt += '<span>'+ b[i][3] +'</span>';
                txt += '</li>';
            }

            $('.ajaxBinding').html(txt);
            txt='';



            groupPageBtnCurrentPage = Math.ceil(endRecord/pages/groupPageBtnList); //3페이지(10개묶음 그룹페이지)
            groupPageBtnStartNum = (groupPageBtnCurrentPage-1)*groupPageBtnList;
            groupPageBtnEndNum = groupPageBtnStartNum+groupPageBtnList;

            if( groupPageBtnEndNum > Math.ceil(b.length/pages) ){ //전체 버튼의 개수 = 자리올림(200 / 7)
                groupPageBtnEndNum = Math.ceil(b.length/pages);
            }

            for(i=groupPageBtnStartNum; i<groupPageBtnEndNum; i++){ //0 ~ 20
                txt +='<span><a href="javascript:" class="pageBtn">' + (i+1) + '</a></span>'
            }

            $('.pageBtn-wrap').html(txt);
            txt = '';


        } //브랜드 소식 함수 끝  



            //공통
            //페이지 버튼 클릭 이벤트
            //클릭시 해당 페이지 목록만 10개 출력
            //추가된 버튼이 클릭이벤트가 안될 때
            //이렇게 코딩 그러면 클릭이벤트 잘 됩니다.
            $(document).on('mouseenter','.pageBtn', function(){
                
                $('.pageBtn').each(function(index){

                    $(this).on({
                        click:  function(){
                           
    
                           // pageBtn = parseInt( $(this).text() ); //숫자로 페이지번호 저장
                            pageBtn = Number( $(this).text() ); //숫자로 페이지번호 저장
                            
                            if( tab==0 ){
                                allBindFn(); //전체공지
                            }
                            else if( tab==1 ){
                                sBindFn();  //쇼핑공지
                            }
                            else if( tab==2 ){
                                bBindFn(); //브랜드소식
                            }
    
                            pageBtnEventFn(index);
    
    
                        }
                    }); //버튼 클릭
                });
            });

            function pageBtnEventFn(z){
                $('.pageBtn').eq(z).addClass('addCurrent');
            }
            


            //이전페이지 버튼 >>
            $('.pagePrevBtn').on({
                click:  function(){
                    pageBtn--;
                    if(pageBtn<1){
                        pageBtn=1;
                    }
                    var num = (pageBtn-1)%10;
                    //0 1 2 ... 9
                    pageBtnEventFn(num);

                    if( tab==0 ){
                        allBindFn(); //전체공지
                    }
                    else if( tab==1 ){
                        sBindFn();  //쇼핑공지
                    }
                    else if( tab==2 ){
                        bBindFn(); //브랜드소식
                    }


                }
            });

            //다음페이지 버튼 >>
            $('.pageNextBtn').on({
                click:  function(){
                    pageBtn++; //1 2 3 ..9 10 11. 29
                    var num = (pageBtn-1)%10;
                    //0 1 2 ... 9
                    pageBtnEventFn(num);

                    if( tab==0 ){
                        if(pageBtn>acnt/pages){ //20=200/10
                            pageBtn=Math.ceil(acnt/pages); 
                        } 
                        allBindFn(); //전체공지
                    }
                    else if( tab==1 ){
                        if(pageBtn>scnt/pages){ //15=150/10
                            pageBtn=Math.ceil(scnt/pages); 
                        }                         
                        sBindFn();  //쇼핑공지
                    }
                    else if( tab==2 ){
                        if(pageBtn>bcnt/pages){ //5=50/10
                            pageBtn=Math.ceil(bcnt/pages); 
                        }     
                        bBindFn(); //브랜드소식
                    }
                }
            });


            //탭버튼 
            //테마별 버튼 클릭 이벤트
            //전체공지, 쇼핑공지, 브랜드소식
            // $('.noticeBtn').eq(0).on({ //전체공지
            //     click:  function(){
            //         alert('전체공지');
            //     }
            // });

            // $('.noticeBtn').eq(1).on({ //쇼핑공지
            //     click:  function(){
            //         alert('쇼핑공지');
            //     }
            // });

            // $('.noticeBtn').eq(2).on({ //브랜드소식
            //     click:  function(){
            //         alert('브랜드소식');
            //     }
            // });

            //버튼 배열처리 each() 메서드
            //$('.noticeBtn').each();
            //$('.noticeBtn').each(function(){});
            // $('.noticeBtn').each(function(){
                
            // });

            //이치메서드는 배열 인덱스 값을 가져온다. 
            //버튼의 갯수만큼
            // $('.noticeBtn').each(function(index){
            //     console.log( index ); //0 1 2
            // });
            
            // $('.noticeBtn').each(function(idx){//idx:0,idx:1,idx:2
            //     $(this).on({
            //         click:  function(){
            //             console.log(idx); //클릭시 인덱스 번호 가져오기
            //         }
            //     });
            // });


            //탭버튼
            //전체공지, 쇼핑공지, 브랜드소식
            $('.noticeBtn').each(function(idx){
                $(this).on({
                    click: function(){
                        pageBtn = 1; //초기화 각탭버튼의 모두 첫번째위가 시작점
                        tab=idx; //0 1 2 클릭한 버튼의 표시

                        if( idx==0 ){ //전체공지
                            allBindFn();
                        }
                        else if( idx==1 ){ //쇼핑공지
                            sBindFn(); 
                        }
                        else if( idx==2 ){ //브랜드소식
                            bBindFn();
                        }

                        $('.pageBtn').eq(0).addClass('addCurrent');

                        $('.noticeBtn').removeClass('addTab');//모두 추가 클래스 삭제
                        $(this).addClass('addTab'); //추가 클래스 클릭버튼에 표시(마킹)

                    }
                });
            });
        },
        error: function(){
            alert('AJAX Error!!!');
        }
    });




})(jQuery);
//ajax_face_notice.js
// localhost/ajax_notice12/
// 127.0.0.1/ajax_notice12/