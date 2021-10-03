$(document).ready(function(){
    
    
    var $faq_arr = [
        {
            title : `HOW CAN I BECOME AN INVESTOR OF THE INVESTPLAN LTD?`,
            text : `Firstly, you must register. Fill out the registration form. We recommend you to specify only true data. Create a login, a password and specify your email. After confirming your registration, you can log in your profile and use all services of the website: to specify payment details, credit the account, choose the investment plan, make a deposit, etc "Registration".`
        },
        {
            title : `What electronic payment systems can I use for financial operations?`,
            text : `We work with the following electronic payment systems: Perfect Money, Payeer, Bitcoin, Ethereum, Litecoin, Dash and Dogecoin. <br>
            If you do not have a wallet in these systems, you can create it by using the following links <br>
            Perfect Money: perfectmoney.is. <br>
            Payeer: payeer.com <br>
            Visa or Mastercard: visa.com & mastercard.com <br>
            Bitcoin: bitcoin.com <br>
            Ethereum: www.ethereum.org <br>
            Litecoin: litecoin.com <br>
            Dash: dash.org <br>
            Dogecoin: dogecoin.com`
        },
        {
            title : `CAN I CHANGE MY PASSWORD, PAYMENT DETAILS AND EMAIL?`,
            text : `You can change your password yourself in your profile. You can also change payment wallet you use to make payments only through the project 
            administrator by making a request via one of the contacts specified on the website. However, you can not change your email.`
        },
        {
            title : `HOW CAN I WITHDRAW MY PROFIT?`,
            text : `Depending on the investment plan you chose, the profit is formed from the accrual percent and deposit. As soon as funds are credited to your 
            personal account, you can request to withdraw them or create a new deposit by using your personal account. The money will be immediately 
            sent to your wallet of the electronic payment system you used to make a deposit. The funds accrued according to the affiliate program are 
            available for immediate withdrawal "Withdraw Funds".`
        },
        {
            title : `HOW MUCH TIME DOES IT TAKE TO CREDIT THE ACCOUNT?`,
            text : `Accounts are credited immediately and you can use the funds to start your investment activity at once.`
        },
        {
            title : `DO YOU CHARGE ANY HIDDEN FEES FROM DEPOSIT?`,
            text : `No, we don't charge any hidden fees.`
        },
        {
            title : `WHAT ARE THE MINIMUM AND MAXIMUM DEPOSIT AMOUNT?`,
            text : `The minimum deposit amount is $50. Maximum - $100,000.`
        },
        {
            title : `DO YOU CHARGE ANY HIDDEN FEES FROM WITHDRAWALS?`,
            text : `Some payment processors charge some fees: <br>
            - PerfectMoney: 0.5% <br>
            - Payeer: 0.95% <br>
            - Cryptocurrencies: 0.9%` 
        },
    ];

    var $faq_box = `
            <article>
                <h5></h5>
                <p></p>
            </article>
    `;

    for(i = 0; i < $faq_arr.length; i++){
        $("#faq_part .wrap").append($faq_box);
    };

    $("#faq_part .wrap article").each(function(f){
        $(this).find("h5").text($faq_arr[f].title);
        $(this).find("p").html($faq_arr[f].text);
    });





});