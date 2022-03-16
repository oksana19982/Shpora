import React from 'react';

function Props(){
    return (
        <div className='Main-info'>
            <h1 className='Main-info-title'>Пропсы</h1>
            <p className='Main-info-text'>
                Props (пропсы) — это входные данные React-компонентов, 
                передаваемые от родительского компонента дочернему компоненту.
                Помните, props предназначены только для чтения. Их нельзя изменять.
                Если вам нужно поменять значение в ответ на пользовательский ввод 
                или ответ сервера, используйте state (состояние).
            </p>
            <hr />
            <p className='Main-info-text'>
                Пока что мы только встречали React-элементы, 
                представляющие собой DOM-теги. Но элементы могут описывать и наши 
                собственные компоненты.
            </p>
            <p className='Main-info-text'>
                Когда React встречает подобный элемент, он собирает все JSX-атрибуты
                и дочерние элементы в один объект и передаёт их нашему компоненту. 
                Этот объект называется «пропсы» (props).
                Например, этот компонент выведет «Привет, Алиса» на страницу:
            </p>
            <div className='Main-info-code'>
                <code>
                {'function Welcome(props)'} {'{'} <br />
                &nbsp; return &lt;h1&gt;Привет,{'{props.name}'}&lt;/h1&gt;;<br />
                {'}'} <br />
                <br />
                const element = &lt;Welcome name="Алиса" /&gt;; <br />
                ReactDOM.render( <br />
                &nbsp;element, <br />
                &nbsp;document.getElementById('root') <br />
                ); <br />
                </code>
            </div>           
        </div>
    )
}

export default Props;