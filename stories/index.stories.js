import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withState } from '@dump247/storybook-state';

//add fontawesome icons for testing
import fontawesome from '@fortawesome/fontawesome';
import faRocket from '@fortawesome/fontawesome-free-solid/faRocket';
fontawesome.library.add(faTimes, faPlus, faBars);

//Story components
import { 

} from '../src';

//promise function
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
