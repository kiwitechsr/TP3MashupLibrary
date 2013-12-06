define([
    'tau/core/templates-factory'
], function(templates) {

    var config = {
        name: 'cf.constraints.save',
        engine: 'jqote2',
        markup: [
            '<div>',
            '<div class="i-role-error-message" style="display: none;">Please enter all custom fields</div>',
            '<div><button type="button" class="tau-btn tau-primary i-role-save">Save</button></div>',
            '</div>'
        ]
    };

    return templates.register(config);
});