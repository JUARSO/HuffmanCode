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
        var n = "N"
    }
}