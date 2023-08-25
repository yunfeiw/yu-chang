/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-30 18:24:09
 */

import { defineComponent, ref, reactive, Ref } from 'vue'
import metasTypes from '@yuchang/metas'
import { uuid } from '@yuchang/utils'
import { Render } from './Rende';

type DRAP_TARGET_INFO = {
    id: string,
    i: number
}

// 类型查找 (容器、块)
function findDrop(e: any) {
    if (e.getAttribute("drag-type") == '0') {
        return e
    }
    while (e && !e.getAttribute("draggable")) {
        e = e.parentNode;
    }
    return e;
}
export default defineComponent({
    props: {},
    setup() {
        let data = ref([]) as Ref;

        return () => {
            return <div drag-type='0' class='panel'
                onDragover={(e) => {
                    e.preventDefault()
                }}
                onDrop={(e) => {
                    e.preventDefault();
                    // element type
                    let drapname = e.dataTransfer?.getData('drap-name');

                    // element inter drap
                    if (drapname == '') {
                        // 查找拖拽版（元素）
                        let realTarget = findDrop(e.target);

                        // target item && drap item
                        let { i } = JSON.parse(e.dataTransfer?.getData('drap-data')!) as DRAP_TARGET_INFO;
                        let _i = realTarget.getAttribute('drap-index');
                        let newdata = [...data.value]
                        let item = newdata.splice(i, 1)[0]

                        // position
                        let { width } = realTarget.getBoundingClientRect();
                        let { offsetLeft } = realTarget;
                        offsetLeft = e.clientX - offsetLeft

                        if (offsetLeft / width < 0.5) {
                            console.log('左')
                            newdata.splice(_i - 1, 0, item)
                        } else {
                            console.log('右')
                            newdata.splice(_i, 0, item)
                        }
                        console.log('newdata', newdata)
                        data.value = newdata;

                        return
                    }
                    // 拖拽（菜单栏）
                    let ID = uuid();
                    let newItem = {
                        nodeId: ID,
                        'drap-name': drapname,
                        ...metasTypes[drapname as keyof typeof metasTypes]
                    }

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