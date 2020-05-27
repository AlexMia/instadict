var postPhotos = [
    "https://adlington.co.uk/wp-content/uploads/2019/01/Formby_021-375x375.jpg",
    "https://www.landisconstruction.com/wp-content/uploads/2017/09/DSC6039b_Smaller-375x375.jpg",
    "https://www.comeandseeitaly.com/wp-content/uploads/2019/05/PISTOIA-375x375.jpg",
    "https://www.castelrotto.info/wp-content/uploads/grid-image-kastelruth-375x375.jpg",
    "https://berlin-enjoy.com/wp-content/uploads/2018/07/Stand-up-paddling-in-berlin-enjoy-375x375.jpg",
    "https://irishvintagescene.ie/wp-content/uploads/2016/03/Commercial-375x375.jpg",
    "https://www.stcski.com/wp-content/uploads/2016/12/Hotel-schlosshof-ischgl-375x375.jpg",
    "https://www.comeandseeitaly.com/wp-content/uploads/2019/05/VENEZIA-375x375.jpg",
];

var usernames = [
    "wellamigo",
    "tigernode",
    "candlepogo",
    "latterhell",
    "agilecanes",
    "jreelfin",
    "jetcolles",
    "labtrait",
];

var users = [
    "https://procedural-generation.isaackarth.com/tumblr_files/tumblr_pnpkvnwpWI1uo5d9jo1_1280.jpg",
    "https://i.redd.it/1opazkkfhmg21.jpg",
    "https://i.redd.it/hcpu7df05tg21.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9hXCyMktlrydWhcG1pSQ7ZLNjyNC4O7J6kxSw5GhLKqRN4tBB&usqp=CAU",
    "https://netboardme.s3.amazonaws.com/published/15763/files/s_f5d830677f1d3d34164c974017e8ce42.png",
    "https://www.beekman-foundation.com/wp-content/uploads/2020/04/this-person-does-not-exist-beekman-foundation-07.png",
    "https://www.thepassivevoice.com/wp-content/uploads/2020/05/a1-2-640x640.jpg",
    "https://i2.wp.com/www.PartisanIssues.com/wp-content/uploads/2019/02/AI-Generated-Face-2.jpg?fit=700%2C700&ssl=1",
    "https://www.remi-net.uk/media/project_image/image1.jpg",
];

var captions = [
    "I will continue my life the way I dream it, and not the way others want it to be",
    "Go out and chase your dreams no matter how crazy it looks",
    "I haven’t changed. I grew up. Maybe you should give it a try sometime",
    "A champion is someone who gets up when he can’t",
    "It won’t be easy, but I’m down for the ride",
    "I swear this life is like the sweetest thing I’ve ever known",
    "Be happy in front of people who don’t like you: it kills them",
];

var userInfo = {
    "Profile Pic":
        "https://scontent-mxp1-1.cdninstagram.com/v/t51.2885-19/s320x320/65835514_348347605857080_3481760030716329984_n.jpg?_nc_ht=scontent-mxp1-1.cdninstagram.com&_nc_ohc=qqmYe_QuAjEAX9csfzi&oh=bb2fb19865a7b27f3e6be794405b7284&oe=5EF7F7A1",
    Username: "alexmia_",
};

var total = 0;
const nPost = 6;

