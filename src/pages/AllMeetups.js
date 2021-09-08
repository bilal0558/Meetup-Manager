import MeetupList from "../components/Meetup/MeetupList";


const DUMMY_DATA = [
    {
        id : 1,
        title : "This is dummy meetup 1",
        image : "./res/img.jpg",
        address : "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis dolorum sint sunt repellat qui harum aspernatur pariatur. Possimus, saepe."
    },
    {
        id : 2,
        title : "This is dummy meetup 2",
        image : "./res/img.jpg",
        address : "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis dolorum sint sunt repellat qui harum aspernatur pariatur. Possimus, saepe."
    },
    {
        id : 3,
        title : "This is dummy meetup 3",
        image : "./res/img.jpg",
        address : "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis dolorum sint sunt repellat qui harum aspernatur pariatur. Possimus, saepe."
    },
]

function AllMeetupsPage(){
    return(
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups = {DUMMY_DATA}/>
        </section>
    )
}

export default AllMeetupsPage;