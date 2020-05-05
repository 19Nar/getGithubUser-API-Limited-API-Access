button.onclick = async () => {

    let user_URL = "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";
    console.log(user_URL)
    let response = await fetch(user_URL);
    let data = await response.json()
    showUserResults(data);
};

const showUserResults = (allResults) => {

    results.innerHTML = "";
    let html = ""
    allResults.forEach(user => {

        console.log(user)

        html += `
  <div class="col-lg-2 overflow-auto border">
  <a href="${user.author.html_url}"><img src = ${user.author.avatar_url} class="w-100" title="See profile"></a>
  <h4 class="text-center">${user.commit.author.name}</h4>
  <h6>${user.commit.committer.email}</h6>
  <small>Last updated: ${user.commit.committer.date.slice(0, 10)}</small>
  <a href="${user.html_url}">Last work link</a> <br>
  <small><b>Work message:</b> ${user.commit.message.slice(0, 50)}</small>
</div>
         `
    })
    results.innerHTML = html;
}