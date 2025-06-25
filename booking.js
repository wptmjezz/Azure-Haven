document.addEventListener('DOMContentLoaded', function() {
    const creditCardBtn = document.getElementById('credit-card-btn');
    const eWalletBtn = document.getElementById('ewallet-btn');
    const creditCardInfo = document.getElementById('credit-card-info');
    const eWalletInfo = document.getElementById('ewallet-info');

    // Function to switch active state
    function showPaymentDetails(activeBtn, inactiveBtn, activeDetails, inactiveDetails) {
        activeBtn.classList.add('active');
        inactiveBtn.classList.remove('active');
        activeDetails.classList.add('active');
        inactiveDetails.classList.remove('active');
    }

    // Event listener for Credit Card button
    creditCardBtn.addEventListener('click', function() {
        showPaymentDetails(creditCardBtn, eWalletBtn, creditCardInfo, eWalletInfo);
    });

    // Event listener for E-wallet button
    eWalletBtn.addEventListener('click', function() {
        showPaymentDetails(eWalletBtn, creditCardBtn, eWalletInfo, creditCardInfo);
    });

});