/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-30 18:24:09
 */
import { defineComponent, ref, Ref } from 'vue'
import metasTypes from '@yuchang/metas'
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
                    let drapname = e.dataTransfer?.getData('drap-name');
                    console.log('metasTypes', metasTypes[drapname])
                    // 读取类型
                    data.value = [
                        ...data.value,
                        {
                            text: "按钮",
                            ycelename: drapname,
                        }
                    ]
                }}

            >
                {Render(data.value)}
                {/* <Render node={data.value} /> */}
            </div>
        };
    }
})