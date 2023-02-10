/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-31 11:25:19
 */
import { drapElementType } from '@yuchang/types'

export const button = {

    "drag-type": drapElementType.block,

    text: "按钮",

    props: {

        type: "primary",

        ghost: false,

        size: 'default',

        long: false

        // clearable: false
    }
}