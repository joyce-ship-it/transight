export default function Login() {
  const handleLogin = () => {
    fetch(`https://apitest.fleet.transight.net/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username: "superadmin",
        password: "fleet@123",
      }),
    })
      .then((res) =>
        res.json().then((data) => ({
          status: res.status,
          data,
        })),
      )
      .then(({ status, data }) => {
        console.log("Status:", status);
        console.log("Response:", data);
      })
      .catch((err) => console.error("Error:", err));
  };

  return <button onClick={handleLogin}>Test Login</button>;
}
