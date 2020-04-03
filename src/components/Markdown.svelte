<script>
  import moment from "moment";

  export let document;

  console.log("Document:", document);
</script>

<section class="section">
  <div class="container">
    <h1 class="title">{document.title}</h1>
    <h2 class="subtitle">
      Posted on
      <time>{moment(document.date).format('MMMM Do YYYY')}</time>
    </h2>
  </div>

  <div class="container">
    <p>I'm the document</p>
  </div>
</section>
