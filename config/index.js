export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  APP_ID: "wx5731dd88046a734b",

  // 公众号APP_SECRET
  APP_SECRET: "fed68f02e6e85339472af0de4dd91f5b",

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
   * [
   *  {
   *    // 想要发送的人的名字
   *    name: "老婆0",
   *    // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
   *    id: "ohxOO6VskYv0Kuf-ywIZVRMpuXhk",
   *    // 你想对他发送的模板消息的模板ID
   *    useTemplateId: "zjVglIuCXo4CsraXWEio1iP7sZJ7IQEES9lDsgc4yOU",
   *    // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
   *    openUrl: "https://wangxinleo.cn"
   *   }, 
   * ]
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "Lordyan",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oE5UL64ClUbOPKsTmmfUTFtNzO8w",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "CFpmI1jbVZGbEAnZiwBRsNIVZzDvW-M14pVTKyKvufM",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://www.xzw.com/fortune/Gemini/"
    }, 
    {
      name: "小潘", 
      id: "oE5UL69BDF_BdUf0Lz3GkjbtLdIM",
      useTemplateId: "CFpmI1jbVZGbEAnZiwBRsNIVZzDvW-M14pVTKyKvufM",
      openUrl: "https://www.xzw.com/fortune/Gemini/"
    },  
  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "zjVglIuCXo34CsraXWEio1i3P7sZJ7IQEES93lDsgc4yOU",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "闫孟儒",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oE5UL64ClUbOPKsTmmfUTFtNzO8w",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 所在省份
  PROVINCE: "云南",
  // 所在城市
  CITY: "昆明",
  
  // 所在省份

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "小潘", "year": "1998", "date": "06-02"},
    {"type": "生日", "name": "夏洛克", "year": "1998", "date": "05-23"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 2,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2022-07-12"},
    // 退伍日, 不用可以删掉
    {"keyword": "birthday1", date: "1998-06-02"},
    // sakana日
    {"keyword": "birthday2", date: "1998-05-23"},
    // shengri
    {"keyword": "birthday3", date: "1999-12-15"},
    // ... 
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    //{"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "I copied the love words, but I love you really.",
      "He never says tired, but he hopes you will accompany him.",
      "Maybe it's just the right time. You have a smile around your eyes.",
      "Miss, not wrong, but over.",
      "A person, a city, a lifetime of heartache.",
      "It's cold. I want to drink and care for you.",
    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
