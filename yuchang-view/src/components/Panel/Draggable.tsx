/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-30 20:16:54
 */
import type { VNode, PropType } from 'vue';
import { defineComponent, ref } from 'vue'
import { deepMerge } from '@yuchang/utils'

/* 
 * @description draggable 拖拽 handle 
 * @returns 
*/

function useDrag({ onDragend, onDragstart }: {
    onDragstart?: () => void,
    onDragend?: (vec: [number, number]) => void
}) {


    const handles = {
        onDragstart(e: DragEvent) {
            onDragstart && onDragstart()
        },
        onDrag(e: DragEvent) {
        },
        // onDragend(e: DragEvent) {
        // }
        onDragend: (e: DragEvent) => {
            onDragend && onDragend([0, 0])
        }
    }
    // 返回
    return {
        handles
    }
}
/* 
* @type VNode 这里的 VNode类型是 vue 中的类型 
* @param props 
*/
function addPropsToVNode(vNode: VNode, props: Record<string, any>): VNode {
    // 深度的拷贝
    vNode.props = deepMerge(vNode.props, props);
    return vNode;
}

export const Draggable = defineComponent({
    // 初始化位置
    props: {

        onDragstart: {
            type: Function as PropType<() => void>
        },
        onDragend: {
            type: Function as PropType<(vec: [number, number]) => void>
        }

    },

    /**
     * @param props 属性
     * @param ctx 上下文
     * @returns data
     */
    setup(props, ctx) {

        /** 声明事件名称 */
        const { handles } = useDrag({
            onDragstart: props.onDragstart,
            onDragend: props.onDragend
        });

        return () => {

            let vNode: VNode = ctx.slots.default!()[0];
            vNode = addPropsToVNode(vNode, {
                ...handles,
                Draggable: true,

            });
            return vNode
        }

    }
})