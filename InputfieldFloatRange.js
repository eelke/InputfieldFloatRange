/**
 * ProcessWire FloatRange Inputfield
 * By @eelke, https://eelke.net
 */

function getSettings(id) {
    return window.ProcessWire.config.InputfieldFloatRange[id];
}

var $ = window.$;

$(document).ready(function() {

    // Display range slider value in textfield
    $(document).on("change input", ".InputfieldFloatRange", function(event) {

        // Prevent weird issue where InputfieldFloatRange__display's changes are also processed
        if ($(event.target).hasClass("InputfieldFloatRange__display")) return;

        var settings = getSettings(event.target.id);
        event.target.nextSibling.value = parseFloat(event.target.value).toFixed(settings.precision);
    });

    // Forward changes in textfield to range slider
    $(document).on("input", ".InputfieldFloatRange__display", function(event) {

        var t = event.target;

        var ranger = t.previousSibling;
        var settings = getSettings(ranger.id);
        var minMaxValue = Math.min(settings.max, Math.max(settings.min, parseFloat(t.value).toFixed(settings.precision)));

        if (!isNaN(minMaxValue)) {
            ranger.value = minMaxValue;
        }
    });

    // After leaving the field, make sure its value matches precision, min, max and step settings
    $(document).on("blur", ".InputfieldFloatRange__display", function(event) {

        var t = event.target;
        var ranger = t.previousSibling;
        var settings = getSettings(ranger.id);

        // Replace comma's with dots, if required
        // TODO: Format number according to locale?
        var val = t.value.replace(/,/g, ".");

        // Round to precision number of decimals
        var minMaxValue = parseFloat(val).toFixed(settings.precision);

        // Fit number within min and max values
        if (settings.min !== "") minMaxValue = Math.max(settings.min, minMaxValue);
        if (settings.max !== "") minMaxValue = Math.min(settings.max, minMaxValue);

        // If there is a set step value, round value to nearest step
        if (settings.step !== "any"){
            var step = parseFloat(settings.step);
            minMaxValue = step * Math.round(minMaxValue / step);
        }

        if (!isNaN(minMaxValue)) {
            ranger.value = t.value = minMaxValue;
        }
    });

});
