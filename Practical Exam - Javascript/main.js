$(document).ready(function(){ 
    let userid = "";
    // load all users 
    $.ajax({
        method: 'GET',
        url: 'http://jsonplaceholder.typicode.com/users',
        dataType: 'json'
    }).done(function(data){
       
        $.map(data, function(user, i){
            let textToAppend =  
                `<li>
                    <h4>Name: ${user.name}</h4>
                    <p>Username: ${user.username}</p>
                    <a href="#" onclick="setUserid(${user.id})" id="postUser${user.id}">POSTS</a>
                </li><br>`;
               
            $('ul#userlist').append(textToAppend);                  
        });
    });
});

function setUserid(userid){
     localStorage.setItem("userid", userid);
     window.location.href = "posts/posts.html";
}