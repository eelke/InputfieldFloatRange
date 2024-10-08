# InputfieldFloatRange changelog

## 009

- Fix [issue](https://github.com/eelke/InputfieldFloatRange/issues/3) where when `$step` was set to `'any'` (as reported by @romaincazier).

## 008

- Add composer.json and add to Packagist

## 007

- Add defaultValue field (as requested by @charger)
- Fix a silly mistake where a negative rounding (-1) resulted in removing all decimals instead

## 006

- Fix bug where InputfieldFloat negative precision prevented the displayed value to be updated properly
- Revert installs & requires, so direct installs from Modules Directory (should) work 

## 005

- Fix bug where the Inputfield would not work properly within repeaters / repeater matrices

## 004

- Make rounding of manually entered values configurable (floor, round, ceil or disable)
- Fix small JS bug where the value-display field was not displayed
- Update README

## 003

- Code cleanup, add some ModuleInfo data & LICENSE
- Submit to PW Modules directory (http://modules.processwire.com/modules/inputfield-float-range/)

## 002

- Fix issue where setting the step value to an empty value created problem with validation
- Make the display-field optional

## 001

- Initial release
