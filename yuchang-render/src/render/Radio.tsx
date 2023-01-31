/*
 * @Descripttion: 按钮
 * @Author: yunfei
 * @Date: 2023-01-31 15:52:49
 */
import { Radio } from '@yuchang/design'
type nodeType = {
    text: "",
    props: any,
}

export default (node: nodeType, ref: any) => {
    const { text } = node;
    let rd = ref(false)
    return (<Radio on-change={() => { console.log(11)}} model-value={rd.value}>{text}</Radio>)
}