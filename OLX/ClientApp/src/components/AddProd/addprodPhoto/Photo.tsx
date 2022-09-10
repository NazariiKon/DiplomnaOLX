import React from 'react';
import './App.css';
import './comp/checkbox.css';
import './comp/category_cards.css';
import './comp/load-btn.css';
import  './comp/button.css';
import './photo.css';



const App = () =>{
    return (

        <div>


            <body className='body' >

            <pre>  </pre>
            <pre>  </pre>
            <pre>  </pre>
            <pre>  </pre>
            <pre>  </pre>
            <pre>  </pre>
            <pre>  </pre>

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
                <a href='#target5' className='card'>
                    <img className='card-picture' src="https://cdn.discordapp.com/attachments/994181547840241676/996147591769239552/Dryclean_Short_Cycle.png" />
                    <div className='card-text'><h3 id='target5' className='card-text'>Краса та спорт</h3>
                    </div>
                </a>




            </div>




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
