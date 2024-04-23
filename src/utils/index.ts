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
 * 判断url是否是http或https
 * @returns {Boolean}
 * @param url
 */
export const isHttp = (url: string): boolean => {
  return url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1
}

/**
 * 判断path是否为外链
 * @param {string} path
 * @returns {Boolean}
 */
export const isExternal = (path: string): boolean => {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 返回项目路径
 * @param p
 * @returns
 */
export const getNormalPath = (p: string): string => {
  if (p.length === 0 || !p || p === 'undefined') {
    return p
  }
  const res = p.replace('//', '/')
  if (res[res.length - 1] === '/') {
    return res.slice(0, res.length - 1)
  }
  return res
}
