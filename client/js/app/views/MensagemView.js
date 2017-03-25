class MensagemView extends View{

    constructor(elemento){

       super(elemento);

    }

    _template(model){
        return model.texto ? `<p class="elert alert-info">${model.texto}</p>` : '<p></p>';
    }

}