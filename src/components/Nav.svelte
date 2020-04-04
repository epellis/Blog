<script>
  let expandBurger = false;
</script>

<nav class="navbar" role="navigation">
  <div class="navbar-brand">
    <a href="/" class="navbar-item">
      <strong>Ned Ellis</strong>
    </a>
    <a
      href="/"
      on:click|preventDefault={() => (expandBurger = !expandBurger)}
      role="button"
      class={expandBurger ? 'navbar-burger burger is-active' : 'navbar-burger burger'}>
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
    <a href="https://github.com/epellis" class="navbar-item">
      <img
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        alt="github logo"
        style="width: 25px" />
    </a>
    <a href="https://www.linkedin.com/in/epellis/" class="navbar-item">
      <img
        src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
        alt="linkedin logo"
        style="width: 25px" />
    </a>
  </div>

  <div class="navbar-end">
    <div class={expandBurger ? 'navbar-menu is-active' : 'navbar-menu'}>
      <div class="navbar-start">
        <a class="navbar-item" href="/about">About</a>
        <a class="navbar-item" href="/projects">Projects</a>
        <a class="navbar-item" href="/notes">Notes</a>
        <a class="navbar-item" href="/pictures">Pictures</a>
      </div>
    </div>

  </div>
</nav>
