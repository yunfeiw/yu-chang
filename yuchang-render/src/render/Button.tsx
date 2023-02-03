/*
 * @Descripttion: 按钮
 * @Author: yunfei
 * @Date: 2023-01-31 15:52:49
 */
import { Button } from '@yuchang/design'

type nodeType = {
    text: "",
    nodeId: string,
    props: any,
}

export default (node: nodeType) => {
    const { text, nodeId, props } = node;
    return (<Button id={nodeId} {...props} >{text}</Button>)
}