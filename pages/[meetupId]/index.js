import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  // const router = useRouter();
  // console.log(router.query.meetupId)

  return <MeetupDetail
    image={props.meetupData.image}
    title={props.meetupData.title}
    address={props.meetupData.address}
    description={props.meetupData.description}
  />;
}

export async function getStaticPaths() { // since this is a dynamic page (path), we need this func to describe all possible meetupId values!

  const client = await clientPromise;
  const db = client.db('meetups');
  const meetupsCollection = db.collection('meetups');
  const meetupsResult = await meetupsCollection.find({}, { _id: 1 }).toArray();

  return {
    fallback: false, // false => should then list all possibilities. true => list some paths (most popular) to pre-rendering
    paths: meetupsResult.map(meetup => ({ params: { meetupId: meetup._id.toString() } }))
    // paths: [
    //   {
    //     params: { meetupId: 'm1' },
    //   },
    //   {
    //     params: { meetupId: 'm2' },
    //   }
    // ]
  }
}

export async function getStaticProps(context) {
  // fetch API data

  const { meetupId } = context.params;

  const client = await clientPromise;
  const db = client.db('meetups');
  const meetupsCollection = db.collection('meetups');
  const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image
      }
    }
  }
}

export default MeetupDetails;
