/*
 * @Descripttion: 按钮
 * @Author: yunfei
 * @Date: 2023-01-31 15:52:49
 */
import { Button } from '@yuchang/design'

// type nodeType = {
//     text: "",
//     nodeId: string,
//     props: any,
// }

export default (props: any, ctx?: any) => {

    const { node } = props;

    return (<Button drag-type={node['drag-type']} drap-id={node.nodeId} {...node.props} >{node.text}</Button>)
}