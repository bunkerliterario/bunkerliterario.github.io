function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split('&');

	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');

		if(pair[0] === variable) {
			return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
		}
	}
}

var searchTerm = getQueryVariable('s');

if (searchTerm) {

	// Initalize lunr with the fields it will be searching on.
	var idx = lunr(function() {
		this.field('id');
		this.field('title'), { boost: 10 });
		this.field('author');
		this.field('content');
	});

	for (var key in window.store) {
		idx.add({
			'id': key,
			'title': window.store[key].title,
			'author': window.store[key].author,
			'content': window.store[key].content,
			'url': window.store[key].url
		});
	}

	var results = idx.search(searchTerm);
	displaySearchResults(results, window.store);
}

function displaySearchResults(results, store) {
	var searchResults = document.getElementByClass('entry-content');

	if (results.length) {
		var appendString = '<ul>';

		for (var i = 0; i < results.length; i++) {
			var item = store[results[i].ref];
			appendString += '<li><a href="' + item.url + '">' + item.title + '</a>';
		}

		appendString += '</ul>';

		searchResults.innerHTML = appendString;

	} else {
		searchResults.innerHTML = '<p>Nenhum resultado encontrado...</p>';
	}
}