import React from 'react';

function Refs(){
    return (
        <div className='Main-info'>
            <h1 className='Main-info-title'>Refs</h1>
            <p className='Main-info-text'>
                Рефы дают возможность получить доступ к DOM-узлам 
                или React-элементам, созданным в рендер-методе.
            </p>
            <p className='Main-info-text'>
                В обычном потоке данных React родительские компоненты могут 
                взаимодействовать с дочерними только через пропсы. Чтобы модифицировать 
                потомка, вы должны заново отрендерить его с новыми пропсами. Тем не 
                менее, могут возникать ситуации, когда вам требуется императивно 
                изменить дочерний элемент, обойдя обычный поток данных. Подлежащий 
                изменениям дочерний элемент может быть как React-компонентом, так и 
                DOM-элементом. React предоставляет лазейку для обоих случаев.
            </p>
            <hr />
            <p className='Main-info-text'>
                <span>Когда использовать рефы</span>
            </p>
            <p className='Main-info-text'>
                Ситуации, в которых использование рефов является оправданным:
                <ul>
                    <li>Управление фокусом, выделение текста или воспроизведение медиа.</li>
                    <li>Императивный вызов анимаций.</li>
                    <li>Интеграция со сторонними DOM-библиотеками.</li>
                </ul>
                Избегайте использования рефов в ситуациях, когда задачу можно решить 
                декларативным способом. 
            </p>
            <p className='Main-info-text'>
                <span>Создание рефов</span>
            </p>
            <p className='Main-info-text'>
                Рефы создаются с помощью React.createRef() и прикрепляются 
                к React-элементам через ref атрибут. Обычно рефы присваиваются 
                свойству экземпляра класса в конструкторе, чтобы на них можно 
                было ссылаться из любой части компонента.
            </p>
            <div className='Main-info-code'>
                <code>
                class MyComponent extends React.Component {'{'}<br />
                &nbsp;constructor(props) {'{'}<br />
                &nbsp;&nbsp;super(props);<br />
                &nbsp;&nbsp;this.myRef = React.createRef();<br />
                &nbsp;{'}'}<br />
                &nbsp;render() {'{'}<br />
                &nbsp;&nbsp;return &lt;div ref={'{'}this.myRef{'}'} /&gt;;<br />
                &nbsp;&nbsp;{'}'}<br />
                {'}'}<br />
                </code>
            </div>
            <p className='Main-info-text'>
                <span>Доступ к рефам</span>
            </p>
            <p className='Main-info-text'>
                Когда реф передаётся элементу в методе render, ссылка 
                на данный узел доступна через свойство рефа current.
            </p>
            <div className='Main-info-code'>
                <code>
                    const node = this.myRef.current;
                </code>
            </div>
            <p className='Main-info-text'>
                Значение рефа отличается в зависимости от типа узла:
                <ul>
                    <li>
                        Когда атрибут ref используется с HTML-элементом, 
                        свойство current созданного рефа в конструкторе с 
                        помощью React.createRef() получает соответствующий DOM-элемент.
                    </li>
                    <li>
                        Когда атрибут ref используется с классовым компонентом, 
                        свойство current объекта-рефа получает экземпляр смонтированного компонента.
                    </li>
                    <li>
                        <span>Нельзя использовать ref атрибут с функциональными компонентами,</span> 
                        потому что для них не создаётся экземпляров.
                    </li>
                </ul>
            </p>
            <p className='Main-info-text'>
                <span>Передача DOM-рефов родительским компонентам</span>
            </p>
            <p className='Main-info-text'>
                В редких случаях вам может понадобиться доступ к дочернему DOM-узлу 
                из родительского компонента. В общем случае, такой подход не рекомендуется, 
                т. к. ведёт к нарушению инкапсуляции компонента, но иногда он может 
                пригодиться для задания фокуса или измерения размеров, или положения дочернего DOM-узла.
            </p>
            <p className='Main-info-text'>
                В таком случае рекомендуется использовать перенаправление рефов. <span>Перенаправление рефов 
                позволяет компонентам осуществлять передачу рефа любого дочернего компонента как 
                своего собственного.</span>
            </p>
            <p className='Main-info-text'>
                <span>Колбэк-рефы</span>
            </p>
            <p className='Main-info-text'>
                Кроме того, React поддерживает другой способ определения рефов, который называется 
                «колбэк-рефы» и предоставляет более полный контроль над их присвоением и сбросом.
            </p>
            <p className='Main-info-text'>
                Вместо того, чтобы передавать атрибут ref созданный с помощью createRef(), 
                вы можете передать функцию. Данная функция получит экземпляр React-компонента 
                или HTML DOM-элемент в качестве аргумента, которые потом могут быть сохранены 
                или доступны в любом другом месте.
            </p>
            <p className='Main-info-text'>
                <span>UseRef</span>
            </p>
            <p className='Main-info-text'>
                В функциональных компонентах используется хук useRef:
            </p>
            <div className='Main-info-code'>
                <code>
                import {'{'} useRef {'}'} from 'react';<br />
                <br />
                function MyComponent () {'{'}<br />
                &nbsp;const refContainer = useRef(initialValue);<br />
                &nbsp;return (<br />
                &nbsp;&nbsp;&lt;div ref={'{'}refContainer{'}'} /&gt;<br />
                &nbsp;);<br />
                {'}'}<br />
                </code>
            </div>
        </div>
    )
}

export default Refs;