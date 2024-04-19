/**
 * 转换字符串，undefined,null等转化为""
 * @param str
 * @returns
 */
export const parseStrEmpty = (str: any) => {
  if (!str || str == 'undefined' || str == 'null') {
    return ''
  }
  return str
}

/**
 * 判断path是否为外链
 * @param {string} path
 * @returns {Boolean}
 */
export const isExternal = (path: string): boolean => {
  return /^(https?:|mailto:|tel:)/.test(path)
}
