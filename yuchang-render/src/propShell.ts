/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-31 17:36:39
 */
import type { VNode } from 'vue';
import { defineComponent } from 'vue'
import { deepMerge } from '@yuchang/utils'


function addPropsToVNode(vNode: VNode, props: Record<string, any>): VNode {
    // 深度的拷贝
    vNode.props = deepMerge(vNode.props, props);
    return vNode;
}

export const propShell = defineComponent({

    /**
     * @param props 属性
     * @param ctx 上下文
     * @returns data
     */
    setup(props, ctx) {
        console.log("props", props)
        return () => {

            let vNode = ctx.slots.default!()[0];
            vNode = addPropsToVNode(vNode, {
                ...props,
            });
            return vNode
        }

    }
})