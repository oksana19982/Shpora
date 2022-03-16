import React from 'react';

function PageRouter (){
    return (
        <div className='Main-info'>
            <h1 className='Main-info-title'>Router</h1>
            <p className='Main-info-text'>
                Здесь мы поговорим о такой важной составляющей любого серьезного 
                веб-приложения, как маршрутизация. Пользователь должен видеть где 
                он находится в данный момент времени в приложении, а также иметь 
                возможность навигации по истории. Для поддержки маршрутизации реакт использует
                библиотеку Router.
            </p>
            <hr />
            <p className='Main-info-text'>
                <span>Библиотека react-router</span>
            </p>
            <p className='Main-info-text'>
                Данная библиотека предоставляет следующие возможности:
                <ul>
                    <li>Навигация по клику (компонент &lt;Link&gt;)</li>
                    <li>Перенаправление (компонент &lt;Redirect&gt;)</li>
                    <li>Маршрутизация (компонент Route)</li>
                    <li>История (свойство history)</li>
                </ul>
            </p>
            <p className='Main-info-text'>
                Для того, чтобы лучше разобраться, рассмотрим конкретный пример:
            </p>
            <div className='Main-info-code'>
                <code>
                import React from &quot;react&quot;;<br />
                import {'{'}<br />
                &nbsp;BrowserRouter as Router,<br />
                &nbsp;Routes,<br />
                &nbsp;Route,<br />
                &nbsp;Link<br />
                {'}'} from &quot;react-router-dom&quot;;<br />
                <br />
                export default function App() {'{'}<br />
                &nbsp;return (<br />
                &nbsp;&nbsp;&lt;Router&gt;<br />
                &nbsp;&nbsp;&lt;div&gt;<br />
                &nbsp;&nbsp;&nbsp;&lt;nav&gt;<br />
                &nbsp;&nbsp;&nbsp;&lt;ul&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Link to=&quot;/&quot;&gt;Home&lt;/Link&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Link to=&quot;/about&quot;&gt;About&lt;/Link&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Link to=&quot;/users&quot;&gt;Users&lt;/Link&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;<br />
                &nbsp;&nbsp;&nbsp;&lt;/ul&gt;<br />
                &nbsp;&nbsp;&nbsp;&lt;/nav&gt;<br />
                &nbsp;&nbsp;&nbsp;<br />
                &nbsp;&nbsp;&nbsp;&lt;Routes&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Route path=&quot;/about&quot; element={'{'}&lt; About/&gt;{'}'} /&gt;<br />
                
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Route path=&quot;/users&quot; element={'{'}&lt; Users/&gt;{'}'}/&gt;<br />
                
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;Route path=&quot;/&quot; element={'{'}&lt; Home/&gt;{'}'}/&gt;<br />
                
                &nbsp;&nbsp;&nbsp;&lt;/Routes&gt;<br />
                &nbsp;&nbsp;&lt;/div&gt;<br />
                &nbsp;&nbsp;&lt;/Router&gt;<br />
                &nbsp;);<br />
                {'}'}<br />
                <br />
                function Home() {'{'}<br />
                &nbsp;return &lt;h2&gt;Home&lt;/h2&gt;;<br />
                {'}'}<br />
                <br />
                function About() {'{'}<br />
                &nbsp;return &lt;h2&gt;About&lt;/h2&gt;;<br />
                {'}'}<br />
                <br />
                function Users() {'{'}<br />
                &nbsp;return &lt;h2&gt;Users&lt;/h2&gt;;<br />
                {'}'}<br />
                </code>
            </div>
            <p className='Main-info-text'>
                <span>Router</span> определяет набор маршрутов и, когда к приложению, приходит 
                запрос, то Router выполняет сопоставление запроса с маршрутами. 
                И если какой-то маршрут совпадает с URL запроса, то этот маршрут 
                выбирается для обработки запроса.
            </p>
            <p className='Main-info-text'>
                И также для выбора маршрута определен объект <span>Routes.</span> Он 
                содержит набор маршрутов и позволяет выбрать первый попавшийся маршрут и 
                его использовать для обработки.
            </p>
            <p className='Main-info-text'>
                Каждый маршрут представляет объект <span>Route.</span> Он имеет ряд атрибутов. 
                В частности, здесь для маршрута устанавливаются два атрибута:
                <ul>
                    <li>
                        <span>path:</span> шаблон адреса, с которым будет сопоставляться 
                        запрошенный адрес URL
                    </li>
                    <li>
                        <span>element</span> - тот компонент, который отвечает за обработку 
                        запроса по этому маршруту
                    </li>
                </ul>
                Например, последний маршрут выступает в качестве корневого. 
                Он сопоставляется с адресом "/" и обрабатывается компонентом Home.
            </p>
            <p className='Main-info-text'>
                Путь в виде звездочки - <span>"*"</span> указывает, что этот маршрут будет сопоставляться 
                со всеми адресами URL, которые не соответствуют предыдущим маршрутам. И он 
                будет обрабатываться компонентом NotFound. Таким образом мы можем задать 
                обработку при обращении к несуществующим ресурсам в приложении.
            </p>
            <div className='Main-info-code'>
                <code>
                &lt;Route path=&quot;*&quot; element={'{'}&lt;NotFound /&gt;{'}'} /&gt;
                </code>
            </div>
            <p className='Main-info-text'>
                При работе с маршрутами следует учитывать, что мы не сможем просто кинуть 
                страницу index.html в браузер, и у нас все заработает, как в прошлых статьях. 
                Чтобы система маршрутизации заработала, нам надо разместить файл index.html на веб-сервере.
            </p>
            <p className='Main-info-text'>
                <span>Сопоставление запроса с маршрутом</span><br />
                При определении маршрутов следует учитывать, что действует точное сопоставление 
                с шаблоном, который указан в свойстве path элемента Route. Например, возьмем первый маршрут:
            </p>
            <div className='Main-info-code'>
                <code>
                &lt;Route path=&quot;/about&quot; element={'{'}&lt;About /&gt;{'}'} /&gt;
                </code>
            </div>
            <p className='Main-info-text'>
                Данный маршрут соответствует запросам:
                <ul>
                    <li>http://localhost:3000/about</li>
                    <li>http://localhost:3000/about/</li>
                </ul>
                Однако запросу http://localhost:3000/about/25 этот маршрут уже НЕ соответствует.
            </p>
        </div>
    )
}

export default PageRouter;