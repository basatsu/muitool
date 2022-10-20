import { DragEvent } from 'react';
import { useState, useCallback, useRef } from 'react';

import { useNodesState, useReactFlow, Edge, Node, ReactFlowJsonObject } from 'react-flow-renderer';

import React, { ReactNode } from 'react';


const onDragStart = (event: DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
};



type Todo = {
    id: number;
    text: string;
};


//const Sidebar = () => {
const Sidebar = () => {


    //----------------------------------------
    const [inputText, setInputText] = useState("");
    // 状態管理する対象をTodoとする
    const [todos, setTodos] = useState<Todo[]>([]);

    // eventの型を指定
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
        setInputText(e.target.value);

    const addTodo = () => {
        setTodos((state) => [...state, { id: state.length, text: inputText }]);
        setInputText("");
    };


    return (
        <aside style={{ width: 200, height: 500, marginTop: '50px' }}>

            <div className="description">各ノードを左の枠へドラッグアンドドロップ</div>


            <h3>大分類</h3>
            <input type="text" value={inputText} onChange={changeHandler} className="daiinput" />
            <button onClick={addTodo}>+</button>


            <ul>
                <li className="react-flow__node-input" onDragStart={(event: DragEvent) => onDragStart(event, '入力')} draggable>
                    input Node
                </li>

                <li className="react-flow__node-default" onDragStart={(event: DragEvent) => onDragStart(event, 'デフォルト')} draggable>
                    default Node
                </li>

                <li className="react-flow__node-output" onDragStart={(event: DragEvent) => onDragStart(event, '出力')} draggable>
                    output Node
                </li>


                {todos.map((todo) => {
                    return <li key={todo.id} className="adding react-flow__node-input" onDragStart={(event: DragEvent) => onDragStart(event, todo.text)} draggable>
                        "大分類"<br />{todo.text}
                    </li>;
                })}
            </ul>



        </aside>
    );
};

export default Sidebar;