
function getGifs(results){
    let numResults = results.data.length;
    if (numResults){
        let ranIdx = Math.floor(Math.random()*numResults);
        let newGif = $(`<img src = "${results.data[ranIdx].images.original.url}">`);
        let test = $("<div>");
        test.append(newGif)
        $("#gifs").append(newGif);
    }
}

$("form").on("submit", async function(evt){
    evt.preventDefault();

    let search = $("#search").val();
    $("#search").val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: search,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    getGifs(response.data);
});

$("#delete").on("click", function(){
    $("#gifs").empty();
});

