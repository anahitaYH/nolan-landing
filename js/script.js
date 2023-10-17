
$(document).ready(function () {

  fetch('data.json')
    .then(response => response.json())
    .then(data => {

      const moviesContainer = $('#movies-container')

      data.forEach((movie, index) => {
        const movieCard = `
            <div class="movie-card-container">
              <a target='blank' href='${movie.link}'>
                <img class="movie-poster hide" src="${movie.poster}" alt="${movie.title_en}">
              </a>

              <img class="movie-vhs show" src="${movie.vhs}" alt="${movie.title_en}">

              <span class="title">${movie.title_fa}</span>
              <span class="year">${movie.year}</span>
            </div>
            
            `
        moviesContainer.append(movieCard)
      });
    })
    .catch(error => {
      console.error(error);
    });


  $('#movies-container').on('click', '.movie-vhs', function () {

    const shownPoster = $(this).parent().find('.movie-poster')

    // add .clicked to the card container when user clicks on card
    $('.movie-card-container').removeClass('clicked')
    $(this).closest('.movie-card-container').addClass('clicked')

    // hide this movie-vhs and show others
    $(this).toggleClass('show hide')

    // hide all the other posters if shown
    const posterElems = $('.movie-poster').toArray()
    posterElems.forEach((item, i) => {
      if ($(item).hasClass('show')) {
        $(item).toggleClass('show hide')
        $(item).parent().parent().find('.movie-vhs').toggleClass('hide show')
      }
    })

    // // show this poster
    shownPoster.toggleClass('hide show')

    // shownPoster.on('click', function () {

    // })
  });
})