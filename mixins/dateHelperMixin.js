import { convertToLocaleDateString } from '@/modules/helpers/dateHelper'

export default {
  methods: {
    getFormattedDate(date, locale, options) {
      return convertToLocaleDateString(date, locale, options)
    },
  },
}
