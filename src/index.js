// webpack打包入口文件
// webpack-dev-server打包好的main.js是托管到内存中的；所以项目根目录中看不到
import React from 'react'
import ReactDOM from 'react-dom'
import path from 'path'

// 导入Hello组件
// 默认如果不做单独配置的话，不能省略.jsx等 后缀
// import Hello from './components/Hello.jsx'
import Hello from '@/components/Hello'

let lifes = 72
const arr = ['流川枫', '樱木花道', '三井寿']

// const div = <div>
//     This is a div element
//     {/* <h1>hello</h1> */}
//     <h5>babel update to 7.x</h5>
//     <h3>看我{lifes}变</h3>
//     <hr />
//     <ul>
//         {arr.map((person, index) => <li key={index}>{person}</li>)}
//     </ul>
// </div>

ReactDOM.render(<div>
    <Hello username='测试账号001' />
</div>, document.getElementById('root'))