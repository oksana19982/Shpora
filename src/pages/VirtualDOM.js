import React from 'react';

function VirtualDOM(){
    return (
        <div className='Main-info'>
            <h1 className='Main-info-title'>Virtual DOM</h1>
            <p className='Main-info-text'>
                <span>Что такое DOM?</span>
            </p>
            <p className='Main-info-text'>
                Перед тем, как мы начнем вникать в то, что из себя представляет 
                DOM виртуальный, давайте немного поговорим о том, чем является DOM реальный.
            </p>
            <p className='Main-info-text'>
                DOM – это представление HTML-документа в виде дерева тегов. 
                В соответствии с объектной моделью документа («Document Object Model», 
                коротко DOM), каждый HTML-тег является объектом. Вложенные теги являются 
                «детьми» родительского элемента. Текст, который находится внутри тега, также является объектом.<br />
                DOM (аббревиатура от Document Object Model) — способ представления 
                структурного документа с помощью объектов.
                Веб-браузеры обрабатывают составляющие DOM, и мы можем взаимодействовать 
                с ними, используя JavaScript и CSS.
            </p>
            <hr />
            <p className='Main-info-text'>
                <span>Проблема DOM</span>
            </p>
            <p className='Main-info-text'>
                Главная проблема DOM — он никогда не был рассчитан для создания 
                динамического пользовательского интерфейса (UI). Поэтому для эффективного 
                взаимодействия с DOM используется Virtual DOM.
                Virtual DOM не является стандартом и в конечном итоге мы по-прежнему 
                взаимодействуем с DOM, но делаем это как можно реже и более эффективно.
            </p>
            <p className='Main-info-text'>
                <span>Virtual DOM</span>
            </p>
            <p className='Main-info-text'>
                Вместо того, чтобы взаимодействовать с DOM напрямую, мы работаем 
                с его легковесной копией. Мы можем вносить изменения в копию, исходя 
                из наших потребностей, а после этого применять изменения к реальному DOM.
                При этом происходит сравнение DOM-дерева с его виртуальной копией, определяется 
                разница и запускается перерисовка того, что было изменено.
            </p>
            <p className='Main-info-text'>
                Такой подход работает быстрее, потому как не включает в себя все тяжеловесные 
                части реального DOM.
                Но только если мы делаем это правильно, а именно знаем когда делать перерисовку DOM и как
                её делать эффективно. Реализация может оказаться довольно сложной,
                поэтому придуманы специальные библиотеки, которые могут помочь нам в этом. <br />
                <br />
                Одной из таких самых известных библиотек является <span>React</span> от команды 
                разработчиков Facebook.
            </p>
        </div>
    )
}

export default VirtualDOM;