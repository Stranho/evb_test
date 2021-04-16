const conn = require('./conn');

module.exports = {
    /* Jogadores */
    getAll() {
       return conn('jogador').orderBy('nome');
    },

    getOne(id) {
        return conn('jogador').where('id', id).first();
    },

    insert(jogador) {
        return conn('jogador').insert(jogador, '*');
    },


    /* Transferências */
    getTransfers(idJogadorOrigem) {
        return conn('jogador_transf').where('jogador_origem', idJogadorOrigem);
    },
    
    getTransfersReceived(idJogadorOrigem) {
        // return conn('jogador_transf').join('jogador AS jog1', 'jog1.id', 'jogador_transf.jogador_origem').select('jog1.nome as nomeOrigem')
        // .join('jogador AS jog2', 'jog2.id', 'jogador_transf.jogador_destino').select('jog2.nome as nomeDestino')
        // .select('jogador_transf.*', 'nomeOrigem', 'nomeDestino').where('jogador_transf.jogador_origem', idJogadorOrigem);
        return conn.select('jt.*', 'jog1.nome')
                .from('jogador_transf AS jt')
                .join('jogador AS jog1', 'jog1.id', 'jt.jogador_origem')
                .where('jt.jogador_destino', '=', idJogadorOrigem)
    },

    getTransfersMade(idJogadorOrigem) {
        // return conn('jogador_transf').join('jogador AS jog1', 'jog1.id', 'jogador_transf.jogador_origem').select('jog1.nome as nomeOrigem')
        // .join('jogador AS jog2', 'jog2.id', 'jogador_transf.jogador_destino').select('jog2.nome as nomeDestino')
        // .select('jogador_transf.*', 'nomeOrigem', 'nomeDestino').where('jogador_transf.jogador_origem', idJogadorOrigem);
        return conn.select('jt.*', 'jog2.nome')
                .from('jogador_transf AS jt')
                .join('jogador AS jog2', 'jog2.id', 'jt.jogador_destino')
                .where('jt.jogador_origem', '=', idJogadorOrigem)
    },

    async cancelTransfer(id) {
        const transfer = await conn('jogador_transf').where('id', id).first();
        const jogadorOrigem = await conn('jogador').where('id', parseInt(transfer.jogador_origem)).first();
        const jogadorDestino = await conn('jogador').where('id', parseInt(transfer.jogador_destino)).first();
        
        await conn('jogador').where('id', '=', transfer.jogador_origem).update('saldo', parseFloat(jogadorOrigem.saldo) + parseFloat(transfer.valor));
        await conn('jogador').where('id', '=', transfer.jogador_destino).update('saldo', parseFloat(jogadorDestino.saldo) - parseFloat(transfer.valor));
        await conn('jogador_transf').where('id', '=', id).update('operacao_cancelada', 'true');
    },

    async transferValue(data) {
        if(parseFloat(data.valor) < 0 ) return;

        const jogadorOrigem = await conn('jogador').where('id', parseInt(data.idOrigem)).first();
        const jogadorDestino = await conn('jogador').where('id', parseInt(data.idDestino)).first();

        await conn('jogador').where('id', '=', jogadorOrigem.id).update('saldo', parseFloat(jogadorOrigem.saldo) - parseFloat(data.valor));
        await conn('jogador').where('id', '=', jogadorDestino.id).update('saldo', parseFloat(jogadorDestino.saldo) + parseFloat(data.valor));
        await conn('jogador_transf').insert({
            jogador_origem: parseInt(data.idOrigem),
            jogador_destino: parseInt(data.idDestino),
            valor: parseFloat(data.valor),
            tipo_operacao: 1,
            data_operacao: new Date(),
            operacao_cancelada: false
        });
    }
}