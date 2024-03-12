const video1 =
{
    title: "The Planet Today",
    source: "/videos/pexels-amar-preciado-20378580.mp4",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam velit eaque harum voluptatum in, adipisci fuga iste, temporibus quaerat dignissimos pariatur aperiam illum vitae non delectus sunt autem mollitia facilis!",
    videoId: "dhdhdh"
}
let video2 =
{
    title: "Waters of Mediterranean",
    source: "/videos/pexels-arvin-deborja-2041251.mp4",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam velit eaque harum voluptatum in, adipisci fuga iste, temporibus quaerat dignissimos pariatur aperiam illum vitae non delectus sunt autem mollitia facilis!",
    videoId: "dfrqwqw"
}
let video3 =
{
    title: "Snow Peaks of Today",
    source: "/videos/pexels-cristian-rossa-14873245.mp4",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam velit eaque harum voluptatum in, adipisci fuga iste, temporibus quaerat dignissimos pariatur aperiam illum vitae non delectus sunt autem mollitia facilis!",
    videoId: "errwww"
}

let video4 =
{
    title: "Amazon Nature",
    source: "/videos/pexels-felix-mittermeier-9851047.mp4",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam velit eaque harum voluptatum in, adipisci fuga iste, temporibus quaerat dignissimos pariatur aperiam illum vitae non delectus sunt autem mollitia facilis!",
    videoId: "iuyttt"
}


let video5 =
{
    title: "Blue Waters",
    source: "/videos/pexels-ivan-khmelyuk-7196522.mp4",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam velit eaque harum voluptatum in, adipisci fuga iste, temporibus quaerat dignissimos pariatur aperiam illum vitae non delectus sunt autem mollitia facilis!",
    videoId: "poutdde"
}


let video6 =
{
    title: "Other side of the world",
    source: "/videos/pexels-joshua-woroniecki-20485.mp4",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam velit eaque harum voluptatum in, adipisci fuga iste, temporibus quaerat dignissimos pariatur aperiam illum vitae non delectus sunt autem mollitia facilis!",
    videoId: "rtttyew"
}

let video7 =
{
    title: "High Oceans",
    source: "/videos/pexels-kelly-19215250.mp4",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam velit eaque harum voluptatum in, adipisci fuga iste, temporibus quaerat dignissimos pariatur aperiam illum vitae non delectus sunt autem mollitia facilis!",
    videoId: "fggfhhdhdu"
}


let loadedVideo1 = document.getElementById("video1");
loadedVideo1.src = video1.source;

let videoHomeCaption1 = document.getElementById("detailhome1");
videoHomeCaption1.innerText = video1.title;

let loadedVideo2 = document.getElementById("video2");
loadedVideo2.src = video2.source;

let videoHomeCaption2 = document.getElementById("detailhome2");
videoHomeCaption2.innerText = video2.title;

let loadedVideo3 = document.getElementById("video3");
loadedVideo3.src = video3.source;
let videoHomeCaption3 = document.getElementById("detailhome3");
videoHomeCaption3.innerText = video3.title;

let loadedVideo4 = document.getElementById("video4");
loadedVideo4.src = video4.source;
let videoHomeCaption4 = document.getElementById("detailhome4");
videoHomeCaption4.innerText = video4.title;

let loadedVideo5 = document.getElementById("video5");
loadedVideo5.src = video5.source;
let videoHomeCaption5 = document.getElementById("detailhome5");
videoHomeCaption5.innerText = video5.title;

let loadedVideo6 = document.getElementById("video6");
loadedVideo6.src = video6.source;
let videoHomeCaption6 = document.getElementById("detailhome6");
videoHomeCaption6.innerText = video6.title;

let loadedVideo7 = document.getElementById("video7");
loadedVideo7.src = video7.source;
let videoHomeCaption7 = document.getElementById("detailhome7");
videoHomeCaption7.innerText = video7.title;

loadedVideo1.onmouseenter = function () {
    loadedVideo1.pause();
    loadedVideo1.muted = false;
    loadedVideo1.play();
}
loadedVideo1.onmouseleave = function () {
    loadedVideo1.muted = true;
    loadedVideo1.pause();
}


loadedVideo2.onmouseenter = function () {
    loadedVideo2.pause();
    loadedVideo2.muted = false;
    loadedVideo2.play();
}
loadedVideo2.onmouseleave = function () {
    loadedVideo2.muted = true;
    loadedVideo2.pause();
}

loadedVideo3.onmouseenter = function () {
    loadedVideo3.pause();
    loadedVideo3.muted = false;
    loadedVideo3.play();
}
loadedVideo3.onmouseleave = function () {
    loadedVideo3.muted = true;
    loadedVideo3.pause();
}

loadedVideo4.onmouseenter = function () {
    loadedVideo4.pause();
    loadedVideo4.muted = false;
    loadedVideo4.play();
}
loadedVideo4.onmouseleave = function () {
    loadedVideo4.muted = true;
    loadedVideo4.pause();
}

loadedVideo5.onmouseenter = function () {
    loadedVideo5.pause();
    loadedVideo5.muted = false;
    loadedVideo5.play();
}
loadedVideo5.onmouseleave = function () {
    loadedVideo5.muted = true;
    loadedVideo5.pause();
}

loadedVideo6.onmouseenter = function () {
    loadedVideo6.pause();
    loadedVideo6.muted = false;
    loadedVideo6.play();
}

loadedVideo6.onmouseleave = function () {
    loadedVideo6.muted = true;
    loadedVideo6.pause();
}

loadedVideo7.onmouseenter = function () {
    loadedVideo7.pause();
    loadedVideo7.muted = false;
    loadedVideo7.play();
}

loadedVideo7.onmouseleave = function () {
    loadedVideo7.muted = true;
    loadedVideo7.pause();
}




loadedVideo1.onclick = function () {
    window.location.href = "video_details.html?" + video1.videoId;
}
loadedVideo2.onclick = function () {
    window.location.href = "video_details.html?" + video2.videoId;
}
loadedVideo3.onclick = function () {
    window.location.href = "video_details.html?" + video3.videoId;
}
loadedVideo4.onclick = function () {
    window.location.href = "video_details.html?" + video4.videoId;
}
loadedVideo5.onclick = function () {
    window.location.href = "video_details.html?" + video5.videoId;
}
loadedVideo6.onclick = function () {
    window.location.href = "video_details.html?" + video6.videoId;
}
loadedVideo7.onclick = function () {
    window.location.href = "video_details.html?" + video7.videoId;
}




