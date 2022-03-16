import React from 'react';

function UseEffect (){
    return (
        <div className='Main-info'>
            <h1 className='Main-info-title'>UseEffect</h1>
            <p className='Main-info-text'>
                Хук эффекта UseEffect даёт вам возможность выполнять побочные эффекты в 
                функциональном компоненте. Побочными эффектами в React-компонентах могут быть: 
                загрузка данных, оформление подписки и изменение DOM вручную.
            </p>
            <p className='Main-info-text'>
                Если вам знакомы классовые методы жизненного цикла React, хук useEffect представляет 
                собой совокупность методов componentDidMount, componentDidUpdate, и componentWillUnmount.
            </p>
            <hr />
            <p className='Main-info-text'>
                <span>Эффекты без сброса</span>
            </p>
            <p className='Main-info-text'>
                Иногда мы хотим выполнить дополнительный код после того, как React обновил DOM. 
                Давайте рассмотрим как хуки позволяют нам реализовывать побочные эффекты,
                которые не требуют сброса. После того, как мы запустили их, можно сразу забыть 
                о них, ведь больше никаких дополнительных действий не требуется. 
            </p>
            <p className='Main-info-text'>
                <span>Пример с использованием хуков</span>
            </p>
            <div className='Main-info-code'>
                <code>
                import React, {'{'} useState, useEffect {'}'} from 'react';<br />
                <br />
                function Example() {'{'}<br />
                &nbsp;const [count, setCount] = useState(0);<br />
                <br />
                &nbsp;useEffect(() =&gt; {'{'}<br />
                &nbsp;&nbsp;document.title = &#x60;Вы нажали ${'{'}count{'}'} раз&#x60;;<br />
                {'}'});<br />
                <br />
                &nbsp;return (<br />
                    &nbsp;&nbsp;&lt;div&gt;<br />
                    &nbsp;&nbsp;&lt;p&gt;Вы нажали {'{'}count{'}'} раз&lt;/p&gt;<br />
                    &nbsp;&nbsp;&lt;button onClick={'{'}() =&gt; setCount(count + 1){'}'}&gt;<br />
                    &nbsp;&nbsp;&nbsp;Нажми на меня<br />
                    &nbsp;&nbsp;&lt;/button&gt;<br />
                    &nbsp;&nbsp;&lt;/div&gt;<br />
                    &nbsp;);<br />
                {'}'}<br />
                </code>
            </div>
            <p className='Main-info-text'>
                <span>Что такое UseEffect?</span><br />
                Используя этот хук, вы говорите React сделать что-то после рендера. 
                React запомнит функцию (то есть «эффект»), которую вы передали и 
                вызовет её после того, как внесёт все изменения в DOM. 
            </p>
            <p className='Main-info-text'>
                <span>Почему же мы вызываем useEffect непосредственно внутри компонента?</span><br />
                Это даёт нам доступ к переменной состояния count (или любым другим пропсам) 
                прямиком из эффекта.
            </p>
            <p className='Main-info-text'>
                <span>Выполняется ли useEffect после каждого рендера?</span><br />
                По умолчанию он будет выполняться после каждого рендера и обновления.
            </p>
            <hr />
            <p className='Main-info-text'>
                <span>Эффекты со сбросом</span>
            </p>
            <p className='Main-info-text'>
                Ранее мы рассмотрели побочные эффекты, которые не требуют сброса. 
                Однако, есть случаи, когда сброс всё же необходим. Например, нам может 
                потребоваться установить подписку на какой-нибудь внешний источник данных. 
                В этом случае очень важно выполнять сброс, чтобы не случилось утечек памяти!
                Рассмотрим пример с использованием хуков:
            </p>
            <div className='Main-info-code'>
                <code>
                useEffect(() =&gt; {'{'}<br />
                &nbsp;function handleStatusChange(status) {'{'}<br />
                &nbsp;&nbsp;setIsOnline(status.isOnline);<br />
                &nbsp;{'}'}<br />
                <br />
                &nbsp;ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);<br />
                &nbsp;return () =&gt; {'{'}<br />
                &nbsp;&nbsp;ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);<br />
                &nbsp;{'}'};<br />
                {'}'});<br />
                </code>
            </div>
            <p className='Main-info-text'>
                <span>Зачем мы вернули функцию из нашего эффекта? </span><br />
                Это даёт нам возможность объединить вместе логику оформления и отмены подписки.
            </p>
            <p className='Main-info-text'>
                <span>Когда именно React будет сбрасывать эффект?  </span><br />
                React будет сбрасывать эффект перед тем, как компонент размонтируется. Однако, 
                как мы уже знаем, эффекты выполняются не один раз, а при каждом рендере. Вот 
                почему React также сбрасывает эффект из предыдущего рендера, перед тем, как 
                запустить следующий.
            </p>
            <p className='Main-info-text'>
                В некоторых эффектах нет этапа сброса, поэтому они не возвращают ничего.
            </p>
            <div className='Main-info-code'>
                <code>
                useEffect(() =&gt; {'{'}<br />
                &nbsp;document.title = `Вы нажали ${'{'}count{'}'} раз`;<br />
                {'}'});<br />
                </code>
            </div>
        </div>
    )
}

export default UseEffect;