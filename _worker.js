export default {
  async fetch(request, env) {
    const _url = new URL(request.url);
    if (_url.pathname.startsWith("/5b/")) {
      _url.hostname = "5best1s.com";
      _url.pathname = _url.pathname.slice(3);
    } else {
      _url.hostname = "gitlab.com";
    }
    const req = new Request(_url, request);
    const context = {
      domainA: "xlab.xdawa.shop/5b/",
      domianB: "xlab.xdawa.shop"
    };
    const res = await fetch(req);
    const body = await res.text();
    const newBody = _url.hostname.includes("5best1s.com") 
      ? body.replace(new RegExp(_url.hostname,'g'),context.domainA)
      : body.replace(new RegExp(_url.hostname,'g'),context.domainB);
    
    return new Response(newBody, {
      status: res.status,
      statusText: res.statusText,
      headers: res.headers
    });
  },
};
