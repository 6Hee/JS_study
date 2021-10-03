$(document).ready(function(){


    var $part_01_arr = [
        {
            img : "if_vector_65_02_473778.png",
            h5 : "What’s “InvestPlan”?",
            p : "A InvestPlan group is an organization that builds or buys a group of properties and then sells them to investors as rental properties."
        },
        {
            img : "if_vector_65_07_473788.png",
            h5 : "Breaking down “InvestPlan”",
            p : "These groups provide a service for rental properties that is similar to mutual funds in that investors can reap some of the benefits of owning rental properties without having to manage them."
        },
        {
            img : "if_vector_65_14_473802.png",
            h5 : "Incredible Strategy & Analisys",
            p : "In exchange for finding tenants, handling maintenance and other responsibilities, the organization receives a portion of the investors' monthly rent proceeds."
        },
    ]

    console.log($part_01_arr[0].img);

    var $part_01_box = `
            <article>
                <ul>
                    <li><img src="" alt=""></li>
                    <h5></h5>
                    <p></p>
                </ul>
            </article>
    `;

    for(i = 0; i < $part_01_arr.length; i++){
        $("#part_01 .wrap").prepend($part_01_box);
    }

    $("#part_01 .wrap article").each(function(i){
        $(this).find("li img").attr("src", "./img/"+$part_01_arr[i].img+"");
        $(this).find("h5").text($part_01_arr[i].h5);
        $(this).find("p").text($part_01_arr[i].p);
    });










    
});