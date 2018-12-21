import { LinkComponent } from '..';

const linkStyle = {
  marginRight: 15
}

const Navbar = () => (
    <div>
        <LinkComponent href="/" linkColor="medium">
          <a style={linkStyle}>Home</a>
        </LinkComponent>
        <LinkComponent href="/about" linkColor="medium">
          <a style={linkStyle}>About</a>
        </LinkComponent>
    </div>
)

export  {Navbar}