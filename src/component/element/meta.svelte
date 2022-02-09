<script>
    export let titlePrefix = ""
    export let title = "Figo Host | Growing With Your Trust - Domain, Hosting and web service provider"
    export let description = "Reliable, highly available, enterprise-grade hassle-free hosting, servers, large number of domain TLDs, SSL, Sitelock, Codeguard and oter web services - everything at one place."
    export let keywords = "web hosting, domain names, website hosting, vps hosting, cloud hosting, wordpress hosting, managed hosting, managed vps, figo, figo host"
    export let url = "https://figo.host/"
    export let img = "https://figo.host/assest/img/logo-400x400.jpg"
    export let html = ""
</script>

<svelte:head>
    <title>{titlePrefix}Figo Host | Growing With Your Trust - Domain, Hosting and web service provider</title>
    <meta name="title" content="{titlePrefix + title}">
    <meta name="description" content="{description}">
    <meta name="keywords" content="{keywords}">
    <meta name="dcterms.subject" content="{keywords}.">

    <meta property="og:url" content="{url}">
    <meta property="og:title" content="{titlePrefix + title}"/>
    <meta property="og:image" content="{img}">
    <meta property="og:description" content="{description}">
    <meta name="twitter:title" content="{titlePrefix + title}"/>
    <meta name="twitter:description" content="{description}"/>
    <meta name="twitter:image" content="{img}"/>
    {@html html}
    <slot></slot>
</svelte:head>