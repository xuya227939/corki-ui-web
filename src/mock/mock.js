import Mock from 'mockjs';

const getCard = Mock.mock(location.origin + '/api/card.json', 'get', {
    'listData': [
        {
            'title': 'Affix',
            'small': '图钉',
            'href': '/components/affix',
            'isSubMenu': 1
        },
        {
            'title': 'Alert',
            'small': '警告提示',
            'href': '/components/alert',
            'isSubMenu': 1
        },
        {
            'title': 'Button',
            'small': '按钮',
            'href': '/components/button',
            'isSubMenu': 1
        },
        {
            'title': 'Badge',
            'small': '徽标数',
            'href': '/components/badge',
            'isSubMenu': 1
        },
        {
            'title': 'Checkbox',
            'small': '多选框',
            'href': '/components/checkbox',
            'isSubMenu': 1
        },
        {
            'title': 'Empty',
            'small': '空状态',
            'href': '/components/empty',
            'isSubMenu': 1
        },
        {
            'title': 'Input',
            'small': '输入框',
            'href': '/components/input',
            'isSubMenu': 1
        },
        {
            'title': 'Message',
            'small': '全局消息提示',
            'href': '/components/message',
            'isSubMenu': 1
        },
        {
            'title': 'Modal',
            'small': '模态对话框',
            'href': '/components/modal',
            'isSubMenu': 1
        },
        {
            'title': 'Preview',
            'small': '预览',
            'href': '/components/preview',
            'isSubMenu': 1
        },
        {
            'title': 'Progress',
            'small': '进度条',
            'href': '/components/progress',
            'isSubMenu': 1
        },
        {
            'title': 'Radio',
            'small': '单选框',
            'href': '/components/radio',
            'isSubMenu': 1
        },
        {
            'title': 'Select',
            'small': '选择器',
            'href': '/components/select',
            'isSubMenu': 1
        },
        {
            'title': 'Switch',
            'small': '开关',
            'href': '/components/switch',
            'isSubMenu': 1
        },
        {
            'title': 'Slider',
            'small': '滑动输入条',
            'href': '/components/slider',
            'isSubMenu': 1
        },
        {
            'title': 'Tag',
            'small': '标签',
            'href': '/components/tag',
            'isSubMenu': 1
        },
        {
            'title': 'Tooltip',
            'small': '文字提示',
            'href': '/components/tooltip',
            'isSubMenu': 1
        },
        {
            'title': 'VerificationCode',
            'small': '图形验证码',
            'href': '/components/verificationCode',
            'isSubMenu': 1
        },
        {
            'title': 'Corki UI of React',
            'small': '',
            'href': '/components/introduce',
            'isSubMenu': 0
        },
        {
            'title': '更新日志',
            'small': '',
            'href': '/components/changeLog',
            'isSubMenu': 0
        },
        {
            'title': '关于',
            'small': '',
            'href': '/components/about',
            'isSubMenu': 0
        }
    ]
});

