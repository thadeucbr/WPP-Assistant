export default async function sendMessage(phoneNumber, message) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "args": {
      "to": phoneNumber,
      "content": message
    }
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  const response = fetch("http://192.168.0.212:8321/sendText", requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .catch((error) => console.error(error));

    return response
}