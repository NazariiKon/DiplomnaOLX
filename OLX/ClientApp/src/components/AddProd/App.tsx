import React from 'react';
import './App.css';
import './comp/checkbox.css';
import './comp/category_cards.css';
import './comp/load-btn.css';
import  './comp/button.css';



const App = () =>{
  return (
    
    <div>
{/* 
      <Top width='auto' height='98px' >
       <div className='hadderlogo-img'>
      <img src="https://cdn.discordapp.com/attachments/994181547840241676/994181642228879430/logo.png"/>
      </div>
      <div className='menu-img'>
      


      </div>
      </Top> */}

<body className='body' >

<pre>  </pre>
<pre>  </pre>
<pre>  </pre>
<pre>  </pre>
<pre>  </pre>
<pre>  </pre>
<pre>  </pre>
<div className='text-box'>
    <a href="#"  className='load-pictures-button load-pictures-button-darkpurple load-pictures-button-animated ' ><img src="https://cdn.discordapp.com/attachments/994181547840241676/996142318631534622/Upload_to_the_Cloud.png"/>    Завантажте фотографії</a>

</div>
<label className='label-for-main-text' >Опишіть вашу річ</label>
<pre>  </pre>
<label className='label-for-text' >Назва</label>
<div>
<input  type='text' className='field1' placeholder='Наприклад: труси Calvin Kline'/>
</div>
<pre>  </pre>
<label className='label-for-text' >Опис</label>
<div>
<input className="field2" type="text" placeholder='Наприклад: в них ще ніхто не ходив' />
</div>
<pre>  </pre>
<label className='label-for-text' >Стан</label>
<div>
  <select className='field3'>
      <option>Виберіть</option>
      <option value="Виберіть" >Виберіть</option>
      <option value="Виберіть" >Виберіть</option>
      <option value="Виберіть" >Виберіть</option>

  </select>
</div>
<pre>  </pre>
<label className='label-for-text' >Вироблено в Україні</label>
<div className="field4">
    <label className="label-for-checkbox" >Позначте, якщо вироблено в Україні</label>
    <div>
  <input type="checkbox"/>
    </div>

</div>
<pre>  </pre>

<div className='card-position'>
    <a href='#target1' className='card' >
        <img className='card-picture' src="https://cdn.discordapp.com/attachments/994181547840241676/996143524896592004/Top_Hat.png" />
        <div className='card-text'><h3 id='target1' className='card-text'>Чоловікам</h3>
        </div>
    </a>

    <a href='#target2' className='card' >
        <img className='card-picture' src="https://cdn.discordapp.com/attachments/994181547840241676/996147522756169808/Women_Shoe_Side_View.png" />
        <div className='card-text'><h3 id='target2' className='card-text'>Жінкам</h3>
        </div>
    </a>
    <a href='#target3' className='card' >
        <img className='card-picture' src="https://cdn.discordapp.com/attachments/994181547840241676/996147555735961652/Baby_Footprint.png" />
        <div className='card-text'><h3 id='target3' className='card-text'>Дітям</h3>
        </div>
    </a>
    <a href='#target4' className='card' >
        <img className='card-picture' src="https://cdn.discordapp.com/attachments/994181547840241676/996147575986081943/Armchair.png" />
        <div className='card-text'><h3 id='target4' className='card-text'>Для дому</h3>
        </div>
    </a>
    <a href='#target5' className='card' >
        <img className='card-picture' src="https://cdn.discordapp.com/attachments/994181547840241676/996147591769239552/Dryclean_Short_Cycle.png" />
        <div className='card-text'><h3 id='target5' className='card-text'>Краса та спорт</h3>
        </div>
    </a>

    {/*<div className='card' >*/}
    {/*    <img className='card-picture' src="https://cdn.discordapp.com/attachments/994181547840241676/996147522756169808/Women_Shoe_Side_View.png" />*/}
    {/*    <div className='card-text'><a href='#target2' id='target2' className='card-text'>Жінкам</a>*/}
    {/*    </div>*/}
    {/*</div>*/}
    {/*<div className='card' >*/}
    {/*    <img className='card-picture' src="https://cdn.discordapp.com/attachments/994181547840241676/996147555735961652/Baby_Footprint.png" />*/}
    {/*    <div className='card-text'><a href='#target3' id='target3' className='card-text'>Дітям</a>*/}
    {/*    </div>*/}
    {/*</div>*/}
    {/*<div className='card' >*/}
    {/*    <img className='card-picture' src="https://cdn.discordapp.com/attachments/994181547840241676/996147575986081943/Armchair.png" />*/}
    {/*    <div className='card-text'><a href='#target4' id='target4' className='card-text'>Для дому</a>*/}
    {/*    </div>*/}
    {/*</div>*/}
    {/*<div className='card' >*/}
    {/*    <img className='card-picture' src="https://cdn.discordapp.com/attachments/994181547840241676/996147591769239552/Dryclean_Short_Cycle.png" />*/}
    {/*    <div className='card-text'><a href='#target5' id='target5' className='card-text'>Краса та спорт</a>*/}
    {/*    </div>*/}
    {/*</div>*/}


</div>



{/*<div className='card-position'>*/}
{/*<div>*/}
{/*        <a href='#target1' id='target1' className='card card-text '><img className='card-picture' src="https://cdn.discordapp.com/attachments/994181547840241676/996143524896592004/Top_Hat.png"/>Чоловікам</a>*/}
{/*</div>*/}

{/*<div>*/}
{/*    <a href='#target2' id='target2' className='card card-text '><img className='card-picture' src="https://cdn.discordapp.com/attachments/994181547840241676/996147522756169808/Women_Shoe_Side_View.png"/>Жінкам</a>*/}
{/*</div>*/}
{/*<div >*/}
{/*    <a href='#target3' id='target3' className='card card-text '><img className='card-picture' src="https://cdn.discordapp.com/attachments/994181547840241676/996147555735961652/Baby_Footprint.png"/>Дітям</a>*/}
{/*</div>*/}
{/*<div >*/}
{/*    <a href='#target4' id='target4' className='card card-text '><img className='card-picture' src="https://cdn.discordapp.com/attachments/994181547840241676/996147575986081943/Armchair.png"/>Для дому</a>*/}
{/*</div>*/}
{/*<div >*/}
{/*    <a href='#target5' id='target5' className='card card-text '><img className='card-picture' src="https://cdn.discordapp.com/attachments/994181547840241676/996147591769239552/Dryclean_Short_Cycle.png"/>Краса та спорт</a>*/}
{/*</div>*/}
{/*</div>*/}
<pre>  </pre>

<label className='label-for-text' >Колір</label>
<div>
    <select className='field3'>
        <option>Виберіть</option>
        <option value="Виберіть" >Виберіть</option>
        <option value="Виберіть" >Виберіть</option>
        <option value="Виберіть" >Виберіть</option>

    </select>
</div>
<pre> </pre>

<label className='label-for-text' >Оплата</label>
<div>
    <input className='field1' type="text" placeholder='Наприклад: 1000грн'/>
</div>
<pre> </pre>
<label className='label-for-text' >Ключові слова</label>
<div>
    <input className='field2' type="text" placeholder='Наприклад: труси Calvin Kline, труси'/>

</div>
<pre>  </pre>
<pre>  </pre>
<pre>  </pre>
<pre>  </pre>
<pre>  </pre>
<pre>  </pre>
<pre>  </pre>
<div className='text-box'>
    <a href="#"  className='button button-darkyellow button-animated '>Додати річ</a>

</div>



</body>

    </div>
  );
};


export default App;
