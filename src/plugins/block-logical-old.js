import prefix from '../prefix'
import camelize from '../camelize'

// Support old block-logical syntax.
// See https://github.com/postcss/autoprefixer/issues/324.
export default {
  supportedProperty: (prop, style) => {
    let newProp
    if (prop.match(/^(border|margin|padding)-block-start/)) {
      newProp = prop.replace('-block-start', '-before')
    }
    if (prop.match(/^(border|margin|padding)-block-end/)) {
      newProp = prop.replace('-block-end', '-after')
    }
    if (!newProp) {
      return false
    }
    return prefix.js + camelize(`-${newProp}`) in style ? prefix.css + newProp : false
  },
}
