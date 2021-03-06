import Component from './';
import model from './model';
import mocks from './mocks.json';
import { storiesOf } from '@storybook/react';
import LinkTo from '@storybook/addon-links/react';

import Tile from '../../components/tile'
import Preset3 from './preset3-1'
import Preset4 from './preset4-1'
import Preset5 from './preset5-1'
import PresetFlex from './preset-flex'

mocks.forEach((variation) => {
  storiesOf(model.name, Component)
  .addParameters({ component: Component })
  .add(variation.name, () =>
  <>
    <LinkTo kind="Components/Tile" story="Default">See Tile Component</LinkTo>
    Layout Presets applied automatically depending on the number of tiles configured.
    <ul>
      <li><LinkTo story="Preset 3">with 3 tiles</LinkTo></li>
      <li><LinkTo story="Preset 4">with 4 tiles</LinkTo></li>
      <li><LinkTo story="Preset 5">with 5 tiles</LinkTo></li>
      <li><LinkTo story="Preset Flex">with 6 tiles</LinkTo></li>
    </ul>
    <Component slice={variation} />
  </>);
});

const SampleTile = () => (
  <Tile
    avatar="https://picsum.photos/seed/picsum/50"
    cta="Read more"
    title="Lorem Ipsum"
    summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    image="https://picsum.photos/seed/picsum/640/480"
    link="https://www.lipsum.com/"
    tags={[]}
    overlayColor="rgba(0, 0, 0, 0.3)"
    overlayColorStart="rgba(173,252,234,0.5)"
    overlayColorEnd="rgba(192,229,246, 0.5)"
  />
)

storiesOf(model.name, Component)
  .addParameters({ component: Preset3 })
  .addParameters({ component: Preset4 })
  .addParameters({ component: Preset5 })
  .addParameters({ component: PresetFlex })
  .add('Preset 3', () => (
    <Preset3>
      <SampleTile />
      <SampleTile />
      <SampleTile />
    </Preset3>
  ))
  .add('Preset 4', () => (
    <Preset4>
      <SampleTile />
      <SampleTile />
      <SampleTile />
      <SampleTile />
    </Preset4>
  ))
  .add('Preset 5', () => (
    <Preset5>
      <SampleTile />
      <SampleTile />
      <SampleTile />
      <SampleTile />
      <SampleTile />
    </Preset5>
  ))
  .add('Preset Flex', () => (
    <PresetFlex>
      <SampleTile />
      <SampleTile />
      <SampleTile />
      <SampleTile />
      <SampleTile />
      <SampleTile />
      <SampleTile />
    </PresetFlex>
  ))
