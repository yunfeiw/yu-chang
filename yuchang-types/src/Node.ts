/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-31 14:38:00
 */
/**
 * @description 每添加一个一个元素，即创建一个节点
 * 该节点包含 Emiter 事件
 */
import { Emiter } from "@yuchang/utils";
import { Topics } from "./Topics";

import { Map as Immutable, List } from 'immutable'; // 别名

export class Node extends Emiter<Topics>{
    // 节点的信息数据 使用 immutable 中的 map存储
    private nodeData: Immutable<string, any>
    // 构造函数
    constructor(type: string) {
        super();
        // 初始化 信息
        this.nodeData = Immutable({
            type,
            // 子节点集合
            children: List<Node>()
        });
    }
    // 添加子节点 【递归类型】

    public add(child: Node) {
        // return new nodeData
        this.nodeData = this.nodeData.update('children', (children) => {
            return children.push(child)
        })
    }

    // 相应方法
    public getType() {
        return this.nodeData.get('type');
    }

    public getChildren() {
        // 设定返回类型
        return this.nodeData.get('children').toJS() as Node[]
    }
    public getJS() {
        return this.nodeData.toJS()
    }
}