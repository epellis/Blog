<script>
  import moment from "moment";
  import MDBase from "./MDBase.svelte";

  export let document;
</script>

<section class="section">
  <div class="container">
    <h1 class="title">{document.title}</h1>
    <h2 class="subtitle">
      Posted on
      <time>{moment(document.date).format('MMMM Do YYYY')}</time>
    </h2>
  </div>
  <br />
  <div class="container">
    <MDBase tree={document.ast} />
  </div>
</section>
