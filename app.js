
// BUDGET CONTROLLER
var budgetController = (function(){
    
    // To add later
})();


// UI CONTROLLER
var UIController = (function(){
    // Some Code
})();


// GLOBAL APP COOMTROLLER
var controller = (function(budgetCtrl, UICtrl){
    document.querySelector('.add__btn').addEventListener('click', function(){
        // TODO - 
        // 1. Get the filed input data

        // 2. Add the item to the budget controller

        // 3. Add the tiem to the UI

        // 4. Calculate the budget

        // 5. Dispaly the budget on the UI
    });

    document.addEventListener('keypress', function(event){

        if (event.keyCode === 13 || event.which === 13){
            console.log('ENTER was pressed.');
        }
        
    });;

})(budgetController, UIController);