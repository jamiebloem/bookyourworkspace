import Badge from 'react-bootstrap/Button';
import './Room.css'

function Room(props) {
    console.log(props)


    return (
        <div className={props.className + ' room'}>{props.roomName}
            {props.capacity &&
            <Badge variant="secondary" className="room__capacity">{props.people?.length}/{props.capacity}</Badge>}
            {props.people && props.people.map((person) => {
                return <> <Badge pill variant="light">
                    {person}
                </Badge>{' '}</>
            })}
        </div>

    )


}

export default Room;