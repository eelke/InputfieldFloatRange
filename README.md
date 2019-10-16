Float (Range) InputField
========================

### What is it?

The missing range slider Inputfield for Processwire.
See also the [Forum thread](https://processwire.com/talk/topic/22430-inputfieldfloatrange-a-range-slider-inputfield/?tab=comments#comment-192449)

### What does it do?

This module extends InputfieldFloat and allows you to use HTML5 range sliders for number fields in your templates.
It includes a visible and editable value field, to override/tweak the value if required.  

### Features

- Min/max values
- Precision (number of decimals)
- Steps ([Read more](https://www.w3schools.com/tags/att_input_step.asp))
- Manual override of the selected value (will still adhere to the rules above)

### Usage

- Clone / zip repo
- Install FieldtypeFloatRange, this automatically installs the Inputfield
- Create new field of type `Float (range)` or convert an existing `Float`, `Integer` or `Text` field.
- To render the field's value simply echo `$page->field`

### Demo
A field with Min=0, Max=1, Step=0.2, Precision=2:

![](demo/RangeSlider-demo-1.gif)

#### Todo

- Make the display-field's size configurable (will use the Input Size field setting)
- Hopefully become redundant
- If it's usable for others I'll add it to the Modules list
