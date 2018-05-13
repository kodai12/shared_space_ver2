import { storiesOf } from '@storybook/vue';
import { LinksTo } from '@storybook/addon-links';
import { withKnobs, text, color } from '@storybook/addon-knobs';
import Centered from '@storybook/addon-centered';

import composeButton from '../components/composeButton.vue';
import UserNameList from '../components/UserNameList.vue';

storiesOf('composeButton', module)
  .addDecorator(Centered)
  .add('simple', () => ({
    components: { composeButton },
    template: '<composeButton></composeButton>',
  }));

storiesOf('UserNameList', module)
  .addDecorator(Centered)
  .add('simple', () => ({
    components: { UserNameList },
    template: '<UserNameList></UserNameList>',
  }));
