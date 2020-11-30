
$(document).ready(function(){


    $("#dj-btn").click(function() {
        $("#question").html("<h1>You have selected DJ MIX</h1>");
        $(".button-option").css("display","none");
        $("#service-container").append("<h1 id='how-long-timed-master'>Maybe you could benefit from our timed mastering service. How long is your mix/podcast?</h1>");
        $("#service-container").append("<input id='minutes-input' type='text' placeholder='length in minutes'>");
        $("#service-container").append("<button id='calc-timed-master'>CALCULATE</button>");
    });

    $("#podcast-btn").click(function() {
        $("#question").html("<h1>You have selected PODCAST</h1>");
        $(".button-option").css("display","none");
        $("#service-container").append("<h1 id='how-long-timed-master'>Maybe you could benefit from our timed mastering service. How long is your mix/podcast?</h1>");
        $("#service-container").append("<input id='minutes-input' type='text' placeholder='length in minutes'>");
        $("#service-container").append("<button id='calc-timed-master'>CALCULATE</button>");
    });

    $(document).on('click', '#calc-timed-master', function(){
        var min = $("#minutes-input").val();
        var price = ((min/60) * 40).toFixed(2);
        $("#how-long-timed-master").css("display","none");
        $("#minutes-input").css("display","none");
        $("#calc-timed-master").css("display","none");
        $("#service-container").append(`<h2>You mastering is estimated to cost: £${price} based on the length indicated by you of ${min} minutes </h2>`);
    });

    $("#live-btn").click(function() {
        $("#question").html("<h1>You have selected LIVE RECORDING</h1>");
        $(".button-option").css("display","none")
        $("#service-container").append("<h1 id='happy-with-mix'>Are you happy with the mix-down of the track?</h1>")
        $("#service-container").append("<button class='button-option' id='yes-mix-btn'>YES</button>")
        $("#service-container").append("<button class='button-option' id='no-mix-btn'>NO</button>")
    });

    $("#electronic-btn").click(function() {
        $("#question").html("<h1>You have selected ELECTRONIC MUSIC</h1>");
        $(".button-option").css("display","none");
        $("#service-container").append("<h1 id='happy-with-mix'>Are you happy with the mix-down of the track?</h1>");
        $("#service-container").append("<button class='button-option' id='yes-mix-btn'>YES</button>");
        $("#service-container").append("<button class='button-option' id='no-mix-btn'>NO</button>");
    });

    $(document).on('click', '#yes-mix-btn', function(){
        $(".button-option").css("display","none");
        $("#happy-with-mix").css("display","none");
        $("#service-container").append(`<h2 id="stem-mastering-suggestion">Are you interested in stem mastering? This can provide more precise mastering and tonal balance control?</h2>`);
        $("#service-container").append("<button class='button-option' id='yes-stem-btn'>YES</button>");
        $("#service-container").append("<button class='button-option' id='no-stem-btn'>NO</button>");
    });

    $(document).on('click', '#no-mix-btn', function(){
        $(".button-option").css("display","none");
        $("#happy-with-mix").css("display","none");
        $("#service-container").append(`<h2 id="mix-service-suggestion">Maybe you could benefit from our mixing services. How many tracks does your track have?</h2>`);
        $("#service-container").append(
            "<label for='tracks'>Choose amount of tracks:</label> \
            <select id='tracks' name='tracks'> \
                <option value='1-10'>1-10</option> \
                <option value='11-20'>11-20</option> \
                <option value='21-30'>21-30</option> \
                <option value='31-40'>31-40</option> \
                <option value='41-50'>31-40</option> \
                <option value='51-60'>31-40</option> \
            </select>");
    
           
    });

    $(document).on('click', '#yes-stem-btn', function(){
        $(".button-option").css("display","none");
        $("#stem-mastering-suggestion").css("display","none");
        $("#service-container").append("<h2 id='how-many-stems'>How many stems will you provide for mastering?</h2>");
        $("#service-container").append(
            "<label for='tracks'>Choose amount of tracks:</label> \
            <select id='tracks' name='tracks'> \
                <option value='1-10'>1-10</option> \
                <option value='11-20'>11-20</option> \
                <option value='21-30'>21-30</option> \
                <option value='31-40'>31-40</option> \
                <option value='41-50'>31-40</option> \
                <option value='51-60'>31-40</option> \
            </select>");
        $("#service-container").append("<button id='calc-stem-master'>CALCULATE</button>");
    });

    $(document).on('click', '#calc-stem-master', function(){
        var tracks = $("#tracks").val();
        var price = ((tracks * 40).toFixed(2));
        $("#how-many-stems").css("display","none");
        $("#minutes-input").css("display","none");
        $("#calc-stem-master").css("display","none");
        $("#service-container").append(`<h2>You mastering is estimated to cost: £${price} based on ${tracks} number of stems provided by you </h2>`);
    });
});
