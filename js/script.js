var BankAccount = {
    result: 0,
    withdraw: function(amount) {
        this.result = this.result - amount;
    },
    deposit: function(amount) {
        this.result = this.result + amount;
    }
    };
   
   $(document).ready(function() {
   
   
   var newAccount = Object.create(BankAccount);
   
   $("form#initial-deposit").submit(function(event) {
    event.preventDefault();
   
    var inputtedName = $("input#name").val();
    var inputtedBalance = parseInt($("input#initial").val());
   
    newAccount.name = inputtedName;
    newAccount.deposit(inputtedBalance);
   
   
    $(".result").text(newAccount.result);
   });
   
   
   $("form#Deposit").submit(function(event) {
   
    event.preventDefault();
   
   
    var newBalance = parseInt($("input#deposit").val());
   
   
    newAccount.deposit(newBalance);
   
    $(".result").text(newAccount.result);
   });
   
   
   $("form#withdraw").submit(function(event) {
    event.preventDefault();
   
    var newBalance = parseInt($("input#withdraw").val());
   
   
    newAccount.withdraw(newBalance);
   
    $(".result").text(newAccount.result);
   
   });
});