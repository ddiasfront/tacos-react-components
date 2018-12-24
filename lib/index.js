
import {
  LinkComponent
} from './wrapper'
import { external_params } from './index.constant';

const intializer = {
  initializeRouter:(router)=>{
    const routeType = router.hasOwnProperty('push') ? 'routing' : router instanceof Function ? 'component' : undefined;
    external_params.router = router;
    external_params.routertype = routeType;
  }
}

module.exports = {
  LinkComponent, intializer
};
