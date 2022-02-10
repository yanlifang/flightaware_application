var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();

var url = "https://reqbin.com/echo/post/json";

xhr.open("POST", url);

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function(){

    if (xhr.readyState == 4)
    {
        console.log(xhr.responseText);
    }
};

var data = `{
    "name": Lifang Yan,
    "email": lifang.yan@gatech.edu
}`;

xhr.send(data);