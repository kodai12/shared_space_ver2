import { storiesOf } from '@storybook/vue';
import { LinksTo } from '@storybook/addon-links';
import { withKnobs, text, color } from '@storybook/addon-knobs';
import Centered from '@storybook/addon-centered';

import composeButton from '../components/composeButton.vue';

storiesOf('composeButton', module)
  .addDecorator(Centered)
  .add('simple', () => ({
    components: { composeButton },
    template: '<composeButton></composeButton>',
  }));
