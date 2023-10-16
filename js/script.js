
$(document).ready(function() {
    // $.ajax({
    //     url: 'data.json',
    //     dataType: 'json',
    //     success: function(data) {
    //         console.log(data)
    //         // const moviesContainer = $('#movies-container')
    //         // data.forEach(movie => {
    //         //     const movieCard = `
    //         //     <div class="movie-card">
    //         //         <img class="movie-poster" src="${movie.poster}" alt="${movie.title_en}">
    //         //     </div>
    //         //     `
            
    //         //     moviesContainer.append(movieCard)
    //         // });
    //     },
    //     error: function(xhr, status, error) {
    //         console.log('Error:', error);
    //     }
    // })
    
    // $.getJSON('data.json', function(data) {
    //     console.log(data)
    // });

    fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const moviesContainer = $('#movies-container')
    data.forEach(movie => {
        const movieCard = `
            <div class="movie-card">
                <img class="movie-poster" src="${movie.poster}" alt="${movie.title_en}">
            </div>`
            console.log(movieCard)
            moviesContainer.append(movieCard)
        });
})
  .catch(error => {
    console.error(error);
  });
})