import './Floorplan.css'
import Room from './components/Room';
import {useState} from "react";

function Floorplan() {
    const [availability, setAvailabilty] = useState({
        "3.23": {
            capacity: 1,
            people: ["Jamie"],
            className: "one",
        },
        "3.22": {
            capacity: 2,
            people: ["Jamie, Rein"],
            className: "two",
        },
        "3.21": {
            capacity: 2,
            people: ["Jamie"],
            className: "three",
        },
        "3.20": {
            capacity: 2,
            people: ["Jamie"],
            className: "four",
        },
        "3.19": {
            capacity: 2,
            people: ["Jamie"],
            className: "five",
        },
        "3.18": {
            capacity: 2,
            people: ["Jamie"],
            className: "six",
        },
        "3.14": {
            capacity: 1,
            people: ["Jamie"],
            className: "meetingroom",
        },
        "3.13": {
            capacity: 1,
            people: ["Jamie"],
            className: "eight",
        },
        "3.12": {
            capacity: 1,
            people: ["Jamie"],
            className: "sixteen",
        },
        "3.11": {
            capacity: 1,
            people: ["Jamie"],
            className: "seventeen",
        },
        "3.10": {
            capacity: 1,
            people: ["Jamie"],
            className: "nineteen",
        },
        "3.08": {
            capacity: 1,
            people: ["Jamie"],
            className: "fiveteen",
        },
        "3.07": {
            capacity: 2,
            people: ["Jamie"],
            className: "fourteen",
        },
        "3.06": {
            capacity: 2,
            people: ["Jamie"],
            className: "thirteen",
        },
        "secretariat": {
            capacity: 3,
            people: ["Jamie"],
            className: "secretariat",
        },
        "3.04": {
            capacity: 2,
            people: ["Jamie"],
            className: "twelve",
        },
        "3.03": {
            capacity: 1,
            people: ["Jamie"],
            className: "eleven",
        },
        "3.02": {
            capacity: 2,
            people: ["Jamie"],
            className: "ten",
        },
        "3.01": {
            capacity: 1,
            people: ["Jamie"],
            className: "nine",
        },

    });

    return (
        <div className="grid-container">
            <Room className="entree" roomName="entree"></Room>
            <Room className={availability["3.23"].className} capacity={availability["3.23"].capacity} people={availability["3.23"].people} roomName="3.23"></Room>
            <Room className={availability["3.22"].className} capacity={availability["3.22"].capacity} people={availability["3.22"].people} roomName="3.22"></Room>
            <Room className={availability["3.21"].className} capacity={availability["3.21"].capacity} people={availability["3.21"].people} roomName="3.21"></Room>
            <Room className={availability["3.20"].className} capacity={availability["3.20"].capacity} people={availability["3.20"].people} roomName="3.20"></Room>
            <Room className={availability["3.19"].className} capacity={availability["3.19"].capacity} people={availability["3.19"].people} roomName="3.19"></Room>
            <Room className={availability["3.18"].className} capacity={availability["3.18"].capacity} people={availability["3.18"].people} roomName="3.18"></Room>
            <Room className={availability["3.14"].className} capacity={availability["3.14"].capacity} people={availability["3.14"].people} roomName="3.14"></Room>
            <Room className={availability["3.13"].className} capacity={availability["3.13"].capacity} people={availability["3.13"].people} roomName="3.13"></Room>
            <Room className={availability["3.12"].className} capacity={availability["3.12"].capacity} people={availability["3.12"].people} roomName="3.12"></Room>
            <Room className={availability["3.11"].className} capacity={availability["3.11"].capacity} people={availability["3.12"].people} roomName="3.11"></Room>
            <Room className={availability["3.10"].className} capacity={availability["3.10"].capacity} people={availability["3.10"].people} roomName="3.10"></Room>
            <Room className={availability["3.08"].className} capacity={availability["3.08"].capacity} people={availability["3.08"].people} roomName="3.08"></Room>
            <Room className={availability["3.07"].className} capacity={availability["3.07"].capacity} people={availability["3.07"].people} roomName="3.07"></Room>
            <Room className={availability["3.06"].className} capacity={availability["3.06"].capacity} people={availability["3.06"].people} roomName="3.06"></Room>
            <Room className={availability["secretariat"].className} capacity={availability["secretariat"].capacity} people={availability["secretariat"].people} roomName="3.05"></Room>
            <Room className={availability["3.04"].className} capacity={availability["3.04"].capacity} people={availability["3.04"].people} roomName="3.04"></Room>
            <Room className={availability["3.03"].className} capacity={availability["3.03"].capacity} people={availability["3.03"].people} roomName="3.03"></Room>
            <Room className={availability["3.02"].className} capacity={availability["3.02"].capacity} people={availability["3.02"].people} roomName="3.02"></Room>
            <Room className={availability["3.01"].className} capacity={availability["3.01"].capacity} people={availability["3.01"].people} roomName="3.01"></Room>
            <Room className="openspace" capacity={0} people={[" "]}></Room>
        </div>
    )
}

// "eight eight sixteen seventeen eighteen fiveteen"
// "meetingroom meetingroom openspace openspace fourteen fourteen"
// "six six openspace openspace thirteen thirteen"
// "five five openspace openspace secretariat secretariat"
// "four four openspace openspace twelve twelve"
// "three three openspace openspace eleven eleven"
// "two two openspace openspace ten ten"
// "one one openspace openspace nine nine"
// "entree entree entree entree entree entree";

export default Floorplan;