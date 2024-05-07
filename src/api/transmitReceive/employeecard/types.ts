export interface CardCardholderVO {
  /**
   * 卡id
   */
  cardId: string | number

  /**
   * 持卡人id
   */
  cardholderId: string | number

  /**
   * 持卡人身份（0员工，1承包商，2临时人员）
   */
  cardholderIdentity: string | number

  /**
   * 发卡方式（0固定，1临时）
   */
  issueWay: string

  /**
   * 门禁
   */
  entrance: string

  /**
   * 抵押方式（0无，1现金）
   */
  meansMortgage: string

  /**
   * 抵押金额
   */
  mortgageAmount: string

  /**
   * 是否补卡(0否，1是)
   */
  isCredit: string

  /**
   * 补卡付款金额
   */
  creditCardAmount: string
}

export interface CardCardholderForm extends BaseEntity {
  /**
   * 卡id
   */
  cardId?: string | number

  /**
   * 持卡人id
   */
  cardholderId?: string | number

  /**
   * 持卡人身份（0员工，1承包商，2临时人员）
   */
  cardholderIdentity?: string | number

  /**
   * 发卡方式（0固定，1临时）
   */
  issueWay?: string

  /**
   * 门禁
   */
  entrance?: string

  /**
   * 抵押方式（0无，1现金）
   */
  meansMortgage?: string

  /**
   * 抵押金额
   */
  mortgageAmount?: string

  /**
   * 是否补卡(0否，1是)
   */
  isCredit?: string

  /**
   * 补卡付款金额
   */
  creditCardAmount?: string
}

export interface CardCardholderQuery extends PageQuery {
  /**
   * 卡id
   */
  cardId?: string | number

  /**
   * 持卡人id
   */
  cardholderId?: string | number

  /**
   * 持卡人身份（0员工，1承包商，2临时人员）
   */
  cardholderIdentity?: string | number

  /**
   * 发卡方式（0固定，1临时）
   */
  issueWay?: string

  /**
   * 门禁
   */
  entrance?: string

  /**
   * 抵押方式（0无，1现金）
   */
  meansMortgage?: string

  /**
   * 抵押金额
   */
  mortgageAmount?: string

  /**
   * 是否补卡(0否，1是)
   */
  isCredit?: string

  /**
   * 补卡付款金额
   */
  creditCardAmount?: string
}
