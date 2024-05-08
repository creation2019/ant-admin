export interface PersonVO {
  /**
   * 人员id
   */
  personId: string | number

  /**
   * sid
   */
  sid: string | number

  /**
   * 头像地址
   */
  avatar: number

  /**
   * 姓名
   */
  personName: string

  /**
   * 工号
   */
  jobNum: string

  /**
   * 用户性别（0男 1女 2未知）
   */
  sex: string

  /**
   * 身份（0企业负责人，1管理人员，2员工）
   */
  identityType: string | number

  /**
   * 证件类型（0居民身份证，1驾驶证，2港澳通行证）
   */
  idType: string | number

  /**
   * 证件号
   */
  idNum: string | number

  /**
   * 部门id
   */
  deptId: string | number

  /**
   * 岗位ID
   */
  postId: string | number

  /**
   * 年龄
   */
  age: number

  /**
   * 出生日期
   */
  birthdate: string

  /**
   * 民族
   */
  nation: string

  /**
   * 手机号码
   */
  phonenumber: string

  /**
   * 家庭住址
   */
  familyAddress: string

  /**
   * 籍贯
   */
  nativePlace: string

  /**
   * 用户ID
   */
  userId: string | number

  /**
   * 在职状态（0在职，1离职）
   */
  dimission: string
  status: string
}

export interface PersonForm extends BaseEntity {
  /**
   * 人员id
   */
  personId?: string | number

  /**
   * sid
   */
  sid?: string | number

  /**
   * 头像地址
   */
  avatar?: number

  /**
   * 姓名
   */
  personName?: string

  /**
   * 工号
   */
  jobNum?: string

  /**
   * 用户性别（0男 1女 2未知）
   */
  sex?: string

  /**
   * 身份（0企业负责人，1管理人员，2员工）
   */
  identity?: string | number

  /**
   * 证件类型（0居民身份证，1驾驶证，2港澳通行证）
   */
  idType?: string | number

  /**
   * 证件号
   */
  idNum?: string | number

  /**
   * 部门id
   */
  deptId?: string | number

  /**
   * 岗位ID
   */
  postId?: string | number

  /**
   * 年龄
   */
  age?: number

  /**
   * 出生日期
   */
  birthdate?: string

  /**
   * 民族
   */
  nation?: string

  /**
   * 手机号码
   */
  phonenumber?: string

  /**
   * 家庭住址
   */
  familyAddress?: string

  /**
   * 籍贯
   */
  nativePlace?: string

  /**
   * 用户ID
   */
  userId?: string | number

  /**
   * 在职状态（0在职，1离职）
   */
  dimission?: string
}

export interface PersonQuery extends PageQuery {
  /**
   * sid
   */
  sid?: string | number

  /**
   * 头像地址
   */
  avatar?: number

  /**
   * 姓名
   */
  personName?: string

  /**
   * 工号
   */
  jobNum?: string

  /**
   * 用户性别（0男 1女 2未知）
   */
  sex?: string

  /**
   * 身份（0企业负责人，1管理人员，2员工）
   */
  identity?: string | number

  /**
   * 证件类型（0居民身份证，1驾驶证，2港澳通行证）
   */
  idType?: string | number

  /**
   * 证件号
   */
  idNum?: string | number

  /**
   * 部门id
   */
  deptId?: string | number

  /**
   * 岗位ID
   */
  postId?: string | number

  /**
   * 年龄
   */
  age?: number

  /**
   * 出生日期
   */
  birthdate?: string

  /**
   * 民族
   */
  nation?: string

  /**
   * 手机号码
   */
  phonenumber?: string

  /**
   * 家庭住址
   */
  familyAddress?: string

  /**
   * 籍贯
   */
  nativePlace?: string

  /**
   * 用户ID
   */
  userId?: string | number

  /**
   * 在职状态（0在职，1离职）
   */
  dimission?: string
}
