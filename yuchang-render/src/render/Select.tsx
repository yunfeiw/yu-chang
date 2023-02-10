/*
 * @Descripttion: 下拉
 * @Author: yunfei
 * @Date: 2023-02-01 10:18:52
 */

import { Select, Option } from '@yuchang/design'

// type nodeType = {
//     text: "",
//     nodeId: string,
//     props: any,
// }

export default (props: any, ctx?: any) => {

    const { node } = props;

    let arr = [
        {
            value: '1',
            label: 'New York'
        },
        {
            value: '2',
            label: 'London'
        },
        {
            value: '3',
            label: 'Sydney'
        },
    ]
    return (<Select drag-type={node['drag-type']} drap-id={node.nodeId} style="width:200px">
        {
            arr.map(e => {
                return (<Option key={e.value} value={e.value}>{e.label}</Option>)
            })
        }
    </Select>)
}