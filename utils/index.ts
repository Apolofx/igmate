interface FB {
  init: any;
  getLoginStatus: any;
}

export async function addScript(callback: any) {
  (function (d, s, id) {
    let js,
      fjs = d.getElementsByTagName(s)[0] as HTMLScriptElement;
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s) as HTMLScriptElement;
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs?.parentNode?.insertBefore(js, fjs);
    js.onload = callback;
    fjs.onload = callback;
  })(document, "script", "facebook-jssdk");
}
