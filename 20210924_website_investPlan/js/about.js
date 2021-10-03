$(document).ready(function(){



    var $about_top_arr = [
        `"InvestPlan LTD" Company was registered in March 9th, 2017 in Great Britain 
        (registration number #10660714) and works according to the legislation of this 
        jurisdiction. `,

        `InvestPlan LTD fulfills energy saving functions and works in compliance with the 
        normative, legislative and legal enactments. Our goal is to develop new areas, increase the 
        share of the company participation in international projects in energy saving and ecology.`,

        ` Why have we chosen a traditional nuclear power industry for investing rather than 
        alternative (natural) energy?`,

        ` The nuclear sector provides 17% of all power consumed by mankind. In industrially 
        developed countries (France, Lithuania, Germany, and Sweden) where there is a deficit 
        of natural power resources (oil, natural gas, coal), the production of electrical power is 
        from 50 to 76%.`,

        `According to experts, in the nearest future the development of nuclear energy is 
        forecasted in countries of the Asia-Pacific region (China, India), some countries of 
        the Eastern Europe (the Czech Republic, Slovakia), and countries of the former CIS 
        (Kazakhstan, Russia).`,

        `InvestPlan LTD Company has established a number of branches in the countries where 
        the nuclear power industry is the main one for producing electric power. Besides, we 
        actively participate in projects on energy saving on the regional level, take part in 
        ecological programs and invest in scientific developments of technologies for nuclear 
        energy.`
    ];



    for(i = 0; i < $about_top_arr.length; i++){
        $("#about_main .wrap .top > ul > li > ul").prepend("<li></li>");
    }

    $("#about_main .wrap .top > ul > li > ul > li").each(function(i){
        $(this).text($about_top_arr[i]);
    });


    var $about_bot_arr = [
        `Professional circuit installers, planning engineers, technologists, marketing experts and specialists on power saving work for our company. `,

        `We specialize in supplying equipment for nuclear energy and modernizing stations. In particular, in the Russian Federation we participated in modernizing three nuclear reactors. As a result, the total amount of power production was increased by 19%.`,

        `Modern nuclear energy is being actively developed thanks to essentially new technologies on ecology and safety, as well as from implementing new perspective innovational solutions.`,

        `We conclude agreements with ecological organizations and receive funds financed by the companies implementing innovational technologies to minimize the waste of nuclear reactors.`,

        ` As of 2017, our investment portfolio has orders for more than twenty projects on reducing power consumption. Some projects are being already implemented, and some of them are planned. The total amount of the orders is about one million US dollars. Our partners are satisfied with our relatively inexpensive and safe technological solutions.`,

        `You can feel safe about your investments because the InvestPlan LTD Company works on the state and international level which guarantees stable work and profits.`
    ];



    for(i = 0; i < $about_bot_arr.length; i++){
        $("#about_main .wrap .bot > ul > li > ul").prepend("<li></li>");
    }

    $("#about_main .wrap .bot > ul > li > ul > li").each(function(i){
        $(this).text($about_bot_arr[i]);
    });

    




});