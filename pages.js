var pages = {
    'home' : `home`,

    // pagina de manutenção aberta
    'aberto' : `
    <aside class="aberto shadow-lg p-3 mb-5 bg-white rounded" id="aberto">
        <div class="d-flex justify-content-center align-itens-center container">
            <h1 class="modal-title" id="exampleModalCenterTitle">EM ABERTO</h1>
        </div>
        <hr>
        
    </aside>
    `,

    // pagina em andamento
    'andamento' : `
    <aside class="andamento shadow-lg p-3 mb-5 bg-white rounded" id="aberto">
        <div class="d-flex justify-content-center align-itens-center container">
            <h1 class="modal-title" id="exampleModalCenterTitle">EM ANDAMENTO...</h1>
        </div>
        <hr>
        
    </aside>
    `,

    //pagina finalizado
    'finalizado' : `
    <aside class="finalizado shadow-lg p-3 mb-5 bg-white rounded" id="aberto">
        <div class="d-flex justify-content-center align-itens-center container">
            <h1 class="modal-title" id="exampleModalCenterTitle">FINALIZADO</h1>
        </div>
        <hr>
        
    </aside> 
    `,

    //pagina nova solicitacao
    'novaSolicitacao': `
    <aside class="pad-30 nova-solicitacao" id="nova-solicitacao">
        <form action="" class="shadow-lg p-3 mb-5 bg-white rounded">
            <div class="d-flex justify-content-center align-itens-center container">
                <h1 class="modal-title" id="exampleModalCenterTitle">NOVA SOLICITAÇÃO</h1>
            </div>
            <hr>
            <!-- coluna setor/prioridade-->
            <div class="row">
                <!--seleção do setor-->
                <div class="col-md-6">
                    <label for="setor">Setor</label>
                    <select name="setor" id="setor" class="form-control">
                        <option select>Escolher...</option>
                        <option value="suporte">Suporte</option>
                        <option value="infra">Departamento de Infra</option>
                        <option value="juridico">Juridico</option>
                        <option value="financeiro">Financeiro</option>
                        <option value="limpeza">Limpeza</option>
                    </select>
                </div>
                <!--// seleção do setor-->

                <!--prioridade-->
                <div class="col-md-6">
                    <label for="prioridade">Prioridade</label>
                    <select name="prioridade" id="prioridade" class="form-control">
                        <option select>Escolher...</option>
                        <option value="alta">Alta</option>
                        <option value="media">Media</option>
                        <option value="baixa">Baixa</option>
                    </select>
                </div>
                <!--// prioridade-->
            </div><!--// coluna setor/prioridade-->

            <!-- coluna serviço-->
            <div class="row">
                <div class="col-md-12">
                    <label for="servico">Serviço</label>
                    <input type="text" id="servico" class="form-control" placeholder="Descreva brevemente a solicitação" aria-label="DescricaoBreve">
                </div>
            </div>
            <!--// coluna serviço-->

            <!-- dados pessoais e horario-->
            <div class="row">
                <div class="col-md-4">
                    <label for="solicitante">Solicitante</label>
                    <input id="userSolicitante"type="text" class="form-control" placeholder="Seu nome..." aria-label="Solicitante" disabled>
                </div>

                <div class="col-md-4">
                    <label for="setor">Setor</label>
                    <input id="userSetor" type="text" class="form-control" placeholder="Setor..." aria-label="Setor" disabled>
                </div>

                <div class="col-md-4">
                    <label for="horario">Horario</label>
                    <input id="horario" type="text" class="form-control" placeholder="Horario" aria-label="Horario" disabled>
                </div>
            </div>
            <!--// dados pessoais e horario-->
            <div class="row">
                <div class="col">
                    <label for="descricao">Descrição</label>
                    <textarea class="form-control" name="descricao" id="descricao" rows="5"  placeholder="Insira aqui os dados de sua solicitação detalhadamente"></textarea>
                </div>
            </div>
            <input type="hidden" id="status" value="1">

            <div class="col-6">
                <div class="form-check col-6">
                  <input class="form-check-input" type="checkbox" id="gridCheck">
                  <label class="form-check-label" for="gridCheck">Confirmo os dados enviados</label>
                </div>
              </div>
              <div class="col-6">
                <button type="button" class="btn btn-danger" onClick="solicitacao.cancelar()" id="botaoCancelar">Cancelar</button>
                <button type="button" class="btn btn-success" onClick="solicitacao.salvar()" id="botaoEnviar">Enviar solicitação</button>
              </div>
        </form>
    </aside>
    `,
    'error' : `error 404 - not found`
}