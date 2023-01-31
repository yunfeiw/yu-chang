
/**
 * @description 创建元素函数
 * @param node 
 * @returns 元素节点
 */


import ButtonRender from './render/Button'
import InputRender from './render/Input'
import RadioRender from './render/Radio'

function renderItem(node: any, ref: any) {

    switch (node.ycelename) {
        case "button":
            return ButtonRender(node)
        case "input":
            return InputRender(node)
        case "radio":
            return RadioRender(node, ref)
        default:
            throw new Error(`unsupported 【render】 node tyoe: ${node.type}`)
    }


}

export { renderItem }