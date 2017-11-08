export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}
export function getData(el, name, val) {
  const prefix = 'data-'
  if (val) {
    return el.setAttribute(prefix + name, val)
  }
  return el.getAttribute(prefix + name)
}
let elementStyle = document.createElement('div').style
let vander = (() => {
  let transformNames = {
    webkit: 'webketTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }
  for (let i in transformNames) {
    if (elementStyle[transformNames[i]] !== undefined) {
      return i
    }
    return false
  }
})()
export function prefixStyle (style) {
  if (!vander) {
    return false
  }
  if (vander === 'standard') {
    return style
  }
  return vander + style.charAt(0) + style.substr(1)
}
