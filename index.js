// Code your solution in this file!
const scuberHq = 42;
let pickup;
function distanceFromHqInBlocks(pickup){
    if (pickup > scuberHq) {
        return pickup - scuberHq;
    } else return scuberHq - pickup;
}
distanceFromHqInBlocks(pickup)


function distanceFromHqInFeet(pickup){
    return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet(start, destination){
    if (start > destination) {
        return (start - destination) * 264;
    } else
        return (destination - start) * 264;
}
distanceTravelledInFeet(start, destination);


function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if ( distance <= 400){
        return 0;
    }else if (distance > 400 && distance< 2000){
        return (distance - 400) * 0.02
    }else if (distance >= 2000 && distance < 2500){
        return 25;
    }else if (distance >=2500){
        return 'cannot travel that far';
    }
}
calculatesFarePrice(start, destination);