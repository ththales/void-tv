const genreSelect = $("#inputGroupSelect01");

genreSelect.on("change", function () {
    const selectedGenre = $(this).find(":selected").text();

    $(".genres-container .col").each(function () {

        const movie = movies[$(this).index()];

        if (
            selectedGenre === "Todos" ||
            movie.genre.includes(selectedGenre)
        ) {
            $(this).show();
        } else {
            $(this).hide();
        }

    });

});