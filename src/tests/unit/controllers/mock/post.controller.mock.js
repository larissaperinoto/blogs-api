const post = {
  title: 'Latest updates, August 1st',
  content: 'The whole text for the blog post goes here in this key',
  categoryIds: [1, 2]
};

const posts = [
  {
    id: 1,
    title: 'Post do Ano',
    content: 'Melhor post do ano',
    userId: 1,
    published: '2011-08-01T19:58:00.000Z',
    updated: '2011-08-01T19:58:51.000Z',
    user: {
      id: 1,
      displayName: 'Lewis Hamilton',
      email: 'lewishamilton@gmail.com',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg'
    },
    categories: [
      {
        id: 1,
        name: 'Inovação'
      }
    ]
  },
]


module.exports = {
  post, posts
}