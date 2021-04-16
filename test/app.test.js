const { expect } = require('chai');
const request = require('supertest');
const conn = require('../db/conn');
const app = require('../index');

describe('App-Test', () => {
    before((done) => {
        // migra e preenche
        conn.migrate.latest().then(() => {
            return conn.seed.run();
        }).then(() => { done(); console.log('done'); } );
    });

    it('Lista todos os registros', (done) => {
        request(app)
            .get('/Jogadores')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('array');
                done();
            });
    });
    
    it('Lista um registro ID: 1', (done) => {
        request(app)
            .get('/Jogadores/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('array');
                done();
            });
    });
});