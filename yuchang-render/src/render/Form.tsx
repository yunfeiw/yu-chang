import { Form, FormItem, Input } from "@yuchang/design"
import { uuid } from '@yuchang/utils'
import { ctx } from "@yuchang/types"

export default (node: any, { reactive }: ctx) => {
    let formItems = reactive({
        a: 1,
        b: 2
    })

    return (
        <div drag-type="1" style={{ border: "1px solid #ccc" }}>
            <Form drag-type="2" model={formItems} label-width={80} >
                <FormItem label="item-label">
                    <Input v-model={formItems.a} placeholder="Enter something..."></Input>
                </FormItem>
            </Form>
        </div>
    )
}