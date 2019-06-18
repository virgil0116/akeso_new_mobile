var defaultDoctor = ''
try {
  if (localStorage.doctor) {
    defaultDoctor = localStorage.doctor
  }
} catch (e) {
  console.log(e)
}

export default {
  doctor: defaultDoctor
}
