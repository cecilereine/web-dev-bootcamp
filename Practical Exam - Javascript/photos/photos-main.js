$(document).ready(function(){ 
    let albumId = localStorage.getItem("albumid");
    let albumTitle = localStorage.getItem("albumTitle");
    $.ajax({
        method: 'GET',
        url: 'http://jsonplaceholder.typicode.com/photos',
        dataType: 'json'
    }).done(function(data) {       
        //console.log(data);
        $('h2#albumTitle').append(albumTitle);
        $.map(data, function(photos, i){
            if(photos.albumId == albumId){            
                let textToAppend =
                    `<h4>${photos.title}</h4> 
                    <img src="http://placehold.it/600/771796">
                    <br>                   
                    `;
                $('ul#albumPhotos').append(textToAppend);     
                          
            }
        });
    });
});