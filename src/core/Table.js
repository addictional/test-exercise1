import CustomStorage from './CustomStorage';
export default class Table {
    /**
     * @param {string} selector css query
     */
    constructor(selector = ""){
        this.items = {};
        this.container = document.querySelector(selector);
        this.ul = null;
        this.storage = new CustomStorage('filter');
        this.sort = 'ASC';
        if(!this.container) {
            throw new Error('Wrong selector');
        }
        this._createList();
        this.order = this.order.bind(this);
    }

    /** create container for table row */
    _createList() {
        this.ul = document.createElement('ul');
        this.ul.className = "table"
        this.container.appendChild(this.ul)
    }

    getDistanceFromLatLonInKm(x1,y1) {
        const R = 6371; 
        const dLat = this.deg2rad(55.410307-x1);  
        const dLon = this.deg2rad(37.902451-y1); 
        const a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(this.deg2rad(x1)) * Math.cos(this.deg2rad(55.410307)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        const d = R * c; 
        return d;
    }

    deg2rad(deg) {
        return deg * (Math.PI/180)
    }
    /** Create row node 
     * @param data {any} row data
     * @param length {number} distance
     */
    _createLiNode(data,length) {
        const node = document.createElement('li');
        node.className = 'table__item';
        node.setAttribute('data-length',length);
        node.innerHTML = this._createHtml(data,length);
        return node;
    }

    /**
     * Create content for row
     * @param {any} data row data
     * @param {number} length distance
     * @return {string} string with html
     */
    _createHtml(data,length) {
        return `    
            <span class="table__item-riec">Рейс: ${data[0] || "Неизвестно"} </span>
            <span class="table__item-coord">Координаты: ${data[1]}°, ${data[2]}°  </span>
            <span class="table__item-speed">Скорость: ${data[3]} км/ч</span>
            <span class="table__item-destination">Курс: ${data[5]}° </span>
            <span class="table__item-height">Высота: ${data[4]} м</span>
            <span class="table__item-cods">Коды аэропортов: ${data[11]} - ${data[12]} </span>
            <span class="table__item-remotness">Дальность: ${Math.floor(length*1000)} м</span>
        `;
    }

    /**
     * set events on row
     * @param {HTMLElement} node 
     * @param {string} id id of object
     */
    _addEvent(node,id) {
        node.addEventListener('click',()=>{
            const item = this.items[id];
            item.active  = !item.active
            this.storage.add(id,item.active);
            item.node.className = `table__item ${item.active ? 'table__item--active' : ''}`;
        })
    }

    /** 
     * @param {any} data row data
     * @param {string} id id of object 
     */
    addItem(id,data) {
        const [shit,x,y] = data;
        const length =  this.getDistanceFromLatLonInKm(x,y);
        const active = typeof this.storage.read()[id] != 'undefined' ? this.storage.read()[id] : false;
        if(this.items[id]) {
            this.items[id].node.innerHTML = this._createHtml(data,length);
            this.items[id].node.setAttribute('data-length',length);
        } else {
            const node = this._createLiNode(data,length);
            this._addEvent(node,id);
            this.items[id] = {node ,active};
            this.ul.appendChild(node);
        }
    }
    /**
     * Add class to active rows
     */
    showActive() {
        Object.entries(this.items).forEach(([key,item]) => {
            if(item.active) {
                item.node.classList.add('table__item--active');
            }
        });
    }
    /**
     * Order table by distance
     * @param {string} [sort]
     */
    order (sort) {
        if(typeof sort != 'undefined') {
            this.sort = sort;
        }
        Array.from(this.ul.querySelectorAll('.table__item')).sort( (a, b) => {
            return this.sort === "ASC" ? a.dataset.length-b.dataset.length : b.dataset.length-a.dataset.length;
        }).forEach(el=>{
            this.ul.appendChild(el);
        })
   
    }
}   