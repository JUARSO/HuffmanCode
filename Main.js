class NodeList{
    /**
     * Contructor de la clase Node el cual guarda el dato y el siguiete en el puntero
     * @param data: el valor que guarda en el node
     * @param next: el apuntador del siguiete node
     * @param num: Cantidad dentro del archivo
     */
    constructor(data,num, next) {
        this.data = data;
        this.num = num;
        this.next = next;

    }
}
class List {
    /**
     * Constructor de la lista enlaza tiene dos parametros el dato y el siguiete dato a utilizar
     * @param data: valor de dato guradado en la lista enlazada.
     * @param next: el apuntador del suiguiente valor.
     */
    constructor(data, num, next) {
        this.head = null;
        this.size = 0;
    }

    /**
     * Añade un nuevo dato en la lista enlazada y revisa si existe el primer dato
     * @param data
     */
    add(data, num) {
        const newNode = new NodeList(data, num, null)
        if (!this.head) {
            this.head = newNode
        } else {
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
    insertIndex(data, num, index) {
        if (index < 0 || index > this.size) {
            return null
        }
        const newNode = new Node(data, num);
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
            result += current.data;
            result += current.num += "->"
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
        } else {
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
    isEmpty() {
        if (this.size === 0) {
            return true;
        } else {
            return false;
        }
    }

    getSize() {
        return this.size;
    }

    /**
     * Revisa si existe el dato que sera añadido a la lista para que no lo añada en algunas circustancias
     * @param data
     * @returns {boolean}
     */
    exist(data) {
        let current = this.head;
        if (data == this.head) {
            return true
        }
        if (data != this.head) {
            while (current) {
                if (current.data == data) {
                    return true
                }
                current = current.next;
            }
            return false
        }
    }
    sorted() {
        var posicion = 0;
        let current = this.head;
        let siguiente = this.head.next
        while (current && siguiente) {
            if (current.num <= siguiente.num) {
                current = current.next;
                siguiente = siguiente.next;
                posicion += 1;
            } else {
                var val = current;
                this.removeFrom(posicion);
                this.add(val.data, val.num);
                posicion = 0;
                current = this.head
                siguiente = this.head.next;
            }
        }
    }
}

class NodeTree{
    /**
     * Constructor de los Nodos del Arbol Binario tiene guardado un dato y los puenteros del arbol del valor izquierdo y
     * derecho
     * @param dato
     */
    constructor(dato){
        this.dato=dato;
        this.hizq=null;
        this.hder=null;
    }

    /**
     * Cambia el valor del dato
     * @param valor
     * @constructor
     */
    set Dato(valor){
        this.dato=valor;
    }

    /**
     * Cambia el valor del puntero izquierdo del dato
     * @param valor
     * @constructor
     */

    set setHizq(valor){
        this.hizq=valor;
    }

    /**
     * Cambia el valor de puntero horizontal derecho
     * @param valor
     * @constructor
     */
    set setHder(valor){
        this.hder=valor;
    }

    /**
     * Obtiene el valor del dato
     * @returns {*} Retorna el dato
     * @constructor
     */
    get Dato(){
        return this.dato;
    }

    /**
     * Returna el valor que existe en la horizontal izquierda
     * @returns {null}
     * @constructor
     */
    get Hizq(){
        return this.hizq;
    }

    /**
     * Retorna el valor que existe en la horizontal derecha
     * @returns {null}
     * @constructor
     */
    get Hder(){
        return this.hder;
    }
}

class Tree {
    /**
     * Constructor del arbol en el cual se encuentran guardados los valores para la apliacacion del Huffman
     */
    constructor() {
        this.raiz = null;
    }

    /**
     * Agrega el primer valor del dato
     * @param nuevo
     */
    agregar(nuevo) {
        if (this.raiz == null) {
            this.raiz = nuevo;
        } else {
            this.agregate(nuevo, this.raiz);
        }
    }

    /**
     * Agrega al Arbol Binario un nuevo node
     * @param n nuevo nodo
     * @param r raiz del nodo
     */
    agregate(n, r){
        if(n.Dato < r.Dato){
            if(r.Hizq==null){
                r.Hizq=n;
            }
            else{
                this.agregate(n, r.Hizq);
            }
        }
        else{
            if(r.Hder==null){
                r.Hder=n;
            }
            else{
                this.agregate(n, r.Hder);
            }
        }
    }

    /**
     * Busca un dato especifico Dentro del arbol
     * @param dato
     * @param raiz
     * @returns {boolean}
     */
    buscar(dato, raiz){
        if(dato==raiz.dato){
            return true;
        }
        else{
            if(raiz.Hizq != null){
                if(this.buscar(dato, raiz.Hizq)){
                    return true;
                }
            }
            if(raiz.Hder != null){
                if(this.buscar(dato, raiz.Hder)){
                    return true;
                }
            }
        }
        return false;
    }
}


class HuffmanCode {
    /**
     * Parse los datos escritos dentro de los caracteres de la lista
     */
    parseoDatos(cadena) {
        var data;
        var datoInicial;
        data = new String(cadena)
        var contador = 0;
        while (data.length != contador) {
            datoInicial = data.charAt(contador)
            var contador2 = 0;
            var repeticiones = 0;
            while (data.length != contador2) {
                if (datoInicial == data.charAt(contador2)) {
                    repeticiones += 1;
                }
                contador2 += 1;
            }
            if (!list.exist(datoInicial)) {
                list.add(datoInicial, repeticiones)
            }
            contador += 1;
            contador2 = contador2 + 1;
            repeticiones = 0;
        }
    }

    CodificacionDeDatos() {
        var contN;
        var n = "N"+contN
    }
}
const list = new List();
/**
 * Parse los datos escritos dentro de los caracteres de la lista
 */
function parseoDatos(cadena) {
    var data;
    var datoInicial;
    data = new String(cadena)
    var contador = 0;
    while (data.length != contador) {
        datoInicial = data.charAt(contador)
        var contador2 = 0;
        var repeticiones = 0;
        while (data.length != contador2) {
            if (datoInicial == data.charAt(contador2)) {
                repeticiones += 1;
            }
            contador2 += 1;
        }
        if (!list.exist(datoInicial)) {
            list.add(datoInicial, repeticiones)
        }
        contador += 1;
        contador2 = contador2 + 1;
        repeticiones = 0;
    }
}
function CodificacionDeDatos() {
    var flag = true
    var numArbolito;
    var arbol = "Arbolito"+ numArbolito;
    while (flag){
        const tree = new Tree();
        var num;
        if(list.size == 1){
            numArbolito +=1;
            tree.agregar(arbol);
            tree.raiz.hder = list.head;
            num = list.head.num;
            list.removeFrom(0);
            list.add(tree,num);
            flag = false;
        }
        else {
            num = (list.head.num + list.head.next.num);
            numArbolito +=1;
            tree.agregar(arbol);
            tree.raiz.hizq = list.head;
            tree.raiz.hder = list.head.next;
            list.add(tree,num);
            list.removeFrom(0);
            list.removeFrom(1);
        }
        num = 0;
        list.sorted();
        console.log(list.print())
    }
}
parseoDatos("abracadabra")
list.sorted()
console.log(list.print())
CodificacionDeDatos()