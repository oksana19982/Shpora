import React from 'react';

function Context (){
    return (
        <div className='Main-info'>
            <h1 className='Main-info-title'>Context</h1>
            <p className='Main-info-text'>
                Контекст позволяет передавать данные через дерево компонентов 
                без необходимости передавать пропсы на промежуточных уровнях.
            </p>
            <hr />
            <p className='Main-info-text'>
                <span>Когда использовать контекст</span>
            </p>
            <p className='Main-info-text'>
                Контекст разработан для передачи данных, которые можно назвать 
                «глобальными» для всего дерева React-компонентов (например, 
                текущий аутентифицированный пользователь, UI-тема или выбранный язык).<br />
                Рассмотрим пример: 
            </p>
            <div className='Main-info-code'>
                <code>
                /* Контекст позволяет передавать значение глубоко<br />
                в дерево компонентов без явной передачи пропсов<br />
                на каждом уровне. Создадим контекст для текущей<br />
                UI-темы (со значением &quot;light&quot; по умолчанию).*/<br />
                const ThemeContext = React.createContext('light');<br />
                <br />
                class App extends React.Component {'{'}<br />
                &nbsp;render() {'{'}<br />
                &nbsp;&nbsp;/* Компонент Provider используется для передачи текущей<br />
                &nbsp;&nbsp;UI-темы вниз по дереву. Любой компонент может использовать<br />
                &nbsp;&nbsp;этот контекст и не важно, как глубоко он находится.<br />
                &nbsp;&nbsp;В этом примере мы передаём &quot;dark&quot; в качестве значения контекста.*/<br />
                &nbsp;&nbsp;return (<br />
                    &nbsp;&nbsp;&lt;ThemeContext.Provider value=&quot;dark&quot;&gt;<br />
                    &nbsp;&nbsp;&nbsp;&lt;Toolbar /&gt;<br />
                    &nbsp;&nbsp;&lt;/ThemeContext.Provider&gt;<br />
                    &nbsp;&nbsp;);<br />
                    &nbsp;{'}'}<br />
                {'}'}<br />
                <br />
                /* Компонент, который находится в середине,<br />
                больше не должен явно передавать тему вниз.*/<br />
                function Toolbar() {'{'}<br />
                &nbsp;return (<br />
                    &nbsp;&nbsp;&lt;div&gt;<br />
                    &nbsp;&nbsp;&lt;ThemedButton /&gt;<br />
                    &nbsp;&nbsp;&lt;/div&gt;<br />
                    &nbsp;);<br />
                {'}'}<br />
                <br />
                class ThemedButton extends React.Component {'{'}<br />
                /* Определяем contextType, чтобы получить значение контекста.<br />
                React найдёт (выше по дереву) ближайший Provider-компонент,<br />
                предоставляющий этот контекст, и использует его значение.<br />
                В этом примере значение UI-темы будет &quot;dark&quot;.*/<br />
                static contextType = ThemeContext;<br />
                &nbsp;render() {'{'}<br />
                &nbsp;&nbsp;return &lt;Button theme={'{'}this.context{'}'} /&gt;;<br />
                &nbsp;{'}'}<br />
                {'}'}<br />
                </code>
                </div>
                <p className='Main-info-text'>
                    Обычно контекст используется, если необходимо обеспечить доступ 
                    данных во многих компонентах на разных уровнях вложенности. По 
                    возможности не используйте его, так как это усложняет повторное 
                    использование компонентов.
                    <br />
                    <span>Если вы хотите избавиться от передачи некоторых пропсов на множество 
                    уровней вниз, обычно композиция компонентов является более простым 
                    решением, чем контекст.</span>
                </p>
                <p className='Main-info-text'>
                    Однако, иногда одни и те же данные должны быть доступны во многих 
                    компонентах на разных уровнях дерева и вложенности. Контекст позволяет 
                    распространить эти данные и их изменения на все компоненты ниже по дереву. 
                    Управление текущим языком, UI темой или кешем данных — это пример тех случаев, 
                    когда реализация с помощью контекста будет проще использования альтернативных 
                    подходов.
                </p>
                <hr />
                <p className='Main-info-text'>
                    <span>API</span>
                </p>
                <p className='Main-info-text'>
                    <span>React.createContext</span><br/>
                    Создаёт объект Context. Когда React рендерит компонент, который подписан 
                    на этот объект, React получит текущее значение контекста из ближайшего 
                    подходящего Provider выше в дереве компонентов.
                </p>
                <div className='Main-info-code'>
                    <code>const MyContext = React.createContext(defaultValue);</code>
                </div>
                <hr />
                <p className='Main-info-text'>
                    <span>Context.Provider</span><br/>
                    Каждый объект Context используется вместе с Provider компонентом, который 
                    позволяет дочерним компонентам, использующим этот контекст, подписаться 
                    на его изменения.
                    <br />
                    Компонент Provider принимает проп value, который будет передан во все 
                    компоненты, использующие этот контекст и являющиеся потомками этого 
                    компонента Provider. Один Provider может быть связан с несколькими компонентами, 
                    потребляющими контекст. Так же компоненты Provider могут быть вложены друг в 
                    друга, переопределяя значение контекста глубже в дереве.
                </p>
                <div className='Main-info-code'>
                    <code>&lt;MyContext.Provider value={'{'}/* некоторое значение */{'}'}&gt;</code>
                </div>
                <hr />
                <p className='Main-info-text'>
                    <span>Class.contextType</span><br/>
                    В свойство класса contextType может быть назначен объект контекста, созданный 
                    с помощью React.createContext(). С помощью этого свойства вы можете 
                    использовать ближайшее и актуальное значение указанного контекста при 
                    помощи this.context. В этом случае вы получаете доступ к контексту, как 
                    во всех методах жизненного цикла, так и в рендер-методе.
                </p>
                <div className='Main-info-code'>
                    <code>
                    class MyClass extends React.Component {'{'}<br/>
                    &nbsp;componentDidMount() {'{'}<br/>
                    &nbsp;&nbsp;let value = this.context;<br/>
                    &nbsp;&nbsp;/* выполнить побочный эффект на этапе монтирования, используя значение MyContext */<br/>
                    &nbsp;{'}'}<br/>
                    &nbsp;componentDidUpdate() {'{'}<br/>
                    &nbsp;&nbsp;let value = this.context;<br/>
                    &nbsp;&nbsp;/* ... */<br/>
                    &nbsp;{'}'}<br/>
                    &nbsp;componentWillUnmount() {'{'}<br/>
                    &nbsp;&nbsp;let value = this.context;<br/>
                    &nbsp;&nbsp;/* ... */<br/>
                    &nbsp;{'}'}<br/>
                    &nbsp;render() {'{'}<br/>
                    &nbsp;&nbsp;let value = this.context;<br/>
                    &nbsp;&nbsp;/* отрендерить что-то, используя значение MyContext */<br/>
                    &nbsp;{'}'}<br/>
                    {'}'}<br/>
                    MyClass.contextType = MyContext;<br/>
                    </code>
                </div>
                <hr />
                <p className='Main-info-text'>
                    <span>Context.Consumer</span><br/>
                    Consumer принимает функцию в качестве дочернего компонента. Эта функция 
                    принимает текущее значение контекста и возвращает React-компонент. 
                    Передаваемый аргумент value будет равен ближайшему (вверх по дереву) значению 
                    этого контекста, а именно пропу value компонента Provider. Если такого 
                    компонента Provider не существует, аргумент value будет равен значению defaultValue, 
                    которое было передано в createContext().
                </p>
                <div className='Main-info-code'>
                    <code>
                    &lt;MyContext.Consumer&gt;
                    {'{'}value =&gt; /* отрендерить что-то, используя значение контекста */{'}'}
                    &lt;/MyContext.Consumer&gt;
                    </code>
                </div>
                <hr />
                <p className='Main-info-text'>
                    <span>Context.displayName</span><br/>
                    Объекту Context можно задать строковое свойство displayName. 
                    React DevTools использует это свойство при отображении контекста.
                    К примеру, следующий компонент будет отображаться под именем MyDisplayName в DevTools:
                </p>
                <div className='Main-info-code'>
                    <code>
                    const MyContext = React.createContext(/* некоторое значение */);<br/>
                    MyContext.displayName = 'MyDisplayName';<br/>
                    <br/>
                    &lt;MyContext.Provider&gt; // &quot;MyDisplayName.Provider&quot; в DevTools<br/>
                    &lt;MyContext.Consumer&gt; // &quot;MyDisplayName.Consumer&quot; в DevTools<br/>
                    </code>
                </div>
                <hr />
        </div>
    )
}

export default Context;