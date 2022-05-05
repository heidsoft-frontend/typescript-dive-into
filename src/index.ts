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

// ----------Union -------------
let bbb: number | string 
bbb=111
bbb='联合'


// -----------Type --------------
type A= number | string 
let a1:A
a1 = 999
a1 = 'typescript'

// -----------interface --------------
interface User {
    name: string;
    age: number;
}

// ----------- object --------------
type Card ={
    name: string
    desc: string 
}

interface Card2 {
    name: string;
    desc: string;
}

interface Card2{
    age?: number // ?表示可选
}

// 定义为type 类型
const obj: Card = {
    name:"tom",
    desc:'测试type类型'
}

// 定义为interface
const obj2: Card2 = {
    name:"tom",
    desc:'测试type类型',
    age:1
}

// ------------function -------------
// 参数
// 函数会自动推倒出函数的返回值
function hello(a:string,b:string){
    return a+b
}

// 返回number
function hello2(a:string,b:string): number{
    console.log(a,b);
    return 9999;
}

function hello3(a:string,b:string,c:string){
    return 100;
}

// undefined
function hello4(name:string,age?:number){
    return age
}

const func =()=>{}
const func2 =()=>{
    return 1
}

// ----------- unknown --------------
type Data ={
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json() as Data;
    console.log(data);
}

const data1: Data={
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}

type Beta ={
    name:string 
}

// 假设data1 是动态类型
const beta = data1 as unknown as Beta

// ------------ class ----------------

// private 私有
// public 公开
// protected 受保护

/**
 *  直播类
 */
class Live {
    roomName: string
    private id: string
    protected name: string 

    constructor(roomName1:string,id1:string,name1:string) {
        this.roomName = roomName1
        this.id = id1
        this.name = name1
    }
}

const live = new Live('抖音','000001','云服务')
console.log(live);