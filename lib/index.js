
// import ReactStripeConnectForm from './wrapper/ReactStripeConnectForm';
import {
  LinkComponent
} from './wrapper'
import { external_params } from './index.constant';

const intializer = {
  initializeRouter:(router)=>{
    external_params.router = router;
  }
}

module.exports = {
  LinkComponent, intializer
};
