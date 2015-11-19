# Autofill & autocomplete test case

## Usage

```
npm i && npm start
```

Then head to [http://localhost:3000](http://localhost:3000).


## Browser testing:

All tests were made on `http` which might change browser behaviour. They assume the following steps for autofill:

  1. Fill in user name and password
  2. Agree for chrome to save entries
  3. Go back to `/`, values should be autofilled

### Chrome 46 on Mac OSX, Android

#### Autofill

If you open a new window/tab and go to the same location, the event will not fire for the password field. You have to interact with the page for the `change` event to happen on the password too (e.g. click anywhere on the page). If you refresh the window/tab the event will fire on both fields.

#### Autocomplete
  
Click on a field and start typing the same value that was submitted before, autocomplete dropdown should appear.
`input` event fires when the value is chosen from the dropdown.

### Safari 9 on Mac OSX

#### Autofill

  You can apply autofill on Safari in several ways (after the initial steps):
  
  1. Key icon
    1. Click on the password field, there should be a key icon
    2. Click the key and chose the name you entered
  2. With keyboard shortcut
    1. press shift + cmd + a
  3. Automatically
    1. triggered only on https?


Both change and input events fire for both fields.

### Firefox 42 on Mac OSX

#### Autofill

Both `input` and `change` events are fired for the `name` field but none for the `password` field, even after page interaction.

#### Aufocomplete

Same behaviours as for autofill - after choosing a value from the dropdown, `name` triggers both events and `password` none.

## Usefull links:

- [W3C HTML5 spec - change and input events](http://www.w3.org/TR/2014/REC-html5-20141028/forms.html#event-input-change)
- [How to Turn Off Form Autocompletion](https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#The_autocomplete_attribute_and_login_fields)
- [Chrome autocomplete notes](http://devdocs.io/html/element/form#Google_Chrome_notes)

