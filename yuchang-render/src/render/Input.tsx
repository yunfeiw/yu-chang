/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-31 15:52:49
 */
import { Input } from '@yuchang/design'


export default (node: any) => {
    const { props } = node;
    return (<Input {...props} />)
}