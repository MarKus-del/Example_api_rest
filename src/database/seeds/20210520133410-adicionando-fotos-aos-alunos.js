module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('fotos', [
      {
        originalname: 'ducktyping.png',
        filename: '1621517535525_14924_.png',
        aluno_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        originalname: 'ducktyping.png',
        filename: '1621517566260_16817_.png',
        aluno_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        originalname: 'ducktyping.png',
        filename: '1621517579138_14194_.png',
        aluno_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      }], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('fotos', null, {});
  },
};
