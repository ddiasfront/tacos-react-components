import {Navbar} from '../'
import Head from 'next/head'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  fontFamily: "'Lato', 'sans-serif'"
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet"></link>
    </Head>
    <Navbar />
    {props.children}
  </div>
)

export {Layout}