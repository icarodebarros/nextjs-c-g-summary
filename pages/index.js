import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://www2.recife.pe.gov.br/sites/default/files/styles/imagem_slide_home/public/sol.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/03/dondinho-seturl-30.jpg',
    address: 'Some address 10, 54321 Some City',
    description: 'This is a second meetup!',
  },
];

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
/*export async function getStaticProps() { // Code that runs only in the server
  // fetch data from an API
  
  return { // object created on the build/deployment
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10 // seconds to refresh this obj data
  }
}*/

/* PRE-RENDERING: Server-side Rendering (SSR) */
export async function getServerSideProps(context) { // Code that runs only in the server
  const { req, res } = context; // should only use SSR when you need access to the request prop and/or
  // when you need fresh data for every request. 
  
  // fetch data from an API
  
  return { // object created for every request!
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}

export default HomePage;
