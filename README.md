# Autofill & autocomplete test case

## Usage

```
npm i && npm start
```

Then head to [http://localhost:3000](http://localhost:3000).


## Browser testing:

### Chrome 46 on Mac OSX, Android

#### Autofill

  1. Fill in user name and password
  2. Agree for chrome to save entries
  3. Go back to `/`, values should be autofilled

**Results:**
If you open a new window/tab and go to the same location, the event will not fire for the password field. You have to interact with the page for the `change` event to happen on the password too (e.g. click anywhere on the page). If you refresh the window/tab the event will fire on both fields.

#### Autocomplete
  
  1. Fill in a field and submit
  2. Click on a field and start typing the same value, autocomplete dropdown should appear

**Results:**

`input` event fires when the value is chosen from the dropdown.

### Safari 9 on Mac OSX

#### Autofill

  1. Fill in fields
  2. Agree to save
  3. Go back to `/`
  4. With key icon
    a. Click on the password field, there should be a key icon
    b. Click the key and chose the user-name you entered
  5. With keyboard shortcut
    a. press shift + cmd + a
  6. Automatically
    a. triggered only on https?

**Results:**
Both change and input events fire for fields.

## Usefull links:

- [W3C HTML5 spec - change and input events](http://www.w3.org/TR/2014/REC-html5-20141028/forms.html#event-input-change)
- [How to Turn Off Form Autocompletion](https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#The_autocomplete_attribute_and_login_fields)
- [Chrome autocomplete notes](http://devdocs.io/html/element/form#Google_Chrome_notes)

