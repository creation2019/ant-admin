// 转换字符串，undefined,null等转化为""
export const parseStrEmpty = (str: any) => {
  if (!str || str == 'undefined' || str == 'null') {
    return ''
  }
  return str
}
