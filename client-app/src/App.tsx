import React, { useEffect, useState } from "react";
import "./App.css";
import { Header, List } from "semantic-ui-react";
import axios from "axios";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/activities", {});
        console.log(data);
        setActivities(data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Header as="h2" content="Social Network" icon="user" />
      <List>
        {activities.map((activity: any) => {
          return <List.Item key={activity.id}>{activity.title}</List.Item>;
        })}
      </List>
    </div>
  );
}

export default App;
