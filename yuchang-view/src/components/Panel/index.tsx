/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-30 18:24:09
 */

import { defineComponent, ref, Ref } from 'vue'
import metasTypes from '@yuchang/metas'
import { uuid } from '@yuchang/utils'
import { Render } from './Rende';


export default defineComponent({
    props: {},
    setup() {
        let data = ref([]) as Ref;

        return () => {
            return <div class='panel'
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

                        console.warn('开始移动',)
                        return
                    }
                    // 拖拽（菜单栏）
                    data.value = [
                        ...data.value,
                        {
                            nodeId: uuid(),
                            ycelename: drapname,
                            ...metasTypes[drapname as keyof typeof metasTypes]
                        }
                    ]
                }}

            >
                {Render(data.value)}
            </div >
        };
    }
})