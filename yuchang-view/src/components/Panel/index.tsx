/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-30 18:24:09
 */

import { defineComponent, ref, reactive, Ref } from 'vue'
import metasTypes from '@yuchang/metas'
import { uuid } from '@yuchang/utils'
import { Render } from './Rende';


// 类型查找 (容器、块)
function findDrop(e: any) {
    if (e.getAttribute("drag-type") == '0') {
        return e
    }
    while (
        e &&
        e.getAttribute("drag-type") != 1 &&
        e.getAttribute("drag-type") != 2
    ) {
        e = e.parentNode;
    }
    return e;
}
export default defineComponent({
    props: {},
    setup() {
        let list = ref([]) as Ref;
        let data = ref([]) as Ref;
        let maps = ref({}) as Ref;

        return () => {
            return <div drag-type='0' class='panel'
                onDragover={(e) => {
                    e.preventDefault()
                }}
                onDrop={(e) => {
                    e.preventDefault();
                    // 读取类型
                    let drapname = e.dataTransfer?.getData('drap-name');
                    console.log('metasTypes', drapname)

                    // 拖拽（自己）
                    if (drapname == '') {
                        let drapID = e.dataTransfer?.getData('drap-id');
                        console.log('开始移动', drapID)

                        // 更新data
                        let realTarget = findDrop(e.target);
                        // 块
                        let { width, height } = realTarget.getBoundingClientRect();
                        let { offsetLeft } = realTarget;
                        offsetLeft = e.clientX - offsetLeft
                        // 移动 判定


                        let upID = realTarget.getAttribute('drap-id');

                        let listBefore = list.value.filter((e: String) => e != drapID);
                        let dataBefore = data.value.filter((e: { nodeId: string }) => e.nodeId != drapID);

                        let _idx = listBefore.indexOf(upID);


                        if (offsetLeft / width < 0.5) {
                            // 左侧
                            console.log("左", _idx);

                            listBefore.splice(_idx, 0, drapID);
                            dataBefore.splice(_idx, 0, maps.value[drapID!]);


                        } else {
                            // 右侧
                            console.log("右", _idx);

                            listBefore.splice((_idx + 1), 0, drapID);
                            dataBefore.splice((_idx + 1), 0, maps.value[drapID!]);

                        }

                        list.value = listBefore
                        data.value = dataBefore

                        return
                    }
                    // 拖拽（菜单栏）
                    let ID = uuid();
                    let newItem = {
                        nodeId: ID,
                        'drap-name': drapname,
                        ...metasTypes[drapname as keyof typeof metasTypes]
                    }

                    maps.value[ID] = newItem;

                    list.value = [
                        ...list.value,
                        ID
                    ]
                    data.value = [
                        ...data.value,
                        newItem
                    ]
                }}

            >
                {Render(data.value)}
            </div >
        };
    }
})