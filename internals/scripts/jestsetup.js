import 'regenerator-runtime/runtime'
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
process.env.API_HOST = 'api_dev';
jest.setTimeout(30000);
Enzyme.configure({
  adapter: new EnzymeAdapter()
})