'use strict'

document.addEventListener('DOMContentLoaded', () => {
  let body = document.getElementsByTagName('body')[0]

  body.innerHTML = body.innerHTML.replace(/<.+?>/g, tag => {
    let expandAttribute = name => text => {
      return ' ' + name + '="' + text.slice(1, -1) + '"' + text.slice(-1)
    }

    tag = tag.replace(/#.+?[^\w^\-]/,  expandAttribute('id'))
    tag = tag.replace(/\..+?[^\w^\-]/, expandAttribute('class'))

    return tag
  })
})
