//hopefully this works?

import 'react-dates/initialize';
import 'react-select/dist/react-select.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-day-picker/lib/style.css';
import './styles.scss';

import fontawesome from '@fortawesome/fontawesome';
import faInfoCircle from '@fortawesome/fontawesome-free-solid/faInfoCircle';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
fontawesome.library.add(faInfoCircle, faTimes);

import Checkbox from './Checkbox';
import ErrorFormFeedback from './ErrorFormFeedback';
import FileUploadList from './FileUploadList';
import Input from './Input';
import SelectCountry from './SelectCountry';
import SimpleSelect from './SimpleSelect';
import SLDate from './SLDate';
import SLDateRange from './SLDateRange';
import SLForm from './SLForm';
import SLFormGroup from './SLFormGroup';
import TextArea from './TextArea';

export {
	Checkbox,
	ErrorFormFeedback,
	FileUploadList,
	Input,
	SelectCountry,
	SimpleSelect,
	SLDate,
	SLDateRange,
	SLForm,
	SLFormGroup,
	TextArea
}