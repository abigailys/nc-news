function dateFormatter(dateString) {
//   const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString() + " " + new Date(dateString).toLocaleTimeString("en-US");
}

export default dateFormatter;