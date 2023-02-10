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


function RenderItem(props: any, ctx: any) {

    switch (props.node['drap-name']) {
        case "button":
            return ButtonRender(props, ctx)
        case "input":
            return InputRender(props, ctx)
        case "radio":
            return RadioRender(props, ctx)
        case "table":
            return TableRender(props, ctx)
        case "select":
            return SelectRender(props, ctx)
        case "form":
            return FormRender(props, ctx)
        default:
            throw new Error(`unsupported 【render】 node tyoe: ${props.node.type}`)
    }

}

export { RenderItem }