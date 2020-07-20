import './style.sass'
import AirportService from  './core/AirportService'



const airport = new AirportService();


Array.from(document.querySelectorAll('button')).forEach(button => {
    button.addEventListener('click',function(){
        airport.table.order(this.dataset.order)
    })
})



