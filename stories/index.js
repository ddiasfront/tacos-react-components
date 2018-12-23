import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { LinkComponent } from '../lib/wrapper';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { specs, describe, it } from 'storybook-addon-specifications';

const storiesLink = storiesOf('Tacos Components', module);

storiesLink
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));   

  storiesLink
    .add('Pure text inside', () => (
      <LinkComponent>
        Text
      </LinkComponent>
    ));