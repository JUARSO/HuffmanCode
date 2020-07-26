class NodeList{
    /**
     * Contructor de la clase Node el cual guarda el dato y el siguiete en el puntero
     * @param data: el valor que guarda en el Node
     * @param next: el apuntador del siguiete node
     */
    constructor(data,next) {
        this.data = data;
        this.next = next;
    }
}

class List{
    /**
     * Constructor de la lista enlaza tiene dos parametros el dato y el siguiete dato a utilizar
     * @param data: valor de dato guradado en la lista enlazada.
     * @param next: el apuntador del suiguiente valor.
     */
    constructor(data,next) {
        this.head = null;
        this.size = 0;
    }

    /**
     * Añade un nuevo dato en la lista enlazada y revisa si existe el primer dato
     * @param data
     */
    add(data){
        const newNode = new NodeList(data,null)
        if(!this.head){
            this.head = newNode
        }else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    /**
     * Agrega un elemento en la posicion que desee
     * @param data: el valor que va a ser agregado
     * @param index: posicion en la cual va a ser agregado el dato
     */
    insertIndex(data,index){
        if(index < 0 || index > this.size){
            return null
        }
        const newNode = new Node(data);
        let current = this.head;
        let previous;

        if (index === 0) {
            newNode.next = current;
            this.head = newNode;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }

            newNode.next = current;
            previous.next = newNode;
        }
        this.size++;
    }

    /**
     * Hace un print en la Lista Enlazada
     */
    print() {
        if (this.size === 0) {
            return null;
        }
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data += '->';
            current = current.next;
        }
        result += 'X';
        return result;
    }

    /**
     * Remueve el node en la poscion que se le solcita en la lista enlazada
     * @param index la posicion la cual se va a eliminar
     * @returns {null|*} en caso de que no exista returna nulo
     */
    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return null;
        }
        let current = this.head;
        let previous = null;
        if (index === 0) {
            this.head = current.next;
        }else{
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
        return current.data;
    }

    /**
     * Returna el valor de largo de la lista y si esta esta vacia
     * @returns {boolean} si esta esta vacia returna true o false
     */
    isEmpty(){
        if(this.size === 0){
            return true;
        }else{
            return false;
        }
    }
    getSize(){
        return this.size;
    }

}
