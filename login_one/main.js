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
        window.location.href = 'login.html';
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

    function login(){
        id_value = document.getElementById("id").value
        pw_value = document.getElementById("password").value
        if ( id_value == "" && pw_value == "" ) {
            //id랑 pw둘다 없을때
            $('#id').attr('aria-invalid',true);
            $('#password').attr('aria-invalid',true);
            helper_display('1', 'block', 'ID가 비어있습니다.');
            helper_display('2', 'block', '비밀번호가 비어있습니다.');
            dialog(true, 'ID와 비밀번호가 비어있습니다.', 'rgb(252, 103, 103', '로그인 실패', '닫기');
            console.warn("로그인 실패 : ID와 비밀번호가 비어있습니다.");
        } else {
            if ( id_value == "" ) {
                //id만 없을때
                $('#id').attr('aria-invalid',true);
                $('#password').attr('aria-invalid',null);
                helper_display('1', 'block', 'ID가 비어있습니다.');
                helper_display('2', 'none', null);
                dialog(true, 'ID가 비어있습니다.', 'rgb(252, 103, 103', '로그인 실패','닫기');
                console.warn("로그인 실패 : ID가 비어있습니다.") ;
            } else {
                if ( pw_value == "" ) {
                    //password만 없을때
                    $('#id').attr('aria-invalid',null);
                    $('#password').attr('aria-invalid',true);
                    helper_display('1', 'none', null);
                    helper_display('2', 'block', '비밀번호가 비어있습니다.');
                    dialog(true, '비밀번호가 비어있습니다.', 'rgb(252, 103, 103', '로그인 실패','닫기'); 
                    console.warn("로그인 실패 : 비밀번호가 비어있습니다.");
                } else {
                    if ( id_value == localStorage.getItem('id') && pw_value == localStorage.getItem('password') ) {
                        // id && pw가 맞음
                        localStorage.setItem('isLoggedIn', 'true');
                        console.log('로그인 상태 : '+ localStorage.getItem('isLoggedIn') )
                        dialog(true, '로그인 완료.', 'rgb(143, 154, 255', '좋은 소식!', '완료');      
                    } else {
                        // id || pw가 틀림
                        $('#id').attr('aria-invalid',true)
                        $('#password').attr('aria-invalid',true)
                        helper_display('1','block','ID가 존재하지 않거나 비밀번호가 틀렸습니다.');
                        helper_display('2','block','ID가 존재하지 않거나 비밀번호가 틀렸습니다.');
                        dialog(true, 'ID가 존재하지 않거나 비밀번호가 틀렸습니다.', 'rgb(252, 103, 103', '로그인 실패', '닫기');
                        console.warn("로그인 실패 : ID가 존재하지 않거나 비밀번호가 틀렸습니다.")
                    }
                }
            }
        }
    }

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
        helper = '#helper' + which
        $(helper).css('display',statue);
        $(helper).html(message);
        console.log('현재 helper의 상태 > 몇번 helper : ' + which + ' , 표시 : ' + statue + ' , text : ' + message);
    }

    //로그인 되있으면 UI 표시

    function loginck() {
        if (localStorage.getItem('isLoggedIn') == 'true') {
            document.getElementById('logined').style.display = 'block';
            document.getElementById('usewithoutlogin').style.display = 'none';
        }
    }


    //기본 ID와 PW를 Admin으로 바꿈
    document.addEventListener('DOMContentLoaded', function(){
        if ( localStorage.getItem('id') == null ) {
            localStorage.setItem('id','Admin');
            localStorage.setItem('password','Admin');
        }
    });
    

    //회원가입

    function signup() {
        console.log('회원가입 시작....');
        signup_fail = false;
        if ( document.getElementById('first_name').value == '' ) {
            helper_display('1','block','성을 입력하세요.');
            $('#first_name').attr('aria-invalid',true);
            signup_fail = true;
            console.warn('회원가입 실패 : 성이 비어있음');
        } else {
            helper_display('1','none');
            $('#first_name').attr('aria-invalid',false);
        }
        if ( document.getElementById('last_name').value == '' ) {
            helper_display('2','block','이름을 입력하세요.');
            $('#last_name').attr('aria-invalid',true);
            signup_fail = true;
            console.warn('회원가입 실패 : 이름이 비어있음');
        } else {
            helper_display('2','none');
            $('#last_name').attr('aria-invalid',false);
        }
        if ( document.getElementById('born_date').value == '' ) {
            helper_display('3','block','생년월일을 입력하세요.');
            $('#born_date').attr('aria-invalid',true);
            signup_fail = true;;
            console.warn('회원가입 실패 : 생년월일이 비어있음');
        } else {
            helper_display('3','none');
            $('#born_date').attr('aria-invalid',false);
        }
        if ( document.getElementById('gender').value == '' ) {
            helper_display('4','block','성별을 선택하세요.');
            $('#gender').attr('aria-invalid',true);
            signup_fail = true;
            console.warn('회원가입 실패 : 성별이 비어있음');
        } else {
            helper_display('4','none');
            $('#gender').attr('aria-invalid',false);
        }
        if ( document.getElementById('id').value == '' ) {
            helper_display('5','block','ID을 입력하세요.');
            $('#id').attr('aria-invalid',true);
            signup_fail = true;
            console.warn('회원가입 실패 : Id가 비어있음');
        } else {
            helper_display('5','none');
            $('#id').attr('aria-invalid',false);
        }
        if ( document.getElementById('email').value == '' ) {
            helper_display('6','block','이메일을 입력하세요.');
            $('#email').attr('aria-invalid',true);
            signup_fail = true;
            console.warn('회원가입 실패 : 이메일이 비어있음');
        } else {
            helper_display('6','none');
            $('#email').attr('aria-invalid',false);
        }
        if ( document.getElementById('password').value != document.getElementById('password_rewrite').value ) {
            helper_display('7','block','비밀번호가 일치하지 않습니다.');
            helper_display('8','block','비밀번호가 일치하지 않습니다.');
            $('#password').attr('aria-invalid',true);
            $('#password_rewrite').attr('aria-invalid',true);
            signup_fail = true;
            console.warn('회원가입 실패 : 성이 비어있음');
        } else {
            if ( document.getElementById('password').value == '' ) {
                helper_display('7','block','비밀번호를 입력하세요.');
                helper_display('8','block','비밀번호를 입력하세요.');
                $('#password').attr('aria-invalid',true);
                $('#password_rewrite').attr('aria-invalid',true);
                signup_fail = true;
                console.warn('회원가입 실패 : Id가 비어있음');
            } else {
                helper_display('7','none');
                helper_display('8','none');
                $('#password').attr('aria-invalid',false);
                $('#password_rewrite').attr('aria-invalid',false);
            }
        }
        if ( signup_fail == false ) {
            localStorage.setItem('first_name', document.getElementById('first_name').value);
            localStorage.setItem('last_name', document.getElementById('last_name').value);
            localStorage.setItem('born_date', document.getElementById('born_date').value);
            localStorage.setItem('gender', document.getElementById('gender').value);
            localStorage.setItem('id', document.getElementById('id').value);
            localStorage.setItem('password', document.getElementById('password').value);
            localStorage.setItem('isLoggedIn', 'true');
            dialog(true, '회원가입 완료.', 'rgb(143, 154, 255', '좋은 소식!', '완료');
            window.location.href = 'main_page.html';
        }
    };



                