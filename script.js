let monitoring = false;
let time = 0;
let timer;

function startMonitoring() {
  if (!monitoring) {
    monitoring = true;
    document.getElementById("status").innerText = "Active";
    document.getElementById("status").className = "badge active";

    timer = setInterval(() => {
      time++;
    }, 1000);
  }
}

function addContact() {
  const name = cname.value;
  const phone = cphone.value;
  const relation = crelation.value;

  if (name === "" || phone === "") {
    alert("Enter name and phone number");
    return;
  }

  const li = document.createElement("li");
  li.innerText = `${name} (${relation}) - ${phone}`;
  contactList.appendChild(li);

  cname.value = "";
  cphone.value = "";
  crelation.value = "";
}
