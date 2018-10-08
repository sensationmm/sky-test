const Enzyme = require('enzyme');

// this is where we reference the adapter package we installed earlier
import EnzymeAdapter from 'enzyme-adapter-react-16';

// This sets up the adapter to be used by Enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });