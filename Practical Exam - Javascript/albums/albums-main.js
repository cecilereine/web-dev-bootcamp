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
                    <a href="#" onclick="goToAlbum(${album.id},'${album.title}')">Show Album Photos</a>
                    `;
                $('#albums').append(textToAppend);
            }
        });
    });
});

function goToAlbum(albumid, albumtitle){
    localStorage.setItem("albumid", albumid);
    localStorage.setItem("albumTitle", albumtitle);
    window.location.href = "../photos/photos.html";

}