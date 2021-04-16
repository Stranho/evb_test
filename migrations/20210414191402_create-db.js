
exports.up = function (knex) {
        return knex.schema.createTable('jogador', (table) => {
            table.increments();
            table.text('nome');
            table.float('saldo');
      }).createTable('jogador_transf', table => {
          table.increments();
          table.integer('jogador_origem');
          table.integer('jogador_destino');
          table.float('valor');
          table.integer('tipo_operacao');
          table.timestamp('data_operacao');
          table.boolean('operacao_cancelada');
      });
};

exports.down = function (knex) {
    return knex.schemas.dropTable('jogador').dropTable('jogador_transf');
};
