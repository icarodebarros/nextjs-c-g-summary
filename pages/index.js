import { MongoClient } from 'mongodb'; // since this is a backend dep, dext will remove from bundle

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   // send http req
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  // return <MeetupList meetups={loadedMeetups} />;

  return <MeetupList meetups={props.meetups} />;
}

/* PRE-RENDERING: Static Site Generation (SSG) */
export async function getStaticProps() { // Code that runs only in the server
  // fetch data from an API

  const client = await MongoClient.connect(
    'mongodb+srv://<username>:<password>@cluster0.gafjw.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const result = await meetupsCollection.find().toArray();
  
  const meetups = result.map(meetup => ({
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
    id: meetup._id.toString()
  }));  

  client.close();
  
  return { // object created on the build/deployment
    props: {
      meetups: meetups
    },
    revalidate: 10 // seconds to refresh this obj data
  }
}

/* PRE-RENDERING: Server-side Rendering (SSR) */
/*export async function getServerSideProps(context) { // Code that runs only in the server
  const { req, res } = context; // should only use SSR when you need access to the request prop and/or
  // when you need fresh data for every request. 
  
  // fetch data from an API
  
  return { // object created for every request!
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}*/

export default HomePage;
