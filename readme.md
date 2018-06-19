
## Checkbox

From [`src/Checkbox.jsx`](src/Checkbox.jsx)

Checkbox component using react-switch

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**disabled** | `Boolean` | `false` | :x: | true to disable toggling
**onChange** | `Function` |  | :white_check_mark: | callback when toggled
**value** | `Boolean` |  | :x: | value of the component




## ErrorFormFeedback

From [`src/ErrorFormFeedback.jsx`](src/ErrorFormFeedback.jsx)

Display errors underneath an input component

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**errors** | `Union<Array \| String>` |  | :x: | List of errors to display, can be an array or string




## FileUploadList

From [`src/FileUploadList.jsx`](src/FileUploadList.jsx)

Displays a dropzone for files
Dropped files are displayed as a table with option to remove them individually

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**dropText** | `Union<String \| Object>` | `'Drag Here to upload'` | :x: | Text or JSX to display in the dropzone
**files** | `Array` |  | :x: | list of files to display, can leave blank to not have table shown
**onDrop** | `Function` |  | :white_check_mark: | callback for when a file is dropped
**onRemove** | `Function` |  | :x: | Callback for when a file is removed required if files prop is not blank




## Input

From [`src/Input.jsx`](src/Input.jsx)

Thing wrapper on input tag
Displays errors below input

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**className** | `String` |  | :x: | additional classnames to add to input tag
**disabled** | `Boolean` | `false` | :x: | true to disable input
**errorText** | `Union<String \| Array>` |  | :x: | Errors to display, should be a string or array of strings @type {[type]}
**onChange** | `Function` |  | :white_check_mark: | Callback when updated
**type** | `String` | `'text'` | :x: | type of input
**value** | `*` |  | :x: | value of component




## SLDate

From [`src/SLDate.jsx`](src/SLDate.jsx)

Date Input component

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**disabled** | `Boolean` | `false` | :x: | true to disable toggling
**format** | `String` | `'MM/DD/YYYY'` | :x: | How to Format the Presented Date
**inputProps** | `Object` |  | :x: | Additional props to add to the input
**onChange** | `Function` |  | :white_check_mark: | callback when date is selected
**openLeft** | `Boolean` | `false` | :x: | offset to display calendar in pixels
**timezone** | `String` |  | :x: | Timezone to use for for display
**value** | `Union<String \| Object>` |  | :x: | Current date to display should be a string, Date(), or moment()




## SLDateRange

From [`src/SLDateRange.jsx`](src/SLDateRange.jsx)

Input which allows user to pick a range of dates
wrapper on react-dates

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**buttonText** | `String` | `'Filter'` | :x: | Text for button
**disabled** | `Boolean` | `false` | :x: | true to disable toggling
**endDate** | `Union<String \| Object>` |  | :x: | value to use as end date
**id** | `String` |  | :white_check_mark: | Unique ID required
**onChange** | `Function` |  | :white_check_mark: | callback when start or end date changes
**startDate** | `Union<String \| Object>` |  | :x: | value to use as startDate




## SLDateTime

From [`src/SLDateTime.jsx`](src/SLDateTime.jsx)



prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**dateFormat** | `String` | `'MM/DD/YYYY'` | :x: | How to Format the Presented Date
**disabled** | `Boolean` | `false` | :x: | true to disable toggling
**inputProps** | `Object` |  | :x: | Additional props to add to the input
**onChange** | `Function` |  | :white_check_mark: | callback when date is selected
**openLeft** | `Unknown` | `false` | :x: | 
**timezone** | `String` |  | :x: | Timezone to use for for display
**value** | `Union<String \| Object>` |  | :x: | Current date to display should be a string, Date(), or moment()




## SLForm

From [`src/SLForm.jsx`](src/SLForm.jsx)

Form Component to display as a modal or not

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**Button** | `Function` |  | :x: | Function that returns a button * this is passed a cb for the buttons onclick method   toggle => <button onClick={toggle}>Btn</button>
**fields** | `Object` |  | :white_check_mark: | Form fields to display, should be JSX * recommended to use SLFormGroup wrapped components for best presentation
**formInValid** | `Boolean` |  | :x: | Set to true if the form is not valid this will disable the submit button
**header** | `String` |  | :x: | Header Text for Modal *required if notModal={false}
**notModal** | `Boolean` |  | :x: | Set true if the form should not be a modal
**onSubmit** | `Function` |  | :white_check_mark: | Callback when form is submitted, expected to return Promise
**onToggle** | `Function` |  | :x: | callback for when the modal is toggled open
**size** | `Enum('sm','md','lg','xl')` |  | :x: | size of the modal
**submitButton** | `Function` |  | :x: | If notModal={true} a custom submit button may be used * this is passed a callback for submit and formInvalid (submit, invalid) => <button disabled={invalid} onClick={submit}>submit</button>




## SLFormGroup

From [`src/SLFormGroup.jsx`](src/SLFormGroup.jsx)

Wrapper for a form input which will display labels and align elements nicely in an SLForm

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**check** | `Boolean` | `false` | :x: | Set to true if the input is a check or radio to display label correctly
**helpText** | `String` |  | :x: | Help text to display when hovering over help icon * useful for giving context to an input value
**hideLabel** | `Boolean` | `false` | :x: | Set true to hide the label component
**input** | `Object` |  | :white_check_mark: | Form Input JSX
**label** | `String` |  | :x: | Input Label Text




## SelectCountry

From [`src/SelectCountry.jsx`](src/SelectCountry.jsx)

Select a country code in a dropdown

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**disabled** | `Boolean` | `false` | :x: | true to disable toggling
**onChange** | `Function` |  | :white_check_mark: | callback when a country is selected
**value** | `Object` |  | :x: | current selected country




## SimpleSelect

From [`src/SimpleSelect.jsx`](src/SimpleSelect.jsx)

Simplified wrapper of react-select

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**disabled** | `Boolean` | `false` | :x: | true to disable toggling
**labelField** | `String` | `'label'` | :x: | object key to use as the label
**onChange** | `Function` |  | :white_check_mark: | callback when option selected
**options** | `Array` |  | :white_check_mark: | array of objects to choose from should have keys with value of valueField and labelField props
**valueField** | `String` | `'_id'` | :x: | object key to use for the value




## TextArea

From [`src/TextArea.jsx`](src/TextArea.jsx)

Thing wrapper on textarea tag
Displays errors below input

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**className** | `String` |  | :x: | additional classnames to add to input tag
**disabled** | `Boolean` | `false` | :x: | true to disable toggling
**onChange** | `Function` |  | :white_check_mark: | Callback when updated
**value** | `*` |  | :x: | value of component



