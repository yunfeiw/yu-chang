/*
 * @Descripttion: 单选
 * @Author: yunfei
 * @Date: 2023-01-31 15:52:49
 */
import { Radio, RadioGroup } from '@yuchang/design'
type nodeType = {
    text: "",
    props: any,
}

export default (node: nodeType, ref: any) => {
    return (<RadioGroup >
        <Radio label="1"> <span>1</span>  </Radio>
        <Radio label="2"> <span>2</span>  </Radio>
        <Radio label="3"> <span>3</span>  </Radio>
    </RadioGroup>)
}