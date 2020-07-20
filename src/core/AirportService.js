import Table from './Table'
export default class AirportService {
    constructor() {
        this.table  = new Table('#content');
        this.END_POINT = '/zones/fcgi/feed.js?bounds=56.84,55.27,33.48,41.48';
        this.isLoading = false;
        this._fetch()
          .then(()=>{
            this.table.showActive();
            this._watchUpdates();
          });
    }
    /**
     * Set fetch interval
     */
    _watchUpdates(){
        const intervalID = setInterval(()=>{
            if(!this.isLoading) {
                this._fetch();
            } else {
                const intevalID2 = setInterval(()=>{
                    if(!this.isLoading){
                        this._watchUpdates();
                        clearInterval(intevalID2);
                    }
                },50);
                clearInterval(intervalID);
            }
        },5000);
    }
    /** 
     * Fetch data and update table
     */
    async _fetch(){
        this.isLoading = true;
        try {
            const response =  await fetch(this.END_POINT);
            const data = await response.json();
            const check = {};
            Object.entries(data).forEach(([name,data]) =>{
                if(name !== 'full_count' && name !== 'version') {
                    check[name] = data;
                    this.table.addItem(name,data);
                }
            });
            this.table.order();
            this.isLoading = false;
        } catch(e) {
            this.isLoading = false;
        }
    }  
}