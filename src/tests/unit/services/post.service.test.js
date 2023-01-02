const chai = require('chai');
const sinon = require('sinon');
const { expect } = chai;

const { postService } = require('../../../services');
const BlogPost = require('../../../models/BlogPost');

describe('Testa a camada service para a rota "/post"', () => {
  describe('Testa a função "findAll"', () => {
    it('Retorna todos os posts do blog', async () => {
      sinon.stub(BlogPost, "findAll").resolves();

      const response =  await postService.findAll();


    });
  });
});