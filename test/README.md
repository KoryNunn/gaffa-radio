# gaffa-radio

radio view for gaffa

## Install:

    npm i gaffa-radio

## Add to gaffa:

    gaffa.views.constructors.radio = require('gaffa-radio');

# API

## Properties (instanceof Gaffa.Property)

### options

Bind to an array of items to use as radio options

eg:

    gaffa.model.set('[data]', [1,2,3]);

    radio.options.binding = '[data]';

You can override what to show as text for each radio via:

    radio.options.textBinding = <some binding>

When the textBinding expression is evaluated, the value of the option is available in context, as 'option'

For example:

    radio.options.textBinding = 'option';

Would map to 1, 2 and 3 for each respective option element.

You can use any kind of expression you like for the textBinding, eg:

    gaffa.model.set('[someLabels]', ['a','b','c']);

    radio.options.textBinding = '(getValue [someLabels] option)';

Would map to a, b and c for each respective radio element.

You can also override what value gets set to the model when a given option is selected via:

    radio.options.valueBinding = <some binding>

Which has the same implementation as textBinding.

eg:

    radio.options.textBinding = '(/ option 2)';

Would map to 0.5, 1 and 1.5 for each respective radio element.

### value

Bind the value of the radio view to the model.

    radio.value.binding = '[someBinding]';

value is a two way property, changing the radio views selection will update the model based on this properties binding,
and changing the model will update the view.

### groupName

The radios 'name' attribute. Used to group radio elements functionality together.

    radio.groupName.value = 'myRadioGroup';