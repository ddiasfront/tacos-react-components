## Simple React Components. :bento:

## Supports react-router Link and NextJS Router, if you preffer you can simply add the linkwrapper component to your links

  ```
    import { LinkWrapperComponent } from '../components/LinkWrapperComponent'
 
  <LinkWrapperComponent linkColor={'#000'} hoverLinkColor={'#dedede'} transitionProperty={'all 0.5s ease-out'} href="/routetest">
        <Link href="/routetest">Next Routing Support</Link>
      </LinkWrapperComponent><br/>
  ```
  
  ## If you preffer, use the router and link loader, Config your app.js calling the method initialize and pass the react-router link or nextjs router.
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