import React, { Component } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import {
  external_params
} from '../../index.constant'

const StyledLink = styled('a')`
color:  ${props => props.linkColor};
font-weight: bold;
cursor:pointer;
font-size: ${props => props.linkSize};
text-align: ${props => props.linkAlign};
text-indent: ${props => props.linkIndent};
line-height: ${props => props.linkLineHeight};
text-transform: ${props => props.linkTransform};
word-spacing: ${props => props.linkWordSpacing};
opacity: ${props => props.linkOpacity};
transition: ${
  props => props.transitionProperty
  };
&:visited {
  opacity: ${props => props.linkVisitedOpacity};
  color: ${props => props.visitedLinkColor};
};
&:hover {
  opacity: ${props => props.linkHoverOpacity};
  color:${props => props.hoverLinkColor}; 
}
&:active {
  opacity: ${props => props.linkActiveOpacity};
  color:${props => props.activeLinkColor}; 
}
`;

class LinkComponent extends Component {

  constructor(props) {
    super(props);
    this.routingType = external_params && external_params.routertype ? external_params.routertype : false
    this.Link = this.routingType == 'component' ? external_params.router : false
    this.nextRouting = this.nextRouting.bind(this)
    this.linkClick = this.linkClick.bind(this)
    this.state = {
      routing: false,
      nextRouting: this.routingType == 'router' ? external_params.router : false
    }
  }

  nextRouting() {
      this.state.nextRouting.push(this.props.href)
  }

  linkClick() {
    this.state.nextRouting && this.props.linkClick !== undefined ?
      this.setState({ routing: true }, () => {
        this.props.linkClick()
        this.setState({ routing: false }, () => {
          this.nextRouting();
        })
      })
      : this.props.linkClick && !this.state.nextRouting ? this.props.linkClick : false
  }

  render() {
    const Link = this.Link || false
    return (
       <StyledLink
        onClick={this.linkClick}
        linkColor={this.props.linkColor ? this.props.linkColor : false}
        visitedLinkColor={this.props.visitedLinkColor ? this.props.visitedLinkColor : false}
        hoverLinkColor={this.props.hoverLinkColor ? this.props.hoverLinkColor : false}
        activeLinkColor={this.props.activeLinkColor ? this.props.activeLinkColor : false}
        linkSize={this.props.linkSize ? this.props.linkSize : false}
        linkAlign={this.props.linkAlign ? this.props.linkAlign : false}
        linkIndent={this.props.linkIndent ? this.props.linkIndent : false}
        linkLineHeight={this.props.linkLineHeight ? this.props.linkLineHeight : false}
        linkTransform={this.props.linkTransform ? this.props.linkTransform : false}
        linkWordSpacing={this.props.linkWordSpacing ? this.props.linkWordSpacing : false}
      >
       {
        Link instanceof Function ? <Link to={this.props.href}>{this.props.children}</Link> : this.props.children
      }
        
      </StyledLink> 
    ) 
  }
}

LinkComponent.propTypes = {
  nextRouting: PropTypes.func,
  linkColor: PropTypes.string,
  visitedLinkColor: PropTypes.string,
  hoverLinkColor: PropTypes.string,
  activeLinkColor: PropTypes.string,
  linkSize: PropTypes.string,
  linkAlign: PropTypes.string,
  linkIndent: PropTypes.string,
  linkLineHeight: PropTypes.string,
  linkTransform: PropTypes.string,
  linkWordSpacing: PropTypes.string,
  transitionProperty: PropTypes.string,
  linkClick: PropTypes.func
}

export { LinkComponent }