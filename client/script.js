const loading = document.getElementById("loading")
const outputBox = document.getElementById("outputBox")
const result = document.getElementById("result")

async function generate() {
  const name = document.getElementById("name").value
  const company = document.getElementById("company").value
  const role = document.getElementById("role").value
  const skills = document.getElementById("skills").value

  if (!name || !company || !role || !skills) {
    alert("Please fill all fields")
    return
  }

  loading.classList.remove("hide")
  outputBox.classList.add("hide")

  const res = await fetch("http://localhost:5000/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, company, role, skills })
  })

  const data = await res.json()

  result.value = data.result

  loading.classList.add("hide")
  outputBox.classList.remove("hide")
}

function copyText() {
  navigator.clipboard.writeText(result.value)
  alert("Copied to clipboard")
}