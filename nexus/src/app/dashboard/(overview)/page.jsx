import { Console } from 'console';
import dynamic from 'next/dynamic'


async function fetchData() {
  try {
    const response = await fetch('http://127.0.0.1:3000/api/userdata?email=john@example.com');
    const data = await response.json();
    console.log(data.user.email)
    return data.email;
  } catch (error) {
    console.error('Error:', error);
  }
}

const [message, setMessage] = useState("Loading")
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/home").then(
      response => response.json()
    ).then(
      data => {
        setMessage(data.message)
        setPeople(data.people)
      }
    )
  }, [])



const NoSSR = dynamic(() => { ssr: false })

export default function Dashboard() {
  
  let info = fetchData();
  // useEffect(() => {
  //   fetch("/api/userdata/?email=john@example.com")
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log("Data received:", data);
  //       setMessage(data.email);
  //       console.log("Message:", message)
  //     })
  //     .catch(error => {
  //       console.error("Error fetching data:", error);
  //       setMessage("Error fetching data");
  //     });
  // }, []);

  return (
    <div className="rounded-lg space-y-6 p-10 pb-16 md:block md:h-svh bg-gradient-to-tr from-white to-gray-200" suppressHydrationWarning >
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome! {info}
        </p>
      </div>

      <div className="shrink-0 bg-border h-[1px] w-full"></div>
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        {/* Navigation links */}
      </div>
    </div>
  );
}
