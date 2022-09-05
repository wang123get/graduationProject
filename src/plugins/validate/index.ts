import * as veeValidate from 'vee-validate'
import rules from '@vee-validate/rules'
import regexCode from './config/regexCode'
import yup from '@/plugins/validate/yup'

import { localize } from '@vee-validate/i18n'
import zh_CH from '@vee-validate/i18n/dist/locale/zh_CN.json'

veeValidate.configure({
  generateMessage: localize('zh_CH', zh_CH)
})

Object.keys(rules).forEach((key) => {
  veeValidate.defineRule(key, rules[key])
})

const modules = { yup, ...veeValidate, regexCode }

export default modules
