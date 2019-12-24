const WeatherUrl = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-B5282D9D-8FDD-40E9-AD48-B1DF3270465D";

var cards = document.querySelector(".all");
var cardAll = cards.querySelector('.swiper-wrapper');
var dt = new Date();
var dts = [dt.getFullYear(), (dt.getMonth() + 1), dt.getDate(), dt.getDay(), dt.getHours(), dt.getMinutes(), dt.getSeconds()];

// setInterval(function autoTime() {
//     var dt = new Date();
//     var dts = [dt.getFullYear(), (dt.getMonth() + 1), dt.getDate(), dt.getDay(), dt.getHours(), dt.getMinutes(), dt.getSeconds()];
// }, 500);
//fetch抓資料
fetch(WeatherUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        // console.log(myJson)
        const taiwan = myJson.records.location;

        taiwan.forEach(Alltaiwan => {
            // console.log(Alltaiwan)
            // let dt = new Date();
            // const dts = [dt.getFullYear(), (dt.getMonth() + 1), dt.getDate(), dt.getDay(), dt.getHours(), dt.getMinutes(), dt.getSeconds()];
            /////////////年////////////////月/////////////日/////////////星期////////時/////////////分/////////////////秒
            
            let area = Alltaiwan.locationName;
            let wx = Alltaiwan.weatherElement[0].time[0].parameter.parameterName;
            let pop = Alltaiwan.weatherElement[1].time[0].parameter.parameterName;
            let ci = Alltaiwan.weatherElement[3].time[0].parameter.parameterName;
            let minT = Alltaiwan.weatherElement[2].time[0].parameter.parameterName;
            let maxT = Alltaiwan.weatherElement[4].time[0].parameter.parameterName;

            cardAll.innerHTML += `
            <div class="swiper-slide">
                <div class="all-1">
                    <div class="all-11">
                        <div class="all-1-top">
                            <div class="all-1-top-L">
                                <div class="all-time">
                                    <h3>${dts[0]}</h3>
                                    <h1>${dts[1]}/${dts[2]}</h1>&emsp;&emsp;
                                    <h1>${dts[4]}:${dts[5]}:${dts[6]}</h1>&emsp;&emsp;
                                </div>
                                <p>${wx}</p>
                                <p>${pop}</p>
                                <p>${ci}</p>
                                <p>${minT}~${maxT}</p>
                            </div>
                            <div class="all-1-top-R">
                                <h1>${area}</h1>
                            </div>
                        </div>
                        <div class="all-1-bottmo"></div>
                    </div>
                </div>
            </div>
            `;
        });

        var swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });

        // setInterval(function(){
        //     console.log('2');

        // },1000);
    })