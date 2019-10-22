/**
 * ProcessWire FloatRange Inputfield
 * By @eelke, https://eelke.net
 */

function getSettings(id) {

    // Allow for field to work within a repeater (-matrix).
    if (id.indexOf("_repeater") > 0) id = id.split("_repeater")[0];

    return window.ProcessWire.config.InputfieldFloatRange[id];
}

var $ = window.$;

$(document).ready(function() {

    // Display range slider value in textfield
    $(document).on("change input", ".InputfieldFloatRange", function(event) {

        // Prevent weird issue where InputfieldFloatRange__display's changes are also processed
        if ($(event.target).hasClass("InputfieldFloatRange__display")) return;

        var settings = getSettings(event.target.id);
        if (settings.displayValueField){
            event.target.nextSibling.value = parseFloat(event.target.value).toFixed(settings.precision);
        }
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
        if (settings.step !== "" && settings.step !==  0 && settings.rounding !== "disabled"){
            var step = parseFloat(settings.step);
            if (settings.rounding === "round") minMaxValue = step * Math.round(minMaxValue / step);
            else if (settings.rounding === "floor") minMaxValue = step * Math.floor(minMaxValue / step);
            else if (settings.rounding === "ceil") minMaxValue = step * Math.ceil(minMaxValue / step);
        }

        if (!isNaN(minMaxValue)) {
            ranger.value = t.value = minMaxValue;
        }
    });

});