function loadPostsHome() {
    for (let i = 0; i < arguments[0]; i++) {
        var post = $('<div class="post"></div>');
        var pTopBar = $(`<div class="pTopBar">
        <div class="user">
        <img src="${users[i]}" class="userPic">
        <h4>${usernames[i]}</h4>
        </div>
        <img src="images/moreIcon.svg" alt="More" class="white">
        </div>`);
        var pContent = $('<div class="pContent"></div>');
        var pCaption = $(
            `<div class="pCaption"><h5 class="cName">${usernames[i]} </h5><h5 class="cText">${captions[i]}</h5></div>`
        );
        var pBottomBar = $(`<div class="pBottomBar">
            <div class="left">
            <img src="images/likeIcon.svg" alt="Like" class="white">
            <img src="images/commentIcon.svg" alt="Comment" class="white">
            <img src="images/directIcon.svg" alt="Share" class="white">
            </div>
            <img src="images/saveIcon.svg" alt="Save" class="white">
            </div>`);

        $(pContent).css("background-image", `url(${postPhotos[i]})`);

        var pGrid = $(`<div class="col1">
            <div class="numBox" num="1"></div>
            <div class="numBox" num="2"></div>
            </div>
            <div class="col2">
        <div class="numBox" num="4"></div>
        <div class="numBox" num="8"></div>
        </div>`);

        $(post).append(pTopBar);
        $(post).append(pGrid);
        $(post).append(pContent);
        $(post).append(pBottomBar);
        $(post).append(pCaption);

        $(".content").append(post);
    }
}

function loadStory(user, username, hasStory) {
    var story = $(`<div class="story">
    <div class="storyPic">
            <img src="${user}" alt="">
            <h5>${username}</h5>
            </div>
            </div>`);
    $(".stories").append(story);
    if (!hasStory) {
        $(".storyPic").children().first().css({ height: "56px" });
        $(".storyPic").css("padding", "0px");
    }
}

function loadStories() {
    loadStory(userInfo["Profile Pic"], "Your story", false);
    for (let i = 0; i < arguments[0]; i++) {
        loadStory(users[i], usernames[i], true);
    }
}

async function profile() {
    $("#homeBtn").attr("src", "images/homeNotSelectedIcon.svg");
    $("#userBtn").attr("src", "images/profileSelectedIcon.svg");
    $(".topBar").load("profileTopBar.html");
    await new Promise(r => setTimeout(r, 150));
    $(".profileUname").text(userInfo["Username"]);
    $(".content").load("profileContent.html")
    await new Promise(r => setTimeout(r, 250));
    $(".predBio").text(`You will choose the number ${total}`);
    total = 0;
    for (var i = 0; i < nPost * 4; i++) {
        $(".numBox")
            .eq(i)
            .attr("num", Math.abs(Number($(".numBox").eq(i).attr("num"))));
    }
}

async function home() {
    $(".bottomBar").load("bottomNav.html");
    $(".topBar").load("homeTopBar.html");
    $(".content").load("homeContent.html")
    $("#homeBtn").attr("src", "images/homeSelectedIcon.svg");
    $("#userBtn").attr("src", "images/profileNotSelectedIcon.svg");
    await new Promise(r => setTimeout(r, 200));
    loadPostsHome(nPost);
    await new Promise(r => setTimeout(r, 150));
    getUserInfo(userInfo["Username"]);
    await new Promise(r => setTimeout(r, 400));
    $(".numBox").on("click", function (e) {
        total += Number($(e.target).attr("num"));
        $(`.numBox[num=${$(e.target).attr("num")}]`).attr(
            "num",
            -Number($(e.target).attr("num"))
        );
    });
}

$(async function () {
    prepareOrder();
    home();
    

    var tId = 0;

    $("#addBtn")
        .on("mousedown touchstart", function (e) {
            tId = setTimeout(function () {
                alert("Secret cleared");
                total = 0;
                for (var i = 0; i < nPost * 4; i++) {
                    $(".numBox")
                        .eq(i)
                        .attr(
                            "num",
                            Math.abs(Number($(".numBox").eq(i).attr("num")))
                        );
                }
            }, 2500);
        })
        .bind("mouseup mouseleave touchend", function () {
            clearTimeout(tId);
        });
    $(".user").attr("src", userInfo["Profile Pic"]);
});

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function prepareOrder() {
    shuffle(postPhotos);
    shuffle(usernames);
    shuffle(users);
    shuffle(captions);
}

function getUserInfo(username) {
    if (localStorage.getItem("userInfo") == null) {
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
    } else {
        userInfo = JSON.parse(localStorage.getItem("userInfo"));
    }
    loadStories(6);
}
