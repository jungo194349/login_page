       //for main_page.html
       
       // 로그인 상태를 확인하고 UI를 업데이트하는 함수
        function checkLoginStatus() {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            document.getElementById('loginForm').classList.toggle('hidden', isLoggedIn);
            document.getElementById('logoutForm').classList.toggle('hidden', !isLoggedIn);
        }


        // 로그인 버튼 함수
        function login() {
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
                alert1('none')
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
                    alert1('flex', 'ID&Password Empty', 'rgb(252, 103, 103', 'Login failed');
                    console.warn("Login failed : ID&Password Empty")
                    } else {
                    //id만 없을때
                    alert1('flex', 'ID Empty', 'rgb(252, 103, 103', 'Login failed');
                    console.warn("Login failed : ID Empty") 
                    }
                } else {
                    if (pw_value == "") {
                        //password만 없을때
                        alert1('flex', 'Password Empty', 'rgb(252, 103, 103', 'Login failed');
                        console.warn("Login failed : Password Empty")
                    } else {
                        login()
                    }
                }
            });


            //alert1 display

            function alert1(statue, display, bgcolor, type){
                // document.getElementById('overlay').style.display = 'flex';
                $('#overlay').css('display',statue)
                // $('#alert_box_1').css('display', statue);
                $('#alert_box_1_title').text(display);
                $('#close-btn').css('background-color', bgcolor);
                $('#alert_box_1_type').text(type);
                console.log("alert1 updated staute : " + statue + " , display : [" + display + "] , background color : " + bgcolor + ", type : " + type)
            }

            //ck id and password

            function login() {
                id_value = document.getElementById("id").value
                pw_value = document.getElementById("password").value
                if (id_value == 'Admin' && pw_value == 'Admin') {
                    // id & pw가 맞음
                    localStorage.setItem('isLoggedIn', 'true');
                    console.log('now isLoggedIn is : '+ localStorage.getItem('isLoggedIn') )
                    alert1('flex', 'login complete', 'rgb(143, 154, 255', 'Good News!');
                    
                } else {
                    // id or pw가 틀림
                    alert1('flex', 'ID or Password incorrect', 'rgb(252, 103, 103', 'Login failed');
                    console.warn("Login failed : ID or Password incorrect")
                }
            }

            //로그인 되있으면 안내문 표시
            function loginck() {
                if (localStorage.getItem('isLoggedIn') == 'true') {
                    // $('#logined').css('display','block')
                    document.getElementById('logined').style.display = 'block'
                }
            }

            //페이지 로드시 loginck 실행
            document.addEventListener('DOMContentLoaded', loginck())


