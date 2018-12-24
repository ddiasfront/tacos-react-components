import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { LinkComponent } from '../lib/wrapper';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { specs, describe, it } from 'storybook-addon-specifications';

import {mount} from "enzyme";
import expect from "expect";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const storiesLink = storiesOf('Tacos Components', module);
storiesLink.addDecorator(withKnobs)

storiesLink
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));   

  storiesLink
    .add('Pure text inside', () => {
      return (
        <LinkComponent href={'/about'} >123</LinkComponent>
      )
    })

  storiesLink.add('Link with text', () => {
    const story =
    <button onClick={action('Hello World')}>
      Hello World
    </button>;

    specs(() => describe('Hello World', function () {
      it('Should have the Hello World label', function () {
        let output = mount(story);
        expect(output.text()).toContain('Hello World');
      });
    }));
    return story
  })