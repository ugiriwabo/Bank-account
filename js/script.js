// business logic
function BankAccount(name, result) {
  this.nameOfNewAccount = name;
  this.initialDeposit = result;
}
BankAccount.prototype.balance = function() {
    return this.nameOfNewAccount + " " + this.initialDeposit;
}
// user interface logic
$(document).ready(function(){
    $("form#initial-deposit").submit(function(event) {
      event.preventDefault();
      var inputtedName = $("input#name").val();
      var inputtedInitial = $("input#initial").val();
      var newBalance = new BankAccount(inputtedName + inputtedInitial );
      $("#result").append("<span id='result'>" + newBalance.nameOfNewAccount+<span id="result"></span>);

      $("input#name").val("");
      $("input#initial").val("");
      $(".account").show();
    });

    $("form#Deposit").submit(function(event) {
      event.preventDefault();
      var inputtedName = $("input#deposit").val();
      var inputtedInitial = $("input#initial").val()
      var newBalance = new BankAccount(inputtedName + inputtedInitial );
      $("#result").append("<span id='result'>" + newBalance.nameOfNewAccount+<span id="result"></span>);
  
      $("input#deposit").val("");
      $("input#initial").val("");
      $(".account").show();
    });
    
    $("form#withdraw").submit(function(event) {
      event.preventDefault();
      var inputtedName = $("input#withdraw").val();
      var inputtedInitial = $("input#initial").val()
      var newBalance = new Contact(inputtedName - inputtedInitial );
      $("#result").append("<span id='result'>" + newBalance.nameOfNewAccount+<span id="result"></span>);
  
      $("input#withdraw").val("");
      $("input#initial").val("");
      $(".account").show();
    });
});