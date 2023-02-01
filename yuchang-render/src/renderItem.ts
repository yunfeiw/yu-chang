/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-31 14:31:36
 */

import { ctx } from '@yuchang/types'

import ButtonRender from './render/Button'
import InputRender from './render/Input'
import RadioRender from './render/Radio'
import TableRender from './render/Table'
import SelectRender from './render/Select'
import FormRender from './render/Form'


function renderItem(node: any, ctxs:ctx) {

    switch (node.ycelename) {
        case "button":
            return ButtonRender(node)
        case "input":
            return InputRender(node)
        case "radio":
            return RadioRender(node, ctxs)
        case "table":
            return TableRender(node, ctxs)
        case "select":
            return SelectRender(node, ctxs)
        case "form":
            return FormRender(node, ctxs)
        default:
            throw new Error(`unsupported 【render】 node tyoe: ${node.type}`)
    }


}

export { renderItem }