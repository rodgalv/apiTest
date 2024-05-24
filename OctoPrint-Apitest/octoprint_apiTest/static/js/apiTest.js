/*
 * View model for OctoPrint-Apitest
 *
 * Author: tyioul
 * License: AGPLv3
 */
$(function() {
    function ApitestViewModel(parameters) {
        var self = this;

        // assign the injected parameters, e.g.:
        self.loginStateViewModel = parameters[0];
        self.settingsViewModel = parameters[1];

        // TODO: Implement your plugin's view model here.

        self.sendMsg = function() {
            alert('Botao clicado');
            $.ajax({
                url: API_BASEURL + "plugin/apiTest",
                type: "POST",
                dataType: "json",
                data: JSON.stringify({
                    command: "command2"				
                }),
                contentType: "application/json; charset=UTF-8"
            }).done(function(response){console.log(response);});
		}
    }

    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push({
        construct: ApitestViewModel,
        // ViewModels your plugin depends on, e.g. loginStateViewModel, settingsViewModel, ...
        dependencies: [ "loginStateViewModel", "settingsViewModel" ],
        // Elements to bind to, e.g. #settings_plugin_apiTest, #tab_plugin_apiTest, ...
        elements: [ "#navbar_plugin_apiTest" ]
    });
});
