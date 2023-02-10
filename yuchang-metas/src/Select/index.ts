/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-31 11:41:47
 */

import { drapElementType } from '@yuchang/types'

export const select = {

    "drag-type": drapElementType.block,

    props: {

        multiple: false,

        disabled: false,

        size: 'default',

        placeholder: '请选择',

        clearable: false,

        transfer: false,

    }
}