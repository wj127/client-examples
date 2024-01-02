const server = Bun.serve({
  port: 3000,
  development: true,
  fetch(req) {
    let res: Response;
    const url = new URL(req.url);

    if (url.pathname === "/")
      res = new Response(Bun.file("./esModules/index.html"));
    else
      res = new Response(Bun.file(`.${url.pathname}`));
    res.headers.set('Access-Control-Allow-Origin', '*');
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    return res;
  },
});

console.log(`Listening on localhost:${server.port}`);
