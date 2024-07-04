       //for main_page.html
       
       // 로그인 상태를 확인하고 UI를 업데이트하는 함수
        function checkLoginStatus() {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            document.getElementById('loginForm').classList.toggle('hidden', isLoggedIn);
            document.getElementById('logoutForm').classList.toggle('hidden', !isLoggedIn);
        }


        // 로그인 버튼 함수
        function movetologin() {
            console.log('Move to login page...')
            window.location.href = 'main.html';
        }

        // 로그아웃 버튼 함수
        function logout() {
            console.log('Logout complete')
            localStorage.setItem('isLoggedIn', 'false');
            checkLoginStatus();
        }

        // 페이지 로드 시 로그인 상태 확인
        document.addEventListener('DOMContentLoaded', checkLoginStatus);

        //for main.html

                    
            // alert close button

            document.getElementById("close-btn").addEventListener('click', function(){
                alert1(false)
                if (localStorage.getItem('isLoggedIn') == 'true') {
                    window.location.href = 'main_page.html';
                }
            });

            // if pw or id not empty

            document.getElementById('login_bt').addEventListener('click', function(){
                id_value = document.getElementById("id").value
                pw_value = document.getElementById("password").value
                if (id_value == "") {
                    if (pw_value == ""){
                    //id랑 p둘다 없을때
                    $('#id').attr('aria-invalid',true);
                    $('#password').attr('aria-invalid',true);
                    helper_display(1, 'block', 'ID가 비어있습니다.');
                    helper_display(2, 'block', 'Password가 비어있습니다.');
                    alert1(true, 'ID와 Password가 비어있습니다.', 'rgb(252, 103, 103', '로그인 실패', '닫기');
                    console.warn("Login failed : ID&Password Empty");
                    } else {
                    //id만 없을때
                    $('#id').attr('aria-invalid',true)
                    $('#password').attr('aria-invalid',null)
                    helper_display(1, 'block', 'ID가 비어있습니다.');
                    helper_display(2, 'none', null);
                    alert1(true, 'ID가 비어있습니다.', 'rgb(252, 103, 103', '로그인 실패','닫기');
                    console.warn("Login failed : ID Empty") 
                    }
                } else {
                    if (pw_value == "") {
                        //password만 없을때
                        $('#id').attr('aria-invalid',null)
                        $('#password').attr('aria-invalid',true)
                        helper_display(1, 'none', null);
                        helper_display(2, 'block', 'Password가 비어있습니다.');
                        alert1(true, 'Password가 비어있습니다.', 'rgb(252, 103, 103', '로그인 실패','닫기');
                        console.warn("Login failed : Password Empty")
                    } else {
                        login()
                    }
                }
            });

            // 로그인 없이 사용
            document.getElementById('usewithoutlogin').addEventListener('click', function(){
                window.location.href = 'main_page.html';
            })


            //alert1 display

            function alert1(statue, display, bgcolor, type, button_text){
                // document.getElementById('overlay').style.display = 'flex';
                $('#overlay').attr('open',statue)
                // $('#alert_box_1').css('display', statue);
                $('#alert_box_1_title').text(display);
                $('#close-btn').css('background-color', bgcolor);
                $('#close-btn').html(button_text)
                $('#alert_box_1_type').text(type);
                console.log("alert1 updated staute : " + statue + " , display : [" + display + "] , background color : " + bgcolor + ", type : " + type)
            }

            // helper display

            function helper_display(what,display,text){
                if (what == 1) {
                    helper = '#helper1'
                } else {
                    helper = '#helper2'
                }
                $(helper).css('display',display);
                $(helper).html(text);
            }

            //ck id and password

            function login() {
                id_value = document.getElementById("id").value
                pw_value = document.getElementById("password").value
                if (id_value == 'Admin' && pw_value == 'Admin') {
                    // id & pw가 맞음
                    localStorage.setItem('isLoggedIn', 'true');
                    console.log('now isLoggedIn is : '+ localStorage.getItem('isLoggedIn') )
                    alert1(true, '로그인 완료.', 'rgb(143, 154, 255', '좋은 소식!', '완료');
                    
                } else {
                    // id or pw가 틀림
                    $('#id').attr('aria-invalid',true)
                    $('#password').attr('aria-invalid',true)
                    helper_display(1,'block','ID가 존재하지 않거나 Password가 틀렸습니다.');
                    helper_display(2,'block','ID가 존재하지 않거나 Password가 틀렸습니다.');
                    alert1(true, 'ID가 존재하지 않거나 Password가 틀렸습니다.', 'rgb(252, 103, 103', '로그인 실패', '닫기');
                    console.warn("Login failed : ID or Password incorrect")
                }
            }

            //로그인 되있으면 안내문 표시
            function loginck() {
                if (localStorage.getItem('isLoggedIn') == 'true') {
                    // $('#logined').css('display','block')
                    document.getElementById('logined').style.display = 'block';
                    document.getElementById('usewithoutlogin').style.display = 'none';
                }
            }

            //페이지 로드시 loginck 실행
            document.addEventListener('DOMContentLoaded', loginck());


