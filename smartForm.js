// Your jQuery goes here
var userData = {
	name: '',
	email: '',
	html: {
		likes: [],
		dislikes: []
	},
	css: {
		likes: [],
		dislikes: []
	},
	js: {
		likes: [],
		dislikes: []
	},
	strength: {
		css: '',
		js: '',
		html: ''
	},
	currentQuestion: '#welcome'
};

console.log(localStorage.getItem('userData'));

if(localStorage.getItem('userData')) {
	userData = JSON.parse(localStorage.getItem('userData'));
	$(userData.currentQuestion).show();
	$("#welcome").hide();
	$("#name").val(userData.name);
	$("#email").val(userData.email);
	$("#html").val(userData.html);
	$("#css").val(userData.css);
	$("#js").val(userData.js);
	$("#strength").val(userData.strength);
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

		var nameFlag = false;
		var emailFlag = false;
		var namePattern = /^[a-zA-Z ]{1,50}$/;
		var emailPattern = /^[a-zA-Z0-9]+([\_.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\_.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]{2,4})+$/;

		if($('#name').val().match(namePattern)) {
			nameFlag = true;
		}
		if($('#email').val().match(emailPattern)) {
			emailFlag = true;
		}
		if(nameFlag && emailFlag) {
			userData.name = $('#name').val();
			userData.email = $('#email').val();
			localStorage.setItem('userData', JSON.stringify(userData));
			$('#q2').show();
			$('#q1').hide();
		} else if(!nameFlag) {
			alert('Enter a valid name');
		} else if(!emailFlag) {
			alert('Enter a valid email');
		}
	} else {
		alert('Please enter name and email');
	}
});

$('#htmlopen').click(function() {
	$('#q2a').show();
	$('#q2').hide();
	userData.currentQuestion = "#q2a";
	localStorage.setItem('userData', JSON.stringify(userData));
});

$('#cssopen').click(function() {
	$('#q2b').show();
	$('#q2').hide();
	userData.currentQuestion = "#q2b";
	localStorage.setItem('userData', JSON.stringify(userData));
});

$('#jsopen').click(function() {
	$('#q2c').show();
	$('#q2').hide();
	userData.currentQuestion = "#q2c";
	localStorage.setItem('userData', JSON.stringify(userData));
});

$('#html_prev').click(function() {
	$('#q2').show();
	$('#q2a').hide();
	userData.currentQuestion = "#q2";
	localStorage.setItem('userData', JSON.stringify(userData));
});

$('#html_next').click(function() {
	var likeFlag = false;
	var dislikeFlag = false;
	var likeValue = document.getElementsByName('likesHTML');
	var dislikeValue = document.getElementsByName('dislikesHTML');
	
	for(var i = 0; i < likeValue.length; i++) {
		if (likeValue[i].checked) {
			userData.html.likes.push(likeValue[i].value);
			localStorage.setItem('userData', JSON.stringify(userData));
	    	likeFlag = true;
		}
	}
	for(var i = 0; i < dislikeValue.length; i++) {
		if (dislikeValue[i].checked) {
			userData.html.dislikes.push(dislikeValue[i].value);
			localStorage.setItem('userData', JSON.stringify(userData));
	    	dislikeFlag = true;
		}
	}
	if (likeFlag && dislikeFlag) {
		if (userData.css.likes.length == 0) {
	    	$('#q2a').hide();
	    	$('#q2b').show();
	    	userData.currentQuestion = "#q2b";
	    	localStorage.setItem('userData', JSON.stringify(userData));
	    } else if (userData.js.likes.length == 0) {
	    	$('#q2a').hide();
	    	$('#q2c').show();
	    	userData.currentQuestion = "#q2c";
	    	localStorage.setItem('userData', JSON.stringify(userData));
	    } else {
	    	$('#q2a').hide();
	    	$('#q3').show();
	    	userData.currentQuestion = "#q3";
	    	localStorage.setItem('userData', JSON.stringify(userData));
	    }
	} else {
		alert('Please select at least 1 checkbox from likes and dislikes!');
	}
});

$('#css_prev').click(function() {
	$('#q2').show();
	$('#q2b').hide();
	userData.currentQuestion = "#q2";
	localStorage.setItem('userData', JSON.stringify(userData));
});

