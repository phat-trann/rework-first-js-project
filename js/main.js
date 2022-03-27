const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

class Player {
    constructor(id, address) {
        this.id = id;
        this.address = address;
    }

    getImage() {
        return `./img/players/${this.id}.jpg`;
    }

    getAddress() {
        return this.address;
    }
}

const playerArray = [
    new Player('phat', 'Nam Định'),
    new Player('duong', 'Thanh Hoá'),
    new Player('hiep', 'KonTum'),
    new Player('duongv', 'Hà Nam'),
    new Player('minh', 'Lâm Đồng'),
    new Player('duy', 'Vĩnh Long'),
    new Player('thang', 'Quận 2'),
    new Player('anh', 'Gò Vấp'),
    new Player('son-B', 'Hà Tĩnh'),
    new Player('chau', 'Bình Định'),
    new Player('duc', 'Nghệ An'),
    new Player('hau', 'Bến Tre'),
    new Player('qduy', 'Lâm Đồng')
];
let selectedIndex = [];

const randomTwoPlayers = (teamLaneIg, teamLaneIt, lane) => {
    return new Promise((resolve) => {
        let playerIg = playerArray[random(selectedIndex, playerArray)];
        let playerIt = playerArray[random(selectedIndex, playerArray)];
        let timeOut = setTimeout(() => {
            teamLaneIg.querySelector('.lane--image img').src = playerIg.getImage();
            teamLaneIt.querySelector('.lane--image img').src = playerIt.getImage();
            teamLaneIg.querySelector('.lane--address').innerText = playerIg.getAddress();
            teamLaneIt.querySelector('.lane--address').innerText = playerIt.getAddress();
            lane.classList.add('poster--lane__selected');
            resolve();
            clearTimeout(timeOut);
        }, 150);
    })
}

const loading = () => {
    $('.poster--lanes').classList.add('poster--lanes__loading');

    return new Promise(resolve => {
        let timeOut = setTimeout(() => {
            $('.poster--lanes').classList.remove('poster--lanes__loading');
            resolve();
            clearTimeout(timeOut);
        }, 1500);
    })
}

const randomPlayers = async () => {
    let allLanes = $$('.poster--lane');

    selectedIndex = [];
    $('.poster--lanes').classList.remove('poster--lanes__done');
    allLanes.forEach((lane) => {
        lane.classList.remove('poster--lane__selected');
    });

    await loading();

    for (let lane of allLanes) {
        let teamLane = lane.querySelectorAll('.poster--lane__team');
        let [teamLaneIg, teamLaneIt] = teamLane;

        await randomTwoPlayers(teamLaneIg, teamLaneIt, lane);
    }

    $('.poster--lanes').classList.add('poster--lanes__done');
}

function random(selectedIndex, playerArray) {
    let playerArrayLength = playerArray.length;
    let randomNumber = Math.floor(Math.random() * playerArrayLength);

    while (selectedIndex.indexOf(randomNumber) !== -1) {
        randomNumber = Math.floor(Math.random() * playerArrayLength);
    }

    selectedIndex.push(randomNumber);

    return randomNumber;
}

randomPlayers();

document.addEventListener('keyup', (e) => {
    if (e.code === 'F4' && $('.poster--lanes__done')) {
        e.preventDefault();

        randomPlayers();
    }
});
