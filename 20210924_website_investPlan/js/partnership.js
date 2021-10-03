$(document).ready(function(){


    var $ptn_arr = [
        'With our affiliate program, you can make money by referring clients to InvestPlan LTD investment platform. Promote our website by placing our banners or text ads on your website, blog or just put the affiliate link in message forum signatures, email signatures or any other places.',

        'Our partner affiliate program applies to all of our members from the moment they sign up for an account with us simply share your referral link with friends, and you’ll earn 9% commission at level first from their active deposit. Any additional investment made by your branch will create 3% commission at level second and 1% commission at level third. Commission is credited to your account balance instantly, without any delays.',

        'Regional Representatives provides you with the opportunity to earn up to 19% commission. Support and advertise our project in your region, become    our partner, and you will be financially awarded. An active deposit is needed for you to earn an affiliate commission.'
    ];


    var $ptn_arr_02 = [
        {
            title : "13% Commission for Partners",
            text : "As an standard user, you are able to earn an incentive amount of 9% - 3% - 1% commission per invesment of your referrals. Standard members are not required to have any active investment, or account balance in order to be able to earn from their referrals.",
            btn : "Get Started Now"
        },
        {
            title : "19% Commission for Representatives",
            text : "You are able to become a global representative from all over the world and take advantages of 12% - 4% - 2% - 1% referral commission. In particular, you do not need an active deposit to register for a regional representative. Please fill out the form below.",
            btn : "Representative Form"
        }
    ];

    var $ptn_arr_03 = [
        "m_01.jpg", "m_02.jpg", "m_03.jpg", "m_04.jpg", "m_05.jpg", "m_06.jpg", "m_07.jpg", "m_08.jpg", "m_09.jpg", "m_10.jpg", 
    ]

    $("#ptn_part .wrap > ul > li").each(function(i){
        $(this).text($ptn_arr[i]);
    });


    $("#ptn_part .wrap article > div").each(function(index){
        $(this).find("h5").text($ptn_arr_02[index].title);
        $(this).find("p").text($ptn_arr_02[index].text);
        $(this).find(".btn a").text($ptn_arr_02[index].btn);
    });

    for(i = 0; i < $ptn_arr_03.length; i++){
        $("#ptn_part .wrap .rep").prepend("<div></div>");
    }
    $("#ptn_part .wrap .rep > div").each(function(evt){
        $(this).css("background-image", "url(./img/managers/"+$ptn_arr_03[evt]+")");
    });


});