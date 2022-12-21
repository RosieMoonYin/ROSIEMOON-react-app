import { useState } from "react";
import JournalList from "./JournalList";

const About = () => {
  const [Journal, setJournal] = useState([
    { title: 'Merging with machine', body: 'lorem ipsum...', author: 'RosiemoonYin', id: 1 },
    { title: 'The issue with ransome attacks', body: 'lorem ipsum...', author: 'RosiemoonYin', id: 2 },
    { title: 'Turing Test, fooling the human', body: 'lorem ipsum...', author: 'RosiemoonYin', id: 3 }
  ])

  return (
    <div className="about">
        <JournalList blogs={Journal}/>
    </div>
  );
}

export default About;


