/*
 * @Descripttion: 单选
 * @Author: yunfei
 * @Date: 2023-01-31 15:52:49
 */
import { Radio, RadioGroup } from '@yuchang/design'

// type nodeType = {
//     text: "",
//     nodeId: string,
//     props: any,
// }

export default (props: any, ctx?: any) => {

    const { node } = props

    return (<RadioGroup drap-id={node.nodeId} drag-type={node['drag-type']} >
        <Radio label="1"> <span>1</span>  </Radio>
        <Radio label="2"> <span>2</span>  </Radio>
        <Radio label="3"> <span>3</span>  </Radio>
    </RadioGroup>)
}