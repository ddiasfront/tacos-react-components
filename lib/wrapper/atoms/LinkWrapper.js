import React, { Component } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const StyledLink = styled('div')`
a{
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
}
`;

class LinkWrapperComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
       <StyledLink
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
        transitionProperty={this.props.transitionProperty ? this.props.transitionProperty : false}
      >
        {this.props.children}
      </StyledLink> 
    ) 
  }
}

LinkWrapperComponent.propTypes = {
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
  transitionProperty: PropTypes.string
}

export { LinkWrapperComponent }