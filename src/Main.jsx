import img1 from "./assets/images/image 1.png"
import img2 from "./assets/images/linkedin-sales-navigator-402831.png"
function main(params){
    return(
        <main>
        <div class="Dmain1">
            <div class="DIVarticleI">
                <article class="articleI">
                    <h1>Что мы предлагаем</h1>
                    <p>В нашей мастерской можно 
                        выполнить комплексное 
                        техническое обслуживание 
                        велосипеда, ремонт и настройку 
                        всех его узлов, шиномонтажные 
                        работы. Вовремя проведенное ТО 
                        велосипеда помогает избежать 
                        многих проблем и дорогого ремонта.  
                        Все работы выполняем качественно 
                        и с душой. </p>
                </article>
    
                <div class="DIVarticleIIMG">
                    <img src={img1}/>
                </div>
            </div>
        </div>
    
    
        <article class="mainArt">
            <p class="mainArtP1">
                Приехав к нам однажды, 
                многие наши клиенты становятся постоянными, 
                а часть из них даже друзьями.
            </p>
            <p class="mainArtP2">
                А также в нашей мастерской можно 
                отремонтировать электросамокат и 
                электровелосипед.
            </p>
        </article>
    
    
        <nav>
            <div class="nawDiv1">
                <h1>Годовое ТО
    
                </h1>
            </div>
            <div class="nawDiv2">
                <h1>Выравнивание
                    колес</h1>
            </div>
            <div class="nawDiv3">
                <h1>Настройка
                    переключателей</h1>
            </div>
        </nav>
    
    
        <section>
            <img src={img2} alt="" width="1000px"/>
            <div>
                <h1>Прокат велосипедов</h1>
                <p>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</p>
            </div>
        </section>
    </main>
    )
 
}

export default main
