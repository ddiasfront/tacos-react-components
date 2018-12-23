## Simple React Components. :bento:

## Supports react-router Link and NextJS Router
  ## Config your app.js calling the method initialize and pass the react-router link or nextjs router.
    ### If you are using nextjs youll need a custom _app.js config 
  ```
    import Router from 'next/router'
    import  {intializer} from 'tacos-components'
 
    constructor(props) {
      super(props)
      intializer.initializeRouter(Router)
    }
  ```
    ### If you are using react-router

      ```
    
    import { Link } from 'react-router-dom';
    import  {intializer} from 'tacos-components'
 
    constructor(props) {
      super(props)
      intializer.initializeRouter(Link)
    }
  ```