
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jogador_transf').del()
    .then(() => {
      // Inserts seed entries
      return knex('jogador_transf').insert([
        {jogador_origem: 1, jogador_destino: 2, valor: 3, tipo_operacao: 1, data_operacao: new Date(), operacao_cancelada: false },
        {jogador_origem: 1, jogador_destino: 3, valor: 2, tipo_operacao: 1, data_operacao: new Date(), operacao_cancelada: false },
        {jogador_origem: 3, jogador_destino: 4, valor: 6, tipo_operacao: 1, data_operacao: new Date(), operacao_cancelada: false }
      ]);
    });
};