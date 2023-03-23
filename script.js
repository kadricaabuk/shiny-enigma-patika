let posts = [
    { title: 'post 1', author: 'author 1', date: '21.10.2018' },
    { title: 'post 2', author: 'author 2', date: '21.10.2019' },
    { title: 'post 3', author: 'author 3', date: '21.10.2020' },
    { title: 'post 4', author: 'author 4', date: '21.10.2021' },
]

const listPosts = () => posts.map(post => `${post.title},  ${post.author}, ${Date(post.date)}`)

const addPost = async () => new Promise((res, rej) => {
  posts.push({title: 'new post', author: 'new author', date: Date.now()})
  if(posts.length > 4) res('New Book Added')
  rej("Try Again")
})

const addList = async () => {
  try {
    let res = await addPost()
    console.log("--> ", res)
    console.log(listPosts())
  } catch (err){
    console.log(err)
  }
}

addList()