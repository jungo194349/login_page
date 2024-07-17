    // 로그인 상태를 확인하고 UI를 업데이트하는 함수

    function checkLoginStatus() {
        // const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        // document.getElementById('loginForm').classList.toggle('hidden', isLoggedIn);
        // document.getElementById('logoutForm').classList.toggle('hidden', !isLoggedIn);
        var isLoggedIn = localStorage.getItem('isLoggedIn')
        if (isLoggedIn == 'true') {
            $('#loginForm').css('display', 'none');
            $('#logoutForm').css('display', 'block');
        } else {
            $('#loginForm').css('display', 'block');
            $('#logoutForm').css('display', 'none');
        }
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


    // dialog 닫기 버튼

    document.getElementById("dialog_close_bt").addEventListener('click', function(){
        dialog(false);
         if (localStorage.getItem('isLoggedIn') == 'true') {
            window.location.href = 'main_page.html';
        }
    });

     // ID나 비밀번호가 비어있는지 확인

    document.getElementById('login_bt').addEventListener('click', function(){
        id_value = document.getElementById("id").value
        pw_value = document.getElementById("password").value
        if (id_value == "") {
             if (pw_value == ""){
                //id랑 pw둘다 없을때
                $('#id').attr('aria-invalid',true);
                $('#password').attr('aria-invalid',true);
                helper_display(1, 'block', 'ID가 비어있습니다.');
                helper_display(2, 'block', '비밀번호가 비어있습니다.');
                dialog(true, 'ID와 비밀번호가 비어있습니다.', 'rgb(252, 103, 103', '로그인 실패', '닫기');
                console.warn("로그인 실패 : ID와 비밀번호가 비어있습니다.");
             } else {
                //id만 없을때
                $('#id').attr('aria-invalid',true);
                $('#password').attr('aria-invalid',null);
                helper_display(1, 'block', 'ID가 비어있습니다.');
                helper_display(2, 'none', null);
                dialog(true, 'ID가 비어있습니다.', 'rgb(252, 103, 103', '로그인 실패','닫기');
                console.warn("로그인 실패 : ID가 비어있습니다.") ;
            }
        } else {
            if (pw_value == "") {
                //password만 없을때
                $('#id').attr('aria-invalid',null);
                $('#password').attr('aria-invalid',true);
                helper_display(1, 'none', null);
                helper_display(2, 'block', '비밀번호가 비어있습니다.');
                dialog(true, '비밀번호가 비어있습니다.', 'rgb(252, 103, 103', '로그인 실패','닫기');
                console.warn("로그인 실패 : 비밀번호가 비어있습니다.");
            } else {
                login();
            }
        }
    });

    // 로그인 없이 사용 버튼, main으로 이동
    document.getElementById('usewithoutlogin').addEventListener('click', function(){
        window.location.href = 'main_page.html';
    });

    // main으로 이동
    document.getElementById('movetomain').addEventListener('click',function(){
        window.location.href = 'main_page.html';
    })


    //dialog 표시

    function dialog(statue, message, button_color, title, button_text){
        $('#dialog').attr('open',statue);
        $('#dialog_message').html(message);
        $('#dialog_close_bt').css('background-color', button_color);
        $('#dialog_close_bt').html(button_text);
        $('#dialog_title').text(title);
        console.log("현재 dialog의 상태 > 표시 : " + statue + " , 메시지 텍스트 : " + message + " , 버튼 색상 : " + button_color + " , 표시 제목 : " + title + ' , 버튼 텍스트 : ' + button_text);
    }

    // helper 표시

    function helper_display(which, statue, message){
        if (which == 1) {
            helper = '#helper1'
        } else {
            helper = '#helper2'
        }
        $(helper).css('display',statue);
        $(helper).html(message);
        console.log('현재 helper의 상태 > 몇번 helper : ' + which + ' , 표시 : ' + statue + ' , text : ' + message);
    }

    //로그인시 ID와 비밀번호 확인

    function login() {
        id_value = document.getElementById("id").value
        pw_value = document.getElementById("password").value
        if (id_value == 'Admin' && pw_value == 'Admin') {
            // id && pw가 맞음
            localStorage.setItem('isLoggedIn', 'true');
            console.log('로그인 상태 : '+ localStorage.getItem('isLoggedIn') )
            dialog(true, '로그인 완료.', 'rgb(143, 154, 255', '좋은 소식!', '완료');
                 
        } else {
            // id || pw가 틀림
            $('#id').attr('aria-invalid',true)
            $('#password').attr('aria-invalid',true)
            helper_display(1,'block','ID가 존재하지 않거나 비밀번호가 틀렸습니다.');
            helper_display(2,'block','ID가 존재하지 않거나 비밀번호가 틀렸습니다.');
            dialog(true, 'ID가 존재하지 않거나 비밀번호가 틀렸습니다.', 'rgb(252, 103, 103', '로그인 실패', '닫기');
            console.warn("로그인 실패 : ID가 존재하지 않거나 비밀번호가 틀렸습니다.")
        }
    }

    //로그인 되있으면 UI 표시

    function loginck() {
        if (localStorage.getItem('isLoggedIn') == 'true') {
            document.getElementById('logined').style.display = 'block';
            document.getElementById('usewithoutlogin').style.display = 'none';
        }
    }

