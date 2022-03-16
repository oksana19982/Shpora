import React from 'react';

function ReactFragment(){
    return (
        <div className='Main-info'>
            <h1 className='Main-info-title'>React.Fragment</h1>
            <p className='Main-info-text'>
                Возврат нескольких элементов из компонента является распространённой 
                практикой в React. Фрагменты позволяют формировать список дочерних 
                элементов, не создавая лишних узлов в DOM.
            </p>
            <div className='Main-info-code'>
                <code>
                render() {'{'}<br />
                &nbsp;return (<br />
                    &nbsp;&nbsp;&lt;React.Fragment&gt;<br />
                    &nbsp;&nbsp;&lt;ChildA /&gt;<br />
                    &nbsp;&nbsp;&lt;ChildB /&gt;<br />
                    &nbsp;&nbsp;&lt;ChildC /&gt;<br />
                    &nbsp;&nbsp;&lt;/React.Fragment&gt;<br />
                    &nbsp;);<br />
                {'}'}<br />
                </code>
            </div>
            <p className='Main-info-text'>
                <span>Использование:</span>
            </p>
            <div className='Main-info-code'>
                <code>
                class Columns extends React.Component {'{'}<br />
                &nbsp;render() {'{'}<br />
                &nbsp;&nbsp;return (<br />
                    &nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Привет&lt;/td&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Мир&lt;/td&gt;<br />
                    &nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;<br />
                    &nbsp;&nbsp;);<br />
                    &nbsp;{'}'}<br />
                {'}'}<br />
                </code>
            </div>
            <p className='Main-info-text'>
                Существует сокращённая запись объявления фрагментов. Однако такая запись 
                не поддерживает ключи или атрибуты.
                Она выглядит как пустые теги:
            </p>
            <div className='Main-info-code'>
                <code>
                class Columns extends React.Component {'{'}<br />
                &nbsp;render() {'{'}<br />
                &nbsp;&nbsp;return (<br />
                    &nbsp;&nbsp;&nbsp;&lt;&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Привет&lt;/td&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Мир&lt;/td&gt;<br />
                    &nbsp;&nbsp;&nbsp;&lt;/&gt;<br />
                    &nbsp;&nbsp;);<br />
                    &nbsp;{'}'}<br />
                {'}'}<br />
                </code>
            </div>
        </div>
    )
}

export default ReactFragment;