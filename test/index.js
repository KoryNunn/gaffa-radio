var Gaffa = require('gaffa'),
    Option = require('../'),
    gaffa = new Gaffa();

// Register the Option view with gaffa
gaffa.registerConstructor(Option);


// Create the option
var option = new Option();

// Set up views options binding
option.options.binding = '[options]';

// Set up value and text bindings for the generated radio inputs
option.options.valueBinding = 'option.value';
option.options.textBinding = 'option.label';

// Set up the views value binding.
option.value.binding = '[selectedOption]';

// An example model
gaffa.model.set({
    selectedOption: 'b',
    options:[
        {
            label: 'Option A',
            value: 'a'
        },
        {
            label: 'Option B',
            value: 'b'
        },
        {
            label: 'Option C',
            value: 'c'
        }
    ]
})

// Add the view on load.
window.onload = function(){
    gaffa.views.add(option);
};

// Globalise gaffa for easy debugging.
window.gaffa = gaffa;