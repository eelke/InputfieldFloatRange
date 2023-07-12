# Float (Range) InputField

## What is it?

The missing range slider Inputfield for Processwire.
See also the Processwire [Forum thread](https://processwire.com/talk/topic/22430-inputfieldfloatrange-a-range-slider-inputfield/?tab=comments#comment-192449) and the [Modules directory](http://modules.processwire.com/modules/inputfield-float-range/) listing.

## What does it do?

This module extends InputfieldFloat and allows you to use HTML5 range sliders for number fields in your templates.
It includes a visible and editable value field, to override/tweak the value if required.  

## Features

- Min/max values
- Precision (number of decimals)
- Optional step value ([Read more](https://www.w3schools.com/tags/att_input_step.asp))
- Optional manual override of the selected value (will still adhere to the rules above)
- Configurable rounding of manually entered values (floor, round, ceil, disable)

## Usage

- Clone / zip repo, or run `composer require eelke.net/float-range` in your PW root
- Install FieldtypeFloatRange, this automatically installs the Inputfield
- Create new field of type `Float (range)` or convert an existing `Float`, `Integer` or `Text` field.
- To render the field's value simply echo `$page->field`

## Demo
A field with Min=0, Max=1, Step=0.2, Precision=2:
![](https://github.com/eelke/InputfieldFloatRange/raw/master/demo/RangeSlider-demo-1.gif)


Field with settings Min=0, Max=200, Step=0.25, Precision=2
![](https://github.com/eelke/InputfieldFloatRange/raw/master/demo/RangeSlider-demo-2.gif)

## Todo

- Make the display-field's size configurable (will use the Input Size field setting)
- Hopefully become redundant
