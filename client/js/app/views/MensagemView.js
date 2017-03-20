class MensagemView{

    constructor(elemento){
        this._elemento = elemento;
    }

    _template(model){
        return model.texto ? `<p class="elert alert-info">${model.texto}</p>` : '<p></p>';
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }
}