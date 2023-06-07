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
    return fetch(req);
  },
};
