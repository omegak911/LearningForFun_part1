Vue.component('individual-blog', {
  template: 
    `<div>
      <div class="blogLeft">
        <div class="blogTitle">{{ blog.title }}</div>
        <div class="blogAuthor">{{ blog.author }}</div>
      </div>
      <div class="blogRight">
        <div>{{ blog.label }}</div>
      </div>
    </div>`,
  props: ['blog']
})

const Blog = new Vue({
  el: '#app',
  data() {
    return {
      blogLabels: ['Pokemon', 'Vue', 'React', 'TV'],
      blogPosts: [
        {
          title: 'New pokemon discovered!',
          author: 'Ash Ketchum',
          label: 'Pokemon'
        },
        {
          title: 'Learning Vue components',
          author: 'Front End Masters',
          label: 'Vue'
        },
        {
          title: 'React new Context API',
          author: 'Facebook',
          label: 'React'
        },
        {
          title: 'Why Family Guy is still on the air',
          author: 'Entertainment Right Now',
          label: 'TV'
        },
      ],
      filter: '',
    }
  },
  methods: {
    submitBlog(e){
      let title = e.target[0].value;
      let author = e.target[1].value;
      let label = e.target[2].value;
      
      this.blogPosts.push({ title, author, label })
      e.target.reset();
    }
  },
  computed: {
    filteredBlogs() {
      return this.blogPosts.filter(post => post.label.match(this.filter))
    }
  }
})