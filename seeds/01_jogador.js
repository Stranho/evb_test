
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jogador').del()
    .then(() => {
      // Inserts seed entries
      return knex('jogador').insert([
        {id: 1, nome: 'Tahlia Hadley Adkins', saldo: 5},
        {id: 2, nome: 'Fortunata Lesleigh Cornell', saldo: 13},
        {id: 3, nome: 'Loreen Rocco Aloia', saldo: 6},
        {id: 4, nome: 'Donelle Érika Allan', saldo: 16},
        {id: 5, nome: 'Elma Nigella Derby', saldo: 10},
        {id: 6, nome: 'Rhianna Landen Affini', saldo: 10},
        {id: 7, nome: 'Russel Larissa Silveira', saldo: 10},
        {id: 8, nome: 'Paige Aronne Bosco', saldo: 10},
        {id: 9, nome: 'Lesly Avianna Souza', saldo: 10},
        {id: 10, nome: 'Luigina Elfleda Cason', saldo: 10},
        {id: 11, nome: 'Leandra Chastity Davidson', saldo: 10},
        {id: 12, nome: 'Melchiorre Jezza Lazzari', saldo: 10},
        {id: 13, nome: 'Frances Dionisia Anthonyson', saldo: 10},
        {id: 14, nome: 'Mayson Robyn Adamoli', saldo: 10},
        {id: 15, nome: 'Sharyl Darrel Garner', saldo: 10},
        {id: 16, nome: 'Mary Lou Lauraine Costantini', saldo: 10},
        {id: 17, nome: 'Howie Zara Benjaminson', saldo: 10},
        {id: 18, nome: 'Rinaldo Jeanie Glazier', saldo: 10},
        {id: 19, nome: 'Italia Brunella Brivio', saldo: 10},
        {id: 20, nome: 'Calista Flavia Dawson', saldo: 10},
        {id: 21, nome: 'Marvyn Starla Peel', saldo: 10},
        {id: 22, nome: 'Major Libby Tracy', saldo: 10},
        {id: 23, nome: 'Eveleen Brinley Good', saldo: 10},
        {id: 24, nome: 'Sheila Augusto Brock', saldo: 10},
        {id: 25, nome: 'Twila Serafino Vann', saldo: 10},
        {id: 26, nome: 'Cullen Betty Bissette', saldo: 10},
        {id: 27, nome: 'Clelia Saturnino Beake', saldo: 10},
        {id: 28, nome: 'Rogério Elsdon Masi', saldo: 10},
        {id: 29, nome: 'Vinny Tottie Magro', saldo: 10},
        {id: 30, nome: 'Sandford Madeline Marchand', saldo: 10},
        {id: 31, nome: 'Hester Loredana Aaron', saldo: 10},
        {id: 32, nome: 'Roque Eryn Seabrook', saldo: 10},
        {id: 33, nome: 'Kay Teresa Masi', saldo: 10},
        {id: 34, nome: 'Eileen Johnathon Bryan', saldo: 10},
        {id: 35, nome: 'Kenyon Rhett Moon', saldo: 10},
        {id: 36, nome: 'Erika Liv Dick', saldo: 10},
        {id: 37, nome: 'Keith Jacki Pugliese', saldo: 10},
        {id: 38, nome: 'Sabryna Robena Patrick', saldo: 10}
      ]);
    });
};
