//name
//user types in username and outputs the name back to the user with additional text
let username;
document.getElementById("myBtn").onclick = function(){
    username = document.getElementById("name").value.trim();
    document.getElementById("next").hidden = true;
    if (!username) {
        document.getElementById("love").textContent = "Please enter your name first.";
        return;
    }
    console.log(username);
    document.getElementById("love").textContent = `I love you so much ${username}`;
    document.getElementById("much").textContent = `${username} you mean so much to me. I know I don't say it often but it's very much true. I can't wait to spend the rest of my life with you.`
    document.getElementById("next").hidden = false;
}
document.getElementById("next").onclick = function(){
    document.getElementById("lotsOfLove").textContent = "You're so important to me there's nothing you can do to change that fact!"
    document.getElementById("myMJ").textContent =`I love you ${username}, my MJ`
}