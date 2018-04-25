$(document).ready(function(){
    let userid = localStorage.getItem("userid");
    console.log(userid);
    // load posts of user
    $.ajax({
        method: 'GET',
        url: 'http://jsonplaceholder.typicode.com/posts',
        dataType: 'json'
    }).done(function(data) {       
        //console.log(data);
        $.map(data, function(post, i){
            console.log(post.userId + " " + userid + (post.userid == userid));
            if(post.userId == userid){            
                let textToAppend =
                    `<h3>${post.title}</h3>
                    <p>${post.body}</p>
                    `;
                $('#posts').append(textToAppend);
            }
        });
    });

});