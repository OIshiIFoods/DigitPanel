
// 除了内置和自定义类名返回大写，其他都返回小写
function getVarType(value: any): string {
    let toString = Object.prototype.toString
    let type = value instanceof Element ? 'Element' : toString.call(value).replace(/\[object\s(.*)\]/, '$1')
    type = type.toLocaleLowerCase()
    if (type === 'object') {
        type = value.constructor.name
    }
    return type
}

export {
    getVarType
}