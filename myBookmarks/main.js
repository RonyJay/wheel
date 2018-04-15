
var keys = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
]
var website_hash = {
    'q': 'qq.com'
}
//取localstorage里面的website_hash
var website_hash_LocalStorage=JSON.parse(localStorage.getItem("mydic") || 'null')
if(website_hash_LocalStorage){
    website_hash=website_hash_LocalStorage
}


for (i = 0; i < keys.length; i++) {
    var key = document.createElement('div')
    key.className = 'row'
    var divkbd = document.getElementById("main").appendChild(key)
    for (j = 0; j < keys[i].length; j++) {
        kbd = divkbd.appendChild(document.createElement('kbd'))
        kbd.className = 'key'
        kbd.id = keys[i][j]
        //创建span
        span = kbd.appendChild(document.createElement('span'))
        span.innerHTML = keys[i][j].toUpperCase()
        //创建button
        button=kbd.appendChild(document.createElement('button'))
        button.className="EditButton"
        button.innerHTML='Edit'
        button.id=keys[i][j]
        //点击edit
        button.onclick =function(clickEdit){
            var clicked_button=clickEdit['target']
            var key=clicked_button['id']
            var url=prompt("请输入新的网址")
            website_hash[key]=url
            //存入localStorage
            localStorage.setItem('mydic',JSON.stringify(website_hash))
        }
        
    }
}

//监听
document.onkeypress = function (listener) {
    console.log(listener)
    var keychar = listener.key
    var website = website_hash[keychar]
    window.open('http://' + website) 
}