const getBasicComponents = Mock.mock(RegExp(location.origin + '/api/basicComponents.json' + '*'), 'get', (data) => {
    const datas = [
        {
            title: 'Button',
            subTitle: '按钮',
            subDescribe: '按钮用于开始一个即时操作。',
            whenUse: '何时使用',
            assemblyDescribe: '标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。',
            codeDemo: '代码演示',
            codeBoxTitle: '按钮类型',
            codeBoxDescription: '按钮有四种类型：主按钮、次按钮、危险按钮和不可点击按钮。主按钮在同一个操作区域最多出现一次。',
            api: 'API',
            apiDescription: '按钮的属性说明如下：',
            dataSource: '[{"key":"1","attribute":"disabled","explain":"按钮失效状态","type":"boolean","default":"false"},{"key":"2","attribute":"htmlType","explain":"设置 button 原生的 type 值，可选值请参考 HTML 标准","type":"string","default":"button"},{"key":"3","attribute":"type","explain":"设置按钮类型，可选值为 primary danger 或者不设","type":"string","default":"-"},{"key":"4","attribute":"className","explain":"样式设置","type":"string","default":"-"},{"key":"5","attribute":"onClick","explain":"点击按钮时的回调","type":"func","default":"(event) => void"}]',
            dataColumns: '[{"title":"属性","dataIndex":"attribute","key":"attribute"},{"title":"说明","dataIndex":"explain","key":"explain"},{"title":"类型","dataIndex":"type","key":"type"},{"title":"默认值","dataIndex":"default","key":"default"}]'
        },
        {
            title: 'Checkbox',
            subTitle: '多选框',
            subDescribe: '多选框。',
            whenUse: '何时使用',
            assemblyDescribe: '在一组可选项中进行多项选择时',
            codeDemo: '代码演示',
            codeBoxTitle: '基本使用',
            codeBoxDescription: '简单的 checkbox。',
            api: 'API',
            apiDescription: 'Checkbox',
            dataSource: '[{"key":"1","attribute":"defaultChecked","explain":"初始是否选中","type":"boolean","default":"false"},{"key":"2","attribute":"disabled","explain":"失效状态","type":"boolean","default":"false"},{"key":"3","attribute":"checked","explain":"指定当前是否选中","type":"boolean","default":"false"},{"key":"4","attribute":"onChange","explain":"变化时回调函数","type":"Function(e:Event)","default":"-"}]',
            dataColumns: '[{"title":"属性","dataIndex":"attribute","key":"attribute"},{"title":"说明","dataIndex":"explain","key":"explain"},{"title":"类型","dataIndex":"type","key":"type"},{"title":"默认值","dataIndex":"default","key":"default"}]'
        },
        {
            title: 'Input',
            subTitle: '输入框',
            subDescribe: '通过鼠标或键盘输入内容，是最基础的表单域的包装。',
            whenUse: '何时使用',
            assemblyDescribe: '需要用户输入表单域内容时。',
            codeDemo: '代码演示',
            codeBoxTitle: '基本使用',
            codeBoxDescription: '基本使用。',
            api: 'API',
            apiDescription: 'Input',
            dataSource: '[{"key":"1","attribute":"className","explain":"样式","type":"string","default":"-"},{"key":"2","attribute":"defaultValue","explain":"输入框默认内容","type":"string","default":"-"},{"key":"3","attribute":"disabled","explain":"是否禁用状态，默认为 false","type":"bool","default":"false"},{"key":"4","attribute":"type","explain":"声明 input 类型，同原生 input 标签的 type 属性","type":"string","default":"text"},{"key":"5","attribute":"value","explain":"输入框内容","type":"string","default":"-"},{"key":"6","attribute":"onChange","explain":"输入框内容变化时的回调","type":"function(e)","default":"-"}]',
            dataColumns: '[{"title":"属性","dataIndex":"attribute","key":"attribute"},{"title":"说明","dataIndex":"explain","key":"explain"},{"title":"类型","dataIndex":"type","key":"type"},{"title":"默认值","dataIndex":"default","key":"default"}]'
        },
        {
            title: 'Message',
            subTitle: '全局提示',
            subDescribe: '全局展示操作反馈信息。',
            whenUse: '何时使用',
            assemblyDescribe: '顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。',
            codeDemo: '代码演示',
            codeBoxTitle: '普通提示',
            codeBoxDescription: '信息提醒反馈。',
            api: 'API',
            apiDescription: '按钮的属性说明如下：',
            dataSource: '[{"key":"1","attribute":"open(test, 3)","explain":"打开全局消息通知","type":"func","default":"-"},{"key":"2","attribute":"destroy","explain":"清除所有消息通知","type":"func","default":"-"}]',
            dataColumns: '[{"title":"属性","dataIndex":"attribute","key":"attribute"},{"title":"说明","dataIndex":"explain","key":"explain"},{"title":"类型","dataIndex":"type","key":"type"},{"title":"默认值","dataIndex":"default","key":"default"}]'
        },
        {
            title: 'Modal',
            subTitle: '对话框',
            subDescribe: '模态对话框。',
            whenUse: '何时使用',
            assemblyDescribe: '需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮',
            codeDemo: '代码演示',
            codeBoxTitle: '基本',
            codeBoxDescription: '第一个对话框。',
            api: 'API',
            apiDescription: 'Modal',
            dataSource: '[{"key":"1","attribute":"visible","explain":"Modal是否显示","type":"bool","default":"false"},{"key":"2","attribute":"title","explain":"弹窗标题","type":"string","default":"test"},{"key":"3","attribute":"cancelText","explain":"取消文案","type":"string","default":"取消"},{"key":"4","attribute":"confirmText","explain":"确认文案","type":"string","default":"确认"},{"key":"5","attribute":"cancel","explain":"取消回调","type":"func","default":"-"},{"key":"6","attribute":"confirm","explain":"确认回调","type":"func","default":"-"},{"key":"7","attribute":"keyboard","explain":"是否支持键盘 esc 关闭","type":"boolean","default":"true"}]',
            dataColumns: '[{"title":"属性","dataIndex":"attribute","key":"attribute"},{"title":"说明","dataIndex":"explain","key":"explain"},{"title":"类型","dataIndex":"type","key":"type"},{"title":"默认值","dataIndex":"default","key":"default"}]'
        },
        {
            title: 'Preview',
            subTitle: '预览',
            subDescribe: '可缩小、放大、拖拽',
            whenUse: '何时使用',
            assemblyDescribe: '需要向用户展示一些大的图片并能够自行放大和缩小的时候',
            codeDemo: '代码演示',
            codeBoxTitle: '基本',
            codeBoxDescription: '第一个预览框。',
            api: 'API',
            apiDescription: 'Preview',
            dataSource: '[{"key":"1","attribute":"url","explain":"图片链接，必须是在网络上能够打开","type":"string","default":"-"},{"key":"2","attribute":"onClose","explain":"关闭方法","type":"func","default":"-"}]',
            dataColumns: '[{"title":"属性","dataIndex":"attribute","key":"attribute"},{"title":"说明","dataIndex":"explain","key":"explain"},{"title":"类型","dataIndex":"type","key":"type"},{"title":"默认值","dataIndex":"default","key":"default"}]'
        },
        {
            title: 'Progress',
            subTitle: '进度条',
            subDescribe: '展示操作的当前进度。',
            whenUse: '何时使用',
            assemblyDescribe: '在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。',
            codeDemo: '代码演示',
            codeBoxTitle: '进度条',
            codeBoxDescription: '标准的进度条。',
            api: 'API',
            apiDescription: '各类型共用的属性。',
            dataSource: '[{"key":"1","attribute":"strokeColor","explain":"进度条颜色","type":"string","default":"red"},{"key":"2","attribute":"percent","explain":"进度条百分比","type":"number","default":"0"}]',
            dataColumns: '[{"title":"属性","dataIndex":"attribute","key":"attribute"},{"title":"说明","dataIndex":"explain","key":"explain"},{"title":"类型","dataIndex":"type","key":"type"},{"title":"默认值","dataIndex":"default","key":"default"}]'
        },
        {
            title: 'Radio',
            subTitle: '单选框',
            subDescribe: '单选框。',
            whenUse: '何时使用',
            assemblyDescribe: '用于在多个备选项中选中单个状态。',
            codeDemo: '代码演示',
            codeBoxTitle: '基本',
            codeBoxDescription: '最简单的用法。',
            api: 'API',
            apiDescription: 'Radio',
            dataSource: '[{"key":"1","attribute":"checked","explain":"指定当前是否选中","type":"boolean","default":"false"},{"key":"2","attribute":"onChange","explain":"变化时回调函数","type":"func","default":"-"},{"key":"3","attribute":"className","explain":"Radio 器类名","type":"string","default":"-"},{"key":"4","attribute":"defaultChecked","explain":"初始是否选中","type":"boolean","default":"false"},{"key":"5","attribute":"disabled","explain":"是否禁用","type":"boolean","default":"false"}]',
            dataColumns: '[{"title":"属性","dataIndex":"attribute","key":"attribute"},{"title":"说明","dataIndex":"explain","key":"explain"},{"title":"类型","dataIndex":"type","key":"type"},{"title":"默认值","dataIndex":"default","key":"default"}]'
        },
        {
            title: 'Select',
            subTitle: '选择器',
            subDescribe: '下拉选择器。',
            whenUse: '何时使用',
            assemblyDescribe: '弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。',
            codeDemo: '代码演示',
            codeBoxTitle: '基本使用',
            codeBoxDescription: '基本使用。',
            api: 'API',
            apiDescription: 'Select props',
            dataSource: '[{"key":"1","attribute":"defaultValue","explain":"指定默认选中的条目","type":"string","default":"-"},{"key":"2","attribute":"disabled","explain":"是否禁用","type":"boolean","default":"false"},{"key":"3","attribute":"value","explain":"指定当前选中的条目","type":"string","default":"-"},{"key":"4","attribute":"onChange","explain":"选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数  ","type":"function(value, option:Option/Array<Option>)","default":"-"}]',
            dataColumns: '[{"title":"属性","dataIndex":"attribute","key":"attribute"},{"title":"说明","dataIndex":"explain","key":"explain"},{"title":"类型","dataIndex":"type","key":"type"},{"title":"默认值","dataIndex":"default","key":"default"}]'
        },
        {
            title: 'Switch',
            subTitle: '开关',
            subDescribe: '开关选择器。',
            whenUse: '何时使用',
            assemblyDescribe: '需要表示开关状态/两种状态之间的切换时。',
            codeDemo: '代码演示',
            codeBoxTitle: '基本',
            codeBoxDescription: '最简单的用法。',
            api: 'API',
            apiDescription: 'Switch',
            dataSource: '[{"key":"1","attribute":"checked","explain":"指定当前是否选中","type":"boolean","default":"false"},{"key":"2","attribute":"onChange","explain":"变化时回调函数","type":"func","default":"-"},{"key":"3","attribute":"className","explain":"Switch 器类名","type":"string","default":"-"},{"key":"4","attribute":"defaultChecked","explain":"初始是否选中","type":"boolean","default":"false"},{"key":"5","attribute":"disabled","explain":"是否禁用","type":"boolean","default":"false"}]',
            dataColumns: '[{"title":"属性","dataIndex":"attribute","key":"attribute"},{"title":"说明","dataIndex":"explain","key":"explain"},{"title":"类型","dataIndex":"type","key":"type"},{"title":"默认值","dataIndex":"default","key":"default"}]'
        },
        {
            title: 'Slider',
            subTitle: '滑动输入条',
            subDescribe: '滑动型输入器，展示当前值和可选范围。',
            whenUse: '何时使用',
            assemblyDescribe: '当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。',
            codeDemo: '代码演示',
            codeBoxTitle: '基本',
            codeBoxDescription: '基本滑动条。',
            api: 'API',
            apiDescription: 'Slider',
            dataSource: '[{"key":"1","attribute":"defaultValue","explain":"设置初始取值","type":"number","default":"0"},{"key":"2","attribute":"disabled","explain":"值为 true 时，滑块为禁用状态","type":"boolean","default":"false"},{"key":"3","attribute":"max","explain":"最大值","type":"number","default":"100"},{"key":"4","attribute":"min","explain":"最小值","type":"number","default":"0"},{"key":"5","attribute":"step","explain":"步长，取值必须大于 0，并且可被 (max - min) 整除。当 marks 不为空对象时，可以设置 step 为 null，此时 Slider 的可选值仅有 marks 标出来的部分","type":"number","default":"1"},{"key":"6","attribute":"onChange","explain":"当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入","type":"(value) => void","default":"-"}]',
            dataColumns: '[{"title":"属性","dataIndex":"attribute","key":"attribute"},{"title":"说明","dataIndex":"explain","key":"explain"},{"title":"类型","dataIndex":"type","key":"type"},{"title":"默认值","dataIndex":"default","key":"default"}]'
        },
        {
            title: 'VerificationCode',
            subTitle: '图形验证码',
            subDescribe: '随机产生字母',
            whenUse: '何时使用',
            assemblyDescribe: '常用于登录界面和注册界面，防止机器人使用',
            codeDemo: '代码演示',
            codeBoxTitle: '基本',
            codeBoxDescription: '第一个图形验证码。',
            api: 'API',
            apiDescription: 'VerificationCode',
            dataSource: '[{"key":"1","attribute":"getNumbers","explain":"获取验证码","type":"array","default":"-"},{"key":"2","attribute":"height","explain":"高度","type":"string","default":"40"},{"key":"3","attribute":"width","explain":"宽度","type":"string","default":"192"}]',
            dataColumns: '[{"title":"属性","dataIndex":"attribute","key":"attribute"},{"title":"说明","dataIndex":"explain","key":"explain"},{"title":"类型","dataIndex":"type","key":"type"},{"title":"默认值","dataIndex":"default","key":"default"}]'
        },
        {
            title: 'Affix',
            subTitle: '图钉',
            subDescribe: '将页面元素钉在可视范围',
            whenUse: '何时使用',
            assemblyDescribe: '当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜',
            codeDemo: '代码演示',
            codeBoxTitle: '基本',
            codeBoxDescription: '最简单的用法。',
            api: 'API',
            apiDescription: 'Affix',
            dataSource: '[{"key":"1","attribute":"offsetTop","explain":"距离窗口顶部达到指定偏移量后触发","type":"number","default":"0"}]',
            dataColumns: '[{"title":"属性","dataIndex":"attribute","key":"attribute"},{"title":"说明","dataIndex":"explain","key":"explain"},{"title":"类型","dataIndex":"type","key":"type"},{"title":"默认值","dataIndex":"default","key":"default"}]'
        },
        {
            title: 'Alert',
            subTitle: '警告提示',
            subDescribe: '警告提示，展现需要关注的信息。',
            whenUse: '何时使用',
            assemblyDescribe: '当某个页面需要向用户显示警告的信息时。',
            codeDemo: '代码演示',
            codeBoxTitle: '基本',
            codeBoxDescription: '最简单的用法，适用于简短的警告提示。',
            api: 'API',
            apiDescription: 'Alert',
            dataSource: '[{"key":"1","attribute":"message","explain":"警告提示内容","type":"ReactNode","default":""}, {"key":"2","attribute":"type","explain":"指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error`","type":"string","default":"success"}, {"key":"3","attribute":"description","explain":"自定义内容","type":"ReactNode","default":""}]',
            dataColumns: '[{"title":"属性","dataIndex":"attribute","key":"attribute"},{"title":"说明","dataIndex":"explain","key":"explain"},{"title":"类型","dataIndex":"type","key":"type"},{"title":"默认值","dataIndex":"default","key":"default"}]'
        },
        {
            title: 'Empty',
            subTitle: '空状态',
            subDescribe: '空状态时的展示占位图。',
            whenUse: '何时使用',
            assemblyDescribe: '当目前没有数据时，用于显式的用户提示。',
            codeDemo: '代码演示',
            codeBoxTitle: '基本',
            codeBoxDescription: '简单的展示。',
            api: 'API',
            apiDescription: 'Empty',
            dataSource: '[{"key":"1","attribute":"description","explain":"自定义描述内容","type":"string | ReactNode","default":"-"}]',
            dataColumns: '[{"title":"属性","dataIndex":"attribute","key":"attribute"},{"title":"说明","dataIndex":"explain","key":"explain"},{"title":"类型","dataIndex":"type","key":"type"},{"title":"默认值","dataIndex":"default","key":"default"}]'
        },
        {
            title: 'Badge',
            subTitle: '徽标数',
            subDescribe: '图标右上角的圆形徽标数字。',
            whenUse: '何时使用',
            assemblyDescribe: '一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。',
            codeDemo: '代码演示',
            codeBoxTitle: '基本',
            codeBoxDescription: '简单的展示。',
            api: 'API',
            apiDescription: 'Badge',
            dataSource: '[{"key":"1","attribute":"count","explain":"展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏","type":"number","default":"-"},{"key":"2","attribute":"overflowCount","explain":"展示封顶的数字值","type":"string","default":"-"},{"key":"3","attribute":"type","explain":"设置 Badge 为状态点","type":"success | primary | info | warning | danger","default":"primary"},{"key":"4","attribute":"className","explain":"样式设置","type":"string","default":"-"}]',
            dataColumns: '[{"title":"属性","dataIndex":"attribute","key":"attribute"},{"title":"说明","dataIndex":"explain","key":"explain"},{"title":"类型","dataIndex":"type","key":"type"},{"title":"默认值","dataIndex":"default","key":"default"}]'
        },
        {
            title: 'Tag',
            subTitle: '标签',
            subDescribe: '进行标记和分类的小标签。',
            whenUse: '何时使用',
            assemblyDescribe: '用于标记事物的属性和维度。',
            codeDemo: '代码演示',
            codeBoxTitle: '多彩标签',
            codeBoxDescription: '我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。',
            api: 'API',
            apiDescription: 'Tag',
            dataSource: '[{"key":"1","attribute":"color","explain":"标签色","type":"string","default":"-"},{"key":"2","attribute":"visible","explain":"是否显示标签","type":"boolean","default":"true"}]',
            dataColumns: '[{"title":"属性","dataIndex":"attribute","key":"attribute"},{"title":"说明","dataIndex":"explain","key":"explain"},{"title":"类型","dataIndex":"type","key":"type"},{"title":"默认值","dataIndex":"default","key":"default"}]'
        },
        {
            title: 'Tooltip',
            subTitle: '文字提示',
            subDescribe: '简单的文字提示气泡框。',
            whenUse: '何时使用',
            assemblyDescribe: '鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。',
            codeDemo: '代码演示',
            codeBoxTitle: '位置',
            codeBoxDescription: '位置有 12 个方向。',
            api: 'API',
            apiDescription: 'Tooltip',
            dataSource: '[{"key":"1","attribute":"title","explain":"提示文字","type":"string","default":""},{"key":"2","attribute":"placement","explain":"气泡框位置，可选 `top` `left` `right` `bottom` `top-start` `top-end` `bottom-start` `bottom-end` `left-start` `left-end` `right-start` `right-end`","type":"string","default":"top"}]',
            dataColumns: '[{"title":"属性","dataIndex":"attribute","key":"attribute"},{"title":"说明","dataIndex":"explain","key":"explain"},{"title":"类型","dataIndex":"type","key":"type"},{"title":"默认值","dataIndex":"default","key":"default"}]'
        }
    ];

    const title = data.url.split('?')[1];
    return datas.filter(item => item.title == title); 
});

