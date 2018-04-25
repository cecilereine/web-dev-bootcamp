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
            if(post.userId == userid){            
                let textToAppend =
                    `<h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <a href="#" onclick="showComments(${post.id})">COMMENTS</a>
                    <ul class="comments" id="post${post.id}_comments"></ul>
                    <hr>
                    `;
                $('#posts').append(textToAppend);
            }
        });
    });
});

function showComments(postid){
   event.preventDefault();
    console.log('show comments clicked');
    
    $.ajax({
        method: 'GET',
        url: 'http://jsonplaceholder.typicode.com/comments',
        dataType: 'json'
    }).done(function(data) {    
        console.log('got json')
        $('ul#post'+postid+'_comments').empty();   
        $.map(data, function(comment, i){
            
            if(postid == comment.postId){
                let textToAppend = 
                    `<li>
                        <h4>Name: ${comment.name}</h4>
                        <h5>Email: ${comment.email}</h5>
                        <p>${comment.body}</p>
                    </li>
                    `;

                
                $('ul#post'+postid+'_comments').append(textToAppend);
            }
        });
    });

}