$('#css_next').click(function() {
	var likeFlag = false;
	var dislikeFlag = false;
	var likeValue = document.getElementsByName('likesCSS');
	var dislikeValue = document.getElementsByName('dislikesCSS');

	for (var i = 0; i < likeValue.length; i++) {
		if(likeValue[i].checked) {
			userData.css.likes.push(likeValue[i].value);
			localStorage.setItem('userData', JSON.stringify(userData));
			likeFlag = true;
		}
	}
	for(var i = 0; i < dislikeValue.length; i++) {
		if(dislikeValue[i].checked) {
			userData.css.dislikes.push(dislikeValue[i].value);
			localStorage.setItem('userData', JSON.stringify(userData));
			dislikeFlag = true;
		}
	}

	if(likeFlag && dislikeFlag) {
		if(userData.html.likes.length == 0) {
			$('#q2a').show();
			$('#q2b').hide();
			userData.currentQuestion = "#q2a";
			localStorage.setItem('userData', JSON.stringify(userData));
		} else if(userData.js.likes.length == 0) {
			$('#q2c').show();
			$('#q2b').hide();
			userData.currentQuestion = "#q2c";
			localStorage.setItem('userData', JSON.stringify(userData));
		} else {
			$('#q3').show();
			$('#q2b').hide();
			userData.currentQuestion = "#q3";
			localStorage.setItem('userData', JSON.stringify(userData));
		}
	} else {
		alert("Please select at least 1 checkbox from likes and dislikes!");
	}


	$('#q2c').show();
	$('#q2b').hide();
});

$('#js_prev').click(function() {
	$('#q2').show();
	$('#q2c').hide();
	userData.currentQuestion = "#q2";
	localStorage.setItem('userData', JSON.stringify(userData));
});

$('#js_next').click(function() {
	var likeFlag = false;
	var dislikeFlag = false;

	var likeValue = document.getElementsByName("likesJS");
	var dislikeValue = document.getElementsByName("dislikesJS");

	for(var i = 0; i < likeValue.length; i++) {
		if(likeValue[i].checked) {
			userData.js.likes.push(likeValue[i].value);
			localStorage.setItem('userData', JSON.stringify(userData));
			likeFlag = true;
		}
	}
	for(var i = 0; i < dislikeValue.length; i++) {
		if (dislikeValue[i].checked) {
			userData.js.dislikes.push(dislikeValue[i].value);
			localStorage.setItem('userData', JSON.stringify(userData));
			dislikeFlag = true;
		}
	}
	if (likeFlag && dislikeFlag) {
		if (userData.html.likes.length == 0) {
			$('#q2a').show();
			$('#q2c').hide();
			userData.currentQuestion = "#q2a";
			localStorage.setItem('userData', JSON.stringify(userData));
		} else if (userData.css.likes.length == 0) {
			$('#q2b').show();
			$('#q2c').hide();
			userData.currentQuestion = "#q2b";
			localStorage.setItem('userData', JSON.stringify(userData));
		} else {
			$('#q3').show();
			$('#q2c').hide();
			userData.currentQuestion = "#q3";
			localStorage.setItem('userData', JSON.stringify(userData));
		}
	} else {
		alert('Please select at least 1 checkbox from likes and dislikes!');
	}
});


$('#q3_prev').click(function() {
	$('#q2').show();
	$('#q3').hide();
	userData.currentQuestion = "#q2";
	localStorage.setItem('userData', JSON.stringify(userData));
});

$('#q3_next').click(function() {
	var htmlFlag = false;
	var cssFlag = false;
	var jsFlag = false;

	var lenHTML = document.getElementsByName('strengthHTML');
	var lenCSS = document.getElementsByName('strengthCSS');
	var lenJS = document.getElementsByName('strengthJS');

	for (var i = 0; i < lenHTML.length; i++) {
	    if (lenHTML[i].checked) {
			userData.strength.html = lenHTML[i].value;
			localStorage.setItem('userData', JSON.stringify(userData));
			htmlFlag = true;
			break;
	    }
	}
	for (var i = 0; i < lenCSS.length; i++) {
		if (lenCSS[i].checked) {
			userData.strength.css = lenCSS[i].value;
			localStorage.setItem('userData', JSON.stringify(userData));
			cssFlag = true;
			break;
		}
	}
	for (var i = 0; i < lenJS.length; i++) {
		if (lenJS[i].checked) {
			userData.strength.js = lenJS[i].value;
			localStorage.setItem('userData', JSON.stringify(userData));
			jsFlag = true;
			break;
		}
	}
	if (htmlFlag && cssFlag && jsFlag) {
		$('#q3').hide();
		$('#thanks').show();
		userData.currentQuestion = "#thanks";
		localStorage.setItem('userData', JSON.stringify(userData));
	} else {
		alert("Please select strenths from all fields!");
	}
});

