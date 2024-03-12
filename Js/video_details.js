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
    title: "Calm Oceans of the world",
    source: "/videos/pexels-kelly-19215250.mp4",
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam velit eaque harum voluptatum in, adipisci fuga iste, temporibus quaerat dignissimos pariatur aperiam illum vitae non delectus sunt autem mollitia facilis!",
    videoId: "fggfhhdhdu"
}


let loadedWindowVideoId = window.location.search;
loadedWindowVideoId = decodeURIComponent(loadedWindowVideoId).substring(1);
let detailVideo = document.getElementById("detailVideo");
let title = document.getElementById("title");
let detail = document.getElementById("detail");
if (loadedWindowVideoId == video1.videoId) {
    detailVideo.src = video1.source;
    title.innerText = video1.title;
    detail.innerText = video1.details;
}
else if (loadedWindowVideoId == video2.videoId) {
    detailVideo.src = video2.source;
    title.innerText = video2.title;
    detail.innerText = video2.details;
}
else if (loadedWindowVideoId == video3.videoId) {
    detailVideo.src = video3.source;
    title.innerText = video3.title;
    detail.innerText = video3.details;
}
else if (loadedWindowVideoId == video4.videoId) {
    detailVideo.src = video4.source;
    title.innerText = video4.title;
    detail.innerText = video4.details;
}

else if (loadedWindowVideoId == video5.videoId) {
    detailVideo.src = video5.source;
    title.innerText = video5.title;
    detail.innerText = video5.details;
}

else if (loadedWindowVideoId == video6.videoId) {
    detailVideo.src = video6.source;
    title.innerText = video6.title;
    detail.innerText = video6.details;
}

else if (loadedWindowVideoId == video7.videoId) {
    detailVideo.src = video7.source;
    title.innerText = video7.title;
    detail.innerText = video7.details;
}


