let aaa: string="test typescript"
console.log('aaa',aaa)

// ------------- 基础类型-------------
let str1:string;
str1 = "云服务圈"

let num: number = 1000
let boo: boolean = true
let n: null = null
let un: undefined = undefined

let test:any = true

// 数组 
let arr:string[] = ['java','rust','golang']
let arr2: string[][] =[['java','rust'],['redis','mysql']]

// 元组
let tuple: [number,string,boolean] = [1,'java',true]
let tuple2: [string,string][] = [['a','b']]

// ------------Enum 枚举 -----------
enum Database {
    MYSQL = 'mysql',
    REDIS = 'redis',
}
const db1 = Database.MYSQL