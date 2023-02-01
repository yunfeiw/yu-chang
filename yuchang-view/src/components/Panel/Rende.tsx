/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-30 20:06:45
 */
import { ref, reactive } from 'vue'
// import { Button,Radio } from '@yuchang/design'
import { renderItem } from '@yuchang/render'
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
    console.log('renderMiddleProcess', node.ycelename)
    switch (node.ycelename) {
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
            throw new Error(`unsupported node type:${node.ycelename}`)
    }

}



/**
 * @description 创建可拖拽元素
 * @param param0 
 * @returns 
 */

const ItemRenderForDraggable = (node: any) => {
    console.log('ItemRenderForDraggable')
    // return renderItem(node, { ref, reactive })

    return (
        <Draggable
            onDragstart={(e) => {
                console.log('chidren onDragstart',e)
            }}
            onDragend={(e) => {
                console.log('chidren onDragend',e)
            }}
        >
            {renderItem(node, { ref, reactive })}
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

