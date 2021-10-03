$(document).ready(function(){


    var $news_arr = [
        {
            img : "news_01.jpg",
            title : "Uranium market not yet ready for Cameco restarts, says CEO",
            text : "Although uranium market challenges are easing, Cameco CEO Tim Gitzel says there is still far to go before the Canadian uranium company restarts operations at McArthur River/Key Lake. Gitzel made the comment during the presentation of its second quarter results yesterday...",
            time : "Jul-29-2019 03:32:55 PM"
        },
        {
            img : "news_02.jpg",
            title : "Nuclear remains UK’s main low-carbon energy source, despite outages",
            text : "The UK obtained 19% of its primary energy from low-carbon sources last year, with 39% of this from nuclear power, but this was 7% lower than in 2017 due to outages at Dungeness B and Hunterston B towards the end of 2018, official statistics published today show. Nuclear capacity was broadly the same as in 2017, at 9.3 GW...",
            time : "Jul-26-2019 06:54:26 PM"
        },
        {
            img : "news_03.jpg",
            title : "Ohio clean energy bill becomes law",
            text : "Ohio's House of Representatives passed House Bill 6 yesterday at a session held earlier than the 1 August date that had been expected, and it was signed into law by Governor Mike DeWine. The law will provide clean energy credits to zero-emission power producers, including nuclear power plants...",
            time : "Jul-26-2019 06:54:26 PM"
        },
        {
            img : "news_04.jpg",
            title : "Olkiluoto faces further delay to July 2020",
            text : "Commissioning of the EPR at Olkiluoto in Finland has been delayed again, this time by six months to July 2020, utility Teollisuuden Voima Oyj (TVO) said yesterday. The new date was given in an updated schedule for the OL3 EPR plant unit from the plant supplier Areva-Siemens Consortium...",
            time : "Jul-22-2019 11:29:24 AM"
        },
        {
            img : "news_05.jpg",
            title : "Welcome to InvestPlan LTD!",
            text : "Dear clients, We are glad to welcome you to our investment service. We started our company with a great idea for long cooperation. Energy Invest Corporation LTD investment service totally prepared for a long-term and mutually beneficial service for our clients...",
            time : "Jul-16-2019 05:55:40 AM"
        },
    ];

    var $news_box = `
            <article>
                <div class="img"><img src="" alt=""></div>
                <div class="news_text">
                    <h5></h5>
                    <p></p>
                    <span></span>
                </div>
            </article>
    `;

    for(i = 0; i < $news_arr.length; i++){
        $("#news_part .wrap").prepend($news_box);
    }

    $("#news_part .wrap article").each(function(n){
        $(this).find(".img img").attr("src", "./img/sub/"+$news_arr[n].img+"");
        $(this).find(".news_text h5").text($news_arr[n].title);
        $(this).find(".news_text p").text($news_arr[n].text);
        $(this).find(".news_text span").text($news_arr[n].time);
    });



});