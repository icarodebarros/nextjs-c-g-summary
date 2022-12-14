//import { MongoClient } from 'mongodb'; // since this is a backend dep, dext will remove from bundle
import clientPromise from '../lib/mongodb';

import Head from 'next/head';
import { Fragment } from 'react';

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name='description' content='Browse a huge list of highly active React meetups!' />
      </Head> 
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

/* PRE-RENDERING: Static Site Generation (SSG) */
export async function getStaticProps() { // Code that runs only in the server
  // fetch data from an API

  const client = await clientPromise;
  const db = client.db('meetups');
  const meetupsCollection = db.collection('meetups');
  const result = await meetupsCollection.find().toArray();  
  const meetups = result.map(meetup => ({
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
    id: meetup._id.toString()
  })); 
  
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
