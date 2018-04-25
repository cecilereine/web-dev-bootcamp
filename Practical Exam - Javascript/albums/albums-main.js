$(document).ready(function(){ 
    let userid = localStorage.getItem("userid");
    $.ajax({
        method: 'GET',
        url: 'http://jsonplaceholder.typicode.com/albums',
        dataType: 'json'
    }).done(function(data) {       
        //console.log(data);
        $.map(data, function(album, i){
            if(album.userId == userid){            
                let textToAppend =
                    `<h3>${album.title}</h3>
                    <a href="#" onclick="goToAlbum(${album.id})">Show Album Photos</a>
                    `;
                $('#albums').append(textToAppend);
            }
        });
    });
});

function goToAlbum(albumid){
    localStorage.setItem("albumid", albumid);
    window.location.href = "../photos/photos.html";

}