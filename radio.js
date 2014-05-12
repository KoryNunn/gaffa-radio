var Gaffa = require('gaffa'),
    crel = require('crel'),
    doc = require('doc-js');

function Radio(){}
Radio = Gaffa.createSpec(Radio, Gaffa.View);
Radio.prototype._type = 'radio';
Radio.prototype.render = function() {
    var viewModel = this,
        renderedElement = crel('div');

    doc(renderedElement).on(this.updateEventName || "change", function (event) {
        viewModel.value.set(doc(renderedElement).findOne(':checked').data);
    });

    this.renderedElement = renderedElement;
}

function updateOptions(viewModel) {
    var property = this,
        gaffa = property.gaffa,
        element = viewModel.renderedElement,
        value = viewModel.options.value,
        groupName = viewModel.groupName.value;

    if (!Array.isArray(value)) {
        value = [];
    }

    element.innerHTML = '';
    for (var i = 0; i < value.length; i++) {
        var optionData = value[i];
        if (optionData !== undefined) {
            var id = groupName + '-' + i,
                option = crel('input', {type: 'radio', name: groupName, id: id}),
                label = crel('label'),
                container = crel('div');

            label.setAttribute('for', id);

            option.value = option.data = property.valueBinding ? gaffa.gedi.get(property.valueBinding, property.getPath(), {option: optionData}) : optionData;
            label.textContent = property.textBinding ? gaffa.gedi.get(property.textBinding, property.getPath(), {option: optionData}) : optionData;

            crel(element,
                crel(container, option, label)
            );
        }
    }
}

Radio.prototype.groupName = new Gaffa.Property({
    value: 'radio-' + Math.floor(Math.random() * 10000),
    update: updateOptions
});

Radio.prototype.options = new Gaffa.Property(updateOptions);

Radio.prototype.value = new Gaffa.Property(function (view, value) {
    var options = doc(view.renderedElement).find('input');

    for(var i = 0; i < options.length; i++){
        var option = options[i];
        if(value === option.data){
            option.setAttribute('checked', 'checked');
        }else{
            option.removeAttribute('checked');
        }
    }
});

module.exports = Radio;