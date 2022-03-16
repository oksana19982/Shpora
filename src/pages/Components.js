import React from 'react'

function Components(){
    return (
        <div className='Main-info'>
            <h1 className='Main-info-title'>Компоненты</h1>
            <p className='Main-info-text'>
                Компоненты позволяют разбить интерфейс на независимые части, 
                про которые легко думать в отдельности. 
                Их можно складывать вместе и использовать несколько раз.
                Во многом компоненты ведут себя как обычные функции JavaScript. 
                Они принимают произвольные входные данные (так называемые «пропсы») 
                и возвращают React-элементы, описывающие, что мы хотим увидеть на экране.
            </p>
            <hr />
            <p className='Main-info-subtitle'>Компоненты делятся на <span>функциональные и классовые.</span></p>
            <p className='Main-info-text'>Проще всего объявить React-компонент как функцию:</p>
            <div className='Main-info-code'>
                <code>
                {'function Welcome(props)'} {'{'} <br />
                &nbsp; return &lt;h1&gt;Привет,{'{props.name}'}&lt;/h1&gt;;<br />
                {'}'} <br />
                </code>
            </div>
            <p className='Main-info-text'>
                Эта функция — компонент, потому что она получает данные в одном объекте («пропсы») 
                в качестве параметра и возвращает React-элемент. Мы будем называть такие компоненты 
                «функциональными», так как они буквально являются функциями.
                Ещё компоненты можно определять как классы ES6:
            </p>
            <div className='Main-info-code'>
                <code>
                {'class Welcome extends React.Component'} {'{'} <br />
                &nbsp; render () {'{'} <br />
                &nbsp; &nbsp; return &lt;h1&gt;Привет,{'{this.props.name}'}&lt;/h1&gt;;<br />
                &nbsp; {'}'} <br />
                {'}'} <br />
                </code>
            </div>
            <p className='Main-info-text'>
                Компонент должен себя вести как чистая функция.
                «Чистой» называется функция, которая:
                <ul>
                    <li>Для одинаковых входных данных всегда возвращает один результат.</li>
                    <li>Не имеет побочных эффектов (то есть не изменяет внешние состояния).</li>
                    <li>Не зависит от внешних состояний.</li>
                </ul>
            </p>
        </div>
    )
};

export default Components;