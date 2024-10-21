// import  "./assets/images/logo.svg"
import img1 from './assets/images/logo.svg'
import img2 from './assets/images/din 1.png'

function header(params){
    return(
        <header>
        <div class="HedTop">
            <div>
                <img src={img1} alt=""/>
            </div>
            <div>
                <a href="">О нас</a>
                <a href="">Услуги</a>
                <a href="">Аренда</a>
            </div>
            <div class="HedBtn">
                <button>Связаться</button>        
            </div>
        </div>


        <div class="HedFut">
            <div class="HedFutLeft">
                <h1>Веломастерская “Велозар”</h1>
                <p>
                    Мы, мастера веломастерской «Велозар»,
                    как раз те самые счастливые люди,
                    которые смогли превратить свое увлечение
                    и хобби в профессию. Мы сами любим
                    кататься и хотим чтобы Ваш двухколесный
                    друг приносил Вам только радость
                    и удовольствие от езды.
                </p>
            </div>

            <div class="HedFutRa">
                <div><img src={img2} alt=""/></div>
                
            </div>
        </div>

    </header> 
    )
}

export default header;





