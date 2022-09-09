import { createApp } from 'vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'

library.add(fas)



createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
