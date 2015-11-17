# Autofill & autocomplete test case

## Usage

```
npm i && npm start
```

Then head to [http://localhost:3000](http://localhost:3000).


## Browser testing:

### Chrome

#### Autofill

  1. Fill in user name and password
  2. Agree for chrome to save entries
  3. Go back to `/`, values should be autofilled

#### Autocomplete
  
  1. Fill in a field and submit
  2. Click on a field and start typing the same value, autocomplete dropdown should appear

## Usefull links:

- [How to Turn Off Form Autocompletion](https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#The_autocomplete_attribute_and_login_fields)
- [Chrome autocomplete notes](http://devdocs.io/html/element/form#Google_Chrome_notes)

