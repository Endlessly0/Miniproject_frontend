import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.brown .darken3, // #E53935
            secondary: colors.brown.lighten3, // #FFCDD2
            accent: colors.orange.accent1, // #3F51B5
          },
        },
      },
})
