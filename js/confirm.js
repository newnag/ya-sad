// ช่อง date
$('#date').flatpickr({
  dateFormat: "d-m-Y",
  minDate: "today",
  disableMobile: "true"
})

// ช่อง time
$('#time').flatpickr({
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24hr: true,
  disableMobile: "true"
})

