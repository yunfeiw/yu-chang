
import { Table } from '@yuchang/design'
type nodeType = {
    text: "",
    props: any,
}

export default (node: nodeType, ref: any) => {
    let columns = ref([
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
    ]);
    let data = ref([
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
    ])

    return (<Table size='small' border ref="selection" columns={columns.value} data={data.value}></Table>)
}