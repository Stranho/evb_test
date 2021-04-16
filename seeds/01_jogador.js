
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jogador').del()
    .then(() => {
      // Inserts seed entries
      return knex('jogador').insert([
        {nome: 'Tahlia Hadley Adkins', saldo: 5},
        {nome: 'Fortunata Lesleigh Cornell', saldo: 13},
        {nome: 'Loreen Rocco Aloia', saldo: 6},
        {nome: 'Donelle Érika Allan', saldo: 16},
        {nome: 'Elma Nigella Derby', saldo: 10},
        {nome: 'Rhianna Landen Affini', saldo: 10},
        {nome: 'Russel Larissa Silveira', saldo: 10},
        {nome: 'Paige Aronne Bosco', saldo: 10},
        {nome: 'Lesly Avianna Souza', saldo: 10},
        { nome: 'Luigina Elfleda Cason', saldo: 10},
        {nome: 'Leandra Chastity Davidson', saldo: 10},
        {nome: 'Melchiorre Jezza Lazzari', saldo: 10},
        {nome: 'Frances Dionisia Anthonyson', saldo: 10},
        {nome: 'Mayson Robyn Adamoli', saldo: 10},
        {nome: 'Sharyl Darrel Garner', saldo: 10},
        {nome: 'Mary Lou Lauraine Costantini', saldo: 10},
        {nome: 'Howie Zara Benjaminson', saldo: 10},
        {nome: 'Rinaldo Jeanie Glazier', saldo: 10},
        {nome: 'Italia Brunella Brivio', saldo: 10},
        {nome: 'Calista Flavia Dawson', saldo: 10},
        {nome: 'Marvyn Starla Peel', saldo: 10},
        {nome: 'Major Libby Tracy', saldo: 10},
        {nome: 'Eveleen Brinley Good', saldo: 10},
        {nome: 'Sheila Augusto Brock', saldo: 10},
        {nome: 'Twila Serafino Vann', saldo: 10},
        {nome: 'Cullen Betty Bissette', saldo: 10},
        {nome: 'Clelia Saturnino Beake', saldo: 10},
        {nome: 'Rogério Elsdon Masi', saldo: 10},
        {nome: 'Vinny Tottie Magro', saldo: 10},
        {nome: 'Sandford Madeline Marchand', saldo: 10},
        {nome: 'Hester Loredana Aaron', saldo: 10},
        {nome: 'Roque Eryn Seabrook', saldo: 10},
        {nome: 'Kay Teresa Masi', saldo: 10},
        {nome: 'Eileen Johnathon Bryan', saldo: 10},
        {nome: 'Kenyon Rhett Moon', saldo: 10},
        {nome: 'Erika Liv Dick', saldo: 10},
        {nome: 'Keith Jacki Pugliese', saldo: 10},
        {nome: 'Sabryna Robena Patrick', saldo: 10}
      ]);
    });
};
