document.getElementById("dv").style.height=window.innerHeight/2+"px";
window.onresize=function() {
    document.getElementById("dv").style.height=window.innerHeight/2+"px";
    }
var chatHistory = document.getElementById("box");
var tex = document.getElementById('msg');
var pre_ms = "Anonymous";

var ws = new WebSocket("ws://[2409:4065:e12:3c32:5061:fb80:d50c:f4c8]:5678/"),
                messages = document.createElement('ul');
            ws.onmessage = function (event) {
                var messages = document.getElementsByTagName('ul')[0],
                    message = document.createElement('li'),
                    content = document.createTextNode(event.data);
                message.appendChild(content);
                messages.appendChild(message);
                //ws.send('hi');
                chatHistory.scrollTop = chatHistory.scrollHeight;
            };
            document.getElementById("box").appendChild(messages);
function clk() { 
    if(tex.value!=""|1){
        ws.send(pre_ms+": "+tex.value);
        tex.value="";
    }
}
tex.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        clk();
    }
});
function scrol(){
    //console.log('Hi from sc');
    chatHistory.scrollTop = chatHistory.scrollHeight;
}
function reg(){
    pre_ms=document.getElementById('userid').value;
    alert("Your name is set to "+pre_ms+". Enjoy chating");
}
