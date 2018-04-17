function doClick() {
	alert('i was clicked');
}

function changeText(id) {
	id.innerHTML = 'You Clicked!';
	var heading = document.getElementById('heading');
	heading.innerHTML = 'You Clicked!';
}

function showDate(){
	var time = document.getElementById('time');
	time.innerHTML = Date();

}