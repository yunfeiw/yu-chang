/*
 * @Descripttion: 
 * @Author: yunfei
 * @Date: 2023-01-30 20:52:58
 */
// Observable 可以被观察
import { Observable } from 'rxjs';

type ObserverFunction = (data: any) => void

export class Emiter<Topic extends string | number>{

    private observers: Map<Topic, ObserverFunction[]>

    constructor() {
        this.observers = new Map();
    }

    private addObserverFunction(topic: Topic, fn: ObserverFunction) {
        //判断当前是否存在 topic
        if (!this.observers.get(topic)) {
            this.observers.set(topic, []);
        }
        // 存储函数
        this.observers.get(topic)!.push(fn);
    }

    // on 之下 可能触发回调
    on(topic: Topic | Topic[]): Observable<any> {

        return new Observable((observer: any) => {

            // topic 可能是数组

            if (Array.isArray(topic)) {
                // 循环执行
                topic.forEach(t => {
                    this.addObserverFunction(t, data => {
                        observer.next(data);
                    });
                });

            } else {

                // 每个 topic 对应一个函数列表
                this.addObserverFunction(topic, (data) => {

                    // observer函数 === callback【subscribe】
                    // 通过next方法执行 callback【将当前信息发送给观察者】
                    // 可以传参 【data】
                    observer.next(data);
                })
            }

        })
    }

    // 作用将这类 topic 的 observer全部调用
    emit(topic: Topic, data?: any) {
        this.observers.get(topic)?.forEach(fn => {
            fn(data);
        });

    }
}
