export default class CustomStorage {
    /**
     * @param {string} name name of local storage variable
     */
    constructor(name) {
        this.name = name;
        const storageData = localStorage.getItem(this.name);
        this.data = storageData ? JSON.parse(storageData) : {};
    }
    /**
     * Push data to storage
     */
    _push() {
        localStorage.setItem(this.name,JSON.stringify(this.data));
    }
    /**
     * @param {string} key variable name
     * @param {any} data variable data
     */
    add(key,data) {
        this.data[key] = data;
        this._push();
    }
    /**
     * @param {string} key variable name
     * @param {any} data variable data
     */
    update(key,data) {
        this.add(key,data);
    }

    /**
     * @return {any} local storage data
     */
    read() {
        return this.data;
    }
}