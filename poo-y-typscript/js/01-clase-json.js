var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'Disco',
    velocidadMaxima: '60km/h',
    cambiarColor: function(nuevo_color) {
        this.color = nuevo_color;
        console.log(this);
        
    }
};

bicicleta.cambiarColor("Azul");
