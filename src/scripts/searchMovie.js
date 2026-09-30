$("#search-bar").on("input", function () {
    let movieName = $(this).val().toLowerCase();

    $(".card-title").each((index, element) => {

        let text = $(element).text().toLowerCase();

        if (text.includes(movieName)) {
            $(element).closest(".col").show();
        } else {
            $(element).closest(".col").hide();
        }

    });
});