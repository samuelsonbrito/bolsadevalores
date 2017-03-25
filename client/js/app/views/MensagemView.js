class MensagemView extends View{

    _template(model){
        return model.texto ? `<p class="elert alert-info">${model.texto}</p>` : '<p></p>';
    }

}