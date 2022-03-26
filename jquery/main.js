$(document).ready(main);

function main() {
    macdinh();
}

function macdinh() {

    random_player();
    var stop = 0;
    var t;

    $('#click').click(function () {
        if (stop == 0) {
            t = setInterval(random_player, 100);
            $('#click').text("Stop");
            stop = 1;
        } else {
            clearInterval(t);
            $('#click').text("Play");
            stop = 0;
        }
    })
}

function random_player() {
    var phat = {
        name: "phat",
        add: "Nam Định",

    };
    var duong = {
        name: "duong",
        add: "Thanh Hoá",

    };
    var hiep = {
        name: "hiep",
        add: "KonTum",

    };
    var duongvat = {
        name: "duongv",
        add: "Hà Nam",

    };
    var minh = {
        name: "minh",
        add: "Lâm Đồng",

    };
    var duy = {
        name: "duy",
        add: "Vĩnh Long",

    };
    var thang = {
        name: "thang",
        add: "Quận 2",

    };
    var duc = {
        name: "duc",
        add: "Nghệ An",

    };
    var anh = {
        name: "anh",
        add: "Gò Vấp",

    };
    var qduy = {
        name: "qduy",
        add: "Bình Dương",
    };
    var hau = {
        name: "hau",
        add: "An Giang"
    }
    var sonB = {
        name: 'son-B',
        add: "Hà Tĩnh"
    }
    var chau = {
        name: 'chau',
        add: 'Bình Định'
    }
    var mang = new Array();
    mang.push(phat, duong, sonB, duongvat, minh, duy, thang, chau, anh, hiep);
    var mangchinh = new Array();
    var mangso = new Array();

    for (var i = 0; i <= 9; i++)
        random(mangso);
    for (var i = 0; i <= 9; i++) {
        mangchinh[i] = mang[mangso[i]];
    }

    for (var i = 0; i <= 9; i++) {
        if (i < 5) {
            $('.img')[i].style.background = "url(./img/" + mangchinh[i].name + ".jpg) 50% no-repeat";

        } else {
            $('.img')[i].style.background = "url(./img/" + mangchinh[i].name + "-B.jpg) 50% no-repeat";
        }

    }

    chonvitri(mangchinh);

    $("#oke").css("display", "initial");

}

function random(mangso) {
    var a;
    do {
        a = Math.floor(Math.random() * 10);
    }
    while (kiemtra(mangso, a) === false);
    mangso.push(a);

}

function kiemtra(mangso, a) {
    for (var i = 0; i <= mangso.length; i++) {
        if (mangso[i] == a) {
            return false;
        }
    }
    return true;
}

function chonvitri(mangchinh) {

    $('#oke').click(function () {
            for (let i = 0; i <= 4; i++) {
                $('.img-A')[i].style.background = "url(./img/" + mangchinh[i].name + ".jpg) 50% no-repeat";
                $('.A-default')[i].innerHTML = mangchinh[i].add;

                $('.img-B')[i].style.background = "url(./img/" + mangchinh[i + 5].name + "-B.jpg) 50% no-repeat";
                $('.B-default')[i].innerHTML = mangchinh[i + 5].add;
            }
            $(".final-poster").slideDown();

    })
}
