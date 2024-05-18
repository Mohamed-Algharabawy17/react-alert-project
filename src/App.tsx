import "./App.css";
import Alert from "./components/Alert";
import { CircleAlert, Angry, TriangleAlert, CheckCheck , MessageSquareWarning , Ban} from "lucide-react";

function App() {
  return (
    <>
      <Alert
        icon={<Ban className="icon" />}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto et maiores officiis at."
        title="Default Alert"
        type="default-alert"
      />

      <Alert
        icon={<CircleAlert className="icon" />}
        title="Info Alert"
        type="info-alert"
      >
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto et maiores officiis at <a href="/">Info</a>.
        </p>
      </Alert>

      <Alert
        icon={<Angry className="icon" />}
        title="Danger Alert"
        type="error-alert"
      >
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto et maiores officiis at <a href="/">Danger</a>.
        </p>
      </Alert>

      <Alert
        icon={<TriangleAlert className="icon" />}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto et maiores officiis at."
        title="Warning Alert"
        type="warning-alert"
      />

      <Alert
        icon={<CheckCheck className="icon" />}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto et maiores officiis at."
        title="Success Alert"
        type="success-alert"
      />

      <Alert
        icon={<MessageSquareWarning className="icon" />}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto et maiores officiis at."
        title="Note Alert"
        type="note-alert"
      />
    </>
  );
}

export default App;