const getChangeLog = Mock.mock(location.origin + '/api/changeLog.json', 'get', {
    'listData': [
        {
            title: '1.0.0',
            date: '2019-12-25',
            update: '["v1.0.0版本发布","新增Button、Input、Modal、Preview、VerificationCode等其他组件"]'
        },
        {
            title: '1.8.0',
            date: '2019-12-26',
            update: '["修复一些组件样式和bug问题"]'
        },
        {
            title: '1.8.2',
            date: '2019-12-31',
            update: '["新增Select组件"]'
        },
        {
            title: '1.9.5',
            date: '2020-04-06',
            update: '["新增Affix组件"]'
        },
        {
            title: '1.9.6',
            date: '2020-06-22',
            update: '["新增Empty组件"]'
        },
        {
            title: '1.9.12',
            date: '2020-07-24',
            update: '["新增Badge组件"]'
        },
        {
            title: '1.9.15',
            date: '2020-08-18',
            update: '["新增Tag组件"]'
        },
        {
            title: '1.9.17',
            date: '2020-09-01',
            update: '["新增Slider组件"]'
        },
        {
            title: '1.9.19',
            date: '2020-10-14',
            update: '["新增Tooltip组件"]'
        },
        {
            title: '1.9.20',
            date: '2020-10-20',
            update: '["新增Alert组件"]'
        }
    ]
});

export {
    getCard,
    getBasicComponents,
    getChangeLog
};