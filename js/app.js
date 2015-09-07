$(document).ready(function() {

$('#not-reply').on('click', function(event) {
	event.stopPropagation();

	$(this).css('height', '5em');
	$('#tweet-controls').slideDown(100);
});

$('.tweet-compose').on('click', function(event) {
	event.stopPropagation();

	$(this).css('height', '5em');
});

$('html').on('click', function() {
	$('.tweet-compose').css('height', '2.5em');
	$('#tweet-controls').slideUp(100);
});

$('#not-reply').on('keyup', function() {
	var numOfChars = $(this).val().length;
	$('#char-count').text(140 - numOfChars);
	var count = $('#char-count').text();

	if (count < 0) {
		$('#tweet-submit').attr('disabled', true);		
	} else if (count > 10) {
		$('#char-count').css('color', '#999');
	} else if (count <= 10) {
		$('#char-count').css('color', 'red');
	} else if (count > 0) {
		$('#char-count').attr('disabled', false);
	}

	if (count >= 0 && count !== 140) {
		$('#tweet-submit').attr('disabled', false);
	}

});

$('#tweet-submit').on('click', function(e) {
	e.preventDefault();


	var tweet = $('#not-reply').val();
	$('#not-reply').val('');
	var lotsOfHTML = $('#reference-tweet').clone();

	$('#stream').prepend(lotsOfHTML);
	$('#my-tweet').text(tweet)
	$('#my-tweet-time').text(formatDate());
	lotsOfHTML.show();

});

$('.content').on('click', function() {
	$(this).children($('.stats')).slideDown(200);
});

function formatDate() {
	var monthNames = [
        "Jan", "Feb", "March",
        "April", "May", "June", "July",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
    ];
	var dateStr = '';
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth();
	var day = date.getDate();
	var hours = date.getHours();
	var minutes = date.getMinutes();

	year = ((year.toString().split('')).splice(2, 2)).join(seperator = '');

	if (hours > 12) {
		hours -= 12;
		minutes += ' PM'
	}

	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	dateStr = hours + ':' + minutes + ' ' +  '-' + ' ' + day + ' ' + monthNames[month] + ' ' + year;
	return dateStr;
}

});