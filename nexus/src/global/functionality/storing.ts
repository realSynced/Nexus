export function handleSave( email: string, userName: string) {
    if (typeof window !== "undefined" && window.localStorage) {
    //   localStorage.setItem("username", username);
    //   localStorage.setItem("email", "12345");
      localStorage.setItem("userData", JSON.stringify({ email: {email}, username: {userName} }));
  
    //   let username = localStorage.getItem("username");
    //   let userId = localStorage.getItem("userId");
    //   let userData = JSON.parse(localStorage.getItem("userData")!);
    //   let keys: string[] = [];
    //   for (let i = 0; i < localStorage.length; i++) {
    //     keys.push(localStorage.key(i)!);
    //   }
    }
  }