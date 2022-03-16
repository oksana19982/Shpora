import React from 'react';

function ReactMemo(){
    return (
        <div className='Main-info'>
            <h1 className='Main-info-title'>React.Memo</h1>
            <div className='Main-info-code'>
                <code>
                const MyComponent = React.memo(function MyComponent(props) {'{'}<br />
                &nbsp;/* рендер с использованием пропсов */<br />
                {'}'});<br />
                </code>
            </div>
            <p className='Main-info-text'>
                React.memo — это компонент высшего порядка. <br />
                Компонент высшего порядка — это функция, которая 
                принимает компонент и возвращает новый компонент.
            </p>
            <hr />
            <p className='Main-info-text'>
                Если ваш компонент всегда рендерит одно и то же при неменяющихся 
                пропсах, вы можете обернуть его в вызов React.memo для повышения 
                производительности в некоторых случаях, мемоизируя тем самым результат. 
                Это значит, что React будет использовать результат последнего рендера, 
                избегая повторного рендеринга.
            </p>
            <p className='Main-info-text'>
                По умолчанию он поверхностно сравнивает вложенные объекты в объекте props. 
                Если вы хотите контролировать сравнение, вы можете передать свою 
                функцию сравнения в качестве второго аргумента.
            </p>
            <div className='Main-info-code'>
                <code>
                    function MyComponent(props) {'{'}<br />
                    &nbsp;/* рендер с использованием пропсов */<br />
                    {'}'}<br />
                    function areEqual(prevProps, nextProps) {'{'}<br />
                    &nbsp;/*<br />
                    &nbsp;возвращает true, если nextProps рендерит<br />
                    &nbsp;тот же результат что и prevProps,<br />
                    &nbsp;иначе возвращает false<br />
                    &nbsp;*/<br />
                    {'}'}<br />
                    <br />
                    export default React.memo(MyComponent, areEqual);<br />
                </code>
            </div>
            <p className='Main-info-text'>
                Этот метод предназначен только для оптимизации производительности. 
                Не полагайтесь на него, чтобы «предотвратить» рендер, так как это 
                может привести к ошибкам.
            </p>
            <p className='Main-info-text'>
                Аналогом в классовых компонентах выступает метод shouldComponentUpdate()
            </p>
        </div>
    )
}

export default ReactMemo;