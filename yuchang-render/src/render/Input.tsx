/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-31 15:52:49
 */
import { FormItem, Input } from '@yuchang/design'


export default (props: any, ctx?: any) => {

    const { node } = props

    return (
        <FormItem drag-type={node['drag-type']} drap-id={node.nodeId} label-width={140} label="item-label">
            <Input  {...node.props}></Input>
        </FormItem>
    )
}