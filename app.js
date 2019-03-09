
// BUDGET CONTROLLER
var budgetController = (function(){
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
        
    };

    return {
        addItem: function(type, des, val){

            var newItem, ID;

            // Create new ID
            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else{
                ID = 0;
            }
            

            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp'){
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc'){
                newItem = new Income(ID,des,val);
            }

            // Push it into our data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;
        },

        testing: function(){
            console.log(data);
        }
    };



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

        addListITem: function(obj, type){
            // Create HTML string with palceholder text

            // Replace placeholder text with some data


            // Insert the HTML inside the DOM
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

        // Var declaration
        var input, newItem;
        // 1. Get the filed input data

        input = UICtrl.getinput();
        
        // 2. Add the item to the budget controller

        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
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