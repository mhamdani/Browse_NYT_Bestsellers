fetch('https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=' +
// Place your API key here to fun the application
'2a6ff788cc214c088bc32b87e3894107', {
    method: 'get',
  })
  .then(response => { return response.json(); })
  .then(json => {
    updateBestSellers(json);
    console.log(json);
  })
  .catch(error => {
    console.log('NYT API Error.' + error);
  });

function updateBestSellers(data){
  data.results.forEach(function(book){
    var bookInfo = book.book_details[0];
    var listing =
    '<div class="card">' +
    '<h2><a href="' + book.amazon_product_url + '" target="_blank">' + bookInfo.title + '</a></h2>' +
          '<h4>By ' + bookInfo.author + '</h4>' +
          '<p>' + bookInfo.description + '</p>'+
        '</div>';

    $('#best-seller-titles').append(listing);
  });
}
