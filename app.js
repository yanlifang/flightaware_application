//use this for test
var url = "https://reqbin.com/echo/post/json"

var XMLHttpRequest = require('xhr2')
var xhr = new XMLHttpRequest();
xhr.open("POST", url);

//title = "Mobile (iOS) Internship (Summer 2022)"
//token = window.btoa(title)

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {TW9iaWxlIChpT1MpIEludGVybnNoaXAgKFN1bW1lciAyMDIyKQ==}");
xhr.setRequestHeader("Content-Type", "application");


xhr.onreadystatechange = function(){

    if (xhr.readyState == 4)
    {
        console.log(xhr.responseText);
    }
};

var data = `{
    "name": "Lifang Yan",
    "email": "lifang.yan@gatech.edu"
}`


xhr.send(data);



//var url = "https://flightaware.com/about/careers/position/4B.428/apply";