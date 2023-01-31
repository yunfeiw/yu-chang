/*
 * @Descripttion: 按钮
 * @Author: yunfei
 * @Date: 2023-01-31 15:52:49
 */
import { Button } from '@yuchang/design'

type nodeType = {
    text: "",
    props: any,
}

export default (node: nodeType) => {
    const { text, props } = node;
    return (<Button {...props} >{text}</Button>)
}