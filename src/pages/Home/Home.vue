<template>
  <div>
    <FindCourse/>
    <Advantages/>
    <Courses/>
    <Recommendations/>
    <TopCategories/>
    <Comments/>
    <NonStudents/>
    <Partners/>
  </div>
</template>

<script>
  import { FindCourse, Advantages, Recommendations, NonStudents, Partners, Comments, TopCategories, Courses } from 'components/Sections'

  export default {
    components: {
      FindCourse,
      Advantages,
      Recommendations,
      NonStudents,
      Partners,
      Comments,
      TopCategories,
      Courses,
    },
  }
</script>
