<script>
  const moment = require("moment");

  export let title;
  export let preview;
  export let date;
  export let href;
</script>

<div class="card">
  <div class="card-content">
    <a {href}>
      <p class="title">{title}</p>
    </a>
    <p class="subtitle">{preview}</p>
    <p>
      Written on:
      <time>{moment(date).format('MMMM Do YYYY')}</time>
    </p>
  </div>
</div>
