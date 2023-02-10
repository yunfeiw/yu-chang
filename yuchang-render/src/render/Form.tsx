/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-02-01 16:01:35
 */
import { Form } from "@yuchang/design"
// import { ctx } from "@yuchang/types"

const styles = {
    shape: {
        minHeight: '70px',
        border: "1px #ccc solid"
    }
}

export default (props: any, ctx?: any) => {
    let formItems = {
        a: 1,
        b: 2
    }
    const { node } = props
    console.log('render form', props.chidren)

    let vNode = ctx.slots.default;

    return (
        <Form drag-type={node['drag-type']} drap-id={node.nodeId} style={styles.shape} model={formItems} {...node.props} >
            {vNode()}
        </Form>
    )
}