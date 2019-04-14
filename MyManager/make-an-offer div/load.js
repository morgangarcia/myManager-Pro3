$(document).ready(function () {
	var source = $('#urlp').text() + "/make-an-offer #bstr";
	var name = $('#ProductDetails .BlockContent h2').text();
	var url = window.location.href;
	$('.modal-header h3').text("Make an Offer for " + name);
	$('.modal-body').load(source, function () { $('#contact_question').val("I would like to make an offer for " + name + "\n(" + url + ")"); });
})

