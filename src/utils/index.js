import { message } from 'antd';
import { BASE_API } from '../config';

// 合并特定的reducer
export function getObjReducer(state, payload, target) {
    if (!state && !payload) {
        return;
    }
    let oldState = state.toJS();
    return Object.assign({}, oldState[target], payload);
}

// 根据当前域名，获取不同的环境
export function getApi() {
    return BASE_API;
}

// 检查 value 是不是函数
export function isFunction(value) {
    return Object.prototype.toString.call(value) === '[object Function]';
}

// 获取数据类型，返回结果为 Number、String、Object、Array等
export function getRawType(value) {
    return Object.prototype.toString.call(value).slice(8, -1);
}

// 检查 value 是否为有效的类数组长度
export function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= Number.MAX_SAFE_INTEGER;
}

// 检查 value 是否是类数组
export function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}

// 检测数据是不是除了symbol外的原始数据
export function isStatic(value) {
    return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean' ||
        typeof value === 'undefined' ||
        value === null
    );
}

// 判断数据是不是Object类型的数据
export function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

// 检查 value 是否为空
export function isEmpty(value) {
    if (value == null) {
        return true;
    }
    if (isArrayLike(value)) {
        return !value.length;
    } else if (isPlainObject(value)) {
        for (let key in value) {
            if (hasOwnProperty.call(value, key)) {
                return false;
            }
        }
        return true;
    }
    return false;
}

// 判断返回值是否报错
export function isResultError (params, hasMessage = true) {
    if (!isEmpty(params) && params.code == 200) return params.listData;
    
    if (!isEmpty(params) && params.code != 200) {
        if(hasMessage) message.error(params.error);
    }
}

// 检测是否为PC端浏览器模式
export function isPCBroswer() {
    let e = navigator.userAgent.toLowerCase()
        , t = 'ipad' == e.match(/ipad/i)
        , i = 'iphone' == e.match(/iphone/i)
        , r = 'midp' == e.match(/midp/i)
        , n = 'rv:1.2.3.4' == e.match(/rv:1.2.3.4/i)
        , a = 'ucweb' == e.match(/ucweb/i)
        , o = 'android' == e.match(/android/i)
        , s = 'windows ce' == e.match(/windows ce/i)
        , l = 'windows mobile' == e.match(/windows mobile/i);
    return !(t || i || r || n || a || o || s || l);
}

// 数组去重，返回一个新数组
export function unique(arr) {
    if (!isArrayLike(arr)) { //不是类数组对象
        return arr;
    }
    let result = [];
    let objarr = [];
    let obj = Object.create(null);

    arr.forEach(item => {
        if (isStatic(item)) {//是除了symbol外的原始数据
            let key = item + '_' + getRawType(item);
            if (!obj[key]) {
                obj[key] = true;
                result.push(item);
            }
        } else {//引用类型及symbol
            if (!objarr.includes(item)) {
                objarr.push(item);
                result.push(item);
            }
        }
    });
    return result;
}

// 获取Url参数，返回一个对象
export function getUrlParam() {
    let url = document.location.toString();
    let arrObj = url.split('?');
    let params = Object.create(null);
    if (arrObj.length > 1) {
        arrObj = arrObj[1].split('&');
        arrObj.forEach(item => {
            item = item.split('=');
            params[item[0]] = item[1];
        });
    }
    return params;
}

// 全屏
export function toFullScreen() {
    let elem = document.body;
    elem.webkitRequestFullScreen
        ? elem.webkitRequestFullScreen()
        : elem.mozRequestFullScreen
            ? elem.mozRequestFullScreen()
            : elem.msRequestFullscreen
                ? elem.msRequestFullscreen()
                : elem.requestFullScreen
                    ? elem.requestFullScreen()
                    : false;
}

// 退出全屏
export function exitFullscreen() {
    let elem = parent.document;
    elem.webkitCancelFullScreen
        ? elem.webkitCancelFullScreen()
        : elem.mozCancelFullScreen
            ? elem.mozCancelFullScreen()
            : elem.cancelFullScreen
                ? elem.cancelFullScreen()
                : elem.msExitFullscreen
                    ? elem.msExitFullscreen()
                    : elem.exitFullscreen
                        ? elem.exitFullscreen()
                        : false;
}
