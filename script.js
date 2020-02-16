const car = document.getElementById("car")
const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");
const fuel = document.getElementById("fuel");
const upCar = 90
const downCar = 270
const leftCar = 0
const rightCar = 180





let carObj = {
    tank: 50,
    road: 0,
    y: 100,
    x: 100,
    showName: function () {
        console.log('seiko');
    },
    showTank: function () {
        fuel.innerHTML = carObj.tank;

    }
};

const carReposition = (positionChangeX, positionChangeY, rotation) => {
    if (carObj.tank <= 0) {
        alert("Get the Fuel!!");
    } else {
        carObj.y += positionChangeY;
        carObj.x += positionChangeX;
        car.style.top = `${carObj.y}px`;
        car.style.left = `${carObj.x}px`;
        car.style.transform = `rotate(${rotation}deg)`;
        carObj.tank -= 1;
        carObj.road += 3;

        if (carObj.x < 94 && carObj.y < 90) {
            carObj.tank = 50;
        }


    }
    console.log(carObj.tank);





}

function enter(e) {
    if (e.keyCode == 39) {
        carReposition(3, 0, rightCar)
    } else if (e.keyCode == 37) {
        carReposition(-3, 0, leftCar)
    } else if (e.keyCode == 40) {
        carReposition(0, 3, downCar)
    } else if (e.keyCode == 38) {
        carReposition(0, -3, upCar)
    }
}

carReposition(0, 0, leftCar);



up.addEventListener("click", () => {
    carReposition(0, -3, upCar)
});
down.addEventListener("click", () => {
    carReposition(0, 3, downCar)
});
left.addEventListener("click", () => {
    carReposition(-3, 0, leftCar)
});
right.addEventListener("click", () => {
    carReposition(3, 0, rightCar)
});

window.addEventListener('keydown', enter);



console.log(carObj);


//samochod ma: 
//spalac benzyne, ma bak 50 litrow, 
// po wjechaniu na stacje ma tankowac do momentu wyjechania ze stacji