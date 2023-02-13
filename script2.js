var form_1=document.querySelector(".form_1");
var form_2=document.querySelector(".form_2");
var form_3=document.querySelector(".form_3");
var form_4=document.querySelector(".form_4");

var form_1_btns=document.querySelector(".form_1_btns");
var form_2_btns=document.querySelector(".form_2_btns");
var form_3_btns=document.querySelector(".form_3_btns");
var form_4_btns=document.querySelector(".form_4_btns");

var form_1_next_btn=document.querySelector(".form_1_btns .btn_next");
var form_2_next_btn=document.querySelector(".form_2_btns .btn_next");
var form_3_next_btn=document.querySelector(".form_3_btns .btn_next");
var form_2_back_btn=document.querySelector(".form_2_btns .btn_back");
var form_3_back_btn=document.querySelector(".form_3_btns .btn_back");
var form_4_back_btn=document.querySelector(".form_4_btns .btn_back");

var form_2_progressbar=document.querySelector(".form_2_progressbar");
var form_3_progressbar=document.querySelector(".form_3_progressbar");
var form_4_progressbar=document.querySelector(".form_4_progressbar");

var btn_done=document.querySelector(".btn_done");
var modal_wrapper=document.querySelector(".modal_wrapper");
var shadow=document.querySelector(".shadow");

form_1_next_btn.addEventListener("click",function(){
    if(validateForm1()==false)
    {
        alert("Please fill all the fields !");
    }
    else{
        form_1.style.display = "none";
    form_2.style.display = "block";

    form_1_btns.style.display="none";
    form_2_btns.style.display="flex";

    form_2_progressbar.classList.add("active");
    }
    
});

form_2_next_btn.addEventListener("click",function(){
    if(validateForm2()==false)
    {
        alert("Please fill all the fields !");
    }
    else{
        form_2.style.display = "none";
    form_3.style.display = "block";

    form_2_btns.style.display="none";
    form_3_btns.style.display="flex";

    form_3_progressbar.classList.add("active");
    }
    
});

form_3_next_btn.addEventListener("click",function(){
    if(validateForm3()==false)
    {
        alert("Please fill all the fields !");
    }
    else{
        form_3.style.display = "none";
    form_4.style.display = "block";

    form_3_btns.style.display="none";
    form_4_btns.style.display="flex";

    form_4_progressbar.classList.add("active");
    }
});


form_2_back_btn.addEventListener("click",function(){
    form_2.style.display = "none";
    form_1.style.display = "block";

    form_2_btns.style.display="none";
    form_1_btns.style.display="flex";

    form_2_progressbar.classList.remove("active");
});

form_3_back_btn.addEventListener("click",function(){
    form_3.style.display = "none";
    form_2.style.display = "block";

    form_3_btns.style.display="none";
    form_2_btns.style.display="flex";

    form_3_progressbar.classList.remove("active");
});

form_4_back_btn.addEventListener("click",function(){
    form_4.style.display = "none";
    form_3.style.display = "block";

    form_4_btns.style.display="none";
    form_3_btns.style.display="flex";

    form_4_progressbar.classList.remove("active");
});

btn_done.addEventListener("click",function(){
    modal_wrapper.classList.add("active");
})

shadow.addEventListener("click",function(){
    modal_wrapper.classList.remove("active");
})

function validateForm1() {
    if(document.getElementById('name').value=="")
        return false;
    if(document.getElementById('dob').value=="")
        return false;
    if(document.getElementById('Gender').value=="")
        return false;
    if(document.getElementById('cno').value=="")
        return false;
    return true;
}
function validateForm2() {
    if(document.getElementById('permanent_addr').value=="")
        return false;
    if(document.getElementById('present_addr').value=="")
        return false;
    return true;
}
function validateForm3() {
    if(document.getElementById('class_x_board').value=="")
        return false;
    if(document.getElementById('class_x_percentage').value=="")
        return false;
    if(document.getElementById('class_xii_board').value=="")
        return false;
    if(document.getElementById('class_xii_percentage').value=="")
        return false;
    if(document.getElementById('uni_name').value=="")
        return false;
    if(document.getElementById('grad_perc').value=="")
        return false;
    return true;
}
function validateForm4() {
    if(document.getElementById('hobby').value=="")
        return false;
    if(document.getElementById('food').value=="")
        return false;
    if(document.getElementById('dress').value=="")
        return false;
    if(document.getElementById('"mother_tn').value=="")
        return false;
    return true;
}