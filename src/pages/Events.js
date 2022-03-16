import React from 'react';
import ExampleOnClick from './ExampleOnClick';

function Events(){
    return (
        <div className='Main-info'>
            <h1 className='Main-info-title'>Events</h1>
            <p className='Main-info-text'>
            Обработка событий в React-элементах очень похожа на обработку событий 
            в DOM-элементах. Но есть несколько синтаксических отличий:
            </p>
            <p className='Main-info-text'>
             <ul>
                 <li>
                 События в React именуются в стиле camelCase вместо нижнего регистра.
                 </li>
                 <li>
                 С JSX вы передаёте функцию как обработчик события вместо строки.
                 </li>
             </ul>
            </p>
            <hr />
            <p className='Main-info-text'>
            Например, в HTML:
            </p>
            <div className='Main-info-code'>
                <code>
                    &lt;button onclick=&quot;activateLasers()&quot;&gt;<br />
                    &nbsp;Активировать лазеры<br />
                    &lt;/button&gt;<br />
                </code>
            </div>
            <p className='Main-info-text'>
            В React немного иначе:
            </p>
            <div className='Main-info-code'>
                <code>
                    &lt;button onclick={'{'}activateLasers{'}'}&gt;<br />
                    &nbsp;Активировать лазеры<br />
                    &lt;/button&gt;<br />
                </code>
            </div>
            <p className='Main-info-text'>
            Ещё одно отличие — в React нельзя предотвратить обработчик события 
            по умолчанию, вернув false. Нужно явно вызвать preventDefault. 
            </p>
            <p className='Main-info-text'>
                Существует множество поддерживаемых событий, вот общий список:
                <ul>
                    <li>Буфер обмена: onCopy, onCut, onPaste</li>
                    <li>Составление/ввод данных: onCompositionEnd, onCompositionStart, onCompositionUpdate</li>
                    <li>Клавиатура: onKeyDown, onKeyPress, onKeyUp</li>
                    <li>Фокусировка: onFocus, onBlur</li>
                    <li>Форма: onChange, onInput, onSubmit</li>
                    <li>Мышь: onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd, 
                        onDragEnter, onDragExit, onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown,
                        onMouseEnter, onMouseLeave, onMouseMove, onMouseOut, onMouseOver, onMouseUp
                    </li>
                    <li>Выделение: onSelect</li>
                    <li>Касание: onTouchCancel, onTouchEnd, onTouchMove, onTouchStart</li>
                    <li>UI: onScroll</li>
                    <li>Колёсико мышки: onWheel</li>
                    <li>Медиа: onAbort, onCanPlay, onCanPlayThrough, onDurationChange, 
                        onEmptied, onEncrypted, onEnded, onError, onLoadedData, onLoadedMetadata, 
                        onLoadStart, onPause, onPlay, onPlaying, onProgress, onRateChange, onSeeked, 
                        onSeeking, onStalled, onSuspend, onTimeUpdate, onVolumeChange, onWaiting
                    </li>
                    <li>Изображение: onLoad, onError</li>
                    <li>Анимация: onAnimationStart, onAnimationEnd, onAnimationIteration</li>
                    <li>Переход: onTransitionEnd</li>
                </ul>
            </p>
            <p className='Main-info-text'>
                Чаще всего используются onClick и OnChange. 
                Ниже приведен пример использования onClick в функциональной компоненте.
            </p>
            <div className='Main-info-code'>
                <code>
                function ExampleOnClick(){'{'} <br />
                &nbsp;const [on, setOn] = useState(true)<br />
                &nbsp;function handleClick() {'{'}<br />
                &nbsp;&nbsp;setOn(!on);<br />
                &nbsp;{'}'}<br />
                &nbsp;return (<br />
                &nbsp;&nbsp;&lt;button className='Main-info-button' onClick={'{'}() =&gt; handleClick(){'}'}&gt;{'{'}on ? 
                &quot;Включено&quot; : &quot;Выключено&quot;{'}'}&lt;/button&gt;<br />
                &nbsp;)<br />
                {'}'}<br />
                <br />
                export default ExampleOnClick;<br />
                </code>
            </div>
            <br />
            <ExampleOnClick />
        </div>
        
    )
}

export default Events;