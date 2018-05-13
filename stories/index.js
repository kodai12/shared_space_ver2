import { storiesOf } from '@storybook/vue';

import composeButton from '../components/composeButton.vue';

storiesOf('composeButton', module)
  .add('simple', () => ({
    components: { composeButton },
    template: '<composeButton></composeButton>',
  }));
