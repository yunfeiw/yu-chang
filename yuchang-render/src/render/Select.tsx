/*
 * @Descripttion: 下拉
 * @Author: yunfei
 * @Date: 2023-02-01 10:18:52
 */

import { Select, Option,Icon} from '@yuchang/design'
type nodeType = {
    text: "",
    props: any,
}

export default (node: nodeType, ref: any) => {
    let model = ref('1');
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
    return (<Select style="width:200px">
        {
            arr.map(e=>{
                return(<Option key={e.value} value={e.value}>{e.label}</Option>)
            })
        }
        </Select>)
}