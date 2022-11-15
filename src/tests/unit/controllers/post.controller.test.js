const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);
const { expect } = chai;

const { postController } = require('../../../controllers');
const { postService } = require('../../../services');
const { post, posts } = require('./mock/post.controller.mock');

describe('Testa a camada controller para a rota "/post"', function () {

  afterEach( function () { sinon.restore() });

  describe('Testa a camada controller para a função "insert"', function () {
    it('Faz a inserção de um novo post', async function () {
      const req = { body: post };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(postService, 'insert').resolves(post);

      await postController.insert(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(post);
    });
  });


  describe('Testa a camada controller para a função "findAll"', function () {
    it('Busca por todos os posts cadastrados', async function () {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(postService, 'findAll').resolves(posts);

      await postController.findAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(posts);
    });
  });

  describe('Testa a camada controller para a função "findById"', function () {
    it('Busca um post pelo Id', async function () {
      const req = { params: { id: 1 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(postService, 'findById').resolves(posts[0]);

      await postController.findById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(posts[0]);
    });
  });

  describe('Testa a camada controller para a função "update"', function () {
    it('Faz a atualização de um post', async function () {
      const req = {
        params: { id: 1 },
        body: { title: post.title, content: post.content },
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(postService, 'update').resolves(posts[0]);

      await postController.update(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(posts[0]);
    });
  });

  describe('Testa a camada controller para a função "remove"', function () {
    it('Faz a remoção de um post', async function () {
      const req = { params: { id: 1 } };
      const res = {};

      res.sendStatus = sinon.stub().returns(res);

      sinon.stub(postService, 'remove').resolves(undefined);

      await postController.remove(req, res);

      expect(res.sendStatus).to.have.been.calledWith(204);
    });
  });

  describe('Testa a camada controller para a função "remove"', function () {
    it('Faz a remoção de um post', async function () {
      const req = { params: { id: 1 } };
      const res = {};

      res.sendStatus = sinon.stub().returns(res);

      sinon.stub(postService, 'remove').resolves(undefined);

      await postController.remove(req, res);

      expect(res.sendStatus).to.have.been.calledWith(204);
    });
  });
});