import MeetUpItem from "./MeetupItem";
import styles from "./MeetupList.module.css"

function MeetupList(props){
    return(
        <ul className={styles.meetupList}>
            {
                //Using map function to return every single item of the data received.
                props.meetups.map(function(currMeetup){
                    return(
                        <MeetUpItem meetup={currMeetup}/>
                    )
                })
            }
        </ul>
    );
}

export default MeetupList;