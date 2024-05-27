import { getVarType } from "./Common";

/**
 * @param date 
 * @param format: '关键字: yyyy MM dd hh mm ss' 
 */
function dateFormat(format: string, date?: string | Date) {
    let typeMap: { [field: string]: any } = {
        'string': () => new Date(date || new Date()),
        'Date': () => date
    }
    let dateObj: Date = typeMap[getVarType(date)]?.() ?? new Date()

    let keywordsMap: { [field: string]: any } = {
        'yyyy': dateObj.getFullYear(),
        'MM': dateObj.getMonth() + 1,
        'dd': dateObj.getDate(),
        'hh': dateObj.getHours(),
        'mm': dateObj.getMinutes(),
        'ss': dateObj.getSeconds()
    }

    let dateStr = Object.entries(keywordsMap).reduce((acc, [key, value]) => {
        return format.includes(key) ? acc.replace(key, value) : acc
    }, format)

    return dateStr
}

export {
    dateFormat
}