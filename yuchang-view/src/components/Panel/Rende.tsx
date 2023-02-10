/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-30 20:06:45
 */
import { ref, reactive } from 'vue'
// import { Button,Radio } from '@yuchang/design'
import { RenderItem } from '@yuchang/render'
// import { Node } from '@yuchang/types'
import { Draggable } from './Draggable'


// type ychangComponent = {
//     node: Node
// }

export const Render = (node: any) => {
    console.log('Render')
    // 更新组件
    if (node.length == 0) {
        return <div>星星</div>
    }
    return node.map((e: any) => {
        return renderMiddleProcess(e);
    })
}

function renderMiddleProcess(node: any) {
    // console.log('renderMiddleProcess', node.ycelename)
    switch (node['drap-name']) {
        case "root":
        // return Root({ node });
        case "button":
        case "input":
        case "radio":
        case "select":
        case "table":
        case "form":
            return ItemRenderForDraggable(node)
        default:
            throw new Error(`unsupported node type:${node['drap-name']}`)
    }

}



/**
 * @description 创建可拖拽元素
 * @param param0 
 * @returns 
 */

const ItemRenderForDraggable = (node: any) => {

    return (
        <Draggable
            onDragstart={(e) => {
                console.log('(づ￣3￣)づ╭❤～')
                let ev = e.target as Element;
                e.dataTransfer!.setData("drap-id", ev.getAttribute('drap-id')!);
            }}
            onDragend={(e) => {
                // console.log('chidren onDragend', e)
            }}
        >
            <RenderItem node={node} ><div>你好</div></RenderItem>
        </Draggable>
    )
}

// const Root = ({ node }: ychangComponent) => {
//     const children = node.children
//     return <div data-yuchang='root'>
//         {children.map((node1, i) => {
//             return <Render key={i} node={node1} />
//         })}
//     </div>

// }

