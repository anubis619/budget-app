
// BUDGET CONTROLLER
var budgetController = (function(){
    
    // To add later
})();


// UI CONTROLLER
var UIController = (function(){
    var DOMStrings = {
        inputType: '.add__type',
        inputDocumentation: '.add__description',
        inputValue: '.add__value',
        buttonPress: '.add__btn'

    };

    return {
        getinput: function(){
            return{
                type: document.querySelector(DOMStrings.inputType).value, // + will be inc and - is for exp
                description: document.querySelector(DOMStrings.inputDocumentation).value,
                value:document.querySelector(DOMStrings.inputValue).value
            };
        },


        getDomStrings: function(){
            return DOMStrings;
        }

            
    };

})();


// GLOBAL APP COOMTROLLER
var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function(){
        var DOM = UICtrl.getDomStrings();

        document.querySelector(DOM.buttonPress).addEventListener('click', controlAddItem);

        document.addEventListener('keypress', function(event){

            if (event.keyCode === 13 || event.which === 13){
            controlAddItem();
            }
        
        });;

    };

    

    var controlAddItem = function(){
        // TODO - 

        // 1. Get the filed input data

        var input = UICtrl.getinput();
        console.log(input);

        // 2. Add the item to the budget controller

        // 3. Add the tiem to the UI

        // 4. Calculate the budget

        // 5. Dispaly the budget on the UI

    };

    return{
        init: function(){
            console.log('App has started.');
            setupEventListeners();
        }
    };
    

})(budgetController, UIController);

controller.init();