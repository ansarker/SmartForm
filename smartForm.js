// Your jQuery goes here

var userData = {
	name: '',
	email: '',
	html: {likes: [], dislikes: []},
	css: {likes: [], dislikes: []},
	js: {likes:[], dislikes: []},
	strength: {css: '', js: '', html: ''},
	currentQuestion: '#welcome'
};

if(localStorage.getItem('userData')) {
	userData = JSON.parse(localStorage.getItem('userData'));
	$(userData.currentQuestion).show();
	$("#welcome").hide();
	$("#name").val(userData.name);
	$("#email").val(userData.email);
	
} else {
	localStorage.setItem('userData', JSON.stringify(userData));
}

$('#start').click(function() {
	console.log('start');
	$('#welcome').hide();
	$('#q1').show();
	userData.currentQuestion = "#q1";
	localStorage.setItem('userData', JSON.stringify(userData));
});

$('#name').change(function(event) {
	console.log(event);
});

$('#q1next').click(function() {
	if($('#name').val() && $('#email').val()) {
		userData.name = $('#name').val();
		userData.email = $('#email').val();

		localStorage.setItem('userData', JSON.stringify(userData));
		
		$('#q2').show();
		$('#q1').hide();

		console.log($('#name').val());
		console.log($('#email').val());
	} else {
		alert('Please enter name and email');
	}
});

$('#htmlopen').click(function() {
	$('#q2a').show();
});