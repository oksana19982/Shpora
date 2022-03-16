import React from 'react';

function Keys(){
    return (
        <div className='Main-info'>
            <h1 className='Main-info-title'>Keys</h1>
            <p className='Main-info-text'>
                Ключи помогают React определять, какие элементы были 
                изменены, добавлены или удалены. Их необходимо указывать, 
                чтобы React мог сопоставлять элементы массива с течением времени:
            </p>
            <div className='Main-info-code'>
                <code>
                const numbers = [1, 2, 3, 4, 5];<br />
                const listItems = numbers.map((number) =&gt;<br />
                &nbsp;&lt;li key={'{'}number.toString(){'}'}&gt;<br />
                &nbsp;&nbsp;{'{'}number{'}'}<br />
                &nbsp;&lt;/li&gt;<br />
                );<br />
                </code>
            </div>
            <p className='Main-info-text'>
                Лучший способ выбрать ключ — это использовать строку, которая 
                будет явно отличать элемент списка от его соседей. Чаще всего вы 
                будете использовать ID из ваших данных как ключи.
            </p>                     
            <p className='Main-info-text'>
                <span>Извлечение компонентов с ключами</span><br />
                Ключи нужно определять непосредственно внутри массивов.
                Например, если вы извлекаете компонент ListItem, то нужно 
                указывать ключ для {'<ListItem />'} в массиве, а не в элементе 
                {'<li>'} внутри самого ListItem.
            </p>
            <p className='Main-info-text'>
                <span>Ключи должны быть уникальными среди соседних элементов</span><br />
                Ключи внутри массива должны быть уникальными только среди своих 
                соседних элементов. Им не нужно быть уникальными глобально. Можно 
                использовать один и тот же ключ в двух разных массивах.
            </p>
            <p className='Main-info-text'>
                <span>Встраивание map() в JSX</span><br />
                JSX позволяет встроить любое выражение в фигурные скобки, 
                так что мы можем включить результат выполнения map():
            </p>
            <div className='Main-info-code'>
                <code>
                function NumberList(props) {'{'}<br />
                &nbsp;const numbers = props.numbers;<br />
                &nbsp;return (<br />
                &nbsp;&nbsp;&lt;ul&gt;<br />
                &nbsp;&nbsp;&nbsp;{'{'}numbers.map((number) =&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;ListItem key={'{'}number.toString(){'}'}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value={'{'}number{'}'} /&gt;<br />
                &nbsp;&nbsp;&nbsp;){'}'}<br />
                &nbsp;&nbsp;&lt;/ul&gt;<br />
                &nbsp;);<br />
                {'}'}<br />
                </code>
            </div>
        </div>
    )
}

export default Keys;