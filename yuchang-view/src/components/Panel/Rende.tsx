/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-30 20:06:45
 */
import { defineComponent, ref } from 'vue'
import { Draggable } from './Draggable'


type Node = {
    getType: () => "root" | 'rect' | 'text' | 'image',
    getChildren: () => []
}

type ychangComponent = {
    node: Node
}

export const Render = defineComponent({
    props: {
        node: {
            type: Node,
            required: true,
        }
    },
    setup(props) {
        const ver = ref(0);
        // 更新组件

        return () => {
            return render(props.node);
        }
    }
})


function render(node: any) {

    switch (node.getType()) {
        case "root":
            // return (<Root node={node} />)
            return Root({ node });
        case "text":
        case "rect":
        case "image":
            return <ItemRenderForDraggable node={node} />
        default:
            throw new Error(`unsupported node type:${node.getType()}`)
    }
}


/**
 * @description 创建可拖拽元素
 * @param param0 
 * @returns 
 */

const ItemRenderForDraggable = ({ node }: ychangComponent) => {

    return (
        <Draggable
            onDragstart={() => {
            }}
            onDragend={(vec) => {
            }}
        >
            {renderItem(node)}
        </Draggable>
    )
}

const Root = ({ node }: ychangComponent) => {
    const children = node.getChildren()
    return <div data-skedo='root'>
        {children.map((node1, i) => {
            return <Render key={i} node={node1} />
        })}
    </div>

}


/**
 * @description 创建元素函数
 * @param node 
 * @returns 元素节点
 */
function renderItem(node: Node) {

    switch (node.getType()) {
        case "image":
            return (
                <img style={{ height: "200px" }} src={'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202109%2F06%2F20210906225922_1c31b.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649469936&t=2f1517a9570250c7fcfebfee06da861b'} />
            )

        case "rect":
            return (
                <div style={{ backgroundColor: 'yellow', width: '100px', height: '100px' }}></div>
            )
        case "text":
            return (
                <h2>这里是文本</h2>
            )
    }
}