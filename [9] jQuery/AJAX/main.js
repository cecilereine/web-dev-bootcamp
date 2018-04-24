$(document).ready(function(){ 
    /*
   $('#result') .load('test.html', function(responseTxt, statusTxt, xhr){
       if(statusTxt == "success"){
           alert('It went fine');
       }
       else if(statusTxt == "error") {
           alert('Error ' + xhr.statusText);
       }
   });*/

   /*
   $.get('test.html', function(data){
       $('#result').html(data);
   });*/

   /*
   $.getJSON('users.json', function(data){
       $.each(data, function(i, user){
           $('ul#users').append('<li>' + user.firstName + '</li>');
       });
   });*/

   /*
   $.ajax({
        method: 'GET',
        url: 'http://jsonplaceholder.typicode.com/posts',
        dataType: 'json'
   }).done(function(data){
       console.log(data);
       $.map(data, function(post, i){
           $('#result').append('<h3>' + post.title + '</h3>' +
            '<p>'+post.body+'</p>');
       });
   });*/

   $('#postForm').submit(function(e){
       e.preventDefault();

       var title = $('#title').val();
       var body = $('#body').val();
       var url = $(this).attr('action');

       $.post(url, {title:title, body:body}).
        done(function(data){
            console.log('Post Saved');
            console.log(data);
        });
   });
});