import "!style-loader!css-loader!../styles/global.css";
import "!style-loader!css-loader!../styles/reset.css";
import "!style-loader!css-loader!splitting/dist/splitting.css";
import "!style-loader!css-loader!splitting/dist/splitting-cells.css";

import { addDecorator } from "@storybook/react"
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addParameters } from '@storybook/client-api';
import ThemeDecorator from './theme-decorator';
import { sortStories } from './utils'

const SORT_ORDER = {
  Introduction: ['Welcome', 'Getting Started', 'Contributing', 'Changelog']
}

addDecorator(withKnobs);
addDecorator(ThemeDecorator);
addParameters({
  options: {
    storySort: sortStories(SORT_ORDER),
    showRoots: true,
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS
    }
  }
});
