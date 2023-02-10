/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-02-01 09:57:04
 */

import { Table } from '@yuchang/design'

// type nodeType = {
//     text: "",
//     nodeId: string,
//     props: any,
// }

export default (props: any, ctx?: any) => {

    const { node } = props;

    let columns = [
        {
            type: 'selection',
            width: 60,
            align: 'center'
        },
        {
            title: '姓名',
            key: 'name'
        },
        {
            title: '年龄',
            key: 'age'
        },
        {
            title: '地区',
            key: 'address'
        }
    ];
    let data = [
        {
            name: '小明',
            age: 18,
            address: '北京',
            date: '2016-10-03'
        },
        {
            name: '小红',
            age: 24,
            address: '上海',
            date: '2016-10-01'
        },
    ]

    return (<Table drag-type={node['drag-type']} drap-id={node.nodeId} size='small' border ref="selection" columns={columns} data={data}></Table>)
}