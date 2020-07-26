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

    set Hizq(valor){
        this.hizq=valor;
    }

    /**
     * Cambia el valor de puntero horizontal derecho
     * @param valor
     * @constructor
     */
    set Hder(valor){
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
