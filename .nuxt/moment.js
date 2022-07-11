import moment from 'moment'

import 'moment/locale/fr'

moment.locale('fr')

export default (ctx, inject) => {
  ctx.$moment = moment
  inject('moment', moment)
}
