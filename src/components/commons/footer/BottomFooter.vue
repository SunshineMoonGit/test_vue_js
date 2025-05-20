<template>
  <div class="footer bg-500 text-dark py-4 mt-5">
    <div class="container">
      <div class="row justify-content-between">

        <div class="col-md-3 mb-4 d-flex flex-column align-items-start">
          <div class="d-flex gap-5">
            <i class="bi bi-twitter-x fs-3"></i>
            <i class="bi bi-instagram fs-3"></i>
            <i class="bi bi-youtube fs-3"></i>
            <i class="bi bi-linkedin fs-3"></i>
          </div>
        </div>

        <div v-for="item in footers" class="col-md-3">
          <h6 class="fw-bold">{{ item.type }}</h6>
          <ul class="list-unstyled">
            <li v-for="v in item.li">{{ v }}</li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>

const footers = [
  {
    type: 'Use cases',
    li: [
      'UI design',
      'UX design',
      'Wireframing',
      'Diagramming',
      'Brainstorming',
      'Online whiteboard',
      'Team collaboration',
    ]
  },
  {
    type: 'Explore',
    li: [
      'Design',
      'Prototyping',
      'Development features',
      'Design systems',
      'Collaboration features',
      'Design process',
      'FigJam',
    ]
  },
  {
    type: 'Resources',
    li: [
      'Blog',
      'Best practices',
      'Colors',
      'Color wheel',
      'Support',
      'Developers',
      'Resource library',
    ]
  },
]

</script>

<style scoped>
/* .footer {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
} */
</style>
