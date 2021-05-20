module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('alunos', [
      {
        nome: 'Fulano',
        sobrenome: 'da Silva',
        email: 'FulandoSilva@email.com',
        idade: 24,
        peso: 75,
        altura: 1.8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'ferdinando',
        sobrenome: 'padinho',
        email: 'fer-padinando@email.com',
        idade: 14,
        peso: 50,
        altura: 1.65,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'maria',
        sobrenome: 'costa',
        email: 'mar_costa@email.com',
        idade: 19,
        peso: 62,
        altura: 1.7,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('alunos', null, []);
  },
};