// const list = "";

$('#view_answers').click(function() {
	userData = JSON.parse(localStorage.getItem('userData'));
	$('#answers').show();
	document.getElementsByTagName('h2').innerHTML = "<h2>Your Answers</h2>";
	// NAME AND EMAIL
	document.getElementById('showUserName').innerHTML = "<p><b>Your name: </b>" + userData.name + "</p>";
	document.getElementById('showUserEmail').innerHTML = "<p><b>Your email: </b>" + userData.email + "</p>";
	// HTML LIKES
	document.getElementById('htmlLikesHeading').innerHTML = "<p>What do you <b>like</b> about HTML?</p>";
	for (var i = 0; i < userData.html.likes.length; i++) {
		var dataList = "<li class='list-group-item'>" + userData.html.likes[i] + "</li>";
		document.getElementById("htmlLikes").innerHTML += dataList;
	}
	// HTML DISLIKES
	document.getElementById('htmlDislikesHeading').innerHTML = "<p>What do you <b>dislike</b> about HTML?</p>";
	for (var i = 0; i < userData.html.dislikes.length; i++) {
		var dataList = "<li class='list-group-item'>" + userData.html.dislikes[i] + "</li>";
		document.getElementById("htmlDislikes").innerHTML += dataList;
	}
	// CSS LIKES
	document.getElementById('cssLikesHeading').innerHTML = "<p>What do you <b>like</b> about CSS?</p>";
	for (var i = 0; i < userData.css.likes.length; i++) {
		var dataList = "<li class='list-group-item'>" + userData.css.likes[i] + "</li>";
		document.getElementById("cssLikes").innerHTML += dataList;
	}
	// CSS DISLIKES
	document.getElementById('cssDislikesHeading').innerHTML = "<p>What do you <b>dislike</b> about CSS?</p>";
	for (var i = 0; i < userData.css.dislikes.length; i++) {
		var dataList = "<li class='list-group-item'>" + userData.css.dislikes[i] + "</li>";
		document.getElementById("cssDislikes").innerHTML += dataList;
	}
	// JS LIKES
	document.getElementById('jsLikesHeading').innerHTML = "<p>What do you <b>like</b> about JavaScript?</p>";
	for (var i = 0; i < userData.js.likes.length; i++) {
		var dataList = "<li class='list-group-item'>" + userData.js.likes[i] + "</li>";
		document.getElementById("jsLikes").innerHTML += dataList;
	}
	// JS DISLIKES
	document.getElementById('jsDislikesHeading').innerHTML = "<p>What do you <b>dislike</b> about JavaScript?</p>";
	for (var i = 0; i < userData.js.dislikes.length; i++) {
		var dataList = "<li class='list-group-item'>" + userData.js.dislikes[i] + "</li>";
		document.getElementById("jsDislikes").innerHTML += dataList;
	}
	// STRENGTH
	document.getElementById('strengthHeading').innerHTML = "<p><b>Strength</b></p>"
	document.getElementById('htmlStrength').innerHTML = "<p><b>HTML</b>: " + userData.strength.html + "</p>";
	document.getElementById('cssStrength').innerHTML = "<p><b>CSS</b>: " + userData.strength.css + "</p>";
	document.getElementById('jsStrength').innerHTML = "<p><b>JavaScript</b>: " + userData.strength.js + "</p>";
});

$('#del_answers').click(function() {
	$('#welcome').show();
	$('#thanks').hide();
	localStorage.removeItem('userData');
	alert('All your records has deleted!');
	location.reload(true);
});