form.addEventListener("submit", function(e){
    try{
        e.preventDefault();

        var fname = form.elements["fname"].value;
        var lname = form.elements["lname"].value;
        var email = form.elements["email"].value;

         // 에러를 저장할 변수
        var errors = [];

            // 이름 검사
            if(!fname.trim()){
                errors.push("이름을 입력하세요");
            }

            // 성 검사
            if(!lname.trim()){
                errors.push("성을 입력하세요")
            }
            // 이메일 검사
            if(!email.trim()){
                errors.push("이메일을 입력하세요")
            }
        
        // 에러가 존재할 경우
        if(errors){
            throw errors;
        }

        //  통과된 경우 폼을 숨기고 떙큐메시지를 보여준다
        form.classList.add("hidden");
        done.classList.remove("hidden");

    }catch(errors){
        console.error(errors);

        if(!fname.trim()){
            error1.innerHTML = errors[0];
        }
        if(!lname.trim()){
            error2.innerHTML = errors[1];
        }
        if(!email.trim()){
            error3.innerHTML = errors[2];
        }
    }
})



// 사이드바

// 오픈 버튼 클릭
var menu = document.getElementById("menu");
var sideBar = document.getElementById("sideBar");
var overlay1 = document.getElementsByClassName("overlay1");
var close = document.getElementById("close");

menu.addEventListener("click", function(){
    sideBar.classList.remove("hidden");
    overlay1.classList.remove("hidden");
})

// X를 클릭했을 때
close.addEventListener("click", function(){
    sideBar.classList.add("hidden");
    overlay1.classList.add("hidden");
})


